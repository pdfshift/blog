/* global hexo */
'use strict';

const path = require('path')

// If config.lowercase is set, convert post slugs to all lowercase.
hexo.extend.filter.register('new_post_path', function (data, replace) {
    if (typeof data === 'string'  && hexo.config.lowercase) {
        data = path.dirname(data) + path.sep + path.basename(data).toLowerCase();
    }
    return data;
});