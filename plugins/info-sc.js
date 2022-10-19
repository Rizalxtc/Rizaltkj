import fetch from 'node-fetch'

let handler = async(m, { conn, text, usedPrefix, command }) => {

let pp = await conn.profilePictureUrl(m.chat).catch(_ => null)

let str = `*https://github.com/Arugaz/Arugazbit*\nWa.me/6283856948662\nSilahkan follow github saya dibawah ,Terimakasih`

conn.sendButton(m.chat, str, null,null,[['Menu',`${usedPrefix}menu`]], m, { viewOnce: true})

}

handler.command = handler.help = ['sc']

handler.tags = ['info']

export default handler
