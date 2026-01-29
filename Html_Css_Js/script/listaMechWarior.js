window.onload = function() {
    "use strict";

    var chiavi = Object.keys(dictmechwarrior);

    for(let i = 0; i < chiavi.length; i++){
            let mechwarrior = dictmechwarrior[chiavi[i]];
            var tempatelistmech = `<li>
                <div class="pilota" id="mechw${i}">
                  <img src="${mechwarrior.immagine}" />
                  <div class="mechwstat">
                    <h3>${mechwarrior.name}</h3>
                    <p>Poloting skill: <span>${mechwarrior.modpiloting}</span><br /></p>
                    <p>Initiative: <span>${mechwarrior.modiniziativa}</span> <br /></p>
                    <p>Long Range Shoot: <span>${mechwarrior.modlogshooter}</span> <br /></p>
                    <p>Fisical Attack: <span>${mechwarrior.modfisicattack}</span> <br /></p>
                    <p>Multi Target: <span>${mechwarrior.modmultitarget}</span></p>
                  </div>
                  <!-- definiamo il radio button per la selezione del pilota -->
                  <input type="radio" name="mwchwarriors" id="mwradio${i}"  value="${mechwarrior.name}" class="css-radio"/>
                  <!-- label del radio button che poi gli darà lo stile  -->
                  <label for="mwradio${i}" class="css-label-radio"></label>
                </div>
            </li>`;

            //document.getElementById("lista-piloti").append(tempatelistmech);
            $('.lista-piloti').append(tempatelistmech);
    }

    $(document).ready(function() {
        $('.lista-piloti input[type="radio"]').click(function() {
            $(this).closest('li').addClass('selezionato-red').siblings().removeClass('selezionato-red');
        });
    })

    var chiavimech = Object.keys(dict);

    for(let i = 0; i < chiavimech.length; i++){
            let mech = dict[chiavimech[i]];
            var tempatelistmech = `<li>
                <div class="mech" id="mech${i}">
                  <img src="${mech.immaginemech}" />
                  <div class="mechwstat">
                    <h3>${mech.name}</h3>
                    <p>Tons: <span>${mech.tons}</span><br /></p>
                    <p>Walk: <span>${mech.walk}</span> <br /></p>
                    <p>Run: <span>${Math.ceil(mech.walk * 1.5)}</span> <br /></p>
                    <p>Jump: <span>${mech.jump}</span> <br /></p>
                    <p>HeatSink: <span>${mech.heatsink}</span></p>
                  </div>
                  <!-- definiamo il radio button per la selezione del pilota -->
                  <input type="radio" name="mech" id="radio${i}"  value="${chiavimech[i]}" class="css-radio"/>
                  <!-- label del radio button che poi gli darà lo stile  -->
                  <label for="radio${i}" class="css-label-radio"></label>
                </div>
            </li>`;

            //document.getElementById("lista-piloti").append(tempatelistmech);
            $('.lista-mech').append(tempatelistmech);
    }

    $(document).ready(function() {
        $('.lista-mech input[type="radio"]').click(function() {
            $(this).closest('li').addClass('selezionato-red').siblings().removeClass('selezionato-red');
            compilaDatiMech($(this).val());
        });
    })

}

function compilaDatiMech(mechname) {
    let mech = dict[mechname];
    let armorHead = mech.armorHead;
    let armorCTorso = mech.armorCTorso;
    let armorRTorso = mech.armorRTorso;
    let armorLTorso = mech.armorLTorso;

    $(".extArHst").text(armorHead);
    $(".extArCTst").text(armorCTorso);
    $(".extLTst").text(armorLTorso);
    $(".extRTst").text(armorRTorso);
}