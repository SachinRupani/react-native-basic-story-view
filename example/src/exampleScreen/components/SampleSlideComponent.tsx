import { Image, StyleSheet, Text, View } from 'react-native';

export type PropsSampleSlideComponent = {
  imageUrl: string;
  title: string;
};

export const SampleSlideComponent = ({
  imageUrl,
  title,
}: PropsSampleSlideComponent) => {
  return (
    <View style={styles.container}>
      {/* Image */}
      <Image
        style={styles.imageStyle}
        source={{ uri: imageUrl }}
        resizeMode="cover"
      />

      {/* Title */}
      <Text style={styles.titleTextStyle}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 16,
  },

  imageStyle: {
    width: 320,
    height: 320,
    borderRadius: 16,
  },

  titleTextStyle: {
    textAlign: 'center',
    color: '#222222',
    fontSize: 14,
    fontWeight: '500',
  },
});
