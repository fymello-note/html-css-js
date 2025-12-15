# CSS 
le regole in basso sovrascrivono quelle in alto;


```CSS
* {}

body {
    
}

.rosso { /*classe*/

}

.pollo .rosso {} /*specifica che vogliamo questo elemento con pollo e rosso, e conta sempre di più del singolo rosso*/

#pippo {} /*id (vale di più della classe)*/
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
> .pollo .rosso {}
> </style>
> ```