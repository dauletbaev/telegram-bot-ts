export enum METHODS {
  // Getting updates
  getUpdates = 'getUpdates',
  setWebhook = 'setWebhook',
  deleteWebhook = 'deleteWebhook',
  getWebhookInfo = 'getWebhookInfo',
  // Common methods
  getMe = 'getMe',
  logOut = 'logOuts',
  close = 'close',
  sendMessage = 'sendMessage',
  forwardMessage = 'forwardMessage',
  copyMessage = 'copyMessage',
  sendPhoto = 'sendPhoto',
  sendAudio = 'sendAudio',
  sendDocument = 'sendDocument',
  sendVideo = 'sendVideo',
  sendAnimation = 'sendAnimation',
  sendVoice = 'sendVoice',
  sendVideoNote = 'sendVideoNote',
  sendMediaGroup = 'sendMediaGroup',
  sendLocation = 'sendLocation',
  editMessageLiveLocation = 'editMessageLiveLocation',
  stopMessageLiveLocation = 'stopMessageLiveLocation',
  sendVenue = 'sendVenue',
  sendContact = 'sendContact',
  sendPoll = 'sendPoll',
  sendDice = 'sendDice',
  sendChatAction = 'sendChatAction',
  getUserProfilePhotos = 'getUserProfilePhotos',
  getFile = 'getFile',
  banChatMember = 'banChatMember',
  unbanChatMember = 'unbanChatMember',
  restrictChatMember = 'restrictChatMember',
  promoteChatMember = 'promoteChatMember',
  setChatAdministratorCustomTitle = 'setChatAdministratorCustomTitle',
  banChatSenderChat = 'banChatSenderChat',
  unbanChatSenderChat = 'unbanChatSenderChat',
  setChatPermissions = 'setChatPermissions',
  exportChatInviteLink = 'exportChatInviteLink',
  createChatInviteLink = 'createChatInviteLink',
  editChatInviteLink = 'editChatInviteLink',
  revokeChatInviteLink = 'revokeChatInviteLink',
  approveChatJoinRequest = 'approveChatJoinRequest',
  declineChatJoinRequest = 'declineChatJoinRequest',
  setChatPhoto = 'setChatPhoto',
  deleteChatPhoto = 'deleteChatPhoto',
  setChatTitle = 'setChatTitle',
  setChatDescription = 'setChatDescription',
  pinChatMessage = 'pinChatMessage',
  unpinChatMessage = 'unpinChatMessage',
  unpinAllChatMessages = 'unpinAllChatMessages',
  leaveChat = 'leaveChat',
  getChat = 'getChat',
  getChatAdministrators = 'getChatAdministrators',
  getChatMemberCount = 'getChatMemberCount',
  getChatMember = 'getChatMember',
  setChatStickerSet = 'setChatStickerSet',
  deleteChatStickerSet = 'deleteChatStickerSet',
  answerCallbackQuery = 'answerCallbackQuery',
  setMyCommands = 'setMyCommands',
  deleteMyCommands = 'deleteMyCommands',
  getMyCommands = 'getMyCommands',
  setChatMenuButton = 'setChatMenuButton',
  getChatMenuButton = 'getChatMenuButton',
  setMyDefaultAdministratorRights = 'setMyDefaultAdministratorRights',
  getMyDefaultAdministratorRights = 'getMyDefaultAdministratorRights',
  // Update
  editMessageText = 'editMessageText',
  editMessageCaption = 'editMessageCaption',
  editMessageMedia = 'editMessageMedia',
  editMessageReplyMarkup = 'editMessageReplyMarkup',
  stopPoll = 'stopPoll',
  deleteMessage = 'deleteMessage',
  // Stickers
  sendSticker = 'sendSticker',
  getStickerSet = 'getStickerSet',
  uploadStickerFile = 'uploadStickerFile',
  createNewStickerSet = 'createNewStickerSet',
  addStickerToSet = 'addStickerToSet',
  setStickerPositionInSet = 'setStickerPositionInSet',
  deleteStickerFromSet = 'deleteStickerFromSet',
  setStickerSetThumb = 'setStickerSetThumb',
  // Inline mode
  answerInlineQuery = 'answerInlineQuery',
  answerWebAppQuery = 'answerWebAppQuery',
  // Payments
  sendInvoice = 'sendInvoice',
  createInvoiceLink = 'createInvoiceLink',
  answerShippingQuery = 'answerShippingQuery',
  answerPreCheckoutQuery = 'answerPreCheckoutQuery',
  // Telegram Passport
  setPassportDataErrors = 'setPassportDataErrors',
  // Games
  sendGame = 'sendGame',
  setGameScore = 'setGameScore',
  getGameHighScores = 'getGameHighScores',
}
