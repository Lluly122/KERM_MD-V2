//#ENJOY BRO😍
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "Kermd237@gmail.com";
global.location = "Douala, Cameroun";
global.mongodb = process.env.MONGODB_URI || "";
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Douala";
global.github = process.env.GITHUB || "https://github.com/Kgtech-cmr/KERM_MD-V2";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029Vafn6hc7DAX3fzsKtn45";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029Vafn6hc7DAX3fzsKtn45";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/40ffc2a288542560c887c.jpg";
global.devs = "https://wa.me/237650564445 , https://wa.me/237656520674";
global.sudo = process.env.SUDO || "";
global.owner = process.env.OWNER_NUMBER || "40467399";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "false";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "false";
global.userImages = process.env.USER_IMAGES || "https://telegra.ph/file/40ffc2a288542560c887c.jpg";
global.waPresence = process.env.WAPRESENCE || "available";
global.readcmds = process.env.READ_COMMAND || "true";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "true";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://kerm-session-39mi.onrender.com/wasiqr";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "Byte;;;eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZUVwTzQ4c1BXWjRNRjZWenRPTzR3UzFjay9hUXhXVDVFQjVjWkdNWWsyZz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoicGt2V0lLQkNhRVJuemcvb1h0Y2VnNTVMV2dTaHVyQjd2d0FkNnhtTG15RT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJjRk1ZY0ZBZmRuaWdOMGMrTkI5bE5HVVMwcUNWa25nY1pJNm1hcXdyZVVBPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJVb3pyQmt0dFlOOC9pbjQ4bFRtYXhnTXAybEUzbUxCWG9WcHZiUUp3bEFvPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjZLc0ZRZUdnL2xzRmZRN0ZobHpVRWZWT3EwaWJ4V0JZQXpGTm8zMDBaa0E9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ikxia0VtbHhWek84S3NSYW5haEMrUHZuMDdvVG96bHBRZWJIRzRXSVAxR2c9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiWUUvSWRuUFhQUDlzNzVTcnNPdVJ4L1cyMTAvUDhhVk8vakZRa0FURG5tWT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiT1dhYjVaUFkyWU9lOXl2VHpQK2ZQZkdVKzVnZ1NkdlhvNnZYNEUxeXBrST0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjE3dDNjWCs1OFEyaWx3dk0yUE9DZ0l5YjVsa0pjLysxREg1VjMyTjhqWHZHenliSTdNLzRnVWlybW1sTEREQ1pnZGk1d3RoMDYya0RHOERrT0ZtRUFnPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MjYsImFkdlNlY3JldEtleSI6IkNJemJ6WFl3L3FJMm1kRkx5YTJrV1JNbjJ6NHEvNWhFR1dKeWRyUWJoUm89IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbXSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjAsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6InRqdWhRbEk4UWUyREp5VkZvamcwOUEiLCJwaG9uZUlkIjoiMWEyZjljYjEtYjMyMy00NWU1LWI2ZDQtOGE3MWQ2YmMxMGViIiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ijh5V2M2TDVhLzNOY2RpYVNwTUJ1K1RpbWRUMD0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJoOWhoVWtGWkdadHdCSG0wRDRIMEEwc0lOREU9In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiTlZENkxOQUQiLCJtZSI6eyJpZCI6IjUwOTQwNDY3Mzk5OjhAcy53aGF0c2FwcC5uZXQiLCJuYW1lIjoi8J2XpvCdl6fwnZeY8J2Xo/Cdl5tfX19fX/Cdl5/wnZec8J2XnyDwnZed8J2XlPCdl6wt8J2XrSJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDS3lXdTU0QkVNblpuN1lHR0FFZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoiN2hSL3BtNVhYa3o0cFZnekU2YzM0ZWdNQUhGdkhqTkJzcXNTemVVWUpSZz0iLCJhY2NvdW50U2lnbmF0dXJlIjoiNFR5Qlp1ZStYalZ5RGphMlJ0MGNkQXczbXQ2VmNCcWprTzZJclczK3ZySjVTejFjNkk4RWE4VEVqazU3OG4zWnIrUWlYVm1hMi8vTFRpdWtpSEhvQ2c9PSIsImRldmljZVNpZ25hdHVyZSI6IkZaMTVlSElNSnhsUWJSRG50Umt4MndEM0FwUTk0R0ttMy9ndVRXMmFnYnpXNWdBOGIxZ0lpOFhwaWdHdC9yWnI3Tnd3UDFxN2MyUld2aDNmeTZpTUNnPT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiNTA5NDA0NjczOTk6OEBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJlNFVmNlp1VjE1TStLVllNeE9uTitIb0RBQnhieDR6UWJLckVzM2xHQ1VZIn19XSwicGxhdGZvcm0iOiJzbWJhIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzI0Mzc4MzI2LCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQU0zayJ9"
module.exports = {
  menu: process.env.MENU || "1",
  HANDLERS: process.env.PREFIX || "☆",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "`BRAND PRODUCT OF ☞⌜ KG TECH⌝☜`",
  author: process.env.PACK_AUTHER || "steph",
  packname: process.env.PACK_NAME || "Kerm-MD-V2",
  botname: process.env.BOT_NAME || "*steph𖤐*",
  ownername: process.env.OWNER_NAME || "Lluly☠️",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "tCxobE1FqJgfbDZgsYQNHBFB",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "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",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "...d336",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "private",
  LANG: (process.env.THEME || "Kerm-md-v2").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
