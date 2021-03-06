const express = require('express')
const app = express()

const morgan = require('morgan')
const mongoose = require('mongoose')

app.use(express.json())
app.use(morgan('dev'))

mongoose.connect('mongodb://localhost:27017/storedb',
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
        useFindAndModify: false
    }
)
.then(() => console.log('Connected to the Crud Store Database!'))
.catch(err => console.log(err))

app.use('/inventory', require('./routes/inventoryRouter.js'))

app.use((err, req, res, next) => {
    console.log(err)
    return res.send({errMsg: err.message})
})

app.listen(7000, () => {
    console.log('The server is running on port 7000!!')
})