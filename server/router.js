var requireDir = require('require-dir');
var controllers = requireDir('./controller/api');

module.exports.register = function (router) {

router.route('/orderData').post(controllers.order.orderData);

};

