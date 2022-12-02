// requirements
const axios = require('axios');
const cheerio = require('cheerio');
const express = require('express');
const cors = require('cors');


url = "https://www.theguardian.com/uk";

// call express 
const app = express();
app.use(cors());
// rest api 
//app.METHOD(PATH,HANDLER);// handler is a callback method that get executed when we visit the PATH
app.get('/',(req,res)=>{
    res.json("this is fadel ellah ERRAMI");
}); // get data
app.get('/results',(req,res)=>{
    axios(url)
        .then(response =>{
            const html = response.data;
            const articles= [];
            const $ = cheerio.load(html);
            $(".fc-item__title",html).each(function(){
                const title = $(this).text();
                const url = $(this).find("a").attr("href");
                articles.push({
                    title,
                    url
                });
            });
            res.json(articles);
        }).catch((err)=>{console.log(err)});
}); // get data
// app.post(); // add data
// app.put(); // edit data
// app.delete(); // dalete data

// using axios








// srever is listenening on PORT
const PORT = process.env.PORT || 2493;
app.listen(PORT,()=>console.log(`server id listening on port ${PORT}`));