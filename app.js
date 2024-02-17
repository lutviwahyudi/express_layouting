const express = require('express')
const expressLayouts = require('express-ejs-layouts')
const app = express()
const port = 3000

// gunakan ejs
app.set('view engine', 'ejs')

app.use(expressLayouts)

app.get('/', (req, res) => {

  const mahasiswa = [
    {
      nama : 'lutvi wahyudi',
      umur : 21,
      asal : 'depok'
    },
    {
      nama : 'randi',
      umur : 21,
      asal : 'depok'
    },
    {
      nama : 'nashda',
      umur : 21,
      asal : 'depok'
    }
  ]
  res.render('index', {
    nama: 'lutvi wahyudi',
    layout: 'layouts/main-layout', 
    title: 'halaman home', 
    mahasiswa})
})
app.get('/about', (req, res) => {
  res.render('about', {
    layout: 'layouts/main-layout'
  })
})
app.get('/contact', (req, res) => {
  res.render('contact', {
    layout: 'layouts/main-layout'
  })
})

app.get('/produk/:id', (req, res) => {
  res.send('Product ID :' + req.params.id)
})

app.use('/', (req, res) => {
    res.status(404)
    res.send('<h1>404</h1>')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
