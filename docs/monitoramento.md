# Monitoramento de preços

## Como o preço é acompanhado

Cada missão ativa gera consultas periódicas às lojas selecionadas. Toda consulta que encontra o produto registra uma nova observação de preço — o histórico completo fica preservado, sem sobrescrever observações anteriores.

## Preço à vista e parcelado

O preço à vista é a referência usada para comparações e alertas. Quando a própria loja informa condições de parcelamento (quantidade de parcelas, valor de cada uma, se há juros), essa informação também é exibida junto à oferta — mas **nunca** é calculada ou estimada pelo AIShoppingAgent: só aparece quando a loja declara explicitamente.

## Quando um alerta é disparado

Dois tipos de alerta existem, e podem ser ativados ou desativados de forma independente:

- **Queda de preço** — disparado quando o preço de uma oferta já vista pela missão cai em relação à observação anterior.
- **Preço-alvo atingido** — disparado quando o preço fica igual ou menor que o valor-alvo definido na missão.

Um alerta só é enviado quando existe de fato uma queda ou um alvo atingido — o AIShoppingAgent não notifica preços estáveis nem reenvia o mesmo alerta repetidamente enquanto o preço permanece no mesmo patamar.

## Precisão em vez de estimativa

Nenhum preço mostrado é inferido: todo valor exibido — à vista, parcelado ou de frete — vem diretamente da coleta mais recente feita na loja. Quando uma informação não está disponível na fonte, o AIShoppingAgent mostra que ela é desconhecida em vez de presumir um valor.
