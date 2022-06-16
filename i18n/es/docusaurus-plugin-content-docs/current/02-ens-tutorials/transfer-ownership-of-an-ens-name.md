---
title: Transferir la propiedad de un nombre de ENS
id: Nombre de transferencia
---

# Transferir la propiedad de un nombre de ENS

Para transferir la propiedad de un nombre de ENS a otra cartera, conéctate a la aplicación ENS. The walllet that is listed as the Registrt is the **owner** of the ES name. En la captura de pantalla de abajo, (1) indica al inscrito.

![Editando registros ENS y ransfering el nombre.](./img/transfer-1.png "En la aplicación de administrador, puede cambiar el registro para transferir el nombre.")

Mientras inicias sesión en la aplicación ENS con el monedero de registro, podrás hacer clic en "Transferir", y escriba una dirección de cartera a la que transferir la propiedad del nombre de ENS.

Sin embargo, el Controlador es el monedero que puede actualizar otros registros como la Dirección ETH (ver #3 en la imagen anterior). Transferir el Registro a una nueva cartera _no actualiza automáticamente_ la dirección del Controlador (ver #2 en la captura de pantalla), y no cambia la dirección de pago ETH. Estas son transacciones separadas que costarán gas actualizar.

Algunos usuarios pueden querer transferir completamente un nombre a otra cartera y tener los mismos registros por defecto configurados como si la nueva cartera registrara el nombre. Para ello, el monedero Controller debería actualizar primero la dirección ETH (ver #3) a la nueva dirección del monedero. Una vez que se haya cambiado, el monedero de Registro tendrá que actualizar el registro del Controlador a la misma dirección de la nueva cartera. Por último, el Registrt debería transferir la propiedad a la nueva cartera. De esta manera, el nombre se transfiere totalmente a una nueva cartera, y que el destinatario no tiene que hacer configuración adicional además de establecer su nombre primario. El orden de este proceso sí importa. Si el registro, por ejemplo, se transfiere al nuevo monedero primero, sólo el nuevo monedero puede actualizar el Controlador.


**Importante:** Sin actualizar la dirección ETH, los tokens enviados a _otro nombre. o_ todavía llegará a la billetera original, si sólo se ha cambiado el Registro!


<!-- ### Further Reading:

* [Setting Your Primary Name](setting-your-primary-name.md) 
-->
