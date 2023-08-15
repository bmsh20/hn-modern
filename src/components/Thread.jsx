import { TbMessage, TbLink, TbBookmark } from "react-icons/tb";
import moment from "moment";

const Thread = (props) => {
  const { id, title, url, author, points, createdAt, commentTotal } = props;
  let urlObj;

  const threadDateFromNow = moment
    .unix(createdAt)
    .local()
    .startOf("seconds")
    .fromNow();

  try {
    if (url != null) {
      urlObj = new URL(url);
    }
  } catch (e) {
    console.error("failed to create url");
  }

  return (
    <div className="mx-4 py-2 flex gap-2 border-b-2 border-y-[#272727]">
      <div className="text-white col-span-2 w-[80%]">
        <span>
          <a
            href={url}
            className="ml-2 text-base font-semibold leading-6 break-words inline-block"
          >
            {title}
          </a>
          {url ? (
            <a
              href={url}
              className="block ml-2 text-[#8C8C8C] text-sm font-normal truncate"
            >
              ({urlObj.host})
            </a>
          ) : null}
        </span>
        <ul className="flex gap-2 text-sm text-[#8C8C8C] font-medium ml-2 mt-1">
          <li>
            <h3>{points} points</h3>
          </li>
          <li>
            <h3>{author}</h3>
          </li>
          <li>
            <h3>{threadDateFromNow}</h3>
          </li>
        </ul>
      </div>
      <div className="m-auto text-center flex gap-4">
        <div>
          <button
            className="py-1 pl-2 pr-4 rounded-xl flex gap-1 align-middle text-center items-center bg-[#272727] hover:bg-[#2e2e2e]"
            onClick={() => {
              window.location.href = `https://news.ycombinator.com/item?id=${id}`;
            }}
          >
            <TbMessage size={30} className="text-white m-auto" />
            <h3 className="text-white text-center text-sm">{commentTotal}</h3>
          </button>
        </div>
        <div className="hidden m-auto lg:block ">
          <button
            className="py-1 pl-2 pr-4 rounded-xl flex gap-1 align-middle text-center items-center bg-[#272727] hover:bg-[#2e2e2e]"
            onClick={() => {
              // copies thread link to clipboard
            }}
          >
            <TbLink size={30} className="text-white m-auto" />
            <h3 className="text-white text-center text-sm font-medium">
              Copy Thread Link
            </h3>
          </button>
        </div>
        <div className="hidden m-auto lg:block">
          <button
            className="py-1 pl-2 pr-4 rounded-xl flex gap-1 align-middle text-center items-center bg-[#272727] hover:bg-[#2e2e2e]"
            onClick={() => {
              // save functionality
            }}
          >
            <TbBookmark size={30} className="text-white m-auto" />
            <h3 className="text-white text-center text-sm font-medium">Save</h3>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Thread;
