import React from "react";

const Slider = () => {
    return (
        <>
            <div
                className="Modern-Slider slick-initialized slick-slider"
                role="toolbar"
            >
                {/* Item */}
                <div aria-live="polite" className="slick-list">
                    <div
                        className="slick-track"
                        role="listbox"
                        style={{ opacity: 1, width: '100%' }}
                    >
                        <div
                            className="item slick-slide slick-current slick-active"
                            data-slick-index={0}
                            aria-hidden="false"
                            tabIndex={-1}
                            role="option"
                            aria-describedby="slick-slide00"
                            style={{
                                width:'100%',
                                position: "relative",
                                left: 0,
                                top: 0,
                                zIndex: 999,
                                opacity: 1,
                            }}
                        >
                            <div className="img-fill" >
                                <img src="assets/img/cover_1.jpg" style={styles.image} />
                                <div className="info" style={{
                                    display: "flex",
                                    justifyContent: 'center',
                                    alignItems: 'center'
                                }}>
                                    <div className="container">
                                        <span className="line-1">
                                            Công ty chuyên thiết kế và thi công nhà
                                        </span>
                                        <h1 className="line-2">House Design</h1>
                                        <span className="line-3">
                                            House Design. Co
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

const styles = {
    image: {
        objectFit: 'cover',
        objectPosition: 'center'
    }
}

export default Slider;
