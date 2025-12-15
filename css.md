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
> ```html
> <div class="pollo">
>     <div class="rosso">
>     </div>
>     <div class="rosso">
>     </div>
> </div>
> 
> <style>
>   .pollo .rosso {}
> </style>
> ```