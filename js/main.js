const handleClick = () => {
    let anyButton = document.querySelectorAll('.button');
    for (let i = 0; i < anyButton.length; i++) {
        anyButton[i].addEventListener('click', () => {
            console.log(anyButton[i].innerHTML);
        })
        }
    }