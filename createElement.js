const newLIElement = document.createElement( 'li' ); 
newLIElement.innerText = 'this is new'; 

const ulElement = document.getElementById( 'mainList' );
ulElement.appendChild( newLIElement );
