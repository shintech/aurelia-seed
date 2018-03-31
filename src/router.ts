import {Router} from 'express'
import {home, models} from './routes'

const router = Router()

export default function (options) {
  router.route('/home')
  .get(home(options).read)
  
  router.route('/models')
  .get(models(options).read.all)

  return router
}