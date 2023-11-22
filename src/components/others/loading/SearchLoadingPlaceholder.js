import {Dimensions, FlatList, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {
  Placeholder,
  PlaceholderMedia,
  PlaceholderLine,
  Fade,
} from 'rn-placeholder';

const SearchLoadingPlaceholder = () => {
  const array = Array.from({length: 20}, (_, index) => index);

  const renderItem = () => {
    return (
      <PlaceholderMedia
        Animation={Fade}
        style={{
          width: Dimensions.get('window').width / 2.4,
          height: 150,
          margin: 10,
          backgroundColor: 'rgba(220,220,220, 0.5)',
          marginVertical: 10,
        }}
      />
    );
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={array}
        renderItem={renderItem}
        keyExtractor={(item, index) => index}
        numColumns={2}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

export default SearchLoadingPlaceholder;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
