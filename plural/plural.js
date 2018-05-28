const input=document.getElementById('input');
const output=document.getElementById('output');


function processItem(qty, singular) {
	if (qty === 0) {
  	return 'no ' + makePlural(singular);
  } else if (qty === 1) {
  	return 'one ' + singular;
  } else {
  	return qty + ' ' + makePlural(singular);
  }
}

function makePlural(singular) {

	if(singular.endsWith('s') || 
  	singular.endsWith('x') || 
    singular.endsWith('z') || 
    singular.endsWith('ch') || 
    singular.endsWith('sh')
  ) {
   return singular + 'es';
  } else if (singular.endsWith('o') && !'aeiouy'.includes(singular.slice(-2,-1))) {
  	return singular + 'es';
  } else if(singular.endsWith('y') && 'r'.includes(singular.slice(-2,-1))){
  return ( singular.slice(0,-1) + 'ies')
  } else if (singular.endsWith('fe') &&
  !(singular.slice(0,-2)).includes('f')) {
  return (singular.slice(0,- 1) + "ves")
  } else if (singular.endsWith('f') &&
  !(singular.slice(0,-1)).includes('f')) {
   return singular.slice(0,-1) + 'ves';
 } else {
		return singular + 's';
  }}
  
  //;if the word ends in "f" preceded by a letter other than another "f", remove the "f" and append "ves"; orappend "s" otherwise.



function processInput() {
  const inputList = input.value.split('\n');  
   //console.log(inputList);
   
  const count = +inputList[0];
  //console.log(typeof count);
  
  for(let i=1; i<=count; i++) {
  	const item = inputList[i].split(' ');
    const qty = +item[0];
    const singular = item[1];
    
   console.log(qty, singular);   
    const result = processItem(qty, singular);
    output.innerHTML += result;
    output.innerHTML += '<br />'
    
  }
}
