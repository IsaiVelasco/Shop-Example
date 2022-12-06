class Controller{
    findAll(){
        return productos;
    }
    
    findAllById(id){
        let result;
        productos.forEach(producto => {
            if(producto.id == id){
                result = producto;
            }
        });
        return result;
    }
    
    create(descripcion, precio){
        productos.push(new Producto(productos.length+1, descripcion, precio))
    }
    
    update(id, descripcion, precio){
        productos.forEach(producto => {
            if(producto.id == id){
                producto.descripcion = descripcion;
                producto.precio = precio;
            }
        });
    }
    
    deleteById(id){
        productos = productos.filter(item => item.id != id);
    }
}