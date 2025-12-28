document.body.style.margin = "0";
document.body.style.display = "grid";
document.body.style.gridTemplateColumns = "1fr 1fr";
document.body.style.gridTemplateColumns = "1fr 1fr";
document.body.style.height = "100vh";
document.body.style.gap = "10px";           
document.body.style.padding = "10px";       
document.body.style.backgroundColor = "white"; 

const cursors = [
  { type: "pointer", color: "#FF00FF", label: "Q1" },
  { type: "wait", color: "#00FFFF", label: "Q2" },
  { type: "help", color: "#FFFF00", label: "Q3" },
  { type: "no-drop", color: "#FE019A", label: "Q4" }
];

cursors.forEach(({ type, color, label }) => {
    const div = document.createElement("div");
    div.className = "container";
    div.style.borderRadius = "20px"; 

    const text = document.createElement("span");
    div.appendChild(text);

    div.style.display = "flex";
    div.style.justifyContent = "center";
    div.style.alignItems = "center";
    div.style.backgroundColor = "white";
    text.style.opacity = "0";
    text.style.transform = "translateY(10px)";
    text.style.fontSize = "50px";

    div.style.transition = "background-color 1s ease, border 0.3s ease";
    text.style.transition = "opacity 0.3s ease, transform 0.3s ease";

    div.addEventListener("mouseover", function(){
        div.style.cursor = type;
        div.style.backgroundColor = color;
        text.textContent = label;
        div.style.border = "CREAMYWHITE 5px solid";
        text.style.opacity = "1";
        text.style.transform = "translateY(0px)";
    });
    
    div.addEventListener("mouseout", function(){
        div.style.backgroundColor = "white";
        div.style.border = "none";
        text.style.opacity = "0";
        text.style.transform = "translateY(40px)";
    });

    document.body.appendChild(div);
});




