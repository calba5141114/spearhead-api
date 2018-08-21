const express = require('express');
const app = express();
const config = require('./config.js');
const indexRoutes = require('./routes/indexRoutes');
const bodyParser = require('body-parser');
const registerRoutes = require('./routes/registerRoutes');
const mongoose = require('mongoose;');

//needs cross origin header/ mongo.

try {
	mongoose.connect(config.mongoURL, {
		useNewUrlParser: true
	});

	console.log('connected to DB');

}
catch (err) {
	console.log(err);
}

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
	extended: true,
}));


app.use('/', indexRoutes);
// 404 route to go at the end of every route
app.get('*', function (req, res) {
	res.send({
		message: 'This endpoint does not exists ripperino',
		error: 404,
	}, 404);
});


app.listen(config.port, () => {
	console.log(`App running on port ${config.port}`);
});
