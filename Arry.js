// fungsi cetak ke HTML + console
    function print(...args) {
      document.getElementById("output").innerHTML += args.join(" ") + "\n";
      console.log(...args);
    }

 
    // array destructuring
    let mahasiswa = ["Andmin", "Rudi", "Budi"];
    let [a, b, c ] = mahasiswa;

    print(a);
    print(b);
    print(c);

    // object destructuring
    let mahasiswa2 ={
        nama: "berkat",
        umur: 16,
        jurusan: "RPL"
    };
    let {nama, umur, jurusan} = mahasiswa2;
    print(nama);
    print(umur);
    print(jurusan);

    // destructuring function
    const datamahsiswa = () => {
        return {nama2: "Andi", umur2: 16, jurusan2: "RPL"};
    }

    let {nama2, umur2, jurusan2} = datamahsiswa();
    print(nama2);
    print(umur2);
    print(jurusan2);

    // destructuring function + rename variable
    let {nama2: namamahasiswa, umur2: umurmahasiswa, jurusan2: jurusanmahasiswa} = datamahsiswa();
    print(namamahasiswa);
    print(umurmahasiswa);
    print(jurusanmahasiswa);

    // Spread operator
    let arr1 = [1,2,3];
    let arr2 = [4,5,6];

    let arr3 = [...arr1, ...arr2];
    print(arr3);

    let arr4 = [...arr1, "berkat", ...arr2];
    print(arr4);

    let arr5 = [0, ...arr1, "berkat", ...arr2, 7];
    print(arr5);

    let mahasiswa3 = { nama: "Berkat", umur: 16, jurusan: "RPL" };
    let mahasiswa4 = { ...mahasiswa3, umur: "Andi", tempatlahir: "Bandung" };
    print(mahasiswa4);

    let umur3 = 20;
    let tempatlahir3 = "Jakarta";
    let mahasiswa5 = { ...mahasiswa3, umur3, tempatlahir3 };
    print(mahasiswa5);

    function foo(...args) { return args; }
    print(foo(1,2,3));
    print(foo(3,5,7,9));
    print(foo(5,10,15,20,25,30));

    function tambah(...angka) {
        let total = 0;
        for (let a of angka) { total += a; }
        return total;
    }
    print(tambah(1,2,3));
    print(tambah(3,5,7,9));
    print(tambah(5,10,15,20,25,30));

    const tambah2 = (a,b,...angka) => {
        let total = 0;
        for (let n of angka) { total += n; }
        return total;
    }
    print(tambah2(1,2,3));
    print(tambah2(3,5,7,9));
    print(tambah2(5,10,15,20,25,30));

    const tambah4 = (a,b,...angka) => {
        let total = 0;
        for (let n of angka) { total += n; }
        return total;
    }
    print(tambah4(3,5,7,9));

    const arr6 = [10,20,30,40,50];
    [a,b,...c] = arr6;
    print(a);
    print(b);
    print(c);

    let arr = [10,20,30,40,50];
    arr.forEach( function(val, key){
        print(`nilai arry di index-${key} adalah ${val}`);
    });

    let arrA1 = [10,20,30,40,50];
    arrA1kuadrat = [];
    arrA1.forEach( (val) => arrA1kuadrat.push(val * val) );
    print(arrA1kuadrat);

    let arrA2 = [10,20,30,40,50];
    arrA2kuadrat = arrA2.map( (val) => val * val );
    print(arrA2kuadrat);

    const mahasiswaA1 = [
        {nama: "Andi", umur: 16, jurusan: "RPL"},
        {nama: "Budi", umur: 17, jurusan: "RPL"},
        {nama: "Caca", umur: 16, jurusan: "RPL"},
    ];

    const prosesMahasiswa = (mhs) => 
        `Nama: ${mhs.nama}, Umur: ${mhs.umur}, Jurusan: ${mhs.jurusan}`;
    const formatMahasiswa = mahasiswaA1.map(prosesMahasiswa);
    print(formatMahasiswa.join("\n"));