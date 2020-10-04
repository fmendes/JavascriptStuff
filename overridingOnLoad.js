
        // set focus after page loads while respecting any framework code
        if( window.attachEvent ) {
            window.attachEvent( 'onload', customOnLoad );
        } else {
            if( window.onload ) {
                var curronload = window.onload;
                var newonload = function() {
                    curronload();
                    customOnLoad();
                };
                window.onload = newonload;
            } else {
                window.onload = customOnLoad;
            }
        }

        function customOnLoad() {
            // EXAMPLE:  start page focusing on the cancel button
            var cancelButton =  document.getElementById( "cancelButton" );
            console.log( "cancelButton", cancelButton );
            cancelButton.focus();
        }
