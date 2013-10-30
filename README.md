# Embedding Elm in HTML #

To embed an Elm project inside a `div` in an HTML file, you need to do a few things:

* name the `div` you want to use in your HTML file
* reference that `div` in JavaScript using `getElementById('your-div-name')`
* use the appropriate Elm to JavaScript method (outlined [here](https://github.com/evancz/elm-html-and-js))

Once you have your Elm file written, you should compile it using the --only-js and --make flags like so:

`elm -mo ElmFileName.elm`

Other resources:
[TodoFRP](https://github.com/evancz/TodoFRP)
[Elm Official Website](http://elm-lang.org)
