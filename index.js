// Page switch
function showPage(page) {
  document.querySelectorAll("section").forEach(sec => {
    sec.classList.remove("active");
  });

  document.getElementById(page).classList.add("active");

  // scroll top
  window.scrollTo({ top: 0, behavior: "smooth" });
}

// Generate Notes
function generateNotes() {
  let study = document.getElementById("study").value;
  let sleep = document.getElementById("sleep").value;
  let project = document.getElementById("project").value;
  let vlog = document.getElementById("vlog").value;

  if (!study && !sleep && !project && !vlog) {
    alert("Bhai kuch to likh 😅");
    return;
  }

  let content = `
    <h2>📘 Study</h2><p>${study || "—"}</p>
    <h2>😴 Sleep</h2><p>${sleep || "—"}</p>
    <h2>💻 Project</h2><p>${project || "—"}</p>
    <h2>🎥 Vlog</h2><p>${vlog || "—"}</p>
  `;

  document.getElementById("notesContent").innerHTML = content;
  localStorage.setItem("notes", content);

  showPage("notes");
}

// Load Notes
window.onload = function () {
  let saved = localStorage.getItem("notes");
  if (saved) {
    document.getElementById("notesContent").innerHTML = saved;
  }
};

// YouTube
function openYouTube() {
  let query = document.getElementById("search").value;

  if (query.trim() === "") {
    window.open("https://www.youtube.com", "_blank");
  } else {
    window.open(
      "https://www.youtube.com/results?search_query=" +
      encodeURIComponent(query),
      "_blank"
    );
  }
}

// Spotify
function openSpotify() {
  window.open("https://open.spotify.com", "_blank");
}