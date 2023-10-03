import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { AnimatePresence } from 'framer-motion';
import Layer from './Layer';

const Model = ({ layers, compiled }) => {

  const controls = useAnimation();
  useEffect(() => {
    controls.start((i) => ({
      opacity: 0,
    }));
  }, []);

  return (
    <>
      <div>
        <AnimatePresence>
          {layers.map((layer, i) => (
            <Layer compiled={compiled} layerImageSrc={layer} activeStep={1} index={i} key={i} />
          ))}
        </AnimatePresence>
      </div>
    </>
  );
};

export default Model;
