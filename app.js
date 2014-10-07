var form = document.getElementById("todoList");
var list = document.getElementById("jobList");

form.addEventListener("submit", function (event) {
  var btn1 = document.createElement("button");
  var btn2 = document.createElement("button");

  event.preventDefault();
  var title = this.title.value;
  var li = document.createElement("li");
  li.innerText = title;
  btn1.innerText = "Edit";
  btn2.innerText = "Delete";
  list.appendChild(li);
  li.appendChild(btn1);
  li.appendChild(btn2);

  //vvv things you want to happen onclick
  var clicked = false;
  btn1.addEventListener("click", function(){
    if (clicked === false){
      li.style.textDecoration = "line-through";
      btn1.innerText = "undo";
      clicked = true;
      // console.log(clicked);
    } else {
      li.style.textDecoration = "";
      btn1.innerText = "undo";
      clicked = false;
      // console.log(clicked);
    }
  });

  //vvv things you want to happen on delete button click
  btn2.addEventListener("click", function(){
    $(this).parent().remove();
    //console.log(this);
  });
  this.title.value = "";
});