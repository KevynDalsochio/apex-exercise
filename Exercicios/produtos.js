/*Fazer um sistema com um formulario para armazenar produtos em uma lista,
 pensem sobre as propriedades e atributos de um produto.
 listar produtos em uma tabela*/
    var item
    var brand
    var amount

//get value of user on html and save variable
function addNewProduct(){    
     item=document.getElementById('item').value;
     brand=document.getElementById('brand').value;
     amount=document.getElementById('amount').value;
    return [item,brand,amount]
}
console.log(item,brand,amount)

//save in array
/*var medicamentos = [];
function saveArray(){
    medicamentos.push(addNewProduct);
    console.log(medicamentos);*/

//create table and print