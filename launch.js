const CDP = require('chrome-remote-interface')
const cp = require('child_process')

const sleep = (delay) => new Promise((resolve) => setTimeout(resolve, delay))

function launchBrowser() {
    const args = [
        'about:blank',
        '--test-type',
        '--ignore-certificate-errors',
        '--start-maximized',
        '--silent-debugger-extension-api',
        '--no-default-browser-check',
        '--no-first-run',
        '--noerrdialogs',
        '--enable-fixed-layout',
        '--disable-popup-blocking',
        '--disable-password-generation',
        '--disable-single-click-autofill',
        '--disable-prompt-on-repos',
        '--disable-background-timer-throttling',
        '--disable-renderer-backgrounding',
        '--disable-renderer-throttling',
        '--disable-backgrounding-occluded-windows',
        '--disable-restore-session-state',
        '--disable-new-profile-management',
        '--disable-new-avatar-menu',
        '--allow-insecure-localhost',
        '--reduce-security-for-testing',
        '--enable-automation',
        '--disable-print-preview',
        '--disable-component-extensions-with-background-pages',
        '--disable-device-discovery-notifications',
        '--autoplay-policy=no-user-gesture-required',
        '--disable-site-isolation-trials',
        '--metrics-recording-only',
        '--disable-prompt-on-repost',
        '--disable-hang-monitor',
        '--disable-sync',
        '--disable-web-resources',
        '--safebrowsing-disable-download-protection',
        '--disable-client-side-phishing-detection',
        '--disable-component-update',
        "--simulate-outdated-no-au='Tue, 31 Dec 2099 23:59:59 GMT'",
        '--disable-default-apps',
        '--disable-features=Translate',
        '--use-fake-ui-for-media-stream',
        '--use-fake-device-for-media-stream',
        '--disable-ipc-flooding-protection',
        '--disable-backgrounding-occluded-window',
        '--disable-breakpad',
        '--password-store=basic',
        '--use-mock-keychain',
        '--disable-dev-shm-usage',
        '--enable-precise-memory-info',
        '--disable-gpu',
        '--no-sandbox',
        '--proxy-server=http://localhost:' + process.argv[2],
        '--proxy-bypass-list=<-loopback>',
        '--remote-debugging-port=9222',
        '--remote-debugging-address=127.0.0.1',
    ]

    cp.spawn('/usr/bin/chromium', args)
}

async function main() {
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
