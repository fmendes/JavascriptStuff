// classes for each available number format
var currencyFormatter = new Intl.NumberFormat( 'en-US', { style: 'currency', currency: 'USD', minimumFractionDigits: 2 } );
var fractionFormatter = new Intl.NumberFormat( 'en-US', { style: 'currency', currency: 'USD', minimumFractionDigits: 5, maximumFractionDigits: 5 } );
var percentageFormatter = new Intl.NumberFormat( 'en-US', { style: 'percent', minimumFractionDigits: 2, maximumFractionDigits: 2 } );

document.getElementById( 'numberField' ).innerText = currencyFormatter.format( 234234.94 );
document.getElementById( 'fractionField' ).innerText = fractionFormatter.format( 0.3452344 );
document.getElementById( 'pctField' ).innerText = percentageFormatter.format( 4.34 );
