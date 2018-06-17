const Mastodon = require('mastodon-api');
const fs = require('fs');
const path = require('path');

const instanceUri = 'https://pawoo.net';
const token = fs.readFileSync(path.join(__dirname, 'token.json'));

const M = new Mastodon({
  access_token: token,
  timeout_ms: 60 * 1000,
  api_url: instanceUri + '/api/v1/'
});


// tootする
M.post('statuses', { status: 'test 2018/06/05' },
  (err, data, res) => {
    if (err) {
      console.log(err);
      return
    }

    console.log('response: ', res)
  });