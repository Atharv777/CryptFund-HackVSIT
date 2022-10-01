import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import { getDefaultWallets, RainbowKitProvider, darkTheme, lightTheme } from '@rainbow-me/rainbowkit';
import { chain, configureChains, createClient, WagmiConfig } from 'wagmi';
import { alchemyProvider } from 'wagmi/providers/alchemy';
import { publicProvider } from 'wagmi/providers/public';


const { chains, provider } = configureChains(
    [chain.goerli],
    [
        alchemyProvider({ apiKey: process.env.ALCHEMY_ID }),
        publicProvider()
    ]
);

const { connectors } = getDefaultWallets({
    appName: 'CryptFund',
    chains
});

const wagmiClient = createClient({
    autoConnect: true,
    connectors,
    provider
})


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <WagmiConfig client={wagmiClient}>
            <RainbowKitProvider
                chains={chains}
                theme={lightTheme({
                    accentColor: 'rgba(28, 33, 32, 1)',
                    accentColorForeground: '#50C19D',
                    borderRadius: 'large',
                    overlayBlur: "small"
                })}

            >
                <App />
            </RainbowKitProvider>
        </WagmiConfig>
    </React.StrictMode>
);


reportWebVitals();
