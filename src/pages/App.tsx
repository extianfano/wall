import React, { useState, useEffect } from 'react';
import { Toaster } from 'react-hot-toast';
import WalletConnect from '../components/WalletConnect';
import TransferFunds from '../components/TransferFunds';
import { SUPPORTED_NETWORKS } from '../config/networks';
import { Network } from '../types';

const App: React.FC = () => {
  const [selectedNetwork, setSelectedNetwork] = useState<Network>(SUPPORTED_NETWORKS[0]);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  useEffect(() => {
    console.log('App component mounted');
    console.log('Available networks:', SUPPORTED_NETWORKS);
  }, []);

  console.log('App component rendering');

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl sm:tracking-tight lg:text-6xl bg-clip-text text-transparent bg-gradient-to-r from-primary-600 to-secondary-600">
            Wallet Transfer
          </h1>
          <p className="mt-5 max-w-xl mx-auto text-xl text-gray-500">
            Connect your wallet and transfer funds securely
          </p>
        </div>

        <div className="p-6 border-b border-gray-200">
          <h2 className="text-lg font-medium text-gray-900 mb-4">Select Network</h2>
          <div className="relative">
            <button
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              className="w-full flex items-center justify-between px-4 py-2 border border-gray-300 rounded-md shadow-sm bg-white text-left focus:outline-none focus:ring-2 focus:ring-primary-500"
            >
              <div className="flex items-center">
                <span className="text-sm font-medium text-gray-900">{selectedNetwork.name}</span>
                <span className="ml-2 text-xs text-gray-500">({selectedNetwork.nativeCurrency.symbol})</span>
              </div>
              <svg
                className={`h-5 w-5 text-gray-400 transform transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </button>

            {isDropdownOpen && (
              <div className="absolute z-10 mt-1 w-full bg-white shadow-lg max-h-60 rounded-md py-1 text-base overflow-auto focus:outline-none sm:text-sm">
                {SUPPORTED_NETWORKS.map((network) => (
                  <button
                    key={network.chainId}
                    onClick={() => {
                      setSelectedNetwork(network);
                      setIsDropdownOpen(false);
                      console.log('Network selected:', network.name);
                    }}
                    className={`w-full text-left px-4 py-2 hover:bg-gray-100 ${
                      selectedNetwork.chainId === network.chainId ? 'bg-primary-50 text-primary-900' : 'text-gray-900'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-sm">{network.name}</span>
                      <span className="text-xs text-gray-500">{network.nativeCurrency.symbol}</span>
                    </div>
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>

        <div className="p-6 space-y-6">
          <WalletConnect />
          <TransferFunds />
        </div>

        <div className="mt-8 text-center text-sm text-gray-500">
          <p>Supported Networks: Ethereum, BSC, Polygon, Avalanche</p>
          <p className="mt-2">Make sure you're on the correct network before transferring funds</p>
        </div>
      </div>
      <Toaster 
        position="top-right"
        toastOptions={{
          duration: 5000,
          style: {
            background: '#363636',
            color: '#fff',
          },
          success: {
            duration: 3000,
            iconTheme: {
              primary: '#10B981',
              secondary: 'white',
            },
          },
          error: {
            duration: 4000,
            iconTheme: {
              primary: '#EF4444',
              secondary: 'white',
            },
          },
        }}
      />
    </div>
  );
};

export default App;