import * as wallet from "@marlowe.io/wallet";
import { mkRuntimeLifecycle } from '@marlowe.io/runtime-lifecycle/browser';
import { SupportedWalletName } from '@marlowe.io/wallet/browser';

const installedWalletExtensions = wallet.getInstalledWalletExtensions();
console.log(`Number of wallets user has installed ${installedWalletExtensions.length}`);

const walletName = installedWalletExtensions[0].name as SupportedWalletName;
console.log(`First wallet: ${walletName}`);

const runtimeURL = 'https://preprod.100.runtime.marlowe-lang.org';
const runtimeLifecycle = await mkRuntimeLifecycle({
  walletName: walletName,
  runtimeURL: runtimeURL
});

console.log(`Connected to runtime!`);

const userWallet = await wallet.mkBrowserWallet(walletName);

const amount = await userWallet.getLovelaces();
console.log(`This user has ${amount} lovelaces in their wallet`);

await runtimeLifecycle.newContractAPI.create({
  contract: 'close'
})
// await runtimeLifecycle.contracts.createContract({
//   contract: 'close'
// });

console.log(`Create contract succes!`);

function App() {
  return (
    <>
      <h1>Vite + React</h1>
    </>
  )
}

export default App
