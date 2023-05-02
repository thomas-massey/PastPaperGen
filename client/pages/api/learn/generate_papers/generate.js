const fileSystem = require('fs');
const path = require('path');

var filePath = path.join(process.cwd(), 'public', 'papers', 'paper.pdf');
var stat = fileSystem.statSync(filePath);

export default async function handler(req, res) {
    // Create a paper ID

    // Check if the paper ID exists

    // Create the paper

    // Return the paper
    res.writeHead(200, {
        'Content-Type': 'application/pdf',
        'Content-Length': stat.size
    });
    var readStream = fileSystem.createReadStream(filePath);
    readStream.pipe(res);
}