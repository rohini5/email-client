
document.getElementById('new-email').addEventListener("click",compose);
function compose() {
	document.getElementById("compose-form").style.display = "block";
}
var el = document.getElementById('name');
document.getElementById("sending").addEventListener("click", inbox);
var count = 1;
function inbox(){
	var email_field=document.getElementById('input-email').value
	var subject_field=document.getElementById('input-subject').value
	var message_field=document.getElementById('input-message').value
	if(email_field.length>0 && subject_field.length>0 && message_field.length>0 ){
		document.getElementById("compose-form").style.display = "none";
		elChild = document.createElement('div');
		elChild.setAttribute("id", count);
		elChild.innerHTML = email_field + "    "+ subject_field + '<button class="delete">Delete</button>';

		el.appendChild(elChild);
		document.getElementById('input-email').value=" ";
		document.getElementById('input-subject').value=" ";
		document.getElementById('input-message').value=" ";
		count++;
		var classname = document.getElementsByClassName("delete");
		console.log(classname);
		for (var i = 0; i < classname.length; i++) {
    classname[i].addEventListener('click', remove );
}
function remove(){
	console.log(this.parentElement.innerHTML = "");
	


}
	} else {
		alert("Please fill the form");
	}
}
