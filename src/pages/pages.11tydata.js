export default () => {
  let pagesData = {
    permalink: "/{{ page.fileSlug }}/",
    layout: "layouts/page.html",
  };

  if (process.env.ELEVENTY_ENV === "prod") {
    pagesData.date = "git Last Modified";
  }

  return pagesData;
};
