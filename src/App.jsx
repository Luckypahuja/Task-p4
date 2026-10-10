import { Link, Routes, Route } from "react-router-dom";

import Login from "./pages/Login";

import Signup from "./pages/Signup";





import React, { useState } from "react";

import {

  Github,

  Instagram,

  Linkedin,

  Mail,

  Star,

  Twitter,

  Facebook,

  ArrowRight,

  BookOpen,

  FileText

} from "lucide-react";



const articles = [

  {

    title: "Getting Started with React",

    description: "Learn components, JSX and the basics of building React applications.",

    rating: 5,

    author: "Lucky",

    image:

      "https://images.unsplash.com/photo-1633356122544-f134324a6cee?auto=format&fit=crop&w=800&q=80"

  },

  {

    title: "Understanding Node.js",

    description: "Explore server-side JavaScript and how Node.js supports web applications.",

    rating: 5,

    author: "Alex",

    image:

      "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=800&q=80"

  },

  {

    title: "Introduction to Web Development",

    description: "Understand the technologies used to create modern interactive websites.",

    rating: 4.9,

    author: "Sarah",

    image:

      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80"

  }

];



const tutorials = [

  {

    title: "JavaScript Basics",

    description: "Build a strong foundation in variables, loops, functions and arrays.",

    rating: 5,

    author: "Lucky",

    image:

      "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?auto=format&fit=crop&w=800&q=80"

  },

  {

    title: "React Components",

    description: "Learn how parent and child components work together in React.",

    rating: 5,

    author: "David",

    image:

      "https://images.unsplash.com/photo-1558655146-9f40138edfeb?auto=format&fit=crop&w=800&q=80"

  },

  {

    title: "Express.js Fundamentals",

    description: "Create the foundation of a backend application with Express.js.",

    rating: 4.9,

    author: "Emma",

    image:

      "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=800&q=80"

  }

];





function Navbar() {



  const [search, setSearch] = useState("");



  function handleSearch(event) {
    event.preventDefault();

    const query = search.trim().toLowerCase();
    if (!query) return;

    // Searchable sections are listed here so search also works on /login and /signup,
    // where the homepage sections are not mounted in the DOM.
    const searchItems = [
      {
        id: "home",
        keywords: ["home", "homepage", "portfolio", "lucky pahuja", "main page"],
      },
      {
        id: "about",
        keywords: [
          "about", "about me", "profile", "skills", "c++", "python", "sql",
          "linux", "ai", "ml", "web development",
        ],
      },
      {
        id: "articles",
        keywords: [
          "article", "articles", "react", "getting started with react",
          "node.js", "understanding node.js", "introduction to web development",
        ],
      },
      {
        id: "tutorials",
        keywords: [
          "tutorial", "tutorials", "javascript", "javascript basics",
          "react components", "express.js", "express.js fundamentals",
        ],
      },
      {
        id: "projects",
        keywords: [
          "project", "projects", "brd", "brd generator", "flappy bird", "game",
        ],
      },
      {
        id: "newsletter",
        keywords: ["newsletter", "subscribe", "subscription", "stay updated"],
      },
      {
        id: "contact",
        keywords: ["contact", "support", "faqs", "faq", "help", "contact us"],
      },
    ];

    const match = searchItems.find((item) =>
      item.keywords.some(
        (keyword) =>
          keyword === query ||
          (query.length >= 3 && keyword.includes(query)) ||
          (keyword.length >= 3 && query.includes(keyword))
      )
    );

    if (!match) {
      window.alert("No matching content found. Try Home, Articles, Tutorials, Projects, About, or Contact.");
      return;
    }

    // Scroll directly when already on the homepage; otherwise open the homepage
    // at the requested section from Login or Sign Up.
    if (window.location.pathname === "/") {
      const section = document.getElementById(match.id);
      if (section) {
        section.scrollIntoView({ behavior: "smooth", block: "start" });
        window.history.replaceState(null, "", `/#${match.id}`);
        return;
      }
    }

    window.location.href = `/#${match.id}`;
  }

  return (

    <nav className="navbar">

      <Link className="brand" to="/">

        DEV@Deakin

      </Link>



      <form className="nav-search-form" onSubmit={handleSearch}>

        <input

          className="nav-search"

          type="search"

          placeholder="Search articles, tutorials, projects..."

          aria-label="Search website content"

          value={search}

          onChange={(event) => setSearch(event.target.value)}

        />

        <button type="submit" className="nav-search-button">

          Search

        </button>

      </form>



      <div className="nav-actions">

        <Link to="/login" className="nav-link">

          Login

        </Link>

        <Link to="/signup" className="nav-signup">

          Sign Up

        </Link>

      </div>

    </nav>

  );



}





