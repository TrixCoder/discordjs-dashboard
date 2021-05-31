const fetch = require('node-fetch');
const TOKEN = process.env.DASHBOARD_BOT_TOKEN;

async function getBotGuilds(){
    const response = await fetch('http://discord.com/api/v6/users/@me/guilds', {
        method: 'GET',
        headers: {
            Authorization: `Bot ${TOKEN}`
        }
    })
    return response.json();
}

module.exports = {getBotGuilds};