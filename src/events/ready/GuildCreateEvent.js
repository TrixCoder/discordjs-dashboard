const GuildConfig = require('../../database/schemas/GuildConfig');
const BaseEvent = require('../../utils/structures/BaseEvent');

module.exports = class GuildCreateEvent extends BaseEvent {
    constructor() {
        super('guildCreate');
    }
    async run(client, guild) {
        try {
            const guildConfig = await GuildConfig.create({
                guildId: guild.id
            });
            console.log(`Bot has joined ${guild.id}. Database for guild is created`)
        } catch (err) {
            console.log(err);
        }
    }
}