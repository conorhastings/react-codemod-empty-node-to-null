# react-codemod-empty-node-to-null
A codemod to turn your returns of an empty node to null. Staring with `React` 15.0 you can return null from a stateless function component. This codemod will alter all your empty node returns to return null instead.

## use

* `npm install jscodeshift -g`
* `npm install react-style-px-suffix-codemod`
* run this script with `jscodeshift -t node_modules/react-codemod-empty-node-to-null <DIRECTORY_OR_FILE_TO_RUN_ON>`
