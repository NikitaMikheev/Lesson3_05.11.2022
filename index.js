let age = 17

if (age>=18) {
    console.log("Вход разрешен")   
} else {
    console.log("Вход запрещен")   
}


let gender = "Мужской";

if (gender.toLocaleLowerCase() === "мужской") {  /* Приводит к нижнему регистру переменную gender*/
    console.log("Вам направо");
}
 
if (gender === "женский") {
    console.log("Вам налево");
}