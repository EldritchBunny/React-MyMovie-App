import styled from "styled-components";

const StyledView = styled.p`
  display: flex;
  flex-direction: row;
`;

const ErrorView = () => {
  return (
    <>
      <StyledView>404</StyledView>
      <StyledView>go away</StyledView>
    </>
  );
};

export default ErrorView;
