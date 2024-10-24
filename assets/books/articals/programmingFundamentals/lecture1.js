class Lecture1 {
constructor(){
    this.element = document.createElement('div')
    this.render()
}
render(){
    this.element.innerHTML = `
    <h1>I am working</h1>
    `
}
}

export const algorithmLecture1 = new Lecture1()