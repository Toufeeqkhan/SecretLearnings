import { Book } from "./book"
import { images } from "./images"



class Library {
    constructor() {
       this.element = document.createElement('div')
       this.render() 
    }
    render(){
        const programmingFundamentals = new Book('Programming Fundamentals',images.programmingFundamentalsImage,'programmingFundamentals')
        this.element.appendChild(programmingFundamentals.element)
    }
}

export const library = new Library()