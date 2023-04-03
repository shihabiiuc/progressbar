const progressbar = document.getElementsByClassName("progress-bar")[0]
setInterval(() => {
  const computedStyle = getComputedStyle(progressbar)
  const width = parseFloat(computedStyle.getPropertyValue('--width')) || 0
  progressbar.style.setProperty('--width', width + .1)
}, 3)
// second example
const progressbarjs = document.getElementsByClassName("js")[0]
setInterval(() => {
  const computedStyleJS = getComputedStyle(progressbarjs)
  const width = parseFloat(computedStyleJS.getPropertyValue('--width')) || 0
  progressbarjs.style.setProperty('--width', width + .1)
}, 10)
// third example
const progressbarts = document.getElementsByClassName("ts")[0]
setInterval(() => {
  const computedStyleTS = getComputedStyle(progressbarts)
  const width = parseFloat(computedStyleTS.getPropertyValue('--width')) || 0
  progressbarts.style.setProperty('--width', width + .1)
}, 20)