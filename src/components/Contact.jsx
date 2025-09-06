import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';

const Contact = () => {
  return (
    <motion.section
      
      className="section contact"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <h2 id="contactus">Contact Me</h2>
      <p>
        <MdEmail style={{ marginRight: '8px' }} />
        Email: <a href="mailto:tejnaidukumpatla143dp@gmail.com">tejnaidukumpatla143dp@gmail.com</a>
      </p>
      <p>
        <FaLinkedin style={{ marginRight: '8px' }} />
        LinkedIn:{' '}
        <a
          href="https://www.linkedin.com/in/saiteja-kumpatla-a724b8293/"
          target="_blank"
          rel="noopener noreferrer"
        >
          linkedin.com/in/saiteja
        </a>
      </p>
      <p>
        <FaGithub style={{ marginRight: '8px' }} />
        GitHub:{' '}
        <a
          href="https://github.com/tejnaiduu"
          target="_blank"
          rel="noopener noreferrer"
        >
          github.com/tejnaidu
        </a>
      </p>
    </motion.section>
  );
};

export default Contact;
