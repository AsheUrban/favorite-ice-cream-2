window.onload = function (event) {
  event.preventDefault();

  const arrayOfFlavors = ["chocolate", "strawberry", "salted caramel"];
  const ul = document.querySelector("ul");
  arrayOfFlavors.forEach(function(flavor) {
    const li = document.createElement("li");
    li.append(flavor);
    ul.append(li);
  });
  
}