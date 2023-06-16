import React, { ChangeEvent } from 'react';
import { useRecoilState } from 'recoil';
import { inputSearchValue } from '../recoil';
import { useNavigate } from 'react-router-dom';

function useInput() {
  const navigate = useNavigate();
  const [searchValue, setSearchValue] =
    useRecoilState<string>(inputSearchValue);

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

  return { searchValue, handleChange, handleKeyDown };
}

export default useInput;
