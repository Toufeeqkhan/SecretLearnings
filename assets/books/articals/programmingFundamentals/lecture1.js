import './lectures.css'
import { images } from '../../../components/images'
class Lecture1 {
constructor(){
    this.element = document.createElement('div')
    this.render()
}
render(){
    this.element.innerHTML = `
    <section class="lecture">
      <h1>Computer</h1>
      <img class="computer-img" src="${images.lecture1ComputerImage}" alt="Computer" />
      <div class="question">
      <h2>So what is a Computer?🤔</h2>
      <p>
      A computer is a versatile electronic device that performs tasks based on
      instructions.
      </p>
      <button><a href="https://www.youtube.com/watch?v=Cu3R5it4cQs&t=26s&ab_channel=LearnFree">Video on computer</a></button>
      </div>
      <div class="question">
      <h2>Okay, Examples?🤔</h2>
      <p>Here are the examples of computer:</p>
      <ul>
      <li>Smart TVs</li>
      <li>Smart Refrigerators</li>
      <li>Smart Washing Machines</li>
      <li>Smartwatches</li>
      <li>Fitness Trackers</li>
      <li>Digital Cameras</li>
      <li>Desktop</li>
      <li>Laptop</li>
      <li>Mobile</li>
      </ul>
      </div>
      <div class="question">
      <h2>Why we need to write programs?🤔</h2>
      <p>
      Ammm... The truth is that they are dumb. We need to program computers
      because, without instructions, they don’t know what to do. Programming
      lets us tell computers how to perform specific tasks, solve problems,
      and respond to commands, making them useful in everyday life.
      </p>
      </div>
      <div class="question">
      <h2>Example?🤔</h2>
      <p>
      Here's a simple analogy:** Imagine a computer as a chef. You provide the
      chef with a recipe (the program), and the chef follows the instructions
      to create the desired dish (the output).
      </p>
      </div>
      <div class="question">
      <h2>Interesting! How to program them?🤔</h2>
      <p>
      So... You are Interested okay! lets see what we can do! So first of all
      we need you learn the things
      </p>
      </div>
      <div class="question">
      <h2>What are these things?🤔</h2>
      <ul>
      <li>Algorithm</li>
      <li>FlowChart</li>
      <li>Program</li>
      </ul>
      <button><a href="https://www.youtube.com/watch?v=kM9ASKAni_s&t=77s">Video on Algorithm/Program</a></button>
      <p>
      Algorithms are the blueprints. Flowcharts are the sketches. Programs are
      the actual buildings.
      </p>
      <p>
      An algorithm is the abstract concept of a solution. A flowchart is a
        visual representation of the algorithm. A program is the concrete
        implementation of the algorithm in a programming language.
        </p>
        </div>
        <div class="question">
        <h2>Example?🤔</h2>
        <p>Here is how the algorithm of adding two numbers would look like</p>
        <ul>
        <li>Step 1: Input first number as P</li>
        <li>Step 2: Input second number as Q</li>
        <li>Step 3: Set Sum=P+Q</li>
        <li>Step 4: Print Sum</li>
        <li>Step 5: End</li>
        </ul>
        <p>Here is the flowchart for the same operation.</p>
        <img src=${images.lecture1FlowCharToAddTwoNumbersImage} alt="FlowChart to add two numbers">
        <p>And here is the program to write the program for the same purpose in python.</p>
        <code>
        <p>P = float(input("Enter first number (P): "))</p>
        <p>Q = float(input("Enter second number (Q): "))</p>
        <p>Sum = P + Q</p>
        <p>print("The sum is:", Sum)</p>

        </code>
        </div>
        
      <p class="note">You don't need to master them all specifically the code part that would be done in latter class for now take the concept only</p>
    </section>
    `
}
}

export const algorithmLecture1 = new Lecture1()