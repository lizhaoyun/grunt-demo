
// module.exports=function(grunt){
//     grunt.initConfig({
//         htmlhint:{
//             options:{
//                 htmlhint:'./.htmlhintrc'
//             },
//             src:['*.html']
//         }
//     });

//     grunt.loadNpmTasks('grunt-htmlhint');

//     grunt.registerTask('default',['htmlhint']);
// }
module.exports=function(grunt){
    grunt.initConfig({
        csslint:{
            options:{
                csslintrc:'./.csslintrc'
            },
            src:['*.css']
        }
    });

    grunt.loadNpmTasks('grunt-contrib-csslint');

    grunt.registerTask('default',['csslint']);
}