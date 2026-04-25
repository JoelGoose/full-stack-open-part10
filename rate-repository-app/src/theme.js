import { Platform } from "react-native";

const theme = {
  colors: {
    appBar: '#24292e',
    appBarText: '#ffffff',
    mainBackground: '#e1e4e8',
    itemBackground: '#ffffff',
    repositoryDescription: '#7b7878',
    blueBackground: '#0366d6',
    redError: '#d73a4a'
  },
  fontSizes: {
    appBarText: 18,
    heading: 18,
    body: 14
  },
  fontWeights: {
    normal: '400',
    bold: '700'
  },
  fonts: {
    main: Platform.select({
      android: 'Roboto',
      ios: 'Arial',
      default: 'System'
    })
  }
};

export default theme;