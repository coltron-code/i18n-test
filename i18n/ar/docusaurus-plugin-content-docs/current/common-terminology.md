
# Common Terminology

This page contains a listing of some commonly used terminology throughout this documentation.

### Address Records

ENS Address Records store the public key or wallet addresses of other cryptocurrencies. dApps that integrate ENS can use your ENS name to resolve to these addresses. The practical use of this is

### Blockchain

A blockchain is a public database that is updated and shared across many computers in a network. "Block" refers to data and state being stored in consecutive groups known as "blocks". "Chain" refers to the fact that each block cryptographically references its parent. In other words, blocks get chained together. The data in a block cannot change without changing all subsequent blocks, which would require the consensus of the entire network. Source:  [Ethereum.org](https://ethereum.org/en/developers/docs/intro-to-ethereum/)

### Content Records

The content record may be set to contain the content hash of a decentralized website. A content hash is essentially the "address" to a decentralized, or [IPFS](https://docs.ipfs.io/concepts/how-ipfs-works/), website.

### Controller (_"Manager")_

The account that may edit the address, content and text records of a name. The Controller may be changed by the registrant ("owner") or the controller itself. The controller can not transfer name.

### Cryptocurrency

Cryptocurrencies are a digital store of value that is securely verified by a network of computers that are validated using cryptography. Cryptocurrencies provide a transparent and secure way to represent value.

### DNS Name

A DNS (Domain Name System) Name is the standard URL's that most people are used to interfacing with on the Internet. The DNS system is commonly referenced when talking about the ENS (Ethereum Name Service) because ENS is the next evolution in address routing on the internet.

### ENS Name

An ENS Name is a human-readable name that you can use to reference your Ethereum address, function as your decentralized identity, store metadata, and even direct payments cryptocurrencies outside of the Ethereum blockchain!

### Gas

Gas refers to the unit that measures the amount of computational effort required to execute specific operations on the Ethereum network.

Since each Ethereum transaction requires computational resources to execute, each transaction requires a fee. Gas refers to the fee required to conduct a transaction on Ethereum successfully. Source:[ ethereum.org](https://ethereum.org/en/developers/docs/gas/).

### Grace Period

A Grace Period is the time frame after a name has officially expired. Grace periods last for 90 days. At this time the name may not be registered to allow for the previous registrant to renew the name. Name that are not renewed in the 90 day grace period will go to a premium auction.

### Premium Auction

A premium auction is a unique timeframe after an ENS name has expired and left the grace period. Premium Auctions begin at a price of $1M USD and decrease to $0 USD over a 28 day period. The first person who pays for the name at it's decaying price is the winning bidder. When a name is purchased during a premium auction, the winning bidder will pay the premium price in addition to the yearly registration fees that are normally applicable.

### Primary Name

A Primary ENS Name record (formerly, "Reverse Record") makes your Ethereum address point to an ENS name. This allows dApps to find and display your ENS name when you connect to them with your Ethereum account

### Registrant (_"Owner")_

The owner has total control over an ENS Name. The registrant may transfer the registration, set records, and assign a controller.

### Renewals

Renewals are completely yearly. Renewals allow for a healthy namespace that ensures a name will not be lost forever if an owner loses control of the name.

**Note:** This action is not reserved to owners or controllers, _anyone_ can renew a name.

### Resolver

A resolver is a smart contract that holds records. Names are set by default to the [Public Resolver](https://etherscan.io/address/0x4976fb03c32e5b8cfe2b6ccb31c09ba78ebaba41) managed by the ENS team.

### Reverse Record

The Reverse Record is the Ethereum wallet address that an ENS Name displays when searched or reference by a dApp.

### Seed Phrase

A Seed Phrase is a series of 12 or 24 words that can be used to access, retrieve, or recover your cryptocurrency address. You can think of your seed phrase as a password to your cryptocurrency address or wallet.

Never **** Share your seed phrase with anyone, take a screen shot of of your seed phrase, or store your seed phrase electronically. If you give your seed phrase away, you are giving them total control of your assets. If you lose y

**Warning:** If you give your seed phrase away, you are giving up control of your assets. If you lose your seed phrase there is no way to recover your asset.

### Subdomain or Subname

A subdomain is any name that is a level below it's parent name. Similar to standard DNS web addresses, subdomains in the ENS naming system use dot-hierarchical. Subdomains may exist as ERC-1155 tokens that are fully controlled and managed by the owner of the subdomain.

### Text Record

Text Records is any arbitrary text that you would like to attach to your ENS Name. These records can be addresses, descriptions, e-mails, keywords, or usernames that are stored as readable text metadata.





