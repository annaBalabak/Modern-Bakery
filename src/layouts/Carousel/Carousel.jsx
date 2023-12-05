import styles from "./Carousel.module.css";
import React, { useEffect, useState } from "react";
import arrowLeft from "../../images/arrow-left.svg";
import arrowRight from "../../images/arrow-right.svg";
import { carouselData } from '../../data/carouselData'

const Carousel = () => {
  const [slide, setSlide] = useState(0);
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);

  useEffect(() => {
    let slider = setInterval(
      () =>
        setSlide((prevState) =>
          slide === carouselData.length - 1 ? 0 : prevState + 1
        ),
      8000
    );
    return () => {
      clearInterval(slider);
    };
  }, [slide]);

  const nextSlide = () => {
    setSlide(slide === carouselData.length - 1 ? 0 : slide + 1);
  };

  const prevSlide = () => {
    setSlide(slide === 0 ? carouselData.length - 1 : slide - 1);
  };

  // the required distance between touchStart and touchEnd to be detected as a swipe
  const minSwipeDistance = 50;

  const onTouchStart = (e) => {
    // otherwise the swipe is fired even with usual touch events
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e) => setTouchEnd(e.targetTouches[0].clientX);

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;
    if (isLeftSwipe || isRightSwipe) {
      isLeftSwipe ? prevSlide() : nextSlide();
    }
  };
  return (
    <div className={styles.carouselContainer}>
      <div
        className={styles.carousel}
        onTouchStart={onTouchStart}
        onTouchMove={onTouchMove}
        onTouchEnd={onTouchEnd}
      >
        <div className={styles.arrow + " " + styles["arrow-left"]}>
          <img
            className={styles.arrowLeft}
            src={arrowLeft}
            alt="arrow left"
            onClick={prevSlide}
          />
        </div>
        {carouselData.map((item, index) => {
          return (
            <img
              src={item.image}
              alt={item.alt}
              key={item.id}
              className={
                slide === index
                  ? `${styles.slide}`
                  : `${styles["slide-hidden"] + " " + styles.slide}`
              }
            />
          );
        })}
        <div className={styles.arrow + " " + styles["arrow-right"]}>
          <img
            className={styles.arrowRight}
            src={arrowRight}
            alt="arrow right"
            onClick={nextSlide}
          />
        </div>
        <span className={styles.indicators}>
          {carouselData.map((item, index) => {
            return (
              <div
                key={item.id}
                onClick={() => setSlide(index)}
                className={
                  slide === index
                    ? `${styles.indicator}`
                    : `${styles.indicator + " " + styles["indicator-inactive"]}`
                }
              ></div>
            );
          })}
        </span>
      </div>
    </div>
  );
};

export default Carousel;
