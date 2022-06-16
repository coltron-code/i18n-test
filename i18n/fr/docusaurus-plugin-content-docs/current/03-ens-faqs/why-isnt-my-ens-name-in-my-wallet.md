---
title: Pourquoi mon nom ENS n'est-il pas dans mon portefeuille?
id: Pourquoi mon nom ENS n'est pas dans mon portefeuille
---

# Pourquoi mon nom ENS n'est-il pas dans mon portefeuille?

Veuillez vérifier que votre inscription a réussi, veuillez vérifier votre historique de transactions sur [Etherscan.io](https://www.etherscan.io). Les inscriptions réussies verront deux transactions : `Valider` **et** `S'inscrire à Config`. Ces transactions représentent les étapes 1 et 3 du processus d'enregistrement de l'ENS.

![Valider et s'inscrire avec les transactions de configuration](./img/not-in-wallet-1.png "Ethercan affiche la validation et l'enregistrement avec les transactions de configuration")

## Liste de contrôle de dépannage

1.  **Vérifiez votre adresse sur** [**Etherscan.io**](https://www.etherscan.io)**.**

    Demander l'adresse du portefeuille qui a été utilisée pour enregistrer un nom Ethereum.<!-- _If your address does not show any registration transactions proceed to_ \[#wrong-address\](why-isnt-my-ens-name-in-my-wallet.md#wrong-address "mention")__ -->2.  **S'assurer que l'étape 1 de l'inscription est terminée.**

    Recherche une transaction avec la méthode de `Valider`. Cette transaction doit être présente et avoir interagi avec le contrôleur du registraire [ENS.](https://etherscan.io/address/0x283af0b28c62c092c9727f1ee09c02ca627eb7f5)__

    _Si la transaction `Valider` n'est pas présente, procédez à_<!--\[#registration-incomplete.\](why-isnt-my-ens-name-in-my-wallet.md#registration-incomplete. "mention")-->__

    _Si vous n'avez pas interagi avec l'ENS Registrar, procédez à_<!-- \[#fraudulent-activity\](why-isnt-my-ens-name-in-my-wallet.md#fraudulent-activity "mention")-->__


3.  **S'assurer que l'étape 3 de l'inscription est terminée.**

    Recherchez une transaction avec la méthode de `Enregistrer avec la configuration` présent. Cette transaction doit être présente et avoir interagi avec le contrôleur du registraire [ENS.](https://etherscan.io/address/0x283af0b28c62c092c9727f1ee09c02ca627eb7f5)

    _Si la transaction `Enregistrer ŕ la Config` n'est pas présente, procédez à_<!--\[#registration-incomplete.\](why-isnt-my-ens-name-in-my-wallet.md#registration-incomplete. "mention")-->__

    _Si vous n'avez pas interagi avec l'ENS Registrar, procédez à_<!-- \[#fraudulent-activity\](why-isnt-my-ens-name-in-my-wallet.md#fraudulent-activity "mention")-->__

## Erreurs d'enregistrement

### Mauvaise adresse

Vous avez par erreur enregistré votre nom sur un autre portefeuille que vous possédez.

**Action corrective :** _Connectez le portefeuille correct à l'application ENS. Si votre nom de l'ENS a été enregistré par erreur à une autre adresse que vous possédez, vous pouvez transférer le nom en changeant le Déposant. Si vous n'avez pas besoin de le migrer vers un nouveau portefeuille, vous pouvez également pointer votre ENS sur n'importe quelle adresse de portefeuille en définissant le Contrôleur._

__

### Inscription **incomplète**.

Une des étapes a été manquée ou non complétée. Vous devez compléter toutes les étapes pour enregistrer votre nom à l'ENS.

![Trois étapes d'inscription.](./img/not-in-wallet-2.png "L'application Gestionnaire affiche les transactions Commit et Registrer.")

**Action corrective :** _Vous devez compléter toutes les étapes pour enregistrer votre nom ENS._ Voir<!--\[registering-a-name.md\](../../tutorials/registering-a-name.md "mention") -->pour consulter le processus d'inscription. _Rappelez-vous que vous avez sept jours après la deuxième transaction pour compléter l'étape 3._

__

### Activité frauduleuse

Si vous n'avez pas interagi avec le contrôleur du registraire de l'ENS, vous avez probablement négocié avec un contrat d'enregistrement malveillant. Vérifiez que votre inscription a eu lieu sur le site officiel, [https://app.ens.domains/](https://app.ens.domains/).

**Action corrective :** _Ouvrez un ticket sur notre Discord officiel pour signaler toute activité frauduleuse ou tentative d'hameçonnage. Il est important de vérifier les détails de toutes les demandes de signature et les appels de contrat avant de les accepter._



