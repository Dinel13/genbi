const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const adminSchema = new Schema({
  agama: {
    type: String,
    requireq: true,
  },
  alamatAyah: {
    type: String,
    requireq: true,
  },
  alamatIbu: {
    type: String,
    requireq: true,
  },
  anakKe: {
    type: String,
    requireq: true,
  },
  angkatan: {
    type: String,
    requireq: true,
  },
  arahan: {
    type: Boolean,
    requireq: true,
  },
  cita: {
    type: String,
    requireq: true,
  },
  darah: {
    type: String,
    requireq: true,
  },
  fakultas: {
    type: String,
    requireq: true,
  },
  genbi: {
    type: String,
    requireq: true,
  },
  gender: {
    type: String,
    requireq: true,
  },
  hobby: {
    type: String,
    requireq: true,
  },
  instagram: {
    type: String,
    requireq: true,
  },
  ipk: {
    type: String,
    requireq: true,
  },
  kampus: {
    type: String,
    requireq: true,
  },
  kontribusi: {
    type: Boolean,
    requireq: true,
  },
  kosan: {
    type: String,
    requireq: true,
  },
  ktm: {
    type: String,
    requireq: true,
  },
  lulus: {
    type: String,
    requireq: true,
  },
  mampu: {
    type: String,
    requireq: true,
  },
  minat: {
    type: String,
    requireq: true,
  },
  motif: {
    type: String,
    requireq: true,
  },
  nama: {
    type: String,
    requireq: true,
  },
  namaAyah: {
    type: String,
    requireq: true,
  },
  namaIbu: {
    type: String,
    requireq: true,
  },
  nilai: {
    type: String,
    requireq: true,
  },
  nim: {
    type: String,
    requireq: true,
  },
  nomorHp: {
    type: String,
    requireq: true,
  },
  nomorWa: {
    type: String,
    requireq: true,
  },
  organisasi: {
    type: String,
    requireq: true,
  },
  pangilan: {
    type: String,
    requireq: true,
  },
  pantas: {
    type: String,
    requireq: true,
  },
  pekerjaanAyah: {
    type: String,
    requireq: true,
  },
  pekerjaanIbu: {
    type: String,
    requireq: true,
  },
  penghasilanAyah: {
    type: String,
    requireq: true,
  },
  penghasilanIbu: {
    type: String,
    requireq: true,
  },
  prestasi: {
    type: String,
    requireq: true,
  },
  prodi: {
    type: String,
    requireq: true,
  },
  rekomendasi: {
    type: String,
    requireq: true,
  },
  rencana: {
    type: String,
    requireq: true,
  },
  saudara: {
    type: String,
    requireq: true,
  },
  showWali: {
    type: String,
    requireq: true,
  },
  siapMengurus: {
    type: String,
    requireq: true,
  },
  skil: {
    type: String,
    requireq: true,
  },
  suku: {
    type: String,
    requireq: true,
  },
  tangalLahir: {
    type: String,
    requireq: true,
  },
  teleponAyah: {
    type: String,
    requireq: true,
  },
  teleponIbu: {
    type: String,
    requireq: true,
  },
  tempatLahir: {
    type: String,
    requireq: true,
  },
});

module.exports = mongoose.model("Admin", adminSchema);
