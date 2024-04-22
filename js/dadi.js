const n_user = parseInt(Math.random() * 6 + 1);
console.log(`Numero utente ${n_user}`);
const n_pc = parseInt(Math.random() * 6 + 1);
console.log(`Numero pc ${n_pc}`);

if (n_user > n_pc) {
	alert(`Ha vinto  l'utente!`);
} else if (n_pc > n_user) {
	alert(`Ha vinto  il pc!`);
} else {
	alert(`Parità!`);
}
