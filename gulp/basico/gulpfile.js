const gulp = require('gulp')

gulp.task('default', () => {
  gulp.start('copiar', 'fim')
})

gulp.task('copiar', ['antes1', 'antes2'], () => {
  // gulp.src() qual a pasta contém os arquivos
  gulp.src(['pastaA/arquivo1.txt', 'pastaA/arquivo2.txt'])  // seleciona arquivo1 e arquivo2
  gulp.src(['pastaA/arquivo1.txt']) // seleciona o arquivo1
  gulp.src('pastaA/*.txt') // seleciona todos arquivos .txt
  gulp.src('pastaA/**/*.txt') // seleciona em todas subpastas de pastaA, todos os arquivos .txt
    .pipe(gulp.dest('pastaB')) // qual a paste destino para colar os arquivos
})

gulp.task('antes1', () => {
  console.log('Antes 1!!!')
})

gulp.task('antes2', () => {
  console.log('Antes 2')
})

gulp.task('fim', () => {
  console.log('Fim!!!')
})