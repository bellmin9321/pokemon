import styled from 'styled-components';
import { ChildrenProp } from '../../../types';

function Content({ children }: ChildrenProp) {
  return <ContentContainer>{children}</ContentContainer>;
}

const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

export default Content;
