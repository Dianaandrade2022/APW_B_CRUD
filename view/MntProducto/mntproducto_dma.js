var tabla;

function init() {

}

$(document).ready(function(){
    tabla=$('#producto_data').dataTable({
        //Activamos el procesamiento del datatables
        "aProcessing": true, 
        //Paginación y filtrado realizados por el servidor
        "aServerSide": true, 
        //Definimos los elementos del control de tabla
        dom: 'Bfrtip',
        buttons: [
                    'copyHtml5',
                    'excelHtml5',
                    'csvHtml5',
                    'pdf'
                ],
        "ajax":{
            url: '../../controller/producto.php?op=listar',
            type : "get",
            dataType : "json",
            error: function(e){
                console.log(e.responseText);
            }
        },
        "bDestroy": true,
        "responsive": true,
        "bInfo": true,
        "iDisplayLength": 10,//Por cada 10 registros hace una paginacion
        "order": [[0, "asc"]],//Ordenar (columna,orden)
        "Language": {
            "sProcessing":  "Procesando...",
            "sLengthMenu":  "Mostrar _MENU_ registros",
            "sZeroRecords": "No se encontraron resultados",
            "sEmptyTable":  "Ningun dato disponible en esta tabla",
            "sInfo":        "Mostrando un total de _TOTAL_ registros",
            "sInfoEmpty":   "Mostrando un total de 0 registros",
            "sInfoFiltered": "(Filtrado de un total de _MAX_ registros)",
            "sInfoPostFix":  "",
            "sSearch":      "Buscar:",
            "sUrl":         "",
            "sInfoThousand":    ",",
            "sLoadingRecords": "Cargando...",
            "oPaginate": {
                "sFirst":   "Primero",
                "sLast":    "Ultimo",
                "sNext":    "Siguiente",
                "sPrevious":    "Anterior"
            },
            "oAria": {
                "sSortAscending": ": Activar para ordenar la columna de manera ascendente",
                "sSortDescending": ": Activar para ordenar la columna de manera descendente"
            }
        }
    }).dataTable();
});

function editar(prod_id) {
    console.log(prod_id)
}

function eliminar(prod_id) {
    console.log(prod_id)
}

init ();