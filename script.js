const channel = "YOUR_CHANNEL";

// simple check (visual indicator later if you want)
async function checkLive() {
  try {
    const res = await fetch(`https://decapi.me/twitch/uptime/${channel}`);
    const text = await res.text();

    if (text.includes("offline")) {
      console.log("Stream is offline");
    } else {
      console.log("Stream is LIVE");
    }
  } catch (err) {
    console.error("Error checking stream:", err);
  }
}

setInterval(checkLive, 60000);
checkLive();