# Esercizio 1

> Inizializzare Vue con un data di testo semplice che mostri le monete (_coins_) disponibili e un data con html per i tentativi effettuati (_attempsMessage_) e stamparli in pagina

## Indicazioni

### Inizializzare Vue

Inserire lo script CDN di Vue (per comodità è già presente in head, basta scommentarlo) e creare una nuova istanza Vue montandola sul div con id `app`

### Data con testo semplice

Sostituire questa frase

```
Hai accumulato <img src="./src/assets/money.png" width="16" class="coin" /> <strong>0 monete</strong>
```

al commento `<!-- coins-->` in pagina e spostare il testo '0 monete' all'interno di una proprietà

**Nome della proprietà da usare**: `coins`

### Data con testo HTML

Creare una nuova proprietà con questa frase

```
Indovina la parola entro <strong>10 tentativi</strong>
```

e stampare adeguatamente il valore della proprietà al posto del commento `<!-- messabe attempts -->`

**Nome della proprietà da usare**: `attempsMessage`

-----------

💪 **Codice di partenza**: [intro/start](https://github.com/lorenaramonda/hanged-cdn/tree/intro/start)  
🤫 **Soluzione**: intro/finish