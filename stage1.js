const express = require('express');
const moment = require('moment');

const app = express();
const port = process.env.PORT || 3000;

app.get('/api', (req, res) => {
  // Get query parameters from the request
  const { slack_name, track } = req.query;

  // Get the current day of the week in full
  const currentDay = moment().utc().format('dddd');

  // Get the current UTC time with validation of +/-2 minutes
  const currentUTCTime = moment().utc().format('YYYY-MM-DDTHH:mm:ss[Z]');

  // Construct GitHub URLs
  const githubFileURL = 'https://github.com/username/repo/blob/main/file_name.ext';
  const githubRepoURL = 'https://github.com/username/repo';

  // Prepare the JSON response
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
