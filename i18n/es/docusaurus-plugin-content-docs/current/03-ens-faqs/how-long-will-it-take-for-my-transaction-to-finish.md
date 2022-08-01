---
title: '¿Cuánto demorara terminar mi transacción?'
id: Cuánto tiempo duran las transacciones
---

# ¿Cuánto demorara terminar mi transacción?

### Ethereum Gas (Gwei) y Transacciones

El tiempo para que las transacciones de Ethereum terminen de añadir datos a un bloque depende del uso de la red. Hay una comisión cobrada por usar el blockchain, que es la comisión de gas en gwei. Un gwei es igual a 0.000000001 ETH Cuando hay muchas transacciones en el blockchain, las comisiones de gas pueden aumentar debido a la competencia de los validadores para minar una transacción. En la mayoría de los casos, la transacción terminará. Sin embargo, el plazo dependería de cuándo los mineros añadan los datos al bloque. Establecer un límite demasiado bajo para una comisión de gas puede causar que una transacción se sienta durante demasiado tiempo; horas o días, o incluso no se extrae en absoluto.

### Buscando transacciones atascadas

Cuando se busca la razón por la que una transacción podría no haber terminado, el primer lugar para mirar es en un explorador de blockchain como [Etherscan.](https://etherscani.io). Después de buscar su billetera, puede ver todas las transacciones pendientes listadas allí. If you don't see any pending transactions, but you see them in your wallet software such as MetaMask, those transactions pending there have not been sent to the blockchain. Están atascados localmente en el software de la billetera.

Por otro lado, si tienes transacciones pendientes vistas en el explorador de bloques, puede limpiarlos enviando una transacción de 0 ETH con el mismo valor de nonce a su propia billetera. En esta nueva transacción, debe establecer el precio del gas más alto para que sea recogido y la transacción antigua con el mismo nonce cancelado. Hay más lectura de la documentación de Etherscan [sobre cómo reemplazar una transacción. ](https://info.etherscan.com/how-to-replace-a-transaction/)
