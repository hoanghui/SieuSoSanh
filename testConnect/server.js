let express = require('express')
const bodyParser = require('body-parser')

const app = express()
const port = 3000

app.use(bodyParser.json())
app.get('/', (req, res) => {
    console.log(req.body.email);
  res.send('Hello World!')
})

app.get('/user', (req, res) => {

})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})