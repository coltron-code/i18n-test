
# Terminología Común

Esta página contiene una lista de alguna terminología comúnmente utilizada a lo largo de la documentación.

### Registros

Los registros de direcciones ENS almacenan la clave pública o las direcciones de la billetera de otras criptomonedas. dApps que integran ENS puede usar su nombre ENS para resolver a estos registros.

### Blockchain

Un blockchain es una base de datos pública que se actualiza y se comparte en muchos ordenadores de una red. El "Block" se refiere a datos y estado que se almacenan en grupos consecutivos conocidos como "blocks". "Chain" se refiere al hecho de que cada "block" hace referencia criptográficamente a su "block" principal. Es decir que los "blocks" se encadenan juntos. Los datos en un "block" no pueden cambiar sin cambiar todos los "blocks" posteriores, lo que requeriría el consenso de toda la red. Origen:  [Ethereum.org](https://ethereum.org/en/developers/docs/intro-to-ethereum/)

### Registros de contenido

El registro de contenido puede ser configurado para contener el hash de contenido de un sitio web descentralizado. Un hash de contenido es esencialmente la "dirección" a un sitio web descentralizado, o [IPFS](https://docs.ipfs.io/concepts/how-ipfs-works/).

### Controlador (_"Gerente")_

El controlador es la cuenta que puede editar la dirección, el contenido y los registros de texto de un nombre. El controlador puede ser cambiado por el registrador ("propietario") o el propio controlador. El controlador no puede transferir el nombre.

### Criptomonedas

Las criptomonedas son un almacén digital de valores que es verificado de forma segura por una red de ordenadores que se validan usando criptografía. Las criptomonedas proporcionan una forma transparente y segura de representar valor.

### Nombre DNS

Un nombre DNS (Sistema de nombres de dominio) es la URL estándar con la que la mayoría de la gente se utiliza para interactuar en El Internet. Se suele hacer referencia al sistema DNS cuando se habla de ENS (Servicio de nombres de Ethereum) porque ENS es la próxima evolución en el enrutamiento de direcciones en Internet.

### Nombre ENS

Un nombre ENS es un nombre legible por humanos. Se puede usar para hacer referencia a su dirección de Ethereum; ¡también funciona como su identidad descentralizada, almacenamiento de metadatos e incluso pagos de criptomonedas fuera de la cadena de bloques de Ethereum.

### Gas

El gas se refiere a la unidad que mide la cantidad de esfuerzo computacional requerida para ejecutar operaciones específicas en la red Ethereum.

Dado que cada transacción de Ethereum requiere recursos computacionales para ejecutar, cada transacción requiere una comisión.   Origen:  [Ethereum.org](https://ethereum.org/en/developers/docs/gas/).

### Período de gracia

Un período de gracia se refiere al período de tiempo después de que un nombre haya caducado oficialmente. Los períodos de gracia duran 90 días. Durante este período, el nombre no se puede volver a registrar. Es para dar oportunidad al registro anterior de renovar el nombre. Los nombres que no se renueven dentro del período de gracia irán a una subasta.

### Subasta

La subasta consiste en el período de tiempo después de que un nombre ENS haya vencido y excedido el período de gracia. Las subastas comienzan a un precio de $1M USD y disminuyen a $0 USD en un período de 28 días. La primera persona que paga por el nombre a su precio de descenso es la apuesta ganadora. Cuando un nombre se compra durante una subasta premium, la oferta ganadora pagará el precio de la prima además de las tasas anuales de inscripción que normalmente son aplicables.

### Nombre Primario

Un registro de nombre de ENS principal (anteriormente, "registro inverso") hace que su dirección de Ethereum apunte a un nombre de ENS. Esto permite que dApps encuentre y muestre su nombre de ENS cuando se conecte a ellos con su cuenta de Ethereum

### Registranto (_"Propietario")_

El propietario mantiente control total sobre un nombre ENS. El propietario puede transferir el registro, establecer registros y asignar un controlador.

### Extensiones

Las extensiones son anuales. Aseguran que un nombre no se perderá si un propietario pierde el control del nombre.

**Nota:** Esta acción no está reservada a los propietarios o controladores, _cualquiera_ puede renovar un nombre.

### Resolucionador

El resolucionador es un contrato inteligente que posea registros. Los nombres se establecen de forma predeterminada al [Resolucionador público](https://etherscan.io/address/0x4976fb03c32e5b8cfe2b6ccb31c09ba78ebaba41) administrado por el equipo de ENS.

### Registro Inverso

El Registro Inverso es la dirección de la billetera que un nombre ENS demuestra cuando se hace refereido por un dApp.

### Frase semilla

Una frase semilla es una serie de 12 o 24 palabras que se puede usar para acedar o recuperar su dirección de criptomoneda. Puede pensar en su frase semilla como una contraseña a su dirección de criptomoneda o biolletera.

Nunca comparte su frase semilla con nadie, ni toma una captura de pantalla de su frase o almacena su frase electrónicamente.

**Advertencia:** Si usted comparte su frase semilla, está abandonando el control de sus activos. Si pierde su frase semilla no hay forma de recuperar sus activos.

### Subdominio o subnombre

Un subdominio es cualquier nombre que sea un nivel bajo de su nombre padre. Similar a las direcciones web DNS estándar, los subdominios en el sistema de nomenclatura ENS usan puntos jerárquicos. Los subdominios pueden existir como fichas ERC-1155 completamente controladas y gestionadas por el propietario del subdominio.

### Registro de Texto

Registros de Texto son textos arbitrarios que se pueden adjuntar a su nombre de ENS. Estos registros pueden ser direcciones, descripciones, correos electrónicos, palabras clave o nombres de usuario que se almacenan como metadatos de texto legibles.





