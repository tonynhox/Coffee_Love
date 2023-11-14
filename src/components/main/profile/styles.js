import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export const styles = StyleSheet.create({
  cardBoder:{
    backgroundColor: '#ffff',
    
    borderRadius: 8,
  },
  txtExtention: {
    fontSize: 13.5,
    marginTop: 4,
    color: '#000',
    fontWeight: '500',
  },
  line:{
    paddingLeft: 16,
    backgroundColor:'#ffff',
  },  
  icLeft: {
    position: 'absolute',
    right: 0,
    fontSize: 20,
    color: '#000',
    top: 16,
  },
  CardSupport: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#ffff',
    paddingVertical: 12,
    borderBottomWidth: 0.6,
    borderBottomColor: 'lightgray',
  },
  cardRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  cardExtention: {
    backgroundColor: '#ffff',
    padding: 16,
    borderRadius: 8,
    flexBasis: '49%',
    marginBottom: 8,
  },
  txtItem: {
    fontSize: 14,
    marginTop: 4,
    color: '#000',
    fontWeight: '400',
  },
  icon: {
    fontSize: 22,
    color: '#000',
    marginRight: 12,
  },
  card: {
    marginBottom: 24,
  },
  txtTitle: {
    marginLeft: 8,
    fontSize: 20,
    fontWeight: '500',
    marginBottom: 12,
    marginTop: 4,
    color: '#000',
  
  },
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    padding: 16,
  },
})