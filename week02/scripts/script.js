const input = document.querySelector("#favchap");
const button = document.querySelector("button");
const list = document.querySelector("#list");

button.addEventListener("click", function() {
    if (input.value.trim() !== '') {

        const li = document.createElement('li');
        const deleteButton = document.createElement('button');
        
        li.textContent = input.value;
        deleteButton.textContent = '❌';

        li.append(deleteButton);
        list.append(li);

        // Add delete functionality to the button
        deleteButton.addEventListener('click', function(){
            list.removeChild(li);
            input.focus();
        });

        // Clear the input and refocus
        input.value = '';
        input.focus();
    } else {
        alert("Please enter a favorite chapter");
    }
});
