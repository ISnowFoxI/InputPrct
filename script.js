// Write - Your - Code
class Link {
    constructor(title, url, author) {
        if (!url.startsWith("http://") && !url.startsWith("https://")) {
            url = "http://" + url;
        }

        this.title = title;
        this.url = url;
        this.author = author;
    }

    showALink() {
        return `${this.title} (${this.url}). Author: ${this.author}`;
    }
}

// Initial links array
const links = [];
links.push(new Link("Hacker News", "https://news.ycombinator.com", "Baptiste"));
links.push(new Link("Reddit", "https://reddit.com", "Thomas"));
links.push(new Link("Boing Boing", "boingboing.net", "Daniel"));

const content = document.getElementById("content");
/*New input tags */
const inputFieldContainer = document.createElement("div");
const inputAuthor = document.createElement("input");
const inputTitle = document.createElement("input");
const inputLink = document.createElement("input");
const addLink = document.createElement("button");

/* artibutes of input tags */
inputFieldContainer.classList = "InputFieldContainer";
inputAuthor.classList = "inputField";
inputTitle.classList = "inputField";
inputLink.classList = "inputField";
addLink.classList = "addLink";

inputAuthor.placeholder = "Enter link author";
inputTitle.placeholder = "Enter link title";
inputLink.placeholder = "Enter link";
addLink.textContent = "Add Link";

/*adding input tags to the dom */
inputFieldContainer.appendChild(inputAuthor);
inputFieldContainer.appendChild(inputTitle);
inputFieldContainer.appendChild(inputLink);
inputFieldContainer.appendChild(addLink);

content.appendChild(inputFieldContainer);


/*new link creation*/
function addNewLink(title, url, author) {
    let newLinkTitle = title;
    let newLinkUrl = url;
    let newLinkAuthor = author;
    let newLink = new Link(newLinkTitle, newLinkUrl, newLinkAuthor)
    links.unshift(newLink)

}

/*link adding function */
const linksdiv = document.createElement("div")

addLink.addEventListener("click", () => {

    /*add empty condition */
    if (inputAuthor.value == "" || inputTitle.value == "" || inputLink.value == "") {
        if (document.getElementById("warning")) {
            return;
        }
        else {

            const warning = document.createElement("p");

            warning.innerHTML = "Please fill in all inputs";
            warning.classList = "warning"
            warning.id = "warning"
            inputFieldContainer.appendChild(warning)
            setTimeout(() => {
                inputFieldContainer.removeChild(warning)

            }, 2000);
        }

    }
    else {
        let title = inputTitle.value;
        let author = inputAuthor.value;
        let url = inputLink.value;
        addNewLink(title, url, author)
        showLinks();

    }




})

/*linksDiv is root the container for the links */

function showLinks() {
    linksdiv.innerHTML = " ";

    for (let link of links) {
        const newLinkDiv = document.createElement("div")
        newLinkDiv.classList = "link";

        const newLinkTitle = document.createElement("a")
        newLinkTitle.classList = 'linkTitle';
        newLinkTitle.textContent = link.title;
        newLinkTitle.href = link.url;
        newLinkTitle.target = "_blank";

        const newlinkSpan = document.createElement("span");
        newlinkSpan.textContent = link.url;
        newlinkSpan.classList = "linkUrl";

        const newlinkAuthor = document.createElement("span");
        newlinkAuthor.textContent = link.author;
        newlinkAuthor.classList = "linkAuthor"

        newLinkDiv.appendChild(newLinkTitle)
        newLinkDiv.appendChild(newlinkSpan)
        newLinkDiv.appendChild(newlinkAuthor)
        linksdiv.appendChild(newLinkDiv)

    }

    content.appendChild(linksdiv)
    inputAuthor.value = null;
    inputTitle.value = null;
    inputLink.value = null;
}


