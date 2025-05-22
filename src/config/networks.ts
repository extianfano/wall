/**
 * Network Configuration and RPC URLs
 * 
 * This file contains all network-related configurations including:
 * 1. RPC URLs for different networks
 * 2. Infura configuration
 * 3. Network metadata (chainId, blockExplorer, etc.)
 * 
 * To update RPC URLs:
 * 1. For Infura: Update the INFURA_CONFIG.projectId with your new project ID
 * 2. For other networks: Update the environment variables in your .env file
 * 
 * Note: The fallback URLs are public RPCs that may have rate limits.
 * For production, it's recommended to use your own RPC providers.
 */

import { Network } from '../types';

// Debug log the environment variables
console.log('Environment RPC URLs:', {
  ethereum: process.env.REACT_APP_ETHEREUM_RPC_URL,
  bsc: process.env.REACT_APP_BSC_RPC_URL,
  polygon: process.env.REACT_APP_POLYGON_RPC_URL,
  avalanche: process.env.REACT_APP_AVALANCHE_RPC_URL
});

/**
 * Infura Configuration
 * 
 * To update Infura URLs:
 * 1. Get your project ID from https://infura.io
 * 2. Replace the projectId below
 * 3. The URLs will automatically update
 * 
 * Current project ID: f77ca27a806f41b48899c2dd1bd84117
 * Expiry: Check your Infura dashboard
 */
export const INFURA_CONFIG = {
  projectId: 'f77ca27a806f41b48899c2dd1bd84117',
  mainnet: `https://mainnet.infura.io/v3/f77ca27a806f41b48899c2dd1bd84117`,
  sepolia: `https://sepolia.infura.io/v3/f77ca27a806f41b48899c2dd1bd84117`,
  goerli: `https://goerli.infura.io/v3/f77ca27a806f41b48899c2dd1bd84117`
};

/**
 * Supported Networks Configuration
 * 
 * Each network has:
 * - name: Display name
 * - chainId: Network identifier
 * - rpcUrl: RPC endpoint (uses env var or falls back to public RPC)
 * - blockExplorerUrl: URL for viewing transactions
 * - nativeCurrency: Network's native token details
 * 
 * To add a new network:
 * 1. Add its configuration below
 * 2. Add corresponding env var in .env file
 * 3. Update types/index.ts if needed
 */
