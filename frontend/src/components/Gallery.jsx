import React from "react";

const Gallery = (props) => {
  const { images } = props;

  const renderImages = () => {
    return (
      images && (
        <>
          <div className="row" id="item0ww4LB">
            {images.map((image, index) => (
              <div key={index}
                className="col-lg-4"
                style={{ marginBottom: "0px", zoom: 1, opacity: 1, padding: "0.5px" }}
              >
                <img
                  src={`${process.env.REACT_APP_API_HOST}/${image}`}
                  alt=""
                  style={{ width: "100%", height: "300px"}}
                />
              </div>
            ))}
          </div>
        </>
      )
    );
  };

  return (
    <>
      <div id="device" className="gridalicious">
        {renderImages()}
      </div>
    </>
  );
};

export default Gallery;
