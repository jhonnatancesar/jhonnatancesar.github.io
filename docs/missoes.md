---
description: O que é uma missão de acompanhamento de preço no AIShoppingAgent e como gerenciá-la.
---

# O que é uma missão

Uma missão é simplesmente um produto que você pediu para o AIShoppingAgent acompanhar. Nada mais complicado que isso — é só o nome que usamos aqui para "aquele pedido que você fez". É assim que ela aparece para você, dentro do chat:

<div class="ai-mission-grid" markdown>

<div class="ai-mission-card" markdown>
<p class="ai-mission-card__title">SSD NVMe 2 TB</p>
<span class="ai-badge ai-badge--active">🟢 Acompanhando</span>
<ul class="ai-mission-card__meta">
<li>🎯 Até R$ 700</li>
<li>🏪 4 lojas</li>
</ul>
<div class="ai-mission-card__actions"><button type="button">Pausar</button><button type="button">Editar</button></div>
<p class="ai-mission-card__hint">Ilustrativo — não executa nenhuma ação real.</p>
</div>

<div class="ai-mission-card" markdown>
<p class="ai-mission-card__title">Ryzen 7 5700X3D</p>
<span class="ai-badge ai-badge--paused">🟡 Pausada</span>
<ul class="ai-mission-card__meta">
<li>Sem preço-alvo definido</li>
<li>🏪 2 lojas</li>
</ul>
<div class="ai-mission-card__actions"><button type="button">Continuar</button><button type="button">Editar</button></div>
<p class="ai-mission-card__hint">Ilustrativo — não executa nenhuma ação real.</p>
</div>

</div>

Repare que uma missão pode ter um preço-alvo definido (como a primeira) ou não (como a segunda) — nos dois casos, o AIShoppingAgent avisa quando o preço cai em relação ao que já foi visto; o preço-alvo só acrescenta um segundo motivo para avisar.

## O que você pode fazer com uma missão

Você tem controle total, pelo mesmo chat onde ela foi criada:

| Ação | O que acontece |
| --- | --- |
| **Criar** | Você descreve o produto, e uma nova missão começa a ser acompanhada. |
| **Consultar** | Você vê todas as suas missões — ativas, pausadas e canceladas — de uma vez. |
| **Pausar** | O acompanhamento para por um tempo, mas nada do que já foi visto se perde. |
| **Continuar** | Uma missão pausada volta a ser acompanhada de onde parou. |
| **Editar** | Você troca as lojas monitoradas ou o preço-alvo, sem precisar recriar a missão. |
| **Cancelar** | A missão é encerrada de vez e para de ser acompanhada. |

## Os estados de uma missão

<div class="ai-states" markdown>
<span class="ai-badge ai-badge--active">🟢 Ativa</span>
<span class="ai-states__arrow">— você pausa →</span>
<span class="ai-badge ai-badge--paused">🟡 Pausada</span>
<span class="ai-states__arrow">— você retoma →</span>
<span class="ai-badge ai-badge--active">🟢 Ativa</span>

<div class="ai-states__branch" markdown>
A qualquer momento, ativa ou pausada, você também pode <span class="ai-badge ai-badge--cancelled">🔴 Cancelada</span> — e, só se você mesmo definiu um prazo, ela pode ficar <span class="ai-badge ai-badge--neutral">⚪ Expirada</span> quando esse prazo chega.
</div>
</div>

- **Ativa** — está sendo acompanhada normalmente; alertas podem chegar a qualquer momento.
- **Pausada** — o acompanhamento para temporariamente, mas o histórico continua guardado; pode ser retomada quando você quiser.
- **Cancelada** — encerrada por você; não volta a ser acompanhada.
- **Expirada** — só existe se você mesmo definiu um prazo para aquela missão. Por padrão, uma missão não tem prazo e continua ativa até você decidir pausar ou cancelar.

??? note "Prefere ver como diagrama?"
    ```mermaid
    stateDiagram-v2
        [*] --> Ativa: você cria a missão
        Ativa --> Pausada: você pausa
        Pausada --> Ativa: você retoma
        Ativa --> Cancelada: você cancela
        Pausada --> Cancelada: você cancela
        Ativa --> Expirada: prazo definido é atingido (opcional)
        Cancelada --> [*]
        Expirada --> [*]
    ```

Quer ver esse controle em ação? Veja os exemplos em [Telegram](telegram.md).
