//GETTING input from the texbox and storing it in item variable
let item = document.getElementById('item');
//storing the reference of button in button variable
let button = document.getElementById('submit');
//storing the reference of ul tag in ul variable
let ul = document.getElementById('undoneItems');

let ding = new Audio('tone.mp3');
//Function to create the new li
let newItem = function()
{
	//storing the reference to li in li variable
	let li = document.querySelector('li');
	//cretaing li element, input element, label element and a button element
	let newLi = document.createElement('li');
	let checkbox = document.createElement('input');
	let label=document.createElement('label');
	let deleteButton = document.createElement('button');
	//setting the type of input element as a checkbox
	checkbox.type = 'checkbox';
	//setting the inner text of label as the value of the item variable
	label.innerText = item.value;
	//setting the inner text of deleteButton as Delete, background color as red and class name as deleteBtn
	deleteButton.innerText='Delete';
	deleteButton.style.background = 'red';
	deleteButton.setAttribute('class', 'deleteBtn');
	//adding some css to delete button
	deleteButton.style.height = '40px';
	deleteButton.style.width = '80px';
	deleteButton.style.float = 'right';
	//setting the newLi as the parent element of checkbox, label and delete button
	newLi.appendChild(checkbox);
	newLi.appendChild(label);
	newLi.appendChild(deleteButton);
	//function named deleteItem which removes the child element
	var deleteItem = function(e)
	{
		var liItem = e.target.parentElement;
		ul.removeChild(liItem);
	}
	//function named checkedItem which checks whether the checkbox is checked or not		
	var checkedItem = function(e)
	{
		if(e.target.checked)
		{
			ding.play();
			//storing the parent element in variable textValue
			var textValue = e.target.parentElement;
			//setting the textDecoration to line-through when the checkbox is checked
			textValue.style.textDecoration = 'line-through';
			//textvalue as child of ul to move it downwards
			ul.appendChild(textValue); 
		}
		else
		{
			//storing the parent element in variable textValue
			var textValue = e.target.parentElement;
			//setting the textDecoration to none when the checkbox is not Checked
			textValue.style.textDecoration = 'none';
			//ul.removeChild(textValue);
		}
	}
		//calling checkedItem function when checkbox is checked or unchecked
		checkbox.addEventListener('change', checkedItem);
		//calling deleteItem functon when DeleteButton is clicked
		deleteButton.addEventListener('click', deleteItem);
		//adding the newLi to ul
		ul.appendChild(newLi);
		//clearing the textbox
		item.value = "";
}
//calling the newItem function when user clicks the button
button.addEventListener("click",newItem);
