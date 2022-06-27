import { Router } from 'express'
import { isLoggedIn } from '../middleware/middleware.js'
import * as hikesCtrl from '../controllers/hikes.js'
import { router } from './index.js'

router.get('/new', hikesCtrl.new)

router.post('/hikes', hikesCtrl.createHike)

export {
    router
  }