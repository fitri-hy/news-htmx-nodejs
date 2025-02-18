exports.index = (req, res) => {
	res.render("layouts/main", { 
		title: "Viral | HTMX", 
		layout: "../pages/viral/index" 
	});
};