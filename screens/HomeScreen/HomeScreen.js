import React from 'react';
import { View, StyleSheet } from 'react-native';

import { LightText, RegularText, MediumText, SemiBoldText, Icons } from '../../helpers';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <LightText>Anim deserunt consequat aliqua laborum et adipisicing excepteur tempor sint ex ut.</LightText>
      <RegularText>Anim deserunt consequat aliqua laborum et adipisicing excepteur tempor sint ex ut.</RegularText>
      <MediumText>Anim deserunt consequat aliqua laborum et adipisicing excepteur tempor sint ex ut.</MediumText>
      <SemiBoldText>Anim deserunt consequat aliqua laborum et adipisicing excepteur tempor sint ex ut.</SemiBoldText>
      <Icons name="glass" size={10} style={{ color: 'red' }} />
    </View>
  );
}

HomeScreen.navigationOptions = {
  'header': null,
};

const styles = StyleSheet.create({
  'container': {
    'flex': 1,
    'backgroundColor': '#fff',
    'padding': 30,
  },
});
