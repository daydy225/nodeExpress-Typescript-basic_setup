import express from 'express'

import mongoose from 'mongoose'
import { MONGO_URI } from './utils/config'
import { info, error } from './utils/logger'

const app = express()

info('connecting to', MONGO_URI)

app.use(express.json())

mongoose
  .connect(MONGO_URI)
  .then((result) => info('connected to MongoDB'))
  .catch((err) => error('error connecting to MongoDB', err.message))

export default () => {
  return app
}
