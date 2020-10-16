// Variabel array dengan 10 data
let tinggiBadan = [180, 160, 199, 170, 174, 185, 177, 181, 175, 195];

//  2. tampilkan dengan perulangan
// perulangan biasa
for (var i = 0; i < tinggiBadan.length; i++) {
	console.log('Tinggi ke-' + (i + 1) + ' adalah ' + tinggiBadan[i] + 'cm');
}

// perulangan for of
for (let j of tinggiBadan) {
	console.log(j + 'cm');
}