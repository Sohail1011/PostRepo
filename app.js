const readPosts = async () => {
    const paint = document.getElementById('root');
    const publicaciones = await fetch('https://jsonplaceholder.typicode.com/posts');
    const info = await publicaciones.json();

    let template = '';
    info.forEach((i) => {
        template += `<h2>${i.title}</h2>`;
    })

    paint.innerHTML = template;
};

readPosts();