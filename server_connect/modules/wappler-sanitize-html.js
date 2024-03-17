const sanitizeHtml = require('sanitize-html');

exports.sanitizeHTML = function(options, name) {
  const { html, disallowedTagsMode, allowedTags, nonBooleanAttributes, allowedIframeHostnames, allowedIframeDomains, allowIframeRelativeUrls} = options;
  
  const cleanedHtml = sanitizeHtml(html, {
    disallowedTagsMode: disallowedTagsMode,
    allowedTags: allowedTags,
    nonBooleanAttributes: nonBooleanAttributes,
    allowedIframeHostnames: allowedIframeHostnames,
    allowedIframeDomains: allowedIframeDomains,
    allowIframeRelativeUrls: allowIframeRelativeUrls
  });
  
  return cleanedHtml;
};
