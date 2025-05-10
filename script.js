function openMap(type) {
  const address = encodeURIComponent("123 Main St, Tulsa, OK");
  if (type === "apple") {
    window.open(`https://maps.apple.com/?q=${address}`);
  } else if (type === "google") {
    window.open(`https://www.google.com/maps/search/?api=1&query=${address}`);
  } else if (type === "waze") {
    window.open(`https://www.waze.com/ul?ll=${address}`);
  }
}
