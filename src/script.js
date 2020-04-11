import { showLoader } from "loader";
import { last } from 'lodash';
import { userFunctions } from "userFn";
import 'style.css';


function onFormSubmit(e) {
	e.preventDefault();
	const users    = userFunctions.getUsers();
	const name     = document.getElementById("name").value;
	const age      = document.getElementById("age").value;
	const lastUser = last(users);
	showLoader();
	users.push({ name: name, age: age, id: lastUser ? lastUser.id + 1 : 0 });
	userFunctions.saveUsers(users);
	userFunctions.outputUsers();
	clear();
}

function clear() {
	document.getElementById("MyForm").reset();
}

function pageLoaded() {
	const form      = document.getElementById("MyForm");
	const usersList = document.getElementById('users');
	userFunctions.outputUsers();
	form.addEventListener('submit', onFormSubmit);
	usersList.addEventListener('click', userFunctions.deleteUser);
}

document.addEventListener('DOMContentLoaded', pageLoaded);
