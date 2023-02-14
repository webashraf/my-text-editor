const editor = document.getElementById('text-editor');
let boldCount = 0;
document.getElementById('bold').addEventListener('click', function(){
    if (boldCount == 0) {
        editor.style.fontWeight = 'bold';
        boldCount++;
    }
    else{
        editor.style.fontWeight = 'normal';
        boldCount = 0;
    }
})
document.getElementById('italic').addEventListener('click', function(){
    if (boldCount == 0) {
        editor.style.fontStyle = 'italic';
        boldCount++
    }
    else{
        editor.style.fontStyle = 'normal';
        boldCount = 0;
    }
})
document.getElementById('underline').addEventListener('click', function(){
    if (boldCount == 0) {
    editor.style.textDecoration = 'underline';
    boldCount++;
    }
    else{
    editor.style.textDecoration = 'none';
    boldCount = 0;
    }
})
// ! color script
const color = document.getElementById('input-color');

color.addEventListener('input', function(){
    const colorValue = color.value;
    // console.log(colorValue);
    editor.style.color = colorValue;
});

// ! Font size
const fontSize = document.getElementById('input-number');

fontSize.addEventListener('input', function(){
    editor.style.fontSize = `${fontSize.value}px`;
})

// ! Align script
document.getElementById('left-align').addEventListener('click', function(){
    editor.style.textAlign = 'left';
})
document.getElementById('center-align').addEventListener('click', function(){
    editor.style.textAlign = 'center';
})
document.getElementById('right-align').addEventListener('click', function(){
    editor.style.textAlign = 'right';
})