import React from 'react';
import { Image } from 'react-native';
import { logo } from '../../utils/imgaesExports';

import { Container, Title } from './styles';

const SignIn: React.FC = () => {
  return (
    <Container>
      <Image source={logo} />

      <Title>Faça seu Logon</Title>
    </Container>
  );
};

export default SignIn;
