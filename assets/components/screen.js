import './screen.css'
import { library } from "./library";
import { programmingFundamentals } from '../books/programmingFundamentals';

export const screen = document.createElement('main')
screen.appendChild(library.element)
library.element.addEventListener('click',()=>{
    screen.innerHTML = ''
    screen.appendChild(programmingFundamentals.element)
})
