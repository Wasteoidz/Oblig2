//controller//

function addPole() {
    if (inputValue > 10 || inputValue < 1) {
        errorTekst = 'Du har valgt en ugyldig verdig, venligst velg en verdi fra 1-10.';
    } else {
        numbers.push(inputValue);
        errorTekst = '';
        inputValue = null;
    }
    show();

}

function targetPole(pole) {
    (chosenBar != pole ? chosenBar = pole : chosenBar = null);
    inputValue = null;
    show();
}

function changePole() {
    if (inputValue > 10 || inputValue < 1) {
        errorTekst = 'Du har valgt en ugyldig verdig, venligst velg en verdi fra 1-10.';
    } else {
        numbers[chosenBar] = inputValue;
        errorTekst = '';
        inputValue = null;
    }
    show();
}



function removePole() {
    numbers.splice(chosenBar, 1);
    chosenBar = null;
    show();
}