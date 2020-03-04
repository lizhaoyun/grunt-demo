
module.exports = function(grunt) {
    grunt.initConfig({
        imagemin:{
            fiels:{
                expand:true,
                src:['./images/*.{png,jpg,gif}'],
                dest:"dist/"
            }
        }
    })

    grunt.loadNpmTasks("grunt-contrib-imagemin");
    grunt.registerTask("default", ["imagemin"])
}