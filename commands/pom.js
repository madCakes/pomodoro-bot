const { SlashCommandBuilder } = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("pom")
    .setDescription(
      "Provides time spent voice (TODO: time in minutes/hours, time in pomodoro segments (30 min))"
    ),
  async execute(interaction) {
    await interaction.reply(
      `This command was run by ${interaction.user.username}, who joined on ${interaction.member.voiceState}.`
    );
  },
};
