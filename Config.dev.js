{
  "facebookAccount": {
    "email": "",
    "password": "",
    "2FASecret": "",
    "i_user": "",
    "proxy": null,
    "userAgent": "Mozilla/5.0 (Linux; Android 12; M2102J20SG) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/101.0.0.0 Mobile Safari/537.36",
    "intervalGetNewCookie": 1440,
    "notes": "time the system automatically retrieves new cookies from email/password, unit is minute, if you set null, the system will not automatically retrieve new cookies, it saves you from having to manually change your cookie every time it expires. recommended set to 1440 (1day) or 4320 (3day).TO BE ABLE TO USE THIS FEATURE YOU NEED TO ENTER THE ACCOUNT PASSWORD ABOVE"
  },
  "antiInbox": false,
  "language": "en",
  "notesLanguage": "change to your language with ISO 639-1 code, available languages: vi (Vietnamese), en (English)",
  "adminOnly": {
    "enable": false,
    "ignoreCommand": []
  },
  "adminBot": [
    "100090443419982",
    "100091893014482"
  ],
  "whiteListMode": {
    "enable": false,
    "whiteListIds": [],
    "notes": "if you enable this feature, only the ids in the whiteListIds section can use the bot"
  },
  "nickNameBot": "BROKEN 💔 MD 01",
  "prefix": ".",
  "database": {
    "type": "sqlite",
    "uriMongodb": "",
    "autoSyncWhenStart": false,
    "autoRefreshThreadInfoFirstTime": true,
    "notes": "(1) type selects 'json' or 'sqlite' or 'mongodb'. If you choose mongodb, enter uri connect mongodb in the uriMongodb section, instructions to get uri connect mongodb at: https://youtu.be/z1f9urHW5xY. I recommend using 'mongodb' or 'sqlite', json is not recommended because it is not stable. (2) when you set autoSyncWhenStart to true, the bot will automatically synchronize the data in the database when starting the bot, this will make the bot start slower. (3) when you set autoRefreshThreadInfoFirstTime to true, the bot will automatically refresh the thread information when get first message from the thread since starting the bot"
  },
  "timeZone": "Africa/Kinshasa",
  "credentials": {
    "gmailAccount": {
      "email": "eloimekatula7@gmail.com",
      "clientId": "904448757056-6uq5mv7dg3tbu4chfu8o0uahgdjq56g4.apps.googleusercontent.com",
      "clientSecret": "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",
      "refreshToken": "1//04NNZEu9_D0JvCgYIARAAGAQSNwF-L9IrtudDyDk9imVgUf2NxdrIUiCDI7RMBuaXv8NJ1I-MrLThXvOencVEPlbVv8-JUPgyC0w",
      "apiKey": ""
    },
    "gRecaptcha": {
      "siteKey": "6Leap5goAAAAAOunIrLlooWoWY1JVj71qBAeKGu-",
      "secretKey": "6Leap5goAAAAAPPwwXBWwoPAjVMAM3fLvj861rv5"
    }
  },
  "dashBoard": {
    "enable": true,
    "expireVerifyCode": 300000,
    "port": 3001
  },
  "serverUptime": {
    "enable": true,
    "port": 3001,
    "socket": {
      "enable": true,
      "channelName": "uptime",
      "verifyToken": "https:uptime.eloimekatula7.repl.co"
    }
  },
  "autoRestart": {
    "time": false,
    "notes": "you can set time is interval with milisecond or cron time, example: 1000, 10000, 60000, 3600000, 86400000, 0 0 * * *,... docs: https://www.npmjs.com/package/node-cron. If you set time is 0 or false or null, the bot will not auto restart"
  },
  "autoUptime": {
    "enable": true,
    "timeInterval": 180,
    "url": "uptime.betterstack.com/team/167465/monitors/news",
    "notes": "the value of timeInterval is seconds, url is the url you want to send the request to (automatically detected for hosting glitch or replit)"
  },
  "autoLoadScripts": {
    "enable": true,
    "ignoreCmds": "",
    "ignoreEvents": "",
    "notes": "this feature will automatically load the script when scripts have been changed, you can set ignoreCmds to ignore commands, ignoreEvents to ignore events, separate by comma or space, example: \"cmd1.js cmd2.js cmd3.js\" (without backslash)"
  },
  "autoRefreshFbstate": true,
  "autoReloginWhenChangeAccount": true,
  "autoRestartWhenListenMqttError": true,
  "restartListenMqtt": {
    "enable": true,
    "timeRestart": 3600000,
    "delayAfterStopListening": 2000,
    "logNoti": true,
    "notes": "the value of timeRestart and delayAfterStopListening is milisecond, You shouldn't edit this if you don't know what it is"
  },
  "notiWhenListenMqttError": {
    "notes": "This is the message when the bot is listening to the mqtt server and the mqtt server stops working due to account problems such as: locked acc, blocked due to spam,... bot will automatically send notifications to parts of your settings. You must change enable to true to use this feature. See bot/login/handlerWhenListenHasError.js file for details on how it works",
    "gmail": {
      "enable": true,
      "emailGetNoti": "elohimekatula7@gmail.com",
      "note": "Bot will use gmailAccount to send email to emailGetNoti, can send notifications to many email, separate by comma or space, example: \"example1@gmail.com example2@gmail.com\" (without backslash)"
    },
    "telegram": {
      "enable": false,
      "botToken": "",
      "chatId": "",
      "note": "Can send notifications to many chatId, separate by comma or space, example: \"123456789 987654321\" (without backslash)"
    },
    "discordHook": {
      "enable": false,
      "webhookUrl": "",
      "note": "Can send notifications to many webhookUrl, separate by comma or space, example: \"https://discord.com/api/webhooks/123456789/123456789 https://discord.com/api/webhooks/987654321/987654321\" (without backslash)"
    }
  },
  "hideNotiMessage": {
    "commandNotFound": false,
    "adminOnly": false,
    "threadBanned": false,
    "userBanned": false,
    "needRoleToUseCmd": false,
    "needRoleToUseCmdOnReply": false,
    "needRoleToUseCmdOnReaction": false
  },
  "logEvents": {
    "disableAll": false,
    "message": true,
    "message_reaction": true,
    "message_unsend": true,
    "message_reply": true,
    "event": true,
    "read_receipt": false,
    "typ": false,
    "presence": false
  },
  "optionsFca": {
    "forceLogin": true,
    "listenEvents": true,
    "updatePresence": true,
    "listenTyping": true,
    "logLevel": "error",
    "selfListen": false,
    "selfListenEvent": true,
    "autoMarkDelivery": true,
    "autoReconnect": true,
    "notes": "Document here: https://github.com/ntkhang03/fb-chat-api/blob/master/DOCS.md#apisetoptionsoptions "
  },
  "whiteListModeThread": {
    "enable": false,
    "whiteListThreadIds": [],
    "notes": "if you enable this feature, only the thread in the whiteListThreadIds list can use the bot",
    "how_it_work": "if you enable both whiteListMode and whiteListModeThread, the system will check if the user is in whiteListIds, then check if the thread is in whiteListThreadIds, if one of the conditions is true, the user can use the bot"
  }
	    }
