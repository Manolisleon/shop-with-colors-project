import React from 'react';
import '../css/style.css';
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

const boxVariant = {
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
  hidden: { opacity: 0, scale: 0 }
};

const InfoRight = (props) => {
  const control = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      control.start("visible");
    } else {
      control.start("hidden");
    }
  }, [control, inView]);

    return (
        <motion.div
      className="box"
      ref={ref}
      variants={boxVariant}
      initial="hidden"
      animate={control}>
            <div className='section-img-right'>
                <div className='paragraph'>
                    <p>
                        {props.paragraph}
                    </p>
                    <div className='btn'>
                        <button type='button'>
                            <a href='Εργαλεία'>Δείτε Περισσότερα...</a>
                        </button>
                    </div>
                </div>
                <div className='img'>
                    <img src={props.img} alt={props.alt} width={props.width} height={props.height} />
                </div>
            </div>
        </motion.div>
    );
}

export default InfoRight;