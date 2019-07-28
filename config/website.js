const tailwind = require("../tailwind");

module.exports = {
  pathPrefix: "/", // Prefix for all links. If you deploy your site to example.com/portfolio your pathPrefix should be "/portfolio"

  siteTitle: "Shivam Anand", // Navigation and Site Title
  siteTitleAlt: "Shivam Anand", // Alternative Site title for SEO
  siteTitleShort: "Shivam", // short_name for manifest
  siteHeadline: ".", // Headline
  siteUrl: "https://www.darkshadow.in/", // Domain of your site. No trailing slash!
  siteLanguage: "en", // Language Tag on <html> element
  siteLogo: "/logo.png", // Used for SEO and manifest
  siteDescription: "Shivam Anand Portfolio",
  author: "Shivam", // Author for schema.org JSONLD

  // siteFBAppID: '123456789', // Facebook App ID - Optional
  userTwitter: "@shivam_jackson", // Twitter Username
  ogSiteName: "shivam.jackson252", // Facebook Site Name
  ogLanguage: "en_US", // Facebook Language
  googleAnalyticsID: "UA-143545798-1",

  // Manifest and Progress color
  themeColor: tailwind.colors.orange,
  backgroundColor: tailwind.colors.blue
};
