---
title: '¿Cómo funciona la resolución del nombre?'
id: Resolución de nombre explicada
---

# ¿Cómo funciona la resolución del nombre?

El registro primario es su _registro inverso_ responsable de resolver su dirección de cartera a su nombre de ENS, ayudando a DApps y otros servicios a mostrar tu nombre ENS basado en tu dirección de cartera_._

La forma más fácil de entenderlo es considerar que la resolución del nombre funciona en dos direcciones:

### Resolución de reenvío

* **Su nombre ENS (Su dirección de monedero),** o para un ejemplo práctico: **cthulu. 0xa19A7ae868eDe64C6C6C5256A64BCD3bf3a9F2d615** _Determinado por el registro de dirección ETH (hacia adelante) establecido en su dominio._

### Resolución inversa

* **Su dirección de monedero: Su nombre de ENS,** o para un ejemplo práctico: **0xa19A7ae868eDe64C6C5256A64BCD3bf3a9F2d615 ethulu. th** _Determinado por el registro primario (reverso) establecido en su cartera._

Para establecer un nombre ENS como primario en una cartera, es por lo tanto un requisito que el nombre de ENS resuelva primero a esa dirección de cartera.

In order to set your ES name as Primary in your wallet:

1. Asegúrese de que el registro ETH-Dirección apunta a la dirección de la cartera
2. Conecte su cartera a la [aplicación ENS Manager](https://app.ens.domains) y establezca el nombre ENS como principal.
