document.addEventListener('DOMContentLoaded', function () {
    //table
    // I used table because it is easier to display data in it
    let table = document.querySelector("tbody");
    //cells
    let cell1;
    let cell2;
    let cell3;
    let cell4;
    let cell5;

    let array = [];

    //fetch API
    //CORS extension needed
    fetch('https://dummyapi.online/api/blogposts')
        .then((response) => {
            return response.json();
        }).then(data => {
            console.log(data);
            data.forEach(post => {
                const row = `<tr>
                            <td>${post.id}</td>
                            <td>${post.title}</td>
                            <td>${post.author}</td>
                            <td>${post.date_published}</td>
                            <td>${post.content}</td>
                             </tr>`
                table.insertAdjacentHTML("beforeend", row);
            });

        }).catch((error) => console.log(error));

})
