import { TbBrandGithub } from "react-icons/tb";
import ReactIcon from "../../assets/react.svg";

const Footer = () => {
  return (
    <div className="mx-auto border-y-2 border-[#343331] text-white flex flex-col text-center align-middle">
      <p>Made with React</p>
      <div className="flex mx-auto gap-2">
        <button>
          <TbBrandGithub size={30} className="inline" />
          <span className="text-center align-middle">nobadev</span>
        </button>
      </div>
    </div>
  );
};

export default Footer;
