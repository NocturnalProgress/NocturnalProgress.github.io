var randomNames = [
    "Daraxus", "Chromblip", "Zarth", "Crebis", "Farlip", "Thorndip",
    "Prenus", "Grublim", "Dinglegorf", "Sarcobious", "Blumpid", "DingleSchwartz", "Arcondus",
    "Harblund", "Gruthden", "Crablus", "Skonk", "Stublen", "Draglop", "Goit-Tru", "Cordelius"
]


function randomName() {
    var randomNumber = Math.floor(Math.random() * (randomNames.length));
    document.getElementById('randomNameDisplay').innerHTML = randomNames[randomNumber];
}