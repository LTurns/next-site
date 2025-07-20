import { useState, useEffect } from "react";
import { FaStar } from "react-icons/fa";
import PropTypes from "prop-types";
import clsx from "clsx";
import styles from "./star-rating.module.css";

const StarRating = ({
    rating = 5,
    maxStars = 5,
    showAnimation = true,
    animationDelay = 200,
    size = "24px",
    color = "#ffd700",
    emptyColor = "#e4e5e9",
    className,
    ...rest
}) => {
    const [animatedStars, setAnimatedStars] = useState([]);

    useEffect(() => {
        // Trigger animation when component mounts
        if (showAnimation) {
            // Animate stars one by one
            for (let i = 0; i < rating; i++) {
                setTimeout(() => {
                    setAnimatedStars((prev) => [...prev, i]);
                }, i * animationDelay);
            }
        } else {
            // Show all stars immediately if no animation
            setAnimatedStars(Array.from({ length: rating }, (_, i) => i));
        }
    }, [rating, showAnimation, animationDelay]);

    return (
        <div
            className={clsx(styles.starRating, "star-rating", className)}
            {...rest}
        >
            {Array.from({ length: maxStars }, (_, index) => {
                const isFilled = index < rating;
                const isAnimated = animatedStars.includes(index);

                return (
                    <FaStar
                        key={index}
                        size={size}
                        style={{
                            color: isFilled ? color : emptyColor,
                            transition: "all 0.3s ease",
                            transform:
                                showAnimation && isAnimated
                                    ? "scale(1.2)"
                                    : "scale(1)",
                            opacity: (() => {
                                if (!showAnimation) return 1;
                                return isAnimated ? 1 : 0.3;
                            })(),
                            animation:
                                showAnimation && isAnimated
                                    ? "starPop 0.6s ease-out forwards"
                                    : "none",
                        }}
                    />
                );
            })}
        </div>
    );
};

StarRating.propTypes = {
    rating: PropTypes.number,
    maxStars: PropTypes.number,
    showAnimation: PropTypes.bool,
    animationDelay: PropTypes.number,
    size: PropTypes.string,
    color: PropTypes.string,
    emptyColor: PropTypes.string,
    className: PropTypes.string,
};

export default StarRating;
