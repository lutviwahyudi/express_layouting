const fs = require('fs')

// membuat folder data jika belum ada
const dirPath = './data'
if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath)
}

// membuat file contact.json jika belum ada
const dataPath = './data/contacts.json'
if (!fs.existsSync(dataPath)) {
    fs.writeFileSync(dataPath, '[]', 'utf-8')
}

// ambil semua data contact di contact.json
const loadContact = () => {
    const fileBuffer = fs.readFileSync('data/contacts.json', 'utf-8')
    const contacts = JSON.parse(fileBuffer)
    return contacts
}

const findContact = (nama) => {
    const contacts = loadContact()
    const contact = contacts.find((contact) => contact.nama === nama)
    return contact
}

module.exports = { loadContact, findContact }

