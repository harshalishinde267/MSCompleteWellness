import { useParams, Link } from "react-router-dom";
import "../Css/BlogDetails.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Facebook, Linkedin, Instagram, Twitter } from "lucide-react";

const blogData = {
  1: {
    title: "The Power of Self-Care in Everyday Life",
    date: "5 Mar 2025",
    author: "Admin",
    image:
      "https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=1200&q=60",
    content: `
      <p>Staying informed about your well-being is the first step toward a healthier lifestyle.</p>
      <blockquote>
        Harmonize Your Energy Centers for Inner Peace and Well-Being.
      </blockquote>
      <h2>Unlock your best health</h2>
      <ul>
        <li>Discover expert-backed advice.</li>
        <li>Stay informed with latest research.</li>
      </ul>
    `,
    tags: ["Healthcoach", "Activelifestyle", "Stressrelief"],
  },
};

export default function BlogDetail() {
  const { id } = useParams();
  const post = blogData[id];

  if (!post) return <p className="p-10">Post not found</p>;

  return (
    <>
      {/* Navbar */}
      <Navbar />

      <section>
        <div className="blog-detail">
          {/* Header Section */}
          <div className="blog-header py-16">
            <h1 className="text-4xl font-bold">{post.title}</h1>
            <p className="mt-3 text-sm">
              👤 {post.author} | 📅 {post.date}
            </p>
          </div>

          {/* Content */}
          <div className="container mx-auto px-6 lg:px-20 py-12 max-w-5xl">
            <img
              src={post.image}
              alt={post.title}
              className="blog-detail-image"
            />
            <article
              className="blog-detail-content"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />
            {/* Tags + Social */}
            <div className="tags-share-row">
              {post.tags && (
                <div className="blog-tags">
                  <span className="font-semibold">Tags:</span>
                  {post.tags.map((tag) => (
                    <span key={tag} className="tag">
                      {tag}
                    </span>
                  ))}
                </div>
              )}

              {/* SOCIAL ICONS */}
              <div className="social-share">
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                  className="social-icon"
                >
                  <Facebook size={20} />
                </a>

                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="social-icon"
                >
                  <Linkedin size={20} />
                </a>

                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  className="social-icon"
                >
                  <Instagram size={20} />
                </a>

                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Twitter"
                  className="social-icon"
                >
                  <Twitter size={20} />
                </a>
              </div>
            </div>{" "}
            {/* ✅ THIS DIV WAS MISSING */}
            {/* Back link */}
            <div className="mt-8">
              <Link to="/Blog" className="back-to-blog">
                ← Back to Blog
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </>
  );
}
