module.exports = function(file, api, options) {
  const j = api.jscodeshift;
  const root = j(file.source);
  const printOptions = options.printOptions || {};
  root.find(j.ReturnStatement).forEach(ret => {
    if (ret.value.argument.type === 'JSXElement') {
      const name =  ret.value.argument.openingElement.name.name;
      const firstLetter = name[0];
      const hasAttributes = ret.value.argument.openingElement.attributes.length;
      const hasChildren = ret.value.argument.children.length;
      const isDomElement = firstLetter === firstLetter.toLowerCase();
      if (!hasAttributes && !hasChildren && isDomElement) {
        ret.value.argument.type = 'Literal';
        ret.value.argument.value = null;
      }
    }
  });
  return root.toSource(printOptions);
}
