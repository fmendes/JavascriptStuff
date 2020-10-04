// if you have an IMG element "aDiagram" with a MAP element "theMap", call this function on the OnLoad event

	function resizeDiagram() {
	// resize image and respective map
		// resize image to 80% of viewport height
		var theDiagram = document.getElementById( "aDiagram" );
		theDiagram.style.height = window.innerHeight * .8 + "px";

		// resize image map
		var theMap = document.getElementById( "theMap" );
		var areas = theMap.getElementsByTagName( "area" )
			, nbrAreas = areas.length
			, coords = []
			, theFactor = window.innerHeight * .8 / 800; // 800 is the original height
		for( i = 0; i < nbrAreas; i ++ ) {
			coords[ i ] = areas[ i ].coords.split( "," );
		}
		for( i = 0; i < nbrAreas; i ++ ) {
			clen = coords[ i ].length;
			for( j = 0; j < clen; j ++ ) {
				coords[ i ][ j ] *= theFactor;
			}
			areas[ i ].coords = coords[ i ].join( "," );
		}
		theDiagram.style.visibility = 'visible';
	}
