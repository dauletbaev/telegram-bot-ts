import type { ParseMode } from './common/parse-mode.js';
import type { MessageEntity } from './message-entity.js';

export interface InputMediaPhoto {
  /**
   * Type of the result, must be *photo*
   */
  type: 'photo';
  /**
   * File to send. Pass a file_id to send a file that exists on the Telegram servers (recommended),
   * pass an HTTP URL for Telegram to get a file from the Internet, or pass “attach://\<file_attach_name\>” to upload a new one
   * using multipart/form-data under <file_attach_name> name.
   */
  media: string;
  /**
   * Caption of the photo to be sent, 0-1024 characters after entities parsing
   */
  caption?: string;
  /**
   * Mode for parsing entities in the photo caption
   * 
   * @see https://core.telegram.org/bots/api#formatting-options
   */
  parse_mode?: ParseMode;
  /**
   * List of special entities that appear in the caption, which can be specified instead of *parse_mode*
   */
  caption_entities?: MessageEntity[];
}
