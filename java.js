

// in this one we will just reaplce the word and then loop to see if you have a nmber or not 

let text =
	"Ever since I left the city, you, you, you You and me we just10 don't get along";

// const obj = generateWordPairs(text);
// const words = writeLine(obj, 5);
// console.log(words);



// -> [ 'ever', 'since', 'i', 'left', 'the', 'city', 'you', 'you', 'you', 'you', 'and', 'me', 'we', 'just', 'dont', 'get', 'along' ]
function parseText(text) {
	for (let i = 0; i < text.length; i++) {
		// punctuation
		text = text.replace(',', '');
		text = text.replace('?', '');
		text = text.replace('!', '');
		text = text.replace('.', '');
		text = text.replace("'", '');
		text = text.replace('"', '');

		// numbers
		for (let num = 0; num < 10; num++) {
			text = text.replace(`${num}`, '');
		}

		text = text.toLowerCase();
	}

	return text.split(' ');
}


// to be generateWordPairs
function generateWordPairs(text) {
    // pass the text 
	let theword = parseText(text);
    // create an empaty object to be filled later 
	let finalObject = {};

	for (let i = 0; i < theword.length - 1; i++) {
		const singleWord = theword[i];
        // to get to the next word 
		const nextSingleWord = theword[i + 1];
// to find the equal words 
		if (singleWord in finalObject) {
			finalObject[singleWord].push(nextSingleWord);
		} else {
			finalObject[singleWord] = [nextSingleWord];
		}
	}

	return finalObject;
}
