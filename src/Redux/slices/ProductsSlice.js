
import { createSlice } from "@reduxjs/toolkit";

export const productSlice = createSlice({
    name: "product",
    initialState: { products: [], carroItems: 0, selectProducts: [], precioFinal: 0, allCategories: [], totalPrice: 0, totalBuy: 0 },
    reducers: {
        getAll: (state, payload) => {
            state.products = payload.payload;
        },
        itemsCart: (state, payload) => {
            state.carroItems = state.carroItems + payload.payload.cantidad
            state.selectProducts.push(payload.payload)
        },
        compra: (state, payload) => {
            state.carroItems = 0
            state.selectProducts = []
            state.precioFinal = 0

        },
        getPrecioFinal: (state, payload) => {
            state.precioFinal = parseFloat(payload.payload)
        },
        getAllCategories: (state, payload) => {
            let categories = payload.payload;
             state.allCategories = [...categories]            
             
          },
          
                 
        getTotalPrice: (state, payload) => {
            state.totalPrice = payload.payload
        },
        getTotalBuy: (state, payload) => {
            state.totalBuy = payload.payload

        }, 
        updateItemsCart: (state, payload) => {
            // BUSCANDO ELEMENTO POR ID EN ITEMS SELECCIONADOS
            let products = state.selectProducts
            let posicion = products.findIndex(
                (item) => item.element.id == payload.payload.elementId
            );

            let elementoEnPosicion = state.selectProducts[posicion];
            elementoEnPosicion.cantidad += payload.payload.cantidad

            // RECALCULANDO LOS ITEMS Y PRECIO
            const cantidades = state.selectProducts.map((item) => {
                const cantidad = parseInt(item.cantidad)
                const price = parseFloat(item.element.price)
                // SI HAY MAS DE 1 PRODUCTO 
                if (state.selectProducts.length > 1) {
                    const cantidades2 = state.selectProducts.map((item) => item.cantidad)
                    const totalCantidades2 = cantidades2.reduce((total, cantidad2) => total + cantidad2, 0);

                    state.carroItems = totalCantidades2
                    state.precioFinal = cantidad * price
                    console.log("ENTRO", totalCantidades2)
                    return
                }
                state.carroItems = cantidad
                state.precioFinal = cantidad * price

                console.log(cantidad, state.carroItems, price, state.precioFinal)
            });
        },
        deleteItemsCart: (state, payload) => {
            // BUSCANDO ELEMENTO POR ID EN ITEMS SELECCIONADOS

            let products = state.selectProducts
            let id = payload.payload.id

            let posicion = products.findIndex(
                (item) => item.element.id == id
            );
            let elementoEnPosicion = state.selectProducts[posicion];
            const ope = elementoEnPosicion.cantidad -= payload.payload.cantidad

            // VALIDANDO SI ESTA EN 0 EL ELEMENTO
            if (elementoEnPosicion.cantidad <= 0) {
                state.selectProducts.splice(posicion, 1);

                console.log('Esta En 0')
                if (products.length <= 0) {
                    state.carroItems = 0
                }
            }

            // RECALCULANDO LOS ITEMS Y PRECIO
            const cantidades = products.map((item) => {
                const cantidad = parseInt(item.cantidad)
                const price = parseFloat(item.element.price)
                const cantidades2 = state.selectProducts.map((item) => item.cantidad)
                const totalCantidades2 = cantidades2.reduce((total, cantidad2) => total + cantidad2, 0);

                state.carroItems = totalCantidades2
                state.precioFinal = cantidad * price
            });

        }
    }
})


export const { getAll, itemsCart, getPrecioFinal, updateItemsCart, deleteItemsCart, getAllCategories, getTotalPrice, getTotalBuy, compra } = productSlice.actions