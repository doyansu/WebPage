# Angular 練習

<!-- 回頂部 -->
[<div style="position: fixed; bottom: 0px; right: 0px;">頂部</div>](#angular-練習)

<link rel="stylesheet" href="../markdown/css/markdown-angular.css">

## 目錄
- [Angular 練習](#angular-練習)
  - [目錄](#目錄)
  - [搭建環境](#搭建環境)
    - [Node.js](#nodejs)
    - [Angular CLI](#angular-cli)
    - [建立工作區](#建立工作區)
    - [執行應用](#執行應用)
  - [參考網址](#參考網址)

---

## 搭建環境

參考[官方文件](https://angular.tw/guide/setup-local)

- Node.js
- npm 套件管理器
- Angular CLI

### Node.js

[Node.js 下載網站](https://nodejs.org/zh-tw/download/)

[參考影片](https://www.youtube.com/watch?v=PQoK7r4MJoQ)

### Angular CLI

在終端機輸入指令安裝。

```ps
$ npm install -g @angular/cli
```

windows 需要 [set execution policy](https://docs.microsoft.com/en-us/powershell/module/microsoft.powershell.core/about/about_execution_policies?view=powershell-7.2)

```ps
$ Set-ExecutionPolicy -Scope CurrentUser -ExecutionPolicy RemoteSigned
```

### 建立工作區

`ng new` 建立一個新的工作區 `my-app` 為自訂工作區名稱。

```ps
$ ng new my-app
```

### 執行應用

進入工作資料夾。

```ps
$ cd my-app
```

ng serve 命令啟動開發伺服器、監視檔案，並在這些檔案發生更改時重建應用。

--open（或者只用 -o 縮寫）選項會自動開啟你的瀏覽器，並訪問 http://localhost:4200/。

```ps
$ ng serve --open
```


---

## 參考網址

[angular快速上手](https://angular.tw/start)

[【跟山地人学Angular系列教程】](https://www.youtube.com/watch?v=csE6ue9w7YM&list=PLA0YHwTjkRztyUo4L6594L7ifAeWUoug7)