export const SUPPORTED_NETWORKS: Network[] = [
  // Mainnets
  {
    name: 'Ethereum Mainnet',
    chainId: 1,
    rpcUrl: process.env.REACT_APP_ETHEREUM_RPC_URL || 'https://eth.llamarpc.com',
    blockExplorerUrl: 'https://etherscan.io',
    nativeCurrency: {
      name: 'Ether',
      symbol: 'ETH',
      decimals: 18
    }
  },
  {
    name: 'BSC Mainnet',
    chainId: 56,
    rpcUrl: process.env.REACT_APP_BSC_RPC_URL || 'https://bsc-dataseed.binance.org',
    blockExplorerUrl: 'https://bscscan.com',
    nativeCurrency: {
      name: 'BNB',
      symbol: 'BNB',
      decimals: 18
    }
  },
  {
    name: 'Polygon Mainnet',
    chainId: 137,
    rpcUrl: process.env.REACT_APP_POLYGON_RPC_URL || 'https://polygon-rpc.com',
    blockExplorerUrl: 'https://polygonscan.com',
    nativeCurrency: {
      name: 'MATIC',
      symbol: 'MATIC',
      decimals: 18
    }
  },
  {
    name: 'Avalanche C-Chain',
    chainId: 43114,
    rpcUrl: process.env.REACT_APP_AVALANCHE_RPC_URL || 'https://api.avax.network/ext/bc/C/rpc',
    blockExplorerUrl: 'https://snowtrace.io',
    nativeCurrency: {
      name: 'AVAX',
      symbol: 'AVAX',
      decimals: 18
    }
  },
  {
    name: 'Arbitrum One',
    chainId: 42161,
    rpcUrl: process.env.REACT_APP_ARBITRUM_RPC_URL || 'https://arb1.arbitrum.io/rpc',
    blockExplorerUrl: 'https://arbiscan.io',
    nativeCurrency: {
      name: 'Ether',
      symbol: 'ETH',
      decimals: 18
    }
  },
  {
    name: 'Optimism',
    chainId: 10,
    rpcUrl: process.env.REACT_APP_OPTIMISM_RPC_URL || 'https://mainnet.optimism.io',
    blockExplorerUrl: 'https://optimistic.etherscan.io',
    nativeCurrency: {
      name: 'Ether',
      symbol: 'ETH',
      decimals: 18
    }
  },
  {
    name: 'Fantom Opera',
    chainId: 250,
    rpcUrl: process.env.REACT_APP_FANTOM_RPC_URL || 'https://rpc.ftm.tools',
    blockExplorerUrl: 'https://ftmscan.com',
    nativeCurrency: {
      name: 'Fantom',
      symbol: 'FTM',
      decimals: 18
    }
  },
  {
    name: 'Cronos',
    chainId: 25,
    rpcUrl: process.env.REACT_APP_CRONOS_RPC_URL || 'https://evm.cronos.org',
    blockExplorerUrl: 'https://cronoscan.com',
    nativeCurrency: {
      name: 'Cronos',
      symbol: 'CRO',
      decimals: 18
    }
  },
  {
    name: 'Gnosis Chain',
    chainId: 100,
    rpcUrl: process.env.REACT_APP_GNOSIS_RPC_URL || 'https://rpc.gnosischain.com',
    blockExplorerUrl: 'https://gnosisscan.io',
    nativeCurrency: {
      name: 'xDAI',
      symbol: 'xDAI',
      decimals: 18
    }
  },
  // Additional Popular Networks
  {
    name: 'Exodus',
    chainId: 1, // Exodus uses Ethereum mainnet
    rpcUrl: process.env.REACT_APP_EXODUS_RPC_URL || 'https://eth.llamarpc.com',
    blockExplorerUrl: 'https://etherscan.io',
    nativeCurrency: {
      name: 'Ether',
      symbol: 'ETH',
      decimals: 18
    }
  },
  {
    name: 'Base',
    chainId: 8453,
    rpcUrl: process.env.REACT_APP_BASE_RPC_URL || 'https://mainnet.base.org',
    blockExplorerUrl: 'https://basescan.org',
    nativeCurrency: {
      name: 'Ether',
      symbol: 'ETH',
      decimals: 18
    }
  },
  {
    name: 'zkSync Era',
    chainId: 324,
    rpcUrl: process.env.REACT_APP_ZKSYNC_RPC_URL || 'https://mainnet.era.zksync.io',
    blockExplorerUrl: 'https://explorer.zksync.io',
    nativeCurrency: {
      name: 'Ether',
      symbol: 'ETH',
      decimals: 18
    }
  },
  {
    name: 'Linea',
    chainId: 59144,
    rpcUrl: process.env.REACT_APP_LINEA_RPC_URL || 'https://rpc.linea.build',
    blockExplorerUrl: 'https://lineascan.build',
    nativeCurrency: {
      name: 'Ether',
      symbol: 'ETH',
      decimals: 18
    }
  },
  {
    name: 'Mantle',
    chainId: 5000,
    rpcUrl: process.env.REACT_APP_MANTLE_RPC_URL || 'https://rpc.mantle.xyz',
    blockExplorerUrl: 'https://explorer.mantle.xyz',
    nativeCurrency: {
      name: 'Mantle',
      symbol: 'MNT',
      decimals: 18
    }
  },
  {
    name: 'Celo',
    chainId: 42220,
    rpcUrl: process.env.REACT_APP_CELO_RPC_URL || 'https://forno.celo.org',
    blockExplorerUrl: 'https://explorer.celo.org',
    nativeCurrency: {
      name: 'Celo',
      symbol: 'CELO',
      decimals: 18
    }
  },
  {
    name: 'Moonbeam',
    chainId: 1284,
    rpcUrl: process.env.REACT_APP_MOONBEAM_RPC_URL || 'https://rpc.api.moonbeam.network',
    blockExplorerUrl: 'https://moonscan.io',
    nativeCurrency: {
      name: 'Glimmer',
      symbol: 'GLMR',
      decimals: 18
    }
  },
  {
    name: 'Moonriver',
    chainId: 1285,
    rpcUrl: process.env.REACT_APP_MOONRIVER_RPC_URL || 'https://rpc.api.moonriver.moonbeam.network',
    blockExplorerUrl: 'https://moonriver.moonscan.io',
    nativeCurrency: {
      name: 'Moonriver',
      symbol: 'MOVR',
      decimals: 18
    }
  },
  {
    name: 'Harmony',
    chainId: 1666600000,
    rpcUrl: process.env.REACT_APP_HARMONY_RPC_URL || 'https://api.harmony.one',
    blockExplorerUrl: 'https://explorer.harmony.one',
    nativeCurrency: {
      name: 'Harmony',
      symbol: 'ONE',
      decimals: 18
    }
  },
  {
    name: 'Klaytn',
    chainId: 8217,
    rpcUrl: process.env.REACT_APP_KLAYTN_RPC_URL || 'https://public-node-api.klaytnapi.com/v1/cypress',
    blockExplorerUrl: 'https://scope.klaytn.com',
    nativeCurrency: {
      name: 'Klaytn',
      symbol: 'KLAY',
      decimals: 18
    }
  },
  {
    name: 'Aurora',
    chainId: 1313161554,
    rpcUrl: process.env.REACT_APP_AURORA_RPC_URL || 'https://mainnet.aurora.dev',
    blockExplorerUrl: 'https://aurorascan.dev',
    nativeCurrency: {
      name: 'Ether',
      symbol: 'ETH',
      decimals: 18
    }
  },
  {
    name: 'Metis',
    chainId: 1088,
    rpcUrl: process.env.REACT_APP_METIS_RPC_URL || 'https://andromeda.metis.io/?owner=1088',
    blockExplorerUrl: 'https://andromeda-explorer.metis.io',
    nativeCurrency: {
      name: 'Metis',
      symbol: 'METIS',
      decimals: 18
    }
  },
  {
    name: 'Kava',
    chainId: 2222,
    rpcUrl: process.env.REACT_APP_KAVA_RPC_URL || 'https://evm.kava.io',
    blockExplorerUrl: 'https://explorer.kava.io',
    nativeCurrency: {
      name: 'Kava',
      symbol: 'KAVA',
      decimals: 18
    }
  },
  {
    name: 'OKX Chain',
    chainId: 66,
    rpcUrl: process.env.REACT_APP_OKX_RPC_URL || 'https://exchainrpc.okex.org',
    blockExplorerUrl: 'https://www.oklink.com/okexchain',
    nativeCurrency: {
      name: 'OKT',
      symbol: 'OKT',
      decimals: 18
    }
  },
  {
    name: 'Heco',
    chainId: 128,
    rpcUrl: process.env.REACT_APP_HECO_RPC_URL || 'https://http-mainnet.hecochain.com',
    blockExplorerUrl: 'https://hecoinfo.com',
    nativeCurrency: {
      name: 'HT',
      symbol: 'HT',
      decimals: 18
    }
  },
  {
    name: 'Conflux',
    chainId: 1030,
    rpcUrl: process.env.REACT_APP_CONFLUX_RPC_URL || 'https://evm.confluxrpc.com',
    blockExplorerUrl: 'https://evm.confluxscan.io',
    nativeCurrency: {
      name: 'Conflux',
      symbol: 'CFX',
      decimals: 18
    }
  },
  // Testnets
  {
    name: 'Sepolia Testnet',
    chainId: 11155111,
    rpcUrl: process.env.REACT_APP_SEPOLIA_RPC_URL || 'https://rpc.sepolia.org',
    blockExplorerUrl: 'https://sepolia.etherscan.io',
    nativeCurrency: {
      name: 'SepoliaETH',
      symbol: 'SEP',
      decimals: 18
    }
  },
  {
    name: 'Goerli Testnet',
    chainId: 5,
    rpcUrl: process.env.REACT_APP_GOERLI_RPC_URL || 'https://goerli.infura.io/v3/f77ca27a806f41b48899c2dd1bd84117',
    blockExplorerUrl: 'https://goerli.etherscan.io',
    nativeCurrency: {
      name: 'GoerliETH',
      symbol: 'GOR',
      decimals: 18
    }
  },
  {
    name: 'Mumbai Testnet',
    chainId: 80001,
    rpcUrl: process.env.REACT_APP_MUMBAI_RPC_URL || 'https://rpc-mumbai.maticvigil.com',
    blockExplorerUrl: 'https://mumbai.polygonscan.com',
    nativeCurrency: {
      name: 'MATIC',
      symbol: 'MATIC',
      decimals: 18
    }
  },
  {
    name: 'BSC Testnet',
    chainId: 97,
    rpcUrl: process.env.REACT_APP_BSC_TESTNET_RPC_URL || 'https://data-seed-prebsc-1-s1.binance.org:8545',
    blockExplorerUrl: 'https://testnet.bscscan.com',
    nativeCurrency: {
      name: 'BNB',
      symbol: 'tBNB',
      decimals: 18
    }
  },
  {
    name: 'Avalanche Fuji Testnet',
    chainId: 43113,
    rpcUrl: process.env.REACT_APP_FUJI_RPC_URL || 'https://api.avax-test.network/ext/bc/C/rpc',
    blockExplorerUrl: 'https://testnet.snowtrace.io',
    nativeCurrency: {
      name: 'AVAX',
      symbol: 'AVAX',
      decimals: 18
    }
  }
];

/**
 * Helper function to get network configuration by chainId
 * @param chainId - The network's chain ID
 * @returns Network configuration or undefined if not found
 */
export const getNetworkByChainId = (chainId: number): Network | undefined => {
  return SUPPORTED_NETWORKS.find(network => network.chainId === chainId);
}; 