const Pariwisata = require("./dinasPariwisata");

const createddinasPariwisata= (req, res) => {
    const pariwisata= new pariwisata({
        id : req.body.id,
        nama : req.body.nama,
        alamat : req.body.alamat
    });

    //console.log(dinasPariwisata);
    buku.save()
    .then((createddinasPariwisata)=>{
        res.status(201).json({
                message : "Data berhasil disimpan",
                bookId : createddinasariwisata._id
        });
    })
    .catch((err)=>{
        //console.log(err);
        res.status(500).json({
                message : "internal server error !"
                //error : err
        });
    });
   
};

const readdinasPariwisata = (req, res)=>{
    Buku.find()
    .then((documents)=>{
        res.status(201).json({
            message : "Get Data dinasPariwisata",
            bukus : documents
        });
    })
    .catch((err)=>{
        //console.log(err);
        res.status(500).json({
                message : "internal server error !"
                //error : err
        });
    });
};

const deleteBuku= (req, res) => {
    Buku.deleteOne({_id : req.params.id})
    .then((result)=>{
        res.status(200).json({
            message : "Buku berhasil dihapus ",
            result : result 
        });
    })
    .catch((err)=>{
        //console.log(err);
        res.status(500).json({
                message : "internal server error !"
                //error : err
        });
    });
};

const updatedPariwisata= (req, res) => {
   
     const buku = new Buku({
        id : req.params.id,
        nama : req.body.judul,
        penulis : req.body.penulis,
        genre : req.body.genre
    });

    Buku.updateOne({_id : req.params.id}, buku)
    .then((hasil)=>{
        res.status(200).json({
            message : "Update Berhasil",
            result : hasil    
        });
    }).catch((err)=>{
        //console.log(err);
        res.status(500).json({
                message : "internal server error !"
                //error : err
        });
    });;

};


module.exports ={createBuku, readBuku, deleteBuku, updateBuku}