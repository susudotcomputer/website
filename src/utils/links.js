export const titleToId = title => {
  return title.replace(/[\s&]/, '-').toLowerCase();
};
