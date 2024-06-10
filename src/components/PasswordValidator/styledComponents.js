// Style your elements here
import styled from 'styled-components'

export const AppContainer = styled.div`
  background-size: cover;
  background-color: #24263c;
  height: 100vh;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
export const CardContainer = styled.div`
  width: 40%;
  padding: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  background-color: #383a4e;
  box-shadow: 2px 3px 4px 5px #434451;
  border-radius: 20px;
`
export const Heading = styled.h1`
  color: #ffffff;
  font-size: 30px;
  font-family: 'Roboto';
  font-weight: 700;
`
export const Paragraph = styled.p`
  color: #f8fafc;
  font-size: 14px;
  font-family: 'Roboto';
  font-weight: 400;
`
export const Input = styled.input`
  font-size: 14px;
  font-family: 'Roboto';
  font-weight: 400;
  border-radius: 4px;
  padding: 10px;
  border: #edeeff solid 2px;
  backgorund-color: #edeeff;
`
export const ErrorMsg = styled.p`
  color: #ef4444;
  font-size: 14px;
  font-family: 'Roboto';
  font-weight: 400;
`
