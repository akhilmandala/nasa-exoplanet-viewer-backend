const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let System = new Schema({
  pl_name: String,
  hostname: String,
  sy_snum: Number,
  sy_pnum: Number,
  discoverymethod: String,
  disc_year: Number,
  disc_facility: String,
  pl_orbper: Number,
  pl_orbsmax: Number,
  pl_rade: Number,
  pl_bmasse: Number,
  pl_bmassprov: Number,
  pl_orbeccen: Number,
  pl_insol: Number,
  pl_eqt: Number,
  ttv_flag: Number,
  st_refname: String,
  st_teff: Number,
  st_rad: Number,
  st_mass: Number,
  st_met: Number,
  st_logg: Number,
  st_loggerr2: Number,
  sy_refname: String,
  ra: Number,
  dec: Number,
  sy_dist: Number,
  sy_kmag: Number,
  sy_gaiamag: Number,
  rowupdate: Date,
  pl_pubdate: String,
  releasedate: Date,
});

module.exports = mongoose.model("System", System, "exoplanets");
