"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@angular-devkit/core");
const schematics_1 = require("@angular-devkit/schematics");
const parse_name_1 = require("../utility/parse-name");
const validation_1 = require("../utility/validation");
function component(options) {
    if (options.path === undefined) {
        options.path = '/src/modules';
    }
    const parsedPath = parse_name_1.parseName(options.path, options.name);
    options.name = parsedPath.name;
    options.path = parsedPath.path;
    validation_1.validateName(options.name);
    const templateSource = schematics_1.apply(schematics_1.url('./files'), [
        options.noSpec ? schematics_1.filter(path => !path.endsWith('.test.__jsext__')) : schematics_1.noop(),
        schematics_1.template(Object.assign({}, core_1.strings, { 'if-flat': (s) => options.subfolder ? s : '', jsext: !!options.ts ? 'ts' : 'js', jsxext: !!options.ts ? 'tsx' : 'js' }, options)),
        schematics_1.move(parsedPath.path),
    ]);
    return schematics_1.mergeWith(templateSource);
}
exports.component = component;
//# sourceMappingURL=index.js.map