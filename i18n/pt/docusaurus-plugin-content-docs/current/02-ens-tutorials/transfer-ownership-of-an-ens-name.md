---
title: Transferir Propriedade de um Nome ENS
id: Name Transfer
---

# Transferir Propriedade de um Nome ENS

Para transferir a propriedade de um nome ENS para outra carteira, conecte-se ao Aplicativo ENS. A carteira que está listada como Registrante é o **proprietário** do nome ENS. Na imagem abaixo, (1) indica o Registrante.

![Editando Registros ENS e transferindo o nome.](./img/transfer-1.png "No aplicativo gerenciador, você pode alterar o registante para transferir o nome.")

Enquanto estiver logado no aplicativo ENS com a carteira Registrante, você poderá clicar em "Transferir”, e digite um endereço de carteira para transferir a propriedade do nome ENS.

No entanto, o controlador é a carteira que pode atualizar outros registros como o Endereço ETH (veja #3 na imagem acima). A transferência do Registrante para uma nova carteira _não atualiza automaticamente_ o endereço do Controlador (veja #2 na captura de tela), e não muda o endereço de pagamento ETH. Estas são transações separadas que custarão gás para atualizar.

Alguns usuários podem querer transferir completamente um nome para outra carteira e ter os mesmos registros padrão configurados como se essa nova carteira registrou o nome. Para fazer isso, a carteira de Controlador deve primeiro atualizar o endereço ETH (veja #3) para o novo endereço de carteira. Uma vez que isso for alterado, a carteira do Registrante precisará atualizar o registro de Controlador para o mesmo novo endereço de carteira. Finalmente, o Registrante deve transferir a propriedade para a nova carteira. Dessa forma, o nome é totalmente transferido para uma nova carteira, e esse destinatário não precisa fazer uma configuração adicional, além de definir o seu nome Primário. A ordem deste processo é muito importante. Se o Registrante for transferido, por exemplo, para a nova carteira primeiro, somente a nova carteira pode atualizar o Controlador.


**Importante:** Sem atualizar o registro do controlador, os tokens enviados para _outroname.eth_ ainda chegarão na carteira original. Tanto o registrante como o controlador devem ser alterados!


<!-- ### Further Reading:

* [Setting Your Primary Name](setting-your-primary-name.md) 
-->
