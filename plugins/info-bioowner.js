let handler = async (m, { conn }) => {
let ppown = await conn.profilePictureUrl(nomorown + '@s.whatsapp.net', 'image').catch(_ => hwaifu[1]) 
let teksbio = `*───────[ BIODATA OWNER ]───────*
*💌 Nama* : Sad-Bot
*✉️ Dibuat Oleh* : RizalModz Dan Papa Chan
*♂️ Gender* : Laki - laki
*🕋 Agama* : Islam
*⏰ Tanggal lahir* : 10 Juni 2007
*🎨 Umur* : 15
*🧮 Kelas* : 10
*🧩 Hobby* : Nonton Anime, Chatting, Recode script bot
*💬 Sifat* : Pedo,Baik,Ramah
*🗺️ Tinggal* : Indramayu Jawa Barat
*❤️ Suka* : kuning & biru, Hanime, waifu, loli, trap, furry, neko
*💔 Benci* : autis, anak epep, seleb
*───────[ SOSIAL MEDIA ]───────*
*📷 instagran* : @mhdarull_gz
*🇫  Facebook* : Rizal Disini
*🏮 Chanel Youtube* : RIZAL MODS
*🐈 Github:* Rizalxtc
`
conn.sendHydrated(m.chat, teksbio, wm, ppown, "wa.me/" + nomorown, "💬 ᴄʜᴀᴛs", null,null, [["ᴅᴏɴᴀsɪ", '.donasi'], [null, null],[null,null]], m, { viewOnce: m })
}
handler.help = ['bioowner']
handler.tags = ['info']
handler.command = /^(bioowner)$/i

export default handler
