const { SlashCommandBuilder } = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("start")
    .setDescription("Gives user start time of session"),
  async execute(interaction) {
    // get date time

    await interaction.reply(
      `This command was run by ${interaction.user.username}, at ${this.time}.`
    );
  },
  time: new Date().now(),
};
