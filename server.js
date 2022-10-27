require("dotenv/config")
const express = require("express")
const cors = require("cors")
const router = express.Router()
const app = express()

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

let port = process.env.PORT || 5000
app.listen(port, () => {
    console.log(`Server running on ${port}`)
})

app.get("/api/v1", (req, res) => {
    res.status(200).json({
        slackUsername: "mosope.dev",
        backend: true,
        age: 6,
        bio: "Software Engineer."
    })
})

