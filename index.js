

//express
var express = require('express')
var app = express()

//body-parser
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


/*************   Kodlar  *********** */

//get işlemi
// http://localhost:3001/
app.get('/', function (req, res) {
    res.send('Sabit - Express Get Yapıldı Anasayfa');
    console.log('Get Yapıldı - Anasayfa');
})


//get Params
//http://localhost:3001/api/users?id=4&token=sdfa3&geo=us
app.get('/api/users', function (req, res) {
    
    const user_id = req.query.id;
    const token = req.query.token;
    const geo = req.query.geo;
  
    res.send({
      'user_id': user_id,
      'token': token,
      'geo': geo
    });

    

  });

//get - işlemler
// http://localhost:3001/users/34/books/8989
app.get('/users/:userId/books/:bookId', function (req, res) {

    //res.send(req.params.userId)

    res.send(req.params)
 })



//post
// http://localhost:3001/
app.post('/', function (req, res) {
       
    //res.send(req.body.name);

    res.send(req.body);
    console.log(req.body);
    
})
  

//get Params
//http://localhost:3001/api/users?id=4&token=sdfa3&geo=us
app.put('/', function (req, res) {
    res.send('Put Yapıldı')
})



//Route
//birçok işlemi içinde barıntıyor
// http://localhost:3001/user
app.route('/user')
  .get(function (req, res) {
    res.send('user - get işlemi')
  })
  .post(function (req, res) {
    res.send('user post işlemi')
  })
  .put(function (req, res) {
    res.send('user - put işlemi')
  })
  

  //İndirme
  //güncelleme 
  app.get('/file/dowload', function (req, res) {
      res.download('public/deneme.txt');
  })

 

 //server dinliyor......
app.listen(3001, function () {
    console.log("Port Dinliyor ."+3001); 
})


/*

res.download()	Bir dosyanın indirilmesini iste.
res.end()	Yanıt sürecini sonlandır.
res.json()	JSON yanıtı gönder.
res.jsonp()	JSONP destekli bir JSON yanıtı gönder
res.redirect()	Bir isteği yeniden yönlendir.
res.render()	Bir görünüm şablonu görüntüle.
res.send()	Çeşitli tiplerde yanıt gönder.
res.sendFile()	Dosyayı sekizli akış olarak gönder.
res.sendStatus()	Yanıt durum kodunu ayarla ve karakter dize temsilini yanıt gövdesi olarak gönder.

*/
