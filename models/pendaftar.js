const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const pendaftarSchema = new Schema(
  {
    jenisBeasiswa: {
      type: String,
      requireq: false,
    },
    lolosBerkas: {
      type: Boolean,
      requireq: false,
    },
    lolosWawancara: {
      type: Boolean,
      requireq: false,
    },
    nilaiWawancara1: {
      type: Number,
      requireq: false,
    },
    nilaiWawancara2: {
      type: Number,
      requireq: false,
    },
    agama: {
      type: String,
      requireq: false,
    },
    alamatAyah: {
      type: String,
      requireq: false,
    },
    alamatIbu: {
      type: String,
      requireq: false,
    },
    alamatKtp: {
      type: String,
      requireq: false,
    },
    alamatWali: {
      type: String,
      requireq: false,
    },
    alumni: {
      type: String,
      requireq: false,
    },
    alumniJabatan: {
      type: String,
      requireq: false,
    },
    alumniThn: {
      type: String,
      requireq: false,
    },
    anakKe: {
      type: String,
      requireq: false,
    },
    angkatan: {
      type: String,
      requireq: false,
    },
    arahan: {
      type: Boolean,
      requireq: false,
    },
    bergenbi: {
      type: String,
      requireq: false,
    },

    beasiswaLain: {
      type: String,
      requireq: false,
    },
    cita: {
      type: String,
      requireq: false,
    },
    darah: {
      type: String,
      requireq: false,
    },
    email: {
      type: String,
      requireq: false,
    },
    fakultas: {
      type: String,
      requireq: false,
    },
    foto: {
      type: String,
      requireq: false,
    },
    genbi: {
      type: String,
      requireq: false,
    },
    gender: {
      type: String,
      requireq: false,
    },
    hobby: {
      type: String,
      requireq: false,
    },
    ikatan: {
      type: String,
      requireq: false,
    },
    instagram: {
      type: String,
      requireq: false,
    },
    ipk: {
      type: String,
      requireq: false,
    },
    kampus: {
      type: String,
      requireq: false,
    },
    kelemahan: {
      type: String,
      requireq: false,
    },
    kontribusi: {
      type: Boolean,
      requireq: false,
    },
    kosan: {
      type: String,
      requireq: false,
    },
    ktm: {
      type: String,
      requireq: false,
    },
    ktp: {
      type: String,
      requireq: false,
    },
    lulus: {
      type: String,
      requireq: false,
    },
    mampu: {
      type: String,
      requireq: false,
    },
    minat: {
      type: String,
      requireq: false,
    },
    motif: {
      type: String,
      requireq: false,
    },
    nama: {
      type: String,
      requireq: false,
    },
    namaAyah: {
      type: String,
      requireq: false,
    },
    namaIbu: {
      type: String,
      requireq: false,
    },
    namaWali: {
      type: String,
      requireq: false,
    },
    nilai: {
      type: String,
      requireq: false,
    },
    nim: {
      type: String,
      requireq: false,
    },
    nomorHp: {
      type: String,
      requireq: false,
    },
    nomorWa: {
      type: String,
      requireq: false,
    },
    organisasi: {
      type: String,
      requireq: false,
    },
    pangilan: {
      type: String,
      requireq: false,
    },
    pantas: {
      type: String,
      requireq: false,
    },
    pekerjaanAyah: {
      type: String,
      requireq: false,
    },
    pekerjaanIbu: {
      type: String,
      requireq: false,
    },
    pekerjaanWali: {
      type: String,
      requireq: false,
    },
    penghasilanAyah: {
      type: String,
      requireq: false,
    },
    penghasilanIbu: {
      type: String,
      requireq: false,
    },
    penghasilanWali: {
      type: String,
      requireq: false,
    },
    prestasi: {
      type: String,
      requireq: false,
    },
    prodi: {
      type: String,
      requireq: false,
    },
    rekomendasi: {
      type: String,
      requireq: false,
    },
    rekomendasi2: {
      type: String,
      requireq: false,
    },
    rekening: {
      type: String,
      requireq: false,
    },
    rencana: {
      type: String,
      requireq: false,
    },
    saran: {
      type: String,
      requireq: false,
    },
    saudara: {
      type: String,
      requireq: false,
    },
    semester: {
      type: String,
      requireq: false,
    },
    sertifikat: {
      type: String,
      requireq: false,
    },
    showWali: {
      type: String,
      requireq: false,
    },
    siapMengurus: {
      type: String,
      requireq: false,
    },
    skil: {
      type: String,
      requireq: false,
    },
    sks: {
      type: String,
      requireq: false,
    },
    sosial: {
      type: String,
      requireq: false,
    },
    suku: {
      type: String,
      requireq: false,
    },
    tangalLahir: {
      type: String,
      requireq: false,
    },
    teleponAyah: {
      type: String,
      requireq: false,
    },
    teleponIbu: {
      type: String,
      requireq: false,
    },
    teleponWali: {
      type: String,
      requireq: false,
    },
    tempatLahir: {
      type: String,
      requireq: false,
    },
    ThnLulus: {
      type: String,
      requireq: false,
    },
    toeflFile: {
      type: String,
      requireq: false,
    },
    toeflNilai: {
      type: String,
      requireq: false,
    },
    usia: {
      type: Number,
      requireq: false,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Pendaftar", pendaftarSchema);
