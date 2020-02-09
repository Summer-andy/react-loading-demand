const types = require('@babel/types');

module.exports = function (babel) {
  return {
    visitor: {
      ImportDeclaration(path, ref = { opts: {} }) {
        let node = path.node
        let { specifiers } = node
        if (ref.opts.library === node.source.value
          && !types.isImportDefaultSpecifier(specifiers[0])        
          && !types.isImportNamespaceSpecifier(specifiers[0])) {  
          let newImports = specifiers.map(specifier => {
            return types.importDeclaration([types.importDefaultSpecifier(specifier.local)], types.stringLiteral(`${node.source.value}/lib/${specifier.local.name}`))
          })
          path.replaceWithMultiple(newImports)
        }
      }
    }
  }
}