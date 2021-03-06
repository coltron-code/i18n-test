---
title: Registering a Name
id: Registering Names
---

# Registering a Name

### Go to the ENS Manager

Go to the [ENS Manager App](https://app.ens.domains) and connect your wallet with the connect-button. Make sure that your wallet shows as _connected_ or the registration will likely not be successful.

![Connecting to the manager app. Step 1.](./img/register-1.png "Connect your wallet by selecting the Connect button.")

### Connect your wallet

Choose how to connect with your wallet. In case you're unsure if your wallet supports WalletConnect or not, a list is provided on WalletConnect's website [here](https://walletconnect.com/registry/wallets).


![Connecting to the manager app. Step 2](./img/register-2.png "Connect using your wallet or the Wallet Connect service")

### Search for the ENS name you want

![Serching for an ENS Name](./img/register-3.png "Search for an ENS Name to check availability.")


Provided that the name you searched for is available, click on it to continue with the registration.

![Checking ENS Name availability](./img/register-4.png "If the name is available it will display this on the right side of the screen.")


### Registering your ENS name

Registering an ENS name is a process in three steps in order to prevent front-running, so that no one can steal your ENS name from under you while you're in the process of registering it.

#### Step 1: Request to Register

Clicking Request to Register initiates Step 1 of the 3-Step process. A 0ETH transaction is performed where your name is hashed with a secret key so that no one else can view which name you're trying to register. This step will incur gas fees, as well as the final Step 3.

This key is stored in your browser's local storage, so make sure to avoid clearing your browser's local data before you've completed all three steps, or you'll be forced to repeat Step 1 again.\


It's a good idea to:

* Consider registering your ENS name for more than 1 year in order to avoid having to pay gas fees for renewals every year.
* Favourite the ENS name you're registering in case you forget it later.

Once you're ready click "Request to Register".


![Registering your ENS Name. Step 1](./img/register-5.png "Select the number of years you want to register for.")

Check that the cost of the transaction is what you expect it to be and confirm the transaction in your wallet.

#### Step 2: Wait 1 minute

After the Step 1 transaction completes there's a 1 minute waiting period in order to prevent front-running.

![Registering your ENS Name. Step 2](./img/register-6.png "Wait one minute after you request to register.")

#### Step 3: Register

After you've waited 1 minute and Step 2 has completed it's time to actually _Register_ your ENS name. You have up to 7 days to do this from the time you finished your Step 1 transaction, but keep in mind that your ENS name isn't reserved for you until you _Register_ it.

It might be a good idea to double-check that gas costs are still low during this time. Once you're ready to proceed click the Register button and confirm the transaction in your wallet.\


![Registering your ENS Name. Step 3](./img/register-7.png "After waiting one minutes, select Register, and approve the transaction in your wallet.")

Congratulations! If all transactions went through successfully you should now be the proud owner of your very own ENS name!

![Your name is registered](./img/register-8.png "After the transaction is approved on the blockchain, it is now your new ENS Name!")
 