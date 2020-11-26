define(function (require) {
    'use strict';

    var renderer = require('../template/renderer');

    renderer.addAttribute('repeat', renderer.handlers.wrapAttribute);

    renderer.addAttribute('outerfasteach', {
        binding: 'fastForEach',
        handler: renderer.handlers.wrapAttribute
    });

    renderer
        .addNode('repeat')
        .addNode('fastForEach');

    return {
        resizable:      require('./resizable'),
        i18n:           require('./i18n'),
        scope:          require('./scope'),
        mageInit:       require('./mage-init'),
        keyboard:       require('./keyboard'),
        optgroup:       require('./optgroup'),
        afterRender:    require('./after-render'),
        autoselect:     require('./autoselect'),
        outerClick:     require('./outer_click'),
        fadeVisible:    require('./fadeVisible'),
        collapsible:    require('./collapsible'),
        staticChecked:  require('./staticChecked'),
        simpleChecked:  require('./simple-checked'),
        bindHtml:       require('./bind-html'),
        repeat:         require('knockoutjs/knockout-repeat'),
        fastForEach:    require('knockoutjs/knockout-fast-foreach'),
    };
});
