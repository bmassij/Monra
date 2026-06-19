export const DEFAULT_FREE_MODELS = [
  'google/gemma-4-26b-a4b-it:free',
  'mistralai/mistral-small-3.1-24b-instruct:free',
  'google/gemma-4-31b-it:free',
  'meta-llama/llama-3.3-70b-instruct:free',
  'qwen/qwen-2.5-72b-instruct:free',
] as const

let rotateIndex = 0

function parseModelsList(raw: string): string[] {
  return raw
    .split(',')
    .map(m => m.trim())
    .filter(Boolean)
}

export function getOpenRouterModels(): string[] {
  const fromList = process.env.OPENROUTER_MODELS
  if (fromList) {
    const parsed = parseModelsList(fromList)
    if (parsed.length > 0) return parsed
  }

  const single = process.env.OPENROUTER_MODEL?.trim()
  if (single) return [single]

  return [...DEFAULT_FREE_MODELS]
}

/** Round-robin start, then try remaining models on rate limit / outage. */
export function getModelTryOrder(): string[] {
  const models = getOpenRouterModels()
  if (models.length <= 1) return models

  const start = rotateIndex % models.length
  rotateIndex += 1

  const ordered = [
    ...models.slice(start),
    ...models.slice(0, start),
  ]

  return ordered
}

export function shouldTryNextModel(status: number): boolean {
  return status === 429 || status === 502 || status === 503 || status === 529
}
