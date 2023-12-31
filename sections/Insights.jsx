'use client';
import { motion } from 'framer-motion';

import styles from '../styles';
import { insights } from '../constants';
import { InsightCard, TitleText, TypingText } from '../components';
import { staggerContainer } from '../utils/motion';

const Insights = () => (
  <section className={`${styles.paddings} relative z-10`}>
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto flex flex-col text-center`}
    >
      <TypingText title='| Insights' textStyles='text-center'/>
      <TitleText title='Insight about metaverse' textStyles='text-center'/>
      <div className='mt-[50px] flex flex-col gap-[30px]'>
        {insights.map((insights, index) => (
          <InsightCard key={`insight-${index}`} {...insights} index={index + 1}/>
        ))}
      </div>
    </motion.div>
  </section>
);

export default Insights;