var myStuff = [ '1', '2', '3' ];

localStorage.setItem( 'storedStuff', JSON.stringify( myStuff ) );

const myStuffRetrieved = JSON.parse( localStorage.getItem( 'storedStuff' ) );
