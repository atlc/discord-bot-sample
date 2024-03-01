import dotenv from "dotenv";
dotenv.config();

type ConfigObject = { [key: string]: string | undefined };

const discord = {
    token: process.env.TOKEN as string,
    clientId: process.env.CLIENT_ID as string,
    guildId: process.env.GUILD_ID as string,
    appId: process.env.APP_ID as string, // Optional
    privateKey: process.env.DISCORD_PK as string, // Optional
};

function hasUndefinedProperties(obj: ConfigObject) {
    return Object.values(obj).some((val) => typeof val === "undefined");
}

if (hasUndefinedProperties(discord)) {
    const asterisks = new Array(59).fill("*").join("");

    console.log(`\n\n${asterisks}`);
    console.log(`***\tMissing discord or other environment variables\t***`);
    console.log(`***\tVerify that your .env file and config match\t***`);
    console.log(`${asterisks}\n\n`);

    process.exit(1);
}

export default {
    discord,
};
