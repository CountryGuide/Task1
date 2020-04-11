import { showLoader } from "loader";
import { chain } from "lodash";


const groupDescriptions = {
	'young':  'under 30',
	'middle': 'under 60 and over 30',
	'old':    'over 60'
};

export const userFunctions = {
	getUsers() {
		return JSON.parse(localStorage.getItem("users") || "[]");
	},
	saveUsers(users) {
		localStorage.setItem("users", JSON.stringify(users));
	},
	deleteUser(e) {
		const target = e.target.closest('li');

		if (!target) return;

		showLoader();
		const users = userFunctions.getUsers().filter(user => user.id !== Number(target.dataset.id));
		userFunctions.saveUsers(users);
		userFunctions.outputUsers();
	},
	outputUsers() {
		const container = document.getElementById("users");
		const users     = chain(userFunctions.getUsers())
			.sortBy(['age'])
			.groupBy((user) => {
				if (user.age < 30) {
					return 'young';
				} else if (user.age < 60) {
					return 'middle';
				} else {
					return 'old';
				}
			})
			.value();

		if (!Object.getOwnPropertyNames(users).length) {
			container.innerHTML = 'No users here... yet';
			return;
		}

		const groups        = Object.keys(users).map(group => {
			users[group].sort((x, y) => x.name.toLowerCase().localeCompare(y.name.toLowerCase()));
			const groupMarkup = users[group]
				.map(user => `<li data-id="${user.id}"><span>${user.name}</span><span>${user.age} years old</span></li>`)
				.join('');
			return `<div class="groupTitle"><span>${group}</span>&nbsp;<span>(${groupDescriptions[group]})</span></div><ul class="group">${groupMarkup}</ul>`
		});
		container.innerHTML = groups.join('');
	}
};
