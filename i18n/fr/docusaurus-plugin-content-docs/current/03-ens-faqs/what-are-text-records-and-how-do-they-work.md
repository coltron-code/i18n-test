---
title: Que sont les enregistrements textuels?
id: Enregistrements de texte
---

# Qu'est-ce que les enregistrements textuels et comment fonctionnent-ils?

## Enregistrements de texte

Les enregistrements textuels vous permettent d'attacher et de stocker publiquement des données textuelles et arbitraires à votre nom Ethereum. Vos enregistrements texte sont essentiellement des métadonnées contrôlées par l'utilisateur et lisibles par l'homme pour les applications à référencer et à utiliser. Parce que vos enregistrements textuels sont créés par vous et stockés sur la blockchain Ethereum, ils activent un profil utilisateur autosouverain et décentralisé. Cela signifie que vos informations et votre profil peuvent commencer à échapper à l'architecture centralisée de Web2.

Avec le [Service de métadonnées ENS](https://metadata.ens.domains/docs) ces enregistrements textuels ne sont pas limités à la Blockchain Ethereum et peuvent être référencés par DNS.

Pour les données techniques sur l'EIP qui rendent cela possible, voir : [EIP-634](https://eips.ethereum.org/EIPS/eip-634).

### Comment puis-je ajouter un enregistrement textuel ?

Dans l'App [ENS](https://app.ens.domains), vous pouvez ajouter un enregistrement en cliquant sur le lien « Ajouter/Modifier » dans l'onglet « Enregistrements » :

![Ajouter/Modifier les enregistrements](./img/text-records-1.png "Ajouter/Modifier vos enregistrements textuels.")

Vous devriez voir apparaître des listes déroulantes qui vous permettront de choisir d’ajouter un enregistrement « TEXT », le type d’enregistrement texte (e. . « URL»), puis entrez les informations pour cet enregistrement:

![Ajoutez votre texte.](./img/text-records-2.png "Ajoutez votre texte aux champs.")

Une fois que vous êtes prêt, cliquez sur « Confirmer » pour envoyer la transaction, et une fois qu’elle est minée, vous devriez la voir apparaître ci-dessous.

**Remarque :** Les enregistrements textuels, comme tous les enregistrements ENS, sont visibles publiquement.


### Type de champs de texte.

Bien que les utilisateurs puissent facilement définir de nouveaux enregistrements textuels, il y a plusieurs clés établies sur le gestionnaire de domaine ENS.

#### Clés globales Commune

Les clés globales ne doivent se composer que de minuscules, de chiffres et de traits d'union.

* **Avatar** - Une URL en minuscule à une image utilisée comme avatar ou logo. Toutes les minuscules.
* **Description** - Une description du nom.
* **Affichage :** Un nom d'affichage canonique pour le nom de l'ENS.
* **E-mail -** Une adresse e-mail
* **Mots-clés -** Une liste de mots clés séparés par des virgules, ordonnés par le plus significatif d'abord.
* **URL -** Une URL de site web

#### Autres clés de service

Les clés de service doivent être composées d'une notation par point inversé (voir l'exemple ci-dessous), et contenir au moins un point. Un utilisateur peut créer sa propre clé de service adhérant à ce format.

* **com.github** - A Github username.
* **com.twitter** - Un nom d'utilisateur Twitter.
* **io.keybase -** Un nom d'utilisateur Keybase.
* **org.telegram -** Un nom d'utilisateur Telegram.


**Remarque :** Les noms d'utilisateur doivent **PAS** inclure le symbole "@" ou contenir l'URL complète du profil de l'utilisateur.

