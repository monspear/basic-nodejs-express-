const express = require('express')
const app = express()
const path = require('path')

app.listen(8080,function(){
    console.log('listening on 8080')
})
app.get('/', (req, res) => {
    res.json({
        success: true,
        문자열: "성공하였습니다.",
        정수형숫자: 1,
        실수형숫자: 1.0,
        캐릭터형태: 's',
    });
});