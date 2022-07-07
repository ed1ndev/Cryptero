const { Client, CommandInteraction } = require("discord.js");
const Crypter = require('../../Utils/crypter');

module.exports = {
    name: "decrypt",
    description: "Decrtypts data",
    options: [
        {
            name: 'key',
            type: 'STRING',
            description: 'Your encryption key',
            required: true
        },
        {
            name: 'text',
            type: 'STRING',
            description: 'The data you want to descrypt',
            required: true
        }
    ],
    /**
     *
     * @param {Client} client
     * @param {CommandInteraction} interaction
     * @param {String[]} args
     */
    run: async (client, interaction, args) => {
        const [ key, text ] = args;

        const crypter = new Crypter(String(key))
        const descryptedString = crypter.decrypt(String(text))

        interaction.followUp({ content: descryptedString });
    },
};
