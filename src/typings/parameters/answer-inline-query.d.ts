import type { InlineQueryResult } from '../index.js';

export interface AnswerInlineQueryParams {
  /**
   * Unique identifier for the answered query
   */
  inline_query_id: string;
  /**
   * An array of results for the inline query
   */
  results: InlineQueryResult[];
  /**
   * The maximum amount of time in seconds that the result of the inline query may be cached on the server.
   * Defaults to 300.
   */
  cache_time?: number;
  /**
   * Pass *True*, if results may be cached on the server side only for the user that sent the query.
   * By default, results may be returned to any user who sends the same query
   */
  is_personal?: boolean;
  /**
   * Pass the offset that a client should send in the next query with the same text to receive more results.
   * Pass an empty string if there are no more results or if you don't support pagination.
   * Offset length can't exceed 64 bytes.
   */
  next_offset?: string;
  /**
   * If passed, clients will display a button with specified text that switches the user to a private chat with
   * the bot and sends the bot a start message with the parameter *switch_pm_parameter*
   */
  switch_pm_text?: string;
  /**
   * Deep-linking parameter for the /start message sent to the bot when user presses the switch button.
   * 1-64 characters, only `A-Z`, `a-z`, `0-9`, `_` and `-` are allowed.
   *
   * Example: An inline bot that sends YouTube videos can ask the user to connect the bot to their YouTube account to adapt search results accordingly.
   * To do this, it displays a 'Connect your YouTube account' button above the results, or even before showing any.
   * The user presses the button, switches to a private chat with the bot and, in doing so, passes a start parameter that instructs the bot to return an OAuth link.
   * Once done, the bot can offer a *switch_inline* button so that the user can easily return to the chat where they wanted to use the bot's inline capabilities.
   */
  switch_pm_parameter?: string;
}
