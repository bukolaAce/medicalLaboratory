// eslint-disable-next-line react/prop-types
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faX } from "@fortawesome/free-solid-svg-icons";
// eslint-disable-next-line react/prop-types
const Modal2 = ({ content, onClose }) => {
  return (
    <div className="fixed inset-0 p-4 flex flex-wrap justify-center items-center w-full h-full z-[1000] before:fixed before:inset-0 before:w-full before:h-full before:bg-[rgba(0,0,0,0.5)] overflow-auto font-[sans-serif]">
      <div className="relative w-full max-w-lg p-6 bg-white rounded-md shadow-lg">
        <div className="  w-3.5 cursor-pointer shrink-0 fill-black hover:fill-red-500 float-right">
          <button className="text-xl text-blue-500" onClick={onClose}>
            <FontAwesomeIcon icon={faX} />
          </button>
        </div>
        <p className="text-red-500">{content}</p>
      </div>
    </div>
  );
};

export default Modal2;
