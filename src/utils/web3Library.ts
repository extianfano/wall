import { ethers } from 'ethers';
import { BigNumber } from '@ethersproject/bignumber';
import { SUPPORTED_NETWORKS } from '../config/networks';

export type ExtendedWeb3Provider = ethers.providers.Web3Provider & {
  utils: {
    formatEther: (wei: BigNumber) => string;
    parseEther: (ether: string) => BigNumber;
  };
};

let libraryInstance: ExtendedWeb3Provider | null = null;
let isInitializing = false;
let initializationPromise: Promise<void> | null = null;

export const initializeLibrary = async (provider: any): Promise<ExtendedWeb3Provider> => {
  if (libraryInstance) {
    return libraryInstance;
  }

  if (isInitializing && initializationPromise) {
    await initializationPromise;
    return libraryInstance!;
  }

  isInitializing = true;
  initializationPromise = new Promise(async (resolve, reject) => {
    try {
      console.log('Initializing Web3 library...');
      
      // Check if we're on mobile
      const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
      console.log('Platform detected:', { isMobile });
      
      let provider;
      
      if (isMobile) {
        // For mobile, use the injected provider directly
        if (!window.ethereum) {
          throw new Error('No Ethereum provider available on mobile');
        }
        provider = new ethers.providers.Web3Provider(window.ethereum as any);
      } else {
        // For desktop, use Infura for reads and injected provider for writes
        const infuraProvider = new ethers.providers.JsonRpcProvider(
          'https://mainnet.infura.io/v3/f77ca27a806f41b48899c2dd1bd84117'
        );
        
        const web3Provider = new ethers.providers.Web3Provider(window.ethereum as any);
        
        provider = new ethers.providers.FallbackProvider([
          {
            provider: infuraProvider,
            priority: 1,
            stallTimeout: 1000,
          },
          {
            provider: web3Provider,
            priority: 2,
            stallTimeout: 1000,
          }
        ]);
      }
      
      const extendedProvider = provider as ExtendedWeb3Provider;
      extendedProvider.utils = {
        formatEther: (wei: BigNumber) => ethers.utils.formatEther(wei),
        parseEther: (ether: string) => ethers.utils.parseEther(ether)
      };
      
      libraryInstance = extendedProvider;
      
      let retryCount = 0;
      const maxRetries = 10;
      
      while (retryCount < maxRetries) {
        try {
          await libraryInstance.getNetwork();
          console.log('Web3 library initialized successfully');
          resolve();
          return;
        } catch (error) {
          console.log(`Waiting for provider to be ready (attempt ${retryCount + 1}/${maxRetries})...`);
          retryCount++;
          if (retryCount < maxRetries) {
            await new Promise(r => setTimeout(r, 2000));
          }
        }
      }
      
      throw new Error('Provider failed to initialize after maximum retries');
    } catch (error) {
      console.error('Error initializing Web3 library:', error);
      reject(error);
    } finally {
      isInitializing = false;
      initializationPromise = null;
    }
  });

  return libraryInstance!;
};

export const getLibrary = (): ExtendedWeb3Provider | null => {
  return libraryInstance;
};

export const resetLibrary = () => {
  libraryInstance = null;
  isInitializing = false;
  initializationPromise = null;
}; 