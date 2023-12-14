
const dataKaryawan = [
  {
    nik: "3370056987450001",
    nama: "Lionel Mesi",
    umur: "35",
    tanggalLahir: "01-01-87",
    jenisKelamin: "Laki-laki",
    alamat: "Jl. Achmad yaniNo 89 Jakarta Pusat",
    negara: "Argentina"
  },
  {
    nik: "3370056987450002",
    nama: "Christiano Ronaldo",
    umur: "37",
    tanggalLahir: "01-01-87",
    jenisKelamin: "Laki-laki",
    alamat: "Jl. Achmad yani No 78 Jakarta Pusat",
    negara: "Portugal"
  }
];



// Fungsi untuk menambahkan data karyawan dari form ke dalam array dataKaryawan
function tambahkanDataKaryawan(event) {
  event.preventDefault(); // Menghentikan aksi default dari form

  const form = $('#formKaryawan')[0];
  const newKaryawan = {
    nik: form.nik.value,
    nama: form.nama.value,
    jenisKelamin: form.jenisKelamin.value,
    tanggalLahir: form.tanggalLahir.value,
    alamat: form.alamat.value,
    negara: form.negara.value
  };

  dataKaryawan.push(newKaryawan); // Menambahkan data karyawan baru ke array

  tampilkanDataKaryawan(); // Memperbarui tampilan tabel
  form.reset(); // Mengosongkan form setelah data ditambahkan
}

$(document).ready(function() {
  // ... kode sebelumnya ...

  // Menambahkan event listener untuk form ketika tombol "Tambah" ditekan
  $('#formKaryawan').submit(function(event) {
    tambahkanDataKaryawan(event);
  });
});


// Fungsi untuk menampilkan data karyawan ke dalam tabel
function tampilkanDataKaryawan() {
  const tabel = $('#dataKaryawan');

  // Mengosongkan tabel sebelum menambahkan data baru
  tabel.empty();

  // Menambahkan data karyawan ke dalam tabel
  dataKaryawan.forEach((karyawan, index) => {
    const row = `
      <tr>
        <td>${karyawan.nik}</td>
        <td>${karyawan.nama}</td>
        <td>${karyawan.umur}</td>
        <td>${karyawan.tanggalLahir}</td>
        <td>${karyawan.jenisKelamin}</td>
        <td>${karyawan.alamat}</td>
        <td>${karyawan.negara}</td>
        <td>
          <a href="#" class="detail" data-index="${index}">Detail</a> |
          <a href="#" class="edit" data-index="${index}">Edit</a> |
          <a href="#" class="hapus" data-index="${index}">Hapus</a>
        </td>
      </tr>
    `;
    tabel.append(row);
  });
}

// Memanggil fungsi untuk menampilkan data karyawan saat halaman dimuat
$(document).ready(function() {
  tampilkanDataKaryawan();

  // Handle aksi ketika tombol di-klik
  $('#dataKaryawan').on('click', 'a.detail', function(e) {
    e.preventDefault();
    const index = $(this).data('index');
    // Implementasikan aksi detail sesuai kebutuhan
    alert(`Detail karyawan dengan NIK: ${dataKaryawan[index].nik}`);
  });

  $('#dataKaryawan').on('click', 'a.edit', function(e) {
    e.preventDefault();
    const index = $(this).data('index');
    // Implementasikan aksi edit sesuai kebutuhan
    alert(`Edit karyawan dengan NIK: ${dataKaryawan[index].nik}`);
  });

  $('#dataKaryawan').on('click', 'a.hapus', function(e) {
    e.preventDefault();
    const index = $(this).data('index');
    // Implementasikan aksi hapus sesuai kebutuhan
    if (confirm(`Apakah Anda yakin ingin menghapus karyawan dengan NIK: ${dataKaryawan[index].nik}?`)) {
      dataKaryawan.splice(index, 1);
      tampilkanDataKaryawan(); // Memperbarui tampilan setelah penghapusan
    }
  });
  document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('employeeForm');

    form.addEventListener('submit', function(event) {
      event.preventDefault(); // Mencegah submit default formulir

      // Mengambil nilai dari input
      const nik = document.getElementById('nik').value;
      const nama = document.getElementById('nama').value;
      const gender = document.querySelector('input[name="gender"]:checked').value;
      const birthdate = document.getElementById('birthdate').value;
      const alamat = document.getElementById('alamat').value;
      const negara = document.getElementById('negara').value;

      // Menampilkan data dalam console (ganti bagian ini dengan aksi yang diinginkan)
      console.log("NIK:", nik);
      console.log("Nama:", nama);
      console.log("Jenis Kelamin:", gender);
      console.log("Tanggal Lahir:", birthdate);
      console.log("Alamat:", alamat);
      console.log("Negara:", negara);

      // Di sini Anda bisa menyimpan data ke database atau melakukan aksi lainnya
    });
  });

});