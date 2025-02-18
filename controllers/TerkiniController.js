exports.index = (req, res) => {
	res.render("layouts/main", { 
		title: "Terkini | HTMX", 
		layout: "../pages/terkini/index" 
	});
};