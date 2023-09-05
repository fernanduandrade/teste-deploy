const lunchVariants = [
  'Jah pode Al mossar?', 'Pod al Mossar?', 'ao mossar?', 'Mossar?'
]

const randomIndex = Math.floor(Math.random() * lunchVariants.length);

const lunchButton = document.getElementById("lunchButton")
lunchButton.textContent = lunchVariants[randomIndex]

const getLunchImgPath = (key) => {
  const options = {
    early: './assets/cooking.png',
    almost: './assets/almost.png',
    ready: './assets/ready.png',
    keep_eating: './assets/keep_eating.png',
    finished: './assets/finished.png',
    not_yet: './assets/almost.png'
  }

  return options[key]
}

const jahPodeAlmossar = () => {
  const currentHour = new Date().getHours()

  const currentPeriod = (hour) => ({
    early: hour === 10,
    almost: hour === 11,
    ready: hour === 12,
    keep_eating: hour === 13,
    finished: hour === 14 && hour <= 18,
    not_yet: hour >= 18 && hour <= 10
  })

  let imgPath;
  if (currentPeriod(currentHour).early) {
    imgPath = getLunchImgPath('early')
  } else if(currentPeriod(currentHour).almost) {
    imgPath = getLunchImgPath('almost')
  } else if(currentPeriod(currentHour).ready) {
    imgPath = getLunchImgPath('ready')
  } else if(currentPeriod(currentHour).keep_eating) {
    imgPath = getLunchImgPath('keep_eating')
  } else if(currentPeriod(currentHour).finished) {
    imgPath = getLunchImgPath('finished')
  } else {
    imgPath = getLunchImgPath('not_yet')
  }

  const lunchButton = document.getElementById("lunchImg")
  lunchButton.src = imgPath
}

lunchButton.addEventListener('click', jahPodeAlmossar);