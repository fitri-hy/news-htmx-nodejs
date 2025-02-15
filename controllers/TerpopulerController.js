exports.index = (req, res) => {
	res.render("layouts/main", { 
		title: "Terpopuler Page", 
		layout: "../pages/terpopuler/index" 
	});
};