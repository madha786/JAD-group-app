import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import EquipmentForm from "../component/equipmentform";
import Equipment_table from "../component/equipment_table";

const ProductDetail = () => {
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
        `https://jadgroup2.goaspendigital.com/api/equipmentlisting.php?page=1&search=`
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
    fetchData();
  }, []);




  

  // console.log(product);
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
    Manufacturer: product.Manufacture_Id !== undefined ? product.Manufacture_Id : product.Manfacturer_Id,
    thumb: images[0],
  };

  const handleThumbnailClick = (largeImage, index) => {
    setSelectedImage(largeImage);
    setSelectedThumbnail(index);
  };
const handleRightButtonClick = () => {
  if (startIndex < smallImages.length - 4) {
    setStartIndex(startIndex + 1);
  }
};

const handleLeftButtonClick = () => {
  if (startIndex > 0) {
    setStartIndex(startIndex - 1);
    
  }
};

const [isZoomedIn, setIsZoomedIn] = useState(false);

const handleLargeImageClick = () => {
  setIsZoomedIn(!isZoomedIn);
};
const handleCloseButtonClick = () => {
  setIsZoomedIn(false);
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
          <Equipment_table
            data={value}
            jad_id={value["JAD_ID"]}
            description={value.Description}
            model={value.Model}
            vintage={value.Vintage}
            Inspection_Available={value.Is_Inspection_Available}
            Condition={value.Condition}
            Manufacturer={value.Manfacturer_Id}
            thumb={Object.values(value.Pictures?.[0] || {})[0] || defaultImage}
            File={value.File}
          />
        </div>
      ))
    ) : (
      <div className="no-result"></div>
    );


    useEffect(() => {

      setSelectedImage(images[0])
      setSelectedThumbnail(0)
      
    }, [product.Pictures]);

  return (
    <>
      {hasImages && loading && !(largeImageLoaded && smallImagesLoaded) && (
        <div className="loading-bar">Loading...</div>
      )}

      <div className="banner-image">
        <h1>Equipment Available for Sale</h1>
      </div>
      <div className="Product_details_container">
        <div className="Display_box_product">
          <div className="Product_img_Box">
            <div className="large_img">
              <div className={isZoomedIn ? "zoomed-in-container " : "zoomed_not"}>
 <button className="close-button" onClick={handleCloseButtonClick}>
    X
  </button>
              <img
                src={selectedImage}
                alt=""
                onLoad={() => {
                  handleLargeImageLoad();
                  setLoading(false); // Set loading to false when the large image is loaded
                }}
                className={isZoomedIn ? "zoomed-in" : ""}
                onClick={handleLargeImageClick}
              />
              </div>
              <button
                onClick={() => handleLargeImageChange("prev")}
                className="ButtOn large-image-button"
              >
                <img
                  src="https://jadgroup.goaspendigital.com/app_files/left.png"
                  className="left_btn"
                />
              </button>
              <button
                onClick={() => handleLargeImageChange("next")}
                className="ButtOn large-image-button"
              >
                <img
                  src="https://jadgroup.goaspendigital.com/app_files/right.png"
                  className="Right_btn"
                />
              </button>
            </div>
            <div className="small_images">
              {hasSmallImages &&
                smallImages.slice(startIndex, startIndex + 4).map((image, index) => (
                  <img
                    key={index}
                    src={image || defaultImage}
                    alt={`Thumbnail ${index + 1}`}
                    onLoad={handleSmallImageLoad}
                    onClick={() =>
                      handleThumbnailClick(image || defaultImage, index+ startIndex)
                    }
                    className={
                      selectedThumbnail === index + startIndex ? "selected-thumbnail" : ""
                    }
                  />
                ))}
              {hasSmallImages && (
                <>
                  <button
                    onClick={handleLeftButtonClick}
                    disabled={startIndex === 0}
                    className="ButtOn"
                  >
                    <img
                      src="https://jadgroup.goaspendigital.com/app_files/left.png"
                      className="left_btn"
                    />
                  </button>
                  <button
                    onClick={handleRightButtonClick}
                     disabled={startIndex >= smallImages.length - 4}
                    className="ButtOn"
                  >
                    <img
                      src="https://jadgroup.goaspendigital.com/app_files/right.png"
                      className="Right_btn"
                    />
                  </button>
                </>
              )}
            </div>
          </div>
          <div className="product_details_text">
            <h3>View Equipment</h3>
            <h4>
              <span>Model: </span>
              {product.Model}
            </h4>
            <h4>
              <span>Vintage: </span>
              {product.Vintage}
            </h4>
            <h4>
              <span>Inspection Available: </span>
              {product.Is_Inspection_Available}
            </h4>
            <h4>
              <span>Condition: </span>
              {product.Condition}
            </h4>
            <h4>
              <span>Manufacturer: </span>
              {product.Manufacture_Id !== undefined ? product.Manufacture_Id : product.Manfacturer_Id}
            </h4>

            <a href={product.File} target="_blank" className="Detailed">
              Detailed Specifications:
            </a>

            <p>{product.Description}</p>

            <button className="inquire-btn" onClick={handleInquireButtonClick}>
              INQUIRE
              <img src="https://jadgroup.goaspendigital.com/app_files/Subtractttt.svg" />
            </button>

            <EquipmentForm
              showInquiryModal={showInquiryModal}
              handleCloseInquiryModal={handleCloseInquiryModal}
              values={values}
              producttype="equipment"
            />
          </div>
        </div>
        <div className="Manufacturer_box">
          <h1>More from the Manufacturer</h1>
          {related_product_data_html}
        </div>
      </div>
    </>
  );
};

export default ProductDetail;
