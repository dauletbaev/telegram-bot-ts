import type { InlineKeyboardMarkup } from '../inline-keyboard-markup.js';
import type { InputMessageContent } from './input-message-content.js';
import type { ParseMode } from '../common/parse-mode.js';
import type { MessageEntity } from '../message-entity.js';

export interface InlineQueryResultCachedDocument {
  /**
   * Type of the result, must be *document*
   */
  type: 'document';
  /**
   * Unique identifier for this result, 1-64 Bytes
   */
  id: string;
  /**
   * Title of the result
   */
  title: string;
  /**
   * A valid file identifier for the file
   */
  document_file_id: string;
  /**
   * Short description of the result
   */
  description?: string;
  /**
   * Caption of the document to be sent, 0-1024 characters after entities parsing
   */
  caption?: string;
  /**
   * Mode for parsing entities in the caption. See formatting options for more details.
   *
   * @see https://core.telegram.org/bots/api#formatting-options
   */
  parse_mode?: ParseMode;
  /**
   * List of special entities that appear in the caption, which can be specified instead of *parse_mode*
   */
  caption_entities?: MessageEntity[];
  /**
   * Inline keyboard attached to the message
   *
   * @see https://core.telegram.org/bots#inline-keyboards-and-on-the-fly-updating
   */
  reply_markup?: InlineKeyboardMarkup;
  /**
   * Content of the message to be sent instead of the file
   */
  input_message_content?: InputMessageContent;
}
