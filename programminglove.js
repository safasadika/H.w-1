let sentence = "I love programming"
let spaceCount = 0;
for(let char of sentence){
    if (char===" "){
        spaceCount++;
    }
}
console.log("Number of spaces:" ,spaceCount);