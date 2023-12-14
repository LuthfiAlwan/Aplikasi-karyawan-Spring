// Data karyawan (contoh data)
const dataKaryawan = [
  {
    nik: "12345",
    nama: "John Doe",
    jenisKelamin: "Laki-laki",
    tanggalLahir: "1990-05-15",
    alamat: "Jalan Contoh No. 123",
    negara: "Indonesia"
  },
  {
    nik: "67890",
    nama: "Jane Smith",
    jenisKelamin: "Perempuan",
    tanggalLahir: "1995-08-25",
    alamat: "Jalan Lain No. 456",
    negara: "Amerika Serikat"
  }
];

// Fungsi untuk menampilkan data karyawan ke dalam tabel
function tampilkanDataKaryawan() {
  const tabel = $('#dataKaryawan');

  // Mengosongkan tabel sebelum menambahkan data baru
  tabel.empty();

  // Menambahkan data karyawan ke dalam tabel
  dataKaryawan.forEach(karyawan => {
    const row = `
      <tr>
        <td>${karyawan.nik}</td>
        <td>${karyawan.nama}</td>
        <td>${karyawan.jenisKelamin}</td>
        <td>${karyawan.tanggalLahir}</td>
        <td>${karyawan.alamat}</td>
        <td>${karyawan.negara}</td>
      </tr>
    `;
    tabel.append(row);
  });
}

// Memanggil fungsi untuk menampilkan data karyawan saat halaman dimuat
$(document).ready(function() {
  tampilkanDataKaryawan();
});
