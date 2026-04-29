

const rutor = document.querySelectorAll('.box');





          window.alert("sätt ut din första båt(4 rutor)");
          
     
       
        let båtlängd = [2, 4, 3, 3, 5];
        let aktuellBåt = 0;
        let valdaRutor = [];

        rutor.forEach(ruta => {
            ruta.addEventListener('click', () => {
                if(aktuellBåt >= båtlängd.length){
                    alert("nu har du lagt ut alla dina båtar");
                    return;
                }
        
                let id = Number(ruta.id.replace("ruta", ""));
        
                // första klicket
                if (valdaRutor.length === 0) {
                    ruta.style.backgroundColor = "green";
                    valdaRutor.push(id);
                    return;
                }
        
                let senaste = valdaRutor[valdaRutor.length - 1];
        
                let giltig =
                    (Math.abs(id - senaste) === 1 &&
                     Math.floor((id - 1) / 10) === Math.floor((senaste - 1) / 10))
                    ||
                    (Math.abs(id - senaste) === 10);
        
                if (!giltig) {
                    alert("Du måste bygga båten i en rak linje!");
                    return;
                }
        
                ruta.style.backgroundColor = "green";
                valdaRutor.push(id);
        
                // ✔ Kolla AFTER push
                if (valdaRutor.length === båtlängd[aktuellBåt]) {
                    alert("Båt klar!");
                    aktuellBåt++;
                    valdaRutor = [];
                }
               
        
            });
        });
       


















 /*rutor.forEach(ruta => {
     ruta.addEventListener('click', () => {
         ruta.style.backgroundColor = "green";
          alert("Du klickade på ${ruta.id}"); }); });*/




















































/*for(let i = 0; i <= 200; i++){
    if(i%2 ==  0){
        window.alert("player 1 turn");

    }
    if(i%2 != 0){
        window.alert("player 2 turn");
    }*/