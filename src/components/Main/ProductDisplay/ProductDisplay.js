/* eslint-disable no-restricted-globals */
import ProductOne from "../../../images/image-product-1.jpg"
import ProductTwo from "../../../images/image-product-2.jpg"
import ProductThree from "../../../images/image-product-3.jpg"
import ProductFour from "../../../images/image-product-4.jpg"
import ProductOneThumbnail from "../../../images/image-product-1-thumbnail.jpg"
import ProductTwoThumbnail from "../../../images/image-product-2-thumbnail.jpg"
import ProductThreeThumbnail from "../../../images/image-product-3-thumbnail.jpg"
import ProductFourThumbnail from "../../../images/image-product-4-thumbnail.jpg"
import IconNext from "../../../images/icon-next.svg"
import IconPrevious from "../../../images/icon-previous.svg"
import { DisplayButton, Container } from "../../Common"
import "./ProductDisplay.css"
import {useState} from "react"

const covers = [ProductOne, ProductTwo, ProductThree, ProductFour]
const thumbnails = [ProductOneThumbnail, ProductTwoThumbnail, ProductThreeThumbnail, ProductFourThumbnail]

export function ProductDisplay() {
    const [coverIndex, setCoverIndex] = useState(0)
    return (
        <section>
            <Container>
                <div className="row">
                    <DisplayButton source={covers[coverIndex]} description="product cover" />
                    <DisplayButton source={IconNext} description="next"
                    onClick={() => setCoverIndex(prev => Math.min(prev + 1, covers.length-1))}/>
                    <DisplayButton source={IconPrevious} description="previous"
                    onClick={() => setCoverIndex(prev => Math.max(prev - 1, 0))}/>
                </div>
                <div className="row">
                        {thumbnails.map((image, index) => (
                            <DisplayButton className={coverIndex === index ? "is-active" : ""}
                            name={`button_${index}`}
                            key={index}
                            source={image}
                            description="product thumbnail"
                            onClick={() => setCoverIndex(index)} />
                        ))}
                </div>
            </Container>
        </section>
    )
}