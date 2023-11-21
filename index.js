import express from 'express'

const app = express()

// Needed for express POST requests to parse a JSON req.body
app.use(express.json());

app.listen(3002, () => {
    console.log('App is running')
  })