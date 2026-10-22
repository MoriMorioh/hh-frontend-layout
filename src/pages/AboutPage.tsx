import { Container, Paper, Title, Text } from '@mantine/core';

export function AboutPage() {
  return (
    <Container size="md" mt="xl">
      <Paper p="xl" radius="lg" bg="white">
        <Title order={1} size="h2" fw={700} mb="sm">
          Владимир Клименко
        </Title>
        <Text size="md" c="dark.4">
          Привет! Я - Frontend-разработчик. Пишу приложения на React +
          TypeScript + Redux Toolkit.
        </Text>
      </Paper>
    </Container>
  );
}
