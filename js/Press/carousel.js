const data = [
    
{
    
    "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
    "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
    },
    {
   
    "title": "qui est esse",
    "body": "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla"
    },
    {
   
    "title": "ea molestias quasi exercitationem repellat qui ipsa sit aut",
    "body": "et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae porro eius odio et labore et velit aut"
    },
    {
    
    "title": "eum et est occaecati",
    "body": "ullam et saepe reiciendis voluptatem adipisci\nsit amet autem assumenda provident rerum culpa\nquis hic commodi nesciunt rem tenetur doloremque ipsam iure\nquis sunt voluptatem rerum illo velit"
    }
]

let title = document.getElementById('title');
let content = document.getElementById('content');
let prev = document.querySelector('.prev');
let next = document.querySelector('.next');
let count = document.querySelector('.count');

title.textContent = data[0].title;
content.textContent = data[0].body;

let counter =0;

next.addEventListener('click',()=>{
    if(counter<data.length-1){
        counter++;
        title.textContent = data[counter].title;
content.textContent = data[counter].body;
    }else{
        counter=0;
        title.textContent = data[counter].title;
content.textContent = data[counter].body;
    }
  count.textContent = counter+1;
})

prev.addEventListener('click',()=>{
    if(counter>0){
        counter--;
        title.textContent = data[counter].title;
content.textContent = data[counter].body;
    }else{
        counter = data.length-1;
        title.textContent = data[counter].title;
content.textContent = data[counter].body;
    }
  count.textContent = counter+1;

})



