<<<<<<< HEAD
import { useParams, Link } from "react-router-dom";
import "../Css/BlogDetails.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const blogData = {
  1: {
    title: "The Power of Self-Care in Everyday Life",
    date: "5 Mar 2025",
    author: "Admin",
    image:
      "https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=1200&q=60",
    content: `
      <p>Staying informed about your well-being is the first step toward a healthier lifestyle. Our expert-driven health insights provide valuable information on nutrition, fitness, mental wellness, and preventive care. Whether you're looking for practical tips, the latest research, or personalized wellness strategies, we offer reliable content to guide your journey toward better health.</p>
      <p>From understanding the impact of daily habits to making informed decisions about your diet and exercise, our blog is designed to educate and inspire. We believe that small, consistent changes lead to long-term success, and our goal is to empower you with the knowledge and motivation needed to achieve a balanced and fulfilling life.</p>

      <blockquote>
        Harmonize Your Energy Centers for Inner Peace and Well-Being Through the Transformative Power
        of Chakra Balancing with Yoga and Meditation Unlocking Physical Vitality, Emotional Stability, and Spiritual Growth.
      </blockquote>

      <p>From understanding the impact of daily habits to making informed decisions about your diet and exercise, our blog is designed to educate and inspire. We believe that small, consistent changes lead to long-term success, and our goal is to empower you with the knowledge and motivation needed to achieve a balanced and fulfilling life.</p>

      <h2>Unlock your best health</h2>

      <p>From understanding the impact of daily habits to making informed decisions about your diet and exercise, our blog is designed to educate and inspire. We believe that small, consistent changes lead to long-term success.</p>

      <ul>
        <li>Discover expert-backed advice tailored to help you improve your nutrition, fitness, and well-being.</li>
        <li>Stay informed with the latest research and evidence-based strategies.</li>
        <li>Learn how mental well-being and physical health are interconnected.</li>
        <li>Get practical guidance on building long-term healthy habits.</li>
        <li>Gain encouragement from health professionals to stay on track with your wellness goals.</li>
      </ul>

      <p>From understanding the impact of daily habits to making informed decisions about your diet and exercise, our blog is designed to educate and inspire. We believe that small, consistent changes lead to long-term success.</p>

    `,
    tags: ["Healthcoach", "Activelifestyle", "Stressrelief"],
  },
  2: {
    title: "Healthy Nutrition Habits",
    content: "Full article for blog 2...",
  },
  3: {
    title: "Fitness Made Simple",
    content: "Full article for blog 3...",
  },
  4: {
    title: "Mindfulness for Busy Lives",
    content: "Full article for blog 4...",
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
            <h1 className="text-4xl font-bold">{post.title}</h1>{" "}
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

              <div className="social-share">
                <a href="#" className="icon fb">
                  f
                </a>
                <a href="#" className="icon in">
                  in
                </a>
                <a href="#" className="icon ig">
                  📷
                </a>
                <a href="#" className="icon tw">
                  X
                </a>
              </div>
            </div>

            {/* Back link */}
            <div className="mt-8">
              <Link
                to="/Blog"
                className="back-to-blog"
                //   className="text-pink-600 hover:underline font-semibold"
              >
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
=======
import { useParams, Link } from "react-router-dom";
import "../Css/BlogDetails.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const blogData = {
  1: {
    title: "The Power of Self-Care in Everyday Life",
    date: "5 Mar 2025",
    author: "Admin",
    image:
      "https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=1200&q=60",
    content: `
      <p>Staying informed about your well-being is the first step toward a healthier lifestyle. Our expert-driven health insights provide valuable information on nutrition, fitness, mental wellness, and preventive care. Whether you're looking for practical tips, the latest research, or personalized wellness strategies, we offer reliable content to guide your journey toward better health.</p>
      <p>From understanding the impact of daily habits to making informed decisions about your diet and exercise, our blog is designed to educate and inspire. We believe that small, consistent changes lead to long-term success, and our goal is to empower you with the knowledge and motivation needed to achieve a balanced and fulfilling life.</p>

      <blockquote>
        Harmonize Your Energy Centers for Inner Peace and Well-Being Through the Transformative Power
        of Chakra Balancing with Yoga and Meditation Unlocking Physical Vitality, Emotional Stability, and Spiritual Growth.
      </blockquote>

      <p>From understanding the impact of daily habits to making informed decisions about your diet and exercise, our blog is designed to educate and inspire. We believe that small, consistent changes lead to long-term success, and our goal is to empower you with the knowledge and motivation needed to achieve a balanced and fulfilling life.</p>

      <h2>Unlock your best health</h2>

      <p>From understanding the impact of daily habits to making informed decisions about your diet and exercise, our blog is designed to educate and inspire. We believe that small, consistent changes lead to long-term success.</p>

      <ul>
        <li>Discover expert-backed advice tailored to help you improve your nutrition, fitness, and well-being.</li>
        <li>Stay informed with the latest research and evidence-based strategies.</li>
        <li>Learn how mental well-being and physical health are interconnected.</li>
        <li>Get practical guidance on building long-term healthy habits.</li>
        <li>Gain encouragement from health professionals to stay on track with your wellness goals.</li>
      </ul>

      <p>From understanding the impact of daily habits to making informed decisions about your diet and exercise, our blog is designed to educate and inspire. We believe that small, consistent changes lead to long-term success.</p>

    `,
    tags: ["Healthcoach", "Activelifestyle", "Stressrelief"],
  },
  2: {
    title: "Healthy Nutrition Habits",
    content: "Full article for blog 2...",
  },
  3: {
    title: "Fitness Made Simple",
    content: "Full article for blog 3...",
  },
  4: {
    title: "Mindfulness for Busy Lives",
    content: "Full article for blog 4...",
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
            <h1 className="text-4xl font-bold">{post.title}</h1>{" "}
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

              <div className="social-share">
                <a href="#" className="icon fb">
                  f
                </a>
                <a href="#" className="icon in">
                  in
                </a>
                <a href="#" className="icon ig">
                  📷
                </a>
                <a href="#" className="icon tw">
                  X
                </a>
              </div>
            </div>

            {/* Back link */}
            <div className="mt-8">
              <Link
                to="/Blog"
                className="back-to-blog"
                //   className="text-pink-600 hover:underline font-semibold"
              >
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
>>>>>>> c768e10a8b9240f8cb33177b72ef395fd7c67bc6
