const express = require('express')
const app = express();
const port = 3000;
// const fs = require('fs');
const { dirname } = require('path');
const path = require('path')

// Templating Engine
app.set('view engine', 'ejs');

// memanggil url Index
app.get('/', (req, res) => {
    res.render('index', {
        title: 'Home Page'
    })
})
// memanggil url About
app.get('/about', (req, res) => {
    res.render('about', {
        title: 'About Page'
    })
})
// memanggil url contact
app.get('/contact', (req, res) => {
    cont = [
        {
            nama: "adrian",
            email: 'adrian@gmail.com',
        },
        {
            nama: "adriana",
            email: 'adriana@gmail.com',
        },
        {
            nama: "adrianaa",
            email: 'adrianaa@gmail.com',
        },
    ]

    res.render('contact', {
        title: 'Contact Page',
        cont
    })
})

// memanggil url menu
app.get('/menu', (req, res) => {
    res.render('menu', {
        nama: 'adrian',
        title: "Menu Page"
    })
    // var mascots = [
    //     { name: 'Sammy' }
    // ];
    // var tagline = "No programming concept is complete without a cute animal mascot.";

})

// Untuk memanggil sebuah id
app.get('/product/:id/category/', (req, res) => {
    res.send(`product id : ${req.params.id}, id category ${req.query.idCategory}`)
    // res.send('product id : ' + req.params.id + 'id category' + req.params.idCategory)
})

// memanggil url selain diatas
app.use('/', (req, res) => {
    res.status(404);
    res.send('Not Found: 404')
})

// Membuat Server
app.listen(port, () => {
    // Memberi informasi server berjalan
    console.log(`Server is running at ${port}`)
})