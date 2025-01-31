import React, { useEffect, useRef } from 'react'
import Typed from 'typed.js';
function MyApp() {
  const typedElement = useRef(null);
  useEffect(() =>{
    const typed = new Typed(typedElement.current,{
      strings: ['Coder', 'Developer', 'Engineer'],
      typeSpeed: 60, // Slightly increased for smoother animation
      backSpeed: 40, // Slightly reduced for a natural effect
      startDelay: 300, // Adds a slight delay before typing starts
      backDelay: 1000, // Adds a pause before deleting text
      loop: true, 
      smartBackspace: true, // Avoids retyping the same word
      shuffle: false, // Keeps the order fixed
      cursorChar: '|', // Single bar looks cleaner
    });

    return() =>{
      typed.destroy(); // cleanup to prevent memory leak;
    }
  },[]);




 
  return (
    <div><h1>The Developer</h1>
    <div>
        <h2 ref={typedElement}></h2>
    </div>
    </div>
  )
}

export default MyApp;