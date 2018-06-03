const Mastodon = require('mastodon-api');
const fs = require('fs');
const path = require('path');

const instanceUri = 'https://pawoo.net';
const clientName = 'MasdonCli';
const saveFile = path.join(__dirname, 'cli-app.json');

Mastodon.createOAuthApp(instanceUri + '/api/v1/apps', clientName)
	.catch(err => console.error(err))
	.then(res => {
    console.log(res);
    fs.writeFileSync(saveFile, JSON.stringify(res))
	});
