import React from 'react';

export const DownloadPDFButton = ({pdfBase64}) => {
  // 1. PDFのBase64エンコードデータ（例としてダミーデータを使用）

  // 2. ダウンロード機能の実装
  const downloadPDF = () => {
    const a = document.createElement('a');
    a.href = pdfBase64;
    a.download = 'downloaded_document.pdf';

    // a要素をクリックしてダウンロードを開始
    document.body.appendChild(a);
    a.click();

    // a要素を削除
    document.body.removeChild(a);
  };

  return (
    <button onClick={downloadPDF}>
      PDFをダウンロード
    </button>
  );
};
