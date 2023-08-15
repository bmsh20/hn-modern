async function fetchFrontpage() {
  const apiRes = await fetch(
    `http://hn.algolia.com/api/v1/search?tags=front_page`
  );

  if (!apiRes.ok) {
    throw new Error(`fetchThreads not working`);
  }

  return apiRes.json();
}

export default fetchFrontpage;
