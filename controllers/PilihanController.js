exports.index = (req, res) => {
	res.render("layouts/main", { 
		title: "Pilihan | HTMX", 
		layout: "../pages/pilihan/index" 
	});
};