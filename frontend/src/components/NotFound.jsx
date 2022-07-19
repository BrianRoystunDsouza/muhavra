import {TbError404} from "react-icons/tb"

const NotFound = () => {
  return (
    <div className="not-found">
      <h2>ERROR </h2><TbError404 size={90}/>
      <p>Coffee not found...</p>
    </div>
  );
};

export default NotFound;
