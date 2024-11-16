import htmlmin from "html-minifier-terser";
import CleanCSS from "clean-css";
import { DateTime } from "luxon";
import pluginRss from "@11ty/eleventy-plugin-rss";

export default function (eleventyConfig) {
  // Include favicon in the build process
  eleventyConfig.addPassthroughCopy({ "src/favicon": "/" });

  // Minify HTML output
  eleventyConfig.addTransform("htmlmin", function (content) {
    if ((this.page.outputPath || "").endsWith(".html")) {
      let minified = htmlmin.minify(content, {
        useShortDoctype: true,
        removeComments: true,
        collapseWhitespace: true,
      });

      return minified;
    }

    return content;
  });

  // Minify CSS output
  eleventyConfig.addFilter("cssmin", function (code) {
    return new CleanCSS({}).minify(code).styles;
  });

  // Date formatting (human readable)
  eleventyConfig.addFilter("readableDate", (dateObj) => {
    return DateTime.fromJSDate(dateObj).toFormat("LLL dd, yyyy");
  });

  // Date formatting (machine readable)
  eleventyConfig.addFilter("machineDate", (dateObj) => {
    return DateTime.fromJSDate(dateObj).toFormat("yyyy-MM-dd");
  });

  // Enable RSS feed
  eleventyConfig.addPlugin(pluginRss);

  return {
    // Use Nunjucks in HTML files
    htmlTemplateEngine: "njk",

    dir: {
      input: "src",
      data: "data",
      includes: "includes",
      output: "_site",
    },
  };
}
