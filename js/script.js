//var xmlhttp  = new XMLHttpRequest();
//var url = "http://localhost/agamiwebprojects/js/jsonData.json";
//xmlhttp.open("GET",url,true)
//xmlhttp.send();


var employee;

$.get("http://localhost/agamiwebprojects/js/jsonData.json", function (data) {
    // var data = JSON.parse(this.responseText);


    /* $('#example').DataTable({
         //ajax: 'data/objects.txt',

         "data": data.data,

         columns: [
             { data: 'id' },
             { data: 'name' },
             { data: 'position' },
             { data: 'office' },
             { data: 'extn' },
             { data: 'start_date' },
             { data: 'salary' },
         ],
         dom: 'Bfrtip',
         buttons: [
             'copy', 'csv', 'excel', 'pdf', 'print'
         ]
     });*/





    employee = $('#example').DataTable({
        "data": data.data,
        "fnRowCallback": function (nRow, aData, iDisplayIndex, rowindex) {
            var index = rowindex + 1;
            $('td:eq(0)', nRow).html(index);
            return nRow;
        },
        columns: [
            { data: null },
            { data: 'name' },
            { data: 'position' },
            { data: 'office' },
            { data: 'extn' },
            { data: 'start_date' },
            { data: 'salary' },
            {
                data: null,


                render: function (data, type, row) {
                    return `<button type="button" class="btn btn-info editbtn" data-bs-toggle="modal" data-bs-target="#exampleModal" data-bs-whatever="@mdo"><i class="fa fa-pencil"/> Edit</button>`
                }
            },
            {

                data: null,


                render: function (data, type, row) {
                    return `<button type="button" class="btn btn-danger"><i class="fa fa-trash"/> Delete </button>`
                }


            }
        ],

        dom: 'Bfrtip',
        buttons: [
            'copy', 'csv', 'excel', 'pdf', 'print'
        ],



    });

    /*var table = $('#example').DataTable();
 
     $('#example tbody').on('click', 'tr', function () {
         var rowData = table.row(this).data();
         // ... do something with `rowData`
         console.log(rowData, "rowdata");
     });*/


}, "json");

/*var table = $('#example').DataTable();

$('#example tbody').on('click', 'tr', function () {
    var rowData = table.row(this).data();
    // ... do something with `rowData`
    console.log(rowData, "rowdata");
});
*/


$(document).on(`click`, `.editbtn`, function (event) {


    var row = $(this).closest("tr");

    var rowData = employee.row(row).data();

    $("#employee_edit_modal").modal("show");
    let form = $("#employee_edit_form");
    $(`[name="name"]`, form).val(rowData.name);
    $(`[name="position"]`, form).val(rowData.position);
    $(`[name="office"]`, form).val(rowData.office);
    $(`[name="extn"]`, form).val(rowData.extn);
    $(`[name="start_date"]`, form).val(rowData.start_date);
    $(`[name="salary"]`, form).val(rowData.salary);


    //console.log(idpass_return, "idpass");
    //idpass_return = $(`[name="id"]`, form).val(rowData.id);
    // console.log(idpass_return, "id pass");

});


$(document).on(`submit`, `#employee_edit_form`, function (event) {
    event.preventDefault();




    let name = $(`[name="name"]`, this).val();
    let id = $(`[name="id"]`, this).val();
    console.log(id);


});
