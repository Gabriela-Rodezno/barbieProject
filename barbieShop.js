let data = [
    {id: 1, barbieCarreer: "Pizza chef", color: "Pink"},
    {id: 2, barbieCarreer: "Fashion model", color: "Yellow"}
]

function readAll(){
    localStorage.setItem("object",JSON.stringify(data));
    var tabledata = document.querySelector(".data_table");

    var object = localStorage.getItem("object");
    var objectdata = JSON.parse(object);
    var elements = "";

    objectdata.map(record => (
        elements += `<tr>
            <td>${record.barbieCarreer}</td>
            <td>${record.color}</td>
            <td>
                <button class="edit" onclick={edit(${record.id})}>Edit</button>
                <button class="delete" onclick={delet(${record.id})}>Delete</button>
            </td>
            </tr>`
    ))

    tabledata.innerHTML = elements;
}

function delet(id){
    data = data.filter(rec => rec.id !== id);
    readAll();
}

function create() {
    document.querySelector(".create_form").style.display = "block";
    document.querySelector(".add_div").style.display = "none";
}

function add(){
    var barbieCarreer = document.querySelector(".barbieCarreer").value;
    var color = document.querySelector(".color").value;

    var newOj = {id: 3, barbieCarreer: barbieCarreer, color: color};
    data.push(newOj);

    document.querySelector(".create_form").style.display = "none";
    document.querySelector(".add_div").style.display = "block";

    readAll();
}

function edit(id){
    document.querySelector('.update_form').style.display = "block";
    var obj = data.find(rec => rec.id === id);
    document.querySelector('.ubarbieCarreer').value = obj.barbieCarreer;
    document.querySelector('.ucolor').value = obj.color;
    document.querySelector('.id').value = obj.id;
}

function update(){
    var id = parseInt(document.querySelector('.id').value);
    var barbieCarreer = document.querySelector('.ubarbieCarreer').value;
    var color = document.querySelector('.ucolor').value;

    var index = data.findIndex(rec => rec.id === id);
    data[index] = {id, barbieCarreer, color};

    document.querySelector('.update_form').style.display = "none";

    readAll();
    
}