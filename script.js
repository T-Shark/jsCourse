
function drawButtonche(where, idBut) {

  const but = document.createElement("button")
  let textPopUp = document.createTextNode("Натисни ме де");
  let textClose = document.createTextNode("Натисни за да затвориш");

  but.id = idBut

  if(but.id === "showPop"){
  	but.appendChild(textPopUp);
  }

  if(but.id === "closePop"){
  	but.appendChild(textClose);
  }

  where.appendChild(but);
}

function showBox(where){
	const underBox = document.createElement("div")

	underBox.id = "under-box"
	underBox.style = "position:absolute;width:100%;height:100%;z-index:-1;background:rgba(255, 99, 71, 0.8)"

	const box = document.createElement("div")

	box.id = "popUp"
	box.style = "text-align:center;z-index:1;border:3px solid #000;position:absolute;width:500px;height:500px;left:50%;top:50%;transform:translate(-50%,-50%);display:flex;flex-direction:column;justify-content:center;align-items:center;background:#fff;font-size:20px;"
	box.innerHTML="<p>Ето и едина поп кутийка, която ще изчезна след 20 секунди, освен ако преди тоне не натиснеш бутона.</p>"
	where.appendChild(underBox)
	where.appendChild(box)

	drawButtonche(box,"closePop")
	setTimeout(function() {underBox.remove();box.remove();}, 20000);
}

function closePopUp(box1,box2){
	 box1.remove()
     box2.remove()
}

function handleClick(event){

	const background = document.getElementById("under-box");
	const mainBox = document.getElementById("popUp");

	if (event.target.id === "showPop") {
	    showBox(document.body) 
    }
    

    if (event.target.id === "under-box") {
      closePopUp(background,mainBox)
    }

    if (event.target.id === "closePop") {
      closePopUp(background,mainBox)
    }
}

function main() {
    const app = document.getElementById("board")

  	drawButtonche(app,"showPop")

  	document.body.addEventListener("click", handleClick)
 

}

window.addEventListener("load", main)