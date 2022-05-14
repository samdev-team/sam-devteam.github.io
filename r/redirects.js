let redirects = {
    "sams-cats": {
        "location": "/p/music/songs/sams-cats",
        "og": {
            "title": "Blockbuster206's Music | Sam's Cats",
            "image": "https://sam-devteam.github.io/p/music/songs/sams-biscuits/sams-biscuits.png"
        }
    }
}

function getCodeMeta() {
    let metadata = redirects[code]
    if (!metadata) return;
    document.getElementById("title").content = metadata["og"]["title"]
    document.getElementById("image").content = metadata["og"]["image"]
    document.getElementById("url").content = "0; url='" + window.location.hostname + metadata["location"] + "'"
}

const queryString = window.location.search;
console.log(queryString);
const urlParams = new URLSearchParams(queryString);

let code = urlParams.get("c")
getCodeMeta()