function Hero() {

  return (

    <section className="hero" id="home">

      <div className="hero-content">

        <p className="eyebrow">MY PORTFOLIO</p>

        <h1>Hi, I'm Lucky Pahuja.</h1>

        <p>

          AI/ML student and developer interested in software development,

          data, artificial intelligence and building practical projects.

        </p>

        <div className="hero-buttons">

          <a href="/#articles" className="primary-button">

            Explore Articles <ArrowRight size={18} />

          </a>

          <a href="/#tutorials" className="secondary-button">

            View Tutorials

          </a>

        </div>

      </div>

    </section>

  );

}



function Profile() {

  return (

    <section className="profile-section" id="about">

      <div className="profile-image-wrapper">

        <img src="/image.png" alt="Lucky Pahuja" className="profile-image" />

      </div>

      <div className="profile-content">

        <p className="eyebrow">About Me</p>

        <h2>I'm Lucky Pahuja</h2>

        <p>

          I am a second-year AI/ML student interested in technology,

          software development and building real-world applications.

        </p>

        <div className="skills-list">

          <span>C++</span>

          <span>Python</span>

          <span>SQL</span>

          <span>Web Development</span>

          <span>Linux</span>

          <span>AI / ML</span>

        </div>

      </div>

    </section>

  );

}



function Rating({ rating }) {

  return (

    <div className="rating">

      <Star size={16} fill="currentColor" />

      <span>{rating}</span>

    </div>

  );

}



function ArticleCard({ article }) {

  return (

    <article className="content-card">

      <img src={article.image} alt={article.title} />

      <div className="card-body">

        <span className="card-type">

          <FileText size={15} /> Article

        </span>

        <h3>{article.title}</h3>

        <p>{article.description}</p>

        <div className="card-meta">

          <Rating rating={article.rating} />

          <span>{article.author}</span>

        </div>

      </div>

    </article>

  );

}



function FeaturedArticles() {

  return (

    <section className="content-section" id="articles">

      <div className="section-heading">

        <div>

          <p className="eyebrow">Discover</p>

          <h2>Featured Articles</h2>

        </div>

        <a href="/#articles" className="text-link">

          See all articles <ArrowRight size={17} />

        </a>

      </div>



      <div className="card-grid">

        {articles.map((article) => (

          <ArticleCard key={article.title} article={article} />

        ))}

      </div>



      <div className="mobile-see-more">

        <a href="/#articles" className="secondary-button">See all articles</a>

      </div>

    </section>

  );

}



function TutorialCard({ tutorial }) {

  return (

    <article className="content-card">

      <img src={tutorial.image} alt={tutorial.title} />

      <div className="card-body">

        <span className="card-type">

          <BookOpen size={15} /> Tutorial

        </span>

        <h3>{tutorial.title}</h3>

        <p>{tutorial.description}</p>

        <div className="card-meta">

          <Rating rating={tutorial.rating} />

          <span>{tutorial.author}</span>

        </div>

      </div>

    </article>

  );

}



function FeaturedTutorials() {

  return (

    <section className="content-section alternate-section" id="tutorials">

      <div className="section-heading">

        <div>

          <p className="eyebrow">Learn</p>

          <h2>Featured Tutorials</h2>

        </div>

        <a href="/#tutorials" className="text-link">

          See all tutorials <ArrowRight size={17} />

        </a>

      </div>



      <div className="card-grid">

        {tutorials.map((tutorial) => (

          <TutorialCard key={tutorial.title} tutorial={tutorial} />

        ))}

      </div>



      <div className="mobile-see-more">

        <a href="/#tutorials" className="secondary-button">See all tutorials</a>

      </div>

    </section>

  );

}



