import type { PhotoSize } from './photo-size.js';

export interface UserProfilePhotos {
  /**
   * Total number of profile pictures the target user has
   */
  total_count: number;
  /**
   * Requested profile pictures (in up to 4 sizes each)
   */
  photos: PhotoSize[][];
}
