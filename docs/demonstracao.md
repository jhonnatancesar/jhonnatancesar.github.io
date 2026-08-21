# Demonstração

O exemplo abaixo é ilustrativo — mostra o tipo de conversa que acontece com o AIShoppingAgent, não uma captura real de um usuário.

## Criando uma missão

> **Você:** `/criar_missao`
>
> **AIShoppingAgent:** Me conta o que você quer acompanhar. Pode descrever com suas palavras.
>
> **Você:** um SSD NVMe de 2TB, de preferência abaixo de R$ 700
>
> **AIShoppingAgent:** Entendi! Vou acompanhar **SSD NVMe 2TB** com preço-alvo de **R$ 700,00**. Em quais lojas você quer que eu procure?
>
> `1` Pichau · `2` Terabyte · `3` Amazon · `4` KaBuM! · `5` Todas
>
> **Você:** `5`
>
> **AIShoppingAgent:** ✅ Missão criada! Vou monitorar o preço continuamente e te aviso assim que cair ou atingir o valor-alvo.

## Recebendo um alerta

> **AIShoppingAgent:** 🔔 **Preço-alvo atingido!**
>
> **SSD NVMe 2TB** — KaBuM!
>
> 💰 À vista: R$ 689,90
> 💳 Parcelado: 3x de R$ 229,97 sem juros
>
> [🔗 Ver anúncio]

## Gerenciando a missão depois

> **Você:** `/listar_missoes`
>
> **AIShoppingAgent:** Você tem 1 missão ativa:
>
> `1` SSD NVMe 2TB — alvo R$ 700,00 — Pichau, Terabyte, Amazon, KaBuM!

A partir daí, editar lojas ou preço-alvo, pausar ou cancelar a missão é só mais uma mensagem no mesmo chat.
