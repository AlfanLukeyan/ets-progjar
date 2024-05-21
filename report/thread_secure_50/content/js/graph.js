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
        data: {"result": {"minY": 1.0, "minX": 0.0, "maxY": 75002.0, "series": [{"data": [[0.0, 1.0], [0.1, 1.0], [0.2, 1.0], [0.3, 2.0], [0.4, 5.0], [0.5, 6.0], [0.6, 6.0], [0.7, 6.0], [0.8, 7.0], [0.9, 7.0], [1.0, 7.0], [1.1, 7.0], [1.2, 7.0], [1.3, 7.0], [1.4, 8.0], [1.5, 8.0], [1.6, 8.0], [1.7, 8.0], [1.8, 8.0], [1.9, 8.0], [2.0, 8.0], [2.1, 9.0], [2.2, 9.0], [2.3, 9.0], [2.4, 9.0], [2.5, 9.0], [2.6, 9.0], [2.7, 10.0], [2.8, 10.0], [2.9, 10.0], [3.0, 10.0], [3.1, 10.0], [3.2, 10.0], [3.3, 10.0], [3.4, 10.0], [3.5, 10.0], [3.6, 10.0], [3.7, 10.0], [3.8, 10.0], [3.9, 11.0], [4.0, 11.0], [4.1, 11.0], [4.2, 11.0], [4.3, 11.0], [4.4, 11.0], [4.5, 11.0], [4.6, 11.0], [4.7, 11.0], [4.8, 11.0], [4.9, 11.0], [5.0, 11.0], [5.1, 11.0], [5.2, 11.0], [5.3, 11.0], [5.4, 12.0], [5.5, 12.0], [5.6, 12.0], [5.7, 12.0], [5.8, 12.0], [5.9, 12.0], [6.0, 12.0], [6.1, 12.0], [6.2, 13.0], [6.3, 13.0], [6.4, 13.0], [6.5, 13.0], [6.6, 13.0], [6.7, 14.0], [6.8, 14.0], [6.9, 14.0], [7.0, 14.0], [7.1, 14.0], [7.2, 15.0], [7.3, 15.0], [7.4, 15.0], [7.5, 15.0], [7.6, 15.0], [7.7, 15.0], [7.8, 15.0], [7.9, 15.0], [8.0, 15.0], [8.1, 16.0], [8.2, 16.0], [8.3, 16.0], [8.4, 16.0], [8.5, 17.0], [8.6, 17.0], [8.7, 17.0], [8.8, 17.0], [8.9, 17.0], [9.0, 17.0], [9.1, 17.0], [9.2, 17.0], [9.3, 18.0], [9.4, 18.0], [9.5, 18.0], [9.6, 18.0], [9.7, 18.0], [9.8, 18.0], [9.9, 18.0], [10.0, 18.0], [10.1, 18.0], [10.2, 18.0], [10.3, 18.0], [10.4, 19.0], [10.5, 19.0], [10.6, 19.0], [10.7, 19.0], [10.8, 20.0], [10.9, 20.0], [11.0, 20.0], [11.1, 20.0], [11.2, 20.0], [11.3, 20.0], [11.4, 21.0], [11.5, 21.0], [11.6, 21.0], [11.7, 21.0], [11.8, 21.0], [11.9, 21.0], [12.0, 21.0], [12.1, 21.0], [12.2, 21.0], [12.3, 22.0], [12.4, 22.0], [12.5, 22.0], [12.6, 22.0], [12.7, 22.0], [12.8, 23.0], [12.9, 23.0], [13.0, 23.0], [13.1, 23.0], [13.2, 23.0], [13.3, 24.0], [13.4, 24.0], [13.5, 24.0], [13.6, 24.0], [13.7, 25.0], [13.8, 25.0], [13.9, 25.0], [14.0, 25.0], [14.1, 25.0], [14.2, 26.0], [14.3, 26.0], [14.4, 26.0], [14.5, 27.0], [14.6, 27.0], [14.7, 27.0], [14.8, 27.0], [14.9, 27.0], [15.0, 27.0], [15.1, 27.0], [15.2, 28.0], [15.3, 28.0], [15.4, 28.0], [15.5, 28.0], [15.6, 29.0], [15.7, 29.0], [15.8, 30.0], [15.9, 30.0], [16.0, 31.0], [16.1, 31.0], [16.2, 31.0], [16.3, 31.0], [16.4, 31.0], [16.5, 31.0], [16.6, 32.0], [16.7, 32.0], [16.8, 32.0], [16.9, 32.0], [17.0, 33.0], [17.1, 33.0], [17.2, 33.0], [17.3, 34.0], [17.4, 34.0], [17.5, 34.0], [17.6, 35.0], [17.7, 35.0], [17.8, 35.0], [17.9, 35.0], [18.0, 36.0], [18.1, 36.0], [18.2, 36.0], [18.3, 37.0], [18.4, 37.0], [18.5, 38.0], [18.6, 38.0], [18.7, 38.0], [18.8, 38.0], [18.9, 38.0], [19.0, 38.0], [19.1, 39.0], [19.2, 39.0], [19.3, 39.0], [19.4, 39.0], [19.5, 40.0], [19.6, 41.0], [19.7, 41.0], [19.8, 42.0], [19.9, 42.0], [20.0, 43.0], [20.1, 43.0], [20.2, 43.0], [20.3, 43.0], [20.4, 43.0], [20.5, 44.0], [20.6, 45.0], [20.7, 45.0], [20.8, 46.0], [20.9, 47.0], [21.0, 47.0], [21.1, 48.0], [21.2, 48.0], [21.3, 48.0], [21.4, 49.0], [21.5, 50.0], [21.6, 50.0], [21.7, 50.0], [21.8, 50.0], [21.9, 51.0], [22.0, 52.0], [22.1, 52.0], [22.2, 52.0], [22.3, 53.0], [22.4, 54.0], [22.5, 54.0], [22.6, 54.0], [22.7, 55.0], [22.8, 56.0], [22.9, 56.0], [23.0, 57.0], [23.1, 57.0], [23.2, 57.0], [23.3, 58.0], [23.4, 58.0], [23.5, 58.0], [23.6, 58.0], [23.7, 59.0], [23.8, 60.0], [23.9, 60.0], [24.0, 61.0], [24.1, 61.0], [24.2, 61.0], [24.3, 62.0], [24.4, 63.0], [24.5, 63.0], [24.6, 64.0], [24.7, 64.0], [24.8, 66.0], [24.9, 66.0], [25.0, 66.0], [25.1, 66.0], [25.2, 66.0], [25.3, 67.0], [25.4, 67.0], [25.5, 67.0], [25.6, 67.0], [25.7, 67.0], [25.8, 68.0], [25.9, 69.0], [26.0, 69.0], [26.1, 70.0], [26.2, 70.0], [26.3, 70.0], [26.4, 71.0], [26.5, 71.0], [26.6, 72.0], [26.7, 73.0], [26.8, 73.0], [26.9, 73.0], [27.0, 74.0], [27.1, 74.0], [27.2, 74.0], [27.3, 74.0], [27.4, 75.0], [27.5, 76.0], [27.6, 76.0], [27.7, 76.0], [27.8, 77.0], [27.9, 77.0], [28.0, 77.0], [28.1, 77.0], [28.2, 77.0], [28.3, 77.0], [28.4, 77.0], [28.5, 78.0], [28.6, 78.0], [28.7, 78.0], [28.8, 79.0], [28.9, 80.0], [29.0, 80.0], [29.1, 81.0], [29.2, 81.0], [29.3, 82.0], [29.4, 82.0], [29.5, 83.0], [29.6, 83.0], [29.7, 83.0], [29.8, 84.0], [29.9, 86.0], [30.0, 86.0], [30.1, 86.0], [30.2, 86.0], [30.3, 86.0], [30.4, 87.0], [30.5, 87.0], [30.6, 88.0], [30.7, 89.0], [30.8, 89.0], [30.9, 90.0], [31.0, 93.0], [31.1, 94.0], [31.2, 94.0], [31.3, 95.0], [31.4, 95.0], [31.5, 96.0], [31.6, 97.0], [31.7, 98.0], [31.8, 98.0], [31.9, 99.0], [32.0, 101.0], [32.1, 101.0], [32.2, 103.0], [32.3, 103.0], [32.4, 104.0], [32.5, 104.0], [32.6, 105.0], [32.7, 106.0], [32.8, 108.0], [32.9, 108.0], [33.0, 108.0], [33.1, 108.0], [33.2, 111.0], [33.3, 111.0], [33.4, 112.0], [33.5, 112.0], [33.6, 113.0], [33.7, 113.0], [33.8, 114.0], [33.9, 116.0], [34.0, 117.0], [34.1, 118.0], [34.2, 120.0], [34.3, 120.0], [34.4, 120.0], [34.5, 121.0], [34.6, 121.0], [34.7, 122.0], [34.8, 122.0], [34.9, 123.0], [35.0, 127.0], [35.1, 128.0], [35.2, 129.0], [35.3, 129.0], [35.4, 130.0], [35.5, 130.0], [35.6, 131.0], [35.7, 135.0], [35.8, 135.0], [35.9, 135.0], [36.0, 138.0], [36.1, 138.0], [36.2, 138.0], [36.3, 138.0], [36.4, 139.0], [36.5, 140.0], [36.6, 140.0], [36.7, 140.0], [36.8, 141.0], [36.9, 142.0], [37.0, 143.0], [37.1, 143.0], [37.2, 144.0], [37.3, 146.0], [37.4, 147.0], [37.5, 149.0], [37.6, 150.0], [37.7, 152.0], [37.8, 153.0], [37.9, 154.0], [38.0, 155.0], [38.1, 155.0], [38.2, 156.0], [38.3, 156.0], [38.4, 157.0], [38.5, 159.0], [38.6, 159.0], [38.7, 164.0], [38.8, 166.0], [38.9, 170.0], [39.0, 171.0], [39.1, 172.0], [39.2, 172.0], [39.3, 174.0], [39.4, 175.0], [39.5, 176.0], [39.6, 177.0], [39.7, 177.0], [39.8, 181.0], [39.9, 181.0], [40.0, 183.0], [40.1, 183.0], [40.2, 184.0], [40.3, 184.0], [40.4, 185.0], [40.5, 185.0], [40.6, 188.0], [40.7, 188.0], [40.8, 189.0], [40.9, 193.0], [41.0, 194.0], [41.1, 195.0], [41.2, 195.0], [41.3, 197.0], [41.4, 198.0], [41.5, 206.0], [41.6, 207.0], [41.7, 210.0], [41.8, 212.0], [41.9, 218.0], [42.0, 223.0], [42.1, 226.0], [42.2, 234.0], [42.3, 235.0], [42.4, 241.0], [42.5, 242.0], [42.6, 243.0], [42.7, 244.0], [42.8, 245.0], [42.9, 251.0], [43.0, 254.0], [43.1, 256.0], [43.2, 260.0], [43.3, 261.0], [43.4, 265.0], [43.5, 275.0], [43.6, 276.0], [43.7, 280.0], [43.8, 282.0], [43.9, 283.0], [44.0, 287.0], [44.1, 288.0], [44.2, 296.0], [44.3, 297.0], [44.4, 298.0], [44.5, 300.0], [44.6, 303.0], [44.7, 309.0], [44.8, 312.0], [44.9, 313.0], [45.0, 316.0], [45.1, 320.0], [45.2, 335.0], [45.3, 350.0], [45.4, 353.0], [45.5, 363.0], [45.6, 370.0], [45.7, 382.0], [45.8, 389.0], [45.9, 401.0], [46.0, 418.0], [46.1, 439.0], [46.2, 478.0], [46.3, 497.0], [46.4, 502.0], [46.5, 539.0], [46.6, 542.0], [46.7, 545.0], [46.8, 604.0], [46.9, 646.0], [47.0, 671.0], [47.1, 671.0], [47.2, 709.0], [47.3, 714.0], [47.4, 735.0], [47.5, 763.0], [47.6, 766.0], [47.7, 767.0], [47.8, 782.0], [47.9, 794.0], [48.0, 802.0], [48.1, 812.0], [48.2, 822.0], [48.3, 841.0], [48.4, 875.0], [48.5, 900.0], [48.6, 928.0], [48.7, 989.0], [48.8, 1000.0], [48.9, 1001.0], [49.0, 1001.0], [49.1, 1001.0], [49.2, 1001.0], [49.3, 1001.0], [49.4, 1001.0], [49.5, 1001.0], [49.6, 1001.0], [49.7, 1002.0], [49.8, 1002.0], [49.9, 1002.0], [50.0, 1002.0], [50.1, 1002.0], [50.2, 1014.0], [50.3, 1018.0], [50.4, 1022.0], [50.5, 1022.0], [50.6, 1024.0], [50.7, 1025.0], [50.8, 1025.0], [50.9, 1026.0], [51.0, 1028.0], [51.1, 1028.0], [51.2, 1029.0], [51.3, 1029.0], [51.4, 1031.0], [51.5, 1032.0], [51.6, 1033.0], [51.7, 1036.0], [51.8, 1037.0], [51.9, 1037.0], [52.0, 1037.0], [52.1, 1038.0], [52.2, 1038.0], [52.3, 1038.0], [52.4, 1038.0], [52.5, 1040.0], [52.6, 1040.0], [52.7, 1040.0], [52.8, 1041.0], [52.9, 1041.0], [53.0, 1041.0], [53.1, 1042.0], [53.2, 1042.0], [53.3, 1042.0], [53.4, 1042.0], [53.5, 1042.0], [53.6, 1042.0], [53.7, 1044.0], [53.8, 1046.0], [53.9, 1047.0], [54.0, 1048.0], [54.1, 1048.0], [54.2, 1049.0], [54.3, 1050.0], [54.4, 1050.0], [54.5, 1051.0], [54.6, 1052.0], [54.7, 1052.0], [54.8, 1052.0], [54.9, 1052.0], [55.0, 1052.0], [55.1, 1053.0], [55.2, 1053.0], [55.3, 1056.0], [55.4, 1056.0], [55.5, 1056.0], [55.6, 1056.0], [55.7, 1060.0], [55.8, 1061.0], [55.9, 1061.0], [56.0, 1063.0], [56.1, 1063.0], [56.2, 1064.0], [56.3, 1065.0], [56.4, 1066.0], [56.5, 1068.0], [56.6, 1070.0], [56.7, 1072.0], [56.8, 1072.0], [56.9, 1076.0], [57.0, 1079.0], [57.1, 1079.0], [57.2, 1080.0], [57.3, 1080.0], [57.4, 1086.0], [57.5, 1088.0], [57.6, 1088.0], [57.7, 1088.0], [57.8, 1089.0], [57.9, 1089.0], [58.0, 1091.0], [58.1, 1096.0], [58.2, 1099.0], [58.3, 1099.0], [58.4, 1105.0], [58.5, 1107.0], [58.6, 1110.0], [58.7, 1113.0], [58.8, 1114.0], [58.9, 1121.0], [59.0, 1124.0], [59.1, 1125.0], [59.2, 1125.0], [59.3, 1129.0], [59.4, 1133.0], [59.5, 1143.0], [59.6, 1144.0], [59.7, 1146.0], [59.8, 1148.0], [59.9, 1151.0], [60.0, 1152.0], [60.1, 1154.0], [60.2, 1159.0], [60.3, 1170.0], [60.4, 1194.0], [60.5, 1196.0], [60.6, 1197.0], [60.7, 1199.0], [60.8, 1210.0], [60.9, 1218.0], [61.0, 1220.0], [61.1, 1222.0], [61.2, 1226.0], [61.3, 1233.0], [61.4, 1237.0], [61.5, 1238.0], [61.6, 1240.0], [61.7, 1249.0], [61.8, 1250.0], [61.9, 1254.0], [62.0, 1256.0], [62.1, 1257.0], [62.2, 1265.0], [62.3, 1277.0], [62.4, 1280.0], [62.5, 1284.0], [62.6, 1287.0], [62.7, 1291.0], [62.8, 1328.0], [62.9, 1330.0], [63.0, 1334.0], [63.1, 1350.0], [63.2, 1354.0], [63.3, 1368.0], [63.4, 1379.0], [63.5, 1383.0], [63.6, 1390.0], [63.7, 1396.0], [63.8, 1396.0], [63.9, 1431.0], [64.0, 1431.0], [64.1, 1432.0], [64.2, 1439.0], [64.3, 1442.0], [64.4, 1460.0], [64.5, 1480.0], [64.6, 1487.0], [64.7, 1517.0], [64.8, 1530.0], [64.9, 1539.0], [65.0, 1562.0], [65.1, 1592.0], [65.2, 1604.0], [65.3, 1613.0], [65.4, 1622.0], [65.5, 1663.0], [65.6, 1666.0], [65.7, 1668.0], [65.8, 1716.0], [65.9, 1744.0], [66.0, 1751.0], [66.1, 1797.0], [66.2, 1799.0], [66.3, 1801.0], [66.4, 1827.0], [66.5, 1838.0], [66.6, 1841.0], [66.7, 1851.0], [66.8, 1922.0], [66.9, 1979.0], [67.0, 2000.0], [67.1, 2000.0], [67.2, 2000.0], [67.3, 2001.0], [67.4, 2003.0], [67.5, 2003.0], [67.6, 2014.0], [67.7, 2017.0], [67.8, 2021.0], [67.9, 2023.0], [68.0, 2026.0], [68.1, 2026.0], [68.2, 2034.0], [68.3, 2035.0], [68.4, 2038.0], [68.5, 2041.0], [68.6, 2042.0], [68.7, 2044.0], [68.8, 2048.0], [68.9, 2051.0], [69.0, 2053.0], [69.1, 2053.0], [69.2, 2055.0], [69.3, 2060.0], [69.4, 2060.0], [69.5, 2063.0], [69.6, 2068.0], [69.7, 2070.0], [69.8, 2072.0], [69.9, 2073.0], [70.0, 2074.0], [70.1, 2076.0], [70.2, 2081.0], [70.3, 2082.0], [70.4, 2086.0], [70.5, 2090.0], [70.6, 2090.0], [70.7, 2098.0], [70.8, 2104.0], [70.9, 2105.0], [71.0, 2105.0], [71.1, 2106.0], [71.2, 2109.0], [71.3, 2127.0], [71.4, 2134.0], [71.5, 2138.0], [71.6, 2140.0], [71.7, 2142.0], [71.8, 2144.0], [71.9, 2157.0], [72.0, 2162.0], [72.1, 2175.0], [72.2, 2176.0], [72.3, 2179.0], [72.4, 2198.0], [72.5, 2202.0], [72.6, 2209.0], [72.7, 2213.0], [72.8, 2214.0], [72.9, 2220.0], [73.0, 2243.0], [73.1, 2255.0], [73.2, 2258.0], [73.3, 2262.0], [73.4, 2263.0], [73.5, 2263.0], [73.6, 2264.0], [73.7, 2266.0], [73.8, 2266.0], [73.9, 2278.0], [74.0, 2282.0], [74.1, 2282.0], [74.2, 2290.0], [74.3, 2312.0], [74.4, 2319.0], [74.5, 2336.0], [74.6, 2345.0], [74.7, 2347.0], [74.8, 2353.0], [74.9, 2356.0], [75.0, 2372.0], [75.1, 2526.0], [75.2, 2602.0], [75.3, 2625.0], [75.4, 2654.0], [75.5, 2663.0], [75.6, 2747.0], [75.7, 2846.0], [75.8, 2858.0], [75.9, 2866.0], [76.0, 2868.0], [76.1, 2881.0], [76.2, 2949.0], [76.3, 2958.0], [76.4, 2982.0], [76.5, 3001.0], [76.6, 3003.0], [76.7, 3008.0], [76.8, 3010.0], [76.9, 3033.0], [77.0, 3049.0], [77.1, 3051.0], [77.2, 3055.0], [77.3, 3055.0], [77.4, 3063.0], [77.5, 3065.0], [77.6, 3066.0], [77.7, 3066.0], [77.8, 3071.0], [77.9, 3074.0], [78.0, 3076.0], [78.1, 3077.0], [78.2, 3082.0], [78.3, 3082.0], [78.4, 3093.0], [78.5, 3096.0], [78.6, 3098.0], [78.7, 3099.0], [78.8, 3110.0], [78.9, 3113.0], [79.0, 3117.0], [79.1, 3119.0], [79.2, 3121.0], [79.3, 3126.0], [79.4, 3128.0], [79.5, 3132.0], [79.6, 3154.0], [79.7, 3157.0], [79.8, 3164.0], [79.9, 3170.0], [80.0, 3172.0], [80.1, 3175.0], [80.2, 3177.0], [80.3, 3180.0], [80.4, 3180.0], [80.5, 3184.0], [80.6, 3197.0], [80.7, 3203.0], [80.8, 3212.0], [80.9, 3240.0], [81.0, 3245.0], [81.1, 3262.0], [81.2, 3265.0], [81.3, 3276.0], [81.4, 3283.0], [81.5, 3291.0], [81.6, 3319.0], [81.7, 3327.0], [81.8, 3376.0], [81.9, 3390.0], [82.0, 3409.0], [82.1, 3458.0], [82.2, 3494.0], [82.3, 3559.0], [82.4, 3601.0], [82.5, 3646.0], [82.6, 3721.0], [82.7, 3722.0], [82.8, 3755.0], [82.9, 3852.0], [83.0, 3861.0], [83.1, 3871.0], [83.2, 3879.0], [83.3, 3910.0], [83.4, 3919.0], [83.5, 3959.0], [83.6, 4001.0], [83.7, 4001.0], [83.8, 4001.0], [83.9, 4004.0], [84.0, 4020.0], [84.1, 4021.0], [84.2, 4063.0], [84.3, 4072.0], [84.4, 4082.0], [84.5, 4099.0], [84.6, 4101.0], [84.7, 4103.0], [84.8, 4118.0], [84.9, 4125.0], [85.0, 4129.0], [85.1, 4131.0], [85.2, 4138.0], [85.3, 4145.0], [85.4, 4170.0], [85.5, 4194.0], [85.6, 4198.0], [85.7, 4203.0], [85.8, 4205.0], [85.9, 4208.0], [86.0, 4208.0], [86.1, 4221.0], [86.2, 4241.0], [86.3, 4274.0], [86.4, 4284.0], [86.5, 4298.0], [86.6, 4307.0], [86.7, 4426.0], [86.8, 4429.0], [86.9, 4476.0], [87.0, 4477.0], [87.1, 4479.0], [87.2, 4533.0], [87.3, 4548.0], [87.4, 4640.0], [87.5, 4650.0], [87.6, 4711.0], [87.7, 4716.0], [87.8, 4789.0], [87.9, 4792.0], [88.0, 4826.0], [88.1, 4974.0], [88.2, 4978.0], [88.3, 4991.0], [88.4, 5062.0], [88.5, 5069.0], [88.6, 5075.0], [88.7, 5080.0], [88.8, 5096.0], [88.9, 5100.0], [89.0, 5102.0], [89.1, 5102.0], [89.2, 5109.0], [89.3, 5118.0], [89.4, 5138.0], [89.5, 5145.0], [89.6, 5149.0], [89.7, 5153.0], [89.8, 5164.0], [89.9, 5172.0], [90.0, 5172.0], [90.1, 5185.0], [90.2, 5200.0], [90.3, 5224.0], [90.4, 5268.0], [90.5, 5269.0], [90.6, 5294.0], [90.7, 5325.0], [90.8, 5380.0], [90.9, 5474.0], [91.0, 5490.0], [91.1, 5493.0], [91.2, 5515.0], [91.3, 5517.0], [91.4, 5517.0], [91.5, 5529.0], [91.6, 5568.0], [91.7, 5607.0], [91.8, 5608.0], [91.9, 5631.0], [92.0, 5632.0], [92.1, 5640.0], [92.2, 5668.0], [92.3, 5691.0], [92.4, 5718.0], [92.5, 5800.0], [92.6, 5923.0], [92.7, 6148.0], [92.8, 6198.0], [92.9, 6210.0], [93.0, 6271.0], [93.1, 6327.0], [93.2, 6427.0], [93.3, 6487.0], [93.4, 6687.0], [93.5, 6702.0], [93.6, 6727.0], [93.7, 6737.0], [93.8, 6858.0], [93.9, 6910.0], [94.0, 7078.0], [94.1, 7085.0], [94.2, 7112.0], [94.3, 7166.0], [94.4, 7175.0], [94.5, 7222.0], [94.6, 7225.0], [94.7, 7262.0], [94.8, 7269.0], [94.9, 7291.0], [95.0, 7318.0], [95.1, 7377.0], [95.2, 7432.0], [95.3, 7451.0], [95.4, 7530.0], [95.5, 7605.0], [95.6, 7788.0], [95.7, 7888.0], [95.8, 8461.0], [95.9, 8884.0], [96.0, 9065.0], [96.1, 9314.0], [96.2, 9482.0], [96.3, 9583.0], [96.4, 9627.0], [96.5, 10770.0], [96.6, 11160.0], [96.7, 11346.0], [96.8, 11551.0], [96.9, 11631.0], [97.0, 11661.0], [97.1, 11825.0], [97.2, 11840.0], [97.3, 12059.0], [97.4, 12073.0], [97.5, 12310.0], [97.6, 12403.0], [97.7, 12873.0], [97.8, 13210.0], [97.9, 13538.0], [98.0, 13665.0], [98.1, 19009.0], [98.2, 19309.0], [98.3, 19318.0], [98.4, 19407.0], [98.5, 21040.0], [98.6, 35008.0], [98.7, 35816.0], [98.8, 35905.0], [98.9, 35942.0], [99.0, 36523.0], [99.1, 37738.0], [99.2, 68440.0], [99.3, 69805.0], [99.4, 74999.0], [99.5, 75000.0], [99.6, 75001.0], [99.7, 75001.0], [99.8, 75002.0], [99.9, 75002.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 0.0, "maxY": 319.0, "series": [{"data": [[0.0, 319.0], [100.0, 95.0], [35900.0, 2.0], [36500.0, 1.0], [37700.0, 1.0], [200.0, 30.0], [69800.0, 1.0], [300.0, 14.0], [75000.0, 5.0], [400.0, 5.0], [500.0, 4.0], [600.0, 4.0], [700.0, 8.0], [800.0, 5.0], [900.0, 3.0], [1000.0, 96.0], [1100.0, 24.0], [1200.0, 20.0], [1300.0, 11.0], [1400.0, 8.0], [1500.0, 5.0], [1600.0, 6.0], [1700.0, 5.0], [1800.0, 5.0], [1900.0, 2.0], [2000.0, 38.0], [2100.0, 18.0], [2200.0, 18.0], [2300.0, 8.0], [2500.0, 1.0], [2600.0, 4.0], [2800.0, 5.0], [2700.0, 1.0], [2900.0, 3.0], [3000.0, 23.0], [3100.0, 19.0], [3200.0, 9.0], [3300.0, 4.0], [3400.0, 3.0], [3500.0, 1.0], [3600.0, 2.0], [3700.0, 3.0], [3800.0, 4.0], [3900.0, 3.0], [4000.0, 10.0], [4100.0, 11.0], [4200.0, 9.0], [4300.0, 1.0], [4400.0, 5.0], [4600.0, 2.0], [4500.0, 2.0], [4800.0, 1.0], [4700.0, 4.0], [74900.0, 1.0], [5000.0, 5.0], [5100.0, 13.0], [4900.0, 3.0], [5200.0, 5.0], [5300.0, 2.0], [5500.0, 5.0], [5400.0, 3.0], [5600.0, 7.0], [5800.0, 1.0], [5700.0, 1.0], [5900.0, 1.0], [6100.0, 2.0], [6200.0, 2.0], [6300.0, 1.0], [6400.0, 2.0], [6600.0, 1.0], [6800.0, 1.0], [6700.0, 3.0], [6900.0, 1.0], [7000.0, 2.0], [7100.0, 3.0], [7300.0, 2.0], [7200.0, 5.0], [7400.0, 2.0], [7600.0, 1.0], [7500.0, 1.0], [7800.0, 1.0], [7700.0, 1.0], [8400.0, 1.0], [9000.0, 1.0], [8800.0, 1.0], [9500.0, 1.0], [9300.0, 1.0], [9600.0, 1.0], [9400.0, 1.0], [10700.0, 1.0], [11100.0, 1.0], [11500.0, 1.0], [11600.0, 2.0], [11300.0, 1.0], [11800.0, 2.0], [12000.0, 2.0], [12400.0, 1.0], [12300.0, 1.0], [12800.0, 1.0], [13200.0, 1.0], [13600.0, 1.0], [13500.0, 1.0], [19000.0, 1.0], [19300.0, 2.0], [19400.0, 1.0], [21000.0, 1.0], [35800.0, 1.0], [35000.0, 1.0], [68400.0, 1.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 75000.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 40.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 457.0, "series": [{"data": [[0.0, 457.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 169.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 334.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [[3.0, 40.0]], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 3.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 4.142857142857142, "minX": 1.71575478E12, "maxY": 40.73972602739726, "series": [{"data": [[1.71575478E12, 18.710526315789473], [1.7157549E12, 10.627906976744189], [1.71575484E12, 40.73972602739726], [1.71575496E12, 4.142857142857142]], "isOverall": false, "label": "Thread Group", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.71575496E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 378.66666666666663, "minX": 1.0, "maxY": 29538.0, "series": [{"data": [[2.0, 5552.333333333333], [3.0, 9647.75], [4.0, 11444.0], [5.0, 5725.666666666667], [6.0, 29538.0], [7.0, 7717.833333333334], [8.0, 5212.75], [9.0, 4574.0], [10.0, 10332.0], [11.0, 743.1666666666666], [12.0, 11830.0], [13.0, 12758.166666666666], [14.0, 2942.0], [15.0, 4885.2], [16.0, 1986.2857142857142], [17.0, 1867.3333333333333], [18.0, 6776.789473684211], [19.0, 4819.88888888889], [20.0, 870.3], [21.0, 992.6666666666666], [22.0, 1989.7894736842104], [23.0, 1614.142857142857], [24.0, 592.0], [25.0, 2907.0], [26.0, 1421.5333333333333], [27.0, 3196.1000000000004], [28.0, 1861.6666666666667], [29.0, 1425.3333333333333], [30.0, 1555.0], [31.0, 4788.0], [32.0, 1411.21875], [33.0, 3296.6842105263163], [34.0, 1643.769230769231], [35.0, 385.0], [36.0, 1309.0000000000002], [37.0, 1152.5555555555557], [38.0, 1593.7142857142858], [39.0, 1772.375], [40.0, 1444.5454545454545], [41.0, 1263.5454545454545], [42.0, 1296.0], [43.0, 1803.7812500000002], [44.0, 1492.0], [45.0, 1390.1666666666667], [46.0, 1296.5714285714284], [47.0, 1086.5576923076917], [48.0, 1180.5287356321837], [49.0, 677.1176470588238], [50.0, 378.66666666666663], [1.0, 3409.0]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[35.19500000000003, 2540.7420000000034]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 50.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 63.8, "minX": 1.71575478E12, "maxY": 3360.116666666667, "series": [{"data": [[1.71575478E12, 401.3333333333333], [1.7157549E12, 381.96666666666664], [1.71575484E12, 3360.116666666667], [1.71575496E12, 171.38333333333333]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.71575478E12, 139.2], [1.7157549E12, 158.53333333333333], [1.71575484E12, 1494.4666666666667], [1.71575496E12, 63.8]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.71575496E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 18.302631578947363, "minX": 1.71575478E12, "maxY": 10094.485714285714, "series": [{"data": [[1.71575478E12, 18.302631578947363], [1.7157549E12, 9617.418604651162], [1.71575484E12, 1692.336239103363], [1.71575496E12, 10094.485714285714]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.71575496E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 14.486842105263154, "minX": 1.71575478E12, "maxY": 6128.965116279069, "series": [{"data": [[1.71575478E12, 14.486842105263154], [1.7157549E12, 6128.965116279069], [1.71575484E12, 1565.1706102117068], [1.71575496E12, 5808.5714285714275]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.71575496E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 11.934210526315791, "minX": 1.71575478E12, "maxY": 7958.372093023257, "series": [{"data": [[1.71575478E12, 11.934210526315791], [1.7157549E12, 7958.372093023257], [1.71575484E12, 1524.358655043587], [1.71575496E12, 6199.314285714286]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.71575496E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 5.0, "minX": 1.71575478E12, "maxY": 69805.0, "series": [{"data": [[1.71575478E12, 155.0], [1.7157549E12, 69805.0], [1.71575484E12, 37738.0], [1.71575496E12, 13538.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.71575478E12, 5.0], [1.7157549E12, 1350.0], [1.71575484E12, 7.0], [1.71575496E12, 2157.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.71575478E12, 18.700000000000003], [1.7157549E12, 10413.900000000003], [1.71575484E12, 4127.4], [1.71575496E12, 9569.0]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.71575478E12, 155.0], [1.7157549E12, 69805.0], [1.71575484E12, 19311.34], [1.71575496E12, 13538.0]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.71575478E12, 11.0], [1.7157549E12, 4051.5], [1.71575484E12, 539.0], [1.71575496E12, 6148.0]], "isOverall": false, "label": "Median", "isController": false}, {"data": [[1.71575478E12, 21.0], [1.7157549E12, 13596.749999999998], [1.71575484E12, 5303.299999999998], [1.71575496E12, 12003.599999999993]], "isOverall": false, "label": "95th percentile", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.71575496E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 11.0, "minX": 1.0, "maxY": 75001.0, "series": [{"data": [[33.0, 159.0], [2.0, 4138.0], [34.0, 138.5], [39.0, 98.5], [40.0, 105.0], [3.0, 3518.0], [53.0, 77.0], [4.0, 2220.0], [69.0, 52.0], [76.0, 11.0], [5.0, 1110.0], [6.0, 843.5], [102.0, 23.0], [7.0, 1439.0], [8.0, 1808.5], [9.0, 1390.0], [10.0, 827.0], [11.0, 1455.5], [13.0, 1218.0], [14.0, 1196.0], [15.0, 261.0], [16.0, 248.5], [1.0, 5069.0], [19.0, 1149.5], [25.0, 1181.5], [26.0, 150.0], [29.0, 157.0]], "isOverall": false, "label": "Successes", "isController": false}, {"data": [[33.0, 1500.5], [2.0, 74999.0], [34.0, 1501.0], [39.0, 1001.0], [40.0, 1002.0], [11.0, 19009.0], [3.0, 75000.0], [53.0, 1001.5], [14.0, 4001.0], [4.0, 38502.5], [1.0, 75001.0], [69.0, 1001.5], [76.0, 70.0], [19.0, 1500.5], [5.0, 3003.0], [25.0, 4004.0], [7.0, 1000.0], [29.0, 2001.0]], "isOverall": false, "label": "Failures", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 102.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 0.0, "minX": 1.0, "maxY": 5069.0, "series": [{"data": [[33.0, 159.0], [2.0, 4138.0], [34.0, 138.5], [39.0, 98.5], [40.0, 105.0], [3.0, 3517.5], [53.0, 77.0], [4.0, 2220.0], [69.0, 52.0], [76.0, 11.0], [5.0, 1110.0], [6.0, 843.0], [102.0, 23.0], [7.0, 1439.0], [8.0, 1808.5], [9.0, 1390.0], [10.0, 826.5], [11.0, 1455.5], [13.0, 1218.0], [14.0, 1196.0], [15.0, 261.0], [16.0, 248.5], [1.0, 5069.0], [19.0, 1149.5], [25.0, 1181.5], [26.0, 150.0], [29.0, 157.0]], "isOverall": false, "label": "Successes", "isController": false}, {"data": [[33.0, 0.0], [2.0, 0.0], [34.0, 0.0], [39.0, 0.0], [40.0, 0.0], [11.0, 0.0], [3.0, 0.0], [53.0, 0.0], [14.0, 0.0], [4.0, 0.0], [1.0, 0.0], [69.0, 0.0], [76.0, 0.0], [19.0, 0.0], [5.0, 0.0], [25.0, 0.0], [7.0, 0.0], [29.0, 0.0]], "isOverall": false, "label": "Failures", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 102.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 0.48333333333333334, "minX": 1.71575478E12, "maxY": 13.116666666666667, "series": [{"data": [[1.71575478E12, 1.7833333333333334], [1.7157549E12, 1.2833333333333334], [1.71575484E12, 13.116666666666667], [1.71575496E12, 0.48333333333333334]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.71575496E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 0.03333333333333333, "minX": 1.71575478E12, "maxY": 12.883333333333333, "series": [{"data": [[1.71575478E12, 1.2], [1.7157549E12, 1.3666666666666667], [1.71575484E12, 12.883333333333333], [1.71575496E12, 0.55]], "isOverall": false, "label": "200", "isController": false}, {"data": [[1.7157549E12, 0.06666666666666667], [1.71575496E12, 0.03333333333333333]], "isOverall": false, "label": "Non HTTP response code: org.apache.http.conn.HttpHostConnectException", "isController": false}, {"data": [[1.71575478E12, 0.06666666666666667], [1.71575484E12, 0.5]], "isOverall": false, "label": "Non HTTP response code: java.net.SocketException", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.71575496E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 0.03333333333333333, "minX": 1.71575478E12, "maxY": 12.883333333333333, "series": [{"data": [[1.71575478E12, 0.06666666666666667], [1.7157549E12, 0.06666666666666667], [1.71575484E12, 0.5], [1.71575496E12, 0.03333333333333333]], "isOverall": false, "label": "HTTP Request-failure", "isController": false}, {"data": [[1.71575478E12, 1.2], [1.7157549E12, 1.3666666666666667], [1.71575484E12, 12.883333333333333], [1.71575496E12, 0.55]], "isOverall": false, "label": "HTTP Request-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.71575496E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 0.03333333333333333, "minX": 1.71575478E12, "maxY": 12.883333333333333, "series": [{"data": [[1.71575478E12, 1.2], [1.7157549E12, 1.3666666666666667], [1.71575484E12, 12.883333333333333], [1.71575496E12, 0.55]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [[1.71575478E12, 0.06666666666666667], [1.7157549E12, 0.06666666666666667], [1.71575484E12, 0.5], [1.71575496E12, 0.03333333333333333]], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.71575496E12, "title": "Total Transactions Per Second"}},
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

