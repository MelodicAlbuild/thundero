const random = require("random-animal")

module.exports = (bot, db, config, winston, userDocument, serverDocument, channelDocument, memberDocument, msg) => {
    random.cat().then(url => {
        msg.channel.createMessage({
            embed: {
                author: {
                    name: bot.user.username,
                    icon_url: bot.user.avatarURL,
                    url: "https://echo-studios.co.uk"
                },
                color: 0x00FF00,
                image: {
                    url: url
                }
            }
        });
    });
};
