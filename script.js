alert("JavaScript berhasil dibaca!");




const daftarSoal = [
    {
        soal: "Titik A(2, 3) ditranslasikan oleh T(4, 2). Berapakah bayangannya?",
        pilihan: ["(6, 5)", "(2, 5)", "(6, 1)", "(4, 3)"],
        jawaban: 0,
        pembahasan: `KONSEP:
Translasi adalah perpindahan titik dari posisi awal ke posisi baru tanpa mengubah bentuk dan ukuran.

RUMUS:
(x, y) → (x+a, y+b)

DIKETAHUI:
A(2, 3) dan T(4, 2).

LANGKAH PENYELESAIAN:
1. Koordinat x ditambah 4:
   x' = 2 + 4 = 6
2. Koordinat y ditambah 2:
   y' = 3 + 2 = 5

KESIMPULAN:
Bayangan titik A adalah (6, 5).`
    },

    {
        soal: "Titik B(3, 5) dicerminkan terhadap sumbu X. Hasilnya adalah?",
        pilihan: ["(-3, 5)", "(3, -5)", "(-3, -5)", "(5, 3)"],
        jawaban: 1,
        pembahasan: `KONSEP:
Pencerminan terhadap sumbu X membuat koordinat x tetap, sedangkan koordinat y berubah tanda.

RUMUS:
(x, y) → (x, -y)

DIKETAHUI:
B(3, 5).

LANGKAH PENYELESAIAN:
1. Koordinat x tetap:
   x' = 3
2. Koordinat y berubah tanda:
   y' = -5

KESIMPULAN:
Bayangan titik B adalah (3, -5).`
    },

    {
        soal: "Titik C(4, 2) dicerminkan terhadap sumbu Y. Hasilnya adalah?",
        pilihan: ["(4, -2)", "(-4, 2)", "(-4, -2)", "(2, 4)"],
        jawaban: 1,
        pembahasan: `KONSEP:
Pencerminan terhadap sumbu Y mengubah tanda koordinat x, sedangkan koordinat y tetap.

RUMUS:
(x, y) → (-x, y)

DIKETAHUI:
C(4, 2).

LANGKAH PENYELESAIAN:
1. Koordinat x berubah tanda:
   x' = -4
2. Koordinat y tetap:
   y' = 2

KESIMPULAN:
Bayangan titik C adalah (-4, 2).`
    },

    {
        soal: "Titik D(1, 2) diputar 90 derajat berlawanan arah jarum jam terhadap O(0,0). Hasilnya?",
        pilihan: ["(2, -1)", "(1, -2)", "(-2, 1)", "(-1, 2)"],
        jawaban: 2,
        pembahasan: `KONSEP:
Rotasi adalah perputaran suatu titik terhadap pusat tertentu.

RUMUS ROTASI 90 DERAJAT BERLAWANAN ARAH JARUM JAM:
(x, y) → (-y, x)

DIKETAHUI:
D(1, 2).

LANGKAH PENYELESAIAN:
1. x' = -y = -2
2. y' = x = 1

KESIMPULAN:
Bayangan titik D adalah (-2, 1).`
    },

    {
        soal: "Titik E(3, 2) diputar 180 derajat terhadap titik pusat O(0,0). Hasilnya?",
        pilihan: ["(-3, -2)", "(3, -2)", "(-2, 3)", "(2, -3)"],
        jawaban: 0,
        pembahasan: `KONSEP:
Rotasi 180 derajat terhadap pusat O(0,0) membuat kedua koordinat berubah tanda.

RUMUS:
(x, y) → (-x, -y)

DIKETAHUI:
E(3, 2).

LANGKAH PENYELESAIAN:
1. x' = -3
2. y' = -2

KESIMPULAN:
Bayangan titik E adalah (-3, -2).`
    },

    {
        soal: "Titik F(2, 3) didilatasi dengan pusat O dan faktor skala 2. Hasilnya?",
        pilihan: ["(2, 6)", "(4, 6)", "(4, 3)", "(1, 3)"],
        jawaban: 1,
        pembahasan: `KONSEP:
Dilatasi adalah perubahan ukuran suatu objek berdasarkan faktor skala tertentu.

RUMUS:
(x, y) → (kx, ky)

DIKETAHUI:
F(2, 3) dan faktor skala k = 2.

LANGKAH PENYELESAIAN:
1. x' = 2 × 2 = 4
2. y' = 3 × 2 = 6

KESIMPULAN:
Bayangan titik F adalah (4, 6).`
    },

    {
        soal: "Titik G(6, 4) didilatasi dengan faktor skala 1/2 dan pusat O. Hasilnya?",
        pilihan: ["(12, 8)", "(6, 2)", "(3, 2)", "(3, 4)"],
        jawaban: 2,
        pembahasan: `KONSEP:
Dilatasi dengan faktor skala 1/2 membuat jarak titik dari pusat menjadi setengah jarak semula.

RUMUS:
(x, y) → (kx, ky)

DIKETAHUI:
G(6, 4) dan k = 1/2.

LANGKAH PENYELESAIAN:
1. x' = 6 × 1/2 = 3
2. y' = 4 × 1/2 = 2

KESIMPULAN:
Bayangan titik G adalah (3, 2).`
    },

    {
        soal: "Titik H(2, 4) dicerminkan terhadap garis y = x. Hasilnya?",
        pilihan: ["(-2, 4)", "(4, 2)", "(2, -4)", "(-4, -2)"],
        jawaban: 1,
        pembahasan: `KONSEP:
Pencerminan terhadap garis y = x dilakukan dengan menukar posisi koordinat x dan y.

RUMUS:
(x, y) → (y, x)

DIKETAHUI:
H(2, 4).

LANGKAH PENYELESAIAN:
1. Koordinat x yang baru adalah 4.
2. Koordinat y yang baru adalah 2.

KESIMPULAN:
Bayangan titik H adalah (4, 2).`
    },

    {
        soal: "Titik I(5, -2) dicerminkan terhadap garis y = x. Hasilnya?",
        pilihan: ["(5, 2)", "(-5, 2)", "(-2, 5)", "(2, -5)"],
        jawaban: 2,
        pembahasan: `KONSEP:
Refleksi terhadap garis y = x menukar koordinat pertama dengan koordinat kedua.

RUMUS:
(x, y) → (y, x)

DIKETAHUI:
I(5, -2).

LANGKAH PENYELESAIAN:
1. Koordinat x yang baru adalah -2.
2. Koordinat y yang baru adalah 5.

KESIMPULAN:
Bayangan titik I adalah (-2, 5).`
    },

    {
        soal: "Titik J(2, -3) diputar 270 derajat berlawanan arah jarum jam. Hasilnya?",
        pilihan: ["(3, 2)", "(-3, -2)", "(-2, 3)", "(3, -2)"],
        jawaban: 1,
        pembahasan: `KONSEP:
Rotasi 270 derajat berlawanan arah jarum jam setara dengan rotasi 90 derajat searah jarum jam.

RUMUS:
(x, y) → (y, -x)

DIKETAHUI:
J(2, -3).

LANGKAH PENYELESAIAN:
1. x' = y = -3
2. y' = -x = -2

KESIMPULAN:
Bayangan titik J adalah (-3, -2).`
    }
];

