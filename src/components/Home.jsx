import { motion } from 'framer-motion';

const Home = () => {
  return (
    <motion.section
      id="home"
      className="section home"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <h2 id="homep">Welcome to My Portfolio</h2>
      <p>
        I’m Kumpatla Poorna Chandra Sai Teja, a dedicated developer with expertise in the MERN stack and Machine Learning.
        I enjoy building efficient, intelligent, and user-centric web applications.
      </p>
      <p>
        Explore my projects, skills, and experiences. Let’s build something great together!
      </p>
      <a href="/teja.pdf" download className="btn-download">
        Download Resume
      </a>
    </motion.section>
  );
};

export default Home;
