
> pngquant pipeline for minify image using [node-pngquant-native](https://www.npmjs.com/package/node-pngquant-native)

### Useage
```javascript
var gulp = require('gulp');
var pngquant = require('gulp-pngquant-native');
 
// Basic usage 
gulp.task('image', function() {
  return gulp.src('src/images/**/*.png')
    .pipe(pngquant({/**options**/}))
});
```

### BufferMode
```javascript
var fs = require('fs');
var pngquant = require('gulp-pngquant-native');
 
fs.createReadStream('src/images/xxx.png')
    .pipe(pngquant.buffer(/**options**/))
    .on("data",data=>console.log('data'))
```

### Options
see [node-pngquant-native](https://www.npmjs.com/package/node-pngquant-native)([github](https://github.com/xiangshouding/node-pngquant-native))
 