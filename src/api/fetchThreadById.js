async function fetchThreadById(threadId) {
  const res = await fetch(
    `https://hacker-news.firebaseio.com/v0/item/${threadId}.json`
  );

  if (!res.ok) {
    throw new Error("fetchThreadById err");
  }
  const apiRes = await res.json();

  return apiRes;
}

export default fetchThreadById;
