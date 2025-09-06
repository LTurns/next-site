import PropTypes from "prop-types";
import Image from "next/image";
import Button from "@ui/button";
import Slider from "@ui/slider";
import Catalogue from "@components/catalogue";
import { HeadingType, TextType, ButtonType, ImageType } from "@utils/types";

const titles = ['hey', 'hello', 'hi there', 'greetings', 'welcome'];
const HeroArea = ({ data }) => (
    <div className="slider-one rn-section-gapTop">
        <div className="container">
            <div className="row row-reverce-sm align-items-center">
                <div className="col-lg-6 col-12 order-1">
                    <Slider>
                        {data?.headings?.map((title, idx) => (
                            <div key={idx}>
                                <h2 className="title">{title}</h2>
                            </div>
                        ))}
                    </Slider>
                     <span><Catalogue data={data?.catalogue} /></span>
                    {/* {data?.texts?.map((text) => (
                        <div>
                        <span
                            className="slide-disc"
                            data-sal-delay="300"
                            data-sal="slide-up"
                            data-sal-duration="800"
                            key={text.id}
                        >
                            {text.content}
                        </span>
                        </div>
                        
                    ))} */}
                </div>
                {/* <div className="col-lg-5 offset-lg-1 order-2">
                    <div className="slider-thumbnail d-none d-lg-block">
                        <Image
                            src={data.images[0].src}
                            alt={data.images[0]?.alt || "Slider Images"}
                            width={585}
                            height={593}
                            priority
                        />
                    </div>
                </div> */}

                <div className="col-lg-5 offset-lg-1 order-2">
                    {data?.buttons && (
                        <div className="button-group">
                            {data.buttons.map(({ content, id, ...btn }, i) => (
                                <Button
                                    {...btn}
                                    data-sal="slide-up"
                                    data-sal-duration="800"
                                    key={id}
                                    image={{ src: btn.image.src, alt: btn.image.alt }}
                                >
                                    {/* {content} */}
                                </Button>
                            ))}
                        </div>
                    )}
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
