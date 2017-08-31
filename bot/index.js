var botgram=require('botgram');
var bot=botgram('431527109:AAECtqEPZnrglz1VKYJubAuLBzdKcIQmqq8');



var fucks=['him','her','this','you','me','it','everything','class','the school','UMZ','Oracle','gradle','xCode','expo','callback','emulator','the hindi guy who creates tutorial','google speech api','developer.android','sqlite']

bot.command('start',function(msg,reply,next){
    function sendFuck(){
        var index= Math.floor((Math.random() * (fucks.length-1)) + 0);
        var thisFuck=fucks[index];
        reply.text('Fuck '+thisFuck);
    }
    // setInterval(sendFuck, 3000);
    
    setInterval(sendFuck, Math.floor((Math.random() * 18000000) + 5000));
})