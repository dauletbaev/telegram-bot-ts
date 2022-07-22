export interface SetChatPhotoParams {
  /**
   * Unique identifier for the target group or username of the target supergroup or channel (in the format `@channelusername`)
   */
  chat_id: number | string;
  /**
   * New chat photo, uploaded using multipart/form-data
   */
  photo: Blob;
}
