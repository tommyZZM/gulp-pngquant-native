/* Created by tommyZZM on 2016/3/12. */
"use strict"
const path = require("path")
const pngquant = require('node-pngquant-native');
const through = require('through2')

module.exports = pipeline;

function pipeline (options){

    let acceptFormart = [".png",".jpg",".jpeg"];

    return through.obj((file ,enc ,next)=>{
        //only accept .png/.jpg/.jpeg
        let extname = path.extname(file.path)
        if(acceptFormart.indexOf(extname)<0){
            return next(null,file)
        }

        let entry = through();
        entry.push(file.contents);
        return entry
            .pipe(pipeline.buffer(options))
            .pipe(through((buf ,enc ,bufNext)=>{
                file.contents = buf;
                bufNext();
            }),done=>{
                next(null,file);
                done();
            })

    })
}

pipeline.buffer = function(options){
    let defaults = {
        speed: 10
        , quality: [50, 66]
        , iebug:false
    }

    let mergeOptions = Object.assign({},defaults,options);

    return through((buf ,enc ,next)=>
        next(null,pngquant.compress(buf,mergeOptions)))
}