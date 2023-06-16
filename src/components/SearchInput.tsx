import styled from 'styled-components';
import { INPUT_PLACEHOLDER } from '../constants';
import useInput from '../lib/hooks/useInput';

function SearchInput() {
  const { searchValue, handleChange, handleKeyDown } = useInput();

  return (
    <InputContainer>
      <Input
        type="search"
        value={searchValue}
        placeholder={INPUT_PLACEHOLDER}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
      />
    </InputContainer>
  );
}

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: absolute;
  left: 0;
  right: 0;
`;

const Input = styled.input`
  display: block;
  width: 30vw;
  height: 32px;
  line-height: 1.42;
  padding: 6px 12px;
  background-color: #fff;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 14px;
`;

export default SearchInput;
