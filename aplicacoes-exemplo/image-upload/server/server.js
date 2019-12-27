require('dotenv').config()
const express = require('express')
const cloudinary = require('cloudinary')
const formData = require('express-form-data')
const cors = require('cors')
const { CLIENT_ORIGIN } = require('./config')
const fs = require('fs')

const app = express()

cloudinary.config({ 
  cloud_name: process.env.CLOUD_NAME, 
  api_key: process.env.API_KEY, 
  api_secret: process.env.API_SECRET
})
  
app.use(cors({ 
  origin: CLIENT_ORIGIN 
})) 

app.use(formData.parse())

app.get('/wake-up', (req, res) => res.send('👌'))

app.post('/image-upload', (req, res) => {
  console.log('no /image-upload')

  const values = Object.values(req.files)
  // const promises = values.map(image => cloudinary.uploader.upload(image.path))

  console.log('values: ', values)
  values.forEach((file) => {
    fs.rename(file.path, '/tmp/image-upload/' + file.name, function (err) {
      if(err) {
        console.log('de erro')
        throw err;
      }
      res.write('File uploaded and moved')
      res.end();
    })
  });
  
  // Promise
  //   .all(promises)
  //   .then(results => res.json(results))
  //   .catch((err) => res.status(400).json(err))
  // res.status(200)
  // res.send('ok')
})

app.listen(process.env.PORT || 8080, () => console.log('👍'))