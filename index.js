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

  var isAllArrayExpression = function(constantViolations) {
    return constantViolations.length === 0 ||
      constantViolations.every(function(violation) {
        return violation.isAssignmentExpression() &&
          violation.get('right').isArrayExpression();
      });
  };

  return {
    visitor: {
      CallExpression: function(path) {
        var node = path.node
        var scope = path.scope
        var callee = node.callee

        if (
          !callee.property ||
          callee.property.name !== 'push' || 
          node.arguments > 1 ||
          callee.object.type !== 'Identifier'
        ) return

        var binding = scope.getBinding(callee.object.name)
        if (
          !binding.path.isVariableDeclarator() ||
          !isAllArrayExpression(binding.constantViolations) ||
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
