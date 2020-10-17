# Esercizio 2

> Permettere di indovinare una lettera tramite l'inserimento della stessa un input e mostrarla all'interno della parola se corretta

## Indicazioni

### Ciclo v-for

Creare un data che contenga la parola da indovinare

**Nome della proprietà da usare**: `word2discover`

Ciclare le lettere di questa parola per generare il placeholder delle lettere

Utilizzare per il ciclo questo markup

```
<div class="word2discover">
  <span class="letter">
    <span>LETTERA</span>
  </span>
</div>
```

sostituendolo al commento `<!-- array of letters -->`

### Condizione v-if

Accertarsi che il div `.words` aggiunto sia visibile solo se presente una parola  
Per testare resettarne il valore dalla console `app.word2discover = ''`

### Input binding

Aggiungere un input che permetta di inserire una lettera da indovinare legato ad una proprietà nel data.

Utilizzare questo markup

```
<input
  type="text"
  maxlength="1"
  placeholder="inserisci una consonante"
  class="input input__letter"
  pattern="[^aeiou]"
  required
/>
```

sostituendolo al commento `<!-- input letter -->`

**Nome della proprietà da usare**: `letter2check`

### Metodo

A questo punto sarà necessario creare un funzione che verifichi se la lettera è buona (esiste nella parola) o cattiva  
Per tenere traccia di queste lettere ci servono due nuovi data di tipo array, uno per le lettere buone e uno per quelle cattive

**Nomi delle proprietà da usare**: `goodLetters` e `badLetters`

Creare pertanto un metodo che verifichi l'input inserito, controlli se la lettera c'è nella parola e in caso affermativo aggiungerlo all'array `goodLetters`, altrimenti all'array `badLetters`

**Nome del metodo da usare**: `confirm`

### Event binding

Aggiungere il bottone

```
<button class="action action__confirm">Controlla</button>
```

al posto del commento `<!-- button letter check -->` e scatenare al click su di esso il metodo appena creato  
**Attenzione** ⚠️ Trovandoci all'interno di un form questo bottone si comporta da submit per cui la pagina si refresherà impedendo al metodo di funzionare correttamente.  
Aggiungere, pertanto, all'evento l'[event modifier appropriato](https://vuejs.org/v2/guide/events.html#Event-Modifiers) che prevenga questo comportamento

Accertarsi, infine, che ad ogni verifica di lettera l'input venga correttamente svuotato per poter inserire una nuova lettera.

### Challenge 😏

A questo punto è necessario nascondere tutte le lettere dalla parola da indovinare fintanto che l'utente non inserisce una lettera buona in modo che venga mostrata **solo** quando corretta  
Soluzione da adottare a discrezione

## Senza mani 🙌 (esercizi PRO)

> Aggiungere un game over dopo 6 tentativi errati rappresentandone i tentativi mostrando l'immagine dell'impiccato nonché dopo un massimo di tentativi totali possibile e bloccare l'interazione col gioco

### Gestire il game over per tentativi errati

Sostituire l'svg

```
<div class="hanged">
  <svg width="290px" height="500px" viewBox="0 0 290 500" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
    <defs></defs>
    <g id="hanged-man">
      <g id="man">
        <circle id="head" stroke="#151515" fill="none" stroke-width="3" cx="222.5" cy="117.5" r="33.5"></circle>
        <rect id="body" fill="#151515" transform="translate(222.500000, 226.500000) scale(-1, 1) translate(-222.500000, -226.500000) "x="221" y="151" width="3" height="151"></rect>
        <polygon id="right-arm" fill="#151515" points="222.549038 151.24241 161.049038 225.057466 158.450962 224.018023 219.950962 150.202967"></polygon>
        <polygon id="left-arm" fill="#151515" points="286.799038 223.971604 284.200962 225.011046 222.200962 150.595867 224.799038 149.556425"></polygon>
        <rect id="right-leg" fill="#151515" transform="translate(192.500000, 351.500000) scale(-1, 1) rotate(-30.000000) translate(-192.500000, -351.500000) " x="191" y="292" width="3" height="119"></rect>
        <rect id="left-leg" fill="#151515" transform="translate(252.500000, 351.500000) scale(-1, -1) rotate(-30.000000) translate(-252.500000, -351.500000) " x="251" y="292" width="3" height="119"></rect>
      </g>
      <g id="pole">
        <rect id="Rectangle" fill="#151515" transform="translate(224.500000, 42.000000) scale(-1, 1) translate(-224.500000, -42.000000) " x="223" y="0" width="3" height="84"></rect>
        <rect id="Rectangle" fill="#151515" transform="translate(113.500000, 1.500000) scale(-1, 1) rotate(-270.000000) translate(-113.500000, -1.500000) " x="112" y="-111"width="3" height="225"></rect>
        <rect id="Rectangle" fill="#151515" transform="translate(1.500000, 250.000000) scale(-1, 1) translate(-1.500000, -250.000000) " x="0" y="0" width="3" height="500"></rect>
      </g>
    </g>
  </svg>
</div>
```

al commento `<!-- svg -->`e mostrare le forme che compongono la persona stilizzata, identificabili dal loro ID (sono già in ordine di apparizione), in sequenza man mano che i tentativi fallimentari aumentano

È ora il momento di interrompere il gioco in caso di game over, per iniziare in caso di 6 tentativi errati

Creare un data di tipo booleano in cui salvare lo stato del gioco con un valore iniziale di `false`

**Nome della proprietà da usare**: `gameover`

**Challenge** 😏 Valorizzare la proprietà `gameover` a `true` al momento opportuno

Sostituire il seguente messaggio

```
<p><strong>Oh no! HAI PERSO!</strong></p>
<p>
  La parola era <strong>{{ word2discover }}</strong>
</p>
```

al commento `<!-- message game over -->`e renderizzare entrambe le frasi sotto un'unica condizione di `gameover` a `true`

### Limitare il tempo del gioco ad un numero massimo di tentativi

Aggiungere la gestione di un massimo di 10 tentativi totali (sia che lettera scommessa sia stata indovinata che no)  
ℹ️ _Non è ancora un gameover: verrà data più tardi la possibilità di provare ad indovinare l'intera parola come ultima possibilità di vittoria_

**Nomi delle proprietà da usare**: `totalAttemps` e `usedAttemps`

Nel precedente esercizio è stata aggiunta la frase _Indovina la parola entro 10 tentativi_ che occorre ora rendere dinamica per mostrare il numero totale di tentativi configurato  
Non deve essere un numero statico, ma un numero che decrementa ogni volta che viene sfruttato un tentativo in modo da notificare l'utente quanto gli rimane per riuscire a completare il gioco con successo

**Challenge** 😏 Una volta finiti i tentativi disponibili oppure a gameover per 6 tentativi errati **impedire la possibilità di provare ad indovinare ancora le lettere**

### Re-inizializzare il gioco

Aggiungere un metodo di reset che riporti il gioco al suo stato iniziale

**Nome del metodo da usare**: `reset`

Inserire il seguente markup

```
<button class="button button__start">Ricomincia</button>
```

in sostituzione al commento `<!-- button start -->` e scatenare sul seguente bottone il reset del gioco

-----------

💪 **Codice di partenza**: functionality/start  
🤫 **Soluzione**: functionality/finish
