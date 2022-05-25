import Alpine from 'alpinejs';

Alpine.data('newsSnippet', () => ({

  // Set href of button
  setButtonUrl(el) {
    let url = '';
    if (el.firstElementChild.firstElementChild) {
      url = el.firstElementChild.firstElementChild.href;
      el.getElementsByClassName("bsi-news-btn")[0].href = url;
    } else {
      el.getElementsByClassName("bsi-news-btn")[0].style.display = "none";
    }
  },
}))