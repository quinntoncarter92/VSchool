const express = require('express')
const appleRouter = express.Router()
const { v4: uuidv4 } = require('uuid')

const apples = [
    {name: 'Fuji', taste: 'sweet', price: '.50', _id: uuidv4()},
    {name: 'Envy', taste: 'semi-sweet', price: '5', _id: uuidv4()},
    {name: 'Ambrosia', taste: 'semi-sweet', price: '2', _id: uuidv4()},
    {name: 'Gala', taste: 'semi-sweet', price: '.50', _id: uuidv4()},
    {name: 'Opal', taste: 'semi-tart', price: '1', _id: uuidv4()},
    {name: 'Jazz', taste: 'semi-tart', price: '5', _id: uuidv4()},
    {name: 'Pink Lady', taste: 'semi-tart', price: '2', _id: uuidv4()},
    {name: 'Granny Smith', taste: 'tart', price: '1', _id: uuidv4()}
]

appleRouter.route('/')
// get all
    .get((req,res) => {
        res.send(apples)
    })
// add new Apple
    .post((req,res) => {
        const newApple = req.body
        newApple._id = uuidv4()
        apples.push(newApple)
        res.send(`Successfully added ${newApple.name} to the database!`)
    })
    // get an apple
appleRouter.get('/:appleId', (req,res) => {
    const appleId = req.params.appleId
    const foundApple = apples.find(apple => apple._id === appleId)
    res.send(foundApple)
})

    // delete an apple
appleRouter.delete('/:appleId', (req,res) => {
    const appleId = req.params.appleId
    const appleIndex = apples.findIndex(apple => apple._id === appleId)
    apples.splice(appleIndex, 1)
    res.send('Successfully removed apple from database!')
})

    // get by taste
appleRouter.get('/search/:searchBy', (req, res) => {

    if(req.params.searchBy === 'price'){
        const min = req.query.min
        const max = req.query.max
        const foundPrice = apples.filter(apple => apple.price <= max && apple.price >= min)
        res.send(foundPrice)
    } else if (req.params.searchBy === 'taste'){
        const taste = req.query.taste
        const foundTaste = apples.filter(apple => apple.taste === taste)
        res.send(foundTaste)
    }

    res.send(req)
})


module.exports = appleRouter