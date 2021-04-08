import { Router } from 'express';
const router = Router();

const { list , filt , create , update , remove } = require('../controllers/indexContollerTasks');

router.get('/' , list); // select all
router.get('/:id' , filt); // filter
router.post('/' , create); // add
router.patch('/:id/' , update) // update 
router.delete('/:id/' , remove); //delete 

export default router;