import { useContext } from "react";
import Button from "../Button";
import { ThreadContext } from "../../context/context";

import {
  TbChartBar,
  TbCode,
  TbMessageQuestion,
  TbBriefcase,
  TbStarFilled,
} from "react-icons/tb";

const Sidenav = () => {
  const { filterTag, setFilterTag } = useContext(ThreadContext);

  const handleButton = (buttonTag) => {
    setFilterTag(buttonTag);
  };

  // evaluates to true if filterTag === buttonTag
  const isActive = (buttonTag) => filterTag === buttonTag;

  return (
    <div className="m-2 pb-2 grid grid-flow-col gap-5 overflow-x-auto snap-mandatory scroll-p-4 font-semibold ">
      <Button
        onClick={() => handleButton("topstories")}
        active={isActive("topstories")}
        icon={<TbChartBar size={20} />}
        name="Trending"
      ></Button>
      <Button
        onClick={() => handleButton("newstories")}
        active={isActive("newstories")}
        icon={<TbStarFilled size={20} />}
        name="New"
      ></Button>
      <Button
        onClick={() => handleButton("showstories")}
        active={isActive("showstories")}
        icon={<TbCode size={20} />}
        name="Show"
      ></Button>
      <Button
        onClick={() => handleButton("askstories")}
        active={isActive("askstories")}
        icon={<TbMessageQuestion size={20} />}
        name="Ask"
      ></Button>

      <Button
        onClick={() => handleButton("jobstories")}
        active={isActive("jobstories")}
        icon={<TbBriefcase size={20} />}
        name="Jobs"
      ></Button>
    </div>
  );
};

export default Sidenav;
