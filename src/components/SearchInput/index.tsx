import styled from 'styled-components';
import { ChangeEvent } from 'react';
import { INPUT_PLACEHOLDER } from '../../constants';
import { useNavigate } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import { inputSearchValue } from '../../lib/recoil';

function SearchInput() {
  const [searchValue, setSearchValue] =
    useRecoilState<string>(inputSearchValue);
  const navigate = useNavigate();

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      if (0 < parseInt(searchValue) && parseInt(searchValue) <= 1010) {
        setSearchValue('');
        navigate(`/pokemon/${searchValue}`);
      } else {
        alert('1~1010번까지 번호만 검색 가능합니다\nex: 1');
      }
    }
  };

  return (
    <InputContainer>
      <h2>좋아하는 포켓몬 번호를 검색해보세요</h2>
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
