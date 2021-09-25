import ImageGallery from 'react-image-gallery';
import '../styles/components/pages/FotosPage.css';

const FotosPage = () => {
    const fotos = [
        {
            original: require('../images/fotos/obra/los-bajos-fondos001.jpg').default,
            originalHeight: 600,
          },
          {
            original: require('../images/fotos/obra/los-bajos-fondos002.jpg').default,
            originalHeight: 600,
          },
          {
            original: require('../images/fotos/obra/los-bajos-fondos003.jpg').default,
            originalHeight: 600,
          },
          {
            original: require('../images/fotos/obra/los-bajos-fondos004.jpg').default,
            originalHeight: 600,
          },
    ]
    
    return (
        <div className='section-container'>
            <div className='slider'>
                <ImageGallery items={fotos} showThumbnails={false} showFullscreenButton={false} showPlayButton={false} />
            </div>
        </div>
    );
};

export default FotosPage;
