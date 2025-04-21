const sanitizeHtml = require('sanitize-html');

exports.sanitizeHTML = function (options) {

    const html = options.html ? this.parseRequired(options.html, 'string') : null;
    const disallowedTagsMode = options.disallowedTagsMode ? this.parseRequired(options.disallowedTagsMode, 'string') : null;
    const allowedTags = options.allowedTags ? this.parseRequired(options.allowedTags, 'string') : null;
    const nonBooleanAttributes = options.nonBooleanAttributes ? this.parseRequired(options.nonBooleanAttributes, 'string') : null;
    const allowedIframeHostnames = options.allowedIframeHostnames ? this.parseRequired(options.allowedIframeHostnames, 'string') : null;
    const allowedIframeDomains = options.allowedIframeDomains ? this.parseRequired(options.allowedIframeDomains, 'string') : null;
    const allowIframeRelativeUrls = options.allowIframeRelativeUrls ? this.parseRequired(options.allowIframeRelativeUrls, 'boolean') : null;

    let allowedAttributes = {};
    if (Array.isArray(options.allowedAttributes)) {
        options.allowedAttributes.forEach(entry => {
            const tag = entry.tag.trim();
            const attrs = entry.attributes.split(',').map(attr => attr.trim()).filter(Boolean);
            if (!allowedAttributes[tag]) {
                allowedAttributes[tag] = [];
            }
            allowedAttributes[tag].push(...attrs);
        });

        for (const tag in allowedAttributes) {
            allowedAttributes[tag] = [...new Set(allowedAttributes[tag])];
        }
    }

    const sanitizeOptions = {
        disallowedTagsMode,
        allowedTags,
        allowedAttributes,
        nonBooleanAttributes,
        allowedIframeHostnames,
        allowedIframeDomains,
        allowIframeRelativeUrls
    };

    const cleanedHtml = sanitizeHtml(html, sanitizeOptions);

    return cleanedHtml;
};
