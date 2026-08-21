---
description: Como funciona a interação com o AIShoppingAgent pelo Telegram e quais comandos existem.
---

# Alertas pelo Telegram

O Telegram é o único canal de interação com o AIShoppingAgent hoje. Tudo acontece num chat privado, direto entre você e o bot.

## Por que Telegram

- Você já tem o app instalado e não precisa criar mais uma conta.
- Alertas chegam como notificação, no seu celular ou computador, no momento em que o preço muda.
- A conversa em linguagem natural é suficiente para criar uma missão — sem formulário.

## O que você recebe

Quando uma missão encontra uma queda de preço ou atinge o valor-alvo, o bot envia uma mensagem com:

- o preço encontrado (à vista, e parcelado quando a loja informa);
- a loja de origem;
- um link direto para a oferta.

## Comandos principais

| Comando | O que faz |
| --- | --- |
| `/criar_missao` | Inicia a criação de uma nova missão a partir da sua descrição |
| `/listar_missoes` | Lista suas missões ativas, pausadas e canceladas |
| `/editar_missao` | Abre um menu guiado para trocar lojas ou o preço-alvo de uma missão |
| `/cancelar_missao` | Cancela uma missão existente |
| `/preferencias` | Ativa ou desativa, separadamente, alertas de queda de preço e de preço-alvo |
| `/privacidade` | Mostra um resumo de como seus dados são usados |

## Privacidade da conversa

O bot só responde no seu chat privado, vinculado à sua própria conta — grupos e canais não são usados para essa interação. Apenas o texto necessário para interpretar seu pedido é enviado à inteligência artificial; identificadores internos, e-mail e credenciais nunca fazem parte desse envio. Detalhes completos estão nas [Perguntas frequentes](faq.md).
