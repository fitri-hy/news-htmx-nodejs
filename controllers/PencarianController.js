exports.index = (req, res) => {
    const { q = 'terbaru' } = req.query;
    res.render("layouts/main", { 
        title: "Pencarian Page", 
        layout: "../pages/pencarian/index",
        q,
    });
};
