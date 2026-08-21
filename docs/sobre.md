---
description: O que é o AIShoppingAgent, qual problema ele resolve e para quem ele foi pensado.
---

# Sobre o AIShoppingAgent

O AIShoppingAgent nasceu de um problema simples: acompanhar o preço de um produto que você quer comprar dá trabalho. As boas promoções costumam durar pouco, e ninguém tem tempo de revisitar várias lojas todos os dias só para conferir se o preço caiu.

O AIShoppingAgent existe para fazer esse acompanhamento por você — de forma contínua, sem esforço manual — e te avisar exatamente no momento em que vale a pena olhar de novo.

## Para quem é

Para qualquer pessoa que já tenha em mente um produto específico (ou uma configuração específica, como um modelo de processador ou de placa de vídeo) e prefira esperar o preço certo em vez de comprar por impulso ou ficar checando lojas manualmente.

## O que o projeto não é

- Não é uma loja. O AIShoppingAgent não vende nada — ele aponta para a oferta na loja de origem.
- Não compra nada automaticamente em seu nome. A decisão final e a compra são sempre suas.
- Não é um comparador genérico de preços. Ele acompanha continuamente as missões que você criar, com histórico e alertas — não uma busca pontual.

## Como o projeto é construído

O AIShoppingAgent é desenvolvido de forma incremental, com foco em confiabilidade: preço registrado é preço preservado, e cada alerta enviado reflete um dado real coletado das lojas monitoradas, nunca um valor estimado ou calculado.
