import os

import discord
from discord.ext import commands
import random
from dotenv import load_dotenv


load_dotenv()
TOKEN = os.getenv('DISCORD_TOKEN')
GUILD = os.getenv('DISCORD_GUILD')

bot = commands.Bot(command_prefix='!',intents=discord.Intents.default())
# client = discord.Client(intents=discord.Intents.default())

# Message on Join
@bot.event
async def on_ready():   
    print(f'{bot.user.name} is connected to the Discord!')
    
    
# send message on !pom command
@bot.event
async def on_message(message):
    if message.author == bot.user:
        return
    
    time = 0    
    pomodoro_message = f'You have coded {time} minutes today'

    if message.content == '!pom':
        await message.channel.send(pomodoro_message)
        
    

# Message on Member Join Voice Chat
@bot.event
async def on_voice_state_update(member, before, after):
    
    # if in voice a channel
    if before.channel and not after.channel:
        channel = bot.get_channel()
    # And !pom command is used (not even sure how to set commands should probably be another function called in here)
    
    # send message to channel    
    await channel.message.send(f"{message.author.mention} is now level {self.users[author_id]['level']}! congrats!")



bot.run(TOKEN)
