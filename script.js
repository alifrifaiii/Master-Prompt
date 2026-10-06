function mulai() {
    document.getElementById("form").style.display = "block";
}

function buatPrompt() {
    let tujuan = document.getElementById("tujuan").value;
    let konteks = document.getElementById("konteks").value;
    let peran = document.getElementById("peran").value;
    let gaya = document.getElementById("gaya").value;
    let output = document.getElementById("output").value;

    let prompt = `Kamu adalah AI assistant yang membantu saya.

TUJUAN:
${tujuan}

KONTEKS:
${konteks}

PERAN AI:
${peran}

GAYA JAWABAN:
${gaya}

FORMAT OUTPUT:
${output}

INSTRUKSI:
- Pahami tujuan saya.
- Gunakan konteks yang diberikan.
- Ikuti gaya dan format yang diminta.
- Berikan jawaban yang jelas dan relevan.`;

    document.getElementById("hasil").value = prompt;
}
function copyPrompt() {
    let hasil = document.getElementById("hasil");
    navigator.clipboard.writeText(hasil.value);
    alert("Prompt berhasil disalin! 🚀");
}

let gayaDipilih = [];

function pilihGaya(gaya) {
    if (gayaDipilih.includes(gaya)) {
        gayaDipilih = gayaDipilih.filter(item => item !== gaya);
    } else {
        gayaDipilih.push(gaya);
    }

    document.getElementById("gaya").value = gayaDipilih.join(", ");

    document.querySelectorAll(".chips button").forEach(button => {
        if (gayaDipilih.includes(button.textContent)) {
            button.classList.add("active");
        } else {
            button.classList.remove("active");
        }
    });
}
