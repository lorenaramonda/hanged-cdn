# Esercizio 3

> Inizializzare il gioco con una parola casuale presa da un elenco

## Indicazioni

### Lifecycle

Creare un array di parole a scelta (quantità a discrezione purché sufficiente per eseguire una funzione di selezione random)

**Nome della proprietà da usare**: `words`

Aggiungere al metodo `init` la funzionalità che permetta di selezionare una parola in modo randomico dall'array appena creato e la setti come nuova parola da scoprire

💡 TIPS: sintassi per ottenere un numero random

```
Math.floor(Math.random() * [ARRAY].length)
```

Utilizzare bottone "Ricomincia" per testare che funzioni correttamente: non si conosce quale sia la nuova parola scelta ma si dovrebbe vedere cambiare la lunghezze delle lettere segnaposto

Poiché si vuole ottenere una parola random ad ogni inizio gioco non è più necessario che la proprietà `word2discover` sia valorizzata

Convertire `word2discover` quindi in stringa vuota e refreshare la pagina

### Challenge 😏

😰 La parola da scoprire sparisce quando si apre il gioco per la prima volta e ricompare solo quando si riclicca sul bottone ricomincia

Selezionare il [lifecycle appropriato](https://vuejs.org/v2/api/#Options-Lifecycle-Hooks) in cui lanciare il gioco in modo che quando si atterra sulla pagina la parola esista già

-----------

💪 **Codice di partenza**: [lifecycle/start](https://github.com/lorenaramonda/hanged-cdn/tree/lifecycle/start)  
🤫 **Soluzione**: lifecycle/finish