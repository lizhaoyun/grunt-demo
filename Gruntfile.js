
// /*global module:true*/
// module.exports=function(grunt){
//     grunt.initConfig({
//         mocha_istanbul: {
//             coverage: {
//                 src: 'test', // a folder works nicely
//                 options: {
//                     mask: '*.spec.js'
//                 }
//             },
//             coveralls: {
//                 src: ['test', 'testSpecial', 'testUnique'], // multiple folders also works
//                 options: {
//                     coverage:true, // this will make the grunt.event.on('coverage') event listener to be triggered
//                     check: {
//                         lines: 75,
//                         statements: 75
//                     },
//                     root: './lib', // define where the cover task should consider the root of libraries that are covered by tests
//                     reportFormats: ['cobertura','lcovonly']
//                 }
//             }
//         }
//     });
//     grunt.loadNpmTasks('grunt-mocha-istanbul');
//     grunt.registerTask('coveralls', ['mocha_istanbul:coveralls']);
//     grunt.registerTask('coverage', ['mocha_istanbul:coverage']);
// }
module.exports = function(grunt) {
    grunt.initConfig({
        mocha_istanbul: {
            coverage: {
                src: "test"
            }
        },
        istanbul_check_coverage: {
            default: {
                options: {
                    coverageFolder: "coverage",
                    check: {
                        lines: 90,
                        statements: 90
                    }
                }
            }
        }
    })

    grunt.loadNpmTasks("grunt-mocha-cli");
    grunt.loadNpmTasks("grunt-mocha-istanbul");

    grunt.registerTask("cover", ["mocha_istanbul"]);
    grunt.registerTask("check-cover", ["istanbul_check_coverage"])
}