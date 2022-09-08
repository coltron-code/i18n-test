---
title: '¿Por qué hay 3 pasos para registrar un nombre ENS?'
id: Why are there 3 steps
---

# ¿Por qué hay 3 pasos para registrar un nombre ENS?

Hay tres pasos involucrados en el registro de un nombre ENS por la razón de frenar intentos de utilizar información privilegiada.

### Paso 1: Solicitud de Registro

Cuando empiezas la transacción, la ejecución genera una clave secreta que luego se almacena en su navegador local y se codifica con su dirección de billetera y nombre ENS. Puedes registrar su nombre ENS dentro de siete días después de este primer paso.


**Nota:** Completar el paso 1 no _reserva o mantiene_ el nombre ENS. El nombre no se registrará hasta que se cumpla el paso 3.

![Step 1. Request to register.](./img/registration-1.png "Step 1. Request to register.")

### Paso 2: Espere 1 minuto

Un periodo de esperar comienza al empezar del Paso 2; por la razón de frenar intentos de utilizar la información privada.

![Step 2. Wait for one minute.](./img/registration-1.png "Step 2. Wait for one minute.")

### Paso 3: Registrar

Cuando la transacción termina, se actualiza el nombre ENS y se registra el ERC-721 NFT conectado el nombre ENS.


![Step 3. Register.](./img/registration-1.png "Step 3. Register.")
### Conclusión

Si un minero quería intentar utilizar información privilegiada, tendrían que enviar su propio secreto cifrado, esperar 1 minuto y luego registrar el nombre ENS. Ya que no pueden retener tu transacción por un minuto, no podrán hacerlo, y el minero no puede usar el secreto comparado con el hash anterior.
