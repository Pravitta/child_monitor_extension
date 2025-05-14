const text = document.body.innerText;

// Send to backend
fetch("http://localhost:5000/api/alerts", {
  method: "POST",
  headers: {
    "Content-Type": "application/json"
  },
  body: JSON.stringify({
    childId: "child123",
    message: "This is a suspicious message"
  })
});
