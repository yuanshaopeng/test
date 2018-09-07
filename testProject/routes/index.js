var express = require('express');
var router = express.Router();
var fs = require("fs");

/* GET home page. */
router.get('/equipment', function(req, res, next) {
//res.render('index', { title: 'Express' });
	var result = {};
	result.error = false;
	result.status = "100000";
	result.msg = "成功";
	result.extra = "";
	result.code = "3131";
	fs.readFile('./routes/data/personnelInfomation.json', function(err, data){
		console.log(data)
		if (!err){
			result.data = JSON.parse(data.toString());
			console.log("数据获取成功" + result);
			res.send(JSON.stringify(result));
		}else{
			console.log(err);
			console.log("读取数据文件失败")
			res.end(JSON.stringify(result));
		}
	});
});
module.exports = router;
