import type { CommonFile } from './common/file.js';

/**
 * The file can be downloaded via the link `https://api.telegram.org/file/bot<token>/<file_path>`.
 * It is guaranteed that the link will be valid for at least 1 hour.
 * When the link expires, a new one can be requested by calling `getFile`.
 * 
 * #### The maximum file size to download is 20 MB
 */
export interface File extends CommonFile {
  /**
   * File path. Use `https://api.telegram.org/file/bot<token>/<file_path>` to get the file.
   */
  file_path?: string;
}
