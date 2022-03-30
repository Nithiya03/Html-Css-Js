class customElement extends HTMLElement{
    constructor(){
    super();
    this.innerHTML = "Hello";
    }
}
customElements.define("pro-tag",customElement);