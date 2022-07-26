export interface AnswerCallbackQueryParams {
  /**
   * Unique identifier for the query to be answered
   */
  callback_query_id: string;
  /**
   * Text of the notification. If not specified, nothing will be shown to the user, 0-200 characters
   */
  text?: string;
  /**
   * If True, an alert will be shown by the client instead of a notification at the top of the chat screen.
   * Defaults to false.
   */
  show_alert?: boolean;
  /**
   * URL that will be opened by the user's client.
   * If you have created a Game and accepted the conditions via [@BotFather](https://t.me/botfather),
   * specify the URL that opens your game - note that this will only work if the query comes from a *callback_game* button.
   */
  url?: string;
  /**
   * The maximum amount of time in seconds that the result of the callback query may be cached client-side.
   * Telegram apps will support caching starting in version 3.14. Defaults to 0.
   */
  cache_time?: number;
}
