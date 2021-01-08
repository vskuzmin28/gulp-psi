const website = 'vicecode.ru'

module.exports = {website}

let compute = (website) => {
    const result = JSON.stringify(website.data.lighthouseResult.categories.performance.score)
    const resultParse = JSON.parse(result)
    const realScore = resultParse * 100

    console.log('URL: ' + JSON.parse(JSON.stringify(website.config.params.url).replace(/https?:\/\//, '')))
    console.log('Strategy: ' + JSON.parse(JSON.stringify(website.config.params.strategy)))
    console.log('Speed score: ' + JSON.stringify(realScore) + ' of 100')
}

module.exports.compute = compute