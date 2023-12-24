const cp = require('child_process')
const fs = require('fs')

fs.rmSync(__dirname + '/chromium-data', { recursive: true, force: true })

const args = [
    'http://httpforever.com/__/#/specs/runner?file=cypress/e2e/spec.cy.js',
    '--ignore-certificate-errors',
    '--no-first-run',
    '--proxy-server=http://localhost:' + process.argv[2],
    '--user-data-dir=' + __dirname + '/chromium-data',
    '--disk-cache-dir=' + __dirname + '/chromium-data/DiskCache',
]
cp.spawn('/usr/bin/chromium', args)
