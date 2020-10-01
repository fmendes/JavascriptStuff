const form = document.getElementById( 'mainForm' );

form.addEventListener( 'submit', (e) => { 
    e.preventDefault(); 
    console.log( 'submit event triggered' ); 
});

// UL element containing several LI elements
const ulElement = document.getElementById( 'mainList' );

ulElement.addEventListener( 'click', (evt) => { 
    evt.preventDefault(); 
    
    // evt.currentTarget = UL element
    // evt.target = LI element that was clicked inside the UL element

    // evt.eventPhase = 0 -> none, 1 -> capturing, 2 -> target, 3 -> bubbling
    
});

// NOTE:  when something is left-clicked, the event types will be in this sequence:  mousedown, mouseup, clicked
// right-click sequence:  mousedown
// keystrokes sequence:  keydown, keypress, keyup
// SHIFT, CTRL, non-character key sequence:  keydown, keyup
// CAPS LOCK key sequence:  keydown when CAPS ON, keyup when CAPS OFF
