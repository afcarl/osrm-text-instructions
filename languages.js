// Load all language files excplicitely to allow integration
// with bundling tools like webpack and browserify
var instructionsDe = require('./languages/translations/de.json');
var instructionsEn = require('./languages/translations/en.json');
var instructionsFr = require('./languages/translations/fr.json');
var instructionsNl = require('./languages/translations/nl.json');
var instructionsZhHans = require('./languages/translations/zh-Hans.json');

// Match tag to required language files
var tags = {
    'de': instructionsDe,
    'en': instructionsEn,
    'fr': instructionsFr,
    'nl': instructionsNl,
    'zh-Hans': instructionsZhHans
};

// A tag can redirect to another tag via the language tag as string value
var redirects = {
    'zh': 'zh-Hans'
};

module.exports = {
    tags: tags,
    redirects: redirects,
    get: function(tag) {
        if (this.redirects[tag]) {
            // redirect to other tag
            this.get(this.redirects[tag]);
        }

        var language = this.tags[tag];
        if (!language) {
            throw 'invalid language ' + tag;
        }

        return language;
    }
};
