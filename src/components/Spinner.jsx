import PulseLoader from "react-spinners/SyncLoader";

const override = {
  margin: "auto",
};

const Spinner = (props) => {
  const { color, isLoading, size } = props;

  return (
    <PulseLoader
      color={`${color}`}
      loading={`${isLoading}`}
      cssOverride={override}
      size={`${size}`}
    />
  );
};

export default Spinner;
