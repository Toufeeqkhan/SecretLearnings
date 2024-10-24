import './book.css'

export class Book {
    constructor(name,imgSrc, imgAlt){
        this.name = name
        this.imgSrc = imgSrc
        this.imgAlt = imgAlt
        this.element = document.createElement('div')
        this.render()
        this.element.classList.add('book')
    }
    render(){
        this.element.innerHTML = `
        <div class="image-background"></div>
        <img src=${this.imgSrc} alt=${this.imgAlt}/>
        <h2>${this.name}</h2>
        `
    }
}