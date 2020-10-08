// NOTE:  only way to automatically translate the date respecting the locale

// LANG = en for English
// es for Spanish and so forth

function getLocaleFormattedDate( year, month, day ) {
  //var date = new Date( Date.UTC( year, month - 1, day - 1 ) );
  var date = new Date( year, month - 1, day );
  var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
  var formattedDate = date.toLocaleDateString( LANG, options );
  return capitalizeFirstLetter( formattedDate.trim() );
}
function writeLocaleFormattedDate( year, month, day ) {
  var localeFormatteDt = getLocaleFormattedDate( year, month, day );
  document.write( localeFormatteDt );
  console.log( 'localeFormatteDt= ' + localeFormatteDt );
}
function translateDate( value ) {
  // parse date mm/d/yyyy and translate to locale
  var posMonth = value.indexOf( '/' );
  console.log( 'posMonth= ' + posMonth );
  var posAfterMonth = value.indexOf( '/', posMonth + 1 );
  console.log( 'posAfterMonth= ' + posAfterMonth );

  var month = value.substring( 0, posMonth );
  var day = value.substring( posMonth + 1, posAfterMonth );
  var year = value.substring( posAfterMonth + 1, posAfterMonth + 5 );

  console.log( month + '/' + day + '/' + year );

  // translate date to locale
  return capitalizeFirstLetter( getLocaleFormattedDate( year, month, day ) );
}

// IDEA to translate a few words dynamically

// prepopulate translation map with initial translations
var translationMap = new Object();
translationMap[ 'en|English' ] = 'English';
translationMap[ 'es|English' ] = 'Ingl\xE9s';
translationMap[ 'en|Spanish' ] = 'Spanish';
translationMap[ 'es|Spanish' ] = 'Espa\xF1ol';
translationMap[ 'en|linkTemplateText' ] = ' Area, Instruction in ';
translationMap[ 'es|linkTemplateText' ] = ', Instrucci\xF3n en ';

function getTranslation( key ) {
  return translationMap[ LANG + '|' + key ];
}
