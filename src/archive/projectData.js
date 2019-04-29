export const projects = [
  {
    year: 2018,
    type: 'Album art',
    started: '2018-11-20',
    title: 'Unicore Album Cover'
  },
  {
    year: 2018,
    type: 'Event',
    started: '2018-12-09',
    title: 'SuSuSunday'
  },
  {
    year: 2018,
    type: 'Event',
    started: '2018-12-09',
    title: "Snackalong: Ocean's Eleven",
    route: '/snackalong'
  },
  {
    year: 2017,
    type: 'Web',
    started: '2017-08-03',
    title: 'Overcast Web Player Reskin'
  },
  {
    year: 2016,
    type: 'Magazine',
    started: '2016-03-15',
    title: 'Fortunate Horse Issue 2 + 3'
  }
];

export const things = [
  {
    title: 'Lexicon'
  },
  {
    title: 'Good Time, Fun Times'
  },
  {
    title: 'Flotsam & Jetsam'
  }
];

export const projectYears = [
  ...new Set(projects.reduce((accum, p) => accum.concat(p.year), []))
].sort((a, b) => b - a);
