import { memo } from 'react';
import ReactLoading from 'react-loading';
import styled from 'styled-components';

function Loading() {
  return (
    <LoadingWrapper>
      <ReactLoading type="spin" color="#406bc9" />
    </LoadingWrapper>
  );
}

const LoadingWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  text-align: center;
  align-items: center;
  padding: 10px 0 10px 0;
`;

export default memo(Loading);
