import './nav.css'
class Nav{
    constructor(){
        this.element = document.createElement('nav')
        this.render()
    }

    render(){
        this.element.innerHTML = `
        <h2 class="">Secret Learnings<h2>
        `
    }
}

export const nav = new Nav()