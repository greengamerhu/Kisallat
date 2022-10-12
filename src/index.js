import "bootstrap/dist/js/bootstrap.bundle.js";
import "bootstrap/dist/css/bootstrap.css";
import"./style.css";
class Etel {
    nev;
    kaloria;
    constructor(nev, kaloria) {
        this.nev = nev;
        this.kaloria = kaloria;
    }

}

let eteleklist = [];  


document.addEventListener("DOMContentLoaded", () => {
    let ossz = 0;
    let display = document.getElementById("ossz")
    document.getElementById("pizza").addEventListener("click", () => {
        let listitem = document.createElement("li");
        let eleje = document.createElement("span")
        eleje.textContent = "pizza ("
        let kozepe = document.createElement("i");
        kozepe.textContent = 1000
        let vege = document.createElement("span");
        vege.textContent = ")";
        listitem.appendChild(eleje);
        listitem.appendChild(kozepe);
        listitem.appendChild(vege);
        document.getElementById("etelekList").appendChild(listitem);
        ossz += 1000
        display.textContent = "Öszkalória: " + ossz;
        eteleklist.push(new Etel("pizza", 1000));

    }); 

    document.getElementById("burger").addEventListener("click", () => {
        let listitem = document.createElement("li");
        let eleje = document.createElement("span")
        eleje.textContent = "Burger ("
        let kozepe = document.createElement("i");
        kozepe.textContent = 500 
        let vege = document.createElement("span");
        vege.textContent = ")";
        listitem.appendChild(eleje);
        listitem.appendChild(kozepe);
        listitem.appendChild(vege);
    

        document.getElementById("etelekList").appendChild(listitem);

        ossz += 500
        display.textContent = "Öszkalória: " + ossz;
        eteleklist.push(new Etel("Burger", 500));

    }); 
    document.getElementById("alma").addEventListener("click", () => {
        let listitem = document.createElement("li");
        let eleje = document.createElement("span")
        eleje.textContent = "alma ("
        let kozepe = document.createElement("i");
        kozepe.textContent = 100
        let vege = document.createElement("span");
        vege.textContent = ")";
        listitem.appendChild(eleje);
        listitem.appendChild(kozepe);
        listitem.appendChild(vege);
        
        document.getElementById("etelekList").appendChild(listitem);
        ossz += 100 
        display.textContent = "Öszkalória: " + ossz;
        eteleklist.push(new Etel("alma", 100));
        
        
    }); 
    document.getElementById("clearGomb").addEventListener("click", () => { 
        document.getElementById("etelekList").textContent = "";
        display.textContent = "Öszkalória: 0"
    });
    document.getElementById("stat").addEventListener("click", () => { 
        console.log("asd")
        let  egeszseges = eteleklist.filter(e => e.kaloria )
        egeszseges.sort((e1, e2) => {
            if (e1.kaloria > e2.kaloria) {return 1}
            else if (e1.kaloria < e2.kaloria) {return -1}
            else {return 0}
        });
        console.log(egeszseges)
    })

    
    console.log("Loaded")
});