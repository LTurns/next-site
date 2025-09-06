/* eslint-disable react/button-has-type */
import PropTypes from "prop-types";
import clsx from "clsx";
import Anchor from "../anchor";

const Button = ({
    children,
    type,
    label,
    onClick,
    className,
    path,
    size,
    color,
    shape,
    fullwidth,
    image,
    ...rest
}) => {
    const content = (
        <>
            {image && (
                <img
                    src={typeof image === 'string' ? image : image.src}
                    alt={typeof image === 'object' && image.alt ? image.alt : label || 'button image'}
                    className="btn-image"
                    style={{ display: 'block', margin: '0 auto', maxWidth: '60%', maxHeight: '60%', marginBottom: 8 }}
                />
            )}
            <span>{children}</span>
        </>
    );
    const btnClass = clsx(
        className,
        "btn",
        `btn-${size}`,
        `btn-${color}`,
        fullwidth && "w-100 d-block",
        shape === "ellipse" && "rounded",
        image && "btn-square"
    );
    if (path) {
        return (
            <Anchor
                label={label}
                onClick={onClick}
                className={btnClass}
                path={path}
                {...rest}
            >
                {content}
            </Anchor>
        );
    }

    return (
        <button
            aria-label={label}
            onClick={onClick}
            className={btnClass}
            type={type}
            {...rest}
        >
            {content}
        </button>
    );
};

Button.propTypes = {
    children: PropTypes.node.isRequired,
    type: PropTypes.oneOf(["button", "submit", "reset"]),
    label: PropTypes.string,
    onClick: PropTypes.func,
    className: PropTypes.string,
    path: PropTypes.string,
    size: PropTypes.oneOf(["large", "small", "medium"]),
    color: PropTypes.oneOf(["primary"]),
    shape: PropTypes.oneOf(["square", "ellipse"]),
    fullwidth: PropTypes.bool,
    image: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.shape({ src: PropTypes.string.isRequired, alt: PropTypes.string })
    ]),
};

Button.defaultProps = {
    type: "button",
    size: "large",
    color: "primary",
};

export default Button;
