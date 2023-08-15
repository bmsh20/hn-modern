import fetchThreadById from "../api/fetchThreadById";

async function fetchSearch(searchTerm) {
  const res = await fetch(
    `http://hn.algolia.com/api/v1/search?query=${searchTerm}&tags=story`
  );

  if (!res.ok) {
    throw new Error("fetchSearch fail");
  }

  // res now contains a list of all threads data
  // must construct an object identical to HN's response data
  // use res data to create apiRes object, containing all IDs of all threads
  // call fetchThread on each ID
  // return this output

  // terrible i know, but ill do it anyway
  const resJson = await res.json();

  const threadList = [];

  await resJson.hits.map((item) => {
    threadList.push(item.objectID);
  });

  const apiResPromise = threadList.map((id) => fetchThreadById(id));
  const apiRes = await Promise.all(apiResPromise);

  console.log(apiRes);
  return apiRes;
}

export default fetchSearch;
