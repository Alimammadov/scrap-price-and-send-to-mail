const cheerio = require('cheerio');
const request = require('request');
const nodemailer = require("nodemailer");

request({
    method: 'GET',
    url: 'https://allegro.pl/oferta/snk-autoryzacja-mvsx-arcade-50-klasycznych-gier-10642604213?bi_c=StrefaOkazji_Karuzela&bi_m=mpage&'
}, (err, res, body) => {
    if (err) return console.error(err);
    let $ = cheerio.load(body);
    let title = $('._9a071_1tOgC').text();
    let clearPrice = title.replace(/\s/g, '')
    console.log(clearPrice)
    main(clearPrice)

});


async function main(price) {
  let transporter = nodemailer.createTransport({
    host: "mail.xxx.com", //host name
    port: 465,
    secure: true, 
    auth: {
      user: 'test@xxx.com', 
      pass: 'yourpassword', 
    },
    //If you are trying to send mail on your localhost
    tls:{
        rejectUnauthorized:false
    }
  });

  let info = await transporter.sendMail({
    from: '"Ali Mammadov" <test@xxx.com>', 
    to: "yyy@gmail.com", 
    subject: "Price of product" + price, 
    text: "desc", 
    html: "<b></b>", 
  });
}
