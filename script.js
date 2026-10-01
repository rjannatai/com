// RJannatAi - script.js

document.addEventListener("DOMContentLoaded", () => {

  // =========================
  // Mobile Menu
  // =========================
  const menuBtn = document.getElementById("menuBtn");
  const navLinks = document.getElementById("navLinks");

  if (menuBtn && navLinks) {
    menuBtn.addEventListener("click", () => {
      navLinks.classList.toggle("active");
    });
  }

  // =========================
  // AI Chat Demo
  // =========================
  const chatForm = document.getElementById("chatForm");
  const chatInput = document.getElementById("chatInput");
  const chatMessages = document.getElementById("chatMessages");

  if (chatForm && chatInput && chatMessages) {

    chatForm.addEventListener("submit", (e) => {
      e.preventDefault();

      const message = chatInput.value.trim();

      if (!message) return;

      // User message
      addMessage("You", message, "user");

      chatInput.value = "";

      // Demo AI response
      setTimeout(() => {

        let reply =
          "Hello! 👋 I'm RJannatAi. This is a demo AI chat interface. Connect your AI backend/API to make me fully functional.";

        const text = message.toLowerCase();

        if (text.includes("hello") || text.includes("hi")) {
          reply = "Hello! 👋 Welcome to RJannatAi. How can I help you?";
        }

        if (text.includes("name")) {
          reply = "My name is RJannatAi 🤖 — One AI. Infinite Possibilities.";
        }

        if (text.includes("website")) {
          reply = "RJannatAi is an AI platform concept with Chat, Image, Video, Voice, Code, Search and more.";
        }

        addMessage("RJannatAi", reply, "ai");

      }, 700);
    });
  }


  // =========================
  // Add Chat Message
  // =========================
  function addMessage(sender, message, type) {

    const messageDiv = document.createElement("div");

    messageDiv.className = `chat-message ${type}`;

    messageDiv.innerHTML = `
      <div class="message-sender">${escapeHTML(sender)}</div>
      <div class="message-text">${escapeHTML(message)}</div>
    `;

    chatMessages.appendChild(messageDiv);

    chatMessages.scrollTop = chatMessages.scrollHeight;
  }


  // =========================
  // Security Helper
  // =========================
  function escapeHTML(text) {

    const div = document.createElement("div");

    div.textContent = text;

    return div.innerHTML;
  }


  // =========================
  // AI Tool Buttons
  // =========================
  const toolButtons = document.querySelectorAll(".tool-card");

  toolButtons.forEach((tool) => {

    tool.addEventListener("click", () => {

      const toolName =
        tool.querySelector("h3")?.textContent || "AI Tool";

      alert(
        `${toolName} selected! 🤖\n\nThis tool is ready for your AI backend/API integration.`
      );

    });

  });


  // =========================
  // Scroll Animation
  // =========================
  const sections = document.querySelectorAll(".animate");

  const observer = new IntersectionObserver(
    (entries) => {

      entries.forEach((entry) => {

        if (entry.isIntersecting) {
          entry.target.classList.add("show");
        }

      });

    },
    {
      threshold: 0.15
    }
  );

  sections.forEach((section) => {
    observer.observe(section);
  });


  // =========================
  // Current Year
  // =========================
  const year = document.getElementById("year");

  if (year) {
    year.textContent = new Date().getFullYear();
  }

});
