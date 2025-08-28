//function cetak hasil ke html
function print(...args) {
        document.getElementById("output").innerHTML += args.join("") + "\n";
        console.log(...args)
     }

const getUser = () => "rudi";
print("start...");
print(getUser());
print("Finish")

const getUser1 = (callback) => {
      setTimeout(() => {
        callback("Rudi");
      }, 2000);
    };

    print("Start...");
    getUser1((nama) => {
      print(nama); // ini akan tampil setelah 2 detik
    });
    print("Finish");

    const GETUser = () => {
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve("Berkat");
        }, 2000);
      });
    };

    // eksekusi
    print("mulai...");
    GETUser().then((userName) => print(userName));
    print("selesai");

    const getUSEr = () => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                reject("Something wrong...")
            }, 2000)
        })
    }

    print("mulai...")
    getUSEr()
         .then((username) => print(username))
         .catch((error) => print(error));
    print("selesai")     

    const GetName = async () => {
        setTimeout(() => {
            resolve("valen");
            reject("Something wrong...");
        },2000)
    }

    const tryGetName = async () => {
        let userNameA = await GetName();
        print(userNameA)
    }

    print("mulai...")
    tryGetName();
    print("selesai")

    