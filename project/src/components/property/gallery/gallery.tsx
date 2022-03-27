import ImageType from '../../../types/image-type';

type GalleryProps = {
  images: ImageType[],
}

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
