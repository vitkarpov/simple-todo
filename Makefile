install: build-structure install-components
	@echo done

install-components: 
	@echo installing components...
	@bower install
	@cp ./bower_components/backbone/backbone-min.js ./app/libs/backbone.js
	@cp ./bower_components/backbone.localStorage/backbone.localStorage-min.js ./app/libs/localstorage.js
	@cp ./bower_components/jquery/jquery.min.js ./app/libs/jquery.js
	@cp ./bower_components/jquery/jquery.min.map ./app/libs/jquery.min.map
	@cp ./bower_components/requirejs/require.js ./app/libs/require.js
	@cp ./bower_components/requirejs-text/text.js ./app/libs/text.js
	@cp ./bower_components/underscore/underscore-min.js ./app/libs/underscore.js
	@rm -rf ./bower_components
	@echo done

build-structure:
	@echo	building the folders structure...
	@mkdir ./app/libs
	@mkdir ./app/collections
	@mkdir ./app/models
	@mkdir ./app/views
	@mkdir ./app/templates

clean:
	@rm -rf ./bower_components
	@ls -d ./app/*/ | xargs rm -rf
	@echo done	