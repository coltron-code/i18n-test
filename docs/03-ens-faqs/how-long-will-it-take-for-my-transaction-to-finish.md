---
title: How long will it take for my transaction to finish?
id:  How long do transactions take
---

# How long will it take for my transaction to finish?

### Ethereum Gas (Gwei) and Transactions

The time for Ethereum transactions to finish adding data to a block depends upon network usage. There's a fee for using the blockchain, the gas fee in gwei. One gwei is 0.000000001 ETH. When a lot of transactions happen on the blockchain, gas fees can increase due to competition for the validators to mine a transaction. In most cases, the transaction will eventually finish. However, the time frame would depend on when the miners add the data to the block. Setting too low of a maximum for a gas fee can cause a transaction to sit for too long, hours or days, or even not get mined.

### Looking for Stuck Transactions

When looking for why a transaction might not have finished, the first place to look is on a blockchain explorer such as [Etherscan.io](https://etherscani.io). After searching for your wallet, you can see any pending transactions. If the transactions appear on your desktop or mobile wallet but not on etherscan, they have not been sent to the blockchain. It is possible that they are stuck locally in the wallet software.

On the other hand, if you have pending transactions seen on the block explorer, you can clear them out by sending a 0 ETH transaction with the same nonce value to your wallet. In this new transaction, you must set the gas price higher so that it will be picked up and the old transaction with the same nonce canceled. There's more reading from the [Etherscan documentation on how to replace a transaction. ](https://info.etherscan.com/how-to-replace-a-transaction/)
