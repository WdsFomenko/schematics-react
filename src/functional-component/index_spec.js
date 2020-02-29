"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const schematics_1 = require("@angular-devkit/schematics");
const testing_1 = require("@angular-devkit/schematics/testing");
const path = require("path");
const collectionPath = path.join(__dirname, '../collection.json');
const defaultOptions = {
    name: 'test',
    path: '/bar',
    styleext: 'css',
    noSpec: false,
    subfolder: false,
    propTypes: false,
    ts: false
};
describe('functional-component', () => {
    it('requires required name option', () => {
        const runner = new testing_1.SchematicTestRunner('schematics', collectionPath);
        expect(() => runner.runSchematic('functional-component', {}, schematics_1.Tree.empty())).toThrow();
    });
    it('works', () => {
        const runner = new testing_1.SchematicTestRunner('schematics', collectionPath);
        const tree = runner.runSchematic('functional-component', Object.assign({}, defaultOptions), schematics_1.Tree.empty());
        expect(tree.files.length).toEqual(3);
        expect(tree.files.sort()).toEqual(['/bar/Test.css', '/bar/Test.js', '/bar/Test.test.js']);
        const componentContent = tree.readContent('/bar/Test.js');
        expect(componentContent).toMatch(/const Test = \({ myProp, children }\)/);
        expect(componentContent).toMatch(/export default Test/);
    });
    it('creates scss file', () => {
        const runner = new testing_1.SchematicTestRunner('schematics', collectionPath);
        const tree = runner.runSchematic('functional-component', Object.assign(Object.assign({}, defaultOptions), { styleext: 'scss' }), schematics_1.Tree.empty());
        expect(tree.files.find(path => path.includes('css'))).toEqual('/bar/Test.scss');
    });
    it('omits test file creation', () => {
        const runner = new testing_1.SchematicTestRunner('schematics', collectionPath);
        const tree = runner.runSchematic('functional-component', Object.assign(Object.assign({}, defaultOptions), { noSpec: true }), schematics_1.Tree.empty());
        expect(tree.files.length).toEqual(2);
        expect(tree.files.sort()).toEqual(['/bar/Test.css', '/bar/Test.js']);
    });
    it('creates subfoler', () => {
        const runner = new testing_1.SchematicTestRunner('schematics', collectionPath);
        const tree = runner.runSchematic('functional-component', Object.assign(Object.assign({}, defaultOptions), { subfolder: true }), schematics_1.Tree.empty());
        expect(tree.files.length).toEqual(3);
        expect(tree.files.sort()).toEqual(['/bar/Test/Test.css', '/bar/Test/Test.js', '/bar/Test/Test.test.js']);
    });
    it('creates propTypes', () => {
        const runner = new testing_1.SchematicTestRunner('schematics', collectionPath);
        const tree = runner.runSchematic('functional-component', Object.assign(Object.assign({}, defaultOptions), { propTypes: true }), schematics_1.Tree.empty());
        const componentContent = tree.readContent('/bar/Test.js');
        expect(componentContent).toMatch(/import PropTypes from \'prop-types\'/);
        expect(componentContent).toMatch(/Test\.propTypes/);
    });
    it('uses TypeScript', () => {
        const runner = new testing_1.SchematicTestRunner('schematics', collectionPath);
        const tree = runner.runSchematic('functional-component', Object.assign(Object.assign({}, defaultOptions), { ts: true }), schematics_1.Tree.empty());
        expect(tree.files.length).toEqual(3);
        expect(tree.files.sort()).toEqual(['/bar/Test.css', '/bar/Test.test.ts', '/bar/Test.tsx']);
        const componentContent = tree.readContent('/bar/Test.tsx');
        expect(componentContent).toMatch(/type Props/);
        expect(componentContent).toMatch(/import React, { SFC } from \'react\'/);
        expect(componentContent).toMatch(/const Test: SFC<Props> = \({ myProp, children }\)/);
    });
});
//# sourceMappingURL=index_spec.js.map