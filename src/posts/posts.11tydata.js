export default () => {
  let postData = {
    permalink: "/{{ page.fileSlug }}/",
    layout: "layouts/post.html",
    tags: ["post"],
  };

  if (process.env.ELEVENTY_ENV === "prod") {
    postData.date = "git Created";
  }

  return postData;
};
