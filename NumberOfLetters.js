function numbersOfLetters(integer) {
    const name = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];

   function numberToWords(num) {
       return String(num)
           .split("") 
           .map(digit => name[Number(digit)]) 
           .join(""); 
   }

   let result = [];
   let current = numberToWords(integer); 

   while (true) {
       result.push(current); 
       const Length = current.length; 
       const nextWord = numberToWords(Length); 
       if (current === nextWord) break; 
       current = nextWord; 
   }

   return result;
}