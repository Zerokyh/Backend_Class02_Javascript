const foods = document.querySelectorAll(".food"); // querySelector는 동일한 클래스명이 있으면 제일 처음꺼, querySelectorAll은 동일 클래스명 전부다 가져옴
foods.forEach((v) => console.log(v.dataset.food));
foods.forEach((v) => console.log(v.dataset.price));
