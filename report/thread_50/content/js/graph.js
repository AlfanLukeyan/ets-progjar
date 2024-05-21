/*
   Licensed to the Apache Software Foundation (ASF) under one or more
   contributor license agreements.  See the NOTICE file distributed with
   this work for additional information regarding copyright ownership.
   The ASF licenses this file to You under the Apache License, Version 2.0
   (the "License"); you may not use this file except in compliance with
   the License.  You may obtain a copy of the License at

       http://www.apache.org/licenses/LICENSE-2.0

   Unless required by applicable law or agreed to in writing, software
   distributed under the License is distributed on an "AS IS" BASIS,
   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   See the License for the specific language governing permissions and
   limitations under the License.
*/
$(document).ready(function() {

    $(".click-title").mouseenter( function(    e){
        e.preventDefault();
        this.style.cursor="pointer";
    });
    $(".click-title").mousedown( function(event){
        event.preventDefault();
    });

    // Ugly code while this script is shared among several pages
    try{
        refreshHitsPerSecond(true);
    } catch(e){}
    try{
        refreshResponseTimeOverTime(true);
    } catch(e){}
    try{
        refreshResponseTimePercentiles();
    } catch(e){}
});


var responseTimePercentilesInfos = {
        data: {"result": {"minY": 12.0, "minX": 0.0, "maxY": 32920.0, "series": [{"data": [[0.0, 12.0], [0.1, 13.0], [0.2, 14.0], [0.3, 14.0], [0.4, 15.0], [0.5, 16.0], [0.6, 17.0], [0.7, 17.0], [0.8, 20.0], [0.9, 20.0], [1.0, 21.0], [1.1, 22.0], [1.2, 22.0], [1.3, 24.0], [1.4, 24.0], [1.5, 24.0], [1.6, 24.0], [1.7, 24.0], [1.8, 26.0], [1.9, 26.0], [2.0, 30.0], [2.1, 30.0], [2.2, 33.0], [2.3, 33.0], [2.4, 33.0], [2.5, 35.0], [2.6, 35.0], [2.7, 37.0], [2.8, 37.0], [2.9, 37.0], [3.0, 38.0], [3.1, 38.0], [3.2, 38.0], [3.3, 38.0], [3.4, 40.0], [3.5, 46.0], [3.6, 47.0], [3.7, 49.0], [3.8, 50.0], [3.9, 50.0], [4.0, 51.0], [4.1, 51.0], [4.2, 52.0], [4.3, 52.0], [4.4, 54.0], [4.5, 54.0], [4.6, 55.0], [4.7, 55.0], [4.8, 56.0], [4.9, 57.0], [5.0, 57.0], [5.1, 58.0], [5.2, 58.0], [5.3, 59.0], [5.4, 60.0], [5.5, 60.0], [5.6, 62.0], [5.7, 62.0], [5.8, 64.0], [5.9, 66.0], [6.0, 66.0], [6.1, 66.0], [6.2, 67.0], [6.3, 67.0], [6.4, 68.0], [6.5, 68.0], [6.6, 68.0], [6.7, 70.0], [6.8, 70.0], [6.9, 75.0], [7.0, 75.0], [7.1, 76.0], [7.2, 77.0], [7.3, 77.0], [7.4, 78.0], [7.5, 78.0], [7.6, 78.0], [7.7, 79.0], [7.8, 79.0], [7.9, 81.0], [8.0, 82.0], [8.1, 83.0], [8.2, 83.0], [8.3, 84.0], [8.4, 84.0], [8.5, 84.0], [8.6, 84.0], [8.7, 85.0], [8.8, 86.0], [8.9, 86.0], [9.0, 86.0], [9.1, 86.0], [9.2, 87.0], [9.3, 87.0], [9.4, 87.0], [9.5, 87.0], [9.6, 88.0], [9.7, 88.0], [9.8, 89.0], [9.9, 89.0], [10.0, 89.0], [10.1, 90.0], [10.2, 90.0], [10.3, 91.0], [10.4, 91.0], [10.5, 91.0], [10.6, 92.0], [10.7, 92.0], [10.8, 93.0], [10.9, 94.0], [11.0, 95.0], [11.1, 96.0], [11.2, 97.0], [11.3, 97.0], [11.4, 98.0], [11.5, 99.0], [11.6, 99.0], [11.7, 99.0], [11.8, 99.0], [11.9, 100.0], [12.0, 101.0], [12.1, 102.0], [12.2, 103.0], [12.3, 105.0], [12.4, 105.0], [12.5, 109.0], [12.6, 109.0], [12.7, 110.0], [12.8, 111.0], [12.9, 111.0], [13.0, 112.0], [13.1, 112.0], [13.2, 113.0], [13.3, 113.0], [13.4, 114.0], [13.5, 114.0], [13.6, 115.0], [13.7, 115.0], [13.8, 116.0], [13.9, 117.0], [14.0, 117.0], [14.1, 117.0], [14.2, 120.0], [14.3, 121.0], [14.4, 123.0], [14.5, 124.0], [14.6, 124.0], [14.7, 124.0], [14.8, 124.0], [14.9, 127.0], [15.0, 128.0], [15.1, 129.0], [15.2, 129.0], [15.3, 130.0], [15.4, 131.0], [15.5, 133.0], [15.6, 133.0], [15.7, 133.0], [15.8, 135.0], [15.9, 135.0], [16.0, 136.0], [16.1, 138.0], [16.2, 139.0], [16.3, 141.0], [16.4, 142.0], [16.5, 142.0], [16.6, 143.0], [16.7, 143.0], [16.8, 144.0], [16.9, 144.0], [17.0, 144.0], [17.1, 145.0], [17.2, 145.0], [17.3, 146.0], [17.4, 147.0], [17.5, 147.0], [17.6, 148.0], [17.7, 149.0], [17.8, 150.0], [17.9, 154.0], [18.0, 154.0], [18.1, 155.0], [18.2, 156.0], [18.3, 156.0], [18.4, 157.0], [18.5, 158.0], [18.6, 159.0], [18.7, 160.0], [18.8, 161.0], [18.9, 161.0], [19.0, 165.0], [19.1, 167.0], [19.2, 168.0], [19.3, 170.0], [19.4, 170.0], [19.5, 171.0], [19.6, 171.0], [19.7, 173.0], [19.8, 175.0], [19.9, 175.0], [20.0, 178.0], [20.1, 179.0], [20.2, 180.0], [20.3, 180.0], [20.4, 185.0], [20.5, 185.0], [20.6, 187.0], [20.7, 188.0], [20.8, 191.0], [20.9, 191.0], [21.0, 192.0], [21.1, 193.0], [21.2, 195.0], [21.3, 195.0], [21.4, 196.0], [21.5, 199.0], [21.6, 200.0], [21.7, 201.0], [21.8, 201.0], [21.9, 201.0], [22.0, 202.0], [22.1, 203.0], [22.2, 204.0], [22.3, 204.0], [22.4, 204.0], [22.5, 204.0], [22.6, 205.0], [22.7, 207.0], [22.8, 208.0], [22.9, 212.0], [23.0, 212.0], [23.1, 213.0], [23.2, 214.0], [23.3, 215.0], [23.4, 217.0], [23.5, 218.0], [23.6, 218.0], [23.7, 218.0], [23.8, 218.0], [23.9, 219.0], [24.0, 219.0], [24.1, 220.0], [24.2, 220.0], [24.3, 221.0], [24.4, 222.0], [24.5, 222.0], [24.6, 223.0], [24.7, 223.0], [24.8, 225.0], [24.9, 225.0], [25.0, 226.0], [25.1, 231.0], [25.2, 231.0], [25.3, 232.0], [25.4, 232.0], [25.5, 232.0], [25.6, 233.0], [25.7, 234.0], [25.8, 235.0], [25.9, 236.0], [26.0, 237.0], [26.1, 240.0], [26.2, 240.0], [26.3, 241.0], [26.4, 241.0], [26.5, 242.0], [26.6, 242.0], [26.7, 245.0], [26.8, 246.0], [26.9, 246.0], [27.0, 247.0], [27.1, 249.0], [27.2, 249.0], [27.3, 251.0], [27.4, 251.0], [27.5, 252.0], [27.6, 252.0], [27.7, 253.0], [27.8, 254.0], [27.9, 256.0], [28.0, 257.0], [28.1, 258.0], [28.2, 259.0], [28.3, 260.0], [28.4, 263.0], [28.5, 265.0], [28.6, 265.0], [28.7, 266.0], [28.8, 267.0], [28.9, 268.0], [29.0, 269.0], [29.1, 272.0], [29.2, 272.0], [29.3, 273.0], [29.4, 273.0], [29.5, 273.0], [29.6, 274.0], [29.7, 275.0], [29.8, 278.0], [29.9, 278.0], [30.0, 278.0], [30.1, 278.0], [30.2, 278.0], [30.3, 278.0], [30.4, 281.0], [30.5, 282.0], [30.6, 283.0], [30.7, 285.0], [30.8, 285.0], [30.9, 285.0], [31.0, 286.0], [31.1, 286.0], [31.2, 286.0], [31.3, 287.0], [31.4, 287.0], [31.5, 288.0], [31.6, 288.0], [31.7, 289.0], [31.8, 289.0], [31.9, 289.0], [32.0, 289.0], [32.1, 289.0], [32.2, 290.0], [32.3, 290.0], [32.4, 292.0], [32.5, 298.0], [32.6, 299.0], [32.7, 300.0], [32.8, 302.0], [32.9, 302.0], [33.0, 302.0], [33.1, 303.0], [33.2, 303.0], [33.3, 304.0], [33.4, 305.0], [33.5, 306.0], [33.6, 307.0], [33.7, 308.0], [33.8, 308.0], [33.9, 308.0], [34.0, 309.0], [34.1, 310.0], [34.2, 313.0], [34.3, 313.0], [34.4, 313.0], [34.5, 315.0], [34.6, 316.0], [34.7, 316.0], [34.8, 317.0], [34.9, 318.0], [35.0, 318.0], [35.1, 319.0], [35.2, 321.0], [35.3, 323.0], [35.4, 324.0], [35.5, 324.0], [35.6, 327.0], [35.7, 327.0], [35.8, 327.0], [35.9, 328.0], [36.0, 331.0], [36.1, 332.0], [36.2, 333.0], [36.3, 333.0], [36.4, 334.0], [36.5, 334.0], [36.6, 335.0], [36.7, 342.0], [36.8, 343.0], [36.9, 344.0], [37.0, 345.0], [37.1, 345.0], [37.2, 345.0], [37.3, 346.0], [37.4, 347.0], [37.5, 348.0], [37.6, 349.0], [37.7, 349.0], [37.8, 350.0], [37.9, 350.0], [38.0, 352.0], [38.1, 354.0], [38.2, 357.0], [38.3, 358.0], [38.4, 359.0], [38.5, 359.0], [38.6, 359.0], [38.7, 360.0], [38.8, 360.0], [38.9, 361.0], [39.0, 362.0], [39.1, 364.0], [39.2, 365.0], [39.3, 368.0], [39.4, 368.0], [39.5, 370.0], [39.6, 373.0], [39.7, 374.0], [39.8, 375.0], [39.9, 376.0], [40.0, 377.0], [40.1, 379.0], [40.2, 384.0], [40.3, 384.0], [40.4, 386.0], [40.5, 386.0], [40.6, 386.0], [40.7, 388.0], [40.8, 388.0], [40.9, 389.0], [41.0, 389.0], [41.1, 390.0], [41.2, 393.0], [41.3, 394.0], [41.4, 395.0], [41.5, 395.0], [41.6, 396.0], [41.7, 396.0], [41.8, 396.0], [41.9, 401.0], [42.0, 401.0], [42.1, 402.0], [42.2, 403.0], [42.3, 404.0], [42.4, 404.0], [42.5, 404.0], [42.6, 405.0], [42.7, 405.0], [42.8, 406.0], [42.9, 406.0], [43.0, 407.0], [43.1, 411.0], [43.2, 411.0], [43.3, 412.0], [43.4, 414.0], [43.5, 414.0], [43.6, 415.0], [43.7, 418.0], [43.8, 420.0], [43.9, 420.0], [44.0, 420.0], [44.1, 421.0], [44.2, 421.0], [44.3, 421.0], [44.4, 424.0], [44.5, 425.0], [44.6, 428.0], [44.7, 430.0], [44.8, 431.0], [44.9, 431.0], [45.0, 431.0], [45.1, 432.0], [45.2, 432.0], [45.3, 432.0], [45.4, 433.0], [45.5, 435.0], [45.6, 439.0], [45.7, 440.0], [45.8, 442.0], [45.9, 443.0], [46.0, 443.0], [46.1, 447.0], [46.2, 448.0], [46.3, 448.0], [46.4, 455.0], [46.5, 456.0], [46.6, 457.0], [46.7, 457.0], [46.8, 461.0], [46.9, 461.0], [47.0, 463.0], [47.1, 463.0], [47.2, 465.0], [47.3, 466.0], [47.4, 467.0], [47.5, 467.0], [47.6, 468.0], [47.7, 469.0], [47.8, 469.0], [47.9, 470.0], [48.0, 472.0], [48.1, 472.0], [48.2, 473.0], [48.3, 474.0], [48.4, 476.0], [48.5, 477.0], [48.6, 477.0], [48.7, 477.0], [48.8, 478.0], [48.9, 478.0], [49.0, 478.0], [49.1, 480.0], [49.2, 481.0], [49.3, 482.0], [49.4, 483.0], [49.5, 484.0], [49.6, 486.0], [49.7, 488.0], [49.8, 488.0], [49.9, 490.0], [50.0, 494.0], [50.1, 494.0], [50.2, 496.0], [50.3, 496.0], [50.4, 498.0], [50.5, 501.0], [50.6, 504.0], [50.7, 504.0], [50.8, 506.0], [50.9, 506.0], [51.0, 507.0], [51.1, 507.0], [51.2, 509.0], [51.3, 509.0], [51.4, 519.0], [51.5, 520.0], [51.6, 522.0], [51.7, 522.0], [51.8, 523.0], [51.9, 528.0], [52.0, 528.0], [52.1, 529.0], [52.2, 531.0], [52.3, 532.0], [52.4, 534.0], [52.5, 534.0], [52.6, 537.0], [52.7, 537.0], [52.8, 539.0], [52.9, 540.0], [53.0, 544.0], [53.1, 544.0], [53.2, 554.0], [53.3, 554.0], [53.4, 555.0], [53.5, 559.0], [53.6, 560.0], [53.7, 564.0], [53.8, 569.0], [53.9, 571.0], [54.0, 576.0], [54.1, 579.0], [54.2, 580.0], [54.3, 582.0], [54.4, 588.0], [54.5, 593.0], [54.6, 593.0], [54.7, 593.0], [54.8, 594.0], [54.9, 596.0], [55.0, 598.0], [55.1, 601.0], [55.2, 602.0], [55.3, 603.0], [55.4, 604.0], [55.5, 607.0], [55.6, 607.0], [55.7, 609.0], [55.8, 610.0], [55.9, 610.0], [56.0, 612.0], [56.1, 613.0], [56.2, 617.0], [56.3, 620.0], [56.4, 621.0], [56.5, 628.0], [56.6, 629.0], [56.7, 630.0], [56.8, 633.0], [56.9, 633.0], [57.0, 635.0], [57.1, 636.0], [57.2, 637.0], [57.3, 637.0], [57.4, 637.0], [57.5, 638.0], [57.6, 645.0], [57.7, 648.0], [57.8, 652.0], [57.9, 655.0], [58.0, 655.0], [58.1, 656.0], [58.2, 657.0], [58.3, 658.0], [58.4, 665.0], [58.5, 666.0], [58.6, 667.0], [58.7, 670.0], [58.8, 672.0], [58.9, 676.0], [59.0, 679.0], [59.1, 680.0], [59.2, 691.0], [59.3, 692.0], [59.4, 698.0], [59.5, 701.0], [59.6, 704.0], [59.7, 711.0], [59.8, 726.0], [59.9, 730.0], [60.0, 731.0], [60.1, 731.0], [60.2, 733.0], [60.3, 737.0], [60.4, 740.0], [60.5, 747.0], [60.6, 747.0], [60.7, 749.0], [60.8, 753.0], [60.9, 756.0], [61.0, 757.0], [61.1, 761.0], [61.2, 765.0], [61.3, 773.0], [61.4, 778.0], [61.5, 784.0], [61.6, 788.0], [61.7, 793.0], [61.8, 802.0], [61.9, 815.0], [62.0, 820.0], [62.1, 828.0], [62.2, 838.0], [62.3, 839.0], [62.4, 841.0], [62.5, 874.0], [62.6, 875.0], [62.7, 876.0], [62.8, 894.0], [62.9, 896.0], [63.0, 905.0], [63.1, 920.0], [63.2, 921.0], [63.3, 935.0], [63.4, 937.0], [63.5, 937.0], [63.6, 944.0], [63.7, 946.0], [63.8, 955.0], [63.9, 995.0], [64.0, 1014.0], [64.1, 1018.0], [64.2, 1049.0], [64.3, 1057.0], [64.4, 1057.0], [64.5, 1084.0], [64.6, 1093.0], [64.7, 1121.0], [64.8, 1137.0], [64.9, 1144.0], [65.0, 1147.0], [65.1, 1150.0], [65.2, 1157.0], [65.3, 1159.0], [65.4, 1165.0], [65.5, 1169.0], [65.6, 1169.0], [65.7, 1173.0], [65.8, 1175.0], [65.9, 1177.0], [66.0, 1186.0], [66.1, 1190.0], [66.2, 1191.0], [66.3, 1193.0], [66.4, 1199.0], [66.5, 1200.0], [66.6, 1207.0], [66.7, 1208.0], [66.8, 1209.0], [66.9, 1214.0], [67.0, 1215.0], [67.1, 1218.0], [67.2, 1219.0], [67.3, 1225.0], [67.4, 1226.0], [67.5, 1234.0], [67.6, 1235.0], [67.7, 1236.0], [67.8, 1242.0], [67.9, 1242.0], [68.0, 1246.0], [68.1, 1248.0], [68.2, 1249.0], [68.3, 1250.0], [68.4, 1252.0], [68.5, 1255.0], [68.6, 1261.0], [68.7, 1264.0], [68.8, 1266.0], [68.9, 1267.0], [69.0, 1274.0], [69.1, 1278.0], [69.2, 1281.0], [69.3, 1281.0], [69.4, 1285.0], [69.5, 1285.0], [69.6, 1285.0], [69.7, 1293.0], [69.8, 1295.0], [69.9, 1298.0], [70.0, 1299.0], [70.1, 1300.0], [70.2, 1302.0], [70.3, 1303.0], [70.4, 1304.0], [70.5, 1312.0], [70.6, 1314.0], [70.7, 1314.0], [70.8, 1315.0], [70.9, 1317.0], [71.0, 1328.0], [71.1, 1330.0], [71.2, 1339.0], [71.3, 1345.0], [71.4, 1349.0], [71.5, 1358.0], [71.6, 1359.0], [71.7, 1364.0], [71.8, 1370.0], [71.9, 1375.0], [72.0, 1379.0], [72.1, 1379.0], [72.2, 1386.0], [72.3, 1387.0], [72.4, 1391.0], [72.5, 1391.0], [72.6, 1392.0], [72.7, 1394.0], [72.8, 1397.0], [72.9, 1399.0], [73.0, 1400.0], [73.1, 1401.0], [73.2, 1403.0], [73.3, 1403.0], [73.4, 1404.0], [73.5, 1405.0], [73.6, 1405.0], [73.7, 1410.0], [73.8, 1410.0], [73.9, 1411.0], [74.0, 1414.0], [74.1, 1417.0], [74.2, 1419.0], [74.3, 1422.0], [74.4, 1424.0], [74.5, 1426.0], [74.6, 1433.0], [74.7, 1437.0], [74.8, 1437.0], [74.9, 1441.0], [75.0, 1441.0], [75.1, 1442.0], [75.2, 1444.0], [75.3, 1447.0], [75.4, 1450.0], [75.5, 1453.0], [75.6, 1456.0], [75.7, 1457.0], [75.8, 1459.0], [75.9, 1462.0], [76.0, 1464.0], [76.1, 1470.0], [76.2, 1470.0], [76.3, 1472.0], [76.4, 1475.0], [76.5, 1475.0], [76.6, 1477.0], [76.7, 1478.0], [76.8, 1481.0], [76.9, 1488.0], [77.0, 1488.0], [77.1, 1489.0], [77.2, 1490.0], [77.3, 1490.0], [77.4, 1492.0], [77.5, 1496.0], [77.6, 1502.0], [77.7, 1502.0], [77.8, 1503.0], [77.9, 1507.0], [78.0, 1510.0], [78.1, 1513.0], [78.2, 1521.0], [78.3, 1525.0], [78.4, 1530.0], [78.5, 1535.0], [78.6, 1543.0], [78.7, 1544.0], [78.8, 1558.0], [78.9, 1558.0], [79.0, 1558.0], [79.1, 1560.0], [79.2, 1573.0], [79.3, 1581.0], [79.4, 1587.0], [79.5, 1588.0], [79.6, 1591.0], [79.7, 1602.0], [79.8, 1604.0], [79.9, 1610.0], [80.0, 1613.0], [80.1, 1619.0], [80.2, 1624.0], [80.3, 1625.0], [80.4, 1625.0], [80.5, 1630.0], [80.6, 1630.0], [80.7, 1641.0], [80.8, 1643.0], [80.9, 1657.0], [81.0, 1658.0], [81.1, 1660.0], [81.2, 1673.0], [81.3, 1676.0], [81.4, 1684.0], [81.5, 1691.0], [81.6, 1700.0], [81.7, 1703.0], [81.8, 1708.0], [81.9, 1712.0], [82.0, 1736.0], [82.1, 1745.0], [82.2, 1775.0], [82.3, 1777.0], [82.4, 1782.0], [82.5, 1788.0], [82.6, 1801.0], [82.7, 1831.0], [82.8, 1836.0], [82.9, 1846.0], [83.0, 1865.0], [83.1, 1865.0], [83.2, 1869.0], [83.3, 1882.0], [83.4, 1897.0], [83.5, 1901.0], [83.6, 1927.0], [83.7, 1930.0], [83.8, 1930.0], [83.9, 1945.0], [84.0, 1971.0], [84.1, 1988.0], [84.2, 2061.0], [84.3, 2067.0], [84.4, 2077.0], [84.5, 2106.0], [84.6, 2126.0], [84.7, 2173.0], [84.8, 2357.0], [84.9, 2396.0], [85.0, 2489.0], [85.1, 2569.0], [85.2, 3227.0], [85.3, 3289.0], [85.4, 3298.0], [85.5, 3315.0], [85.6, 3318.0], [85.7, 3323.0], [85.8, 3326.0], [85.9, 3333.0], [86.0, 3339.0], [86.1, 3343.0], [86.2, 3366.0], [86.3, 3369.0], [86.4, 3379.0], [86.5, 3381.0], [86.6, 3410.0], [86.7, 3410.0], [86.8, 3413.0], [86.9, 3422.0], [87.0, 3427.0], [87.1, 3428.0], [87.2, 3431.0], [87.3, 3433.0], [87.4, 3435.0], [87.5, 3440.0], [87.6, 3441.0], [87.7, 3473.0], [87.8, 3478.0], [87.9, 3480.0], [88.0, 3480.0], [88.1, 3485.0], [88.2, 3489.0], [88.3, 3513.0], [88.4, 3514.0], [88.5, 3518.0], [88.6, 3522.0], [88.7, 3527.0], [88.8, 3536.0], [88.9, 3561.0], [89.0, 3569.0], [89.1, 3571.0], [89.2, 3571.0], [89.3, 3595.0], [89.4, 3604.0], [89.5, 3605.0], [89.6, 3646.0], [89.7, 3655.0], [89.8, 3656.0], [89.9, 3665.0], [90.0, 3666.0], [90.1, 3676.0], [90.2, 3676.0], [90.3, 3685.0], [90.4, 3690.0], [90.5, 3700.0], [90.6, 3714.0], [90.7, 3715.0], [90.8, 3715.0], [90.9, 3717.0], [91.0, 3719.0], [91.1, 3720.0], [91.2, 3724.0], [91.3, 3732.0], [91.4, 3773.0], [91.5, 3778.0], [91.6, 3800.0], [91.7, 3800.0], [91.8, 3802.0], [91.9, 3814.0], [92.0, 3856.0], [92.1, 3860.0], [92.2, 3861.0], [92.3, 3867.0], [92.4, 3901.0], [92.5, 3908.0], [92.6, 3908.0], [92.7, 3923.0], [92.8, 3932.0], [92.9, 3973.0], [93.0, 4021.0], [93.1, 4025.0], [93.2, 4061.0], [93.3, 4061.0], [93.4, 4079.0], [93.5, 4086.0], [93.6, 4226.0], [93.7, 4235.0], [93.8, 4324.0], [93.9, 4331.0], [94.0, 4421.0], [94.1, 4597.0], [94.2, 4810.0], [94.3, 5229.0], [94.4, 7432.0], [94.5, 7441.0], [94.6, 7457.0], [94.7, 7480.0], [94.8, 7485.0], [94.9, 7488.0], [95.0, 7535.0], [95.1, 7550.0], [95.2, 7551.0], [95.3, 7557.0], [95.4, 7557.0], [95.5, 7640.0], [95.6, 7651.0], [95.7, 7651.0], [95.8, 7657.0], [95.9, 7669.0], [96.0, 7670.0], [96.1, 7687.0], [96.2, 7705.0], [96.3, 7747.0], [96.4, 7765.0], [96.5, 7778.0], [96.6, 7795.0], [96.7, 7796.0], [96.8, 7815.0], [96.9, 7845.0], [97.0, 7938.0], [97.1, 8139.0], [97.2, 8338.0], [97.3, 8423.0], [97.4, 8512.0], [97.5, 8632.0], [97.6, 8751.0], [97.7, 8819.0], [97.8, 9647.0], [97.9, 15666.0], [98.0, 15832.0], [98.1, 15896.0], [98.2, 15972.0], [98.3, 15990.0], [98.4, 16017.0], [98.5, 16124.0], [98.6, 16142.0], [98.7, 16147.0], [98.8, 16238.0], [98.9, 16301.0], [99.0, 16316.0], [99.1, 16332.0], [99.2, 16392.0], [99.3, 16426.0], [99.4, 16486.0], [99.5, 16626.0], [99.6, 16705.0], [99.7, 16818.0], [99.8, 32366.0], [99.9, 32920.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
        getOptions: function() {
            return {
                series: {
                    points: { show: false }
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimePercentiles'
                },
                xaxis: {
                    tickDecimals: 1,
                    axisLabel: "Percentiles",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Percentile value in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : %x.2 percentile was %y ms"
                },
                selection: { mode: "xy" },
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimePercentiles"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimesPercentiles"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimesPercentiles"), dataset, prepareOverviewOptions(options));
        }
};

/**
 * @param elementId Id of element where we display message
 */
function setEmptyGraph(elementId) {
    $(function() {
        $(elementId).text("No graph series with filter="+seriesFilter);
    });
}

// Response times percentiles
function refreshResponseTimePercentiles() {
    var infos = responseTimePercentilesInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimePercentiles");
        return;
    }
    if (isGraph($("#flotResponseTimesPercentiles"))){
        infos.createGraph();
    } else {
        var choiceContainer = $("#choicesResponseTimePercentiles");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimesPercentiles", "#overviewResponseTimesPercentiles");
        $('#bodyResponseTimePercentiles .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var responseTimeDistributionInfos = {
        data: {"result": {"minY": 1.0, "minX": 0.0, "maxY": 119.0, "series": [{"data": [[0.0, 119.0], [600.0, 44.0], [700.0, 23.0], [800.0, 12.0], [900.0, 10.0], [1000.0, 7.0], [1100.0, 18.0], [1200.0, 36.0], [1300.0, 30.0], [1400.0, 46.0], [1500.0, 21.0], [1600.0, 19.0], [1700.0, 10.0], [1800.0, 9.0], [1900.0, 7.0], [2000.0, 3.0], [2100.0, 3.0], [2300.0, 2.0], [2400.0, 1.0], [2500.0, 1.0], [3300.0, 11.0], [3200.0, 3.0], [3400.0, 17.0], [3500.0, 11.0], [3700.0, 11.0], [3600.0, 11.0], [3800.0, 8.0], [3900.0, 6.0], [4000.0, 6.0], [4200.0, 2.0], [4300.0, 2.0], [4500.0, 1.0], [4400.0, 1.0], [4800.0, 1.0], [5200.0, 1.0], [7400.0, 6.0], [7600.0, 7.0], [7500.0, 5.0], [7700.0, 6.0], [7900.0, 1.0], [7800.0, 2.0], [8100.0, 1.0], [8400.0, 1.0], [8500.0, 1.0], [8700.0, 1.0], [8300.0, 1.0], [8600.0, 1.0], [8800.0, 1.0], [9600.0, 1.0], [15600.0, 1.0], [15800.0, 2.0], [16300.0, 4.0], [16100.0, 3.0], [15900.0, 2.0], [16000.0, 1.0], [16200.0, 1.0], [16700.0, 1.0], [16400.0, 2.0], [16800.0, 1.0], [16600.0, 1.0], [100.0, 96.0], [32300.0, 1.0], [32900.0, 1.0], [200.0, 111.0], [300.0, 92.0], [400.0, 86.0], [500.0, 46.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 32900.0, "title": "Response Time Distribution"}},
        getOptions: function() {
            var granularity = this.data.result.granularity;
            return {
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimeDistribution'
                },
                xaxis:{
                    axisLabel: "Response times in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of responses",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                bars : {
                    show: true,
                    barWidth: this.data.result.granularity
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: function(label, xval, yval, flotItem){
                        return yval + " responses for " + label + " were between " + xval + " and " + (xval + granularity) + " ms";
                    }
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimeDistribution"), prepareData(data.result.series, $("#choicesResponseTimeDistribution")), options);
        }

};

// Response time distribution
function refreshResponseTimeDistribution() {
    var infos = responseTimeDistributionInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimeDistribution");
        return;
    }
    if (isGraph($("#flotResponseTimeDistribution"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimeDistribution");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        $('#footerResponseTimeDistribution .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var syntheticResponseTimeDistributionInfos = {
        data: {"result": {"minY": 224.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 504.0, "series": [{"data": [[0.0, 504.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 272.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 224.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 2.0, "title": "Synthetic Response Times Distribution"}},
        getOptions: function() {
            return {
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendSyntheticResponseTimeDistribution'
                },
                xaxis:{
                    axisLabel: "Response times ranges",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                    tickLength:0,
                    min:-0.5,
                    max:3.5
                },
                yaxis: {
                    axisLabel: "Number of responses",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                bars : {
                    show: true,
                    align: "center",
                    barWidth: 0.25,
                    fill:.75
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: function(label, xval, yval, flotItem){
                        return yval + " " + label;
                    }
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var options = this.getOptions();
            prepareOptions(options, data);
            options.xaxis.ticks = data.result.ticks;
            $.plot($("#flotSyntheticResponseTimeDistribution"), prepareData(data.result.series, $("#choicesSyntheticResponseTimeDistribution")), options);
        }

};

// Response time distribution
function refreshSyntheticResponseTimeDistribution() {
    var infos = syntheticResponseTimeDistributionInfos;
    prepareSeries(infos.data, true);
    if (isGraph($("#flotSyntheticResponseTimeDistribution"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesSyntheticResponseTimeDistribution");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        $('#footerSyntheticResponseTimeDistribution .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var activeThreadsOverTimeInfos = {
        data: {"result": {"minY": 1.375, "minX": 1.71541782E12, "maxY": 37.35786290322583, "series": [{"data": [[1.71541782E12, 37.35786290322583], [1.71541788E12, 1.375]], "isOverall": false, "label": "Thread Group", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.71541788E12, "title": "Active Threads Over Time"}},
        getOptions: function() {
            return {
                series: {
                    stack: true,
                    lines: {
                        show: true,
                        fill: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of active threads",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 6,
                    show: true,
                    container: '#legendActiveThreadsOverTime'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                selection: {
                    mode: 'xy'
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : At %x there were %y active threads"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesActiveThreadsOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotActiveThreadsOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewActiveThreadsOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Active Threads Over Time
function refreshActiveThreadsOverTime(fixTimestamps) {
    var infos = activeThreadsOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 25200000);
    }
    if(isGraph($("#flotActiveThreadsOverTime"))) {
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesActiveThreadsOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotActiveThreadsOverTime", "#overviewActiveThreadsOverTime");
        $('#footerActiveThreadsOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var timeVsThreadsInfos = {
        data: {"result": {"minY": 225.42857142857144, "minX": 1.0, "maxY": 5585.75, "series": [{"data": [[2.0, 1057.0], [3.0, 662.3333333333334], [4.0, 641.0909090909091], [5.0, 939.75], [6.0, 656.0], [7.0, 532.0000000000001], [8.0, 1123.6666666666667], [9.0, 238.875], [10.0, 626.2500000000001], [11.0, 962.1666666666666], [12.0, 563.125], [13.0, 3975.136363636363], [14.0, 459.2], [15.0, 917.8], [16.0, 1294.3], [17.0, 904.2], [18.0, 225.42857142857144], [19.0, 714.1428571428571], [20.0, 3512.2499999999995], [21.0, 5585.75], [22.0, 298.0], [23.0, 304.0], [24.0, 724.2222222222222], [25.0, 1768.6857142857143], [26.0, 1347.5624999999998], [27.0, 646.5], [28.0, 1124.3076923076924], [29.0, 2119.5000000000005], [30.0, 4803.4], [31.0, 705.875], [32.0, 1163.6], [33.0, 2359.35], [34.0, 1902.5], [35.0, 1303.2727272727273], [36.0, 1279.0], [37.0, 679.5], [38.0, 1975.9999999999998], [39.0, 2021.530612244898], [40.0, 4245.625000000001], [41.0, 1121.1818181818182], [43.0, 3041.4], [42.0, 3899.368421052632], [44.0, 227.0], [45.0, 3524.9285714285716], [46.0, 1402.657142857143], [47.0, 1453.1034482758619], [48.0, 2416.25], [49.0, 1760.5833333333342], [50.0, 813.0406779661012], [1.0, 3080.833333333333]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[37.07000000000003, 1512.792999999998]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 50.0, "title": "Time VS Threads"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    axisLabel: "Number of active threads",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response times in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: { noColumns: 2,show: true, container: '#legendTimeVsThreads' },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s: At %x.2 active threads, Average response time was %y.2 ms"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesTimeVsThreads"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotTimesVsThreads"), dataset, options);
            // setup overview
            $.plot($("#overviewTimesVsThreads"), dataset, prepareOverviewOptions(options));
        }
};

// Time vs threads
function refreshTimeVsThreads(){
    var infos = timeVsThreadsInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyTimeVsThreads");
        return;
    }
    if(isGraph($("#flotTimesVsThreads"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTimeVsThreads");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTimesVsThreads", "#overviewTimesVsThreads");
        $('#footerTimeVsThreads .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var bytesThroughputOverTimeInfos = {
        data : {"result": {"minY": 15.6, "minX": 1.71541782E12, "maxY": 2430.4, "series": [{"data": [[1.71541782E12, 2430.4], [1.71541788E12, 19.6]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.71541782E12, 1934.4], [1.71541788E12, 15.6]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.71541788E12, "title": "Bytes Throughput Over Time"}},
        getOptions : function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity) ,
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Bytes / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendBytesThroughputOverTime'
                },
                selection: {
                    mode: "xy"
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y"
                }
            };
        },
        createGraph : function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesBytesThroughputOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotBytesThroughputOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewBytesThroughputOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Bytes throughput Over Time
function refreshBytesThroughputOverTime(fixTimestamps) {
    var infos = bytesThroughputOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 25200000);
    }
    if(isGraph($("#flotBytesThroughputOverTime"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesBytesThroughputOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotBytesThroughputOverTime", "#overviewBytesThroughputOverTime");
        $('#footerBytesThroughputOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var responseTimesOverTimeInfos = {
        data: {"result": {"minY": 1504.6955645161272, "minX": 1.71541782E12, "maxY": 2516.875, "series": [{"data": [[1.71541782E12, 1504.6955645161272], [1.71541788E12, 2516.875]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.71541788E12, "title": "Response Time Over Time"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average response time was %y ms"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Response Times Over Time
function refreshResponseTimeOverTime(fixTimestamps) {
    var infos = responseTimesOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimeOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 25200000);
    }
    if(isGraph($("#flotResponseTimesOverTime"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimesOverTime", "#overviewResponseTimesOverTime");
        $('#footerResponseTimesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var latenciesOverTimeInfos = {
        data: {"result": {"minY": 1504.537298387098, "minX": 1.71541782E12, "maxY": 2516.875, "series": [{"data": [[1.71541782E12, 1504.537298387098], [1.71541788E12, 2516.875]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.71541788E12, "title": "Latencies Over Time"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response latencies in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendLatenciesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average latency was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesLatenciesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotLatenciesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewLatenciesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Latencies Over Time
function refreshLatenciesOverTime(fixTimestamps) {
    var infos = latenciesOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyLatenciesOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 25200000);
    }
    if(isGraph($("#flotLatenciesOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesLatenciesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotLatenciesOverTime", "#overviewLatenciesOverTime");
        $('#footerLatenciesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var connectTimeOverTimeInfos = {
        data: {"result": {"minY": 0.6864919354838716, "minX": 1.71541782E12, "maxY": 0.75, "series": [{"data": [[1.71541782E12, 0.6864919354838716], [1.71541788E12, 0.75]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.71541788E12, "title": "Connect Time Over Time"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getConnectTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average Connect Time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendConnectTimeOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average connect time was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesConnectTimeOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotConnectTimeOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewConnectTimeOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Connect Time Over Time
function refreshConnectTimeOverTime(fixTimestamps) {
    var infos = connectTimeOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyConnectTimeOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 25200000);
    }
    if(isGraph($("#flotConnectTimeOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesConnectTimeOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotConnectTimeOverTime", "#overviewConnectTimeOverTime");
        $('#footerConnectTimeOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var responseTimePercentilesOverTimeInfos = {
        data: {"result": {"minY": 12.0, "minX": 1.71541782E12, "maxY": 32920.0, "series": [{"data": [[1.71541782E12, 32920.0], [1.71541788E12, 16626.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.71541782E12, 12.0], [1.71541788E12, 147.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.71541782E12, 3665.7], [1.71541788E12, 16626.0]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.71541782E12, 16302.05], [1.71541788E12, 16626.0]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.71541782E12, 494.0], [1.71541788E12, 465.0]], "isOverall": false, "label": "Median", "isController": false}, {"data": [[1.71541782E12, 7504.449999999995], [1.71541788E12, 16626.0]], "isOverall": false, "label": "95th percentile", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.71541788E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true,
                        fill: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Response Time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimePercentilesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Response time was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimePercentilesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimePercentilesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimePercentilesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Response Time Percentiles Over Time
function refreshResponseTimePercentilesOverTime(fixTimestamps) {
    var infos = responseTimePercentilesOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 25200000);
    }
    if(isGraph($("#flotResponseTimePercentilesOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesResponseTimePercentilesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimePercentilesOverTime", "#overviewResponseTimePercentilesOverTime");
        $('#footerResponseTimePercentilesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var responseTimeVsRequestInfos = {
    data: {"result": {"minY": 75.5, "minX": 1.0, "maxY": 16626.0, "series": [{"data": [[32.0, 345.0], [2.0, 507.0], [34.0, 341.0], [36.0, 267.0], [39.0, 232.0], [45.0, 225.0], [3.0, 386.0], [65.0, 148.0], [4.0, 591.5], [5.0, 820.0], [6.0, 915.5], [7.0, 538.0], [8.0, 751.5], [136.0, 75.5], [9.0, 1503.0], [10.0, 1130.0], [11.0, 788.0], [12.0, 582.0], [13.0, 698.0], [15.0, 1452.5], [16.0, 1023.0], [1.0, 16626.0], [17.0, 1063.0], [18.0, 680.5], [19.0, 1324.5], [20.0, 499.5], [22.0, 1585.0], [23.0, 580.0], [24.0, 491.0], [28.0, 706.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 136.0, "title": "Response Time Vs Request"}},
    getOptions: function() {
        return {
            series: {
                lines: {
                    show: false
                },
                points: {
                    show: true
                }
            },
            xaxis: {
                axisLabel: "Global number of requests per second",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            yaxis: {
                axisLabel: "Median Response Time in ms",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            legend: {
                noColumns: 2,
                show: true,
                container: '#legendResponseTimeVsRequest'
            },
            selection: {
                mode: 'xy'
            },
            grid: {
                hoverable: true // IMPORTANT! this is needed for tooltip to work
            },
            tooltip: true,
            tooltipOpts: {
                content: "%s : Median response time at %x req/s was %y ms"
            },
            colors: ["#9ACD32", "#FF6347"]
        };
    },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesResponseTimeVsRequest"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotResponseTimeVsRequest"), dataset, options);
        // setup overview
        $.plot($("#overviewResponseTimeVsRequest"), dataset, prepareOverviewOptions(options));

    }
};

// Response Time vs Request
function refreshResponseTimeVsRequest() {
    var infos = responseTimeVsRequestInfos;
    prepareSeries(infos.data);
    if (isGraph($("#flotResponseTimeVsRequest"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimeVsRequest");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimeVsRequest", "#overviewResponseTimeVsRequest");
        $('#footerResponseRimeVsRequest .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var latenciesVsRequestInfos = {
    data: {"result": {"minY": 75.5, "minX": 1.0, "maxY": 16626.0, "series": [{"data": [[32.0, 345.0], [2.0, 507.0], [34.0, 340.5], [36.0, 267.0], [39.0, 232.0], [45.0, 225.0], [3.0, 386.0], [65.0, 148.0], [4.0, 591.5], [5.0, 820.0], [6.0, 915.0], [7.0, 537.5], [8.0, 751.0], [136.0, 75.5], [9.0, 1503.0], [10.0, 1130.0], [11.0, 788.0], [12.0, 582.0], [13.0, 698.0], [15.0, 1452.5], [16.0, 1023.0], [1.0, 16626.0], [17.0, 1063.0], [18.0, 680.5], [19.0, 1324.0], [20.0, 499.5], [22.0, 1585.0], [23.0, 580.0], [24.0, 491.0], [28.0, 706.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 136.0, "title": "Latencies Vs Request"}},
    getOptions: function() {
        return{
            series: {
                lines: {
                    show: false
                },
                points: {
                    show: true
                }
            },
            xaxis: {
                axisLabel: "Global number of requests per second",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            yaxis: {
                axisLabel: "Median Latency in ms",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            legend: { noColumns: 2,show: true, container: '#legendLatencyVsRequest' },
            selection: {
                mode: 'xy'
            },
            grid: {
                hoverable: true // IMPORTANT! this is needed for tooltip to work
            },
            tooltip: true,
            tooltipOpts: {
                content: "%s : Median Latency time at %x req/s was %y ms"
            },
            colors: ["#9ACD32", "#FF6347"]
        };
    },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesLatencyVsRequest"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotLatenciesVsRequest"), dataset, options);
        // setup overview
        $.plot($("#overviewLatenciesVsRequest"), dataset, prepareOverviewOptions(options));
    }
};

// Latencies vs Request
function refreshLatenciesVsRequest() {
        var infos = latenciesVsRequestInfos;
        prepareSeries(infos.data);
        if(isGraph($("#flotLatenciesVsRequest"))){
            infos.createGraph();
        }else{
            var choiceContainer = $("#choicesLatencyVsRequest");
            createLegend(choiceContainer, infos);
            infos.createGraph();
            setGraphZoomable("#flotLatenciesVsRequest", "#overviewLatenciesVsRequest");
            $('#footerLatenciesVsRequest .legendColorBox > div').each(function(i){
                $(this).clone().prependTo(choiceContainer.find("li").eq(i));
            });
        }
};

var hitsPerSecondInfos = {
        data: {"result": {"minY": 0.08333333333333333, "minX": 1.71541782E12, "maxY": 16.583333333333332, "series": [{"data": [[1.71541782E12, 16.583333333333332], [1.71541788E12, 0.08333333333333333]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.71541788E12, "title": "Hits Per Second"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of hits / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendHitsPerSecond"
                },
                selection: {
                    mode : 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y.2 hits/sec"
                }
            };
        },
        createGraph: function createGraph() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesHitsPerSecond"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotHitsPerSecond"), dataset, options);
            // setup overview
            $.plot($("#overviewHitsPerSecond"), dataset, prepareOverviewOptions(options));
        }
};

// Hits per second
function refreshHitsPerSecond(fixTimestamps) {
    var infos = hitsPerSecondInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 25200000);
    }
    if (isGraph($("#flotHitsPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesHitsPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotHitsPerSecond", "#overviewHitsPerSecond");
        $('#footerHitsPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var codesPerSecondInfos = {
        data: {"result": {"minY": 0.13333333333333333, "minX": 1.71541782E12, "maxY": 16.533333333333335, "series": [{"data": [[1.71541782E12, 16.533333333333335], [1.71541788E12, 0.13333333333333333]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.71541788E12, "title": "Codes Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of responses / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendCodesPerSecond"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "Number of Response Codes %s at %x was %y.2 responses / sec"
                }
            };
        },
    createGraph: function() {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesCodesPerSecond"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotCodesPerSecond"), dataset, options);
        // setup overview
        $.plot($("#overviewCodesPerSecond"), dataset, prepareOverviewOptions(options));
    }
};

// Codes per second
function refreshCodesPerSecond(fixTimestamps) {
    var infos = codesPerSecondInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 25200000);
    }
    if(isGraph($("#flotCodesPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesCodesPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotCodesPerSecond", "#overviewCodesPerSecond");
        $('#footerCodesPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var transactionsPerSecondInfos = {
        data: {"result": {"minY": 0.13333333333333333, "minX": 1.71541782E12, "maxY": 16.533333333333335, "series": [{"data": [[1.71541782E12, 16.533333333333335], [1.71541788E12, 0.13333333333333333]], "isOverall": false, "label": "HTTP Request-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.71541788E12, "title": "Transactions Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of transactions / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendTransactionsPerSecond"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y transactions / sec"
                }
            };
        },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesTransactionsPerSecond"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotTransactionsPerSecond"), dataset, options);
        // setup overview
        $.plot($("#overviewTransactionsPerSecond"), dataset, prepareOverviewOptions(options));
    }
};

// Transactions per second
function refreshTransactionsPerSecond(fixTimestamps) {
    var infos = transactionsPerSecondInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyTransactionsPerSecond");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 25200000);
    }
    if(isGraph($("#flotTransactionsPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTransactionsPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTransactionsPerSecond", "#overviewTransactionsPerSecond");
        $('#footerTransactionsPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var totalTPSInfos = {
        data: {"result": {"minY": 0.13333333333333333, "minX": 1.71541782E12, "maxY": 16.533333333333335, "series": [{"data": [[1.71541782E12, 16.533333333333335], [1.71541788E12, 0.13333333333333333]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.71541788E12, "title": "Total Transactions Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of transactions / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendTotalTPS"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y transactions / sec"
                },
                colors: ["#9ACD32", "#FF6347"]
            };
        },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesTotalTPS"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotTotalTPS"), dataset, options);
        // setup overview
        $.plot($("#overviewTotalTPS"), dataset, prepareOverviewOptions(options));
    }
};

// Total Transactions per second
function refreshTotalTPS(fixTimestamps) {
    var infos = totalTPSInfos;
    // We want to ignore seriesFilter
    prepareSeries(infos.data, false, true);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 25200000);
    }
    if(isGraph($("#flotTotalTPS"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTotalTPS");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTotalTPS", "#overviewTotalTPS");
        $('#footerTotalTPS .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

// Collapse the graph matching the specified DOM element depending the collapsed
// status
function collapse(elem, collapsed){
    if(collapsed){
        $(elem).parent().find(".fa-chevron-up").removeClass("fa-chevron-up").addClass("fa-chevron-down");
    } else {
        $(elem).parent().find(".fa-chevron-down").removeClass("fa-chevron-down").addClass("fa-chevron-up");
        if (elem.id == "bodyBytesThroughputOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshBytesThroughputOverTime(true);
            }
            document.location.href="#bytesThroughputOverTime";
        } else if (elem.id == "bodyLatenciesOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshLatenciesOverTime(true);
            }
            document.location.href="#latenciesOverTime";
        } else if (elem.id == "bodyCustomGraph") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshCustomGraph(true);
            }
            document.location.href="#responseCustomGraph";
        } else if (elem.id == "bodyConnectTimeOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshConnectTimeOverTime(true);
            }
            document.location.href="#connectTimeOverTime";
        } else if (elem.id == "bodyResponseTimePercentilesOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimePercentilesOverTime(true);
            }
            document.location.href="#responseTimePercentilesOverTime";
        } else if (elem.id == "bodyResponseTimeDistribution") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimeDistribution();
            }
            document.location.href="#responseTimeDistribution" ;
        } else if (elem.id == "bodySyntheticResponseTimeDistribution") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshSyntheticResponseTimeDistribution();
            }
            document.location.href="#syntheticResponseTimeDistribution" ;
        } else if (elem.id == "bodyActiveThreadsOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshActiveThreadsOverTime(true);
            }
            document.location.href="#activeThreadsOverTime";
        } else if (elem.id == "bodyTimeVsThreads") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTimeVsThreads();
            }
            document.location.href="#timeVsThreads" ;
        } else if (elem.id == "bodyCodesPerSecond") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshCodesPerSecond(true);
            }
            document.location.href="#codesPerSecond";
        } else if (elem.id == "bodyTransactionsPerSecond") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTransactionsPerSecond(true);
            }
            document.location.href="#transactionsPerSecond";
        } else if (elem.id == "bodyTotalTPS") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTotalTPS(true);
            }
            document.location.href="#totalTPS";
        } else if (elem.id == "bodyResponseTimeVsRequest") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimeVsRequest();
            }
            document.location.href="#responseTimeVsRequest";
        } else if (elem.id == "bodyLatenciesVsRequest") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshLatenciesVsRequest();
            }
            document.location.href="#latencyVsRequest";
        }
    }
}

/*
 * Activates or deactivates all series of the specified graph (represented by id parameter)
 * depending on checked argument.
 */
function toggleAll(id, checked){
    var placeholder = document.getElementById(id);

    var cases = $(placeholder).find(':checkbox');
    cases.prop('checked', checked);
    $(cases).parent().children().children().toggleClass("legend-disabled", !checked);

    var choiceContainer;
    if ( id == "choicesBytesThroughputOverTime"){
        choiceContainer = $("#choicesBytesThroughputOverTime");
        refreshBytesThroughputOverTime(false);
    } else if(id == "choicesResponseTimesOverTime"){
        choiceContainer = $("#choicesResponseTimesOverTime");
        refreshResponseTimeOverTime(false);
    }else if(id == "choicesResponseCustomGraph"){
        choiceContainer = $("#choicesResponseCustomGraph");
        refreshCustomGraph(false);
    } else if ( id == "choicesLatenciesOverTime"){
        choiceContainer = $("#choicesLatenciesOverTime");
        refreshLatenciesOverTime(false);
    } else if ( id == "choicesConnectTimeOverTime"){
        choiceContainer = $("#choicesConnectTimeOverTime");
        refreshConnectTimeOverTime(false);
    } else if ( id == "choicesResponseTimePercentilesOverTime"){
        choiceContainer = $("#choicesResponseTimePercentilesOverTime");
        refreshResponseTimePercentilesOverTime(false);
    } else if ( id == "choicesResponseTimePercentiles"){
        choiceContainer = $("#choicesResponseTimePercentiles");
        refreshResponseTimePercentiles();
    } else if(id == "choicesActiveThreadsOverTime"){
        choiceContainer = $("#choicesActiveThreadsOverTime");
        refreshActiveThreadsOverTime(false);
    } else if ( id == "choicesTimeVsThreads"){
        choiceContainer = $("#choicesTimeVsThreads");
        refreshTimeVsThreads();
    } else if ( id == "choicesSyntheticResponseTimeDistribution"){
        choiceContainer = $("#choicesSyntheticResponseTimeDistribution");
        refreshSyntheticResponseTimeDistribution();
    } else if ( id == "choicesResponseTimeDistribution"){
        choiceContainer = $("#choicesResponseTimeDistribution");
        refreshResponseTimeDistribution();
    } else if ( id == "choicesHitsPerSecond"){
        choiceContainer = $("#choicesHitsPerSecond");
        refreshHitsPerSecond(false);
    } else if(id == "choicesCodesPerSecond"){
        choiceContainer = $("#choicesCodesPerSecond");
        refreshCodesPerSecond(false);
    } else if ( id == "choicesTransactionsPerSecond"){
        choiceContainer = $("#choicesTransactionsPerSecond");
        refreshTransactionsPerSecond(false);
    } else if ( id == "choicesTotalTPS"){
        choiceContainer = $("#choicesTotalTPS");
        refreshTotalTPS(false);
    } else if ( id == "choicesResponseTimeVsRequest"){
        choiceContainer = $("#choicesResponseTimeVsRequest");
        refreshResponseTimeVsRequest();
    } else if ( id == "choicesLatencyVsRequest"){
        choiceContainer = $("#choicesLatencyVsRequest");
        refreshLatenciesVsRequest();
    }
    var color = checked ? "black" : "#818181";
    if(choiceContainer != null) {
        choiceContainer.find("label").each(function(){
            this.style.color = color;
        });
    }
}

