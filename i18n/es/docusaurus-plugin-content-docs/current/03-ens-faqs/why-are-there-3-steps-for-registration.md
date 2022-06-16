---
title: '¿Por qué hay 3 pasos para el registro?'
id: Por qué hay 3 pasos
---

# ¿Por qué hay 3 pasos para el registro?

Hay tres pasos implicados en el registro de un nombre de ENS que está destinado a resolver el problema del funcionamiento inicial.

### Paso 1: Solicitud de registro

The commit in Step 1 hash a secret key generated and stored in your browser's local storage and hash it with your wallet address and ES name so that you can later (within 7 days) request to register it without revealing it publicly.


**Nota:** Completar el paso 1 no _reserva o mantenga_ el nombre ENS. El nombre no se registrará hasta que se complete el paso 3.

![Paso 1. Solicitud de registro.](./img/registration-1.png "Paso 1. Solicitud de registro.")

### Paso 2: Espere 1 minuto

A 1 minute waiting period starts to prevent the front-running of the ES name registration.

![Paso 2. Espere un minuto.](./img/registration-1.png "Paso 2. Espere un minuto.")

### Paso 3: Registrarse

The registration transaction is performed and the ES name is registered; the ERC-721 NFT for the ES name is minted and transferred into the registrant's wallet.


![Paso 3. Registro.](./img/registration-1.png "Paso 3. Registro.")
### En conclusión

Si un minero quería intentar hacer frente a este proceso, tendrían que enviar su propio secreto cifrado, esperar 1 minuto y luego registrar el nombre. Dado que no pueden retener tu transacción por un minuto, fallarán al hacerlo, y el minero no puede usar el secreto en comparación con el hash anterior.
