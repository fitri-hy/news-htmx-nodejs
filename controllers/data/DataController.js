const DataBerita = require("../../models/DaftarBerita");
exports.terkini = async (req, res) => {
    const page = parseInt(req.query.page) || 1;
    const data = await DataBerita.Terkini(page);
	const category = 'terkini';
    res.render("data/daftar-berita", { 
		data, 
		category,
		layout: false 
	});
};

exports.terpopuler = async (req, res) => {
    const page = parseInt(req.query.page) || 1;
    const data = await DataBerita.Terpopuler(page);
	const category = 'terpopuler';
    res.render("data/daftar-berita", { 
		data, 
		category,
		layout: false 
	});
};

exports.viral = async (req, res) => {
    const page = parseInt(req.query.page) || 1;
    const data = await DataBerita.Viral(page);
	const category = 'viral';
    res.render("data/daftar-berita", { 
		data, 
		category,
		layout: false 
	});
};

exports.pilihan = async (req, res) => {
    const page = parseInt(req.query.page) || 1;
    const data = await DataBerita.Pilihan(page);
	const category = 'pilihan';
    res.render("data/daftar-berita", { 
		data, 
		category,
		layout: false 
	});
};

exports.pencarian = async (req, res) => {
    const { q = 'terbaru' } = req.query;
    const page = parseInt(req.query.page) || 1;
    const data = await DataBerita.Pencarian(q, page);

    const category = 'pencarian';
    res.render("data/pencarian-berita", { 
        data, 
        category,
        q,
        layout: false 
    });
};

const Berita = require("../../models/Berita");
exports.berita = async (req, res) => {
    try {
        const { id, slug } = req.params;

        if (!id || !slug) {
            return res.status(400).send("ID atau slug tidak ditemukan.");
        }

        const fullSlug = `${id}/${slug}`;
        const data = await Berita.Berita(fullSlug);

        if (!data) {
            return res.status(404).send("Berita tidak ditemukan.");
        }

        res.render("data/berita", { data, layout: false });
    } catch (error) {
        console.error("Error fetching berita:", error);
        res.status(500).send("Terjadi kesalahan saat mengambil berita.");
    }
};

