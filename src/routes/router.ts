import { Router } from 'express';
import NotesController from '../NotesController.js';

const router = Router();

router.post('/notes', NotesController.create);
router.delete('/notes/:id', NotesController.remove);
router.patch('/notes/:id', NotesController.edit);
router.get('/notes/stats', NotesController.getStats);
router.get('/notes/:id', NotesController.retrieve);
router.get('/notes', NotesController.getAll);

export default router;