import styles from "./Carousel.module.css";
import React, { useEffect, useState } from "react";
import { carouselData } from "../../data/carouselData";
import IconButton from "../../ui-kit/IconButton";
import { ICONS } from "../../images/Icons";

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

  const minSwipeDistance = 50;

  const onTouchStart = (e) => {
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
        <div className={styles.arrow + " " + styles["arrowLeft"]}>
          <IconButton
            icon={<ICONS.ArrowLeft />}
            isFilled={true}
             isRound={true}
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
                  : `${styles["slideHidden"] + " " + styles.slide}`
              }
            />
          );
        })}
        <div className={styles.arrow + " " + styles["arrowRight"]}>
          <IconButton
            icon={<ICONS.ArrowRight />}
            isFilled={true}
            isRound={true}
            onClick={nextSlide}
            className={styles.arrowRight}
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
                    : `${styles.indicator + " " + styles["indicatorInactive"]}`
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
