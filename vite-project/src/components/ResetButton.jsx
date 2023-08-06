
const ResetButton = ({ count, onClick }) => {
  return (
    count > 0 && (
      <div>
        <button onClick={onClick}>Reset </button>
      </div>
    )
  );
};

export default ResetButton