import PropTypes from "prop-types";

export const IDType = PropTypes.oneOfType([PropTypes.string, PropTypes.number]);

export const HeadingType = PropTypes.shape({
    id: IDType,
    content: PropTypes.string.isRequired,
});

export const TextType = PropTypes.shape({
    id: IDType,
    content: PropTypes.string.isRequired,
});

export const ImageType = PropTypes.shape({
    src: PropTypes.oneOfType([PropTypes.string, PropTypes.shape({})])
        .isRequired,
    alt: PropTypes.string,
    width: PropTypes.number,
    height: PropTypes.number,
    layout: PropTypes.string,
});

export const ButtonComponentType = {
    children: PropTypes.node.isRequired,
    type: PropTypes.oneOf(["button", "submit", "reset"]),
    label: PropTypes.string,
    onClick: PropTypes.func,
    className: PropTypes.string,
    path: PropTypes.string,
    size: PropTypes.oneOf(["large", "small", "medium"]),
    color: PropTypes.oneOf(["primary", "primary-alta"]),
    fullwidth: PropTypes.bool,
};

// eslint-disable-next-line no-unused-vars
const { children, ...restButtonTypes } = ButtonComponentType;

export const ButtonType = PropTypes.shape({
    content: PropTypes.string.isRequired,
    ...restButtonTypes,
});

export const SectionTitleType = PropTypes.shape({
    title: PropTypes.string,
    subtitle: PropTypes.string,
});

export const ItemType = PropTypes.shape({
    id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    title: PropTypes.string,
    subtitle: PropTypes.string,
    path: PropTypes.string,
    description: PropTypes.string,
    images: PropTypes.arrayOf(ImageType),
    image: ImageType,
});

export const ProductType = PropTypes.shape({
    _id: PropTypes.string,
    _type: PropTypes.string,
    _rev: PropTypes.string,
    _createdAt: PropTypes.string,
    _updatedAt: PropTypes.string,
    id: PropTypes.string,
    productId: PropTypes.string,
    title: PropTypes.string,
    intro: PropTypes.string,
    isDraft: PropTypes.bool,
    enquiries: PropTypes.number,
    countInStock: PropTypes.number,
    hasSubCategories: PropTypes.bool,
    mainImage: PropTypes.shape({
        _type: PropTypes.string,
        asset: PropTypes.shape({
            _type: PropTypes.string,
            _ref: PropTypes.string,
        }),
    }),
    moreImages: PropTypes.arrayOf(
        PropTypes.shape({
            _type: PropTypes.string,
            asset: PropTypes.shape({
                _type: PropTypes.string,
                _ref: PropTypes.string,
            }),
        })
    ),
    recommendedProducts: PropTypes.arrayOf(
        PropTypes.shape({
            _key: PropTypes.string,
            category: PropTypes.arrayOf(PropTypes.string),
            mainImg: PropTypes.shape({
                _type: PropTypes.string,
                asset: PropTypes.shape({
                    _type: PropTypes.string,
                    _ref: PropTypes.string,
                }),
            }),
            subCategory: PropTypes.arrayOf(PropTypes.string),
            productId: PropTypes.string,
            intro: PropTypes.string,
            title: PropTypes.string,
            id: PropTypes.string,
        })
    ),
    accessories: PropTypes.arrayOf(PropTypes.any),
    subCategory: PropTypes.arrayOf(PropTypes.string),
    category: PropTypes.arrayOf(PropTypes.string),
    description: PropTypes.arrayOf(
        PropTypes.shape({
            _key: PropTypes.string,
            paragraph: PropTypes.string,
        })
    ),
    features: PropTypes.arrayOf(
        PropTypes.shape({
            _key: PropTypes.string,
            heading: PropTypes.string,
            id: PropTypes.number,
            list: PropTypes.arrayOf(
                PropTypes.shape({
                    _key: PropTypes.string,
                    listItem: PropTypes.string,
                })
            ),
        })
    ),
    configurationTitle: PropTypes.string,
    configurationInfo: PropTypes.arrayOf(
        PropTypes.shape({
            _key: PropTypes.string,
            paragraph: PropTypes.string,
        })
    ),
    tables: PropTypes.arrayOf(
        PropTypes.shape({
            _key: PropTypes.string,
            title: PropTypes.string,
            columns: PropTypes.arrayOf(PropTypes.string),
            items: PropTypes.arrayOf(
                PropTypes.shape({
                    _key: PropTypes.string,
                    partNo: PropTypes.string,
                    itemDescription: PropTypes.string,
                })
            ),
        })
    ),
});

export const SellerType = PropTypes.shape({
    id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    name: PropTypes.string.isRequired,
    slug: PropTypes.string.isRequired,
    total_sale: PropTypes.number.isRequired,
    image: ImageType.isRequired,
    top_since: PropTypes.string,
    isVarified: PropTypes.bool,
});

export const CollectionType = PropTypes.shape({
    id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    title: PropTypes.string.isRequired,
    slug: PropTypes.string.isRequired,
    total_item: PropTypes.number.isRequired,
    image: ImageType.isRequired,
    thumbnails: PropTypes.arrayOf(ImageType).isRequired,
    profile_image: ImageType.isRequired,
});

export const FeatureProductsType = PropTypes.shape({
    id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    title: PropTypes.string.isRequired,
    slug: PropTypes.string.isRequired,
    author: PropTypes.shape({
        name: PropTypes.string.isRequired,
        slug: PropTypes.string,
    }),
    image: ImageType.isRequired,
});

export const NotifactionType = PropTypes.shape({
    id: IDType,
    title: PropTypes.string,
    description: PropTypes.string,
    path: PropTypes.string,
    date: PropTypes.string,
    time: PropTypes.string,
    image: ImageType,
});
