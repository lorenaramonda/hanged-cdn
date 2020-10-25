# Esercizio 4

> Suddividere il codice in componenti e aggiungere una modale con textarea in cui copiare del testo casuale dal quale fare pescare solo le parole con un numero minimo di lettere da utilizzare per ripopolare l'array

## Indicazioni

### Componenti globali e locali

Convertire in un **componente globale** il div con classe CSS `word2discover` e accertarsi che riceva i necessari dati dal padre affinché continui a funzionare come ci si aspetta

**Nome del componente da usare**: `TheWord`

Convertire in un **componente locale** il div con classe CSS `hanged` e accertarsi che riceva i necessari dati dal padre affinché continui a funzionare come ci si aspetta

**Nome del componente da usare**: `HangedMan`

### Challenge 😏

Crea un nuovo componente (modale) riutilizzabile utilizzando questo markup

```
<div class="modal">
  <div class="modal__inner">
    <button class="modal__close">X</button>
  </div>
</div> 
```

**Nome del componente da usare**: `BaseModal`

Aggiungere la possibilità di inserire contenuto diverso all'interno del componente in modo da riutilizzarne la struttura generale ma contenuto personalizzato

Aggiungere il nuovo componente come ultimo elemento dell'istanza Vue padre e passare al componente il seguente contenuto

```
<form class="sentence">
  <label for="sentence">Configura il gioco</label>
  <textarea id="sentence" placeholder="Copia qui testo da cui estrarre parole"></textarea>
  <button class="button button__start">Estrapola parole</button>
</form>
```

Si avrà bisogno di creare un nuovo dato reattivo per il valore della textarea

**Nome della proprietà da usare**: `customText`

nonché un metodo per l'estrazione delle parole

**Nome del metodo da usare**: `getWords`

Saranno da creare nel padre o nel componente? 🤔

Infine aggiungere il bottone

```
<button class="action action__settings" title="Configura il gioco">Settings</button>
```

in sostituzione al commento `<!-- button settings -->` e fare in modo che la modale si veda/apra solo cliccando questo bottone  
PS: **su codesandbox potrebbe non essere subito visibile dovuto ad un path delle immagini che codesandbox interpreta diversamente** Sostituire in questo caso `assets` con `./src/assets` nel foglio di stile

Fare altresì in modo che cliccando sul bottone X (chiudi) la modale venga chiusa

Per testare utilizza questo testo:

```
Quel ramo de lago di Como, che volge a mezzogiorno, tra due catene non interrotte di monti, tutto a seni e a golfi, a seconda dello sporgere e del rientrare di quelli, vien, quasi a un tratto a ristringersi, e a prender corso e figura di fiume, tra un promontorio a destra, e un’ampia costiera dall’altra parte; e il ponte, che ivi congiunge le due rive, par che renda ancor più sensibile all’occhio questa trasformazione, e segni il punto in cui il lago cessa, e l’Adda ricomincia, per ripigliar poi il nome di lago dove le rive, allontanandosi di nuovo, lascian l’acqua distendersi e rallentarsi in nuovi golfi e in nuovi seni.
```

o prova un testo qualsiasi copiato dal web

-----------

💪 **Codice di partenza**: [components/start](https://github.com/lorenaramonda/hanged-cdn/tree/components/start)  
🤫 **Soluzione**: components/finish