// function createButtons() {
//     for (var i = 1; i <= 5; i++) {
//       var body = document.getElementsByTagName("BODY")[0];
//       var button = document.createElement("BUTTON");
//       button.innerHTML = 'Button ' + i;
//       button.onclick = function() {
//            alert('This is button ' + i);
//       }
//       body.appendChild(button);
//     }
//  }
  
//  createButtons();

  // Solution 2:

function createButtons() {
    for (var i = 1; i <= 5; i++) {
      var body = document.getElementsByTagName("BODY")[0];
      var button = document.createElement("BUTTON");
      button.innerHTML = 'Button ' + i;
 //      (function(num) {
 //      button.onclick = function() {
 //           alert('This is button ' + num);
 //      };
 //      })(i)
      addClickFunctionality(button, i);
      body.appendChild(button);
    }
 }
  
 createButtons();
 
 
 function addClickFunctionality(button, num) {
     button.onclick = function() {
         alert('This is button ' + num);
     }
  }

  // Solution 3:
  //   let is block scoped instead of function scoped
 
function createButtons() {
    for (let i = 1; i <= 5; i++) {
      var body = document.getElementsByTagName("BODY")[0];
      var button = document.createElement("BUTTON");
      button.innerHTML = 'Button ' + i;
      button.onclick = function() {
           alert('This is button ' + i);
      }
      body.appendChild(button);
    }
 }
  
 createButtons();