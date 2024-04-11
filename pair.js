const PastebinAPI = require('pastebin-js'),
pastebin = new PastebinAPI('EMWTMkQAVfJa9kM-MRUrxd5Oku1U7pgL')
const {makeid} = require('./id');
const express = require('express');
const fs = require('fs');
let router = express.Router()
const pino = require("pino");
const {
    default: France_King,
    useMultiFileAuthState,
    delay,
    makeCacheableSignalKeyStore,
    Browsers
} = require("maher-zubair-baileys");

function removeFile(FilePath){
    if(!fs.existsSync(FilePath)) return false;
    fs.rmSync(FilePath, { recursive: true, force: true })
 };
router.get('/', async (req, res) => {
    const id = makeid();
    let num = req.query.number;
        async function FLASH_MD_PAIR_CODE() {
        const {
            state,
            saveCreds
        } = await useMultiFileAuthState('./temp/'+id)
     try {
            let Pair_Code_By_France_King = France_King({
                auth: {
                    creds: state.creds,
                    keys: makeCacheableSignalKeyStore(state.keys, pino({level: "fatal"}).child({level: "fatal"})),
                },
                printQRInTerminal: false,
                logger: pino({level: "fatal"}).child({level: "fatal"}),
                browser: ["Chrome (Linux)", "", ""]
             });
             if(!Pair_Code_By_France_King.authState.creds.registered) {
                await delay(1500);
                        num = num.replace(/[^0-9]/g,'');
                            const code = await Pair_Code_By_France_King.requestPairingCode(num)
                 if(!res.headersSent){
                 await res.send({code});
                     }
                 }
            Pair_Code_By_France_King.ev.on('creds.update', saveCreds)
            Pair_Code_By_France_King.ev.on("connection.update", async (s) => {
                const {
                    connection,
                    lastDisconnect
                } = s;
                if (connection == "open") {
                await delay(5000);
                let data = fs.readFileSync(__dirname + `/temp/${id}/creds.json`);
                await delay(800);
               let b64data = Buffer.from(data).toString('base64');
               let session = await Pair_Code_By_France_King.sendMessage(Pair_Code_By_France_King.user.id, { text: '' + b64data });

               let FLASH_MD_TEXT = `
*𝙎𝙀𝙎𝙎𝙄𝙊𝙉 𝙄𝙎 𝘼𝘾𝙏𝙄𝙑𝙀*
*𝙄𝘽𝙍𝘼𝙃𝙄𝙈 𝙏𝙀𝘾𝙃*
*𝙊𝙒𝙉𝙀𝙍 : 𝙄𝘽𝙍𝘼𝙃𝙄𝙈 𝘼𝘿𝘼𝙈𝙎*
____________________________________
╔════◇
║『 𝙄𝘽𝙍𝘼𝙃𝙄𝙈 𝙏𝙀𝘾𝙃 𝘼𝙄 𝙎𝙀𝙎𝙎𝙄𝙊𝙉』
║ OK YOUR SESSION IS READY COPY IT  
  AND HOST IT ON HEROKU.
╚════════════════════╝
╔═════◇
 『••• OWNER INFO •••』

║❒ 𝐘𝐨𝐮𝐭𝐮𝐛𝐞: _https://www.youtube.com/@ibrahimmdgpt_

║❒ 𝐎𝐰𝐧𝐞𝐫: _https://wa.me/message/74F2PC4JA4F3P1_

║❒ 𝐑𝐞𝐩𝐨: _https://github.com/ibrahimaitech/IBRAHIM-MD_

║❒ 𝐖𝐚𝐆𝐫𝐨𝐮𝐩: _https://chat.whatsapp.com/H6KaBzAhRnw52DM93KsRy2_

║❒ 𝐖𝐚𝐂𝐡𝐚𝐧𝐧𝐞𝐥: _https://whatsapp.com/channel/0029VaZuGSxEawdxZK9CzM0Y_

║❒ 𝐍𝐎𝐓𝐄: _𝐉𝐎𝐈𝐍 𝐌𝐘 𝐂𝐇𝐀𝐍𝐍𝐄𝐋 𝐀𝐍𝐃 𝐅𝐎𝐋𝐋𝐎𝐖 + 𝐒𝐔𝐁𝐒𝐂𝐑𝐈𝐁𝐄 𝐎𝐍 𝐘𝐎𝐔𝐓𝐔𝐁𝐄_

 🐯🐯🐯
╚════════════════════╝ 
 *©𝗜𝗕𝗥𝗔𝗛𝗜𝗠 𝗧𝗘𝗖𝗛*
___________________________________

_Don't Forget To Give a Star To My Repo_`
 await Pair_Code_By_France_King.sendMessage(Pair_Code_By_France_King.user.id,{text:FLASH_MD_TEXT},{quoted:session})
 

        await delay(100);
        await Pair_Code_By_France_King.ws.close();
        return await removeFile('./temp/'+id);
            } else if (connection === "close" && lastDisconnect && lastDisconnect.error && lastDisconnect.error.output.statusCode != 401) {
                    await delay(10000);
                    FLASH_MD_PAIR_CODE();
                }
            });
        } catch (err) {
            console.log("service restated");
            await removeFile('./temp/'+id);
         if(!res.headersSent){
            await res.send({code:"Service is Currently Unavailable"});
         }
        }
    }
    return await FLASH_MD_PAIR_CODE()
});
module.exports = router
