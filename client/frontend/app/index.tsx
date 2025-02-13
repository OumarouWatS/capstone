import { StyleSheet, Image, Platform } from 'react-native';

import { Collapsible } from '@/components/Collapsible';
import { ExternalLink } from '@/components/ExternalLink';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { IconSymbol } from '@/components/ui/IconSymbol';

export default function TabTwoScreen() {
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#D0D0D0', dark: '#353636' }}
      headerImage={
        <IconSymbol
          size={310}
          color="#808080"
          name="chevron.left.forwardslash.chevron.right"
          style={styles.headerImage}
        />
      }>
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Welcome to EAGLE!!</ThemedText>
      </ThemedView>
      <ThemedText>This rover App, named EAGLE, was inspired by NASA's Artemis mission to the moon! 
        The App is meant to assist crewmembers during moon explorations to help discover the unknown. 
        Below you will find instructions on how to use EAGLE. </ThemedText>
      <Collapsible title="NASA Artemis Mission">
        <ThemedText>
          The purpose of NASA's Artemis campaign is to explore the Moon for scientific discovery, 
          technology advancement, and to learn how to live and work on another world as prepare for human missions to Mars.
        </ThemedText>
        <ExternalLink href="https://www.nasa.gov/humans-in-space/artemis/">
          <ThemedText type="link">Learn more</ThemedText>
        </ExternalLink>
      </Collapsible>
      <Collapsible title="How to Use Monitor">
        <ThemedText>
          Instructions on how to use our monitor tab will go here!
        </ThemedText>
      </Collapsible>
      <Collapsible title="How to Use Autonomy">
        <ThemedText>
          Instructions on how to use our autonomy tab will go here!
        </ThemedText>
      </Collapsible>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  headerImage: {
    color: '#808080',
    bottom: -90,
    left: -35,
    position: 'absolute',
  },
  titleContainer: {
    flexDirection: 'row',
    gap: 8,
  },
});



/*import { Text, View } from "react-native";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>Edit app/index.tsx to edit this screen.</Text>
    </View>
  );
}*/