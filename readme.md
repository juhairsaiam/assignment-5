1. What is the difference between **getElementById, getElementsByClassName, and querySelector / querySelectorAll**?
ans: getElementById - it targets an element by its id.
     getElementByClassName - it targets an element by its class name.
     querySelector - it can call the first element of the HTML with that one specific class name .
     querySelectorAll - it can call all the element of the HTML with that one specific class name

2. How do you **create and insert a new element into the DOM**?
.creatElement('') and .appendChild('')

3. What is **Event Bubbling** and how does it work?
Event Bubbling is a process where an event starts from the target element and then moves upward through its parent elements until it reaches the document.

4. What is **Event Delegation** in JavaScript? Why is it useful?
Event Delegation is a technique where we add an event listener to a parent element.

5. What is the difference between **preventDefault() and stopPropagation()** methods?
preventDefault() stops a button to reload the page every-time it is clicked. 
stopPropagation() stops bubbling . 