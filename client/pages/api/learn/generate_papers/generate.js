const fileSystem = require('fs');
const path = require('path');

var filePath = path.join(process.cwd(), 'public', 'papers', 'paper.pdf');
var stat = fileSystem.statSync(filePath);

export default async function handler(req, res) {
    // Return the file
    res.writeHead(200, {
        'Content-Type': 'application/pdf',
        'Content-Length': stat.size
    });
    var readStream = fileSystem.createReadStream(filePath);
    readStream.pipe(res);
}