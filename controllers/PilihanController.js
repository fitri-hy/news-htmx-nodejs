exports.index = (req, res) => {
	res.render("layouts/main", { 
		title: "Pilihan Page", 
		layout: "../pages/pilihan/index" 
	});
};