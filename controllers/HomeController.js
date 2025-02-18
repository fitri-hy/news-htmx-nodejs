const DataBerita = require("../models/DaftarBerita");

exports.index = async (req, res) => {
	const page = parseInt(req.query.page) || 1;
    const data = await DataBerita.Terkini(page);
    res.render("layouts/main", { 
        title: "Berita | HTMX", 
		data, 
        layout: "../pages/home/index" 
    });
};