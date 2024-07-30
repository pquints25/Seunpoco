//operando arreglos con objetos
let productos = [
{
    codigo: '1233643643',
    precioUnitario: 600
},

{
    codigo: '123362352123',
    precioUnitario: 700
},

{
    codigo: '123362354335',
    precioUnitario: 1000
},

{
    codigo: '529562057',
    precioUnitario: 5000
},

];

productos.forEach(function(producto){
    console.log(`cogido: ${producto.codigo}, precio unitario: ${producto.precioUnitario}`);
});

//aplicar 10% de descuento a cada producto, mantener los precios originales en un arreglo
let preciosAl10Descuento = productos.map(function(producto){
return{ codigo: producto.codigo,
        precioUnitario: producto.precioUnitario *0.9
}
});

console.log(preciosAl10Descuento);

//mostrar el listado de productos que tiene un valor de 1000 o superior
let productosFiltrados = productos.filter(function(producto){
    return producto.precioUnitario >= 1000;

});

console.log(productosFiltrados)