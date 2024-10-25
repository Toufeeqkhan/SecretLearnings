(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function n(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(e){if(e.ep)return;e.ep=!0;const r=n(e);fetch(e.href,r)}})();class d{constructor(t,n,i){this.name=t,this.imgSrc=n,this.imgAlt=i,this.element=document.createElement("div"),this.render(),this.element.classList.add("book")}render(){this.element.innerHTML=`
        <div class="image-background"></div>
        <img src=${this.imgSrc} alt=${this.imgAlt}/>
        <h2>${this.name}</h2>
        `}}const h="./images/programming.png",u="./images/computer.png",g="./images/lecture1Flowchart.png",l={programmingFundamentalsImage:h,lecture1ComputerImage:u,lecture1FlowCharToAddTwoNumbersImage:g};class f{constructor(){this.element=document.createElement("div"),this.render()}render(){const t=new d("Programming Fundamentals",l.programmingFundamentalsImage,"programmingFundamentals");this.element.appendChild(t.element)}}const m=new f;class w{constructor(){this.element=document.createElement("div"),this.render()}render(){this.element.innerHTML=`
    <section class="lecture">
      <h1>Computer</h1>
      <img class="computer-img" src="${l.lecture1ComputerImage}" alt="Computer" />
      <div class="question">
      <h2>So what is a Computer?🤔</h2>
      <p>
      A computer is a versatile electronic device that performs tasks based on
      instructions.
      </p>
      </div>

      <div class="question"></div>
      
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
        <img src=${l.lecture1FlowCharToAddTwoNumbersImage} alt="FlowChart to add two numbers">
        <p>And here is the program to write the program for the same purpose in python.</p>
        <code>
        <p># Step 1: Input first number as P</p>
        <p>P = float(input("Enter first number (P): "))</p>
        <p># Step 2: Input second number as Q</p>
        <p>Q = float(input("Enter second number (Q): "))</p>
        <p># Step 3: Set Sum = P + Q</p>
        <p>Sum = P + Q</p>
        <p>print("The sum is:", Sum)</p>
        <p># Step 5: End</p>
        </code>
        </div>
        
      <p class="note">You don't need to master them all specifically the code part that would be done in latter class for now take the concept only</p>
    </section>
    `}}const v=new w;class c{constructor(t,n,i){this.element=document.createElement("div"),this.name=n,this.lecture=t,this.date=i,this.element.classList.add("topic"),this.render()}render(){this.element.innerHTML=`
        <p class="lecture">${this.lecture}</p>
        <p class="name">${this.name}</p>
        <p class="date">${this.date}</p>
        `}}class S{constructor(){this.element=document.createElement("section"),this.render()}render(){this.element.classList.add("topicMenu");const t=new c("Lecture 1","A, F & Program","22/10/24"),n=new c("Lecture 2","Program & Languages","23/10/24");t.element.addEventListener("click",()=>{o.innerHTML="",o.appendChild(v.element)}),this.element.appendChild(t.element),this.element.appendChild(n.element)}}const b=new S,o=document.createElement("main");o.appendChild(m.element);m.element.addEventListener("click",()=>{o.innerHTML="",o.appendChild(b.element)});class y{constructor(){this.element=document.createElement("nav"),this.render()}render(){this.element.innerHTML=`
        <h2 class="">Secret Learnings<h2>
        `}}const L=new y,p=document.querySelector("#app");p.appendChild(L.element);p.appendChild(o);
