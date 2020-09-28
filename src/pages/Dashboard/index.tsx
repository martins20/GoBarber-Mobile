import React from 'react';

import { useAuth } from '../../hooks/auth';

import { Container, Button, Text } from './styles';

const Dashboard: React.FC = () => {
  const { signOut } = useAuth();

  return (
    <Container>
      <Button onPress={signOut}>
        <Text>Sair</Text>
      </Button>
    </Container>
  );
};

export default Dashboard;
