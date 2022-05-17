---
title:  What is a premium auction?
id:  premium auction explained
---

# What is a premium auction?

### About premium auctions

An expired ENS name will first go into a 90 day grace period. After the grace period ends, anyone will be able to register the name again. However, names that have passed the grace period enter into a 21 day dutch auction starting with a premium price that is currently set at $100,000,000 USD.

Over 21 days, the premium price will decline until the premium fee is $0. The premium price decreases using a non-linear decay. This means the premium falls from the very high start price quickly, and slows towards the end of the 21 day premium window. A name can be registered within the premium auction by choosing the time to buy.

In the user interface of the [ENS App](https://app.ens.domains), clicking on the line chart for an ENS name in premium will give a price estimate for the specific date and time chosen. You will need enough Ether to pay the premium fee plus the yearly registration fee.

<!-- ![](<../../.gitbook/assets/image (17).png>) -->

### Why have a premium auction at all?

With the increase in the popularity of ENS names, names available to be re-registered would be instantly bought by bots, and front-running miners, to snipe an ENS name before others could purchase it.
The current starting price for the premium auction is $100,000,000 which decays to $0 over the 21 premium window. This declining premium is effectively a Dutch Auction.

It's not expected that anyone would purchase a name at such a high price, but it prevents those running scripts from taking advantage of the auction mechanics.

### Further Reading:

* [\[EP9\]\[Executable\] Change to Exponential Premium Price Oracle](https://docs.ens.domains/v/governance/governance-proposals/ep9-executable-change-to-exponential-premium-price-oracle)
