const CDP = require('chrome-remote-interface')

const cp = require('child_process')
const fs = require('fs')

const sleep = (delay) => new Promise((resolve) => setTimeout(resolve, delay))

function launchBrowser() {
    const args = [
        '--ignore-certificate-errors',
        '--no-first-run',
        '--proxy-server=http://localhost:' + process.argv[2],
        '--remote-debugging-port=9222',
        '--user-data-dir=' + __dirname + '/chromium-data',
        '--disk-cache-dir=' + __dirname + '/chromium-data/DiskCache',
    ]

    cp.spawn('/usr/bin/chromium', args)
}

async function main() {
    fs.rmSync(__dirname + '/chromium-data', { recursive: true, force: true })
    launchBrowser()

    await sleep(2000)

    let client
    try {
        client = await CDP()
        await client.Page.navigate({url: 'http://httpforever.com/__/#/specs/runner?file=cypress/e2e/spec.cy.js'})
    } catch (err) {
        console.error(err)
    } finally {
        if (client) {
            await client.close()
        }
    }
}

main()
