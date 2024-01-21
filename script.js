document.addEventListener('DOMContentLoaded', function () {
    var createBtn = document.getElementById('createBtn');
    var todoInput = document.getElementById('todo');

    todoInput.addEventListener('keydown', function (event) {
        if (event.keyCode === 13) {
            createBtn.click();
        }
    });

    var form = document.querySelector('form');
    form.addEventListener('submit', function (event) {
        if (event.submitter !== createBtn || todoInput.value.trim() === '') {
            event.preventDefault();
        } else {
            // Clear the input field after a task is added
            todoInput.value = '';
        }
    });
});
