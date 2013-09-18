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

Шаблоны хранятся отдельно в папке `app/views` как файлы `hbs`. С помощью `grunt-contrib-handlebars` шаблоны компилируются в джаваскриптовые фукнции, которые добавляются в `app`, как неймспейсу приложения, таким образом мы можем вызывать их в нужном месте приложения для компиляции разметки.

Чтобы собрать проект нужно выполнить `grunt build`

* `grunt`
* `grunt-contrib-concat`
* `grunt-contrib-uglify`
* `grunt-contrib-handlebars`

### Git flow

Процесс довольно прост.

Так вышло, что разработку я веду в ветке мастер — там все файлы подключаются как есть, без сборки. В роли релизной ветки выступает `gh-pages` — проект в таком виде автоматически становится доступным для внешнего мира.

Соответственно, в `gh-pages` нет папки `app`, а в мастере нет `build`. Разумеется, нигде нет папки `node_modules` — она добавлена в игнор, потому что эти файлы нужны только для сборки проекта под нодой.

Изменения я стараюсь синхронизировать точечно с помощью `git cherry-pick master`, предварительно переключившись в релизную ветку.

Такой простой процесс оказался удобным для маленького проекта.
