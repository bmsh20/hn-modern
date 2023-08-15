import fetchThreadById from "./fetchThreadById";

async function fetchThreadsByCategory(filterTag) {
  const tag = filterTag;

  const res = await fetch(`https://hacker-news.firebaseio.com/v0/${tag}.json`);

  if (!res.ok) {
    throw new Error(`fetchThreads not working`);
  }

  const threadList = await res.json();

  const apiResPromise = threadList.map((id) => fetchThreadById(id));
  const apiRes = await Promise.all(apiResPromise);

  console.log(apiRes);
  return apiRes;
}

export default fetchThreadsByCategory;
