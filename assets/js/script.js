//code wrapped in jquery to finish loading elements before running script
$(function () {
    // how to save entered data 
        var task = document.getElementById("task");
        var saveButton = document.getElementById("saved");
      
    
            saveButton.addEventListener("click", function(event) {
              event.preventDefault();
    
                var todo = {
                    task: task.value.trim()
                };
    
        localStorage.setItem("todo", JSON.stringify(todo));
            
              })
    // use day.js to get the current date and display it on header
      var today = dayjs();
      $('#currentDay').text(today.format('MMM D, YYYY'));
    
    })