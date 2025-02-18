exports.index = (req, res) => {
	res.render("layouts/main", { 
		title: "Terpopuler | HTMX", 
		layout: "../pages/terpopuler/index" 
	});
};