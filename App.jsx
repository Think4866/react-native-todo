import React from 'react';
import * as eva from '@eva-design/eva';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ApplicationProvider, Layout, Text, IconRegistry } from '@ui-kitten/components';
import TodoList from './src/components/TodoList';
import { EvaIconsPack } from '@ui-kitten/eva-icons';

const HomeScreen = () => (
  <Layout style={{ flex: 1, }}>
    <SafeAreaView>
      <TodoList />
    </SafeAreaView>
  </Layout>
);

export default () => {
  return (
    <>
      <IconRegistry icons={EvaIconsPack} />
      <ApplicationProvider {...eva} theme={eva.dark}>
        <HomeScreen />
      </ApplicationProvider>
    </>
  );
}