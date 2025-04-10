const { src, dest, series, parallel, watch } = require(`gulp`);
const babel = require(`gulp-babel`);
const uglify = require(`gulp-uglify`);
const cleanCSS = require(`gulp-clean-css`);
const eslint = require(`gulp-eslint`);
const stylelint = require(`gulp-stylelint`);
const browserSync = require(`browser-sync`).create();
const sourcemaps = require(`gulp-sourcemaps`);

// Include ESLint
const lintJS = () => {
    return src(`scripts/main.js`)
        .pipe(eslint())
        .pipe(eslint.format())
        .pipe(eslint.failAfterError());
};

// Include Stylelint
const lintCSS = () => {
    return src(`styles/main.css`)
        .pipe(
            stylelint({
                reporters: [{ formatter: `string`, console: true }],
            })
        );
};