let nomorSekarang = 0;
let skor = 0;
let sudahMenjawab = false;

// SUARA JAWABAN BENAR DAN SALAH
const suaraBenar = new Audio(
    "https://actions.google.com/sounds/v1/cartoon/clang_and_wobble.ogg"
);

const suaraSalah = new Audio(
    "https://actions.google.com/sounds/v1/cartoon/cartoon_boing.ogg"
);

// MEMULAI KUIS
function mulaiKuis() {
    document.getElementById("halaman-awal").classList.add("hidden");
    document.getElementById("halaman-kuis").classList.remove("hidden");

    nomorSekarang = 0;
    skor = 0;

    tampilkanSoal();
}

// MENAMPILKAN SOAL
function tampilkanSoal() {
    sudahMenjawab = false;

    const soal = daftarSoal[nomorSekarang];

    document.getElementById("nomor-soal").textContent =
        "Soal " + (nomorSekarang + 1) + " dari " + daftarSoal.length;

    document.getElementById("skor-sementara").textContent =
        "Skor: " + skor;

    document.getElementById("pertanyaan").textContent = soal.soal;

    document.getElementById("progress-bar").style.width =
        ((nomorSekarang + 1) / daftarSoal.length * 100) + "%";

    document.getElementById("pembahasan").textContent = "";

    const daftarPilihan = document.getElementById("daftar-pilihan");
    daftarPilihan.innerHTML = "";

    soal.pilihan.forEach(function(pilihan, index) {
        const tombol = document.createElement("button");

        tombol.textContent = pilihan;
        tombol.className = "pilihan";

        tombol.onclick = function() {
            periksaJawaban(index);
        };

        daftarPilihan.appendChild(tombol);
    });

    document.getElementById("tombol-lanjut").disabled = true;
}

