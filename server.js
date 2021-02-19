const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const path = require('path');
const cors = require('cors');
const nodemailer = require('nodemailer');
const morgan = require('morgan');
const multer = require('multer')

const app = express();
app.use(morgan(':method :url :status :response-time ms'));
app.use('/', express.static(path.join(__dirname, 'static')));
app.use(bodyParser.json());
app.use(cors())

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, './uploads');
    },
    filename: (req, file, cb) => {
      console.log(file);
      var filetype = '';
      if(file.mimetype === 'image/gif') {
        filetype = 'gif';
      }
      if(file.mimetype === 'image/png') {
        filetype = 'png';
      }
      if(file.mimetype === 'image/jpeg') {
        filetype = 'jpg';
      }
      cb(null, 'yoursweethome-' + Date.now() + '.' + filetype);
    }
});
const upload = multer({storage: storage});

// calling routes
app.use('/', require('./router/router'))

// connect mongodb database
require('./database/database')();

app.listen(3000, () => {
    console.log('Server up at port 3000')
})

app.post('/api/upload',upload.single('file'),function(req, res, next) {
  console.log(req.file);
  if(!req.file) {
    res.status(500);
    return next(err);
  }
  res.json({ fileUrl: 'http://localhost:3000/uploads/' + req.file.filename });
})

app.use('/uploads', express.static('./uploads'));