var gulp = require("gulp"); //npm install --save-dev gulp-...
var imagemin = require("gulp-imagemin");
var uglify = require("gulp-uglify");
var sass = require("gulp-sass");
var concat = require("gulp-concat");
var autoprefixer = require('gulp-autoprefixer');
var cleancss = require("gulp-clean-css");
var jshint = require('gulp-jshint');
var stylish = require('jshint-stylish');

//Directory variables
var publicCSS = "public/css";
var publicJS = "public/js";
var publicIMG = "public/img";

/*  --TOP LEVEL FUNCTIONS
    gulp.task - Define tasks
    gulp.src - Points to files to use
    gulp.dest - Points to folder to output
    gulp.watch - Watch files and folders for changes
*/



// Copy all HTML files
// gulp.task("copyHtml", function(){
//     gulp.src("src/*.html")
//         .pipe(gulp.dest("public"));
// });

// LOGS MESSAGE
gulp.task("message", function () {
    return console.log("Gulp is running...");
});

// Optimize images
gulp.task('imagemin', function () {
    gulp.src('src/img/*')
        .pipe(imagemin([
            imagemin.gifsicle({ interlaced: true }),
            imagemin.jpegtran({ progressive: true }),
            imagemin.optipng({ optimizationLevel: 5 }),
            imagemin.svgo({
                plugins: [
                    { removeViewBox: true },
                    { cleanupIDs: false }
                ]
            })
        ]))
        .pipe(gulp.dest(publicIMG));
});

// JS HINT
gulp.task('hint', function () {
    return gulp.src('src/js/*.js')
        .pipe(jshint('.jshintrc'))
        .pipe(jshint.reporter(stylish));
});

//MINIFY JS
// gulp.task("minify",function(){
//     gulp.src("src/js/main.js")
//         .pipe(uglify())
//         .pipe(gulp.dest(publicJS));
// });

//COMPILE SASS
gulp.task("sass", function(){
    gulp.src("src/sass/style.scss")
        .pipe(sass().on("error", sass.logError))
        .pipe(autoprefixer({ //Autoprefixer
            browsers: ['last 3 versions'],
            cascade: false
        }))
        .pipe(cleancss()) //Minify CSS - Toggle as a comment if you don't want to minify at the moment
        .pipe(gulp.dest(publicCSS));
});

//CONCATENATE JS FILES - so all the files are concatenated and minified, don't run "minify"
gulp.task("concat", function(){
    gulp.src("src/js/*.js")
        .pipe(concat("main.js"))
        .pipe(uglify())
        .pipe(gulp.dest(publicJS))
});

// EXECUTE ALL with "gulp" or "gulp default" commands
gulp.task("default", [ "message", "imagemin", "sass", "hint", "concat" ]);

//Watches and executes all these task without having to "gulp default" every time
gulp.task("watch", function(){
    gulp.watch("src/js/*.js", ["hint"]);
    gulp.watch("src/js/*.js", ["concat"]);
    gulp.watch("src/img/*", ["imagemin"]);
    gulp.watch("src/sass/*.scss", ["sass"]);
    // gulp.watch("src/*.html", ["copyHtml"]);
});