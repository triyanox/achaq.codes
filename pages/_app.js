import "../styles/globals.css";
import NextNProgress from "nextjs-progressbar";
import { motion } from "framer-motion";

function MyApp({ Component, pageProps, router }) {
  return (
    <motion.div
      key={router.route}
      initial="pageInitial"
      animate="pageAnimate"
      transition={{ duration: 1 }}
      variants={{ pageInitial: { opacity: 0 }, pageAnimate: { opacity: 1 } }}
    >
      <NextNProgress height={3} color="#6B21A8" />
      <Component {...pageProps} />
    </motion.div>
  );
}

export default MyApp;
