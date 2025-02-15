const Berita = require("../models/Berita");
exports.index = async (req, res) => {
    const { id, slug } = req.params;

    if (!id || !slug) {
        return res.status(400).send("ID atau slug tidak ditemukan.");
    }
	
    const fullSlug = `${id}/${slug}`;
    const data = await Berita.Berita(fullSlug);
	
	res.render("layouts/main", { 
		title: data.title, 
		slug: `${id}/${slug}`,
		layout: "../pages/berita/index" 
	});
};