export default async function (eleventyConfig) {
    //configure eleventy
    eleventyConfig.setInputDirectory("src");
    eleventyConfig.addPassthroughCopy("images");
    eleventyConfig.addPassthroughCopy("css");
   
  }
  