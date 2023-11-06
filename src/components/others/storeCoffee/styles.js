import { StyleSheet, Text, View } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f1f1f1',
    paddingHorizontal: 14,
    paddingTop: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#000',
  },
  text: {
    fontSize: 16,
    color: '#000',
  },
  cart: {
    flexDirection: 'row',
    marginVertical: 5,
    padding: 12,
    backgroundColor: '#fff',
    borderRadius: 6,
  },
  cartText:{justifyContent: 'center', paddingLeft: 10},

});
