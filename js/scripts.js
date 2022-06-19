window.onload = function () {
  event.preventDefault();
  let javascriptAnswer = document.getElementById('javascript');
  javascriptAnswer.style.display = 'none';
  let rubyAnswer = document.getElementById('ruby');
  rubyAnswer.style.display = 'none';
  let pythonAnswer = document.getElementById('python');
  pythonAnswer.style.display = 'none';

  let form = document.querySelector('form');
  form.onsubmit = function (event) {
    function getInputsByValue(input) {
      let javascriptCount = 0;
      let rubyCount = 0;
      let pythonCount = 0;
      const allElements = document.querySelectorAll('input');
      for (i = 0; i < allElements.length; i++) {
        allElements[i];
        if (allElements[i].checked === true) {
          if (allElements[i] === 'javascript') {
            javascriptCount++;
          } else if (allElements[i] === 'ruby') {
            rubyCount++;
          } else if (allElements[i] === 'python') {
            pythonCount++;
          }
        }
      }
    }
    if (javascriptCount > rubyCount && javascriptCount > pythonCount) {
      javascriptAnswer.style.display = 'block';
    } else if (rubyCount > javascriptCount && rubyCount > pythonCount) {
      rubyAnswer.style.display = 'block';
    } else if (pythonCount > javascriptCount && pythonCount > rubyCount) {
      pythonAnswer.style.display = 'block';
    } else {
      javascriptAnswer.style.display = 'block';
    }
  };
};
