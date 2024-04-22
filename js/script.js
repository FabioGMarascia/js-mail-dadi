const email_list = [`fabio@gmail.com`, `silvia@gmail.com`, `martina@gmail.com`];
const user_email = prompt(`Inserisci la tua e-mail`);
let negative_result;

for (let i = 0; i < email_list.length; i++) {
	if (user_email == email_list[i]) {
		alert(`È presente`);
	}
}
