import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { getVgameByName } from "../../redux/actions";
import Loading from "../Loading/Loading";

const SearchBar = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [loading, setLoading] = useState(false);

  const handleInputChange = (e) => {
    e.preventDefault();
    setName(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await dispatch(getVgameByName(name));
      setLoading(false);
    } catch (e) {
      console.log("Handle errors here");
    }
    setName("");
  };

  return (
    <form
      onSubmit={(e) => {
        handleSubmit(e);
      }}
    >
      {loading ? (
        <Loading />
      ) : (
        <div>
          <input
            type="text"
            value={name}
            onChange={handleInputChange}
            placeholder="Search for a Vgame"
          />
          <button>Search</button>
        </div>
      )}
    </form>
  );
};

//     <div>
//       <form
//         onSubmit={(e) => {
//           handleSubmit(e);
//         }}
//       >
//         <input
//           type="text"
//           name="name"
//           value={name}
//           placeholder="Search videogame"
//           onChange={(e) => {
//             handleInputChange(e);
//           }}
//         />
//         {name ? <button type="submit">Search</button> : <button>Search</button>}
//       </form>
//     </div>
//   );
// };

export default SearchBar;
