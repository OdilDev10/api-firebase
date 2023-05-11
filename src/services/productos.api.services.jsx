 export const peticionProducto = async () => {
    console.log("PIDIENDO PRODUCTOS");

    const url =
        "https://flutter-varios-1db01-default-rtdb.firebaseio.com/products.json";
    let petcion_get = await fetch(url);
    let respuesta = await petcion_get.json();
    let respuesta_array = Object.values(respuesta);
    let ids = Object.keys(respuesta);

    const productsWithIds = respuesta_array.map((product, index) => {
        return { ...product, id: ids[index] };
    });
    return productsWithIds
};


