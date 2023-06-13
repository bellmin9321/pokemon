import styled from 'styled-components';
import { ChangeEvent } from 'react';
import { INPUT_PLACEHOLDER } from '../../constants';

function SearchInput() {
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    console.log(e);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      console.log('Enter');
    }
  };

  return (
    <InputContainer>
      <h2>좋아하는 포켓몬을 검색해보세요</h2>
      <Input
        type="search"
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
  padding-bottom: 20px;
`;

const Input = styled.input`
  display: block;
  width: 40vw;
  height: 32px;
  line-height: 1.42;
  padding: 6px 12px;
  background-color: #fff;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 14px;
`;

export default SearchInput;
