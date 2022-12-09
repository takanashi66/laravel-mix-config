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
```

### フォントサイズ

フォントサイズの指定は関数を使ってください。

```
//フォントサイズが16pxのとき
@include rem(16);

//フォントサイズが30pxのとき
@include rem(30);

//フォントサイズが30pxで!importantをつけるとき
@include rem(30, !important);
```


### メディアクエリー

##### メディアクエリー関数

メディアクエリーは関数を使ってください。  
基本的なブレイクポンとは変数で記述

```
//ブレイクポイントがデフォルト(640px)のとき
@include media_query( 640 ){
    //タブレット用のスタイルを書く
}

//ブレイクポイントが変則的な場合 375px以上のとき  
@include media_query( 375 ){
    //スタイルを書く
}
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

