// lib/sanity-image.js

import imageUrlBuilder from "@sanity/image-url";

const builder = imageUrlBuilder({
    projectId: "b6e027vh",
    dataset: "production",
});

/**
 * Generate a Sanity image URL with error handling
 * @param {Object} source - Sanity image object
 * @param {number} width - Optional width
 * @param {number} height - Optional height
 * @returns {string|Object} - Image URL or builder object for chaining
 */
export const urlForImage = (source, width = null, height = null) => {
    // Return placeholder if no source provided
    if (!source) {
        return "/images/icon.png"; // Using existing icon as placeholder
    }

    // Handle different image object structures
    let imageRef = source;

    // If it's a full image object with asset reference
    if (source.asset && source.asset._ref) {
        imageRef = source;
    } else if (source._ref) {
        // If it's just the asset reference
        imageRef = source;
    } else {
        // If it's malformed or missing, return placeholder
        // eslint-disable-next-line no-console
        console.warn("Invalid image source:", source);
        return "/images/icon.png";
    }

    try {
        let imageBuilder = builder.image(imageRef);

        // Apply dimensions if provided
        if (width && height) {
            imageBuilder = imageBuilder.width(width).height(height);
        } else if (width) {
            imageBuilder = imageBuilder.width(width);
        } else if (height) {
            imageBuilder = imageBuilder.height(height);
        }

        return imageBuilder.url();
    } catch (error) {
        // eslint-disable-next-line no-console
        console.error("Error generating image URL:", error, "Source:", source);
        return "/images/icon.png";
    }
};

/**
 * Get image builder for chaining (for backwards compatibility)
 * @param {Object} source - Sanity image object
 * @returns {Object} - Image builder or safe fallback
 */
export const getImageBuilder = (source) => {
    if (!source) {
        return {
            width: () => ({ url: () => "/images/icon.png" }),
            height: () => ({ url: () => "/images/icon.png" }),
            url: () => "/images/icon.png",
        };
    }

    let imageRef = source;

    if (source.asset && source.asset._ref) {
        imageRef = source;
    } else if (source._ref) {
        imageRef = source;
    } else {
        return {
            width: () => ({ url: () => "/images/icon.png" }),
            height: () => ({ url: () => "/images/icon.png" }),
            url: () => "/images/icon.png",
        };
    }

    try {
        return builder.image(imageRef);
    } catch (error) {
        // eslint-disable-next-line no-console
        console.error("Error creating image builder:", error);
        return {
            width: () => ({ url: () => "/images/icon.png" }),
            height: () => ({ url: () => "/images/icon.png" }),
            url: () => "/images/icon.png",
        };
    }
};

/**
 * Check if an image source is valid
 * @param {Object} source - Sanity image object
 * @returns {boolean}
 */
export const isValidImageSource = (source) => {
    if (!source) return false;

    // Check for asset reference
    if (source.asset && source.asset._ref) return true;
    if (source._ref) return true;

    return false;
};

export default urlForImage;
