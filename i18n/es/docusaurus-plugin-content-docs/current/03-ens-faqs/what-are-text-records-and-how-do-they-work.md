---
title: '¿Qué son los registros de texto?'
id: Registros de texto
---

# ¿Qué son los registros de texto y cómo funcionan?

## Registros de texto

Los registros de texto le permiten adjuntar y almacenar datos de texto públicos y arbitrarios a su nombre de Ethereum. Sus registros de texto son esencialmente metadatos legibles por el usuario y controlados por el usuario para aplicaciones a las que hacer referencia y utilizar. Debido a que sus registros de texto son creados por usted y almacenados en el blockchain de Ethereum, permiten un perfil de usuario autosoberano y descentralizado. Esto significa que su información y perfil pueden empezar a escapar de la arquitectura centralizada de Web2.

Con el Servicio de Metadatos [ENS](https://metadata.ens.domains/docs) estos registros de texto no están confinados al Blockchain de Ethereum y pueden ser referenciados por DNS.

Para los datos técnicos sobre la EIP que hace esto posible, vea: [EIP-634](https://eips.ethereum.org/EIPS/eip-634).

### ¿Cómo puedo agregar un registro de texto?

En la [aplicación ENS](https://app.ens.domains), puede agregar un registro haciendo clic en el enlace 'Añadir/Editar' en la pestaña 'registros':

![Añadir/Editar registros](./img/text-records-1.png "Añadir/Editar tus registros de texto.")

Debería ver algunos recuadros desplegables que le permitirán elegir agregar un registro “TEXT”, el tipo de registro de texto (e. . “URL”), y luego introduzca la información para ese registro:

![Añade tu texto.](./img/text-records-2.png "Añade tu texto a los campos.")

Una vez que estés listo, haz clic en "Confirmar" para enviar la transacción, y una vez que esté minada, deberías verla a continuación.

**Nota:** Los registros de texto, como todos los registros ENS, son públicos visibles.


### Tipo de campos de texto.

Aunque los usuarios pueden definir fácilmente nuevos registros de texto, hay varias claves establecidas en el Administrador de Dominios de ENS.

#### Claves globales comunes

Las claves globales sólo deben consistir en letras minúsculas, números y guiones.

* **Avatar** - Una URL en minúscula para una imagen usada como avatar o logo. Todas las minúsculas.
* **Descripción** - Una descripción del nombre.
* **Pantalla -** Un nombre canónico para mostrar el nombre de ENS.
* **E-mail -** Una dirección de correo electrónico
* **Palabras clave -** Una lista de palabras clave separadas por comas, ordenadas por primero más significativo.
* **URL -** Una URL del sitio web

#### Otras claves de servicio

Las claves de servicio deben estar compuestas por una notación inversa de puntos (ver los ejemplos siguientes), y contener al menos un punto. Un usuario puede crear su propia clave de servicio adherida a este formato.

* **com.github** - A Github username.
* **com.twitter** - Un nombre de usuario de Twitter.
* **io.keybase -** Un nombre de usuario de Keybase.
* **org.telegram -** Un nombre de usuario de Telegram.


**Nota:** Los nombres de usuario **NO** incluyen el símbolo "@" o contienen la URL completa del perfil de usuario.

