# 模擬 CMD 遊戲

一個基於 HTML/JS 的模擬 Windows 命令提示字元遊戲，帶有黑客主題的互動體驗。

## 遊戲玩法

1. 輸入 `help` 查看可用指令
2. 使用 `cd`、`dir` 等指令探索虛擬檔案系統
3. 輸入 `root` 取得管理員權限
4. 點擊 `INITIALIZE OVERRIDE` 按鈕進行駭客攻擊
5. 攻擊成功後才能執行覆蓋操作
5. 通關後輸入 `whoami` 觸發隱藏彩蛋

## 支援指令

| 指令 | 說明 |
|------|------|
| `cd` | 變更目前目錄 |
| `cls` | 清除螢幕畫面 |
| `dir` | 顯示目錄中的檔案和子目錄清單 |
| `help` | 提供指令的說明資訊 |
| `ipconfig` | 顯示所有目前 TCP/IP 網路設定值 |
| `ping` | 測試特定主機之網路連線狀態 |
| `root` | 提升本機安全身分為最高管理員 |
| `systeminfo` | 顯示作業系統組態資訊 |
| `ver` | 顯示 Windows 版本 |


## 線上遊玩

訪問 [https://pengjun0429.github.io/sim-cmd-game/](https://pengjun0429.github.io/sim-cmd-game/)

## 技術

- HTML5 Canvas（矩陣雨效果）
- Web Audio API（音效）
- 累積 JavaScript（無框架依賴）
