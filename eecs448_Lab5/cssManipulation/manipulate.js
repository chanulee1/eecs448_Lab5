function changeCSS() {
    const borderRed = parseInt(document.getElementById('border--red').value)
    const borderGreen = parseInt(document.getElementById('border--green').value)
    const borderBlue = parseInt(document.getElementById('border--blue').value)
    const borderWidth = parseInt(document.getElementById('border--width').value)
    const backgroundRed = parseInt(document.getElementById('background--red').value)
    const backgroundGreen = parseInt(document.getElementById('background--green').value)
    const backgroundBlue = parseInt(document.getElementById('background--blue').value)
    const textbox = document.getElementById('textbox')
    textbox.style.borderColor = `rgb(${borderRed}, ${borderGreen}, ${borderBlue})`
    textbox.style.borderWidth = borderWidth
    textbox.style.backgroundColor = `rgb(${backgroundRed}, ${backgroundGreen}, ${backgroundBlue})`
}