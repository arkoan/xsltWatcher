# xsltWatcher
A node service that watch on source and transform files to generate automatically a result on change.

install
=======
    npm install
This depend on xsltproc, a software that you will install as follow under ubuntu :

    sudo apt-get install xsltproc
usage
=====
    node xsltWatcher -s sourceFilePath -t transformFiltePath -r resultFilePath

example
=======
An example is available in resource folder, you will find a source, a transform and a result file
As started, it watches for changes and axecutes xsltproc to have a result always up to date.

    node app.js -s resources/source.xml -t resources/transform.xml -r resources/result.xml
