import fetch from 'node-fetch'
let handler = async (m, { conn }) => {
let pp = await conn.profilePictureUrl(m.chat).catch(_ => null)
let pepe = pp ? await (await fetch(pp)).buffer() : Buffer.alloc(0)
let str = ` ${conn.getName(m.sender)} Want Support Bot?
*PAYMENT β*
_*Pulsa/Pulse(Telkomsel):*_ 085171543481
_*Dana/Gopay:*_ 088901197103
Setelah melakukan donasi kirim bukti pembayaran ke owner,Dengan melakukan donasi,kamu telah mensupport bot ini agar on 24 jam dan fast respon
`
conn.sendHydrated(m.chat, str, wm, pepe, 'https://github.com/Rizalxtc/', 'πΆπΈππ·ππ±', null, null, [
['πΌπ΄π½π', '/menu']
], m, { viewOnce: true })

}
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

export default handler
