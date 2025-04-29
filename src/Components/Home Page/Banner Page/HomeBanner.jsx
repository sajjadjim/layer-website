import React from 'react';
import bannerImage from '../../../../src/assets/C002-assets/banner-img-1.png'
const HomeBanner = () => {
    return (
        <div
        className="hero min-h-screen"
        style={{
          backgroundImage:
            `url(${bannerImage})`,
        }}
      >
        <div className="hero-overlay"></div>
        <div className="hero-content text-neutral-content text-center">
          <div className="max-w-5/7">
            <h1 className="mb-5 text-5xl font-bold">It avoids subjective claims or exaggeration that might raise red flags legally</h1>
            <p className="mb-5 opacity-50">
            Our platform connects you with verified, experienced doctors across various specialties — all at your convenience. Whether it's a routine checkup or urgent consultation, book appointments in minutes and receive quality care you can trust.
            </p>
          </div>
        </div>
      </div>
    );
};

export default HomeBanner;