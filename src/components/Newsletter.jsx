// Newsletter.jsx - "Sign up for our daily insider" box (id="newsletter").
// Uses its own local state (email + message).
import React, { useState } from "react";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  function handleSubscribe(event) {
    event.preventDefault(); // stop the page from reloading

    if (!email.trim()) {
      setMessage("Please enter your email address.");
      return;
    }

    setMessage("Thanks! You are subscribed.");
    setEmail("");
  }

  return (
    <section className="newsletter" id="newsletter">
      <div>
        <p className="eyebrow">Stay updated</p>
        <h2>Sign up for our daily insider</h2>
        <p>Get useful development articles and tutorials in your inbox.</p>
      </div>

      <form onSubmit={handleSubscribe}>
        <input
          type="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          placeholder="Enter your email"
          aria-label="Email address"
        />
        <button type="submit">Subscribe</button>
      </form>

      {message && <p className="newsletter-message">{message}</p>}
    </section>
  );
}
