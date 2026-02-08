// 🎵 Background Music (HTML <audio> element)
const bgMusic = document.getElementById("bgMusic");

// Elements
const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const popup = document.getElementById("popup");

// YES button scaling & messages
let scale = 1;
let clickCount = 0;

const messages = [
  "Yes",
  "Sure na jud?🥹",
  "sure na jud dili na jud mabag o?🥹",
  "Last Chance🥹",
  "Sige na ba Yes na ba🥹",
  "Sige na ba Please say Yes🥹"
];

// 🔊 Start background music on FIRST user interaction (mobile-safe)
document.addEventListener(
  "click",
  () => {
    if (bgMusic && bgMusic.paused) {
      bgMusic
        .play()
        .then(() => {
          console.log("🎵 Music playing");
        })
        .catch(err => {
          console.error("❌ Audio cannot play:", err);
        });
    }
  },
  { once: true }
);

// ❌ NO button behavior
noBtn.addEventListener("click", () => {
  scale += 0.3;
  yesBtn.style.transform = `scale(${scale})`;

  clickCount++;
  yesBtn.textContent =
    clickCount < messages.length
      ? messages[clickCount]
      : messages[messages.length - 1];

  // YES button covers whole screen
  if (scale >= 8) {
    yesBtn.style.position = "fixed";
    yesBtn.style.top = "0";
    yesBtn.style.left = "0";
    yesBtn.style.width = "100vw";
    yesBtn.style.height = "100vh";
    yesBtn.style.borderRadius = "0";
    yesBtn.style.fontSize = "40px";
    yesBtn.style.zIndex = "999";
  }
});

// ✅ YES button popup
yesBtn.addEventListener("click", () => {
  popup.style.display = "flex";
});
