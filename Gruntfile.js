
/*global module:true*/
module.exports=function(grunt){
    grunt.initConfig({
        // run:{
        //     options:{wait:false},
        //     args:'./app.js'
        // },
        // mochacli: {
        //     all:{
        //         src:['test/*.js']
        //     },
        //     options:{
        //         repottor:'spec',
        //         bail:true
        //     }
        // }
        mocha: {
            test: {
              src: ['test/index.html'],
            },
            options: {
              run: true,
              reporter: 'Dot'
            }
          }
    });
    // grunt.loadNpmTasks('grunt-mocha-cli');
    // grunt.loadNpmTasks('grunt-run');

    // grunt.registerTask('coveralls', ['mocha_istanbul:coveralls']);
    // grunt.registerTask('default', ['run','mochacli','stop:api']);

    grunt.loadNpmTasks('grunt-mocha');

    grunt.registerTask('default', ['mocha']);
}