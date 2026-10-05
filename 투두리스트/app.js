var months = ["01월", "02월", "03월", "04월","05월", "06월", "07월", "08월","09월","10월","11월","12월"];

var n = new Date();
var y = n.getFullYear();
var m = n.getMonth();
var d = n.getDate();
document.getElementById('date').innerHTML = y + " " + months[m] + " " + d+"일";

const 추가버튼 = document.getElementById('추가');
const 할일입력 = document.getElementById('오늘할일');
const 할일리스트 = document.getElementById('할일들');


function 할일추가(){
   let 리스트 = document.createElement("li");
   if(!할일입력.value){
    alert("텍스트를 입력하세요")
   }else{ 
   리스트.innerHTML ="<span class=투두>" + `${할일입력.value}` + "</span>"  +  "  <button class=수정>수정</button>" + "  <button class=삭제>삭제</button>";
    할일리스트.appendChild(리스트);
   }
  
}






추가버튼.addEventListener('click',할일추가);

할일입력.addEventListener('keydown',function(event){
      if(event.key === 'Enter'){
         if(!할일입력.value.trim()){
            alert('텍스트를 입력하세요');
            return;
         }else{
         let 리스트 = document.createElement("li");
          리스트.innerHTML ="<span class=투두>" + `${할일입력.value}` + "</span>"  +  "  <button class=수정>수정</button>" + "  <button class=삭제>삭제</button>";
    할일리스트.appendChild(리스트);
   }
}
    
      })

할일리스트.addEventListener('click',function(event){
   if(event.target.classList.contains('수정')) { //이벤트, 클래스리스트 컨테인 작동원리 알아놓기
    const 내부모리스트 = event.target.closest('li');

    const 인풋창확인 = 내부모리스트.querySelector('input');

    if(인풋창확인){
    const 새투두 = document.createElement('span')
    새투두.className = '투두'
    새투두.textContent = 인풋창확인.value;
      내부모리스트.replaceChild(새투두,인풋창확인

      )

    
    }else {
       
     const 투두리스트 = 내부모리스트.querySelector('.투두');
     const 내부글자 = 투두리스트.textContent;
      const 새인풋 = document.createElement('input');
       새인풋.value = 내부글자;
         내부모리스트.replaceChild(새인풋,투두리스트)
      새인풋.addEventListener('keydown',function(event){
         if(event.key ==='Enter'){
            const 새텍스트 = document.createElement('span');
            새텍스트.className = '투두'
            새텍스트.textContent = 새인풋.value;
         내부모리스트.replaceChild(새텍스트,새인풋);
         }
      })
    }
   }
   if(event.target.classList.contains('삭제')){
      const 내부모리스트 = event.target.closest('li');    
      내부모리스트.remove();
   }
     
})
