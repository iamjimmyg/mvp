//assign uname/password object to value
var configValues = require('./config');
//export connection to mongodb 'mlab'
module.exports = {
	getDbConnectionString: function() {
		return 'mongodb://' + configValues.uname + ':' + configValues.pwd + '@ds111188.mlab.com:11188/node_test';
	}
}
