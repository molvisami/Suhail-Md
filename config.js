const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923184474176";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_16_09_07_23_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNzIsXG4gICAgICAgIDIzLFxuICAgICAgICAyMDQsXG4gICAgICAgIDI1MyxcbiAgICAgICAgODIsXG4gICAgICAgIDY2LFxuICAgICAgICA0NixcbiAgICAgICAgNzcsXG4gICAgICAgIDEzLFxuICAgICAgICAxMTAsXG4gICAgICAgIDIwLFxuICAgICAgICAyMTUsXG4gICAgICAgIDYxLFxuICAgICAgICA4OCxcbiAgICAgICAgMTgwLFxuICAgICAgICAzMCxcbiAgICAgICAgMTA5LFxuICAgICAgICAxOSxcbiAgICAgICAgMTIxLFxuICAgICAgICAxMTUsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMjcsXG4gICAgICAgIDkxLFxuICAgICAgICA3OCxcbiAgICAgICAgMixcbiAgICAgICAgNDYsXG4gICAgICAgIDEyLFxuICAgICAgICAxNjAsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMzEsXG4gICAgICAgIDIzMSxcbiAgICAgICAgODVcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTE5LFxuICAgICAgICA1LFxuICAgICAgICAyMDYsXG4gICAgICAgIDEzNixcbiAgICAgICAgMjMyLFxuICAgICAgICAxMixcbiAgICAgICAgMTQ5LFxuICAgICAgICA1MCxcbiAgICAgICAgOTQsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMTQ3LFxuICAgICAgICAyMjcsXG4gICAgICAgIDkxLFxuICAgICAgICAxOTksXG4gICAgICAgIDMwLFxuICAgICAgICA5MCxcbiAgICAgICAgOTMsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMTQ3LFxuICAgICAgICA3MCxcbiAgICAgICAgMTAxLFxuICAgICAgICA5OCxcbiAgICAgICAgMTEzLFxuICAgICAgICAyMDYsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMjAyLFxuICAgICAgICA4MixcbiAgICAgICAgMTMwLFxuICAgICAgICAyNDcsXG4gICAgICAgIDU4LFxuICAgICAgICAxNDgsXG4gICAgICAgIDk4XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA0MCxcbiAgICAgICAgMTA0LFxuICAgICAgICAxMjUsXG4gICAgICAgIDIwNSxcbiAgICAgICAgOTIsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMTMsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMTA1LFxuICAgICAgICAxMDIsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMjM5LFxuICAgICAgICAyMzcsXG4gICAgICAgIDE4MixcbiAgICAgICAgMTc3LFxuICAgICAgICAxMCxcbiAgICAgICAgMTE2LFxuICAgICAgICAyMTMsXG4gICAgICAgIDk5LFxuICAgICAgICA5NSxcbiAgICAgICAgNyxcbiAgICAgICAgNTIsXG4gICAgICAgIDEwNixcbiAgICAgICAgMTQ3LFxuICAgICAgICA1NyxcbiAgICAgICAgMixcbiAgICAgICAgMjYsXG4gICAgICAgIDIyMixcbiAgICAgICAgMTI4LFxuICAgICAgICAyLFxuICAgICAgICAxNTQsXG4gICAgICAgIDk2XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEwNSxcbiAgICAgICAgMTE3LFxuICAgICAgICA2OCxcbiAgICAgICAgMTM1LFxuICAgICAgICA1LFxuICAgICAgICAyMDgsXG4gICAgICAgIDEyMixcbiAgICAgICAgMTcsXG4gICAgICAgIDE2NyxcbiAgICAgICAgNDksXG4gICAgICAgIDIzNSxcbiAgICAgICAgOTgsXG4gICAgICAgIDQ5LFxuICAgICAgICAxMzksXG4gICAgICAgIDE2OCxcbiAgICAgICAgMTMwLFxuICAgICAgICA5MSxcbiAgICAgICAgMjUwLFxuICAgICAgICAyNTEsXG4gICAgICAgIDExLFxuICAgICAgICAyNDUsXG4gICAgICAgIDE5OCxcbiAgICAgICAgNTgsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMjE4LFxuICAgICAgICA2NCxcbiAgICAgICAgMTU1LFxuICAgICAgICAxNzYsXG4gICAgICAgIDMzLFxuICAgICAgICA2OSxcbiAgICAgICAgMTY3LFxuICAgICAgICA5NFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTQ0LFxuICAgICAgICAyMyxcbiAgICAgICAgMTAzLFxuICAgICAgICAxMTUsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMjcsXG4gICAgICAgIDU1LFxuICAgICAgICAxMSxcbiAgICAgICAgNjEsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMixcbiAgICAgICAgMTk1LFxuICAgICAgICA5MixcbiAgICAgICAgMTE1LFxuICAgICAgICAzMSxcbiAgICAgICAgNjAsXG4gICAgICAgIDE2MixcbiAgICAgICAgMTk4LFxuICAgICAgICA4NyxcbiAgICAgICAgMTc0LFxuICAgICAgICAxMCxcbiAgICAgICAgMjM1LFxuICAgICAgICAyMjIsXG4gICAgICAgIDE2NixcbiAgICAgICAgMjM4LFxuICAgICAgICAyOCxcbiAgICAgICAgNTAsXG4gICAgICAgIDk4LFxuICAgICAgICAxOTgsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMjIxLFxuICAgICAgICA2N1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxODUsXG4gICAgICAgIDI0NCxcbiAgICAgICAgODMsXG4gICAgICAgIDE0NixcbiAgICAgICAgMTUyLFxuICAgICAgICAyMTUsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMTY0LFxuICAgICAgICAxMzksXG4gICAgICAgIDY4LFxuICAgICAgICAyMDIsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMTQ1LFxuICAgICAgICA1OSxcbiAgICAgICAgMTMyLFxuICAgICAgICAxMzMsXG4gICAgICAgIDE1MixcbiAgICAgICAgMjksXG4gICAgICAgIDExNixcbiAgICAgICAgMjI0LFxuICAgICAgICA4LFxuICAgICAgICAxOTYsXG4gICAgICAgIDE3MSxcbiAgICAgICAgNjAsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMTAzLFxuICAgICAgICAxMjMsXG4gICAgICAgIDEsXG4gICAgICAgIDEyNixcbiAgICAgICAgMjIsXG4gICAgICAgIDIzNixcbiAgICAgICAgMzJcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTA0LFxuICAgICAgICAgIDI0NCxcbiAgICAgICAgICAzNSxcbiAgICAgICAgICA1MyxcbiAgICAgICAgICA4MyxcbiAgICAgICAgICA2NCxcbiAgICAgICAgICA4OSxcbiAgICAgICAgICAxMzEsXG4gICAgICAgICAgNzMsXG4gICAgICAgICAgMjMyLFxuICAgICAgICAgIDE2OSxcbiAgICAgICAgICAyMzAsXG4gICAgICAgICAgMTMwLFxuICAgICAgICAgIDM5LFxuICAgICAgICAgIDgwLFxuICAgICAgICAgIDQyLFxuICAgICAgICAgIDYsXG4gICAgICAgICAgMTc5LFxuICAgICAgICAgIDE0NixcbiAgICAgICAgICA0NSxcbiAgICAgICAgICAxOTMsXG4gICAgICAgICAgMjM4LFxuICAgICAgICAgIDIxNCxcbiAgICAgICAgICAxNDYsXG4gICAgICAgICAgMTg5LFxuICAgICAgICAgIDE3LFxuICAgICAgICAgIDQ1LFxuICAgICAgICAgIDEyMyxcbiAgICAgICAgICAyNSxcbiAgICAgICAgICAxMjcsXG4gICAgICAgICAgNzgsXG4gICAgICAgICAgOTdcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTQ2LFxuICAgICAgICAgIDY1LFxuICAgICAgICAgIDU3LFxuICAgICAgICAgIDIyMyxcbiAgICAgICAgICAxNzMsXG4gICAgICAgICAgMjAzLFxuICAgICAgICAgIDEzMCxcbiAgICAgICAgICAyMjcsXG4gICAgICAgICAgNjEsXG4gICAgICAgICAgMTI1LFxuICAgICAgICAgIDE1LFxuICAgICAgICAgIDI0NCxcbiAgICAgICAgICAyMjIsXG4gICAgICAgICAgMzAsXG4gICAgICAgICAgMTU4LFxuICAgICAgICAgIDEwMyxcbiAgICAgICAgICAxOTksXG4gICAgICAgICAgMjUyLFxuICAgICAgICAgIDIzNSxcbiAgICAgICAgICA5NSxcbiAgICAgICAgICAyMDksXG4gICAgICAgICAgMTkyLFxuICAgICAgICAgIDIxLFxuICAgICAgICAgIDIwMixcbiAgICAgICAgICAxODUsXG4gICAgICAgICAgMTQ5LFxuICAgICAgICAgIDIzMSxcbiAgICAgICAgICA1NixcbiAgICAgICAgICAyMzUsXG4gICAgICAgICAgOTUsXG4gICAgICAgICAgMjMzLFxuICAgICAgICAgIDEyMlxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEzNSxcbiAgICAgICAgMTMxLFxuICAgICAgICAxMDEsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMTAwLFxuICAgICAgICA0NixcbiAgICAgICAgMTI5LFxuICAgICAgICAxNDQsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMTYsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMjIwLFxuICAgICAgICAxOTMsXG4gICAgICAgIDY0LFxuICAgICAgICAxMTksXG4gICAgICAgIDIwNixcbiAgICAgICAgMjAxLFxuICAgICAgICA1MixcbiAgICAgICAgMjQ5LFxuICAgICAgICAxODEsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMTExLFxuICAgICAgICAxNDMsXG4gICAgICAgIDgxLFxuICAgICAgICAyMTEsXG4gICAgICAgIDE0MyxcbiAgICAgICAgNDcsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMjksXG4gICAgICAgIDIzMCxcbiAgICAgICAgMjUwLFxuICAgICAgICAxODcsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMTQzLFxuICAgICAgICAyNyxcbiAgICAgICAgMjU0LFxuICAgICAgICAyNDgsXG4gICAgICAgIDI0LFxuICAgICAgICA3NixcbiAgICAgICAgMTQxLFxuICAgICAgICAyNDMsXG4gICAgICAgIDExNSxcbiAgICAgICAgMTkwLFxuICAgICAgICA5LFxuICAgICAgICAyMSxcbiAgICAgICAgMjAzLFxuICAgICAgICAyNCxcbiAgICAgICAgMTEzLFxuICAgICAgICAxNzQsXG4gICAgICAgIDEwOSxcbiAgICAgICAgNjMsXG4gICAgICAgIDc5LFxuICAgICAgICA5LFxuICAgICAgICAyMTgsXG4gICAgICAgIDc5LFxuICAgICAgICAyMjQsXG4gICAgICAgIDI1MixcbiAgICAgICAgMTU3LFxuICAgICAgICAxNDMsXG4gICAgICAgIDIyNixcbiAgICAgICAgNzUsXG4gICAgICAgIDM2LFxuICAgICAgICAxNjcsXG4gICAgICAgIDEyXG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiA2NSxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJoZXRvcnRiZXhWTllVUDJHTkpZNUg2VDc0OHljUUNJLzQ5cGZ5S256elNnPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCI2UWRZa2xNVlJaU1FkWDZoamVBc0xnXCIsXG4gIFwicGhvbmVJZFwiOiBcIjYwZjUzNWQyLWI1YjYtNDQ2Ny1iY2QwLWY2YTM5ODg4NTEyY1wiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA0OCxcbiAgICAgIDYwLFxuICAgICAgMTQ2LFxuICAgICAgMjMzLFxuICAgICAgMjI2LFxuICAgICAgNzIsXG4gICAgICAyMjYsXG4gICAgICAxOTUsXG4gICAgICAxODQsXG4gICAgICA3OSxcbiAgICAgIDk5LFxuICAgICAgMTIxLFxuICAgICAgNTAsXG4gICAgICAyMDgsXG4gICAgICAxNzMsXG4gICAgICAyMTMsXG4gICAgICAxMTIsXG4gICAgICAxNDYsXG4gICAgICAxODQsXG4gICAgICAyMlxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IGZhbHNlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTkxLFxuICAgICAgOSxcbiAgICAgIDE0OCxcbiAgICAgIDIzNCxcbiAgICAgIDI0NyxcbiAgICAgIDE0OCxcbiAgICAgIDEzNixcbiAgICAgIDg2LFxuICAgICAgMTIxLFxuICAgICAgMTYzLFxuICAgICAgOTksXG4gICAgICA5MyxcbiAgICAgIDE0OSxcbiAgICAgIDEwMSxcbiAgICAgIDEyMSxcbiAgICAgIDU4LFxuICAgICAgMjE0LFxuICAgICAgNjAsXG4gICAgICAyMzAsXG4gICAgICAxNzdcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNMSENoSUVCRUo2ci83UUdHQUVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcImJIRVMxS1N0a1ZsUENUVkZXTytnMXVKMjU1V09rdS9FWEZVQmJRZ3pIVFk9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwidjVpZEJuSUV1dHpNc2lYQ3V4cVo0WDJ1cGlRVHVIRmFHTFd2aFh5YVZaZ3kvSlNBZ2ZkNk9taUdWSHNmZW1lWVR4bVZNUjZ0d29RMDN0ekZwY0pWQnc9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiWWlLa0tKZXhEWmFYS3YrMzFKVmxmaU1FR3FheDJ6Um5HeGF3MitWcXVxT0tsOXUwNlFkTFFZUDZDRmtBQnVWaUlBcDlPc28wWWF2MkF5MnlXRnk1Q1E9PVwiXG4gIH0sXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCI5MjM0MjE0MjE1NTg6MTFAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcIm5hbWVcIjogXCJTYW1pIEFuc2FyaVwiLFxuICAgIFwibGlkXCI6IFwiMTU1MTAwMzI5MTgzOToxMUBsaWRcIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjkyMzQyMTQyMTU1ODoxMUBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDEwOCxcbiAgICAgICAgICAxMTMsXG4gICAgICAgICAgMTgsXG4gICAgICAgICAgMjEyLFxuICAgICAgICAgIDE2NCxcbiAgICAgICAgICAxNzMsXG4gICAgICAgICAgMTQ1LFxuICAgICAgICAgIDg5LFxuICAgICAgICAgIDc5LFxuICAgICAgICAgIDksXG4gICAgICAgICAgNTMsXG4gICAgICAgICAgNjksXG4gICAgICAgICAgODgsXG4gICAgICAgICAgMjM5LFxuICAgICAgICAgIDE2MCxcbiAgICAgICAgICAyMTQsXG4gICAgICAgICAgMjI2LFxuICAgICAgICAgIDExOCxcbiAgICAgICAgICAyMzEsXG4gICAgICAgICAgMTQ5LFxuICAgICAgICAgIDE0MixcbiAgICAgICAgICAxNDYsXG4gICAgICAgICAgMjM5LFxuICAgICAgICAgIDE5NixcbiAgICAgICAgICA5MixcbiAgICAgICAgICA4NSxcbiAgICAgICAgICAxLFxuICAgICAgICAgIDEwOSxcbiAgICAgICAgICA4LFxuICAgICAgICAgIDUxLFxuICAgICAgICAgIDI5LFxuICAgICAgICAgIDU0XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJzbWJhXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MjE3NTA5NDcsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFPc25cIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQU9zbS5qc29uIjogIntcImtleURhdGFcIjpcIkRyYjRGSXBUOEZ6bDM5S0VOUG1lZEhnOTVYZWZBWDJ5QlBUZlNMNzBwK009XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MjcwNjA2NjQwLFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjBcIn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFPc24uanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJXYnZ1MzlXTWZWMlJvNjBlMVF0UWRERnhDaVc0VmwycTJGbHhVWkZBMEtFPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjI3MDYwNjY0MCxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzBdfSxcInRpbWVzdGFtcFwiOlwiMTcyMTc1MDc1NDMxNlwifSIKfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
