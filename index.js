const tmi = require('tmi.js');
const mysql = require('mysql');

const client = new tmi.Client({
  options: { debug: true },
  connection: {
    secure: true,
    reconnect: true
  },
  identity: {
    username: 'papajbottwitch',
    password: 'g5cm9rn9yl8zuh5mq54bnez7g87zuv'
  },
  channels: ['Tokszyq','llatacko']
});

client.connect();

const odpowiedzi = [
    "Tak",
    "Nie",
    "Może",
    "Eh, dzban",
    "Możliwe",
    "Te pytanie jest takiej wagi jak dostaniem kotletem w twarz, faza",
    "Oby Ci wąż chu** ukąsił",
    "No Ba!",
    "Mejbi tak",
    "Wygląda na to, że tak",
    "Baranek w ścianę polecany dzbanie",
    "Warto spróbować",
    "Masakra, weź baranka w ścianę zrób, bo dzbanisz totalnie",
    "Nope",
    "Walnij głową w ściane",
    "Możesz być w końcu cicho!",
    "Nie odpowiem, bo mogę",
    "Nie odpowiem, bo kremówke jem",
    "daj mi kremówke to odpowiem",
    "kremówka!",
    "Walki mrówek są bardziej interesujące od ciebie"
];

const odpowiedzi2 = [
    "Tak",
    "Nie"
];

var conn = mysql.createConnection({
    host:"lekserwis.pl",
    user:"31999898_walki",
    password:"Calomrodine2016!",
    database:"31999898_walki",
})

conn.connect(function(err){
  if(err) throw err;
  console.log("Poloncylem sie z bazom danych!")
})

const bronie = [
    "miecza",
    "krucyfiksa",
    "ziemi",
    "kamieńi",
    "glutów",
    "pięści",
    "firebolla"
]

const mocataku = [
    "rzuca"
]

