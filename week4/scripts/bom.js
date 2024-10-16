const input = document.getElementById('favchap');
const button = document.querySelector('.button');
const list = document.getElementById('list');


chaptersArray = getChapterList() || [];

chaptersArray.forEach(chapter => {
    displayList(chapter)
});

button.addEventListener('click', () => {
    if(input.value != ''){
        displayList(input.value);
        chaptersArray.push(input.value);
        setChapterList();
        input.value = '';
        input.focus();
    }

});

function displayList(item){
    const li = document.createElement('li');
    const deleteButton = document.createElement('button');
    
    li.textContent = item;
    deleteButton.textContent = '❌';

    deleteButton.classList.add('delete')
    li.append(deleteButton);
    list.append(li);

    deleteButton.addEventListener('click', () =>{
        list.removeChild(li)
        deleteChapter(li.textContent);
        input.focu();
    })
}

function setChapterList(){
    localStorage.setItem('MyBomList', JSON.stringify(chaptersArray));
} 

function getChapterList(){
    return JSON.parse(localStorage.getItem('MyBomList'));
}

function deleteChapter(chapter){
    chapter = chapter.slice(0,chapter.lenght -1);
    chaptersArray = chaptersArray.filter((item) => item !== chapter);
    setChapterList()

}

// button.addEventListener('click', function() {
//     if (input.value.trim() !== '') {

//         const li = document.createElement('li');
//         const deleteButton = document.createElement('button');
        
//         li.textContent = input.value;
//         deleteButton.textContent = '❌';

//         li.append(deleteButton);
//         list.append(li);

//         alert("added")

//         // Add delete functionality to the button
//         deleteButton.addEventListener('click', function(){
//             list.removeChild(li);
            

           
//         });

//         // Clear the input and refocus
//         input.value = '';
//         input.focus();
//     } else {
//         alert("Please enter a favorite chapter");
//     }
// });
