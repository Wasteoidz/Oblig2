// hjelpevariable for b�de view og controller
var contentDiv = document.getElementById('content');

// model
let numbers = [7, 3, 1, 5, 8];
let chosenBar; // Variabel for hvilken stolpe som er valgt
let inputValue; // Variabel for hva som er skrevet i input-feltet
// view
show();
function show() {
    let svgInnerHtml = '';
    for (let i = 0; i < numbers.length; i++) {
        svgInnerHtml += createBar(numbers[i], i + 1);
    }
    contentDiv.innerHTML = `
            <svg id="chart" width="500" viewBox="0 0 80 60">
                ${svgInnerHtml}
            </svg><br/>
            Valgt stolpe: <i>ingen</i>
            <br />
            Verdi:
            <input type="number" min="1" max="10" oninput="inputValue = this.value" />
            <button onclick="addPole()">Legg til stolpe</button>
            <button disabled>Endre valgt stolpe</button><br />
            <button disabled>Fjerne valgt stolpe</button><br/>
            <p id="errorTekst"></p>
            `;
}

function createBar(number, barNo) {
    const width = 8;
    const spacing = 2;
    let x = (barNo - 1) * (width + spacing);
    let height = number * 10;
    let y = 60 - height;
    let color = calcColor(1, 10, barNo);
    return `<rect width="${width}" height="${height}"
                            x="${x}" y="${y}" fill="${color}"></rect>`;
}

function calcColor(min, max, val) {
    var minHue = 240, maxHue = 0;
    var curPercent = (val - min) / (max - min);
    var colString = "hsl(" + ((curPercent * (maxHue - minHue)) + minHue) + ",100%,50%)";
    return colString;
}

    // controller (ingenting her enn�)

function addPole() {
    if (inputValue > 10 || inputValue < 1) {
        alert(inputValue + " er en ugyldig verdig, venligst velg en verdi fra 1-10.");
    } else {
        numbers.push(inputValue);
    }
    show();

}