# 画像を一括で圧縮するGulp

## 準備

必要なモジュールをインストールします。

※Node.js `v18.15.0`で動作確認済み

```
$ npm i
```

その後、`_src`と`dist`にある`.gitkeep`を削除します。

## 使い方

### 監視モード

監視中は`_src`に画像を置くと自動で`dist`にコンパイルされます。

```
$ npm run watch
```

### ビルド

コマンドを実行すると、`dist`内のファイルが全削除され、その後`_src`内の画像が全て`dist`にコンパイルされます。

```
$ npm run build
```

## 注意点

- 監視中に`_src`の画像を削除しても、それは`dist`には反映されません。削除した画像は`dist`に残ったままになります。
- `npm run build`を実行すると、`dist`内の全てのファイル（画像以外も）が削除されます。なので、この中には原則ファイルは置かないようにしましょう。
- 画像が大量にあったり、重いpngファイルの場合はコンパイルに時間がかかります。