---
title: Transférer la propriété d'un nom ENS
id: Transfert de nom
---

# Transférer la propriété d'un nom ENS

Pour transférer la propriété d'un nom ENS vers un autre portefeuille, connectez-vous à l'application ENS. Le portefeuille qui est listé comme le Registrant est le **propriétaire** du nom de l'ENS. Dans la capture d'écran ci-dessous, (1) indique le Inscrit.

![Édition des enregistrements ENS et rançon du nom.](./img/transfer-1.png "Dans l'application manager, vous pouvez changer le nom de l'inscrit pour le transférer.")

Lorsque vous êtes connecté à l'application ENS avec le portefeuille du déposant, vous pourrez cliquer sur « Transférer », et tapez une adresse de portefeuille pour transférer la propriété du nom de l'ENS.

Cependant, le contrôleur est le portefeuille qui peut mettre à jour d'autres enregistrements comme l'adresse ETH (voir #3 dans l'image ci-dessus). Transférer le Registrant vers un nouveau portefeuille _ne met pas automatiquement à jour_ l'adresse du contrôleur (voir #2 dans la capture d'écran), et ne modifie pas l'adresse de paiement ETH. Ce sont des transactions distinctes qui coûteront du gaz à mettre à jour.

Certains utilisateurs peuvent vouloir transférer complètement un nom vers un autre portefeuille et avoir les mêmes enregistrements par défaut configurés comme si ce nouveau portefeuille enregistrait le nom. Pour ce faire, le portefeuille du contrôleur doit d'abord mettre à jour l'adresse ETH (voir #3) à la nouvelle adresse du portefeuille. Une fois que cela a été modifié, le portefeuille du Registrant devra mettre à jour l'enregistrement du contrôleur à la même nouvelle adresse de portefeuille. Enfin, le Déposant devrait transférer la propriété au nouveau portefeuille. De cette façon, le nom est entièrement transféré vers un nouveau portefeuille, et que le destinataire n'a pas à faire de configuration supplémentaire en plus de définir son nom principal. La commande à ce processus est importante. Si par exemple le Déposant est transféré au nouveau portefeuille en premier, seul le nouveau portefeuille peut ensuite mettre à jour le Contrôleur.


**Important :** Sans mise à jour de l'adresse ETH, les jetons envoyés à _autre nom. th_ arrivera toujours dans le portefeuille d'origine, si seulement le Déposant a été modifié !


<!-- ### Further Reading:

* [Setting Your Primary Name](setting-your-primary-name.md) 
-->
