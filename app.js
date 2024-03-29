const express = require('express')
const cors = require('cors')
const app = express()
const fs = require('fs')
const xlsx = require('xlsx')
const PORT = process.env.PORT || 3030;
app.use(cors())
app.get('/', function (req, res) {
  res.send('Hello World')
})

app.get('/items', function (req, res) {
    // var items = [
    //     {title: 'item1', img: 'img1'},
    //     {title: 'item2', img: 'img2'},
    //     {title: 'item3', img: 'img3'},
    //     {title: 'item4', img: 'img4'},
    //     {title: 'item5', img: 'img5'}
    // ];
    let wb = xlsx.readFile("Menu.xlsx")
    let ws = wb.Sheets["Items"]
    let items = xlsx.utils.sheet_to_json(ws)
    res.json(items)
  })

app.listen(PORT)