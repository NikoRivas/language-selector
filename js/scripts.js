window.addEventListener('load', function () {
  let javascriptAnswer = document.getElementById('javascript');
  javascriptAnswer.style.display = 'none';
  let rubyAnswer = document.getElementById('ruby');
  rubyAnswer.style.display = 'none';
  let pythonAnswer = document.getElementById('python');
  pythonAnswer.style.display = 'none';
  let resetBtn = document.getElementById('reset');
  resetBtn.style.display = 'none';
  resetBtn.onclick = function () {
    location.reload();
  };

  let form = document.querySelector('form');
  form.onsubmit = function (event) {
    document.getElementById('quiz').style.display = 'none';
    resetBtn.removeAttribute('style');
    let javascriptCount = 0;
    let rubyCount = 0;
    let pythonCount = 0;
    const allElements = document.querySelectorAll('input');
    for (i = 0; i < allElements.length; i++) {
      if (allElements[i].checked) {
        if (allElements[i].value === 'javascript') {
          javascriptCount++;
        } else if (allElements[i].value === 'ruby') {
          rubyCount++;
        } else if (allElements[i].value === 'python') {
          pythonCount++;
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
    event.preventDefault();
  };
});
