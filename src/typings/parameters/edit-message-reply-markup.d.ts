import type { InlineKeyboardMarkup } from '../inline-keyboard-markup.js';

export interface EditMessageReplyMarkupParams {
  /**
   * Required if *inline_message_id* is not specified.
   * Unique identifier for the target chat or username of the target channel (in the format `@channelusername`)
   */
  chat_id?: number | string;
  /**
   * Required if *inline_message_id* is not specified. Identifier of the message to edit
   */
  message_id?: number;
  /**
   * Required if *chat_id* and *message_id* are not specified. Identifier of the inline message
   */
  inline_message_id?: string;
  reply_markup?: InlineKeyboardMarkup;
}
