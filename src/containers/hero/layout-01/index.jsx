import PropTypes from "prop-types";
import Image from "next/image";
import Button from "@ui/button";
import Catalogue from "@components/catalogue";
import { HeadingType, TextType, ButtonType, ImageType } from "@utils/types";

const HeroArea = ({ data }) => (
    <div className="slider-one rn-section-gapTop">
        <div className="container">
            <div className="row row-reverce-sm align-items-center">
                <div className="col-lg-6 col-12 order-1">
                    {data?.headings[0]?.content && (
                        <h2
                            className="title"
                            data-sal-delay="200"
                            data-sal="slide-up"
                            data-sal-duration="800"
                        >
                            {data.headings[0].content}
                        </h2>
                    )}
                    {data?.texts?.map((text) => (
                        <p
                            className="slide-disc"
                            data-sal-delay="300"
                            data-sal="slide-up"
                            data-sal-duration="800"
                            key={text.id}
                        >
                            {text.content}
                        </p>
                    ))}

                    {data?.buttons && (
                        <div className="button-group">
                            {data.buttons.map(({ content, id, ...btn }, i) => (
                                <Button
                                    {...btn}
                                    data-sal="slide-up"
                                    data-sal-duration="800"
                                    key={id}
                                >
                                    {content}
                                </Button>
                            ))}
                        </div>
                    )}

                    <Catalogue data={data?.catalogue} />
                </div>
                <div className="col-lg-5 offset-lg-1 order-2">
                    <div className="slider-thumbnail d-none d-lg-block">
                        <Image
                            src={data.images[0].src}
                            alt={data.images[0]?.alt || "Slider Images"}
                            width={585}
                            height={593}
                            priority
                        />
                    </div>
                </div>
            </div>
        </div>
    </div>
);

HeroArea.propTypes = {
    data: PropTypes.shape({
        headings: PropTypes.arrayOf(HeadingType),
        texts: PropTypes.arrayOf(TextType),
        buttons: PropTypes.arrayOf(ButtonType),
        images: PropTypes.arrayOf(ImageType),
        catalogue: PropTypes.string,
    }),
};

export default HeroArea;
