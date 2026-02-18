import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import "../Css/Blogs.css"; // make sure path matches your project

const posts = [
  {
    id: 1,
    title: "The Power of Self-Care in Everyday Life",
    excerpt:
      "Why taking care of your mind and body daily leads to long-term health benefits.",
    img: "https://images.unsplash.com/photo-1588776814546-1b8fdc2d3a22?auto=format&fit=crop&w=1200&q=60",
  },
  {
    id: 2,
    title: "Healthy Nutrition Habits",
    excerpt:
      "Discover how balanced diets improve mental focus, immunity, and energy levels.",
    img: "https://images.unsplash.com/photo-1584467735877-7b7b3a0c9d62?auto=format&fit=crop&w=1200&q=60",
  },
  {
    id: 3,
    title: "Fitness Made Simple",
    excerpt:
      "Easy, effective exercises that you can do at home without equipment.",
    img: "https://images.unsplash.com/photo-1600180758890-6f3b5b3b3a8a?auto=format&fit=crop&w=1200&q=60",
  },
  {
    id: 4,
    title: "Mindfulness for Busy Lives",
    excerpt:
      "Quick and simple meditation techniques to calm your mind in stressful times.",
    img: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=1200&q=60",
  },
];

const FALLBACK =
  "https://via.placeholder.com/1200x800.png?text=Image+not+available";

export default function Blogs() {
  const containerRef = useRef(null);

  useEffect(() => {
    const root = containerRef.current;
    if (!root) return;

    const cards = root.querySelectorAll(".blog-card");
    cards.forEach((c) => c.classList.add("blog-card-hidden"));

    const observer = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("blog-card-visible");
            entry.target.classList.remove("blog-card-hidden");
            obs.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.08 }
    );

    cards.forEach((c) => observer.observe(c));
    return () => observer.disconnect();
  }, []);

  const handleImgError = (e) => {
    e.target.onerror = null;
    e.target.src = FALLBACK;
  };

  return (
    <section
      className="blog-section"
      // style={{ background: "linear-gradient(135deg, #ffb6f9, #ff5bbf)" }}
    >
      <div className="blog-container">
        <div className="blog-header">
          <h2>Our Latest Articles</h2>
          <p>
            Stay updated with wellness tips, nutrition guides, and fitness hacks
          </p>
        </div>

        <div ref={containerRef} className="blog-grid">
          {posts.map((post) => (
            <article className="blog-card" key={post.id}>
              <div className="card-image">
                <img
                  src={post.img}
                  alt={post.title}
                  onError={handleImgError}
                  loading="lazy"
                />
              </div>

              <div className="card-content">
                {/* <span className="badge">Trending</span> */}
                <h3>{post.title}</h3>
                <p className="excerpt">{post.excerpt}</p>

                <div className="card-footer">
                  <Link to={`/blog/${post.id}`} className="read-more">
                    Read More
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
