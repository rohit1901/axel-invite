import Pic1 from './assets/avatar.jpeg';
import Pic2 from './assets/2.jpg';
import Pic3 from './assets/3.jpg';
import Pic4 from './assets/4.jpg';
import Pic5 from './assets/5.jpg';
import Pic6 from './assets/6.jpg';
import Pic7 from './assets/7.jpg';

export const Carousel = () => {
    return (
        <div className="carousel carousel-center bg-neutral rounded-box space-x-4 p-4 max-w-screen-2xl">
            <div className="carousel-item">
                <img
                    src={Pic1}
                    className="rounded-box carousel-image"/>
            </div>
            <div className="carousel-item">
                <img
                    src={Pic2}
                    className="rounded-box carousel-image"/>
            </div>
            <div className="carousel-item">
                <img
                    src={Pic3}
                    className="rounded-box carousel-image"/>
            </div>
            <div className="carousel-item">
                <img
                    src={Pic4}
                    className="rounded-box carousel-image"/>
            </div>
            <div className="carousel-item">
                <img
                    src={Pic5}
                    className="rounded-box carousel-image"/>
            </div>
            <div className="carousel-item">
                <img
                    src={Pic6}
                    className="rounded-box carousel-image"/>
            </div>
            <div className="carousel-item">
                <img
                    src={Pic7}
                    className="rounded-box carousel-image"/>
            </div>

        </div>
    )
}