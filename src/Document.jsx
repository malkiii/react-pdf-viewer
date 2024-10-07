import React from 'react';
import { Page, Text, View, Document, StyleSheet } from '@react-pdf/renderer';

/**
 * Create styles
 * @see https://react-pdf.org/styling#stylesheet-api
 */
const styles = StyleSheet.create({
  section: {
    padding: 10,
    width: '100%',
    height: '100%',
    border: '1px solid #000',
  },
});

/**
 * Create Document Component
 * @see https://react-pdf.org/components#components
 */
export const DocumentPost = () => {
  return (
    <Document>
      <Page size={[1080, 1350]}>
        {new Array(10).fill(0).map((_, i) => (
          <View key={i} style={styles.section}>
            <Text>Section #{i + 1}</Text>
          </View>
        ))}
      </Page>
    </Document>
  );
};
