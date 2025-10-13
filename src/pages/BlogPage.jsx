import Blog from '../components/Blog/Blog';
import './BlogPage.css';

const BlogPage = () => {
  const posts = [
    {
      title: "The Future of AI in Software Development",
      excerpt: "Discover how artificial intelligence is transforming the way we build and deploy software applications in 2025.",
      category: "Technology",
      date: "2025-01-10",
      author: {
        name: "Ankit Singh"
      }
    },
    {
      title: "Building Scalable Cloud Solutions",
      excerpt: "Learn essential strategies for creating cloud infrastructure that grows with your business needs.",
      category: "Business",
      date: "2025-01-08",
      author: {
        name: "Kunal Ayachit"
      }
    },
    {
      title: "Microservices Architecture Best Practices",
      excerpt: "Explore proven patterns and techniques for implementing microservices in modern applications.",
      category: "Technology",
      date: "2025-01-05",
      author: {
        name: "Shyam Gupta"
      }
    },
    {
      title: "Innovation Through Digital Transformation",
      excerpt: "How companies are leveraging technology to drive innovation and stay competitive.",
      category: "Innovation",
      date: "2025-01-03",
      author: {
        name: "Sadhna Dixit"
      }
    },
    {
      title: "Cybersecurity in the Modern Era",
      excerpt: "Essential security practices every organization needs to protect their digital assets.",
      category: "Technology",
      date: "2024-12-28",
      author: {
        name: "Dhawal Tora"
      }
    }
  ];

  return (
    <div className="blog-page">
      <Blog posts={posts} />
    </div>
  );
};

export default BlogPage;