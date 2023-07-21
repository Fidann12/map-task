const maps = document.getElementById("map_image");
const paths = [...document.querySelectorAll("path")];
const list = document.getElementById("maps_ul");
paths.map((path) => {
  let name = path.getAttribute("name");
  let id = path.getAttribute("id");
  let li = document.createElement("li");
  li.textContent = name;
  li.setAttribute("id", `${id}`);
  list.append(li);
  li.addEventListener("click", () => {
    if (li.getAttribute("id") === id) {
      path.setAttribute("fill","red");
    }
  });
  path.addEventListener("click", (e) => {
    let text = document.createElement("span");
    text.textContent = name;
    document.body.append(text);
    text.classList.add("show");
    text.style.top = e.clientY + "px";
    text.style.left = e.clientX + "px";
    path.setAttribute("fill","red");
  });
});
