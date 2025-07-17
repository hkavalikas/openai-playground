import { Request, Response } from 'express';
import { SampleService } from '../services/SampleService';

export class SampleController {
  private sampleService: SampleService;

  constructor() {
    this.sampleService = new SampleService();
  }

  async firstMethod(req: Request, res: Response): Promise<void> {
    try {
      const result = await this.sampleService.firstMethod();
      res.status(200).json(result);
    } catch (error: any) {
      res.status(500).json({ error: error.message });
    }
  }
}
