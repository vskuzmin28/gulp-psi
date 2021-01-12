const psi = require('psi')
const chalk = require('chalk')

const website = process.env.SITE

const line = '-'.repeat(26)

let output = (website) => {
    const result = JSON.stringify(website.data.lighthouseResult.categories.performance.score)
    const resultParse = JSON.parse(result)
    const realScore = Math.floor(resultParse * 100)

    let color = chalk.yellow
    color = realScore <= 50 ? chalk.red : color
    color = realScore >= 80 ? chalk.green : color

    console.log('URL:'.padEnd(15) + chalk.blue(JSON.parse(JSON.stringify(website.config.params.url).replace(/https?:\/\//, ''))))
    console.log('Strategy:'.padEnd(15) + chalk.blue(JSON.parse(JSON.stringify(website.config.params.strategy))))
    console.log('Performance:'.padEnd(15) + color(JSON.stringify(realScore)))
}

module.exports = pagespeed = async () => {
    const desktop = await psi(website, {
        nokey: 'true',
        strategy: 'desktop'
    }).then((website) => {
        console.log(line)
        output(website)
        console.log(line)
    })

    const mobile = await psi(website, {
        nokey: 'true',
        strategy: 'mobile'
    }).then((website) => {
        output(website)
        console.log(line)
    })
}