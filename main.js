import './style.css'
import { screen } from './assets/components/screen'
import { nav } from './assets/components/nav'


const app = document.querySelector('#app')
app.appendChild(nav.element)
app.appendChild(screen)
