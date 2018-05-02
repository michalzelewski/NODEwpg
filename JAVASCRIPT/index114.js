//Define a revert function that accepts a string parameter
//This function shows the reverted text parameter
//For example if you call the revert function with 'hello' the function will show: olleh
//Call this function using at least 5 different words :)

function revert(string) {
    let stringLength = string.length;
    let revertWord = "";
    for (stringLength; stringLength >= 1; stringLength--)
    {
        revertWord = revertWord + string.charAt(stringLength -1)
    }
    console.log(revertWord);
}

revert('martyna');