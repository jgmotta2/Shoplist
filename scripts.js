const input = document.getElementById("ipt")
const list = document.getElementById("list")

input.addEventListener("keypress", function (event) {
  if (event.key === "Enter" && input.value !== "") {
    itemAdd()
  }
})

function itemAdd() {
  const itemText = input.value.trim()
  if (itemText) {
    const li = document.createElement("li")
    li.innerHTML = ` 
      <input type="checkbox" />
      <span>${itemText}</span>
      <button class="deleteButton" onclick="deleteItem(this)">Remover</button>
    `
    list.appendChild(li)
    input.value = ""
  } else {
    alert("Por favor, insira um texto para adicionar um item.")
  }
}

function deleteItem(button) {
  const li = button.parentElement
  list.removeChild(li)
}
