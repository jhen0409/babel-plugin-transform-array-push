module.exports = function(babel) {
  var t = babel.types

  var types = [
    'ArrowFunctionExpression',
    'AssignmentPattern',
    'AssignmentExpression',
    'VariableDeclarator',
    'ReturnStatement',
    'ConditionalExpression'
  ]

  return {
    visitor: {
      CallExpression: function(path) {
        var node = path.node
        var scope = path.scope
        var callee = node.callee

        if (!callee.property || callee.property.name !== 'push') return
        if (node.arguments > 1) return

        if (callee.object.type === 'Identifier') {
          var binding = scope.getBinding(callee.object.name)

          if (
            binding.path.type !== 'VariableDeclarator' ||
            binding.constantViolations.length > 0 ||
            binding.path.get('init').type !== 'ArrayExpression'
          ) return

          var assignmentReplace = t.assignmentExpression(
            '=',
            t.memberExpression(
              callee.object,
              t.memberExpression(
                callee.object,
                t.identifier('length')
              ),
              true
            ),
            node.arguments[0]
          )

          if (types.indexOf(path.parentPath.type) !== -1) {
            var expressionStatement = t.expressionStatement(
              t.sequenceExpression([
                assignmentReplace,
                t.memberExpression(
                  callee.object,
                  t.identifier('length')
                )
              ])
            )
            path.replaceWith(expressionStatement)
          } else {
            path.replaceWith(assignmentReplace)
          }
        }
      }
    }
  }
}
