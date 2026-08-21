---
description: Como funciona a interação com o AIShoppingAgent pelo Telegram e quais comandos existem.
---

# Você já sabe usar (é só o Telegram)

Não existe um sistema novo para aprender. Toda a experiência com o AIShoppingAgent acontece dentro do Telegram — o mesmo aplicativo de mensagens que muita gente já tem instalado. É só abrir uma conversa privada com o bot e falar naturalmente, como falaria com uma pessoa.

## Por que pelo Telegram

- Você provavelmente já tem o app — não precisa criar mais uma conta em mais um lugar.
- Os avisos chegam como notificação normal, no celular ou no computador, no exato momento em que o preço muda.
- Basta escrever com suas palavras — nada de formulário para preencher.

## Alguns exemplos do dia a dia

**Pedindo para acompanhar um produto:**

<div class="chat" markdown>
<div class="chat-msg user"><span class="who">Você</span>Quero acompanhar um SSD NVMe de 2 TB. Se aparecer abaixo de R$ 700, me avisa.</div>
<div class="chat-msg bot"><span class="who">AIShoppingAgent</span>Combinado! Vou acompanhar esse SSD com alvo de R$ 700. Em quais lojas você quer que eu procure?</div>
</div>

**Recebendo um alerta:**

<div class="chat" markdown>
<div class="chat-msg bot"><span class="who">AIShoppingAgent</span>🔔 Encontrei o SSD NVMe 2 TB por R$ 689,90, abaixo do valor que você pediu. Quer ver a oferta?</div>
</div>

**Consultando o que está acompanhando:**

<div class="chat" markdown>
<div class="chat-msg user"><span class="who">Você</span>`/listar_missoes`</div>
<div class="chat-msg bot"><span class="who">AIShoppingAgent</span>Você tem 1 acompanhamento ativo: SSD NVMe 2 TB, alvo R$ 700.</div>
</div>

**Cancelando um acompanhamento:**

<div class="chat" markdown>
<div class="chat-msg user"><span class="who">Você</span>`/cancelar_missao`</div>
<div class="chat-msg bot"><span class="who">AIShoppingAgent</span>Encontrei 1 acompanhamento cancelável: SSD NVMe 2 TB. Confirma o cancelamento?</div>
</div>

## O que o alerta mostra

Quando um produto que você está acompanhando encontra uma queda de preço ou chega no valor-alvo, a mensagem traz:

- o preço encontrado (à vista, e o parcelamento quando a loja informa);
- em qual loja está;
- um link direto para a oferta.

## Os comandos, se você preferir usá-los

A conversa livre já é suficiente na maior parte do tempo, mas também existem atalhos diretos:

| Comando | Para que serve |
| --- | --- |
| `/criar_missao` | Começa um novo acompanhamento a partir da sua descrição |
| `/listar_missoes` | Mostra tudo que você está acompanhando, pausado ou já cancelou |
| `/editar_missao` | Abre um passo a passo guiado para trocar lojas ou o preço-alvo |
| `/cancelar_missao` | Cancela um acompanhamento que não interessa mais |
| `/preferencias` | Liga ou desliga, separadamente, os avisos de queda de preço e de preço-alvo |
| `/privacidade` | Mostra um resumo de como seus dados são usados |

## Sobre a sua privacidade nessa conversa

O bot só responde no seu chat privado, vinculado à sua própria conta — grupos e canais não fazem parte dessa interação. Só o texto necessário para entender seu pedido é usado; nada de identificadores internos, e-mail ou credenciais entram nisso. Mais detalhes nas [Perguntas frequentes](faq.md).
