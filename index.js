// ================part1=============================

const str ="ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor’s Assistant,26"

// using the split property, store the csv in a big array with \n as the delimiter
// 
const table = str.split('\n');
 for(let cell of table)
 {
    console.log(cell);
 }
 