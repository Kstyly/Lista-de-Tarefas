
const localStorageName = 'toDoList'
function newTask() {
    let input = document.getElementById('inputNewTask')
    //Validando
    if(!input.value){
        alert("Digite algo para inserir em sua lista")
        showValues()
    } else {
        let values = JSON.parse(localStorage.getItem(localStorageName) || "[]")
        values.push({
            name: input.value
        })
        localStorage.setItem(localStorageName, JSON.stringify(values))
        showValues();
    }

}
function showValues(){
    let values = JSON.parse(localStorage.getItem(localStorageName) || "[]")
    let list = document.getElementById('toDoList')
    list.innerHTML = "";
    for(let i = 0; i < values.length; i++){
        list.innerHTML += `<li>${values[i]['name']}<p></p><button id='btnOk' onclick='removeItem("${values[i]['name']}")'>X</button></li>`
    }
}
function removeItem(data){
    let values = JSON.parse(localStorage.getItem(localStorageName) || "[]")
    let index = values.findIndex(x => x.name == data)
    values.splice(index, 1)
    localStorage.setItem(localStorageName, JSON.stringify(values))
    showValues()
}
showValues()