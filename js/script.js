const email_list = [`fabio@gmail.com`, `silvia@gmail.com`, `martina@gmail.com`];
const user_email = prompt(`Inserisci la tua e-mail`);
let result = 0;

for (let i = 0; i < email_list.length; i++) {
	if (user_email == email_list[i]) {
		result = 1;
	}
}

if (result == 1) {
	alert(`È presente`);
} else {
	alert(`Non è presente`);
}
