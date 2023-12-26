const cp = require('child_process')
const fs = require('fs')

fs.rmSync(__dirname + '/chromium-data', { recursive: true, force: true })

const args = [
    'http://httpforever.com',
    '--ignore-certificate-errors',
    '--no-first-run',
    '--proxy-server=http://localhost:' + process.argv[3],
    '--user-data-dir=' + __dirname + '/chromium-data',
    '--disk-cache-dir=' + __dirname + '/chromium-data/DiskCache',
]
cp.spawn('/usr/bin/chromium', process.argv[2])
