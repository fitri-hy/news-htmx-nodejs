exports.index = (req, res) => {
    res.render("layouts/main", { 
        title: "Home Page", 
        layout: "../pages/home/index" 
    });
};