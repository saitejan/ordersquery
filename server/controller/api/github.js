

function githubData(req, res) {
	var githubAllData = require('./../../data/data.json');
	var result = {
		response : [],
		status : false
	};
	githubAllData=githubAllData.items;
	var states = [];
	var stateName = null;

	if(req.body.stateName){
		stateName = capitalizeFirstLetter(req.body.stateName);
	}

	for(var i =0; i < githubAllData.length; i++){
		if(states.indexOf(githubAllData[i].state) < 0){
			if(stateName && githubAllData[i].state.indexOf(stateName) > -1){
				states.push(githubAllData[i].state);
			}
			if(!stateName){
				states.push(githubAllData[i]);
			}
		}
	}
	result.response = states;
	res.json(result);

}

module.exports.githubData = githubData;
