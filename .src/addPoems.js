const fs=require("fs");
const express=require("express")
const path=require("path")
const bodyParser=require("body-parser")
const cors=require("cors")
const app=express()
const port=3000
app.use(cors({
    origin: '*'
}))
app.use(bodyParser.json())
const poemPath=path.join(__dirname,'poems.json')
app.get('/poems', (req, res) => {
    fs.readFile(poemPath, 'utf8', (err, data) => {
        if (err) console.log(err);
        const poems = JSON.parse(data);
        res.json(poems);
    });
});
app.post('/poems', (req, res) => {
    const {author,title,dynasty,content,ci_pai,translation}=req.body;
    if(!author || !title || !content || !dynasty || !translation ){
        return res.status(400).json({message:"请完善诗词信息"});
    }
    fs.readFile(poemPath,'utf8', (err, data) => {
        if (err) {
            return res.status(500).json({message:'读取失败'});
        }
        const poemsArray=JSON.parse(data);
        const newPoem={
            author,
            title,
            dynasty,
            content,
            ci_pai,
            translation
        }
        poemsArray.push(newPoem);
        fs.writeFile(poemPath,JSON.stringify(poemsArray,null,2),'utf-8',(err)=>{
            if(err){
                return res.status(500).json({message:'保存诗词失败'})
            }
            res.status(200).json({message:"诗词上传成功",poem:newPoem});
        })
    })
    })

app.listen(port, ()=>{
    console.log(`Server started on port ${port}`)
})