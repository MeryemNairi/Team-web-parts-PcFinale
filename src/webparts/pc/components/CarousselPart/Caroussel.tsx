import * as React from 'react';
import { useState, useEffect } from 'react';
import Slider from 'react-slick';
import { ImageService, ICarouselItem } from './Service/CarousselService';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import styles from './Caroussel.module.scss';

const ImageCarousel: React.FC = () => {
  const [carouselData, setCarouselData] = useState<ICarouselItem[]>([]);
  const imageService = new ImageService();

  useEffect(() => {
    const fetchData = async () => {
      const data = await imageService.fetchCarouselData();
      setCarouselData(data);
    };

    fetchData();
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  };

  return (
    <div className={styles.background}>
      <div className={styles.illustration}>
        <svg width="155" height="155" viewBox="0 0 155 155" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M77.5732 0.54248C119.965 0.242835 154.573 34.365 154.872 76.7564L78.1158 77.299L77.5732 0.54248Z" fill="#044123" />
          <path d="M78.1162 77.2991L154.873 76.7565L155.415 153.513C113.024 153.813 78.4159 119.691 78.1162 77.2991Z" fill="#32EB96" />
          <path d="M0.816406 1.08521L77.5729 0.542649L78.1155 77.2991C35.724 77.5988 1.11605 43.4766 0.816406 1.08521Z" fill="#FFC46B" />
          <rect x="0.542969" y="77.8474" width="77.575" height="76.7584" rx="38.3792" transform="rotate(-0.404991 0.542969 77.8474)" fill="#044123" />
        </svg>

      </div>
      <div className={styles.container}>
        <div className={styles.content_holder}>
          <div className={styles.title}>
            <p>Nos Conventions</p>
            <svg width="53" height="3" viewBox="0 0 53 3" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect width="53" height="3" fill="#FFC46B" />
            </svg>


          </div>
          <div className={styles.subContent}>
            <p>
              Nous sommes heureux de vous informer que, grâce à des conventions établies avec différents établissements, vous pouvez désormais bénéficier de divers avantages et remises simplement en présentant votre badge professionnel. Ces conventions ont été mises en place pour vous offrir des opportunités supplémentaires de bien-être et d'économie au quotidien.
            </p>
            <button className={styles.conventionButton} onClick={() => window.location.href = 'https://cnexia.sharepoint.com/sites/CnexiaForEveryone/SitePages/ConventionsV5.aspx'}>
              Découvrez l'ensemble des conventions proposées par Cnexia
            </button>

          </div>
          <div className={styles.carrousselHoleder}>
            <div className={styles.carouselContainer}>
              <Slider {...settings}>
                {carouselData.map((item, index) => (
                  <div key={index} className={styles.carouselItem}>
                    <div className={styles.imgs_container}>
                      <img src={item.imageUrl} alt="" />
                    </div>
                  </div>
                ))}
              </Slider>
            </div>
          </div>
        </div>
      </div>
    </div>


  );
};

export default ImageCarousel;
