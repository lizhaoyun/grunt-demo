
// module.exports=function(grunt){
//     grunt.initConfig({
//         csslint:{
//             options:{
//                 csslintrc:'./.csslintrc'
//             },
//             src:['*.css']
//         }
//     });

//     grunt.loadNpmTasks('grunt-contrib-csslint');

//     grunt.registerTask('default',['csslint']);
// }
/*global module:true*/
module.exports=function(grunt){
    grunt.initConfig({
        eslint:{
            options:{
                eslintrc:'./.eslintrc.json'
            },
            target:['*.js']
        }
    });

    grunt.loadNpmTasks('grunt-eslint');

    grunt.registerTask('default',['eslint']);
}