import { useParams } from "react-router-dom";

const Actors = () => {
  const { id } = useParams();
  return <div>Actors{id}</div>;
};
export default Actors;
