// The task is:
//
// 	Convert Camel Case to Snake Case: Write a function to convert a camelCase string to snake_case.
//
// 	Example:
// camelToSnake('helloWorld'); // "hello_world"

function isUpperCase(char){
    if(char === char.toUpperCase()){
        return true;
    }
    return false;
}

function camelToSnake(str){
    let rez = '';
    let arr = str.split('');
    for(let i = 0; i < arr.length; i++){
        if(isUpperCase(arr[i])){
            rez += '_';
            rez += arr[i].toLowerCase();
        }
        else {
            rez += arr[i];
        }
    }
    return rez;
}

console.log(camelToSnake('helloWorld'));

function camelToSnake2(str){
    return str.replace(/([a-z])([A-Z])/g, '$1_$2').toLowerCase();
}

console.log(camelToSnake2('helloWorld'));