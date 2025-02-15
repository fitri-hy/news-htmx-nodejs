exports.index = (req, res) => {
	res.render("layouts/main", { 
		title: "Viral Page", 
		layout: "../pages/viral/index" 
	});
};