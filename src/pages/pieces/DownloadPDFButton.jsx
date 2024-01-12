import React from 'react';

export const DownloadPDFButton = ({pdfPath}) => {
  const downloadPDF = () => {
    // const pdfUrl = '/pieces/1/scores/1/score.pdf';
    console.log(pdfPath);
    const link = document.createElement('a');
    link.href = pdfPath;
    link.download = 'sample.pdf';
    link.click();
  };


  return (
    <button onClick={downloadPDF}>
      PDFをダウンロード
    </button>
  );
};
