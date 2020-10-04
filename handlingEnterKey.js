
// call this function when handling onKeyPress event
// onkeypress="return setDefaultEnterToSearch(event);"

	function setDefaultEnterToSearch( ev ) {
	// responds to Enter by clicking search or doing pagination
		if( window.event ) {
			ev = window.event;
		}

		var keyCode;
		if( ev.keyCode ) {
			keyCode = ev.keyCode;
		} else {
			keyCode = ev.charCode;
		}

		if( keyCode == 13 ) {
			if( document.activeElement.Id === 'pageNumber' ) {
				// TODO:  navigate to the page number
				return false;
			}

      // if not on the page number input, then click search
			var ele = document.getElementById( 'theSearchButton' );
			ele.click();
			return false;
		} else {
			return true;
		}
	}
