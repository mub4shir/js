const data = [
  {
    title: 'Add More Inspirational Quotes',
    link: 'https://github.com/vinitshahdeo/inspirational-quotes/issues/4',
    labels: ['good first issue', 'help wanted', 'hacktoberfest'],
    state: 'open',
    comments: 2,
    createdAt: 'Monday, October 11th 2021',
  },
  {
    title:
      'Create a React App to filter Hacktoberfest issues on the basis of languages and labels',
    link: 'https://github.com/vinitshahdeo/hacktoberfest-issue-hunt/issues/1',
    labels: ['good first issue', 'help wanted', 'hacktoberfest'],
    state: 'open',
    comments: 5,
    createdAt: 'Sunday, October 10th 2021',
  },
];

console.log(data.map((d) => d.title));
