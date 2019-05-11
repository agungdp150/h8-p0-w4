//----Source Google

function ubahHuruf(kata) {
    var hurufAbjad = 'abcdefghijklmnopqrstuvwxyz';
    var jumlahHuruf = hurufAbjad.length;
    // console.log (jumlahHuruf);

    var hasil = '';
    for (var i = 0; i < kata.length; i++) {
        // console.log (kata[i]);
        for (var j = 0; j < jumlahHuruf; j++) {
            if (kata[i] == hurufAbjad[j]) {
                hasil += hurufAbjad[j + 1];
            }
        }
    }
    return hasil;
}

console.log(ubahHuruf('wow')); // xpx
console.log(ubahHuruf('developer')); // efwfmpqfs
console.log(ubahHuruf('javascript')); // kbwbtdsjqu
console.log(ubahHuruf('keren')); // lfsfo
console.log(ubahHuruf('semangat')); // tfnbohbu