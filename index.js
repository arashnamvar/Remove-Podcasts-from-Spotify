const podcastLabels = ['podcasts', 'Podcasts', 'Podcast', 'podcast', 'Informed', 'episodes', 'shows', 'Popular with', 'Episodes for you'];

const removePodcastSections = label => {
  const podcastNodes = document.querySelectorAll(`[aria-label*="${label}"], [href*="${label}"]`);
  podcastNodes.forEach(node => {
    node.remove();
  })
}

const observer = new MutationObserver(() => podcastLabels.forEach(removePodcastSections));
observer.observe(document.body, { subtree: true, childList: true });