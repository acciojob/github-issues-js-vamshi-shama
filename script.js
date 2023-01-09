//your code here
const next = document.getElementById('load_next');
next.addEventListener('click', getDetailsNextPage)

async function getDetailsNextPage() {

    const response = await fetch("https://api.github.com/repositories/1296269/issues?page=${pageNumberHere}&per_page=5");

    var data = await response.json();
    console.log(data);
    //Show(data);
}
