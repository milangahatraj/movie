const express=require('express')
const app = express();
app.get('/api',(req, res) => res.send('Hello World'))
const port = 3000;
app.listen(port)
