const { Events } = require("discord.js");

module.exports = {
  name: Events.MessageUpdate,
  execute(oldMessage, _) {
    console.log(
      `Message updated in ${oldMessage.channel} channel by ${oldMessage.author}`
    );
  },
};
