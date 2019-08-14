import { last } from 'lodash';
import { userFunctions } from "userFn";


function onFormSubmit(e) {
	e.preventDefault();
	const users    = userFunctions.getUsers();
	const name     = document.getElementById("name").value;
	const age      = document.getElementById("age").value;
	const lastUser = last(users);
	users.push({ name: name, age: age, id: lastUser ? lastUser.id + 1 : 0 });
	userFunctions.saveUsers(users);
}

function clear() {
	document.getElementById("MyForm").reset();
}

function pageLoaded() {
	const form      = document.getElementById("MyForm");
	const usersList = document.getElementById('users');
	userFunctions.outputUsers();
	form.addEventListener('submit', onFormSubmit);
	form.addEventListener('submit', userFunctions.outputUsers);
	form.addEventListener('submit', clear);
	usersList.addEventListener('click', userFunctions.deleteUser);
}

document.addEventListener('DOMContentLoaded', pageLoaded);