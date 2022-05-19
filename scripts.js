    // We'll pre-populate this array with a couple objects just so it's not undefined if your internet connection isn't working properly.

    let arrayOfTodos = [
        {
        "userId": 14,
        "id": 1,
        "title": "delectus aut autem",
        "completed": false
    },
    {
        "userId": 20,
        "id": 2,
        "title": "delectus aut autem",
        "completed": false
    }]
    
    const fetchTodos = () => {
        fetch('https://jsonplaceholder.typicode.com/todos')
        .then( (response) => response.json())
        .then( (json) => arrayOfTodos = json)
    }
    
    const logTodos = () => {
        console.log(arrayOfTodos)
    }
    
    const populateTodos = () => {
        for (let i = 0; i < arrayOfTodos.length; i++) {
            console.log(i+1, arrayOfTodos[i].title)
            const newLi = document.createElement("li")
            const content = document.createTextNode(arrayOfTodos[i].title)
            newLi.appendChild(content)
            const findOL = document.getElementById("todo-list")
            findOL.appendChild(newLi)

        }
    }
    const populateID = () => {
        const removeChilds = () => {
            const parent = document.getElementById("todo-list")
            while (parent.lastChild) {
                parent.removeChild(parent.lastChild);
            }
        };
        removeChilds()
        const grabInput = document.getElementById("userID").value
        const result = arrayOfTodos.filter((item) => item.userId == grabInput)
        for (let i = 0; i < result.length; i++) {
            console.log(i+1, result[i].title)
            const newLi = document.createElement("li")
            const content = document.createTextNode(result[i].title)
            newLi.appendChild(content)
            const findOL = document.getElementById("todo-list")
            findOL.appendChild(newLi)

        }
    }
    