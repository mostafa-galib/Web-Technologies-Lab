function showImage() {
  const output = document.getElementById('output');
  output.innerHTML = `
    <div style="width: 200px; margin: auto;">
      <img src="img/img.jpg" alt="Sample Image" style="width: 100%; height: auto; border-radius: 100px;">
    </div>
  `;
}


function showParagraph() {
  const output = document.getElementById('output');
  output.innerHTML = '<p>This is a simple paragraph added when you clicked the button.</p>';
}

function changeColor() {
  document.body.style.backgroundColor = '#f0e68c'; 
}

function showAlert() {
  alert('You clicked the alert button!');
}

function clearOutput() {
  const output = document.getElementById('output');
  output.innerHTML = '';
  document.body.style.backgroundColor = 'white'; 
}

function videoplay() {
  const output = document.getElementById('output');
  output.innerHTML = `
    <div style="width: 100%; max-width: 560px; margin: auto;">
      <iframe width="100%" height="315" src="https://www.youtube.com/embed/n7AEH5o5Se4" 
        title="YouTube video player" frameborder="0" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
        allowfullscreen>
      </iframe>
    </div>
  `;
}



