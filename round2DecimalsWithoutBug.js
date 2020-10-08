
// using trick to round 2 decimals while avoiding Javascript rounding bug
numberValue = +( Math.round( numberValue + "e+2" ) + "e-2" );
