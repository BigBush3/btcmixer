const express = require('express')
const mongoose = require('mongoose')
const authRouter = require('./authRouter')
const cors = require('cors')
const PORT = process.env.PORT || 5000

const app = express()


app.use(cors())
app.use(express.json())
app.use("/auth", authRouter)

const start = async () => {
    try {
        await mongoose.connect(`mongodb+srv://root:root@cluster0.stbi0.mongodb.net/?retryWrites=true&w=majority`, {
            useUnifiedTopology: true,
            useNewUrlParser: true
        })
        app.listen(PORT, () => console.log(`server started on port ${PORT}`))
    } catch (e) {
        console.log(e)
    }
}

start()

