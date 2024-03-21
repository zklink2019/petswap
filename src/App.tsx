
import React, { useMemo } from "react";
import { BaseRouter } from './routes';
import { WalletProvider } from "@demox-labs/aleo-wallet-adapter-react";
import { WalletModalProvider } from "@demox-labs/aleo-wallet-adapter-reactui";
import { LeoWalletAdapter } from "@demox-labs/aleo-wallet-adapter-leo";

import {
  DecryptPermission,
  WalletAdapterNetwork,
} from "@demox-labs/aleo-wallet-adapter-base";
import {
  RouterProvider,
} from "react-router-dom";
import './App.css';
import "@demox-labs/aleo-wallet-adapter-reactui/styles.css";
import { HeadApp } from "./components/layout/head";
import { FootApp } from "./components/layout/footer";


function App() {
  const wallets = useMemo(
    () => [
      new LeoWalletAdapter({
        appName: "Leo Demo App",
      }),
    ],
    []
  );
  
  return (
    <div className="App">
      <WalletProvider
        wallets={wallets}
        decryptPermission={DecryptPermission.UponRequest}
        network={WalletAdapterNetwork.Testnet}
        autoConnect={true}
        localStorageKey="aleo"
      >
        <WalletModalProvider>
          <header className="App-header">
            <HeadApp></HeadApp>
          </header>
          <div className=" App-body" style={{width:"100%"}}>
            <RouterProvider router={BaseRouter} />
          </div>
          <footer className="App-footer">
            <FootApp></FootApp>
          </footer>
          
        </WalletModalProvider>
      </WalletProvider>
      
    </div>
  );
}

export default App;
