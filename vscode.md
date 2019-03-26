# Visual Studio Code 入門

* [vscode](https://code.visualstudio.com/)
  * [wikipedia](https://en.wikipedia.org/wiki/Visual_Studio_Code)
  * Microsoftが開発
  * Windows, Linux, macOSで動く
  * オープンソース、MITライセンス
  * 商用利用でもフリー(Visual Studio Community版との違い)

## Tips

* https://code.visualstudio.com/docs/getstarted/tips-and-tricks
* https://www.youtube.com/watch?v=x5GzCohd4eo

### Macインストール時のTips

* コマンドラインから起動できるようにする
  * コマンドパレットを開く: ```Cmd + Shift + P```
  * ```Shell Command Install 'code' command PATH```

```console
$ code
``` 

### 起動中のvscodeで指定したファイルを開く

```console
$ code -r README.md 
``` 

### 起動中のvscodeで指定したフォルダで開く

```console
$ code -r .
``` 

## おすすめ拡張機能

### テーマ

* Material Theme
  * カラーテーマ、一番メジャーっぽいやつ。綺麗
  * 言語の予約語を斜体フォントで表示してくれる。(ifとかforとかreturnとか)
* Material Icon Theme
  * ファイル・フォルダアイコンのテーマ

### 一般的
 
* Remove backspace control character
  * Macでかな入力の時にバックスペース打つと変な制御コードが入る問題の対策。
  * Electron(Chromium)のバグらしいです。
* GitLens
  * Git拡張の定番。
  * CodeLensが表示がうるさいので自分は全体的にOFFにしてます```editor.codeLens:false```
* REST Client
  * httpのPOSTメソッドとかをファイルに書いておいて部分実行できる。
  * KibanaのDevToolみたいなもの何にでも使える版)
* Path Intellisense
  * ソース中のファイルパスとかの補完
* Rainbow CSV
  * CSVファイルを列ごとに色つけ、列を選択とかもできる

### markdown

* Markdown All in One
  * 多分みんなたどり着くmarkdown拡張
* Paste Image
  * 勉強会の時デモしたmarkdownに画面キャプチャをペーストするとファイルに保存してリンクになる
* Markdown Link Suggestions
  * markdownでリンク```[aaa](xx/yyy.md)```を書くときに適当にパスにあるファイルで補完してくれる

### プログラミング言語

* Python, C# (Microsoft謹製プラグイン)
* Ruby, R, ...etc (各言語誰かが出している)
* Ruby Solargraph
  * Ruby書くときはこれ入れてsolargraphのgemも入れるとライブラリとか補完できる
* emacsキーバインドがいい人は(そんな人おらんか)
  * Awesome Emacs Keymap
    * kill-ringからyank-popができるようになった。
  * vscode-emacs-tab
    * tabでソースの文脈にあった位置にインデントして動かない
