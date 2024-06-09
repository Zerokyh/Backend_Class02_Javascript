const addBtn = document.querySelector(".btn");
addBtn.addEventListener("click", () => {
  const todo = prompt("뭐할거임?");
  const time = prompt("몇시에?");

  const todoListTag = document.querySelector(".todolist_list");
  todoListTag.insertAdjacentHTML(
    "beforeend",
    `
    <div class="list">
        <div>${todo}</div>
        <div>${time}</div>
        <button class="cancle_btn">취소</button>
    </div>
    <hr>
    `
  );
  const cancle_btn = document.querySelector(".cancle_btn");
  cancle_btn.addEventListener("click", () => {
    todoListTag.innerHTML = "";
  });
});
