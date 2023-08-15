import { PulseLoader } from "react-spinners";

import useThreadsData from "../../hooks/useThreadsData";
import Thread from "../Thread";

const Dashboard = () => {
  const threadsData = useThreadsData();

  if (threadsData.isLoading) {
    return (
      <div className="py-[50vh] flex justify-center align-middle items-center">
        <PulseLoader color="gray" />
      </div>
    );
  } else if (
    threadsData.threads.length === 0 &&
    threadsData.isLoading === false
  ) {
    return <div className="text-white text-center">No threads found.</div>;
  }

  return (
    <div>
      {/* thread */}
      {threadsData.threads?.map((thread) => {
        return (
          <Thread
            key={thread.id}
            id={thread.id}
            title={thread.title}
            url={thread.url}
            author={thread.by}
            points={thread.score}
            createdAt={thread.time}
            commentTotal={thread.descendants}
          />
        );
      })}
      {/* <Thread
        key={thread.id}
        title={thread.title}
        url={thread.url}
        author={thread.author}
        points={thread.points}
        createdAt={thread.createdAt}
        commentTotal={thread.children.length}
      /> */}

      {/* <Thread url="www.google.com" /> */}
    </div>
  );
};

export default Dashboard;
