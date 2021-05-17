import Producto from '../models/producto';

const cafeteriaCtrl={};

cafeteriaCtrl.getPrueba = (req, res)=>{
    res.send('prueba desde el controlador')
};

cafeteriaCtrl.crearProducto = async(req, res)=>{
    // console.log(req.body)
    try{
        // crear un objeto que posteriormente guardo en la BD
        const nuevoProducto = new Producto({
            nombreProducto: req.body.nombreProducto,
            precioProducto: req.body.precioProducto,
            categoria: req.body.categoria
        });
        // guardar en la bd
        await nuevoProducto.save();
        res.status(201).json({
            mensaje: 'Se agrego un nuevo producto'
        });
    }catch(error){
        console.log(error)
        res.status(500).json({
            mensaje: 'error al agregar un producto'
        });
    }
}

cafeteriaCtrl.listarProductos = async(req, res)=>{
    try{
        // obtener un arreglo de productos
        const arregloProductos = await Producto.find();
        res.status(200).json(arregloProductos);
    }catch(error){
        console.log(error);
        res.status(404).json({
            mensaje:'no se pudo enviar la lista de productos'
        });
    }
}

cafeteriaCtrl.eliminarProducto = async(req, res)=>{
    // console.log(req.params.id)
    try{
        await Producto.findByIdAndDelete(req.params.id);
        res.status(200).json({
            mensaje: 'El producto fue eliminado correctamente'
        })
    }catch(error){
        console.log(error);
        res.status(404).json({
            mensaje: 'No se encontro el objeto y no pudo ser eliminado'
        });
    }
}

cafeteriaCtrl.editarProducto = async(req, res)=>{
    try{
        await Producto.findByIdAndUpdate(req.params.id, req.body);
        res.status(200).json({
            mensaje: 'El producto fue modificado'
        })
    }catch(error){
        console.log(error);
        res.status(404).json({
            mensaje: 'No se pudo editar el producto'
        });
    }
}

cafeteriaCtrl.obtenerProducto = async (req, res) =>{
    try{
        // Obtener un producto
        const productoEncontrado = await Producto.findById(req.params.id);
        res.status(200).json(productoEncontrado);
    }catch(error){
        console.log(error);
        res.status(404).json({
            mensaje: 'No se entro el producto'
        });
    }
}

export default cafeteriaCtrl;