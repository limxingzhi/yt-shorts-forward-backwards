function getShortsPlayer () {
  const nodes = Array.from(document.querySelectorAll('video'))
  if (nodes.length === 3) return nodes[1]
  else if (nodes.length === 2) return nodes[0]
  else return null
}

document.addEventListener('keydown', function(event) {
  // checkf if URL is a shorts URL
  if (!window.location.href.includes('youtube.com/shorts')) return

  if (event.key === 'ArrowLeft') {
    const player = getShortsPlayer()
    if (player) player.currentTime -=3
  } else if (event.key === 'ArrowRight') {
    const player = getShortsPlayer()
    if (player) player.currentTime +=3
  } else if (event.key === 'f') {
    const player = getShortsPlayer()
    if (player && player?.requestFullscreen) {
      player?.requestFullscreen?.()?.then(() => {
        player.style['object-fit'] = 'contain'
      })
    }
  }
});
