import React from 'react';
import { Page, Text, View, Document, StyleSheet, Font } from '@react-pdf/renderer';

/**
 * Create Document Component
 * @see https://react-pdf.org/components#components
 */
export const DocumentPost = () => {
  return (
    <Document>
      <Page size={[1080, 1350]} style={styles.body}>
        {new Array(10).fill(0).map((_, i) => (
          <View key={i} style={styles.page}>
            <Text>Section #{i + 1}</Text>
          </View>
        ))}
      </Page>
    </Document>
  );
};

/**
 * Register the font
 * @see https://react-pdf.org/fonts#fonts
 */
Font.register({
  family: 'Geist',
  fonts: [
    {
      src: 'fonts/Geist-Bold.otf',
      fontWeight: 'bold',
    },
    {
      src: 'fonts/Geist-Medium.otf',
      fontStyle: 'normal',
      fontWieght: 'medium',
    },
  ],
});

/**
 * Create styles
 * @see https://react-pdf.org/styling#stylesheet-api
 */
const styles = StyleSheet.create({
  body: {
    fontFamily: 'Geist',
    fontWeight: 'medium',
    fontSize: 36,
  },
  page: {
    padding: 10,
    width: '100%',
    height: '100%',
  },
});
