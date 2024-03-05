document.addEventListener('DOMContentLoaded', () => {
    const input = document.querySelector('#todo')
    const addButton = document.querySelector('#add-button')
    const todoList = document.querySelector('#todo-list')
    const alert = document.querySelector('span')
    const delete_butten=document.querySelector('#delete');
    const delete_checked=document.querySelector('#delete-checked');
      // '+' 버튼 익명 화살표 함수 
    const addTodo = () => {
        if (input.value !== '') {
            const item = document.createElement('div')
            item.id='todo_element'
          // 체크박스
            const checkbox = document.createElement('input')
            checkbox.type='checkbox'
         // text
            const text = document.createElement('span');
          // 삭제
            const deleteButton = document.createElement('button')
            deleteButton.textContent="삭제"

            text.textContent = input.value
            input.value=''
        
            item.appendChild(checkbox)
            item.appendChild(text)
            item.appendChild(deleteButton)
            todoList.appendChild(item)

    // 체크박스 이벤트 리스너
            checkbox.addEventListener('change', (event) =>{ 
                if (event.currentTarget.checked)
                {
                    text.style.textDecoration='line-through'
                }
                else {
                    text.style.textDecoration='none'
                }
            })

          // 제거하기 버튼 클릭 이벤트 리스너
            deleteButton.addEventListener('click', (event) => {
                todoList.removeChild(event.currentTarget.parentNode)
            })
            input.value =''
            alert.textContent = ''
        }
        else
            alert.textContent = '입력 없음'
    }
    const deleting = () => {
        let selected = document.querySelectorAll('#todo_element');
        for(let i=0;i<selected.length;i++){
            selected[i].remove();
        }
        //대충 체크된 item들 다 지우는 내용
    }
    const deleting_checked = () => {
        let selected = document.querySelectorAll('#todo_element');
        for(let i=0;i<selected.length;i++){
            if(selected[i].children[0].checked){
            selected[i].remove();}
        }
        //대충 체크된 item들 다 지우는 내용
    }
    delete_butten.addEventListener('click',deleting);

    delete_checked.addEventListener('click',deleting_checked);

    addButton.addEventListener('click', addTodo)

      // 할 일 입력창에서 enter key가 눌렸을 때
    input.addEventListener('keypress', (event) => {
        const ENTER = 13
        if (event.keyCode === ENTER)
            addTodo();
    })
})