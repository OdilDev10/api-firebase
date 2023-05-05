import React from "react";
import { useAuth } from "../context/AuthContext";

function Disponible({ item }) {
  const auth = useAuth();

  return (
    <div>
      {item.stock > 0 ? (
        <span className="bg-success rounded-pill p-2">
          Available {item.stock}
        </span>
      ) : (
        <span className="mb bg-danger rounded-pill p-2">Off 0</span>
      )}
    </div>
  );
}

export default Disponible;
