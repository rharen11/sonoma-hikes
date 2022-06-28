import { Router } from 'express'
import { isLoggedIn } from '../middleware/middleware.js'
import * as profilesCtrl from "../controllers/profiles.js"

const router = Router()

router.get('/:id', isLoggedIn, profilesCtrl.show)

router.get('/new', isLoggedIn, profilesCtrl.new)

router.post('/', isLoggedIn, profilesCtrl.create)

export {
  router
}