const gulp = require('gulp')
const ts = require('gulp-typescript')
const concat = require('gulp-concat')
const uglify = require('gulp-uglify')
const tsProject = ts.createProject('tsconfig.json')

gulp.task('default', () => {
  return gulp.src('./build/*.js')
    .pipe(concat('tscriptToEcma.min.js'))
    .pipe(uglify())
    .pipe(gulp.dest('build'))
})