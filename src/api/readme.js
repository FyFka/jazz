export const getReadme = async (signal) => {
  const response = await fetch("https://raw.githubusercontent.com/FyFka/jazz/master/README.md", { signal });
  const readme = await response.text();
  return readme;
};
