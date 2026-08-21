---
description: O passo a passo de como o AIShoppingAgent monitora preços e avisa você pelo Telegram.
---

# Como funciona

Tudo acontece numa conversa, dentro do Telegram — o mesmo app de mensagens que você provavelmente já usa. Não existe painel, não existe aplicativo separado para instalar, não existe cadastro complicado. Você fala com o AIShoppingAgent como falaria com uma pessoa que está te ajudando a caçar uma promoção.

<div class="ai-steps" markdown>

<div class="ai-step" markdown>
<span class="ai-step__index">01</span>
<div markdown>
<p class="ai-step__title">Você conta o que está procurando</p>
<p class="ai-step__text">Do seu jeito, com suas próprias palavras: "quero um SSD NVMe de 2TB, de preferência até R$ 700". Não existe formulário para preencher nem menu complicado para navegar — é como mandar uma mensagem para um amigo.</p>
<div class="ai-step__mock"><span class="ai-mock-msg">"quero um SSD NVMe de 2TB até R$ 700"</span></div>
</div>
</div>

<div class="ai-step" markdown>
<span class="ai-step__index">02</span>
<div markdown>
<p class="ai-step__title">O AIShoppingAgent entende</p>
<p class="ai-step__text">Ele lê o que você escreveu e monta, sozinho, o que estamos chamando aqui de uma <strong>missão</strong>: o registro de que você quer acompanhar aquele produto. A partir de agora, sempre que falarmos em "missão", é isso — um pedido seu que ficou ativo.</p>
<div class="ai-step__mock"><span class="status-pill">Missão criada</span></div>
</div>
</div>

<div class="ai-step" markdown>
<span class="ai-step__index">03</span>
<div markdown>
<p class="ai-step__title">Ele começa a acompanhar, sozinho</p>
<p class="ai-step__text">Você escolhe em qual — ou em quais — <a href="lojas/">lojas</a> procurar, e a partir daí não precisa fazer mais nada. O AIShoppingAgent continua checando o preço com o tempo, sem prazo para parar, a não ser que você mesmo peça para pausar ou cancelar.</p>
<div class="ai-step__mock"><span class="ai-badge ai-badge--active">🟢 Acompanhando</span></div>
</div>
</div>

<div class="ai-step" markdown>
<span class="ai-step__index">04</span>
<div markdown>
<p class="ai-step__title">Os preços vão sendo registrados</p>
<p class="ai-step__text">Cada preço encontrado fica guardado, sem apagar o que já tinha visto antes. É esse histórico que permite, mais para frente, dizer com segurança se um preço realmente caiu ou se só parece uma promoção.</p>
<div class="ai-step__mock">
<div class="ai-mock-history"><span style="height: 60%"></span><span style="height: 75%"></span><span style="height: 68%"></span><span style="height: 40%" class="is-low"></span></div>
</div>
</div>
</div>

<div class="ai-step" markdown>
<span class="ai-step__index">05</span>
<div markdown>
<p class="ai-step__title">Aparece uma boa oportunidade</p>
<p class="ai-step__text">Se o preço cair em relação ao que já foi visto, ou se chegar no valor que você definiu como alvo, o AIShoppingAgent identifica isso na hora.</p>
<div class="ai-step__mock"><div class="ai-mock-offer"><span>SSD NVMe 2TB — R$ 689,90</span><span>↓ 13,8%</span></div></div>
</div>
</div>

<div class="ai-step" markdown>
<span class="ai-step__index">06</span>
<div markdown>
<p class="ai-step__title">O Telegram te avisa</p>
<p class="ai-step__text">O aviso chega na hora, com o link direto para a oferta. Dali para frente, a decisão é sua: a compra acontece na loja, fora do AIShoppingAgent.</p>
<div class="ai-step__mock"><div class="ai-mock-notification">🔔 Preço-alvo atingido — SSD NVMe 2TB</div></div>
</div>
</div>

</div>

## O que vem no alerta

A mensagem mostra o preço encontrado — à vista e, quando a própria loja informa, também as opções de parcelamento — junto com o link direto para o anúncio.

## Depois de criar, você continua no controle

Uma missão não é algo que você cria e esquece — ela fica sob seu controle o tempo todo, direto pelo mesmo chat:

- ver todas as suas missões ativas, pausadas e canceladas;
- pausar uma missão sem perder nada do que já foi acompanhado, e retomar quando quiser;
- trocar as lojas monitoradas ou o preço-alvo de uma missão já criada;
- cancelar de vez uma missão que não interessa mais;
- escolher separadamente se quer ser avisado de queda de preço, de preço-alvo atingido, ou dos dois.

Quer ver esse controle mais de perto? Veja [Missões](missoes.md) e [Telegram](telegram.md).
