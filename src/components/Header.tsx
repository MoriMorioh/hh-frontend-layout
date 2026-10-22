import React from 'react';
import { Container, Group, Text, Box } from '@mantine/core';
import styles from './Header.module.css';
import { NavLink } from 'react-router-dom';

export const Header: React.FC = () => {
  return (
    <Box component="header" className={styles.header}>
      <Container size="xl" className={styles.container}>
        <Group
          justify="space-between"
          align="center"
          className={styles.innerGroup}
        >
          <Group gap="xs" align="center">
            <Box className={styles.logoBadge}>hh</Box>
            <Text className={styles.logoText}>.FrontEnd</Text>
          </Group>

          <Box className={styles.navigation}>
            <NavLink to="/vacancies" className={styles.navLink}>
              {({ isActive }) => (
                <>
                  <Text
                    className={isActive ? styles.navTextActive : styles.navText}
                  >
                    Вакансии FE
                  </Text>
                  {isActive && <span className={styles.dot} />}
                </>
              )}
            </NavLink>

            <NavLink to="/about" className={styles.navLink}>
              {({ isActive }) => (
                <>
                  <span className={styles.userIcon}>
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                      <circle cx="12" cy="7" r="4" />
                    </svg>
                  </span>
                  <Text
                    className={isActive ? styles.navTextActive : styles.navText}
                  >
                    Обо мне
                  </Text>
                  {isActive && <span className={styles.dot} />}
                </>
              )}
            </NavLink>
          </Box>
        </Group>
      </Container>
    </Box>
  );
};
