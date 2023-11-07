function saveOnSTorage(event){
    event.preventDefault();
    let amount = event.target.expense.value;
    let description = event.target.description.value;
    let category = event.target.Category.value;

    let obj = {
        amount : amount,
        description : description,
        category : category
    }

    localStorage.setItem(description,JSON.stringify(obj));
    axios.post("http://localhost:3000/user/add-expense",obj)
            .then((res)=>{
                console.log(res);
            }).catch((error)=>{
                console.log(error);
            })
    showOnScreen(obj);
}

window.addEventListener("DOMContentLoaded", () => {
    axios.get("http://localhost:3000/user/get-expense").then((res) => {
        console.log(res);

        for (var i = 0; i < res.data.allUsers.length; i++) {
            showOnScreen(res.data.allUsers[i]);
            
        }
    }).catch((error) => {
        console.log(error);
    })
});

function showOnScreen(obj){
    let ul = document.getElementById("ourlist");
    let child = document.createElement('li');
    child.textContent = obj.amount + "--->" + obj.description + "--->" + obj.category;


    let deleteBtn = document.createElement('input');
    deleteBtn.type = "button";
    deleteBtn.value = 'Delete';

    let editBtn = document.createElement('input');
    editBtn.type = "button";
    editBtn.value = "Edit";

    const userId = obj.id;

    deleteBtn.onclick = () => {
        localStorage.removeItem(obj.description);
        axios.delete(`http://localhost:3000/user/delete-expense/${userId}`)
            .then((res) => {
                ul.removeChild(child);
            }).catch((err) => {
                console.log(err);
            });
    }

    editBtn.onclick = () => {
        localStorage.removeItem(obj.description);
        axios.delete(`http://localhost:3000/user/delete-expense/${userId}`)
            .then((res) => {
                ul.removeChild(child);
            }).catch((err) => {
                console.log(err);
            });

        document.getElementById('expAmt').value = obj.amount;
        document.getElementById('descrip').value = obj.description;
        document.getElementById('category').value = obj.category;

    }



    child.appendChild(deleteBtn);
    child.appendChild(editBtn);
    ul.appendChild(child);

} 