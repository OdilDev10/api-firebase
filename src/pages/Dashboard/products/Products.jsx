import React from "react";
import Header from "../../../components/Header";
import { useDispatch, useSelector } from "react-redux";
import Footer from "../../../components/Footer";
import MenuIzquierda from "../../../components/MenuIzquierda";
import Disponible from "../../../components/Disponible";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { eliminar } from "../../../Metodos/products";
import Spinner from "../../../components/Spinner";
import MenuDerecha from "../../../components/MenuDerecha";

function Products() {
  const { products } = useSelector((state) => state.products);
  const distpatch = useDispatch();
  const navigate = useNavigate();

  return (
    <div>
      <div className="container">
        <Header />

        <div>
          <div className="table-responsive">
            <table
              className="table table-striped
                    table-hover	
                    table-borderless
                    table-primary
                    align-middle"
            >
              <thead className="table-light">
                <caption>Products</caption>
                <tr>
                  <th>Column 1</th>
                  <th>Column 2</th>
                  <th>Column 3</th>
                  <th>Column 4</th>
                  <th>Column 5</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody className="table-group-divider">
                <tr className="table-primary">
                  <td scope="row">ID</td>
                  <td>Name</td>
                  <td>Price</td>
                  <td>Picture</td>
                  <td>Available</td>
                  <td>Actions</td>
                </tr>

                {products.length > -1 ? (
                  products.map((item) => {
                    return (
                      <tr className="table-primary" key={item.id}>
                        <td scope="row">{item.id}</td>
                        <td>{item.name}</td>
                        <td>{item.price}</td>
                        <td>
                          <img src={item.picture} height={50} alt={item.name} />
                        </td>
                        <td>
                          <Disponible item={item} />
                        </td>
                        <td>
                          <Link
                            to={"/detalles/" + item.id}
                            className="btn btn-success"
                            value={item.id}
                          >
                            Update
                          </Link>
                          <button
                            className="btn btn-danger"
                            onClick={(e) => {
                              eliminar(e, item.id);
                              location.reload();

                            }}
                            value={item.id}
                          >
                            Delete
                          </button>
                        </td>
                      </tr>
                    );
                  })
                ) : (
                  <Spinner />
                )}
              </tbody>
              <tfoot></tfoot>
            </table>
          </div>
        </div>
      </div>
      <MenuIzquierda />
    <MenuDerecha/>
      <Footer />
    </div>
  );
}

export default Products;
