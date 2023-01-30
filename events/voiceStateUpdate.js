const { Events } = require("discord.js");

module.exports = {
  name: Events.VoiceStateUpdate,
  execute(oldState, newState) {
    // update on channel leave
    if (newState.channel.id === null)
      console.log("user left channel", oldState.channelID);
    // update on channel join
    else if (oldState.channel.id === null)
      console.log("user joined channel", newState.channelID);
    // update on channel change
    else
      console.log(
        "user moved channels",
        oldState.channel.id,
        newState.channel.id
      );
  },
};