// MEMERIKSA JAWABAN
function periksaJawaban(pilihanDipilih) {
    if (sudahMenjawab) return;

    sudahMenjawab = true;

    const soal = daftarSoal[nomorSekarang];
    const semuaTombol = document.querySelectorAll(".pilihan");
    const benar = pilihanDipilih === soal.jawaban;

    semuaTombol.forEach(function(tombol, index) {
        tombol.disabled = true;

        if (index === soal.jawaban) {
            tombol.classList.add("benar");
        }

        if (index === pilihanDipilih && !benar) {
            tombol.classList.add("salah");
        }
    });

    const pembahasan = document.getElementById("pembahasan");

    if (benar) {
        skor += 10;

        pembahasan.textContent =
            "✓ JAWABAN KAMU BENAR!\n\n" + soal.pembahasan;

        suaraBenar.currentTime = 0;
        suaraBenar.play().catch(() => {});

    } else {
        pembahasan.textContent =
            "✗ JAWABAN KAMU SALAH.\n\n" +
            "Jawaban yang benar: " + soal.pilihan[soal.jawaban] +
            "\n\n" + soal.pembahasan;

        suaraSalah.currentTime = 0;
        suaraSalah.play().catch(() => {});
    }

    document.getElementById("skor-sementara").textContent =
        "Skor: " + skor;

    document.getElementById("tombol-lanjut").disabled = false;
}

// PINDAH KE SOAL BERIKUTNYA
function soalBerikutnya() {
    nomorSekarang++;

    if (nomorSekarang < daftarSoal.length) {
        tampilkanSoal();
    } else {
        tampilkanHasil();
    }
}

// MENAMPILKAN HASIL AKHIR
function tampilkanHasil() {
    document.getElementById("halaman-kuis").classList.add("hidden");
    document.getElementById("halaman-hasil").classList.remove("hidden");

    let pesan = "";

    if (skor === 100) {
        pesan = "Luar biasa! Semua jawaban kamu benar!";
    } else if (skor >= 70) {
        pesan = "Bagus! Kamu sudah memahami sebagian besar materi.";
    } else if (skor >= 50) {
        pesan = "Cukup baik! Terus berlatih agar semakin paham.";
    } else {
        pesan = "Jangan menyerah! Pelajari kembali pembahasannya.";
    }

    document.getElementById("hasil-skor").textContent =
        "Skor akhir: " + skor + " dari 100. " + pesan;
}

// MENGULANG KUIS
function ulangKuis() {
    document.getElementById("halaman-hasil").classList.add("hidden");
    document.getElementById("halaman-awal").classList.remove("hidden");
}
 