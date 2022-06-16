
# Terminología común

Esta página contiene un listado de alguna terminología comúnmente usada a lo largo de esta documentación.

### Registros de dirección

Los registros de direcciones ENS almacenan la clave pública o direcciones de cartera de otras criptomonedas. dApps que integran ENS puede usar su nombre de ENS para resolver estas direcciones. El uso práctico de esto es

### Cadena de bloques

Un blockchain es una base de datos pública que se actualiza y se comparte a través de muchas computadoras de una red. "Bloqueo" se refiere a los datos y estado que se almacenan en grupos consecutivos conocidos como "bloques". "Chain" se refiere al hecho de que cada bloque hace referencia criptográficamente a su padre. En otras palabras, los bloques se encadenan juntos. Los datos en un bloque no pueden cambiar sin cambiar todos los bloques subsiguientes, lo que requeriría el consenso de toda la red. Fuente:  [Ethereum.org](https://ethereum.org/en/developers/docs/intro-to-ethereum/)

### Registros de contenido

El registro de contenido puede ser configurado para contener el hash de contenido de un sitio web descentralizado. Un hash de contenido es esencialmente la "dirección" a un sitio web descentralizado, o [IPFS](https://docs.ipfs.io/concepts/how-ipfs-works/).

### Controlador (_"Manager")_

La cuenta que puede editar la dirección, el contenido y los registros de texto de un nombre. El controlador puede ser cambiado por el registrador ("propietario") o el propio controlador. El controlador no puede transferir nombre.

### Criptomoneda

Las criptomonedas son un almacén digital de valores que es verificado de forma segura por una red de ordenadores que se validan usando criptografía. Las criptomonedas proporcionan una forma transparente y segura de representar valor.

### Nombre DNS

Un nombre DNS (Sistema de nombres de dominio) es la URL estándar con la que la mayoría de la gente se utiliza para interconectar en Internet. The DNS system is commonly referenced when talking about the ES (Ethereum Name Service) because ENS is the next evolution in address routing on the internet.

### Nombre ENS

Un nombre ENS es un nombre legible por el ser humano que puedes usar para referenciar tu dirección de Ethereum, función como tu identidad descentralizada, almacenar metadatos, e incluso pagos directos criptomonedas fuera de la blockchain de Ethereum!

### Gas

El gas se refiere a la unidad que mide la cantidad de esfuerzo computacional requerida para ejecutar operaciones específicas en la red Ethereum.

Dado que cada transacción de Ethereum requiere recursos computacionales para ejecutar, cada transacción requiere un honorario. El gas se refiere a la cuota necesaria para realizar una transacción en Ethereum con éxito. Fuente:[ ethereum.org](https://ethereum.org/en/developers/docs/gas/).

### Periodo de Gracia

Un Period de Gracia es el periodo de tiempo después de que un nombre haya expirado oficialmente. Los períodos de gracia duran 90 días. En este momento el nombre no puede estar registrado para permitir que el registro anterior renueve el nombre. El nombre que no se renueve en el período de gracia de 90 días irá a una subasta de prima.

### Subasta Premium

A premium auction is a unique time frame after an ENS name has expirated and left the grace period. Las subastas Premium comienzan a un precio de $1M USD y disminuyen a $0 USD en un período de 28 días. La primera persona que paga el nombre a su precio decreciente es la apuesta ganadora. Cuando un nombre es comprado durante una subasta premium, la oferta ganadora pagará el precio de la prima además de las cuotas anuales de inscripción que normalmente son aplicables.

### Nombre primario

A Primary ENS Name record (formerly, "Reverse Record") makes your Ethereum address point to an ES name. Esto permite que dApps encuentre y muestre su nombre de ENS cuando se conecte a ellos con su cuenta de Ethereum

### Registro (_"Propietario")_

The owner has total control over an ENS Name. El registrador puede transferir el registro, establecer registros y asignar un controlador.

### Renovaciones

Las renovaciones son completamente anuales. Las Renovaciones permiten un espacio de nombres saludable que asegura que un nombre no se perderá para siempre si un propietario pierde el control del nombre.

**Nota:** Esta acción no está reservada a los propietarios o controladores, _cualquiera_ puede renovar un nombre.

### Resolver

Una solución es un contrato inteligente que posea registros. Los nombres se establecen por defecto al [Resolver público](https://etherscan.io/address/0x4976fb03c32e5b8cfe2b6ccb31c09ba78ebaba41) administrado por el equipo de ENS.

### Invertir registro

The Reverse Record is the Ethereum wallet address that an ENS Name displays when searched or reference by a dApp.

### Frase de semilla

Una frase de semilla es una serie de 12 o 24 palabras que se pueden utilizar para acceder, recuperar o recuperar su dirección de criptomonedas. Puede pensar en su frase de semilla como una contraseña a su dirección de criptomoneda o cartera.

Nunca **** Comparte tu frase de semilla con nadie, toma una captura de pantalla de tu frase de semilla o almacena tu frase de semilla electrónicamente. Si le das tu frase de semilla, les estás dando el control total de tus activos. Si pierdes

**Advertencia:** Si le das la frase de semilla, está abandonando el control de sus activos. Si pierde su frase de semilla no hay forma de recuperar su activo.

### Subdominio o subnombre

Un subdominio es cualquier nombre que sea un nivel inferior a su nombre padre. Similar a las direcciones web DNS estándar, los subdominios en el sistema de nomenclatura ENS usan puntos jerárquicos. Los subdominios pueden existir como fichas ERC-1155 completamente controladas y gestionadas por el propietario del subdominio.

### Registro de texto

Registros de texto es cualquier texto arbitrario que desee adjuntar a su nombre de ENS. Estos registros pueden ser direcciones, descripciones, correos electrónicos, palabras clave o nombres de usuario que se almacenan como metadatos de texto legibles.