function Projects() {

  return (

    <section className="projects-section" id="projects">

      <div className="section-heading">

        <div>

          <p className="eyebrow">Build</p>

          <h2>Featured Projects</h2>

        </div>

      </div>



      <div className="project-grid">

        <article className="project-card">

          <img

            src="https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=1000&q=80"

            alt="Business planning project"

          />

          <div>

            <h3>BRD Generator</h3>

            <p>

              A project that helps startup founders turn ideas into structured

              business requirements and explore important business questions.

            </p>

            <a href="https://github.com/Luckypahuja" target="_blank" rel="noreferrer">

              GitHub Repository <ArrowRight size={17} />

            </a>

          </div>

        </article>



        <article className="project-card">

          <img

            src="https://images.unsplash.com/photo-1511512578047-dfb367046420?auto=format&fit=crop&w=1000&q=80"

            alt="Game development project"

          />

          <div>

            <h3>Flappy Bird</h3>

            <p>

              A Flappy Bird style game created in C# using the SplashKit

              visualization library.

            </p>

            <a href="https://github.com/Luckypahuja" target="_blank" rel="noreferrer">

              GitHub Profile <ArrowRight size={17} />

            </a>

          </div>

        </article>

      </div>

    </section>

  );

}



function Newsletter() {

  const [email, setEmail] = useState("");

  const [message, setMessage] = useState("");



  function handleSubscribe(event) {

    event.preventDefault();



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



function Footer() {

  return (

    <footer className="footer" id="contact">

      <div className="footer-grid">

        <div>

          <h3>DEV@Deakin</h3>

          <p>

            A student-focused platform for learning, sharing and building

            technology projects.

          </p>

        </div>



        <div>

          <h4>Explore</h4>

          <a href="/#home">Home</a>

          <a href="/#articles">Articles</a>

          <a href="/#tutorials">Tutorials</a>

          <a href="/#projects">Projects</a>

        </div>



        <div>

          <h4>Support</h4>

          <a href="/#contact">FAQs</a>

          <a href="/#contact">Help</a>

          <a href="mailto:lucky9132.ai25@chitkara.edu.in">Contact Us</a>

        </div>



        <div>

          <h4>Stay connected</h4>

          <div className="socials">

            <a href="https://github.com/Luckypahuja" target="_blank" rel="noreferrer" aria-label="GitHub">

              <Github size={20} />

            </a>

            <a href="#" aria-label="Facebook">

              <Facebook size={20} />

            </a>

            <a href="#" aria-label="Twitter">

              <Twitter size={20} />

            </a>

            <a href="#" aria-label="Instagram">

              <Instagram size={20} />

            </a>

            <a href="#" aria-label="LinkedIn">

              <Linkedin size={20} />

            </a>

          </div>

          <p className="contact-email">

            <Mail size={16} />

            lucky9132.ai25@chitkara.edu.in

          </p>

        </div>

      </div>



      <div className="footer-bottom">

        <strong>Lucky Pahuja — Portfolio</strong>

        <div>

          <a href="/#contact">Privacy Policy</a>

          <a href="/#contact">Terms</a>

          <a href="/#contact">Code of Conduct</a>

        </div>

      </div>

    </footer>

  );

}





function HomePage() {

  return (

    <main>

      <Hero />

      <Profile />

      <FeaturedArticles />

      <FeaturedTutorials />

      <Projects />

      <Newsletter />

    </main>

  );

}



function App() {

  return (

    <>

      <Navbar />



      <Routes>

        <Route path="/" element={<HomePage />} />

        <Route path="/login" element={<Login />} />

        <Route path="/signup" element={<Signup />} />

      </Routes>





      <Footer />

    </>

  );

}



export default App;





// function App() {

//   return (

//     <>

//       <Navbar />

//       <main>

//         <Hero />

//         <Profile />

//         <FeaturedArticles />

//         <FeaturedTutorials />

//         <Projects />

//         <Newsletter />

//       </main>

//       <Footer />

//     </>

//   );

// }



// export default App;
