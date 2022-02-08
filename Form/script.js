const availableFilters = ["Color_Input","Text_Input","Digits_Input"]

function makeBoxSelect(){
    const box=document.createElement("div")
    box.id="boxSelect"
    box.style="display:flex;flex-direction:column;"

    return box
}

function makeSelect() {
    const select = document.createElement("select")
    const defaultOption = document.createElement("option")

    select.name = "select"
    select.id = "select"
    select.style="margin-bottom:20px"

    defaultOption.value = "-1"
    defaultOption.innerHTML = "Please select type of input"

    drawItems(select, [
        defaultOption,
        ...availableFilters.map(x => {
            const option = document.createElement("option")
            option.innerHTML = x
            option.value = x

            return option
        })
    ])

    return select
}

function drawLabels(name){
	const label=document.createElement("label")

	label.innerHTML=name

	return label
}

function makeInput(whatKind){

    const inputche=document.createElement("input")

    inputche.type = whatKind
    inputche.value = whatKind

    
    return inputche
}

function makeForm(){
	const form=document.createElement("form")
	form.id="formata"
	form.style="border:1px solid #ccc;min-height:300px;width:300px;padding:30px;text-align:center;"
	form.innerHTML="<legend>FORM</legend>"
	return form
}

function drawItems(parent, children) {
    children.forEach(x => parent.appendChild(x))
}

function butSubmit(){
    const but=document.createElement("button")
    but.id="submitNow"
    but.style="margin-bottom:50px"
    but.innerHTML="Click here to create input"

    return but
}

function main(){
	const board=document.getElementById("board");
   

    drawItems(board, [makeBoxSelect()])
	const boxSelect=document.getElementById("boxSelect")

	drawItems(boxSelect, [makeSelect()])

    drawItems(boxSelect, [drawLabels("Give a name of the input")])

    drawItems(boxSelect, [makeInput("text")])

    drawItems(boxSelect, [butSubmit()])

	drawItems(board, [makeForm()])

    const inputText= document.getElementsByTagName("input")[0]
    inputText.value=""

    const butSub=document.getElementById("submitNow");

        butSub.addEventListener("click", function (event) {

        const sl=document.getElementById("select");


        if (sl.options[sl.selectedIndex].value === "Color_Input" && inputText.value !="") {
        	drawItems(formata, [drawLabels(inputText.value)])
            drawItems(formata, [makeInput("color")])
        }

        if (sl.options[sl.selectedIndex].value === "Text_Input" && inputText.value !="") {
        	drawItems(formata, [drawLabels(inputText.value)])
            drawItems(formata, [makeInput("text")])
        }

         if (sl.options[sl.selectedIndex].value === "Digits_Input" && inputText.value !="") {
         	drawItems(formata, [drawLabels(inputText.value)])
             drawItems(formata, [makeInput("number")])
        }
        if (sl.options[sl.selectedIndex].value === "-1" || inputText.value ===""){
            alert("Make sure that you have selected any input type and you wrote some name for it!!!")
        }

    })
}

window.addEventListener("load", main)
