const sanitizeHtml = require('sanitize-html');

exports.sanitizeHTML = function(options) {

    const html = options.html ? this.parseRequired(options.html, 'string') : null;
    const disallowedTagsMode = options.disallowedTagsMode ? this.parseRequired(options.disallowedTagsMode, 'string') : null;
    const allowedTags = options.allowedTags ? this.parseRequired(options.allowedTags, 'string') : null;
    const nonBooleanAttributes = options.nonBooleanAttributes ? this.parseRequired(options.nonBooleanAttributes, 'string') : null;
    const allowedIframeHostnames = options.allowedIframeHostnames ? this.parseRequired(options.allowedIframeHostnames, 'string') : null;
    const allowedIframeDomains = options.allowedIframeDomains ? this.parseRequired(options.allowedIframeDomains, 'string') : null;
    const allowIframeRelativeUrls = options.allowIframeRelativeUrls ? this.parseRequired(options.allowIframeRelativeUrls, 'boolean') : null;

    const sanitizeOptions = {
        disallowedTagsMode,
        allowedTags,
        nonBooleanAttributes,
        allowedIframeHostnames,
        allowedIframeDomains,
        allowIframeRelativeUrls
    };

    const cleanedHtml = sanitizeHtml(html, sanitizeOptions);

    return cleanedHtml;
};
