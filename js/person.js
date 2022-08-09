const personDataLog = ({firstname = 'John', lastname = 'Doe', age = '33'} = {}) => {
    return (`My name is ${firstname} ${lastname}. I'm ${age} years old.`);
}

/*Ezt írtam először, aztán Gergő jegyzetéből megtaláltam ezt: ""={}", ezt beírtam a végére, de fogalmam nincs, hogy mi ez. :)

const personDataLog = (firstname = 'John', lastname = 'Doe', age = '33') => {
    return (`My name is ${firstname} ${lastname}. I'm ${age} years old.`);
}*/