client.on('message', (channel, tags, message, self) => {
  // Ignore echoed messages.
  if(self) {
    return;
  }

  if(message.toLowerCase() === ':tf:') {
    client.say(channel, `:tf:`);
  }
  if(message.toLowerCase() === 'bearpolice') {   
    client.say(channel, `BearPolice `); 
  }
  if(message.toLowerCase() === 'kto tam?') {   
    client.say(channel, `Witam chce pan kremówke od papaja?`); 
  }
  if(message.toLowerCase() === 'gdzie jest papaj?') {   
    client.say(channel, `u ciebie w domu @${tags.username} pepeLaugh `); 
  }
  if(message.toLowerCase() === '2137') {   
    client.say(channel, `kekeW kekeW kekeW kekeW kekeW`); 
  }
  if(message.toLowerCase() === 'tokszyq jest dzbanem') {   
    client.say(channel, `potwierdzam pepeLaugh `); 
  }
  if(message.toLowerCase() === 'tokszyq jestś okrutny') {   
    client.say(channel, `@Tokszyq porwierdzam pepeLaugh `); 
  }

  if(!message.startsWith('#')) {
    return;
  }

  const args = message.slice(1).split(' ');
  const command = args.shift().toLowerCase();

  if(command === 'kremowka') {
    client.say(channel, `@${tags.username}, o to twoja kremówka!`);
  } else if(command === 'proc') {
    const random = Math.floor((Math.random() * 100) + 1);
    client.say(channel, `@${tags.username}, w ` + random + `%`);
  } else if(command === 'try') {
    const random = Math.floor(Math.random() * odpowiedzi.length);
    client.say(channel, `@${tags.username}, ` + odpowiedzi[random]);
  } else if(command === 'q') {
    const random = Math.floor(Math.random() * odpowiedzi2.length);
    client.say(channel, `@${tags.username}, ` + [odpowiedzi2[random]]);
  } else if(command === 'b') {
    if(args[0] == null){
        client.say(channel, `@${tags.username}, nie wybrałeś przeciwnika!`);
        return;
    }else{
        const random = Math.floor(Math.random() * bronie.length);
        const silaataku = Math.floor((Math.random() * 100) + 1);
        const ktoPierwszy = Math.floor(Math.random() * 2);

        const Wyzywa = tags.username;
        var WyzywaHp = 100

        const WyzwanyPzed = args[0];
        const Wyzwany = WyzwanyPzed.slice(1);
        var WyzwanyHp = 100;

        if(ktoPierwszy == '0'){
            client.say(channel, `Z lewej strony @${Wyzywa}, zaś z prawej ${args[0]}, Dwójka amatorów zmierzy się na arenie, widać że czekali na tą walkę od dawna, chociaż można zauważyć, że nic nie wiedzą o prawdziwym mordobiciu, to chcą sie bić mimowszystko. Zaczęło się! @${tags.username} używa ${bronie[random]}, Przeciwnik stracił ${silaataku}% HP.`);
            WyzwanyHp - silaataku;
            if(WyzwanyHp > 0){
                const silaataku1 = Math.floor((Math.random() * 100) + 1);
                client.say(channel, `Na stępnie atakuje @${Wyzwany} i zabiera ${silaataku1}% życia @${Wyzywa}!`);
                WyzywaHp = WyzywaHp - silaataku1;
                if(WyzywaHp > 0){
                    const silaataku2 = Math.floor((Math.random() * 100) + 1);
                    client.say(channel, `Najwidoczniej @${Wyzywa} zamierza sę zamścić i uderza @${Wyzwany} i atakuje go za ${silaataku2}%!`);
                    WyzwanyHp = WyzwanyHp - silaataku2;
                    if(WyzwanyHp > 0){
                        const silaataku3 = Math.floor((Math.random() * 100) + 1);
                        client.say(channel, `@${Wyzwany} się jeszcze nie poddaje i atakuje @${Wyzywa} za ${silaataku3}%!`);
                        WyzywaHp = WyzywaHp - silaataku3;
                        if(WyzwanyHp > WyzywaHp){
                            client.say(channel, `@${Wyzywa} się poddaje, nie ma już siły walczyć!`);
                            zapiszwygrana(Wyzwany);
                            zapiszprzegrana(Wyzywa);
                            client.say(channel, `@${Wyzwany}, dostaje +1 walkach, a @${Wyzywa} -1 punkt`);
                        } else if(WyzywaHp > WyzwanyHp){
                            client.say(channel, `@${Wyzwany} się poddaje, nie ma już siły walczyć!`);
                            zapiszwygrana(Wyzywa);
                            zapiszprzegrana(Wyzwany);
                            client.say(channel, `@${Wyzywa}, dostaje +1 walkach, a @${Wyzwany} -1 punkt`);
                        }
                    }else{
                        client.say(channel, `@${Wyzywa} zostaje zabity przez @${Wyzwany} za trzecim ciosem!`);
                        zapiszwygrana(Wyzwany);
                        zapiszprzegrana(Wyzywa);
                        client.say(channel, `@${Wyzwany}, dostaje +1 walkach, a @${Wyzywa} -1 punkt`);
                    }
                }else{
                    client.say(channel, `@${Wyzwany} zostaje zabity przez @${Wyzywa} za drugim ciosem!`);
                    zapiszwygrana(Wyzywa);
                    zapiszprzegrana(Wyzwany);
                    client.say(channel, `@${Wyzywa}, dostaje +1 walkach, a @${Wyzwany} -1 punkt`);
                }
            } else {
                client.say(channel, `@${Wyzywa} zostaje zabity przez @${Wyzwany} za pierwszym ciosem!`);
                zapiszwygrana(Wyzwany);
                zapiszprzegrana(Wyzywa);
                client.say(channel, `@${Wyzwany}, dostaje +1 walkach, a @${Wyzywa} -1 punkt`);
            }
        }else{
            client.say(channel, `Z lewej strony @${Wyzywa}, zaś z prawej ${args[0]}, Dwójka amatorów zmierzy się na arenie, widać że czekali na tą walkę od dawna, chociaż można zauważyć, że nic nie wiedzą o prawdziwym mordobiciu, to chcą sie bić mimowszystko. Zaczęło się! ${args[0]} używa ${bronie[random]}, Przeciwnik stracił ${silaataku}% HP.`);
            WyzywaHp = WyzywaHp - silaataku;
            if(WyzywaHp > 0){
                const silaataku1 = Math.floor((Math.random() * 100) + 1);
                client.say(channel, `Na stępnie atakuje @${Wyzywa} i zabiera ${silaataku1}% życia ${Wyzwany}!`);
                WyzwanyHp = WyzwanyHp - silaataku1;
                if(WyzwanyHp > 0){
                    const silaataku2 = Math.floor((Math.random() * 100) + 1);
                    client.say(channel, `Najwidoczniej @${Wyzwany} zamierza sę zamścić i uderza @${Wyzywa} i atakuje go za ${silaataku2}%!`);
                    WyzywaHp = WyzywaHp - silaataku2;
                    if(WyzywaHp > 0){
                        const silaataku3 = Math.floor((Math.random() * 100) + 1);
                        client.say(channel, `@${Wyzywa} się jeszcze nie poddaje i atakuje @${Wyzwany} za ${silaataku3}%!`);
                        WyzwanyHp = WyzwanyHp - silaataku3;
                        if(WyzwanyHp > WyzywaHp){
                            client.say(channel, `@${Wyzywa} się poddaje, nie ma już siły walczyć!`);
                            zapiszwygrana(Wyzwany);
                            zapiszprzegrana(Wyzywa);
                            client.say(channel, `@${Wyzwany}, dostaje +1 walkach, a @${Wyzywa} -1 punkt`);
                        } else if(WyzywaHp > WyzwanyHp){
                            client.say(channel, `@${Wyzwany} się poddaje, nie ma już siły walczyć!`);
                            zapiszwygrana(Wyzywa);
                            zapiszprzegrana(Wyzwany);
                            client.say(channel, `@${Wyzywa}, dostaje +1 walkach, a @${Wyzwany} -1 punkt`);
                        }
                    }else{
                        client.say(channel, `@${Wyzywa} zostaje zabity przez @${Wyzwany} za trzecim ciosem!`);
                        zapiszwygrana(Wyzwany);
                        zapiszprzegrana(Wyzywa);
                        client.say(channel, `@${Wyzwany}, dostaje +1 walkach, a @${Wyzywa} -1 punkt`);
                    }
                }else{
                    client.say(channel, `@${Wyzwany} zostaje zabity przez @${Wyzywa} za drugim ciosem!`);
                    zapiszwygrana(Wyzywa);
                    zapiszprzegrana(Wyzwany);
                    client.say(channel, `@${Wyzywa}, dostaje +1 walkach, a @${Wyzwany} -1 punkt`);
                }
            } else {
                client.say(channel, `@${Wyzwany} zostaje zabity przez @${Wyzywa} za pierwszym ciosem!`);
                zapiszwygrana(Wyzwany);
                zapiszprzegrana(Wyzywa);
                client.say(channel, `@${Wyzwany}, dostaje +1 walkach, a @${Wyzywa} -1 punkt`);
            }
        }
    }
  } else if(command === 'top10') {
    conn.query('SELECT * FROM users ORDER BY wins DESC', function(err, result){
        if (err) throw err;
        var Top = [];
        if(result.length < 10){
            for (let index = 0; index < result.length; index++) {
                var unpackresult = JSON.stringify(result[index]);
                var obj = JSON.parse(unpackresult);
                Top.push(' '+ obj.nick + ': ' + obj.wins);
            }
            
            client.say(channel, `Top 10 w walkach: ${Top}`);
        } else {
            for (let index = 0; index < 10; index++) {
                var unpackresult = JSON.stringify(result[index]);
                var obj = JSON.parse(unpackresult);
                client.say(channel, `@${obj.nick}, ${obj.wins}`);
            }
        }
    });
  } else if(command === 'ciastko') {
    client.say(channel, `@${tags.username}, prosze o to twoje ciastko + kremówka <3`);
  } else if(command === 'przyslosc') {
    client.say(channel, `W 2025 w ziemie walnie meteoryt który ma 26 metrów!`);
  } else if(command === 'help') {
    client.say(channel, `Dostępne komendy to: #kremowka, #ciastko, #proc, #try, #q, #b`);
  }
});

