import { SlashCommandBuilder, CommandInteraction } from "discord.js";

export default {
    data: new SlashCommandBuilder().setName("films").setDescription("Gets a random film title & description"),
    async execute(interaction: CommandInteraction) {
        fetch("https://api-ghibli.herokuapp.com/films")
            .then((res) => res.json())
            .then(async (data) => {
                const film = data[Math.floor(Math.random() * data.length)];

                await interaction.reply(`**${film.title}** - _${film.description.substring(0, 100)}..._`);
            });
    },
};
