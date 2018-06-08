var requireDir = require('require-dir');
var controllers = requireDir('./controller/api');

module.exports.register = function (router) {

router.route('/githubData').post(controllers.github.githubData);

};

