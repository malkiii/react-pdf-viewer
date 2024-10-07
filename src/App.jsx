import { PDFViewer } from '@react-pdf/renderer';
import { DocumentPost } from './Document';

export default function App() {
  return (
    <PDFViewer
      style={{
        width: '100%',
        minHeight: '100dvh',
        position: 'absolute',
        border: 'none',
        padding: 0,
        margin: 0,
      }}
    >
      <DocumentPost />
    </PDFViewer>
  );
}
