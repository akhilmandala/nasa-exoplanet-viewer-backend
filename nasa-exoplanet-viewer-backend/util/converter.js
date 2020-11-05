const fs = require("fs");

/**
 * # This file was produced by the NASA Exoplanet Archive  http://exoplanetarchive.ipac.caltech.edu
# Sat Oct 31 15:06:04 2020
#
    # COLUMN pl_name:        Planet Name
    # COLUMN hostname:       Host Name
    # COLUMN default_flag:   Default Parameter Set
    # COLUMN sy_snum:        Number of Stars
    # COLUMN sy_pnum:        Number of Planets
    # COLUMN discoverymethod: Discovery Method
    # COLUMN disc_year:      Discovery Year
    # COLUMN disc_facility:  Discovery Facility
    # COLUMN pl_orbper:      Orbital Period [days]
    # COLUMN pl_orbsmax:     Orbit Semi-Major Axis [au])
    # COLUMN pl_rade:        Planet Radius [Earth Radius]
    # COLUMN pl_bmasse:      Planet Mass or Mass*sin(i) [Earth Mass]
    # COLUMN pl_bmassprov:   Planet Mass or Mass*sin(i) Provenance
    # COLUMN pl_orbeccen:    Eccentricity
    # COLUMN pl_insol:       Insolation Flux [Earth Flux]
    # COLUMN pl_eqt:         Equilibrium Temperature [K]
    # COLUMN ttv_flag:       Data show Transit Timing Variations
    # COLUMN st_refname:     Stellar Parameter Reference
    # COLUMN st_teff:        Stellar Effective Temperature [K]
    # COLUMN st_rad:         Stellar Radius [Solar Radius]
    # COLUMN st_mass:        Stellar Mass [Solar mass]
    # COLUMN st_met:         Stellar Metallicity [dex]
    # COLUMN st_metratio:    Stellar Metallicity Ratio
    # COLUMN st_logg:        Stellar Surface Gravity [log10(cm/s**2)]
    # COLUMN sy_refname:     System Parameter Reference
    # COLUMN rastr:          RA [sexagesimal]
    # COLUMN ra:             RA [decimal]
    # COLUMN decstr:         Dec [sexagesimal]
    # COLUMN dec:            Dec [decimal]
    # COLUMN sy_dist:        Distance [pc]
    # COLUMN sy_vmag:        V (Johnson) Magnitude
    # COLUMN sy_kmag:        Ks (2MASS) Magnitude
    # COLUMN sy_gaiamag:     Gaia Magnitude
    # COLUMN rowupdate:      Date of Last Update
    # COLUMN pl_pubdate:     Planetary Parameter Reference Publication Date
    # COLUMN releasedate:    Release Date
#
 */

fs.readFile("./exoplanet_data.tsv", "utf8", (err, data) => {
  const exo_json = tsvJSON(data);
  fs.writeFile("exoplanet_data.json", function (err, data) {
    if (err) {
      return console.log(err);
    }
    console.log(data);
  });
});

function tsvJSON(tsv) {
  const lines = tsv.split("\n");
  const headers = lines.slice(0, 1)[0].split("\t");
  return lines.slice(1, lines.length).map((line) => {
    const data = line.split("\t");
    return headers.reduce((obj, nextKey, index) => {
      obj[nextKey] = data[index];
      return obj;
    }, {});
  });
}
