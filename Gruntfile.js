// module.exports=function(grunt){
//     grunt.initConfig({
//         less:{
//             compile:{
//                 files:{'dist/compiled.css':'css/*.less'}
//             }
//         }
//     });

//     grunt.loadNpmTasks('grunt-contrib-less');

//     grunt.registerTask('default',['less:compile']);
// }
module.exports=function(grunt){
    grunt.initConfig({
        htmlhint:{
            options:{
                htmlhint:'./.htmlhintrc'
            },
            src:['*.html']
        }
    });

    grunt.loadNpmTasks('grunt-htmlhint');

    grunt.registerTask('default',['htmlhint']);
}