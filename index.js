let age; 
let gender = "Мужской";

if (Number(age)==age)
    {
        if (age===undefined)
            {
                console.log("Возраст не указан!");   
            }

        else if (age>18) 
            {
                console.log("Добро пожаловать");
            } 

        else if (age==18)
            {
                console.log("Добро пожаловать. Поздравляем вас с совершеннолетием!");   
            }

        else 
            {
                console.log("Вход запрещен");  
            }
    }

else 
    {
        console.log("Введите правильное число");
    }

let isUser = false
console.log(`Добро пожаловать: ${isUser ? 'Пользователь' : 'Бот'}`);


let typeUser = 'admin' // еще есть: 'guest', 'bot', 'user'

switch (typeUser) 
    {
        case 'admin':
            console.log('Добро пожаловать: ' + typeUser);
            break;

        case 'guest':
            console.log('Добро пожаловать: ' + typeUser);
            break;

        case 'bot':
            console.log('Добро пожаловать: ' + typeUser);
            break;

        case 'user':
            console.log('Добро пожаловать: ' + typeUser);
            break;

        default:
            console.log('Неверный тип пользователя ');
            break;
    }


    
// Вывести на экран числа от 1 до 10 через запятую

let resultSrting = '';
let startNumber = 10
let endNumber = 0;


while (startNumber-- > endNumber) {
    resultSrting += `${startNumber}${startNumber !==endNumber ? ', ' : ''}`;
}

console.log(resultSrting);
