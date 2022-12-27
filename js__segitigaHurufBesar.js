function segitigaHurufBesar(tinggi) {
    let spasi = " "

    for (i=tinggi; i>0; i--) {
        huruf = `${String.fromCharCode(65+(tinggi-i))}${spasi}`
        let jumlahSpasi = spasi.repeat(tinggi-i)
        let jumlahHuruf = huruf.repeat(i)

        console.log(`${jumlahSpasi}${jumlahHuruf}`)
    }
}

segitigaHurufBesar(10)
