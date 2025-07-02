// Express.jsモジュールをインポート
const express = require('express');
const app = express(); // Expressアプリケーションのインスタンスを作成
const port = process.env.PORT || 3000; // サーバーがリッスンするポート番号。Renderなどの環境ではprocess.env.PORTが使われる

// ルートURL (例: http://localhost:3000/) にアクセスがあった場合
app.get('/', (req, res) => {
  res.send('トップページです。');
});

// 動的なURL (例: http://localhost:3000/search?keyword=apple) にアクセスがあった場合
app.get('/search', (req, res) => {
  // request.query オブジェクトから 'keyword' という名前のクエリパラメータの値を取得
  const keyword = req.query.keyword;

  if (keyword) {
    res.send(`検索キーワードは: ${keyword} です。`);
  } else {
    res.send('キーワードが指定されていません。');
  }
});

// サーバーを起動し、指定されたポートでリッスン
app.listen(port, () => {
  console.log(`サーバーが http://localhost:${port} で起動しました。`);
  console.log('Ctrl+Cで終了します。');
});