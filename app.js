const express = require('express')
const expressLayouts = require('express-ejs-layouts')
const app = express()
const port = 3000
const { loadContact, findContact } = require('./utils/contact')
// gunakan ejs
app.set('view engine', 'ejs')

app.use(expressLayouts)

// app.use((req, res, next) => {
//   console.log('time : ', Date.now())
//   next()
// })
// app.use((req, res, next) => {
//   console.log('ini midleware')
//   next()
// })

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
  const contacts = loadContact()
  res.render('contact', {
    layout: 'layouts/main-layout',
    contacts
  })
})

app.get('/contact/:nama', (req, res) => {
  const contact = findContact(req.params.nama)
  res.render('detail', {
    layout: 'layouts/main-layout',
    contact
  })
})

app.use((req, res) => {
    res.status(404)
    res.send('<h1>404</h1>')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
