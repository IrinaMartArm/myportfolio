import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import { S } from "./SliderStyle";
import './../../style/slider.css';
import { Icon } from '../icon/Icon';

type SlidePropsType = {
  text: string

}

const responsive = {
    0: { items: 1 },
    568: { items: 2 },
    1024: { items: 3 },
};

const Slide = (props: SlidePropsType) => {
  return (
    <S.Slide>
        <S.Text>{props.text}</S.Text>
    </S.Slide>
  )
}

const items = [
  <Slide text={""}/>,
  <Slide text={""}/>,
  <Slide text={""}/>,
    // <div className="item" data-value="1">1</div>,
    // <div className="item" data-value="2">2</div>,
    // <div className="item" data-value="3">3</div>,
    // <div className="item" data-value="4">4</div>,
    // <div className="item" data-value="5">5</div>,
];

export const Slider: React.FC = () => (
  <S.Slider>
    <AliceCarousel
        mouseTracking
        items={items}
        responsive={responsive}
        controlsStrategy="alternate"
        renderPrevButton={()=>{           //hcanging the arrow
          return <Icon iconId='code'/>  
        }}
    />
  </S.Slider>
);





// import React from "react";
// import { Wrapper } from "../Wrapper";
// import { S } from "./SliderStyle";

// export const Slider: React.FC = () => {
//   return (
//     <S.Slider>
//       <Wrapper>
//         <S.Slide>
//           <S.Text></S.Text>
//         </S.Slide>
//       </Wrapper>
//       <S.Pagination>
//         <span></span>
//         <span></span>
//         <span></span>
//       </S.Pagination>
//     </S.Slider>
//   );
// };

