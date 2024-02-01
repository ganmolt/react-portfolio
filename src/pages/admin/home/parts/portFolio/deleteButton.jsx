import axios from "axios";
import Cookies from "js-cookie";

export const DeleteButton = ({
  id,
}) => {
  const handleFormSubmit = () => {
    
  };

  const deleteButtonClick = async (id) => {
    console.log(id);
    try {
      const res = await axios.delete(`${process.env.REACT_APP_API}/admin/works/${id}`,
      {
        headers: {
          "access-token": Cookies.get("_access_token"),
        },
      });
    } catch (e) {
      console.log(e);
    }
  }
  return ( 
    <>
      <button onClick={() => deleteButtonClick(id)}> 削除 </button>
    </>
  );
}
