const header = document.createElement('h2');
let textNode = document.createTextNode('Hello');
header.appendChild(textNode);
document.body.appendChild(header);

const superEventHandler = {
    handleResize: function () {
        header.innerHTML = "You just resized!";
        header.style.color = "yellow";
    },
    handleMouseOver: function () {
        header.innerHTML = "The mouse is here!";
        header.style.color = "red";
    },
    handleMouseOut: function () {
        header.innerHTML = "The mouse is gone!";
        header.style.color = "blue";
    },
    handleRightClick: function () {
        header.innerHTML = "That was right click!";
        header.style.color = "green";
    },
    superEventHandler: function () {
        header.addEventListener("mouseover", this.handleMouseOver);
        header.addEventListener("mouseout", this.handleMouseOut);
        window.addEventListener("resize", this.handleResize);
        window.addEventListener("contextmenu", this.handleRightClick);
    }
};

superEventHandler.superEventHandler();