// import styled from "styled-components";
// import defaultImg from '../images/room-1.jpeg'
// const StyledHero = styled.header`
//     min-height: 60vh;
//     background: url(${props => props.img ? props.img : defaultImg}) center/cover no-repeat;
//     display: flex;
//     align-items: center;
//     justify-content: center;
// `;
// export default StyledHero;
import styled from "styled-components";

import defaultImg from "../images/room-1.jpeg";
const StyledHero = styled.header`
  min-height: 60vh;
  background: url(${(props) => (props.img ? props.img : defaultImg)})
    center/cover no-repeat;
  display: flex;
  align-items: center;
  justify-content: center;
`;
export default StyledHero;

//Here props are obiviously the one that are  added here on styledHero


///we can attach stylles to components it will right away rendered
// there will no collision with css file all styles will have their classname
//npm i styled component