const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  console.log('トップページにアクセスがありました。'); // アクセスログを追加
  res.send('トップページです。');
});

app.get('/search', (req, res) => {
  const keyword = req.query.keyword;

  if (keyword) {
    console.log(`[アクセスログ] 検索キーワード: "${keyword}" でアクセスがありました。`); // ここにログ出力ロジックを追加
    res.send(`検索キーワードは: ${keyword} です。`);
  } else {
    console.log('[アクセスログ] キーワードなしで /search にアクセスがありました。'); // キーワードがない場合のログ
    res.send('キーワードが指定されていません。');
  }
});

app.listen(port, () => {
  console.log(`サーバーが http://localhost:${port} で起動しました。`);
  console.log('Ctrl+Cで終了します。');
});