const { Client, Message, MessageEmbed, MessageMentions, MessageAttachment,} = require('discord.js');
const bot = new Client();

bot.once('ready', () => {
    console.log("Je ready");
});

const prefix = '_';
const addonschannel = bot.channels.cache.find(channel => channel.id === '823099971226173470');

bot.on('message', async message => {
//NASTAVENÍ
    bot.user.setActivity('_help', { type: 'LISTENING' });
//REACTION ON BAD WORD
    bad = ['píčo','pičo','pico','píči','piča', 'kokot','kokote','píča','debil','debile','fuck','fuk','f*ck','pí*a','pi*a','kretén','kreten','kretene','pičus','pixi','mrdka','kunda','kurva','čůrák','čurak','curak','curaku','čůráku'];
    if (bad.indexOf(message.content) >= 0) {
        message.react('🤬');
        message.react('827604658729517076');
    }
//Addons Reaction
    if(message.channel(addonschannel).content.send){
        message.channel.send('Ahoj');
    }
//PREFIX
    if(!message.content.startsWith(prefix) || message.author.bot) return;
    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();
//PING    
    if(command==='ping'){
        message.channel.send('pong!');
    }
//PENIS    
    if (command=== 'penis'){
        j=Math.floor(Math.random() * 29) + (4);
        if(j<=8){
        const Em = new MessageEmbed()
            .addFields(
                {name: 'Si peniiiis' ,value: `<@${message.author.id}> má moc malý penis.. tzv. mikropenis..` },)
            .setColor(0xCF3C1D)
            .setThumbnail('https://www.darkyvbrne.cz/fotky64316/fotos/_vyr_1555_penis.jpg')
            message.channel.send(Em);
        }else if(j<=24){
            const Em = new MessageEmbed()
            .addFields(
                {name: 'Si peniiiis' ,value: `<@${message.author.id}> penis má ${j} cm..` },)
            .setColor(0xCF3C1D)
            .setThumbnail('https://www.darkyvbrne.cz/fotky64316/fotos/_vyr_1555_penis.jpg')
            message.channel.send(Em);
        }else if(j<=28){
            const Em = new MessageEmbed()
            .addFields(
                {name: 'Si peniiiis' ,value: `<@${message.author.id}> je zkurvený negr a má ${j} cm..` },)
            .setColor(0xCF3C1D)
            .setThumbnail('https://www.darkyvbrne.cz/fotky64316/fotos/_vyr_1555_penis.jpg')
            message.channel.send(Em);
        }
    }
//HELP
    if (command=== 'help'){
        const Em = new MessageEmbed()
        .setTitle(`Příkazy k CA-RP botovi`)
        .addFields(
            {name: `_kostka`, value: `Minihra` },
            {name: `_penis`, value: 'Změř si svého macka ;)' },
        )
        .setColor(0xCF3C1D)
        .attachFiles(['carp-logo.png'])
        .setThumbnail('attachment://carp-logo.png');
        message.channel.send(Em);
    }
//KOSTKA
    if (command=== 'kostka'){
    bott =Math.floor(Math.random() * 6) + (1);
    ja=Math.floor(Math.random() * 6) + (1);
    if(ja>bott){
        const Em = new MessageEmbed()
        .addFields(
            {name: 'Vyhrál jsi!' ,value: `<@${message.author.id}> Hodil ${ja}.. a CA-RP pouze ${bott}` },)
        .setColor(0xFFB600)
        message.channel.send(Em);
        }else if(ja<bott){
        const Em = new MessageEmbed()
        .addFields(
            {name: 'Prohrál jsi!' ,value: `<@${message.author.id}> Hodil pouze ${ja}.. a CA-RP ${bott}` },)
        .setColor(0xFF0000)
        message.channel.send(Em);
        }else{
        const Em = new MessageEmbed()
        .addFields(
            {name: 'Vítězové jste oba!' ,value: `<@${message.author.id}> Hodil ${ja}.. a CA-RP též ${bott}` },)
        .setColor(0xFF00EC)
             
        message.channel.send(Em);
        }
    }
//AKTIVITA
    if (message.content.toLocaleLowerCase().includes ('gogo')) {
        const Em = new MessageEmbed()
        .setTitle(`Neotravuj..`)
        .addFields(
            {name: `Gogoušek`, value: `Je zaneprázdněn.. a nebo spí ;)` },
        )
        .setColor(0x0027FF)
        .attachFiles(['gogo.png'])
        .setThumbnail('attachment://gogo.png');
        message.channel.send(Em);
    }   
    if (message.content.toLocaleLowerCase().includes ('arnold')) {
        const Em = new MessageEmbed()
        .setTitle(`Neotravuj..`)
        .addFields(
            {name: `Arnoldko`, value: `Je neustále offline.. a nepomůže ti ;)` },
        )
        .setColor(0x000000)
        .attachFiles(['arnold.png'])
        .setThumbnail('attachment://arnold.png');
        message.channel.send(Em);
    }
/*  if (message.content.toLocaleLowerCase().includes (`<@${message.member.id('267413057595113473')}>`)) {
        const Em = new MessageEmbed()
        .setTitle(`Neotravuj..`)
        .addFields(
            {name: `Tedík`, value: `Neotravuj má dost práce.. CSGO je hard hra ;)` },
        )
        .setColor(0x000000)
        .attachFiles(['ted.png'])
        .setThumbnail('attachment://ted.png');
        message.channel.send(Em);
    }*/
    if (message.content.toLocaleLowerCase().includes ('grogy')) {
        const Em = new MessageEmbed()
        .setTitle(`Neotravuj..`)
        .addFields(
            {name: `Grogouš`, value: `Upravuje ti server.. tak ho nezdržuj..` },
        )
        .setColor(0xFFCD00)
        .attachFiles(['grogy.png'])
        .setThumbnail('attachment://grogy.png');
        message.channel.send(Em);
    }
    if (message.content.toLocaleLowerCase().includes ('master')||message.content.toLocaleLowerCase().includes ('mastre')||message.content.toLocaleLowerCase().includes ('mastr')) {
        const Em = new MessageEmbed()
        .setTitle(`Neotravuj..`)
        .addFields(
            {name: `Masterko`, value: `Neotravuj zbytečně.. zrovna prozkoumává temnou stranu světa..` },
        )
        .setColor(0x000000)
        .attachFiles(['master.png'])
        .setThumbnail('attachment://master.png');
        message.channel.send(Em);
    }
//RIP
    if (command==='rip') {
        const attachment = new MessageAttachment('https://i.imgur.com/w3duR07.png');
        message.channel.send(attachment);
    }
//SPAM 
    //if(message.channel.type){
    //if(Message.content.send){
      //  message.channel.send(`<@${message.member.id===339882189623918613}> Jsi gay, nejsi?`);
        //message.channel.send(`<@${message.author.id}> Jsi gay, nejsi?`);
        //message.reply(message.author.displayAvatarURL());
    //}
}); 
bot.login(process.env.token);
