const axios = require("axios");
const cheerio = require("cheerio");

exports.Terkini = async (page = 1) => {
    try {
        page = Math.max(1, page);
        const url = `https://www.antaranews.com/terkini/${page}`;
        const { data } = await axios.get(url);
        const $ = cheerio.load(data);
        let articles = [];

        $("div.wrapper__list__article .card__post.card__post-list").each((i, el) => {
            const title = $(el).find(".post_title a").text().trim();
            const link = $(el).find(".post_title a").attr("href").replace(/^https:\/\/www\.antaranews\.com\//, '');
            const img = $(el).find("picture img").attr("data-src") || $(el).find("picture img").attr("src");
            const time = $(el).find(".card__post__author-info span").text().trim();
            const excerpt = $(el).find("p").text().trim();

            articles.push({ title, link, img, time, excerpt });
        });

        return { articles, page };
    } catch (error) {
        console.error("Error fetching data:", error);
        return { articles: [], page };
    }
};

exports.Terpopuler = async (page = 1) => {
    try {
        page = Math.max(1, page);
        const url = `https://www.antaranews.com/terpopuler/${page}`;
        const { data } = await axios.get(url);
        const $ = cheerio.load(data);
        let articles = [];

        $("div.wrapper__list__article .card__post.card__post-list").each((i, el) => {
            const title = $(el).find(".post_title a").text().trim();
            const link = $(el).find(".post_title a").attr("href").replace(/^https:\/\/www\.antaranews\.com\//, '');
            const img = $(el).find("picture img").attr("data-src") || $(el).find("picture img").attr("src");
            const time = $(el).find(".card__post__author-info span").text().trim();
            const excerpt = $(el).find("p").text().trim();

            articles.push({ title, link, img, time, excerpt });
        });

        return { articles, page };
    } catch (error) {
        console.error("Error fetching data:", error);
        return { articles: [], page };
    }
};

exports.Viral = async (page = 1) => {
    try {
        page = Math.max(1, page);
        const url = `https://www.antaranews.com/top-news/${page}`;
        const { data } = await axios.get(url);
        const $ = cheerio.load(data);
        let articles = [];

        $("div.wrapper__list__article .card__post.card__post-list").each((i, el) => {
            const title = $(el).find(".post_title a").text().trim();
            const link = $(el).find(".post_title a").attr("href").replace(/^https:\/\/www\.antaranews\.com\//, '');
            const img = $(el).find("picture img").attr("data-src") || $(el).find("picture img").attr("src");
            const time = $(el).find(".card__post__author-info span").text().trim();
            const excerpt = $(el).find("p").text().trim();

            articles.push({ title, link, img, time, excerpt });
        });

        return { articles, page };
    } catch (error) {
        console.error("Error fetching data:", error);
        return { articles: [], page };
    }
};

exports.Pilihan = async (page = 1) => {
    try {
        page = Math.max(1, page);
        const url = `https://www.antaranews.com/pilihan-editor/${page}`;
        const { data } = await axios.get(url);
        const $ = cheerio.load(data);
        let articles = [];

        $("div.wrapper__list__article .card__post.card__post-list").each((i, el) => {
            const title = $(el).find(".post_title a").text().trim();
            const link = $(el).find(".post_title a").attr("href").replace(/^https:\/\/www\.antaranews\.com\//, '');
            const img = $(el).find("picture img").attr("data-src") || $(el).find("picture img").attr("src");
            const time = $(el).find(".card__post__author-info span").text().trim();
            const excerpt = $(el).find("p").text().trim();

            articles.push({ title, link, img, time, excerpt });
        });

        return { articles, page };
    } catch (error) {
        console.error("Error fetching data:", error);
        return { articles: [], page };
    }
};

exports.Pencarian = async (q, page = 1) => {
    try {
        const url = `https://www.antaranews.com/search?q=${q}&page=${page}`;
        const { data } = await axios.get(url);
        const $ = cheerio.load(data);
        let articles = [];

        $("div.card__post.card__post-list.card__post__transition").each((i, el) => {
            const title = $(el).find(".card__post__title a").text().trim();
            const link = $(el).find(".card__post__title a").attr("href").replace(/^https:\/\/www\.antaranews\.com\//, '');
            const img = $(el).find("picture img").attr("data-src") || $(el).find("picture img").attr("src");
            const time = $(el).find(".card__post__author-info span").text().trim();
            const excerpt = $(el).find("p").text().trim();

            articles.push({ title, link, img, time, excerpt });
        });

        return { articles, page };
    } catch (error) {
        console.error("Error fetching data:", error);
        return { articles: [], page };
    }
};

