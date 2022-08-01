---
title: '¿Cómo funciona la resolución de nombre?'
id: Resolución de nombre explicada
---

# ¿Cómo funciona la resolución nombre?

El registro primario es su _registro inverso_ responsable de resolver su dirección de billetera a su nombre de ENS, ayudando a DApps y otros servicios a mostrar su nombre ENS basado en su dirección de cartera.

La forma más fácil de entenderlo es considerar que la resolución del nombre funciona en dos direcciones:

### Resolución de avance

* **Su nombre ENS ➞ Su dirección de billetera,** o por un ejemplo práctico: **cthulu.eth ➞ 0xa19A7ae868eDe64C6C5256A64BCD3bf3a9F2d615** _determinado por el registro de dirección ETH actualizado en su domino. _

### Resolución Inverso

* **Su dirección de billetera ➞ Su nombre ENS,** o por un ejemplo práctico: **0xa19A7ae868eDe64C6C5256A64BCD3bf3a9F2d615 ➞ cthulu.eth** _determinado por el primario registro actualizado en su billetera. _

Para establecer un nombre ENS como primario en una billetera, es por lo tanto un requisito que el nombre ENS resuelva primero a esa dirección de billetera.

Para establecer un nombre ENS como primario en una billetera, siga los próximos pasos:

1. Asegúrese de que el registro se apunta a la dirección de la billetera.
2. Conecte su billetera a la [aplicación ENS Manager](https://app.ens.domains) y establezca el nombre ENS como principal.
