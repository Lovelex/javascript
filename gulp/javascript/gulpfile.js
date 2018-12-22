const gulp = require('gulp')
const concat = require('gulp-concat') // concatena arquivos
const uglify = require('gulp-uglify') // retira os espaços de arquivos
const babel = require('gulp-babel') // traduz uma linguagem para melhor reconhecimento do browser

gulp.task('default', () => {
  return gulp.src('src/**/*.js')
    .pipe(babel({
      comments: false,
      presets: ['env']
    }))
    .pipe(uglify())
    .on('error', function(err) { console.log(err) })
    .pipe(concat('codigo.min.js'))
    .pipe(gulp.dest('build'))
})