import type { HandleClientError as HandleServerError } from '@sveltejs/kit'

export const handleError: HandleServerError = async ({ error, event, status, message }) => {
  const errorId = crypto.randomUUID()
  const trace = (error as Record<string, any>).message

  return {
    message: trace,
    errorId
  }
}
