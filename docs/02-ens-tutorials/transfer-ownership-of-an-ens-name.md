---
title: Transfer Ownership of an ENS Name
id: Name Transfer
---

# Transfer Ownership of an ENS Name

To transfer the ownership of an ENS name to another wallet, connect to the ENS App. The wallet that is listed as the Registrant is the **owner** of the ENS name. In the screenshot below, (1) indicates the Registrant.

![Editing ENS Records and rransfering the name.](./img/transfer-1.png "In the manager app, you can change the registrant to transfer the name.")

While logged into the ENS App with the Registrant wallet, you will be able to click “Transfer”, and type in a wallet address to transfer the ENS name ownership to.

However, the Controller is the wallet that can update other records like the ETH Address (see #3 in the image above). Transferring the Registrant to a new wallet _does not automatically update_ the Controller address(see #2 in screenshot), and does not change the ETH payment address. These are separate transactions that will cost gas to update.

Some users may want to fully transfer a name to another wallet and have the same default records set up as if that new wallet registered the name. In order to do that, the Controller wallet should first update the ETH Address(see #3) to the new wallet address. Once that is changed, the Registrant wallet will need to update the Controller record to the same new wallet address. Finally, the Registrant should transfer ownership to the new wallet. In this way, the name is totally transferred to a new wallet, and that recipient does not have to do additional setup besides setting their Primary name. The order to this process does matter. If the for instance the Registrant is transferred to the new wallet first, only the new wallet can then update the Controller.


**Important:** Without updating the controller record, tokens sent to _othername.eth_ will still arrive in the original wallet. Both the registrant and the controller must be changed!

<!-- ### Further Reading:

* [Setting Your Primary Name](setting-your-primary-name.md) 
-->
