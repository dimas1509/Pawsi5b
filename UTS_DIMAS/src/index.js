const express = require('express');
const mongoose = require('mongoose');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware untuk parsing JSON
app.use(express.json());

// Koneksi ke MongoDB
mongoose.connect('mongodb://localhost:27017/dbPariwisata', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => console.log('Koneksi ke MongoDB berhasil!'))
.catch(err => console.error('Koneksi ke MongoDB gagal:', err));

// Route dasar
app.get('/', (req, res) => {
    res.send('Selamat datang di API dbPariwisata!');
});

// Mulai server
app.listen(PORT, () => {
    console.log(`Server berjalan di http://localhost:${PORT}`);
});
