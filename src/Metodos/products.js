
export const eliminar = async (e, id, nav = '/') => {



    if (confirm("Estas seguro que quieres eliminar?")) {
      try {
        e.preventDefault();
        const url = `https://flutter-varios-1db01-default-rtdb.firebaseio.com/products/${id}.json`;
        const body = {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
          },
        };
        let peticion_delete = await fetch(url, body);
        let respuesta = await peticion_delete.json();

      } catch (error) {
        console.error(error);
      }
    }
    return;
  };



  export const actualizar = async (e, id, productoActualizar) => {
    try {
      e.preventDefault();
      const url = `https://flutter-varios-1db01-default-rtdb.firebaseio.com/products/${id}.json`;
      const body = {
        method: "PUT",
        headers: {},
        body: JSON.stringify(productoActualizar),
      };
      let petcion_put = await fetch(url, body);
      let respuesta = await petcion_put.json();

      
      return petcion_put.status
    } catch (error) {
      console.error(error);
    }
  };

  export const crear = async (e) => {
    try {
      e.preventDefault();
      const url = `https://flutter-varios-1db01-default-rtdb.firebaseio.com/products.json`;
      const body = {
        method: "POST",
        headers: {},
        body: JSON.stringify({
          name: name_input.current.value,
          price: price_input.current.value,
          available: available_input.current.checked,
          picture: picture_input.current.value,
        }),
      };
      let peticion_post = await fetch(url, body);
      let respuesta = await peticion_post.json();

      alert("Creado");
    } catch (error) {
      console.error(error);
    }
  };

