module.exports = function(grunt) {
  // Do grunt-related things in here

	// Project configuration.
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		// uglify: {
		//   options: {
		//     banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
		//   },
		//   build: {
		//     src: 'src/<%= pkg.name %>.js',
		//     dest: 'build/<%= pkg.name %>.min.js'
		//   }
		express: {
		    options: {
		    	port: 3000,
		      // Override defaults here
		    },
		    dev: {
		      options: {
		        script: 'app.js'
		      }
		    },
		    prod: {
		      options: {
		        script: 'app.js',
		        node_env: 'production'
		      }
		    },
		    test: {
		      options: {
		        script: 'app.js'
		      }
		    }
		},
		watch: {

		    files: ['public/**/*', 'node/**/*'],
		    tasks: ['console'],
		    options: {
		      spawn: false,
		      livereload: {
			    // port: 3000,
			  }
		    }

		}
	});

	// load npm tasks
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-express-server');

	// register tasks
	grunt.registerTask('default', ['express:dev', 'watch']);
	grunt.registerTask('console', 'confirm task', function () {
		console.log("File Changed ...")
	});
};