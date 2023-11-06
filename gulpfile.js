const gulp = require('gulp');
const sass = require ('gulp-sass')(require('sass'))
const imagemin = require('gulp-imagemin');
const uglify = require('gulp-uglify');

function scripts() {
    return gulp.src('./src/scripts/*.js')
    .pipe(uglify())
    .pipe(gulp.dest('./dist/js'))
}

function styles() {
    return gulp.src('./src/styles/*.scss') //Recolhendo os arquivos fontes
    .pipe(sass({ outputStyle: 'compressed' })) //Compilação dos arquivos de saída comprimidos
    .pipe(gulp.dest('./dist/css')); //Direcionado onde os aquivos ficarão enviados
}

function images() {
    return gulp.src('./src/images/**') 
    .pipe(imagemin()) 
    .pipe(gulp.dest('./dist/images')); 
}

exports.default = gulp.parallel(styles, images, scripts);
exports.watch = function() {
    gulp.watch('./src/styles/*.scss', gulp.parallel(styles)) //Definindo os arquivos a serem observados e a tarefa a ser executada
    gulp.watch('./src/scripts/*.js', gulp.parallel(scripts))
}