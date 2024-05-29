import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import EquipmentForm from "../component/equipmentform";
import PartsInventory from "../component/Parts-Inventory";

const InventoryDetail = () => {
  const { state } = useLocation();
  const product = state ? state.equipmentData.data : null;
  const [relatedProducts, setRelatedProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [largeImageLoaded, setLargeImageLoaded] = useState(false);
  const [smallImagesLoaded, setSmallImagesLoaded] = useState(false);

  const handleLargeImageLoad = () => {
    setLargeImageLoaded(true);
  };

  const handleSmallImageLoad = () => {
    setSmallImagesLoaded(true);
  };

  const fetchData = async (page) => {
    try {
      setLoading(true);

      const response = await fetch(
        `https://jadgroup2.goaspendigital.com/api/part_inventory.php?page=1&search=`
      );
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const responseData = await response.json();
      console.log(response);
      console.log(responseData);
      if (responseData.error) {
        console.error("Error fetching data:", responseData.error);
      } else {
        setRelatedProducts(responseData.message);
      }
    } catch (error) {
      console.error("Error fetching data:", error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData(1);
  }, []);

  console.log(product);
  const defaultImage =
    "https://jadgroup.goaspendigital.com/wp-content/uploads/2024/01/Group-1000001810-768x422.png";
  const images =
    product && product.Pictures && Object.values(product.Pictures[0])
      ? Object.values(product.Pictures[0])
      : [];

  const hasImages = images.length > 0;

  const [selectedImage, setSelectedImage] = useState(
    hasImages ? images[0] || defaultImage : defaultImage
  );
  const [selectedThumbnail, setSelectedThumbnail] = useState(0);
  const [startIndex, setStartIndex] = useState(0);
  const [showInquiryModal, setShowInquiryModal] = useState(false);

  const values = {
    jad_id: product.JAD_ID,
    description: product.Description,
    model: product.Model,
    vintage: product.Vintage,
    Inspection_Available: product.Inspection_Available,
    Condition: product.Condition,
    Manufacturer: product.Manufacturer_Id,
    thumb: defaultImage,
    Parts_number: product['Part Number'],
    Revision: product.Revision
    
  };

  const handleThumbnailClick = (largeImage, index) => {
    setSelectedImage(largeImage);
    setSelectedThumbnail(index);
  };
  const handleRightButtonClick = () => {
    if (startIndex < product.images - 4) {
      setStartIndex(startIndex + 1);
    }
  };

  const handleLeftButtonClick = () => {
    if (startIndex > 0) {
      setStartIndex(startIndex - 1);
    }
  };
  const handleLargeImageChange = (direction) => {
    const newIndex =
      direction === "next" ? selectedThumbnail + 1 : selectedThumbnail - 1;

    if (newIndex >= 0 && newIndex < images.length) {
      setSelectedImage(images[newIndex] || defaultImage);
      setSelectedThumbnail(newIndex);
    }
  };

  const handleInquireButtonClick = () => {
    setShowInquiryModal(true);
  };

  const handleCloseInquiryModal = () => {
    setShowInquiryModal(false);
  };
  const smallImages =
    product && product.Pictures && Object.values(product.Pictures[0])
      ? Object.values(product.Pictures[0])
      : [];

  const hasSmallImages = smallImages.length > 0;
  const related_product_data_html =
    relatedProducts &&
    Array.isArray(relatedProducts) &&
    relatedProducts.length > 0 ? (
      relatedProducts.slice(0, 2).map((value, index) => (
        <div className="Not_flex" key={index}>
          <PartsInventory
            data={value}
            jad_id={value["JAD_ID"]}
            description={value.Description}
            model={value.Model}
            vintage={value.Vintage}
            Condition={value.Condition}
            Manufacturer={value.Manfacturer_Id}
            Parts_number={value['Part Number']}
            Revision={value.Revision}
          />
        </div>
      ))
    ) : (
      <div className="no-result"></div>
    );

  return (
    <>
      {hasImages && loading && !(largeImageLoaded && smallImagesLoaded) && (
        <div className="loading-bar">Loading...</div>
      )}

      <div className="banner-image banner-image-part">
        <h1>Parts Inventory</h1>
      </div>
      <div className="Product_details_container">
        <div className="Display_box_product">
          <div className="Product_img_Box">
              <h3>View Part</h3>

                <div className="product-box-info">
                    <h4>
                        <span className="inventory-title">JAD-ID:</span>
                        <span className="inventory-text"> {product.JAD_ID}</span>
                    </h4>
                    <h4>
                        <span className="inventory-title">Manufacturer:</span>
                        <span className="inventory-text">  {product.Manufacturer_Id} </span>
                    </h4>

                    <h4>
                    <span className="inventory-title">Revision:</span>
                    <span className="inventory-text"> {product.Revision} </span>
                    </h4>

                    <h4>
                    <span className="inventory-title">Description:</span>
                    <span className="inventory-text"> {product.Description} </span>
                    </h4>
                </div>
          </div>
          <div className="product_details_text inventory-detail">
     
            <button className="inquire-btn" onClick={handleInquireButtonClick}>
              INQUIRE
              <img src="https://jadgroup.goaspendigital.com/app_files/Subtractttt.svg" />
            </button>

            <h4 className="comments-text">Comments</h4>
            <p className="comments-text-para"> {product.Comments} </p>

            <EquipmentForm
              showInquiryModal={showInquiryModal}
              handleCloseInquiryModal={handleCloseInquiryModal}
              values={values}
            />
          </div>
        </div>
        <div className="Manufacturer_box">
          <h1 className="more-parts-inventory">More from the Parts Inventory</h1>
          {related_product_data_html}
        </div>
      </div>
    </>
  );
};

export default InventoryDetail;
