import { Router } from 'express'
import * as trailsCtrl from '../controllers/trails.js'

const router = Router()

router.get('/', trailsCtrl.index)

router.get('/new', trailsCtrl.new)

export {
  router
}