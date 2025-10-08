let text = "madam"
let reversed = "";
for (let i= text.length-1; i>=0; i--){
    reversed += text[i];
}
if (text===reversed){
    console.log(text,"is a palindrome");
    
}
else{
    console.log(text,"is not a palindrome");
    
}