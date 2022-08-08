//Csak nem tudom, hogy miért többször írja ki, ha egynél többet klikkelek egy gombra.

const handleClick = () => {
    let anyButton = document.querySelectorAll('.button');
    for (let i = 0; i < anyButton.length; i++) {
        anyButton[i].addEventListener('click', () => {
            console.log(anyButton[i].innerHTML);
        })
        }
    }