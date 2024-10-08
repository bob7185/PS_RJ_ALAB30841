// ================part1=============================

const str = "ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor’s Assistant,26"

// using the string split property, break down the array into rows 
// 
const table = str.split('\n');
for (let row of table) {
    console.log(row);
}

//======================Part2======================
console.log("===========Part2=============")
let number_of_column = 0;
for (let character of str) {
    if (character === ',') {
        number_of_column++;
    }
    else if (character === '\n') {
        number_of_column++;
        break;
    }
}

// split the array into individual  elements. 
// we're using the regex to choose the comma or the new line as a delimiter.
const table1 = str.split(/,|\n/);
let number_of_row = table1.length / number_of_column;
const table2 = [];
let index = 0;

for (let row = 0; row < number_of_row; row++) {
    table2[row] = [];
    for (let col = 0; col < number_of_column; col++) {
        table2[row][col] = table1[index];
        index++;
    }
}
console.log(table2);

//=============================Part3=====================
console.log("================================Part3==================")
const table3 = [];
// we start looping in row 1 since the first row is the heading
for (let row = 1; row < number_of_row; row++) {
    let obj = {};  // create a new object
    for (let key_number = 0; key_number < number_of_column; key_number++) {
        //let  key = table2[0][key_number];
        obj[table2[0][key_number].toLowerCase()] = table2[row][key_number];
    }
    table3[row - 1] = obj;  // updates table3 with the new object value
}
console.log(table3);

//=============================Part4 ==================================
console.log("==================================Part4======================")
 table3.pop(); // removed the last item from the array 
 console.log(table3);
 //inserting { id: "48", name: "Barry", occupation: "Runner", age: "25" } at index 1
 table3[1] = { id: "48", name: "Barry", occupation: "Runner", age: "25" };
 console.log(table3);
 //adding { id: "7", name: "Bilbo", occupation: "None", age: "111" } to the end of the array
 table3.push({ id: "7", name: "Bilbo", occupation: "None", age: "111" });
 console.log(table3);

 let total_age = 0;
 for(let i = 0; i < table3.length; i++)
 {
    total_age += Number(table3[i]["age"]);
 }
 let average = total_age / table3.length;
 console.log(`Average age of the members: ${average}`);