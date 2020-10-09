// DocumentFragment allows to add elements all at once without repeatedly hitting the DOM with updates

function populateStartTimes() {
    let startTime = document.getElementById( 'startTimeSelect' );
    
    // prepare list of options without affecting the live DOM
    var amOptionList = new DocumentFragment(), pmOptionList = new DocumentFragment();
    for( var i = 0; i < 12; i++ ) {
        let amOption = document.createElement( "option" );
        amOption.text = ( i == 0 ? 12 : i ) + " AM";
        amOptionList.appendChild( amOption );
        let pmOption = document.createElement( "option" );
        pmOption.text = ( i == 0 ? 12 : i ) + " PM";
        pmOptionList.appendChild( pmOption );
    }
    
    // mass add the options to the DOM
    startTime.appendChild( amOptionList );
    startTime.appendChild( pmOptionList );
}
populateStartTimes();
