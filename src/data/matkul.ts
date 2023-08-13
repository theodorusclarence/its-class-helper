export type DataMatkul = {
  sem: string;
  kode: string;
  nama: string;
  mkjur: string;
};

export const dataMatkul: Array<DataMatkul> = [
  //#region  //*=========== Semester 1 ===========
  { mkjur: '51100', sem: '1', kode: 'EF4101', nama: 'Dasar Pemrograman' },
  { mkjur: '51100', sem: '1', kode: 'EF4102', nama: 'Sistem Digital' },
  { mkjur: '51100', sem: '1', kode: 'EF4103', nama: 'Aljabar Linier' },
  { mkjur: '51100', sem: '1', kode: 'EF4104', nama: 'Sistem Basis Data' },
  //#endregion  //*======== Semester 1 ===========

  //#region  //*=========== Semester 2 ===========
  { mkjur: '51100', sem: '2', kode: 'EF4201', nama: 'Struktur Data' },
  { mkjur: '51100', sem: '2', kode: 'EF4202', nama: 'Sistem Operasi' },
  { mkjur: '51100', sem: '2', kode: 'EF4203', nama: 'Organisasi Komputer' },
  { mkjur: '51100', sem: '2', kode: 'EF4204', nama: 'Komputasi Numerik' },
  { mkjur: '51100', sem: '2', kode: 'EW4201', nama: 'Pengenalan Teknologi Elektro dan Informatika Cerdas' },
  //#endregion  //*======== Semester 2 ===========

  //#region  //*=========== Semester 3 ===========
  { mkjur: '51100', sem: '3', kode: 'EF4301', nama: 'Pemrograman Web' },
  { mkjur: '51100', sem: '3', kode: 'EF4302', nama: 'Pemrograman Berorientasi Objek' },
  { mkjur: '51100', sem: '3', kode: 'EF4303', nama: 'Jaringan Komputer' },
  { mkjur: '51100', sem: '3', kode: 'EF4304', nama: 'Teori Graf' },
  { mkjur: '51100', sem: '3', kode: 'EF4305', nama: 'Matematika Diskrit' },
  { mkjur: '51100', sem: '3', kode: 'EK4201', nama: 'Konsep Kecerdasan Artifisial' },
  { mkjur: '51100', sem: '3', kode: 'EF4307', nama: 'Konsep Pengembangan Perangkat Lunak' },
  //#endregion  //*======== Semester 3 ===========

  //#region  //*=========== Semester 4 ===========
  { mkjur: '51100', sem: '4', kode: 'EF4401', nama: 'Pemrograman Jaringan' },
  { mkjur: '51100', sem: '4', kode: 'EF4402', nama: 'Probabilitas dan Statistik' },
  { mkjur: '51100', sem: '4', kode: 'EF4403', nama: 'Otamata' },
  { mkjur: '51100', sem: '4', kode: 'EF4404', nama: 'Manajemen Basis Data' },
  { mkjur: '51100', sem: '4', kode: 'EF4405', nama: 'Perancangan dan Analisis Algoritma' },
  { mkjur: '51100', sem: '4', kode: 'EF4406', nama: 'Pembelajaran Mesin' },
  { mkjur: '51100', sem: '4', kode: 'ER4301', nama: 'Perancangan Perangkat Lunak' },
  //#endregion  //*======== Semester 4 ===========

  //#region  //*=========== Semester 5 ===========
  { mkjur: '51100', sem: '5', kode: 'EF4501', nama: 'Pemrograman Berbasis Kerangka Kerja' },
  { mkjur: '51100', sem: '5', kode: 'EF4502', nama: 'Keamanan Informasi' },
  { mkjur: '51100', sem: '5', kode: 'EF4503', nama: 'Pemodelan dan Simulasi' },
  { mkjur: '51100', sem: '5', kode: 'EF4504', nama: 'Grafika Komputer' },
  { mkjur: '51100', sem: '5', kode: 'EF4505', nama: 'Rekayasa Sistem Berbasis Pengetahuan' },

  // Elective
  { mkjur: '51100', sem: '5', kode: 'EF4506', nama: 'Teknologi antar Jaringan' },
  { mkjur: '51100', sem: '5', kode: 'EF4507', nama: 'Jaringan Nirkabel' },
  { mkjur: '51100', sem: '5', kode: 'EF4508', nama: 'Sistem Terdistribusi' },
  { mkjur: '51100', sem: '5', kode: 'EF4509', nama: 'Pemrograman Kompetitif' },
  { mkjur: '51100', sem: '5', kode: 'EF4510', nama: 'Riset Operasi' },
  { mkjur: '51100', sem: '5', kode: 'EF4511', nama: 'Teknik Pengembangan Game' },
  { mkjur: '51100', sem: '5', kode: 'EF4513', nama: 'Sistem Enterprise' },
  { mkjur: '51100', sem: '5', kode: 'EF4514', nama: 'Tata Kelola Teknologi Informasi' },
  { mkjur: '51100', sem: '5', kode: 'ER4504', nama: 'Manajemen Proyek Perangkat Lunak' },
  { mkjur: '51100', sem: '5', kode: 'ER4201', nama: 'Rekayasa Kebutuhan' },
  { mkjur: '51100', sem: '5', kode: 'EF4517', nama: 'Pengolahan Citra dan Visi Komputer' },
  { mkjur: '51100', sem: '6', kode: 'EF4518', nama: 'Data Mining' },
  //#endregion  //*======== Semester 5 ===========

  //#region  //*=========== Semester 6 ===========
  { mkjur: '51100', sem: '6', kode: 'EF4601', nama: 'Pemrograman Perangkat Bergerak' },
  { mkjur: '51100', sem: '6', kode: 'EF4602', nama: 'Interaksi Manusia dan Komputer' },
  { mkjur: '51100', sem: '6', kode: 'EF4603', nama: 'Kerja Praktik' },

  // Elective
  { mkjur: '51100', sem: '6', kode: 'EF4604', nama: 'Komputasi Bergerak' },
  { mkjur: '51100', sem: '6', kode: 'EF4605', nama: 'Komputasi Pervasif dan Jaringan Sensor' },
  { mkjur: '51100', sem: '6', kode: 'EF4606', nama: 'Keamanan Jaringan' },
  { mkjur: '51100', sem: '6', kode: 'EF4607', nama: 'Keamanan Aplikasi' },
  { mkjur: '51100', sem: '6', kode: 'EF4608', nama: 'Pemrograman Berbasis Antarmuka' },
  { mkjur: '51100', sem: '6', kode: 'EF4609', nama: 'Simulasi Sistem Dinamis' },
  { mkjur: '51100', sem: '6', kode: 'EF4610', nama: 'Simulasi Berbasis Agen' },
  { mkjur: '51100', sem: '6', kode: 'EF4611', nama: 'Teknik Peramalan' },
  { mkjur: '51100', sem: '6', kode: 'EF4612', nama: 'Animasi Komputer dan Pemodelan 3D' },
  { mkjur: '51100', sem: '6', kode: 'EF4613', nama: 'Game Edukasi dan Simulasi' },
  { mkjur: '51100', sem: '6', kode: 'EF4614', nama: 'Desain Pengalaman Pengguna' },
  { mkjur: '51100', sem: '6', kode: 'EF4615', nama: 'Audit Sistem' },
  { mkjur: '51100', sem: '6', kode: 'EF4616', nama: 'Basis Data Terdistribusi' },
  { mkjur: '51100', sem: '6', kode: 'EF4617', nama: 'Sistem Informasi Geografis' },
  { mkjur: '51100', sem: '6', kode: 'ER4503', nama: 'Kualitas Perangkat Lunak' },
  { mkjur: '51100', sem: '6', kode: 'ER4402', nama: 'Konstruksi Perangkat Lunak' },
  { mkjur: '51100', sem: '6', kode: 'EK4501', nama: 'Text Mining' },
  { mkjur: '51100', sem: '6', kode: 'EF4618', nama: 'Game Engine' },
  { mkjur: '51100', sem: '6', kode: 'EF4619', nama: 'Deep Learning' },
  //#endregion  //*======== Semester 6 ===========

  //#region  //*=========== Semester 7 ===========
  { mkjur: '51100', sem: '7', kode: 'EF4701', nama: 'Etika Profesi' },
  { mkjur: '51100', sem: '7', kode: 'EF4702', nama: 'Pra-Tugas Akhir' },

  // Elective
  { mkjur: '51100', sem: '7', kode: 'EF4703', nama: 'Teknologi IoT' },
  { mkjur: '51100', sem: '7', kode: 'EF4704', nama: 'Komputasi Awan' },
  { mkjur: '51100', sem: '7', kode: 'EF4705', nama: 'Forensik Digital' },
  { mkjur: '51100', sem: '7', kode: 'EF4706', nama: 'Pemrograman Pengolahan Sinyal' },
  { mkjur: '51100', sem: '7', kode: 'EF4707', nama: 'Pemrograman Data Sains Terapan' },
  { mkjur: '51100', sem: '7', kode: 'EF4708', nama: 'Analisis Data Multivariat' },
  { mkjur: '51100', sem: '7', kode: 'EF4709', nama: 'Simulasi Berorientasi Obyek' },
  { mkjur: '51100', sem: '7', kode: 'EF4710', nama: 'Game Cerdas' },
  { mkjur: '51100', sem: '7', kode: 'EF4711', nama: 'Realitas X' },
  { mkjur: '51100', sem: '7', kode: 'EF4712', nama: 'Big Data' },
  { mkjur: '51100', sem: '7', kode: 'EF4713', nama: 'Komputasi Kuantum' },
  { mkjur: '51100', sem: '7', kode: 'ER4403', nama: 'Arsitektur Perangkat Lunak' },
  { mkjur: '51100', sem: '7', kode: 'ER4505', nama: 'Evolusi Perangkat Lunak' },
  { mkjur: '51100', sem: '7', kode: 'ER4601', nama: 'Robotika' },
  //#endregion  //*======== Semester 7 ===========

  //#region  //*=========== Semester 8 ===========
  { mkjur: '51100', sem: '8', kode: 'EF4801', nama: 'Tugas Akhir' },
  //#endregion  //*======== Semester 8 ===========
];
