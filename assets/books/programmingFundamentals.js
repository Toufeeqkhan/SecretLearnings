import './books.css'

class Topic{
    constructor(lecture,name,date){
        this.element = document.createElement('div')
        this.name = name
        this.lecture = lecture
        this.date = date
        this.element.classList.add('topic')
        this.render()
    }
    render(){
        this.element.innerHTML = `
        <p class="lecture">${this.lecture}</p>
        <p class="name">${this.name}</p>
        <p class="date">${this.date}</p>
        `
    }
}

 class ProgrammingFundamentals{
    constructor(){
        this.element = document.createElement('section')
        this.render()
    }
    render(){
        this.element.classList.add('topicMenu')
        const lecture1 = new Topic('Lecture 1','Algorithm, FlowChart & Program','22/10/24')
        const lecture2 = new Topic('Lecture 2','Program & Languages','23/10/24')
        this.element.appendChild(lecture1.element)
        this.element.appendChild(lecture2.element)
    }
}

export const programmingFundamentals = new ProgrammingFundamentals()

