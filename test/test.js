var fs = require('fs')
var path = require('path')
var expect = require('chai').expect
var transform = require('babel-core').transform
var Plugin = require('..')

function readFile(filePath) {
  return fs.readFileSync(path.join(__dirname, filePath), 'utf-8')
}

var acutalCode = readFile('fixtures/actual.js')

describe('transform-array-push', function() {
  this.timeout(1E4)

  it('should be pass with node@' + process.version[1], function() {
    var transformed = transform(acutalCode, {
      presets: ["es2015-node-auto"],
      plugins: [Plugin],
      comments: false
    })
    eval(transformed.code)

    var nodeVersion = +process.version[1]
    if (nodeVersion >= 4 && nodeVersion <= 6) {
      expect(transformed.code).to.equal(readFile('fixtures/expected.node4-6.js'))
    } else {
      expect(transformed.code).to.equal(readFile('fixtures/expected.node0.js'))
    }
  })
})
