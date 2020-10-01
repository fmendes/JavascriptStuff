// example element:  <div id="aDiv" data-id="123" data-custom-information="ABC">...</div>

var divElement = document.getElementById( 'aDiv' );

console.log( divElement.dataset.id );
console.log( divElement.dataset.customInformation );

// overwrite custom-information
divElement.dataset.customInformation = "DEF";

// alternatively...
divElement.setAttribute( 'data-custom-information', 'GHI' );
console.log( divElement.getAttribute( 'data-custom-information' ) );
