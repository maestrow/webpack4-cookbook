## Usage

Import your css from tsx and use it (otherwise webpack didnt process unused css module):

    import * as s from './styles.css';
    console.dir(s);

Then `npm run build`

This will generate *.css.d.ts files near your css.

## Docs

- https://medium.com/@sapegin/css-modules-with-typescript-and-webpack-6b221ebe5f10
- https://stackoverflow.com/questions/53847560/a-question-in-reacttypescriptwebpack-with-typings-for-css-modules-loader

## See also similar solution

- https://www.npmjs.com/package/typed-css-modules
