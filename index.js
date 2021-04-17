const { Client, Message, MessageEmbed, MessageMentions, MessageAttachment,} = require('discord.js');
const bot = new Client();

bot.once('ready', () => {
    console.log("Je ready");
});

const prefix = '_';
//const addonschannel = bot.channels.cache.find(channel => channel.id === '827567278613725194');

bot.on('message', async message => {
//NASTAVENÍ
    bot.user.setActivity('_help', { type: 'LISTENING' });
//REACTION ON BAD WORD
    bad = ['píčo','pičo','pico','píči','piči','piča', 'kokot','kokote','píča','debil','debile','fuck','fuk','f*ck','pí*a','pi*a','kretén','kreten','kretene','pičus','pixi','mrdka','kunda','kurva','čůrák','čurak','curak','curaku','čůráku'];
    if (bad.indexOf(message.content) >= 0) {
        message.react('🤬');
        message.react('827604658729517076');
    }
//Addons Reaction
    if(message.channel.id==='823099971226173470'||message.channel.id==='800742696322596865'||message.channel.id==='802353958936903720'){
        if(message.channel.type){
            message.react('800824737910620160');
            message.react('800825887464488961');
        }
    }
//PREFIX
    if(!message.content.startsWith(prefix) || message.author.bot) return;
    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();
//IP
    if(command === 'ip'){
        message.channel.send(`<@${message.author.id}> Veškeré potřebné IP adresy najdeš v místnosti ${bot.channels.cache.find(channel => channel.id === '827567278613725194')}`);
    }
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
//ALKOHOL    
    if (command=== 'alkohol'){
        j=Math.floor(Math.random() * 400) + (0);
        j/=100;
        if(j<=1){
        const Em = new MessageEmbed()
            .addFields(
                {name: 'Je v pohodě..' ,value: `nemusíte o <@${message.author.id}> mít strach.. má jen ${j}‰..` },)
            .setColor(0xFF8B00)
            .setThumbnail('https://www.kudyznudy.cz/files/95/95b78b24-b3aa-4bb2-bfda-8b746a03ecaa.jpg?v=20200827022055')
            message.channel.send(Em);
        }else if(j<=2){
            const Em = new MessageEmbed()
            .addFields(
                {name: 'Začíná to být zajímavé..' ,value: `<@${message.author.id}> už to začíná dosti pociťovat.. má ${j}‰..` },)
            .setColor(0x4F1900)
            .setThumbnail('https://www.zboziaprodej.cz/wp-content/uploads/2020/03/bozkov_packshot.jpg')
            message.channel.send(Em);
        }else if(j<=3){
            const Em = new MessageEmbed()
            .addFields(
                {name: 'Už je to zlé..' ,value: `<@${message.author.id}> už má dost.. má ${j}‰..` },)
            .setColor(0xEDBB99)
            .setThumbnail('https://manboxeo.cz/media/thumbs/product-full/product-photos/16198.55623.jpg')
            message.channel.send(Em);
        }else if(j<=4){
            const Em = new MessageEmbed()
            .addFields(
                {name: 'Je konec..' ,value: `<@${message.author.id}> už se nevrátí mezi nás :( skončil na ${j}‰..` },)
            .setColor(0x000000)
            .setThumbnail('https://www.global-wines.cz/data/images/w900h1320/7/5077.png')
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
            {name: `_ip`, value: 'Ukáže ti, kde najít veškeré IP adresy.' },
            {name: `_alkohol`, value: 'Zjisti, kolik by jsi nadýchal před policajty ;)' },
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
