import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { defaultCss, baseCss, selectedCss, compiledImgCss } from './styles';

const Layer = ({ layerImageSrc, activeStep, index, compiled }) => {
  /*
  const {
    query: { layers, selected, selectedImage },
  } = useLayerManager();
  */


  const cssByStep = {
    1: baseCss,
    2: baseCss,
    //3: selectedCss(isSelectedLayer),
    //4: selectedCss(isSelectedLayer),
    5: compiledImgCss,
    6: compiledImgCss,
  }; //[activeStep]


  return (
    <div
      style={{
        '&:not(:first-of-type)': {
          marginTop: activeStep == 5 || activeStep == 6 ? '-250px' : '-300px',
        },
        marginTop: compiled ? '-250px' : '-300px',
        transition: 'all .5s',
      }}>
      <motion.div
        transition={{ duration: 0.5 }}
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 50, opacity: 0 }}>
        <motion.div
          transition={{ duration: 0.2 }}
          animate={activeStep.toString()}
          variants={cssByStep}
          style={{
            margin: '0 auto',
            ...defaultCss,
            //						...cssByStep
          }}>
          <AnimatePresence>
            <motion.div
              key={index}
              transition={{ duration: 0.2 }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}>
                <img
                  src={layerImageSrc}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                  }}
                />
            </motion.div>
          </AnimatePresence>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Layer;
