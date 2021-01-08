const psi = require('psi')
const {website, compute} = require('../psi/settings')

module.exports = mobile = () => {
    return psi(website, {
        nokey: 'true',
        strategy: 'mobile'
    }).then((website) => {
        compute(website)
    })
}