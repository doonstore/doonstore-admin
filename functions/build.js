const fs = require('fs-extra');
const childProcess = require('child_process');

try {
    fs.removeSync('./lib/');
    fs.copySync('./src/views', './lib/views');
    const proc = childProcess.exec('tsc --build tsconfig.prod.json');
    proc.on('close', (code) => {
        if (code !== 0) {
            throw Error("Build failed");
        }
    });
} catch (err) {
    console.log(err);
}
