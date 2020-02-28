
/*global module:true*/
module.exports=function(grunt){
    grunt.initConfig({
        run:{
            options:{wait:false},
            args:'./app.js'
        },
        mochacli: {
            all:{
                src:['test/*.js']
            },
            options:{
                repottor:'spec',
                bail:true
            }
        }
    });
    grunt.loadNpmTasks('grunt-mocha-cli');
    grunt.loadNpmTasks('grunt-run');

    // grunt.registerTask('coveralls', ['mocha_istanbul:coveralls']);
    grunt.registerTask('default', ['run','mochacli','stop:api']);
}