import OfferType from '../../../types/offer-type/offer-type';

type GalleryProps = Pick<OfferType, 'images'>;

function Gallery({ images }: GalleryProps) {
  return (
    <div className="property__gallery-container container">
      <div className="property__gallery">
        {images.map((image) => (
          <div key={image} className="property__image-wrapper">
            <img className="property__image" src={image} alt="Illustration of studio" />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Gallery;
