/**
 * whoami 終極通關彩蛋模組
 */
const WhoamiModule = {
    executeSuperWhoami: function(isHacked, callbacks) {
        // 必須要完全通關之後才能觸發彩蛋
        if (!isHacked) {
            callbacks.log(`'whoami' 不是內部或外部指令、可執行的程式或批次檔。\n`);
            return;
        }

        // 通關後的終極最高權限彩蛋
        callbacks.playBeep(880, 0.1, "sine");
        setTimeout(() => callbacks.playBeep(1318, 0.15, "sine"), 80);

        callbacks.log(`\n====================================================`, 'success-text');
        callbacks.log(`  [隱藏彩蛋] 恭喜解鎖終極最高權限！`, 'success-text');
        callbacks.log(`  安全認證狀態 : NT AUTHORITY\\SYSTEM (GLOBAL_OVERLORD)`);
        callbacks.log(`  環境控制群組 : OVERRIDE_BYPASS_SUCCESS [LEVEL_MAX]`);
        callbacks.log(`====================================================\n`, 'success-text');
    }
};

window.WhoamiModule = WhoamiModule;