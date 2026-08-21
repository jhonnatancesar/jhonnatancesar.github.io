---
description: Uma demonstração interativa de conversa com o AIShoppingAgent, da criação de uma missão ao alerta recebido.
---

# Veja como seria, na prática

A conversa abaixo é interativa: clique no botão para ir avançando, mensagem por mensagem, como se estivesse acompanhando de verdade. É um exemplo ilustrativo — não uma captura real de um usuário —, mas mostra exatamente o tipo de interação que acontece com o AIShoppingAgent.

<div class="chat chat-demo" markdown>
<div class="chat-msg user"><span class="who">Você</span>`/criar_missao`</div>
<div class="chat-msg bot"><span class="who">AIShoppingAgent</span>Me conta o que você quer acompanhar. Pode descrever com suas palavras.</div>
<div class="chat-msg user"><span class="who">Você</span>Um SSD NVMe de 2TB, de preferência abaixo de R$ 700.</div>
<div class="chat-msg bot"><span class="who">AIShoppingAgent</span>Entendi! Vou acompanhar um <strong>SSD NVMe 2TB</strong> com preço-alvo de <strong>R$ 700,00</strong>. Em quais lojas você quer que eu procure?<br><br>1 · Pichau&nbsp;&nbsp;2 · Terabyte&nbsp;&nbsp;3 · Amazon&nbsp;&nbsp;4 · KaBuM!&nbsp;&nbsp;5 · Todas</div>
<div class="chat-msg user"><span class="who">Você</span>5</div>
<div class="chat-msg bot"><span class="who">AIShoppingAgent</span>✅ Combinado! Vou acompanhar o preço continuamente e te aviso assim que cair ou chegar no valor que você pediu.</div>
<div class="chat-msg bot"><span class="who">AIShoppingAgent</span>🔔 <strong>Preço-alvo atingido!</strong><br><br><strong>SSD NVMe 2TB</strong> — KaBuM!<br>💰 À vista: R$ 689,90<br>💳 Parcelado: 3x de R$ 229,97 sem juros<br><br>🔗 Ver anúncio</div>
<div class="chat-msg user"><span class="who">Você</span>`/listar_missoes`</div>
<div class="chat-msg bot"><span class="who">AIShoppingAgent</span>Você tem 1 missão ativa:<br><br>1 · SSD NVMe 2TB — alvo R$ 700,00 — Pichau, Terabyte, Amazon, KaBuM!</div>
</div>

Se o botão acima não aparecer (por exemplo, com JavaScript desligado), a conversa completa continua visível normalmente, sem nenhum passo escondido.

A partir daí, editar as lojas ou o preço-alvo, pausar ou cancelar essa missão é só mais uma mensagem no mesmo chat — sem precisar recriar nada do zero.

[Ver como funciona por completo](como-funciona.md){ .md-button }
