const PhoneNumber = require('awesome-phonenumber')
async function handler(m) {
                let vcard = 'BEGIN:VCARD\n' // metadata of the contact card
                    + 'VERSION:3.0\n' 
                    + 'N:; Ikyiky;;;'
                    + 'FN: ikyiky\n' // full name
                    + 'ORG: ikyiky;\n' // the organization of the contact
                    + 'TEL;type=CELL;type=VOICE;waid=6285723302803:+62 857-2330-2803\n' // WhatsApp ID + phone number
                    + 'END:VCARD'
                conn.sendMessage(m.chat, { contacts: { displayName: 'ikyiky', contacts: [{ vcard }] } }, { quoted: m })
}
handler.help = ['owner', 'creator']
handler.tags = ['info']

handler.command = /^(owner|creator)$/i

module.exports = handler
