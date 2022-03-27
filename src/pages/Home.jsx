import Random from "../components/Random";
import Veggie from "../components/Veggie";
import { motion } from "framer-motion";

const Home = () => {
  return (
    <motion.div>
      <Random />
      <Veggie />
    </motion.div>
  );
};

export default Home;
