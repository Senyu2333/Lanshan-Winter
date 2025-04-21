const fs=require("fs");
fs.readFile('poems.json','utf8',function(err,data){
    console.log(data);
})