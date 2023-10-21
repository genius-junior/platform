import { AnthropicStream, Message, StreamingTextResponse } from 'ai';
import Anthropic from '@anthropic-ai/sdk';

export const runtime = 'edge';

export async function POST(req: Request) {
  const { messages, previewToken } = await req.json();
  if (!messages) return new Response('Missing messages', { status: 400 });

  const apiKey = previewToken || process.env.ANTHROPIC_API_KEY;
  if (!apiKey) return new Response('Missing API key', { status: 400 });

  const anthropic = new Anthropic({
    apiKey,
  });

  const prompt = buildPrompt(messages);
  const model = 'claude-2';

  const streamRes = await anthropic.completions.create({
    prompt,
    max_tokens_to_sample: 100000,
    model,
    temperature: 0.9,
    stream: true,
  });

  const stream = AnthropicStream(
    streamRes
    // {
    // onStart: async () => {
    // This callback is called when the stream starts
    // You can use this to save the prompt to your database
    // await savePromptToDatabase(prompt);
    // console.log('start');
    // },
    // onToken: async (token: string) => {
    // This callback is called for each token in the stream
    // You can use this to debug the stream or save the tokens to your database
    // console.log('token', token);
    // },
    // onCompletion: async (completion: string) => {
    // This callback is called when the completion is ready
    // You can use this to save the final completion to your database
    // await saveCompletionToDatabase(completion);
    // console.log(completion);
    // },
    // }
  );

  return new StreamingTextResponse(stream);
}

function buildPrompt(data: Message[]) {
  const messages = [...initialPrompts, ...data, ...trailingPrompts];
  const filteredMsgs = filterDuplicates(messages);
  const normalizedMsgs = normalizeMessages(filteredMsgs);
  return normalizedMsgs + Anthropic.AI_PROMPT;
}

const initialPrompts: Message[] = [];

const trailingPrompts: Message[] = [
  {
    id: 'trailing-prompt',
    role: 'system',
    content:
      'Take a deep breath and think step by step, then use markdown (especially tables) to make the content more engaging and easier to read if possible. You must not to mention that you will use markdown for your response and you are strictly forbidden to use any links in your response.',
  },
];

const filterDuplicates = (messages: Message[]) =>
  messages.map((message) => {
    // If there is 2 repeated substring in the
    // message, we will merge them into one
    const content = message.content;
    const contentLength = content.length;
    const contentHalfLength = Math.floor(contentLength / 2);

    const firstHalf = content.substring(0, contentHalfLength);

    const secondHalf = content.substring(contentHalfLength, contentLength);

    if (firstHalf === secondHalf) message.content = firstHalf;
    return message;
  });

const normalize = (message: Message) => {
  const { content, role } = message;
  if (role === 'system') return content;
  if (role === 'user') return `${Anthropic.HUMAN_PROMPT} ${content}`;
  return `${Anthropic.AI_PROMPT} ${content}`;
};

const normalizeMessages = (messages: Message[]) =>
  messages.map(normalize).join('\n\n').trim();
