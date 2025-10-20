import Slider from 'react-slick';
import { SkillsRadarChart } from './skills-radar-chart';
import './skills.css';
import { HowIWork } from './how-i-work';

export const Skills = (
    // searchQuery: string
) => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        autoplay: false,
      };

    return (
        <section className="skills-slider">
            <Slider {...settings}>
                <div>
                    <SkillsRadarChart />
                </div>
                <div>
                    <HowIWork />
                </div>
            </Slider>
        </section>
    );
};