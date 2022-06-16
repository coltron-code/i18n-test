---
title: Comment fonctionne la résolution des noms ?
id: Résolution du nom expliquée
---

# Comment fonctionne la résolution des noms ?

L'enregistrement primaire est votre _enregistrement inversé_ responsable de la résolution de l'adresse de votre portefeuille à votre nom ENS, aider efficacement DApps et d'autres services à afficher votre nom d'ENS en fonction de l'adresse de votre portefeuille_._

La façon la plus simple de comprendre cela est de considérer que la résolution de nom fonctionne dans deux directions :

### Résolution de transfert

* **Nom de votre ENS <unk> Adresse de votre portefeuille,** ou pour un exemple pratique : **cthulu. th <unk> 0xa19A7ae868eDe64C6C5256A64BCD3bf3a9F2d615** _Déterminé par l'adresse ETH (forward) record set sur votre domaine._

### Résolution inversée

* **Adresse de votre portefeuille <unk> Nom de votre ENS,** ou pour un exemple pratique: **0xa19A7ae868eDe64C6C5256A64BCD3bf3a9F2d615 <unk> cthulu. th** _Déterminé par l'enregistrement primaire (inversé) défini dans votre portefeuille._

Afin de définir un nom ENS comme primaire dans un portefeuille, Il est donc nécessaire que le nom de l'ENS se résout d'abord à cette adresse de portefeuille.

Afin de définir votre nom d'ENS comme Primaire dans votre portefeuille:

1. Assurez-vous que l'enregistrement de l'adresse ETH-Address pointe vers l'adresse du portefeuille
2. Connectez votre portefeuille à l'app [ENS Manager](https://app.ens.domains) et définissez le nom de l'ENS comme Primary.
