// Popup entry for the 2aran article distribution workspace.
document.getElementById('openDistribution').addEventListener('click', (e) => {
  e.preventDefault()
  chrome.tabs.create({ url: 'https://2aran.com/admin/article-distribution' })
  window.close()
})
