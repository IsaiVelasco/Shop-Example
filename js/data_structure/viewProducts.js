var _controller = new Controller();

updateIndexTable();
function updateIndexTable(){
   var tableProducts = document.getElementById('product-table')
   tableProducts.innerHTML = `
   <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
      <tr>
         <th scope="col" class="p-4">
            <div class="flex items-center">
                  <input id="checkbox-all-search" type="checkbox"
                     class="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                  <label for="checkbox-all-search" class="sr-only">checkbox</label>
            </div>
         </th>
         <th scope="col" class="py-3 px-6">
            Codigo
         </th>
         <th scope="col" class="py-3 px-6">
            Descripcion
         </th>
         <th scope="col" class="py-3 px-6">
            Precio
         </th>
         <th scope="col" class="py-3 px-6">
            Accion
         </th>
      </tr>
   </thead>
   <tbody>
   </tbody> `
   var results = _controller.findAll();
   results.forEach(producto => {
      var fila = document.createElement('tr');
      fila.className = 'bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600';
      fila.onclick = "showData(producto.id)";
      fila.innerHTML = `<td class="p-4 w-4">
         <div class="flex items-center">
            <input id="checkbox-table-search-3" type="radio" onclick="showData(${producto.id})"
                  class="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
            <label for="checkbox-table-search-3" class="sr-only">checkbox</label>
         </div>
      </td>
      <td class="py-4 px-6">
         ${producto.id}
      </td>
      <th scope="row"
         class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
         ${producto.descripcion}
      </th>            
      <td class="py-4 px-6">
         $${producto.precio}
      </td>
      <td class="flex items-center py-4 px-6 space-x-3">
         <a href="#"
            class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
         <a href="#" onclick="executeDelete(${producto.id})"
            class="font-medium text-red-600 dark:text-red-500 hover:underline">Remove</a>
      </td>`

      tableProducts.insertAdjacentElement('beforeEnd', fila);
   });
}

function executeCreate(){

   updateInputForProduct();
   _controller.create(descripcion, precio);
   updateIndexTable();
   
}

function executeUpdate(){
   updateInputForProduct();
   _controller.update(id, descripcion, precio)
   updateIndexTable();
}

function showData(id){
   alert(id);
}

function executeDelete(id){
   alert(id)
   _controller.deleteById(id);
   updateIndexTable();
}


var id;
var descripcion;
var precio;

function updateInputForProduct(){
   id = document.getElementById('codigo').value;
   descripcion = document.getElementById('descripcion').value;
   precio = document.getElementById('precio').value;
}


