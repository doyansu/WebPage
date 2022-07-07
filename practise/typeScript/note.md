# 筆記
## VScode 套件
- Quokka.js

---

## 安裝 TypeScript compiler
在 terminal 下指令 ( 需先安裝 [node.js](https://nodejs.org/zh-tw/download/) )

```ps
$ npm install -g typescript
```
```ps
$ tsc --init
```

如無法建立 `tsconfig.json` 檔可試試在前面加入 `npx`

( `npm` 將套件安裝到本地 、 `npx` 套件使用完會刪除，適用於不常用套件 )

```ps
$ npx tsc --init
```
將 `ts` 編譯成 `js` 檔案使用 `tsc` 指令 ( 如無法一樣嘗試在前面加入 `npx` )

```ps
$ tsc
```
    
---

## TypeScript 操作

使用 `Shift` + `Ctrl` + `p` 快捷下命令來建立、執行 `TypeScript` 檔案。
```shell
Quokka.js: New TypeScript File
Quokka.js: Start on Current File
```

對 name 按 `F2` 可直接改掉全部用到該物件屬性的名稱

```javaScript
const person = {
    name: 'Amos'
}
```
對函式按 `F12` 可直接跳到定義

```typeScript
function abc() {
    return 'abc';
}

const b = abc();
```

在 `js` 檔案最上方加入標籤可變為 `TypeScript` 檢查模式 ( 僅限 `vscode` )

```ts
// @ts-check
```
`TypeScript` 特有寫法可限定變數可接受型別。

```ts
let m : string | number = 1;
m = '1';
```

---

## 參考影片連結
[typescript](https://www.youtube.com/watch?v=seNBnxXHj9E)

