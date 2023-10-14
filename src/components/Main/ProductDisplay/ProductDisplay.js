import ProductOne from "../../../images/image-product-1.jpg"
import ProductTwo from "../../../images/image-product-2.jpg"
import ProductThree from "../../../images/image-product-3.jpg"
import ProductFour from "../../../images/image-product-4.jpg"
import ProductOneThumbnail from "../../../images/image-product-1-thumbnail.jpg"
import ProductTwoThumbnail from "../../../images/image-product-2-thumbnail.jpg"
import ProductThreeThumbnail from "../../../images/image-product-3-thumbnail.jpg"
import ProductFourThumbnail from "../../../images/image-product-4-thumbnail.jpg"
import { DisplayButton } from "../../Common"
import "./ProductDisplay.css"
const thumbnails = [ProductOneThumbnail, ProductTwoThumbnail, ProductThreeThumbnail, ProductFourThumbnail]

export function ProductDisplay() {
    return (
        <section>
            <div className="row">
                {/* <img src={ProductOne} alt="product cover" /> */}
                <DisplayButton source={ProductOne} description="product cover" /* ClickEvent={} *//>
            </div>
            <div className="row">
                    {thumbnails.map((image, index) => (
                        <li key={index}>
                            <DisplayButton source={image} description="product thumbnail" /* ClickEvent={} *//>
                        </li>
                    ))}
            </div>
        </section>
    )
}