import styled from '@emotion/styled';
import { Box } from '@mui/material';

const StyledPostItemImage = styled(Box)`
  min-height: 600px;
  max-width: 500px;

  & img {
    height: 100%;
    object-fit: cover;
  }
`;

export default StyledPostItemImage;