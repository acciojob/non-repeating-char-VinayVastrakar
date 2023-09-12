function firstNonRepeatedChar(str) {
 // Write your code here
	let char;
	for(let i=0; i<str.length; i++){
		if(str.indexOf(srt[i])=== str.lasatIndexOf(srt[i])){
			char = str[i];
			break;
		}
	}
	return char;
	
}
const input = prompt("Enter a string");
alert(firstNonRepeatedChar(input)); 
