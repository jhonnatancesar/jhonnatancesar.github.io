---
description: Como funciona a interação com o AIShoppingAgent pelo Telegram e quais comandos existem.
---

# Você já sabe usar (é só o Telegram)

Não existe um sistema novo para aprender. Toda a experiência com o AIShoppingAgent acontece dentro do Telegram — o mesmo aplicativo de mensagens que muita gente já tem instalado. É só abrir uma conversa privada com o bot e falar naturalmente, como falaria com uma pessoa.

## Por que pelo Telegram

<div class="grid cards" markdown>

-   :material-account-check-outline:{ .lg .middle } **Você já tem a conta**

    Não precisa criar mais uma conta em mais um lugar.

-   :material-bell-badge-outline:{ .lg .middle } **Notificação de verdade**

    Os avisos chegam no celular ou no computador, na hora em que o preço muda.

-   :material-message-text-outline:{ .lg .middle } **Sem formulário**

    Basta escrever com suas palavras.

</div>

## Escolha um momento para ver como é

<div class="ai-tabs" markdown>

<div class="ai-tabs__panel" id="panel-criar" data-label="Criar acompanhamento" markdown>

<div class="chat" markdown>
<div class="chat-msg user"><span class="who">Você</span>Quero acompanhar um SSD NVMe de 2 TB. Se aparecer abaixo de R$ 700, me avisa.</div>
<div class="chat-msg bot"><span class="who">AIShoppingAgent</span>Combinado! Vou acompanhar esse SSD com alvo de R$ 700. Em quais lojas você quer que eu procure?</div>
</div>

</div>

<div class="ai-tabs__panel" id="panel-alerta" data-label="Receber alerta" markdown>

<div class="chat" markdown>
<div class="chat-msg bot"><span class="who">AIShoppingAgent</span>🔔 Encontrei o SSD NVMe 2 TB por R$ 689,90, abaixo do valor que você pediu. Quer ver a oferta?</div>
</div>

O alerta traz o preço encontrado (à vista, e o parcelamento quando a loja informa), a loja de origem e um link direto para a oferta.

</div>

<div class="ai-tabs__panel" id="panel-consultar" data-label="Consultar" markdown>

<div class="chat" markdown>
<div class="chat-msg user"><span class="who">Você</span>`/listar_missoes`</div>
<div class="chat-msg bot"><span class="who">AIShoppingAgent</span>Você tem 1 acompanhamento ativo: SSD NVMe 2 TB, alvo R$ 700.</div>
</div>

</div>

<div class="ai-tabs__panel" id="panel-cancelar" data-label="Pausar / cancelar" markdown>

<div class="chat" markdown>
<div class="chat-msg user"><span class="who">Você</span>`/cancelar_missao`</div>
<div class="chat-msg bot"><span class="who">AIShoppingAgent</span>Encontrei 1 acompanhamento cancelável: SSD NVMe 2 TB. Confirma o cancelamento?</div>
</div>

Pausar funciona pelo mesmo chat, do mesmo jeito simples — o acompanhamento para sem perder nada do que já foi visto, e pode ser retomado quando você quiser.

</div>

</div>

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
