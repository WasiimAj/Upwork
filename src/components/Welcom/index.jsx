import styled from "styled-components";
import WelcomImg from "../../assets/images/image-removebg-preview (2).png";

const WelcomDiv = styled.div`
  width: 95%;
  height: 130px;
  background: #fff;
  border-radius: 16px;
  border: 1px solid #d5e0d5;
  display: flex;
  justify-content: space-between;
  margin: auto;
`;

const H2 = styled.h2`
  font-size: 22px;
  line-height: 28px;
  font-weight: 500px;
  color: #001e00;
  font-family: inherit;
  padding: 20px 25px 10px 25px;
`;

const H3 = styled.h3`
  font-size: 36px;
  line-height: 37px;
  font-weight: 400px;
  color: #001e00;
  padding: 0 25px;
`;


const Welcom = () => {

  let newDate = new Date()

    return (
        <WelcomDiv>
          <div>
            <H2>
              {newDate.toDateString()}
            </H2>
            <H3>
              Good Evening, Wasiim A.
            </H3>
          </div>

          <img src={WelcomImg} alt="welcom img"/>

        </WelcomDiv>
  )
}

export default Welcom;
