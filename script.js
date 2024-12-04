body {
    font-family: Arial, sans-serif;
    margin: 0;
    padding: 0;
    background-image: url("https://i.ibb.co/Vj2RBHD/anime-background.jpg");
    background-size: cover;
    background-attachment: fixed;
    color: white;
    text-align: center;
}

.header {
    padding: 20px;
    background-color: rgba(30, 60, 114, 0.8);
    border-bottom: 2px solid rgba(42, 82, 152, 0.8);
}

.title {
    font-size: 2.5em;
    margin: 0;
}

.search-section {
    margin: 20px auto;
}

#searchInput {
    padding: 10px;
    width: 60%;
    border-radius: 5px;
    border: none;
}

#searchBtn {
    padding: 10px 20px;
    margin-left: 10px;
    background-color: #f05454;
    border: none;
    border-radius: 5px;
    color: white;
    cursor: pointer;
}

#searchBtn:hover {
    background-color: #d94343;
}

.results {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 10px;
    padding: 20px;
}

.result-item {
    width: 200px;
    position: relative;
    background-size: cover;
    height: 300px;
    border-radius: 10px;
    overflow: hidden;
}

.result-item .buttons {
    position: absolute;
    bottom: 10px;
    left: 50%;
    transform: translateX(-50%);
    display: flex;
    flex-direction: column;
    gap: 10px;
}

.button {
    padding: 5px 10px;
    background-color: rgba(0, 0, 0, 0.6);
    color: white;
    border: none;
    border-radius: 5px;
    font-size: 0.8em;
    cursor: pointer;
}

.button:hover {
    background-color: rgba(0, 0, 0, 0.8);
}sh.com/search/photos?query=${query}&client_id=UoOsVrN26NgbXy_7zf6UbiCgo-cAEMNWTO8ek1zQeSA`)
        .then(response => response.json())
        .then(data => {
            results.innerHTML = "";
            data.results.forEach(photo => {
                const imgDiv = document.createElement("div");
                imgDiv.className = "result-item";
                imgDiv.style.backgroundImage = `url(${photo.urls.small})`;

                const buttonsDiv = document.createElement("div");
                buttonsDiv.className = "buttons";

                const downloadBtn = document.createElement("button");
                downloadBtn.className = "button";
                downloadBtn.textContent = "Download";
                downloadBtn.onclick = () => {
                    const a = document.createElement("a");
                    a.href = photo.urls.full;
                    a.download = "anime_image.jpg";
                    document.body.appendChild(a);
                    a.click();
                    document.body.removeChild(a);
                };

                const commentInput = document.createElement("input");
                commentInput.placeholder = "Add a comment...";
                commentInput.className = "button";
                commentInput.style.width = "100%";
                buttonsDiv.appendChild(commentInput);

                buttonsDiv.appendChild(downloadBtn);
                imgDiv.appendChild(buttonsDiv);

                results.appendChild(imgDiv);
            });
        })
        .catch(err => {
            results.innerHTML = "Error loading images. Please try again.";
            console.error(err);
        });
}