# Esercizio 5

> Convertire il gioco in una app Vue NPM e completare le feature mancanti

## Indicazioni

### Riprodurre la suddivisione in componenti come da esercizio in CDN

Mantenendo la stessa suddivisione dell'app sviluppata con la CDN ripartire da qui dal [punto in cui è stata lasciata](https://github.com/lorenaramonda/hanged-cdn/tree/components/finish)

Per quanto riguarda lo stile si possono scegliere due strade: o copiarlo interamente nel componente App oppure ripartirlo adeguatamente per componente.

Sarà necessario aggiungere il [compilatore adeguato](https://vue-loader.vuejs.org/guide/pre-processors.html)

Occorrerà altresì caricare le immagini in assets [qui lo zip](assets.zip)

### Impedire l'inserimento delle vocali

Se il giocatore inserisce una vocale nel campo occorre fare in modo che quella lettera non possa essere passata alla funziona di verifica (per esempio, svuotando immediatamente il campo?)

### Mostrare le vocali

Mostrare l'elenco delle vocali dove ora è presente il commento `<!-- vocal -->`  
PS: le vocali saranno inizialmente disabilitate

### Conteggiare le monete per ogni tot consonanti uniche indovinate

Prevedere come configurazione un tot numero di consonanti da indovinare per guadagnare una moneta. 3 può essere un buon numero.

Sostituire questo markup

```
<p class="tip">Compra una vocale con le monete accumulate! Ogni CONSTOGUESS consonanti indovinate, guadagni una lettera!</p>
```

al commento `<!-- message tip -->` e valorizzare `CONSTOGUESS` con il numero della configurazione appena creata

**Challenge** 😏 Scegliere il modo appropriato per guadagnare una moneta ogni tot consonanti indovinate. Assicurarsi che ciò avvenga per consonanti **univoche**

Aggiornare il numero dinamico di monete guadagnate in alto a destra (sarà necessario refactorizzare il vecchio data `coins`)

Permettere l'acquisto di vocali solo quando ci sono monete disponibili. L'acquisto delle monete dovrà comportarsi nello stesso modo della verifica delle consonanti, quindi scalando i tentativi utilizzabili  

Cambiare lo stile delle vocali da disabilitate ad abilitate aggiungendo la classe `vocals--allowed` al div con classe CSS  `vocals` solo nel momento in cui le vocali sono acquistabili.

Assicurarsi che le vocali si possano comprare solo se si dispongono di monete e se il gioco non è in game over

**Attenzione** il numero delle monete utilizzabili non dovrà considerare quelle già utilizzate

Ricordarsi anche di aggiungere il reset delle monete alla re-inizializzazione del gioco

### Aggiungere la possibilità di dare la soluzione in qualsiasi momento

Sostituire il codice seguente

```
<input placeholder="inserisci la soluzione" class="input input__word" />
```

al commento `<!-- input solution -->`

e crea una relazione con un dato reattivo per la soluzione

**Nome della proprietà da usare**: `solution`

Sostituire il codice seguente

```
<button class="button button__end"></button>
```

al commento `<!-- button solution -->`

Nascondere l'input finché l'utente non avrà premuto il bottone. Il bottone dovrà mostrare il testo 'Conferma' inizialmente e 'Do la soluzione' una volta premuto

Al submit del form triggerare il check sull'intera parola solo nel caso in cui abbia come label Do la soluzione'

Se sbagliato mostrare il messaggio 'Hai perso' già presente, se corretto aggiungere correttamente un messaggio di vittoria

In entrambi i casi triggerare la fine del gioco `gameover`

-----------

💪 **Codice di partenza**: [repository hanged-npm](https://github.com/lorenaramonda/hanged-npm)

-----------

## Extras

### Vuoi provare a fare una chiamata API?

Utilizzando il [raw di questo file](https://github.com/lorenaramonda/hanged-cdn/blob/api/json/60000_parole_italiane.json) puoi simulare una chiamata API. Il json contiene 60.000 parole italiane. Puoi utilizzarlo direttamente online (ma c'è un token in querystring che scade dopo un po') oppure puoi scaricarlo in locale e utilizzare il pacchetto NPM [json-server](https://www.npmjs.com/package/json-server) per simulare un'API server.  
**Utile per simulare un loading in caso di attesa risposta API**
