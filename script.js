function mulai() {
    document.getElementById("form").style.display = "block";
}

async function buatPrompt() {
    let tujuan = document.getElementById("tujuan").value.trim();

    if (tujuan === "") {
        alert("Isi dulu bro 😅");
        return;
    }

    let konteks = document.getElementById("konteks").value;
    let peran = document.getElementById("peran").value;
    let gaya = document.getElementById("gaya").value;
    let output = document.getElementById("output").value;

    let hasil = document.getElementById("hasil");

    hasil.value = "AI sedang membuat prompt... 🤖";

    try {
        const response = await fetch(
            "https://rifprompt-api.muhammadalifrifai334.workers.dev/",
            {
                method: "POST",

                headers: {
                    "Content-Type": "application/json"
                },

                body: JSON.stringify({
                    tujuan: tujuan,
                    konteks: konteks,
                    peran: peran,
                    gaya: gaya,
                    output: output
                })
            }
        );

        const data = await response.json();

        if (!response.ok) {
            console.log(data);
            hasil.value = "Terjadi error saat menghubungi AI.";
            return;
        }

        hasil.value = data.hasil || "AI tidak memberikan hasil.";

    } catch (error) {
        console.error(error);
        hasil.value = "Gagal terhubung ke server.";
    }
}


function copyPrompt() {
    let hasil = document.getElementById("hasil");

    navigator.clipboard.writeText(hasil.value);

    alert("Prompt berhasil disalin 🚀");
}


let gayaDipilih = [];

function pilihGaya(gaya) {

    if (gayaDipilih.includes(gaya)) {
        gayaDipilih = gayaDipilih.filter(
            item => item !== gaya
        );
    } else {
        gayaDipilih.push(gaya);
    }

    document.getElementById("gaya").value =
        gayaDipilih.join(", ");

    document.querySelectorAll(".chips button").forEach(button => {

        if (gayaDipilih.includes(button.textContent)) {
            button.classList.add("active");
        } else {
            button.classList.remove("active");
        }

    });
}
