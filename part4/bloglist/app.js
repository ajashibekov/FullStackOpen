const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
const config = require('./utils/config')
const logger = require('./utils/logger')
const blogsRouter = require('./controllers/blogs')

logger.info('Connecting to mongo')

mongoose.connect(config.MONGODB_URI).then(() => {
  logger.info('Connected to mongo')
}).catch(error => logger.error('Error connecting to mongo: ', error))

const app = express()
app.use(cors)
app.use(express.json)
app.use('/api/blogs', blogsRouter)

module.exports = app