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

Accertarsi che il div `.words` aggiunto sia visibile solo se presente una parola  
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
  pattern="[^aeiouAEIOU]"
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

al posto del commento `<!-- button letter check -->`e scatenare al click su di esso il metodo appena creato  
**Attenzione** ⚠️ Trovandoci all'interno di un form questo bottone si comporta da submit per cui la pagina si refresherà impedendo al metodo di funzionare correttamente.  
Aggiungere, pertanto, all'evento l'[event modifier appropriato](https://vuejs.org/v2/guide/events.html#Event-Modifiers) che prevenga questo comportamento

Accertarsi, infine, che ad ogni verifica di lettera l'input venga correttamente svuotato per poter inserire una nuova lettera.

### Challenge 😏

A questo punto è necessario nascondere tutte le lettere dalla parola da indovinare fintanto che l'utente non inserisce una lettera buona in modo che venga mostrata **solo** quando corretta  
Soluzione da adottare a discrezione

-----------

💪 **Codice di partenza**: [functionality-1/start](https://github.com/lorenaramonda/hanged-cdn/tree/functionality-1/start)  
🤫 **Soluzione**: functionality-1/finish