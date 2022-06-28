import { Router } from 'express'
import * as trailsCtrl from '../controllers/trails.js'

const router = Router()

router.get('/', trailsCtrl.index)

router.get('/:id/edit', trailsCtrl.edit)

router.post('/', trailsCtrl.create)

router.get('/new', trailsCtrl.new)

router.put('/:id', trailsCtrl.update)

router.delete('/:id', trailsCtrl.delete)

export {
  router
}