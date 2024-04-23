const n_user = parseInt(Math.random() * 6 + 1);
console.log(`Numero utente ${n_user}`);
const n_pc = parseInt(Math.random() * 6 + 1);
console.log(`Numero pc ${n_pc}`);

if (n_user > n_pc) {
	console.log(`Ha vinto  l'utente!`);
} else if (n_pc > n_user) {
	console.log(`Ha vinto  il pc!`);
} else {
	console.log(`Parità!`);
}
