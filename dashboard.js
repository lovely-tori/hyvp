// Cargar productos desde el localStorage
function cargarProductos() {
    const productos = JSON.parse(localStorage.getItem('productos')) || [];
    const listaProductos = document.getElementById('lista-productos');

    listaProductos.innerHTML = '';  // Limpiar la lista antes de agregar productos

    productos.forEach(producto => {
        const div = document.createElement('div');
        div.innerHTML = `
            <h3>${producto.nombre}</h3>
            <p>${producto.descripcion}</p>
            <p><strong>Precio:</strong> $${producto.precio}</p>
            <button class="btn-editar-producto">Editar</button>
            <button class="btn-eliminar-producto">Eliminar</button>
        `;
        listaProductos.appendChild(div);
    });
}

// Cargar usuarios desde el localStorage
function cargarUsuarios() {
    const usuarios = JSON.parse(localStorage.getItem('usuarios')) || [];
    const listaUsuarios = document.getElementById('lista-usuarios');

    listaUsuarios.innerHTML = '';  // Limpiar la lista antes de agregar usuarios

    usuarios.forEach(usuario => {
        const div = document.createElement('div');
        div.innerHTML = `
            <h3>${usuario.nombre} ${usuario.apellido}</h3>
            <p>Email: ${usuario.email}</p>
        `;
        listaUsuarios.appendChild(div);
    });
}

// Función para agregar un producto (simulada)
document.getElementById('btn-agregar-producto').addEventListener('click', function() {
    const productos = JSON.parse(localStorage.getItem('productos')) || [];
    productos.push({
        nombre: "Producto Nuevo",
        descripcion: "Descripción del producto nuevo",
        precio: "100"
    });
    localStorage.setItem('productos', JSON.stringify(productos));
    cargarProductos();
});

// Función para agregar un usuario (simulada)
document.getElementById('btn-agregar-usuario').addEventListener('click', function() {
    const usuarios = JSON.parse(localStorage.getItem('usuarios')) || [];
    usuarios.push({
        nombre: "Nuevo Usuario",
        apellido: "Apellido",
        email: "usuario@ejemplo.com"
    });
    localStorage.setItem('usuarios', JSON.stringify(usuarios));
    cargarUsuarios();
});

// Llamar a las funciones de carga al cargar la página
window.onload = function() {
    cargarProductos();
    cargarUsuarios();
};
