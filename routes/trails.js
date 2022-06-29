import { Router } from 'express'
import * as trailsCtrl from '../controllers/trails.js'
import { isLoggedIn } from '../middleware/middleware.js'

const router = Router()

router.get('/', trailsCtrl.index)

router.get('/new', trailsCtrl.new)

router.get('/:id', trailsCtrl.show)

router.get('/:id/edit', isLoggedIn, trailsCtrl.edit)

router.post('/', isLoggedIn, trailsCtrl.create)

router.put('/:id', isLoggedIn, trailsCtrl.update)

router.delete('/:id', isLoggedIn, trailsCtrl.delete)

export {
  router
}