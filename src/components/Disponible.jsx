import React from "react";
// import { useDispatch, useSelector } from "react-redux";

function Disponible({ item }) {
  // const {user} = useSelector(state => state.user)
  // const dispatch = useDispatch()  

  return (
    <div>
      {item.stock > 0 ? (
        <span className="mi-background-verde rounded-pill p-2">
          On {item.stock}
        </span>
      ) : (
        <span className="mb bg-danger rounded-pill p-2">Off 0</span>
      )}
    </div>
  );
}
 
export default Disponible;
