const psi = require('psi')
const {website, compute} = require('../psi/settings')

module.exports = desktop = () => {
    return psi(website, {
        nokey: 'true',
        strategy: 'desktop'
    }).then((website) => {
        compute(website)
    })
}