const express= require('express');
const router = require('../../P3/routes');
const route =express.Router();

router.use("/",(req,res)=>{
    //format data json 
    const data ={
        caption: "Mahasiswa",
        layout = "layout/main-layout",
        data:[
        {
            npm : "2226240136",
            nama : "Dimas"
        },
        {
            npm : "",
            nama : "raniah"
        },
        {
            npm: "",
            nama "icaa"
        }
    ]
};
res.render("index", data);
});

module.exports = router;