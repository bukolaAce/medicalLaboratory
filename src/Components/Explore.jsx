

// eslint-disable-next-line react/prop-types
const Explore = ({ buttonText, modalContent, onButtonClick }) => {
  return (
    <button
      className="px-6 py-2 mt-8 text-sm font-semibold border-2 border-white rounded outline-none"
      onClick={() => onButtonClick(modalContent)}
    >
      {buttonText}
    </button>
  );
}

export default Explore