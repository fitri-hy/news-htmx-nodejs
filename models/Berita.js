const axios = require("axios");
const cheerio = require("cheerio");

exports.Berita = async (slug) => {
    try {
        if (!slug) {
            throw new Error("Slug tidak tersedia");
        }

        const url = `https://www.antaranews.com/berita/${slug}`;
        const { data } = await axios.get(url);
        const $ = cheerio.load(data);

        const title = $(".wrap__article-detail-title h1").text().trim();
        const time = $(".wrap__article-detail-info .text-secondary").text().trim();
        const img = $(".wrap__article-detail-image img").attr("src");
        const caption = $(".wrap__article-detail-image figcaption").text().trim().replace(/ANTARA/g, "HTMX");

        let content = $(".wrap__article-detail-content").html() || "";

        content = content
            .replace(/<ins[^>]*>.*?<\/ins>/gs, "")
            .replace(/<iframe[^>]*>.*?<\/iframe>/gs, "")
            .replace(/ANTARA/g, "HTMX")
            .replace(/\(adsbygoogle\s*=\s*window\.adsbygoogle\s*\|\|\s*\[\]\).push\(\{\}\);/g, "")
            .replace(/https:\/\/www\.antaranews\.com/g, "");

        content = content.replace(
            /<a\s+href="https:\/\/www\.antaranews\.com(\d+\/[^"]+)"([^>]*)>(.*?)<\/a>/g,
            '<a href="/$1"$2>$3</a>'
        );

        return { 
            title,
            time,
            img,
            caption,
            content
        };
    } catch (error) {
        console.error("Error fetching data:", error);
        return null;
    }
};
