const fs    = require('fs')
const path  = require('path')
const bin   = path.join(__dirname, '..', 'bin')

// TODO: maybe add binary versions?

fs.rename(path.join(bin, 'server-win64.exe'),   path.join(bin, `nexrender-server-win64.exe`), () => {});
fs.rename(path.join(bin, 'server-linux'),       path.join(bin, `nexrender-server-linux`), () => {});
fs.rename(path.join(bin, 'server-macos'),       path.join(bin, `nexrender-server-macos`), () => {});

fs.rename(path.join(bin, 'worker-win64.exe'),   path.join(bin, `nexrender-worker-win64.exe`), () => {});
fs.rename(path.join(bin, 'worker-macos'),       path.join(bin, `nexrender-worker-macos`), () => {});

fs.rename(path.join(bin, 'cli-win64.exe'),      path.join(bin, `nexrender-cli-win64.exe`), () => {});
fs.rename(path.join(bin, 'cli-macos'),          path.join(bin, `nexrender-cli-macos`), () => {});
