# プロジェクト名

プロジェクトの概要を書きます。プロジェクトの概要を書きます。プロジェクトの概要を書きます。プロジェクトの概要を書きます。プロジェクトの概要を書きます。プロジェクトの概要を書きます。プロジェクトの概要を書きます。プロジェクトの概要を書きます。

## インストール

### 必須環境

+ [Node.js](https://nodejs.org/ja/)


### 構築手順

パッケージのインストール

```
npm install
```

### 環境の起動

```
npm run watch
```つけるとき
@include rem(30, !important);
```

### 画像・SVGの圧縮・変換

画像は `/resources/img/` に入れる
SVGは `/resources/svg/` に入れる

```
npm run img
```

画像の場合はディレクトリ構造を保ったまま`/public/common/img`に元拡張子 + webpが出力されます。

SVGの場合は`/public/common/svg`に出力されます。  
ディレクトリは無視されます。

### SVGスプライト

`/public/common/svg/sprite/`にあるsvgを`/public/svg/sprite.svg`として出力

```
# SVGスプライトの実行
npm run svg
```

