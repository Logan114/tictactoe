export default class Elem{
    #ertek=" ";
    #szuloElem;
    #divElem;
    #index;
    constructor(index,ertek,szuloElem){
        this.#ertek = ertek
        console.log(this.#ertek)
        this.#index=index
        this.#szuloElem=szuloElem
        this.#megjelenit()
        this.#divElem=this.#szuloElem.children("div:last-child")
        console.log(this.#divElem)
        this.#divElem.on("click",() =>{
            if (this.#ertek=== " "){
            this.#trigger("rokarudi")
        }
        })
    }
    #megjelenit(){
        let txt=`
        <div class="elem">
        <p>${this.#ertek}</p>
        </div>
        `
        this.#szuloElem.append(txt)
    }
    #trigger(esemenynev){
        const e = new CustomEvent(esemenynev,{detail:this.#index})
    window.dispatchEvent(e)
    }

}