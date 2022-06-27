//=============================================================1

// let name = "Генератор захисного поля,";
// let price = 1000;
// let order = prompt();
// let newPrice = order * price; 

// console.log (name, newPrice)

//=============================================================2

// const total = 100;
// const ordered = prompt();

// if (ordered > total) {
//     console.log ("На складі недостатньо товарів!")
// } else {
//     console.log ("Замовлення оформлено, з вами зв'яжеться менеджер")
// }

//=============================================================3

// const ADMIN_PASSWORD = "valami";
// let USER_PASSWORD = prompt();

// if (ADMIN_PASSWORD === USER_PASSWORD) {
//      console.log("Ласкаво просимо!")
// } else {
//     console.log("Доступ заборонений, невірний пароль!");
// }

//==============================================================4

// const credits = 23580;
// const pricePerDroid = 3000;

// let orderedAmmount = prompt();
// let totalPrice = pricePerDroid * parseInt(orderedAmmount);
// let leftCredits = credits - totalPrice;

// if ( totalPrice <= credits ) {
//     console.log ("Ви купили " + orderedAmmount + " дроїдів, на рахунку залишилося " + leftCredits + " кредитів.");

// } else {
//     console.log("Недостатньо коштів на рахунку!");
// }

//==============================================================5

// let order = prompt("").toLowerCase();

// console.log(order);

// switch (order) {
//     case "китай":
//         console.log("Доставка в " + order + " буде коштувати 100 кредитів");
//         break;
//     case "чилі":
//         console.log("Доставка в " + order + " буде коштувати 250 кредитів");
//         break;
//     case "австралія":
//         console.log("Доставка в " + order + " буде коштувати 170 кредитів");
//         break;
//     case "індія":
//         console.log("Доставка в " + order + " буде коштувати 80 кредитів");
//         break;
//     case "ямайка":
//         console.log("Доставка в " + order + " буде коштувати 120 кредитів");
//         break;

//     default: 
//     alert("У вашій країні доставка недоступна");
//         break;
// }
 
//===============================================================6

// let input;
// let total = 0;

// while (true) {
//     input = prompt();
//     if (input === null) {
//         alert("Загальна сума чисел дорівнює " + total);
//         break;
//     }
//     total = parseInt(total) + parseInt(input);
//     console.log(total, input);
// }
