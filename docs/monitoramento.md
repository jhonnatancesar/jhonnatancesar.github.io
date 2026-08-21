---
description: Como o AIShoppingAgent acompanha o histórico de preço e decide quando um alerta deve ser enviado.
---

# Como ele acompanha o preço

Em uma frase: o AIShoppingAgent consulta o produto de tempo em tempo e guarda o que encontra. Quando aparece uma mudança que parece interessante, ele compara com tudo que já viu antes para decidir se realmente vale a pena te avisar.

Sem entrar em detalhes técnicos, é assim que isso funciona na prática:

## Nada se perde pelo caminho

Cada vez que o AIShoppingAgent confere o preço de um produto que você está acompanhando, ele guarda o que encontrou — sem apagar o que já tinha visto antes. É justamente esse histórico que permite diferenciar uma queda de preço de verdade de um número que só parece uma promoção.

## Preço à vista e parcelado, sem inventar nada

O preço à vista é sempre a referência principal. Quando a própria loja informa como fica o parcelamento — quantas vezes, quanto fica cada parcela, se tem juros —, essa informação aparece junto. Mas só quando a loja realmente declara isso: o AIShoppingAgent nunca calcula ou estima um valor de parcela por conta própria.

## Experimente a lógica você mesmo

Digite um preço que já foi visto antes e um preço de agora, e veja como o AIShoppingAgent decidiria se isso é ou não motivo para um alerta:

<div class="price-calc" markdown>
<div class="price-calc__row" markdown>
<label>Preço anterior
<input type="number" id="calc-before" inputmode="decimal" placeholder="R$ 799,90"></label>
<label>Preço encontrado agora
<input type="number" id="calc-now" inputmode="decimal" placeholder="R$ 689,90"></label>
</div>
<div class="calc-result" aria-live="polite"></div>
</div>

Isso é só para ilustrar a lógica — o AIShoppingAgent faz essa mesma comparação sozinho, com os preços reais que ele encontra nas lojas.

## Quando você é avisado

Existem dois motivos para receber um alerta, e você decide quais deles quer ativar:

- **O preço caiu** em relação ao que já tinha sido visto antes naquela missão.
- **O preço chegou no valor que você definiu como alvo** — o número que você disse que consideraria bom.

Preço estável não gera aviso nenhum, e o mesmo alerta não é reenviado várias vezes enquanto o preço continuar no mesmo patamar. Você só é incomodado quando realmente há algo novo para ver.

## Informação real, nunca chute

Nenhum valor mostrado é inventado ou estimado — preço, parcelamento ou frete, tudo vem direto da consulta mais recente feita na loja. Quando alguma informação simplesmente não está disponível, o AIShoppingAgent mostra que ela é desconhecida, em vez de arriscar um palpite.
