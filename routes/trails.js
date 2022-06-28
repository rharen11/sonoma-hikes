import { Router } from 'express'
import * as trailsCtrl from '../controllers/trails.js'

const router = Router()

router.get('/', trailsCtrl.index)

router.get('/new', trailsCtrl.new)

router.post('/', trailsCtrl.create)

router.delete('/:id', trailsCtrl.delete)

router.get('/:id/edit', trailsCtrl.edit)

export {
  router
}