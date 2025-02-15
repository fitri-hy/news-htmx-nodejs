exports.index = (req, res) => {
	res.render("layouts/main", { 
		title: "Terkini Page", 
		layout: "../pages/terkini/index" 
	});
};