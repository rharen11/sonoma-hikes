import { Router } from 'express'
import * as trailsCtrl from '../controllers/trails.js'

const router = Router()

router.get('/', trailsCtrl.index)

export {
  router
}