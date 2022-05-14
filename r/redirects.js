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
    let og_title = document.createElement('meta');
    let og_image = document.createElement("meta")
    let redirect = document.createElement("meta")
    og_title.property="og:title"
    og_title.content=metadata["og"]["title"]
    og_image.property="og:image"
    og_image.content=metadata["og"]["image"]
    redirect.httpEquiv="Refresh"
    redirect.content = "0; url='" + window.location.origin + metadata["location"] + "'"

    document.getElementsByTagName('head')[0].appendChild(og_title);
    document.getElementsByTagName('head')[0].appendChild(og_image);
    document.getElementsByTagName('head')[0].appendChild(redirect);
}

const queryString = window.location.search;
console.log(queryString);
const urlParams = new URLSearchParams(queryString);

let code = urlParams.get("c")
console.log(window.location)
getCodeMeta()

