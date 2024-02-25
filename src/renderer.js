// renderer.js
import './index.css';

const runBtn = document.getElementById('runBtn')

runBtn.addEventListener('click', () => {
    const url = 'src/examples/platformer/game1.html'
    window.electronAPI.openExample(url)
  })