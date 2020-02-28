
/*global module:true*/
module.exports=function(grunt){
    grunt.initConfig({
        mocha_istanbul: {
            coverage: {
                src: 'test', // a folder works nicely
                options: {
                    mask: '*.spec.js'
                }
            },
            coveralls: {
                src: ['test', 'testSpecial', 'testUnique'], // multiple folders also works
                options: {
                    coverage:true, // this will make the grunt.event.on('coverage') event listener to be triggered
                    check: {
                        lines: 75,
                        statements: 75
                    },
                    root: './lib', // define where the cover task should consider the root of libraries that are covered by tests
                    reportFormats: ['cobertura','lcovonly']
                }
            }
        }
    });
    grunt.loadNpmTasks('grunt-mocha-istanbul');
    grunt.registerTask('coveralls', ['mocha_istanbul:coveralls']);
    grunt.registerTask('coverage', ['mocha_istanbul:coverage']);
}