const express = require('express');
const moment = require('moment');

const app = express();
const port = process.env.PORT || 3000;

app.get('/api', (req, res) => {
  const { slack_name, track } = req.query;

  const currentDay = moment().utc().format('dddd');

  const currentUTCTime = moment().utc().format('YYYY-MM-DDTHH:mm:ss[Z]');

  const githubFileURL = 'https://github.com/itsralia/stage1/blob/main/stage1.js';
  const githubRepoURL = 'https://github.com/itsralia/stage1';

  const jsonResponse = {
    slack_name,
    current_day: currentDay,
    utc_time: currentUTCTime,
    track,
    github_file_url: githubFileURL,
    github_repo_url: githubRepoURL,
    status_code: 200,
  };

  res.json(jsonResponse);
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
