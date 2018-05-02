/*Define a getLongerText that accepts two string values
This function returns the longer text
After calling the function show the longer word as output
Call this function 3 times with different words*/

function getLongerText(wordX, wordY) {
    
    if (wordX.length > wordY.length) {
        console.log(wordX);
    } else if (wordY.length > wordX.length) {
        console.log(wordY);
    } else {
        console.log(`words are equal`)
    }
}

getLongerText('michal', 'martyna');
getLongerText('pablo', 'nico');
getLongerText('mia', 'kim');