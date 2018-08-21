const express = require('express');
const indexRoutes = express.Router();


indexRoutes.get('/',(req,res) => {
	res.send({
	  message: "Hello world",
	});
});

indexRoutes.post('/',(req,res)=>{
				const message =  req.query.message;
				console.log(message);
				res.send('request sent');
});




module.exports = indexRoutes;