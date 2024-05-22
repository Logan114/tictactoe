import Elem from "./Elem.js";
import JatekTer from "./jatekTer.js";
let lepes =0;
const jatekLISTA=[" ","x"," ","o","o"," "," ","x","x"]
new JatekTer(jatekLISTA)
$(window).on("rokarudi",(event)=>{
console.log(event.detail)
let index=event.detail;
if (lepes%2===0){
    jatekLISTA[index]="X";
}
else{
    jatekLISTA[index]="O";
}
lepes++
new JatekTer(this.jatekLISTA)
})