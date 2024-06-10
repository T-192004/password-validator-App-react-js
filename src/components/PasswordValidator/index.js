// Write your code here
import {useState} from 'react'
import {
  AppContainer,
  CardContainer,
  Heading,
  Paragraph,
  Input,
  ErrorMsg,
} from './styledComponents'

const PasswordValidator = () => {
  const [inputText, setInputText] = useState('')
  const onChangeInputText = event => {
    setInputText(event.target.value)
  }
  const passwordLength = inputText.length < 8
  return (
    <AppContainer>
      <CardContainer>
        <Heading>Password Validator</Heading>
        <Paragraph>Check how strong and secure is your password</Paragraph>
        <Input type="password" onChange={onChangeInputText} />
        {passwordLength && (
          <ErrorMsg>Your passowrd must be at least 8 characters</ErrorMsg>
        )}
      </CardContainer>
    </AppContainer>
  )
}

export default PasswordValidator
