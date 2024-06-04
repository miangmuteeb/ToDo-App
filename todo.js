
    
    const inputvalue =(id) =>{
        let value = document.getElementById(id).value;
        return value;
    }
    
    const handlelogin = () => {
        event.preventDefault()
        let location = inputvalue("location");
        let title= inputvalue("title");
        let description = inputvalue ("description")
        title = title.trim()
        location= location.trim()
        description = description.trim()
    
        if(title.length < 3){
          

                Toastify({
                    text: text || "Input atleast 3 character",
                    duration: 2500,
                    close: true,
                    gravity: "top", // `top` or `bottom`
                    position: "right", // `left`, `center` or `right`
                    stopOnFocus: true, // Prevents dismissing of toast on hover
                    style: {
                      background: "linear-gradient(to right, #00b09b, #96c93d)",
                    },
                   
                  }).showToast();
             }
        
    
        let todo = {title, description, location}
        todo.id = Math.random().toString(36).slice(2)
        todo.dateCreatd = new Date().getTime()
        todo.status = "active"
    
        const todos =JSON.parse(localStorage.getItem("todos"))||[];
        todos.push(todo)
        localStorage.setItem("todos",JSON.stringify(todos));
        alert("New todo added")
        showtodo()
    }
    
    function showtodo(){
        const todos =JSON.parse(localStorage.getItem("todos"))|| []
    
        if(!todos.length){
            alert ("No Task")
        }
        //todotable
        let tablestartingcode = '<div class = "table-responsive"> <table class = "table">'
        let tableendingcode = "</table></div>"
        let tableheader = "<tr><th>Title</th><th>Description</th><th>Location</th><th>Action</th></tr>"
        let tablebody = ""
        for( let i = 0 ; i<todos.length; i++){
            let todo = todos[i]
    tablebody += `<tr><td>${todo.title}</td><td>${todo.location}</td><td>${todo.description}</td><td><button class="btn btn-danger" data-value="${todo.id}" onclick= "deleteTodo(event)"><i  class = "fas fa-trash-alt"></i>Delete</button><button class="btn btn-primary mx-1 mb-1" data-value="${todo.id}" onclick= "editTodo(event)"><i  class = "fas fa-pen mx-1 mt-1"></i>Edit</button></td></tr>`
        }
        
        let table = tablestartingcode + tableheader + "</tbody>" + tablebody +  "</tbody>" + tableendingcode
        showoutput(table)
    }
    
    function showoutput(table){
        document.getElementById("table").innerHTML = table;
    }
    
    function deleteTodo(event){
        const id = event.target.dataset.value;
        const todos =JSON.parse(localStorage.getItem("todos"))||[];
        const newTodos = todos.filter(todo => todo.id!== id)
        localStorage.setItem("todos",JSON.stringify(newTodos))
        showtodo()
    }
    function editTodo(event){
        let id = event.target.getAttribute('data-value')
        const todos =JSON.parse(localStorage.getItem("todos"))||[];
        const todo = todos.find(todo => todo.id === id);
        document.getElementById("title").value = todo.title;
        document.getElementById("location").value = todo.location;
        document.getElementById("description").value = todo.description;
        document.getElementById("edit-todo").value = id;
        document.getElementById("button1").innerText = "Update Task";
        
    }
    
    function updateTodo(){
        const id = document.getElementById("edit-id").value;
        const title = document.getElementById("title").value;
        const location = document.getElementById("location").value;
        const description = document.getElementById("description").value;
        const todos =JSON.parse(localStorage.getItem("todos"))||[];
        const todo = todos.find(todo => todo.id === id);
        todo.title = title;
        todo.location = location;
        todo.description = description;
        localStorage.setItem("todos",JSON.stringify(todos));
        showtodo();
    }