---
title: Combien de temps faut-il pour terminer ma transaction?
id: Combien de temps prennent les transactions
---

# Combien de temps faut-il pour terminer ma transaction?

### Gaz Ethereum (Gwei) et Transactions

L'heure pour les transactions Ethereum de terminer l'ajout de données à un bloc dépend de l'utilisation du réseau. Il y a des frais facturés pour l'utilisation de la blockchain, qui sont les frais de gaz en gwei. Un gwei est de 0.000000001 ETH. Quand il y a beaucoup de transactions qui se passent sur la blockchain, les frais de gaz peuvent augmenter en raison de la concurrence pour les validateurs de miner une transaction. Dans la plupart des cas, la transaction se terminera à terme. Cependant, la période de temps serait dépendante du moment où les mineurs ajouteront les données au bloc. Définir un maximum trop bas pour un frais de gaz peut entraîner une transaction trop longue ; heures ou jours, ou même pas être miné du tout.

### Recherche de transactions bloquées

Lors de la recherche de la raison pour laquelle une transaction pourrait ne pas être terminée, le premier endroit à regarder est sur un explorateur blockchain tel que [Etherscan. o](https://etherscani.io). Après la recherche de votre portefeuille, vous pouvez voir toutes les transactions en attente listées ici. Si vous ne voyez aucune transaction en attente, mais que vous les voyez dans votre logiciel de portefeuille tel que MetaMask, ces transactions en attente n'ont pas été envoyées à la blockchain. Ils sont bloqués localement dans le logiciel de portefeuille.

Par contre, si vous avez des transactions en attente vues dans l'explorateur de blocs, vous pouvez les effacer en envoyant une transaction ETH 0 avec la même valeur nonce à votre propre portefeuille. Dans cette nouvelle transaction, vous devez définir le prix du gaz plus élevé afin qu'il soit ramassé et l'ancienne transaction avec la même nonce annulée. Il y a plus de lectures à partir de la documentation [Etherscan sur la façon de remplacer une transaction. ](https://info.etherscan.com/how-to-replace-a-transaction/)
