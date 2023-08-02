const accessToken = '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'
const username = 'gracekola2017'

fetch(https://api.github.com/users/gracekola2017repos, {
    headers: {
        Authorization: token ${accessToken},
    }
 })
 .then((response) => response.json())
 .then((data) => {
    const reposList = document.getElementById('reposList');
    data.forEach((repo) => {
        const repoHeading = document.createElement('h3');
        repoHeading.textContent = repo.name;
        reposList.appendChild(repoHeading);        const lang = document.createElement('h5');
        lang.textContent = repo.language;
        reposList.appendChild(lang);    });
 });

