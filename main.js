/* 

Data una lista della spesa, stampare sulla pagina (anche brutalmente, basta che si vedano) gli elementi della lista individualmente con un ciclo while.

## tools:
- const
- array
- console log
- while cicle
- getElement

*/


//shopping list
const shoppingList = ['pomodori', 'peperoni', 'insalata', 'uova', 'pasta', 'olio', 'sale'];

console.log(shoppingList);


let i = 0;

//cycle to print in console
while ( i < shoppingList.length) {
    const shopping = shoppingList[i];
    console.log(shopping);
    
    i++
}

//print to page
document.getElementById("list").innerHTML = shoppingList;