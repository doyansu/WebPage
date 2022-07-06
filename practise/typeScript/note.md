# 筆記
## 套件
- Quokka.js

---

## 安裝 
### `typescript compiler`
在 terminal 下指令 

```properties
$ npm install -g typescript
```
```properties
$ tsc --init
```

如無法建立 `tsconfig.json` 檔可試試在前面加入 `npx`

( `npm` 將套件安裝到本地 、 `npx` 套件使用完會刪除，適用於不常用套件 )

```properties
$ npx tsc --init
```
將 `ts` 編譯成 `js` 檔案使用 `tsc` 指令 ( 如無法一樣嘗試在前面加入 `npx` )

```properties
$ tsc
```
    
---

## 操作
對 name 按 F2 可直接改掉全部用到該物件屬性的名稱

```javaScript
const person = {
    name: 'Amos'
}
```

---

## 參考影片連結
[typescript](https://www.youtube.com/watch?v=seNBnxXHj9E)

