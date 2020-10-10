// using CONSTRUCTORS ******************************************************************

function MyClass( name ) {
    this.name = name;
    
    // embedded method declaration (this method doesn't go into the class' prototype)
    this.displayName = function () {
        console.log( 'Howdy, ' + this.name );
        // or console.log( `Howdy, ${name}` );
    }
}
// method declaration via prototype
MyClass.prototype.displayName = function () {
    console.log( `Howdy, ${this.name}` );
}
const myObj = new MyClass( 'Joe Sixpack' );

// using the CLASS keyword ******************************************************************

class MyClass {
    constructor( name ) {
        this.name = name;
    }
    displayName() {
        console.log( `Howdy, ${this.name}` );
    }
}
const myObj = new MyClass( 'Joe Sixpack' );
