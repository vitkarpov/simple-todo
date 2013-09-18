## Классический TODO

Пример простого учебного одностраничного приложения, которое представляет собой классический TODO на каждый день.

**Reference**: [Backbone Fundamentals by Addy Osmani](http://addyosmani.github.io/backbone-fundamentals/) 	

### Библиотеки

* `backbone`
* `underscore`
* `handlebars`
* `jquery`
* `backbone.localStorage`

### Сборка

В браузер попадает один минифицированный файл, который содержит все, что нужно, для работы приложения. Этот файл собирается и обфусцируется автоматически с помощью `grunt`. 

Шаблоны хранятся отдельно в папке `app/views` как файлы `hbs`. С помощью `grunt-contrib-handlebars`

Чтобы собрать проект нужно выполнить `grunt build`

* `grunt`
* `grunt-contrib-concat`
* `grunt-contrib-uglify`
* `grunt-contrib-handlebars`
