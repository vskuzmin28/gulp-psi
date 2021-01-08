const gulp = require('gulp')
const mobile = require('./gulp/tasks/psi/mobile')
const desktop = require('./gulp/tasks/psi/desktop')

const psi = gulp.parallel(desktop, mobile)

exports.default = gulp.parallel(
    psi
)