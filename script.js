
let container = document.getElementById('container')

for(let i = 1; i<9; i++){
    let chessrows = document.createElement('div')
    chessrows.classList.add('chessrow')
    if(i%2 == 0){
        chessrows.style.flexDirection = 'row-reverse';
    }
    for(let inner = 1; inner < 9; inner++){
        let smallBoxes = document.createElement('div');
        smallBoxes.classList.add('box')
        if(inner%2 == 0){
          smallBoxes.style.background = 'black'
        }else{
            smallBoxes.style.background = 'white'
        }
        chessrows.appendChild(smallBoxes)
    }
    container.appendChild(chessrows)
}


    // Remove Duplicate Values from array
    function getUnique(array){
        var uniqueArray = [];
        
        for(i=0; i < array.length; i++){
            if(uniqueArray.indexOf(array[i]) === -1) {
                uniqueArray.push(array[i]);
            }
        }
        return uniqueArray;
    }
    
    var names = ["kalyan", "vamsi", "venkat", "kalyan", "Gopi", "Sreenu"];
    var uniqueNames = getUnique(names);
    console.log(uniqueNames);
