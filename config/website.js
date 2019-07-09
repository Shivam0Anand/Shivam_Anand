const tailwind = require("../tailwind");

module.exports = {
  pathPrefix: "/", // Prefix for all links. If you deploy your site to example.com/portfolio your pathPrefix should be "/portfolio"

  siteTitle: "Shivam Anand", // Navigation and Site Title
  siteTitleAlt: "Shivam Anand", // Alternative Site title for SEO
  siteTitleShort: "Shivam", // short_name for manifest
  siteHeadline: "Creating marvelous art & blazginly fast websites", // Headline for schema.org JSONLD
  siteUrl: "https://cara.lekoarts.de", // Domain of your site. No trailing slash!
  siteLanguage: "en", // Language Tag on <html> element
  siteLogo: "/logo.png", // Used for SEO and manifest
  siteDescription: "Playful & Colorful One-Page website with Parallax effect",
  author: "LekoArts", // Author for schema.org JSONLD

  // siteFBAppID: '123456789', // Facebook App ID - Optional
  userTwitter: "@shivam_jackson", // Twitter Username
  ogSiteName: "shivam.jackson252", // Facebook Site Name
  ogLanguage: "en_US", // Facebook Language
  googleAnalyticsID: "UA-47519312-5",

  // Manifest and Progress color
  themeColor: tailwind.colors.orange,
  backgroundColor: tailwind.colors.blue
};
