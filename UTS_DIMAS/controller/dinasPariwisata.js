const mongoose = require("mongoose");

const bukuSchema = new mongoose.Schema({
    namaPariwisata: {type : String, required : true},
    tanggaldinasPariwisata : {type : String, required : true},
    alamatPariwisata : [{type : String, required : true}]
});

module.exports = mongoose.model("pariwisata", bukuSchema);