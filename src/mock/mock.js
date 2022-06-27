let Mock = require("mockjs");
let data = Mock.mock({
    "data|6":[
        {
            "age|25-30": 30,
            "name":'@cname',
            "color":"@rgb",
            "address|2":{
                "310000": "上海市",
                "320000": "江苏省",
                "330000": "浙江省",
                "340000": "安徽省"
            } 
        }
    ]
})
Mock.mock("/api/con","get",(config)=>{
    return data
})