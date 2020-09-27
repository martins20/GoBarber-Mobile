import React from 'react';
import { Image } from 'react-native';
import { logo } from '../../utils/imgaesExports';

import { Container } from './styles';

const SignIn: React.FC = () => {
  return (
    <Container>
      <Image source={logo} />
    </Container>
  );
};

export default SignIn;