function zapiszwygrana(zwyciensca){
    conn.query("SELECT * FROM users WHERE nick = '" + zwyciensca + "'", function(err, result){
        if (err) throw err;
        //client.say(channel, `${result.length}`);                                    
        if(result.length > 0){    
            //client.say(channel, `@${Wyzywa}, dostaje +1 walkach, a ${Wyzwany} -1 punkt`);                                    
            var unpackresult = JSON.stringify(result[0]);
            var obj = JSON.parse(unpackresult);
            var liczbawalkw = 0;     
            liczbawalkw = obj.wins + 1;
            conn.query("UPDATE users SET wins ='" + liczbawalkw + "' WHERE nick = '" + zwyciensca +"'", function(err, result){
                //client.say(channel, `@${zwyciensca}, dostaje +1 walkach, a ${przegrany} -1 punkt`);
            })
        } else {
            conn.query("INSERT INTO users (nick, wins) VALUES ('" + zwyciensca + "', '1')", function(err, result){
                //client.say(channel, `${zwyciensca}, dostaje +1 walkach, a ${przegrany} -1 punkt`);
            })
        }
    });
}

function zapiszprzegrana(przegrany){
    conn.query("SELECT * FROM users WHERE nick = '" + przegrany + "'", function(err, result){
        if (err) throw err;
        //client.say(channel, `${result.length}`);                                    
        if(result.length > 0){    
            //client.say(channel, `@${Wyzywa}, dostaje +1 walkach, a ${Wyzwany} -1 punkt`);                                    
            var unpackresult = JSON.stringify(result[0]);
            var obj = JSON.parse(unpackresult);
            var liczbawalkw = 0;     
            liczbawalkw = obj.wins - 1;
            console.log(liczbawalkw);
            console.log(przegrany);
            conn.query("UPDATE users SET wins ='" + liczbawalkw + "' WHERE nick = '" + przegrany +"'", function(err, result){
                //client.say(channel, `${zwyciensca}, dostaje +1 walkach, a ${przegrany} -1 punkt`);
            })
        } else {
            conn.query("INSERT INTO users (nick, wins) VALUES ('" + przegrany + "', '-1')", function(err, result){

            })
        }
    });
}