import { Agent, openai, createAgent } from '@inngest/agent-kit';

import { inngest } from './client';

export const helloWorld = inngest.createFunction(
  { id: 'hello-world' },
  { event: 'test/hello.world' },
  async ({ event, step }) => {
    const codeAgent = createAgent({
      name: 'code-agent',
      system:
        'You are an expert next.js developer. You write readable, maintainable, and clean code. You write simple next.js and React sippets',
      model: openai({ model: 'gpt-4o' }),
    });

    const { output } = await codeAgent.run(
      `write the following snippet: ${event.data.value}`
    );

    console.log(output);

    return { output };
  }
);
