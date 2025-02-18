exports.index = (req, res) => {
    const { q = 'terbaru' } = req.query;
    res.render("layouts/main", { 
        title: "Pencarian | HTMX",  
        layout: "../pages/pencarian/index",
        q,
    });
};
