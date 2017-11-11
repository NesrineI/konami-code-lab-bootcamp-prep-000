const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]

let index = 0
document.body.addEventListener('keydown', init)

function init(e) {
    const keyCode = parseInt(e.which)
    if(keyCode === code[index]){
      index++
      if(index === code.length){
        alert("Congratulation!")
        index=0
      }
    }
    else{
      index=0
    }

}
