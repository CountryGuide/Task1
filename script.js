
	function onFormSubmit(e) {
		e.preventDefault();
		const users = getUsers();
		const name  = document.getElementById("name").value;
		const age   = document.getElementById("age").value;
		users.push({ name: name, age: age });
		localStorage.setItem("users", JSON.stringify(users));
	}

	function getUsers() {
		return JSON.parse(localStorage.getItem("users") || "[]");
    }

	function outputUsers() {
    const users         = getUsers();
    users.sort(function SortUsers(a, b) {
        return a.name.toLowerCase().localeCompare(b.name.toLowerCase());
    });
		if (!users.length) {
		return
		}
    const container     = document.getElementById("users");
	const usersMarkup   = users.map(function (users) {
		return `<li>${users.name}</li>`;
		})
		.join('');
	container.innerHTML = `<ul>${usersMarkup}</ul>`;	
	}

	function clear() {
		document.getElementById("MyForm").reset();
	}

	function pageLoaded() {
		const form = document.getElementById("MyForm");
		outputUsers();
        form.addEventListener('submit', onFormSubmit);
		form.addEventListener('submit', outputUsers);
		form.addEventListener('submit', clear);
	}

	document.addEventListener('DOMContentLoaded', pageLoaded);
	
	