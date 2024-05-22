import Elem from "./Elem.js";
import { jatekLISTA } from "./jatekLISTA.js";
export default class JatekTer{
    #jatekLISTA=[];
 constructor(jatekLISTA){
    this.#jatekLISTA=jatekLISTA
    const szuloElem=$(".jatekter")
    for (let index=0; index<9;index++){
        const elem=new Elem(index,this.#jatekLISTA[index],szuloElem)
    }
 }   
}