import { Router } from 'express';
import { SampleController } from '../controllers/SampleController';

const router = Router();
const sampleController = new SampleController();

router.get('/', sampleController.firstMethod.bind(sampleController));

export default router;
