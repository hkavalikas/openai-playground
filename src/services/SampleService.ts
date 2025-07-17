import { OpenAI } from 'openai';

export class SampleService {
  client = new OpenAI();

  async firstMethod() {
    const response = await this.client.responses.create({
      model: 'gpt-4.1-nano',
      input: 'Write a one-sentence bedtime story about a unicorn.',
    });

    console.log(response);
  }
}
