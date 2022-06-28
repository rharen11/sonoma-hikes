import { Router } from 'express'
import { isLoggedIn } from '../middleware/middleware.js'
import * as hikesCtrl from '../controllers/hikes.js'
import { router } from './index.js'

router.get('/new', isLoggedIn, hikesCtrl.new)

router.post('/', isLoggedIn, hikesCtrl.createHike)

export {
    router
  }