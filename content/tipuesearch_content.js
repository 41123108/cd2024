var tipuesearch = {"pages": [{'title': 'About', 'text': '網頁:  https://41123108.github.io/cd2024/ \n 網誌:\xa0 https://41123108.github.io/cd2024/blog \n 簡報:\xa0 https://41123108.github.io/cd2024/reveal \xa0 \n 倉儲:  https://github.com/41123108/cd2024 \n \n', 'tags': '', 'url': 'About.html'}, {'title': 'cmsimde', 'text': "SMap  - SiteMap - 依照階次列出網站的所有頁面. \n EditA  - Edit All page - 將所有頁面放入編輯模式中, 主要用來處理頁面搬遷, 刪除或決定衝突頁面內容版本. \n Edit  - Edit page - 先選擇要編輯的單一頁面後, 再點選 Edit, 即可進入單一頁面的編輯模式. \n Config  - Configure Site - 編輯頁面標題與管理者密碼. \n Search  - 動態頁面內容的關鍵字搜尋. \n IUpload  - Image file Upload - 圖檔的上傳功能, 可以上傳 jpg, png 與 gif 檔案, 其中若在手機上傳圖檔, 系統會自動將圖片檔案縮小為 800x800 大小. \n IList  - Image file List - 列出可以直接在頁面編輯模式中引用的圖片檔案. \n FUpload  - File Upload - 一般檔案的上傳功能, 目前可以上傳的檔案副檔名包括 'jpg', 'png', 'gif', '7z', 'pdf', 'zip', 'ttt', 'stl', 'txt', 'html', 'mp4' 等, 使用者可以自行修改. \n FList  - File List - 列出可以直接在頁面編輯模式中引用的上傳檔案. \n Logout  - 登出頁面編輯模式. \n Convert  - 將動態網站中位於 config/content.htm 檔案, 透過分頁設定轉為 content 目錄中的靜態網頁. \n acp  - git add, git commit 與 git push, 通常只有在 localhost 或自架主機上利用網頁表單協助將倉儲改版內容推向 Github 倉儲. \n SStatic  - Start Static Site - 利用 Python 啟動網站伺服功能, 可以讓使用者檢查轉檔後的靜態網站內容. \n RStatic  - Replit Static Site URL - 僅用於 Replit 模式, 當使用者按下 SStatic 後, 可以按下 RStatic 進入當下尚未推向 Github Pages 的靜態網站. \n 80  - 由 init.py 中 static_port 所決定的連結字串, 一般不使用 80, 只有在 Replit 中為了與動態網站共用 port, 才特別設為 80. \n \n", 'tags': '', 'url': 'cmsimde.html'}, {'title': 'Replit', 'text': 'https://replit.com \n 利用 init_replit 指令安裝所需 Python 模組 chmod u+x init_replit ./init_replit \n On Replit: \n .replit: python3 main.py \n chmod u+x cms init_replit \n ./init_replit \n for cmsimde_site (not needed): git submodule update --init --recursive \n for cmsimde: pip install flask flask_cors bs4 lxml pelican markdown gevent \n password generator:\xa0 https://mde.tw/cmsite/content/Brython.html?src=https://gist.githubusercontent.com/mdecycu/b92b16621dd0246c352cf13d6463b333/raw/0bfa669750aba3abe48554509bbd43d65b6e5c82/hashlib_password_generator.py \xa0 \n \n for IPv6 only Ubuntu: .ssh 目錄中的 config, 將 SSH session 名稱設為 github.com: Host github.com User git Hostname github.com ProxyCommand /usr/bin/ncat --proxy p4.cycu.org:3128 --proxy-type http %h %p for Replit: .ssh 目錄中的 config, 將 SSH session 名稱設為 github.com: Host github.com User git Hostname github.co #since Replit works for IPv4, therefore no ProxyCommand setting needed #ProxyCommand /usr/bin/ncat --proxy p4.cycu.org:3128 --proxy-type http %h %p \n', 'tags': '', 'url': 'Replit.html'}, {'title': 'Ｈｗ', 'text': '', 'tags': '', 'url': 'Ｈｗ.html'}, {'title': 'Ｗ３', 'text': '', 'tags': '', 'url': 'Ｗ３.html'}, {'title': 'Ｗ４', 'text': '', 'tags': '', 'url': 'Ｗ４.html'}, {'title': '翻譯影片', 'text': '# 挑選一部曾經課堂上傳影片中填上字幕 分組翻譯解析課程影片時長27分 [ 影片連結 ] 影片字幕中整理出逐字稿(雲端空間呈現) [ 逐字稿 ] \n', 'tags': '', 'url': '翻譯影片.html'}, {'title': 'Ｗ１０', 'text': '', 'tags': '', 'url': 'Ｗ１０.html'}, {'title': '任務二', 'text': '請下載 [cd2024_ball_balancing_platform_control_ref.7z] 閱讀後請將摘要內容放入個人與分組網誌中. [ cd2024_ball_balancing_platform_control_ref.7z ] ## 論文一：2D Ball Balancer Control using QUARC １內容摘要:這份指南將引導您通過使用QUARC控制2D球平衡器的過程。您將學習如何從頭原理建模、分析和有效控制系統。摘要內容包括實驗的先決條件、系統建模和傳遞函數的獲取，以及實現2D球平衡器的期望控制響應的方法。 ２總結:這份指南旨在教導如何使用QUARC控制2D球平衡器。內容包括先決條件、系統建模、傳遞函數獲取以及實現期望控制響應的方法。通过这份指南，用户将学习如何有效地模拟、分析和控制2D球平衡器系统。 ## 論文二：A real time control system for balancing a ball on a platform with FPGA parallel implementation １內容摘要:這份文件介紹了一個利用PID調節器和FPGA平行實現的實時控制系統，旨在提高在平台上平衡球的準確性。該系統的設計包括開發平衡球在平台上的轉換函數、合成PID調節器以及在FPGA上進行平行計算的實現。通過自然模擬，證實了對平台上球位置調節準確性的提高。這項研究的目的是為了應對當今控制系統面臨的新挑戰，如物聯網、無人駕駛汽車和擁有多個參數的複雜對象。這表明了對於開發、研究和設計具有多個參數的複雜對象的實時控制系統的需求。 ２總結:這份文件介紹了一個新的實時控制系統，利用PID調節器和FPGA平行實現，旨在提高在平台上平衡球的準確性。該系統的設計包括開發轉換函數、合成PID調節器以及在FPGA上進行平行計算。通過自然模擬驗證了對平台上球位置調節準確性的提高。這項研究突顯了對於控制系統在處理物聯網、無人駕駛汽車等新挑戰時的重要性，並強調了實時控制系統對於具有多個參數的複雜對象的開發和研究的價值。 ## 論文三：Ball on the plate balancing control system １內容摘要:這份文件描述了設計一個用於平衡球在平板上的實驗室測試臺。系統利用微控制器和控制算法來追踪球的位置並進行控制。通過電阻式觸摸屏確定物體位置，並透過步進馬達的轉角確定平板傾斜角度。控制系統以100 Hz頻率運行，讀取球的坐標和平台傾角信息。系統目標是將物體帶到觸摸屏中心點並保持在該位置，儘管受到干擾。实驗結果顯示，控制系統成功維持球在觸摸屏中心點。 ２總結:這份文件介紹了一個用於平衡球在平板上的實驗室測試臺，利用微控制器和控制算法來追踪和控制球的位置。系統包括電阻式觸摸屏和步進馬達，以確定物體位置和平板傾斜角度。控制系統旨在將球帶到觸摸屏中心並保持穩定。实驗結果表明，控制系統成功實現了維持球在觸摸屏中心的目標。 ## 論文四Construction and theoretical study of a ball balancing platfor １內容摘要:這份文件探討了一個球平衡平台的構造和理論研究，旨在通過自動控制理論的應用來探討穩定動態系統的局限性。該文件包括了構造球平衡平台的方法、將物理和計算機模擬結果進行比較的結果，以及引入比例-積分-微分控制器來幫助平衡平台上的球並觀察系統穩定性方面的限制。 ２總結:這份文件掔探討了通過自動控制理論來穩定動態系統的限制。研究通過構造球平衡平台，比較物理和計算機模擬結果，並引入比例-積分-微分控制器來平衡球在平台上的運動。研究還探討了在穩定自然不穩定或半穩定系統時的性能限制 ## 論文五：Design and Implementation a Ball Balancing System for Control Theory Course １內容摘要:這個專案旨在設計和實現一個球平衡系統，用於控制理論課程。該系統利用微控制器和控制算法來保持一個球在樑上平衡。通過實時反饋，系統調整樑的角度以最小化誤差，並教導學生有關PID控制。該系統採用了伺服馬達、超聲波感測器和3D打印的PVC塑料樑，並使用MATLAB進行模擬和視覺化。這個項目有助於學生理解控制理論的應用，並提供了一個實用的實驗平台。 ２總結:這個專案設計了一個球平衡系統，旨在教控制理論課程的學生應用PID控制。系統利用微控制器和控制算法來調整樑的角度，以保持球在樑上平衡。通過實時反饋，系統能夠最小化誤差，並提供了一個實用的實驗平台，幫助學生理解控制理論的應用。 ## 論文六：Simulation and Experimental Study of Ball Position Control at Biaxial Platform using State Space Approach １內容摘要:這份文件探討控制理論的實際應用，特別聚焦於在雙軸平台上平衡球的應用。文件中描述了如何利用控制結構在防衛軍事技術、攝影穩定和太空火箭垂直降落等高端應用中使用。研究人員通常如何在應用實踐中探索新的控制理論，控制結構對防衛軍事技術有哪些實際影響，以及文件中描述的基準系統是如何在測試控制結構中使用的。 ２總結:這份文件探討了控制理論在平衡球的應用中的實際應用。通過在雙軸平台上平衡球來研究控制結構的性能，並探討了在防衛軍事技術和高端應用中的潛在應用。文件中還介紹了基準系統的設計和控制結構的比較，以及控制器參數的計算方法。整體而言，這份文件提供了有關控制系統設計和應用的深入設計和比較，並強調了其在不同領域中的潛在應用價值。 \n', 'tags': '', 'url': '任務二.html'}, {'title': 'Brython', 'text': 'https://en.wikipedia.org/wiki/Python_(programming_language) \n Examples: \n https://gist.github.com/mdecycu/d9082d678096bd58378d6afe2c7fa05d \n https://www.geeksforgeeks.org/python-programming-examples/ \n https://www.programiz.com/python-programming/examples \n https://www.freecodecamp.org/news/python-code-examples-sample-script-coding-tutorial-for-beginners/ \n Python Tutorial: \n https://docs.python.org/3/tutorial/ \n An informal introduction to Python \n Indentation (Python 採 4 個 Spaces 縮排, 以界定執行範圍) \n Variables ( Python Keywords ) \n Comments (# 單行註解, 三個單引號或三個雙引號標註多行註解) \n Numbers  (整數 int(), 浮點數 float()) \n Strings  (字串) \n print (Python 內建函式,  print()  函式) \n Python control flow tools \n for \n if \n range \n open \n read \n lists \n tuples \n dictionaries \n functions \n try ... except \n break \n pass \n classes \n 這個頁面 demo 如何在同一頁面下納入多個線上 Ace 編輯器與執行按鈕 ( practice_html.txt  動態頁面超文件). \n practice_html.txt  動態頁面超文件應該可以在啟動 Brython 時, 設定將 .py 檔案放入 downloads/py 目錄中引用. \n 亦即將所有對應的 html 也使用 Brython 產生, 然後寫為  class  後, 在範例導入時透過  instance  引用. \n <!-- 啟動 Brython -->\n<script>\nwindow.onload=function(){\nbrython({debug:1, pythonpath:[\'./../cmsimde/static/\',\'./../downloads/py/\']});\n}\n</script> \n 從 1 累加到 100: \n 1 add to 100 \n 將 iterable 與 iterator  相關說明 , 利用 Brython 與 Ace Editor 整理在這個頁面. \n  導入 brython 程式庫  \n \n \n \n \n  啟動 Brython  \n \n \n \n  導入 FileSaver 與 filereader  \n \n \n \n \n  導入 ace  \n \n \n \n \n \n \n  導入 gearUtils-0.9.js Cango 齒輪繪圖程式庫  \n \n \n \n \n \n \n  請注意, 這裡使用 Javascript 將 localStorage["kw_py_src1"] 中存在近端瀏覽器的程式碼, 由使用者決定存檔名稱 \n \n \n \n \n \n \n  add 1 to 100 開始  \n \n \n  add 1 to 100 結束 \n  editor1 開始  \n  用來顯示程式碼的 editor 區域  \n \n  以下的表單與按鈕與前面的 Javascript doSave 函式以及 FileSaver.min.js 互相配合  \n  存擋表單開始  \n Filename:  .py   \n  存擋表單結束  \n \n  執行與清除按鈕開始  \n Run   Output   清除輸出區 清除繪圖區 Reload \n  執行與清除按鈕結束  \n \n  程式執行 ouput 區  \n \n  Brython 程式執行的結果, 都以 brython_div1 作為切入位置  \n \n  editor1 結束   ##########################################  \n 從 1 累加到 100 part2: \n 1 add to 100 cango_three_gears BSnake AI Tetris Rotating Block \n  請注意, 這裡使用 Javascript 將 localStorage["kw_py_src2"] 中存在近端瀏覽器的程式碼, 由使用者決定存檔名稱 \n \n \n \n  add 1 to 100 part2 開始  \n \n \n  add 1 to 100 part2 結束 \n  editor2 開始  \n  用來顯示程式碼的 editor 區域  \n \n  以下的表單與按鈕與前面的 Javascript doSave 函式以及 FileSaver.min.js 互相配合  \n  存擋表單開始  \n Filename:  .py   \n  存擋表單結束  \n \n  執行與清除按鈕開始  \n Run   Output   清除輸出區 清除繪圖區 Reload \n  執行與清除按鈕結束  \n \n  程式執行 ouput 區  \n \n  Brython 程式執行的結果, 都以 brython_div1 作為切入位置  \n \n  editor2 結束  \n \n \n', 'tags': '', 'url': 'Brython.html'}]};