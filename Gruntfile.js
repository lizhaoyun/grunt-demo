
module.exports = function(grunt) {
    grunt.initConfig({
        sprite:{
            fiels:{
                src:['icons/*.png'],
                dest:"dist/bundle.png",
                destCss:'dist/sprite.css'
            }
        }
    })

    grunt.loadNpmTasks("grunt-spritesmith");
    grunt.registerTask("default", ["sprite"])
}