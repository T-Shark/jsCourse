const availableFilters = ["Color_Input","Text_Input","Digits_Input"]

function makeSelect() {
    const select = document.createElement("select")
    const defaultOption = document.createElement("option")

    select.name = "select"
    select.style="margin-bottom:50px"

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

function makeTextInput(){

	const txt_input=document.createElement("input")

	txt_input.type="text"
	txt_input.name="text"

	
	return txt_input
}

function makeDigitsInput(){

	const num_input=document.createElement("input")

	num_input.type="number"
	num_input.name="number"

	
	return num_input
}

function makeColorInput(){
	const color_input=document.createElement("input")

	color_input.type="color"
	color_input.name="color"

	
	return color_input
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

function main(){
	const board=document.getElementById("board");
	

	drawItems(board, [makeSelect()])

	drawItems(board, [makeForm()])

	board.addEventListener("change", function (event) {

        const { value } = event.target
        const formata=document.getElementById("formata");

        if (value === "Color_Input") {
        	drawItems(formata, [drawLabels(value)])
            drawItems(formata, [makeColorInput()])
        }

        if (value === "Text_Input") {
        	drawItems(formata, [drawLabels(value)])
            drawItems(formata, [makeTextInput()])
        }

         if (value === "Digits_Input") {
         	drawItems(formata, [drawLabels(value)])
             drawItems(formata, [makeDigitsInput()])
        }

    })
}

window.addEventListener("load", main)
