async function fetchThreads(filterTag) {
  const tag = filterTag;

  const apiRes = await fetch(`http://hn.algolia.com/api/v1/search?tags=${tag}`);

  if (!apiRes.ok) {
    throw new Error(`fetchThreads not working`);
  }

  return apiRes.json();
}

export default fetchThreads;
