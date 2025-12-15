# CSS 
le regole in basso sovrascrivono quelle in alto;


```CSS
* {}

body {
    
}

.rosso { /*classe*/
    margin: 0 10px 2px 3px; /*0 top 10 right 2 bottom 3 left*/
}

.pollo .rosso {} /*specifica che vogliamo gli elementi figli di pollo con classe rosso, e conta sempre di più del singolo rosso*/
#ciccio .rosso {} /*se ciccio ha come classe pollo sofrascrive quello di prima perché l'id ha un valore più alto*/

#pippo {} /*id (vale di più della classe)*/

.pollo:first-child(){}
.pollo[data-border="1"] {} /*questo serve per essere molto specifici*/
.rosso::before {} /*all'interno del nostro elemento rosso aggiunge due elementi before e after*/
.rosso::after {}
```


> Esemepio:
 ```html
 <div class="pollo">
     <div class="rosso">

     </div>

     <div class="rosso">

     </div>
 </div>
 
 <style>
   .pollo .rosso {}
 </style>
 ```

### Display:
- inline -- gli elementi sono affiancati
- block -- sono dei blocchi che non sono affiancati
- table -- si comporta come una tabella
- flex -- usato per creare colonne e righe

### Position: (di default gli elementi non sono in nessuna categoria)
- relative -- sono relativi, non sono messi in maniera assoluta, sono dove html mi dice che stanno;
- absolute -- hanno la posizione assoluta sull'elemento relativo superiore;
- fixed -- è sempre sopra a tutto;
- sticky -- rimane appiccicato dove lo si mette;

per centrare 


 ```css
 element {
    display: inline;
    position: relative;
    left: 50%;
    transform: translateX(-50%);
 }
 ```

 usare un box-shadow generator per creare le box shadow