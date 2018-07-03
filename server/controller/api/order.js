

function orderData(req, res) {
	var orderAllData = require('./../../data/data.json');
	var result = {
		response : [],
		status : false
	};
	orderAllData=orderAllData.persons;
	var states = [];
	var stateName = null;

	if(req.body.stateName){
		stateName = capitalizeFirstLetter(req.body.stateName);
	}

	for(var i =0; i < orderAllData.length; i++){
		if(states.indexOf(orderAllData[i].state) < 0){
			if(stateName && orderAllData[i].state.indexOf(stateName) > -1){
				states.push(orderAllData[i].state);
			}
			if(!stateName){
				states.push(orderAllData[i]);
			}
		}
	}
	result.response = states;
	res.json(result);

}

module.exports.orderData = orderData;