document.addEventListener("DOMContentLoaded", () => {
  const q = document.getElementById("searchInput");
  const genre = document.getElementById("genreSelect");
  const sort = document.getElementById("sortSelect");
  const list = document.getElementById("movieList");
  const empty = document.getElementById("emptyState");

  function normalize(s) { return (s || "").trim().toLowerCase(); }

  function applyFilterAndSort() {
    const query = normalize(q.value);
    const g = normalize(genre.value);

    // filter
    let anyVisible = false;
    Array.from(list.children).forEach(li => {
      const hay = [
        li.dataset.title,
        li.dataset.director,
        li.dataset.cast
      ].join(" ");
      const matchesText = !query || hay.includes(query);
      const matchesGenre = !g || normalize(li.dataset.genre) === g;
      const show = matchesText && matchesGenre;
      li.style.display = show ? "" : "none";
      if (show) anyVisible = true;
    });
    empty.style.display = anyVisible ? "none" : "";

    // sort (only visible items get re-ordered)
    const items = Array.from(list.children).filter(li => li.style.display !== "none");
    items.sort((a, b) => {
      if (sort.value === "year") {
        return Number(a.dataset.year) - Number(b.dataset.year);
      } else {
        return a.dataset.title.localeCompare(b.dataset.title);
      }
    });
    items.forEach(li => list.appendChild(li));
  }

  q.addEventListener("input", applyFilterAndSort);
  genre.addEventListener("change", applyFilterAndSort);
  sort.addEventListener("change", applyFilterAndSort);

  applyFilterAndSort();
});
