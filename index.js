let age = 18
let gender = "Мужской";

    if (age>18) 
    {
        console.log("Добро пожаловать")
    } 

    else if (age==18)
    {
        console.log("Добро пожаловать. Поздравляем вас с совершеннолетием!")   
    }

    else
    {
        console.log("Вход запрещен")   
    }


if (gender.toLocaleLowerCase() === "мужской") {  /* Приводит к нижнему регистру переменную gender*/
console.log("Вам направо");
}

if (gender === "женский") {
    console.log("Вам налево");
}   