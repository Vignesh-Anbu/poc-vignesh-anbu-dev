document.addEventListener('DOMContentLoaded', () => {
  const magicBox = document.getElementById('magicBox');
  const messageDiv = document.getElementById('message');
  const puzzlesDiv = document.getElementById('puzzles');
  const startButton = document.getElementById('startButton');
  const userNameInput = document.getElementById('userName');
  const greeting = document.getElementById('greeting');
  const personalizedGreeting = document.getElementById('personalizedGreeting');

  const puzzlesCompleted = [false, false, false];

  const checkPuzzlesCompletion = () => {
    return puzzlesCompleted.every(completed => completed);
  };

  const openMagicBox = () => {
    if (checkPuzzlesCompletion()) {
      magicBox.classList.add('open');
      messageDiv.style.display = 'block';
      puzzlesDiv.style.display = 'none';
    }
  };

  startButton.addEventListener('click', function() {
    const userName = userNameInput.value.trim();
    if (userName) {
      greeting.innerHTML = `Happy Birthday,<br> ${userName}!`;
      personalizedGreeting.innerHTML = `Vannakam, ${userName}`;
      puzzlesDiv.style.display = 'block';
      startButton.parentElement.style.display = 'none';
    } else {
      alert('Please enter your name.');
    }
  });

  // Display puzzles one by one
  const displayNextPuzzle = (currentPuzzle) => {
    const nextPuzzle = document.getElementById(`puzzle${currentPuzzle + 1}`);
    if (nextPuzzle) {
      nextPuzzle.style.display = 'block';
    }
  };

  const quoteOptions1 = document.querySelectorAll('#puzzle1 .quoteOption');
  const quoteBlank1 = document.getElementById('quoteBlank1');

  quoteOptions1.forEach(option => {
    option.addEventListener('click', () => {
      if (option.dataset.answer === 'correct') {
        quoteBlank1.textContent = 'Arambikalam';
        puzzlesCompleted[0] = true;
        document.getElementById('puzzle1').style.display = 'none';
        displayNextPuzzle(1);
      } else {
        alert('Try again!');
      }
    });
  });

  // Puzzle 2 logic
  const pairs = document.querySelectorAll('.pair');
  let firstPair = null;
  let secondPair = null;

  pairs.forEach(pair => {
    pair.addEventListener('click', () => {
      if (!firstPair) {
        firstPair = pair;
        pair.classList.add('selected');
      } else if (!secondPair && pair !== firstPair) {
        secondPair = pair;
        pair.classList.add('selected');

        if (firstPair.dataset.pair === secondPair.dataset.pair) {
          setTimeout(() => {
            firstPair.classList.add('correct');
            secondPair.classList.add('correct');
            firstPair.classList.remove('selected');
            secondPair.classList.remove('selected');
            firstPair.style.visibility = 'hidden';
            secondPair.style.visibility = 'hidden';
            firstPair = null;
            secondPair = null;

            if (Array.from(pairs).every(p => p.style.visibility === 'hidden')) {
              puzzlesCompleted[1] = true;
              document.getElementById('puzzle2').style.display = 'none';
              displayNextPuzzle(2);
            }
          }, 500);
        } else {
          setTimeout(() => {
            firstPair.classList.add('incorrect');
            secondPair.classList.add('incorrect');
            setTimeout(() => {
              firstPair.classList.remove('selected', 'incorrect');
              secondPair.classList.remove('selected', 'incorrect');
              firstPair = null;
              secondPair = null;
            }, 500);
            alert('Try again!');
          }, 500);
        }
      }
    });
  });

  // Puzzle 3 logic
  const quoteOptions3 = document.querySelectorAll('#puzzle3 .quoteOption');
  const quoteBlank3 = document.getElementById('quoteBlank');

  quoteOptions3.forEach(option => {
    option.addEventListener('click', () => {
      if (option.dataset.answer === 'correct') {
        quoteBlank3.textContent = 'I love you';
        puzzlesCompleted[2] = true;
        openMagicBox();
      } else {
        alert('Try again!');
      }
    });
  });
});
