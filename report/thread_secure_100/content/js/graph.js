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
        data: {"result": {"minY": 1.0, "minX": 0.0, "maxY": 75003.0, "series": [{"data": [[0.0, 1.0], [0.1, 2.0], [0.2, 4.0], [0.3, 4.0], [0.4, 6.0], [0.5, 6.0], [0.6, 6.0], [0.7, 6.0], [0.8, 7.0], [0.9, 7.0], [1.0, 7.0], [1.1, 7.0], [1.2, 7.0], [1.3, 8.0], [1.4, 8.0], [1.5, 8.0], [1.6, 9.0], [1.7, 9.0], [1.8, 9.0], [1.9, 9.0], [2.0, 9.0], [2.1, 9.0], [2.2, 9.0], [2.3, 9.0], [2.4, 9.0], [2.5, 10.0], [2.6, 10.0], [2.7, 10.0], [2.8, 10.0], [2.9, 10.0], [3.0, 10.0], [3.1, 10.0], [3.2, 11.0], [3.3, 11.0], [3.4, 11.0], [3.5, 12.0], [3.6, 12.0], [3.7, 12.0], [3.8, 12.0], [3.9, 12.0], [4.0, 13.0], [4.1, 13.0], [4.2, 13.0], [4.3, 13.0], [4.4, 13.0], [4.5, 13.0], [4.6, 13.0], [4.7, 13.0], [4.8, 14.0], [4.9, 14.0], [5.0, 14.0], [5.1, 14.0], [5.2, 14.0], [5.3, 14.0], [5.4, 14.0], [5.5, 15.0], [5.6, 15.0], [5.7, 15.0], [5.8, 15.0], [5.9, 15.0], [6.0, 15.0], [6.1, 16.0], [6.2, 16.0], [6.3, 16.0], [6.4, 16.0], [6.5, 17.0], [6.6, 17.0], [6.7, 17.0], [6.8, 17.0], [6.9, 17.0], [7.0, 17.0], [7.1, 17.0], [7.2, 17.0], [7.3, 17.0], [7.4, 18.0], [7.5, 18.0], [7.6, 18.0], [7.7, 18.0], [7.8, 18.0], [7.9, 18.0], [8.0, 18.0], [8.1, 19.0], [8.2, 19.0], [8.3, 19.0], [8.4, 19.0], [8.5, 19.0], [8.6, 19.0], [8.7, 19.0], [8.8, 19.0], [8.9, 19.0], [9.0, 19.0], [9.1, 20.0], [9.2, 20.0], [9.3, 20.0], [9.4, 20.0], [9.5, 20.0], [9.6, 20.0], [9.7, 20.0], [9.8, 20.0], [9.9, 20.0], [10.0, 21.0], [10.1, 21.0], [10.2, 21.0], [10.3, 22.0], [10.4, 22.0], [10.5, 22.0], [10.6, 22.0], [10.7, 22.0], [10.8, 22.0], [10.9, 22.0], [11.0, 22.0], [11.1, 22.0], [11.2, 23.0], [11.3, 24.0], [11.4, 24.0], [11.5, 24.0], [11.6, 24.0], [11.7, 24.0], [11.8, 24.0], [11.9, 24.0], [12.0, 24.0], [12.1, 24.0], [12.2, 25.0], [12.3, 26.0], [12.4, 26.0], [12.5, 26.0], [12.6, 26.0], [12.7, 26.0], [12.8, 27.0], [12.9, 27.0], [13.0, 27.0], [13.1, 27.0], [13.2, 27.0], [13.3, 28.0], [13.4, 28.0], [13.5, 29.0], [13.6, 29.0], [13.7, 29.0], [13.8, 29.0], [13.9, 30.0], [14.0, 30.0], [14.1, 30.0], [14.2, 30.0], [14.3, 31.0], [14.4, 31.0], [14.5, 31.0], [14.6, 32.0], [14.7, 32.0], [14.8, 32.0], [14.9, 32.0], [15.0, 32.0], [15.1, 33.0], [15.2, 34.0], [15.3, 35.0], [15.4, 35.0], [15.5, 35.0], [15.6, 35.0], [15.7, 36.0], [15.8, 36.0], [15.9, 36.0], [16.0, 37.0], [16.1, 38.0], [16.2, 38.0], [16.3, 39.0], [16.4, 39.0], [16.5, 39.0], [16.6, 40.0], [16.7, 40.0], [16.8, 40.0], [16.9, 40.0], [17.0, 41.0], [17.1, 42.0], [17.2, 42.0], [17.3, 43.0], [17.4, 43.0], [17.5, 43.0], [17.6, 43.0], [17.7, 43.0], [17.8, 43.0], [17.9, 43.0], [18.0, 43.0], [18.1, 44.0], [18.2, 44.0], [18.3, 45.0], [18.4, 45.0], [18.5, 46.0], [18.6, 47.0], [18.7, 47.0], [18.8, 47.0], [18.9, 47.0], [19.0, 47.0], [19.1, 51.0], [19.2, 51.0], [19.3, 52.0], [19.4, 53.0], [19.5, 53.0], [19.6, 55.0], [19.7, 56.0], [19.8, 56.0], [19.9, 57.0], [20.0, 57.0], [20.1, 57.0], [20.2, 59.0], [20.3, 59.0], [20.4, 60.0], [20.5, 60.0], [20.6, 61.0], [20.7, 62.0], [20.8, 62.0], [20.9, 62.0], [21.0, 62.0], [21.1, 63.0], [21.2, 64.0], [21.3, 65.0], [21.4, 65.0], [21.5, 66.0], [21.6, 67.0], [21.7, 67.0], [21.8, 69.0], [21.9, 69.0], [22.0, 70.0], [22.1, 71.0], [22.2, 72.0], [22.3, 73.0], [22.4, 73.0], [22.5, 73.0], [22.6, 73.0], [22.7, 73.0], [22.8, 74.0], [22.9, 74.0], [23.0, 74.0], [23.1, 74.0], [23.2, 74.0], [23.3, 75.0], [23.4, 77.0], [23.5, 78.0], [23.6, 79.0], [23.7, 79.0], [23.8, 80.0], [23.9, 83.0], [24.0, 84.0], [24.1, 84.0], [24.2, 84.0], [24.3, 87.0], [24.4, 90.0], [24.5, 92.0], [24.6, 93.0], [24.7, 93.0], [24.8, 96.0], [24.9, 96.0], [25.0, 101.0], [25.1, 101.0], [25.2, 102.0], [25.3, 104.0], [25.4, 112.0], [25.5, 113.0], [25.6, 114.0], [25.7, 115.0], [25.8, 115.0], [25.9, 116.0], [26.0, 117.0], [26.1, 118.0], [26.2, 118.0], [26.3, 123.0], [26.4, 123.0], [26.5, 124.0], [26.6, 126.0], [26.7, 126.0], [26.8, 128.0], [26.9, 130.0], [27.0, 130.0], [27.1, 131.0], [27.2, 132.0], [27.3, 133.0], [27.4, 133.0], [27.5, 133.0], [27.6, 134.0], [27.7, 136.0], [27.8, 136.0], [27.9, 137.0], [28.0, 138.0], [28.1, 139.0], [28.2, 145.0], [28.3, 147.0], [28.4, 147.0], [28.5, 148.0], [28.6, 149.0], [28.7, 149.0], [28.8, 149.0], [28.9, 149.0], [29.0, 152.0], [29.1, 152.0], [29.2, 153.0], [29.3, 155.0], [29.4, 155.0], [29.5, 157.0], [29.6, 158.0], [29.7, 158.0], [29.8, 158.0], [29.9, 158.0], [30.0, 160.0], [30.1, 160.0], [30.2, 161.0], [30.3, 164.0], [30.4, 165.0], [30.5, 167.0], [30.6, 170.0], [30.7, 175.0], [30.8, 176.0], [30.9, 177.0], [31.0, 181.0], [31.1, 183.0], [31.2, 185.0], [31.3, 185.0], [31.4, 187.0], [31.5, 189.0], [31.6, 191.0], [31.7, 193.0], [31.8, 193.0], [31.9, 194.0], [32.0, 196.0], [32.1, 199.0], [32.2, 201.0], [32.3, 202.0], [32.4, 203.0], [32.5, 203.0], [32.6, 209.0], [32.7, 221.0], [32.8, 228.0], [32.9, 229.0], [33.0, 231.0], [33.1, 245.0], [33.2, 247.0], [33.3, 248.0], [33.4, 278.0], [33.5, 282.0], [33.6, 284.0], [33.7, 284.0], [33.8, 288.0], [33.9, 289.0], [34.0, 294.0], [34.1, 294.0], [34.2, 295.0], [34.3, 307.0], [34.4, 327.0], [34.5, 331.0], [34.6, 342.0], [34.7, 356.0], [34.8, 374.0], [34.9, 374.0], [35.0, 386.0], [35.1, 387.0], [35.2, 402.0], [35.3, 406.0], [35.4, 428.0], [35.5, 431.0], [35.6, 431.0], [35.7, 438.0], [35.8, 453.0], [35.9, 463.0], [36.0, 471.0], [36.1, 480.0], [36.2, 488.0], [36.3, 507.0], [36.4, 521.0], [36.5, 526.0], [36.6, 529.0], [36.7, 537.0], [36.8, 538.0], [36.9, 540.0], [37.0, 542.0], [37.1, 555.0], [37.2, 571.0], [37.3, 574.0], [37.4, 583.0], [37.5, 615.0], [37.6, 619.0], [37.7, 639.0], [37.8, 676.0], [37.9, 691.0], [38.0, 692.0], [38.1, 773.0], [38.2, 785.0], [38.3, 799.0], [38.4, 805.0], [38.5, 976.0], [38.6, 1000.0], [38.7, 1000.0], [38.8, 1000.0], [38.9, 1000.0], [39.0, 1001.0], [39.1, 1001.0], [39.2, 1001.0], [39.3, 1001.0], [39.4, 1001.0], [39.5, 1001.0], [39.6, 1002.0], [39.7, 1002.0], [39.8, 1002.0], [39.9, 1003.0], [40.0, 1008.0], [40.1, 1017.0], [40.2, 1018.0], [40.3, 1019.0], [40.4, 1020.0], [40.5, 1021.0], [40.6, 1021.0], [40.7, 1022.0], [40.8, 1022.0], [40.9, 1022.0], [41.0, 1022.0], [41.1, 1022.0], [41.2, 1025.0], [41.3, 1025.0], [41.4, 1025.0], [41.5, 1025.0], [41.6, 1026.0], [41.7, 1028.0], [41.8, 1029.0], [41.9, 1029.0], [42.0, 1029.0], [42.1, 1030.0], [42.2, 1030.0], [42.3, 1030.0], [42.4, 1030.0], [42.5, 1030.0], [42.6, 1031.0], [42.7, 1032.0], [42.8, 1033.0], [42.9, 1033.0], [43.0, 1034.0], [43.1, 1034.0], [43.2, 1034.0], [43.3, 1034.0], [43.4, 1035.0], [43.5, 1035.0], [43.6, 1035.0], [43.7, 1036.0], [43.8, 1036.0], [43.9, 1037.0], [44.0, 1037.0], [44.1, 1038.0], [44.2, 1038.0], [44.3, 1038.0], [44.4, 1038.0], [44.5, 1040.0], [44.6, 1041.0], [44.7, 1042.0], [44.8, 1042.0], [44.9, 1042.0], [45.0, 1045.0], [45.1, 1045.0], [45.2, 1045.0], [45.3, 1045.0], [45.4, 1046.0], [45.5, 1046.0], [45.6, 1046.0], [45.7, 1047.0], [45.8, 1047.0], [45.9, 1048.0], [46.0, 1049.0], [46.1, 1049.0], [46.2, 1049.0], [46.3, 1050.0], [46.4, 1050.0], [46.5, 1050.0], [46.6, 1050.0], [46.7, 1051.0], [46.8, 1051.0], [46.9, 1054.0], [47.0, 1055.0], [47.1, 1055.0], [47.2, 1056.0], [47.3, 1057.0], [47.4, 1057.0], [47.5, 1059.0], [47.6, 1060.0], [47.7, 1060.0], [47.8, 1061.0], [47.9, 1063.0], [48.0, 1064.0], [48.1, 1065.0], [48.2, 1066.0], [48.3, 1066.0], [48.4, 1068.0], [48.5, 1069.0], [48.6, 1070.0], [48.7, 1071.0], [48.8, 1073.0], [48.9, 1074.0], [49.0, 1076.0], [49.1, 1077.0], [49.2, 1077.0], [49.3, 1077.0], [49.4, 1077.0], [49.5, 1081.0], [49.6, 1082.0], [49.7, 1082.0], [49.8, 1083.0], [49.9, 1088.0], [50.0, 1090.0], [50.1, 1095.0], [50.2, 1102.0], [50.3, 1102.0], [50.4, 1105.0], [50.5, 1107.0], [50.6, 1107.0], [50.7, 1108.0], [50.8, 1109.0], [50.9, 1111.0], [51.0, 1113.0], [51.1, 1113.0], [51.2, 1113.0], [51.3, 1114.0], [51.4, 1116.0], [51.5, 1117.0], [51.6, 1120.0], [51.7, 1120.0], [51.8, 1121.0], [51.9, 1122.0], [52.0, 1126.0], [52.1, 1129.0], [52.2, 1130.0], [52.3, 1130.0], [52.4, 1140.0], [52.5, 1144.0], [52.6, 1148.0], [52.7, 1149.0], [52.8, 1155.0], [52.9, 1155.0], [53.0, 1156.0], [53.1, 1157.0], [53.2, 1159.0], [53.3, 1163.0], [53.4, 1164.0], [53.5, 1164.0], [53.6, 1168.0], [53.7, 1179.0], [53.8, 1184.0], [53.9, 1186.0], [54.0, 1187.0], [54.1, 1189.0], [54.2, 1206.0], [54.3, 1209.0], [54.4, 1211.0], [54.5, 1211.0], [54.6, 1217.0], [54.7, 1218.0], [54.8, 1219.0], [54.9, 1221.0], [55.0, 1221.0], [55.1, 1225.0], [55.2, 1236.0], [55.3, 1249.0], [55.4, 1261.0], [55.5, 1265.0], [55.6, 1271.0], [55.7, 1274.0], [55.8, 1275.0], [55.9, 1278.0], [56.0, 1286.0], [56.1, 1288.0], [56.2, 1293.0], [56.3, 1295.0], [56.4, 1297.0], [56.5, 1299.0], [56.6, 1302.0], [56.7, 1314.0], [56.8, 1324.0], [56.9, 1333.0], [57.0, 1340.0], [57.1, 1342.0], [57.2, 1348.0], [57.3, 1365.0], [57.4, 1388.0], [57.5, 1389.0], [57.6, 1396.0], [57.7, 1411.0], [57.8, 1433.0], [57.9, 1439.0], [58.0, 1445.0], [58.1, 1470.0], [58.2, 1477.0], [58.3, 1480.0], [58.4, 1486.0], [58.5, 1491.0], [58.6, 1493.0], [58.7, 1522.0], [58.8, 1526.0], [58.9, 1530.0], [59.0, 1584.0], [59.1, 1587.0], [59.2, 1594.0], [59.3, 1603.0], [59.4, 1653.0], [59.5, 1668.0], [59.6, 1672.0], [59.7, 1677.0], [59.8, 1686.0], [59.9, 1703.0], [60.0, 1743.0], [60.1, 1778.0], [60.2, 1783.0], [60.3, 1801.0], [60.4, 1811.0], [60.5, 1857.0], [60.6, 1871.0], [60.7, 1896.0], [60.8, 1907.0], [60.9, 1919.0], [61.0, 1952.0], [61.1, 2000.0], [61.2, 2001.0], [61.3, 2001.0], [61.4, 2002.0], [61.5, 2002.0], [61.6, 2002.0], [61.7, 2002.0], [61.8, 2002.0], [61.9, 2002.0], [62.0, 2003.0], [62.1, 2003.0], [62.2, 2004.0], [62.3, 2019.0], [62.4, 2025.0], [62.5, 2026.0], [62.6, 2029.0], [62.7, 2031.0], [62.8, 2031.0], [62.9, 2032.0], [63.0, 2033.0], [63.1, 2035.0], [63.2, 2038.0], [63.3, 2040.0], [63.4, 2044.0], [63.5, 2045.0], [63.6, 2049.0], [63.7, 2049.0], [63.8, 2050.0], [63.9, 2051.0], [64.0, 2051.0], [64.1, 2053.0], [64.2, 2053.0], [64.3, 2054.0], [64.4, 2055.0], [64.5, 2056.0], [64.6, 2057.0], [64.7, 2059.0], [64.8, 2060.0], [64.9, 2062.0], [65.0, 2071.0], [65.1, 2072.0], [65.2, 2074.0], [65.3, 2077.0], [65.4, 2078.0], [65.5, 2079.0], [65.6, 2084.0], [65.7, 2085.0], [65.8, 2091.0], [65.9, 2097.0], [66.0, 2097.0], [66.1, 2097.0], [66.2, 2107.0], [66.3, 2110.0], [66.4, 2112.0], [66.5, 2112.0], [66.6, 2117.0], [66.7, 2118.0], [66.8, 2130.0], [66.9, 2131.0], [67.0, 2142.0], [67.1, 2142.0], [67.2, 2143.0], [67.3, 2146.0], [67.4, 2147.0], [67.5, 2157.0], [67.6, 2160.0], [67.7, 2161.0], [67.8, 2163.0], [67.9, 2165.0], [68.0, 2168.0], [68.1, 2169.0], [68.2, 2173.0], [68.3, 2176.0], [68.4, 2177.0], [68.5, 2197.0], [68.6, 2197.0], [68.7, 2204.0], [68.8, 2206.0], [68.9, 2206.0], [69.0, 2235.0], [69.1, 2236.0], [69.2, 2244.0], [69.3, 2249.0], [69.4, 2277.0], [69.5, 2291.0], [69.6, 2293.0], [69.7, 2297.0], [69.8, 2305.0], [69.9, 2313.0], [70.0, 2322.0], [70.1, 2343.0], [70.2, 2348.0], [70.3, 2364.0], [70.4, 2365.0], [70.5, 2369.0], [70.6, 2398.0], [70.7, 2423.0], [70.8, 2436.0], [70.9, 2476.0], [71.0, 2546.0], [71.1, 2561.0], [71.2, 2564.0], [71.3, 2647.0], [71.4, 2681.0], [71.5, 2742.0], [71.6, 2829.0], [71.7, 2871.0], [71.8, 2918.0], [71.9, 2952.0], [72.0, 2985.0], [72.1, 3001.0], [72.2, 3002.0], [72.3, 3002.0], [72.4, 3003.0], [72.5, 3004.0], [72.6, 3027.0], [72.7, 3052.0], [72.8, 3061.0], [72.9, 3061.0], [73.0, 3064.0], [73.1, 3067.0], [73.2, 3070.0], [73.3, 3070.0], [73.4, 3082.0], [73.5, 3096.0], [73.6, 3101.0], [73.7, 3106.0], [73.8, 3111.0], [73.9, 3113.0], [74.0, 3116.0], [74.1, 3116.0], [74.2, 3139.0], [74.3, 3151.0], [74.4, 3153.0], [74.5, 3155.0], [74.6, 3162.0], [74.7, 3166.0], [74.8, 3180.0], [74.9, 3197.0], [75.0, 3202.0], [75.1, 3205.0], [75.2, 3207.0], [75.3, 3208.0], [75.4, 3232.0], [75.5, 3234.0], [75.6, 3251.0], [75.7, 3256.0], [75.8, 3258.0], [75.9, 3277.0], [76.0, 3318.0], [76.1, 3322.0], [76.2, 3365.0], [76.3, 3371.0], [76.4, 3431.0], [76.5, 3449.0], [76.6, 3453.0], [76.7, 3467.0], [76.8, 3473.0], [76.9, 3477.0], [77.0, 3571.0], [77.1, 3575.0], [77.2, 3587.0], [77.3, 3620.0], [77.4, 3621.0], [77.5, 3624.0], [77.6, 3658.0], [77.7, 3669.0], [77.8, 3693.0], [77.9, 3714.0], [78.0, 3726.0], [78.1, 3731.0], [78.2, 3731.0], [78.3, 3745.0], [78.4, 3754.0], [78.5, 3883.0], [78.6, 3985.0], [78.7, 3986.0], [78.8, 4003.0], [78.9, 4003.0], [79.0, 4037.0], [79.1, 4041.0], [79.2, 4050.0], [79.3, 4079.0], [79.4, 4085.0], [79.5, 4089.0], [79.6, 4105.0], [79.7, 4116.0], [79.8, 4128.0], [79.9, 4130.0], [80.0, 4140.0], [80.1, 4145.0], [80.2, 4155.0], [80.3, 4156.0], [80.4, 4161.0], [80.5, 4162.0], [80.6, 4163.0], [80.7, 4165.0], [80.8, 4166.0], [80.9, 4168.0], [81.0, 4190.0], [81.1, 4194.0], [81.2, 4202.0], [81.3, 4204.0], [81.4, 4219.0], [81.5, 4245.0], [81.6, 4246.0], [81.7, 4248.0], [81.8, 4273.0], [81.9, 4281.0], [82.0, 4285.0], [82.1, 4316.0], [82.2, 4324.0], [82.3, 4356.0], [82.4, 4367.0], [82.5, 4379.0], [82.6, 4429.0], [82.7, 4486.0], [82.8, 4538.0], [82.9, 4538.0], [83.0, 4540.0], [83.1, 4547.0], [83.2, 4559.0], [83.3, 4561.0], [83.4, 4598.0], [83.5, 4660.0], [83.6, 4678.0], [83.7, 4803.0], [83.8, 5002.0], [83.9, 5003.0], [84.0, 5004.0], [84.1, 5004.0], [84.2, 5075.0], [84.3, 5091.0], [84.4, 5100.0], [84.5, 5102.0], [84.6, 5104.0], [84.7, 5110.0], [84.8, 5127.0], [84.9, 5130.0], [85.0, 5131.0], [85.1, 5136.0], [85.2, 5137.0], [85.3, 5153.0], [85.4, 5175.0], [85.5, 5204.0], [85.6, 5229.0], [85.7, 5266.0], [85.8, 5274.0], [85.9, 5291.0], [86.0, 5301.0], [86.1, 5349.0], [86.2, 5354.0], [86.3, 5476.0], [86.4, 5523.0], [86.5, 5530.0], [86.6, 5807.0], [86.7, 5915.0], [86.8, 5975.0], [86.9, 5976.0], [87.0, 6089.0], [87.1, 6111.0], [87.2, 6272.0], [87.3, 6286.0], [87.4, 6287.0], [87.5, 6301.0], [87.6, 6499.0], [87.7, 6563.0], [87.8, 6728.0], [87.9, 6921.0], [88.0, 7000.0], [88.1, 7003.0], [88.2, 7003.0], [88.3, 7087.0], [88.4, 7108.0], [88.5, 7110.0], [88.6, 7111.0], [88.7, 7113.0], [88.8, 7132.0], [88.9, 7136.0], [89.0, 7142.0], [89.1, 7143.0], [89.2, 7156.0], [89.3, 7163.0], [89.4, 7171.0], [89.5, 7176.0], [89.6, 7195.0], [89.7, 7201.0], [89.8, 7225.0], [89.9, 7230.0], [90.0, 7237.0], [90.1, 7240.0], [90.2, 7240.0], [90.3, 7249.0], [90.4, 7261.0], [90.5, 7289.0], [90.6, 7329.0], [90.7, 7339.0], [90.8, 7434.0], [90.9, 7450.0], [91.0, 7594.0], [91.1, 7667.0], [91.2, 7847.0], [91.3, 7880.0], [91.4, 7912.0], [91.5, 7971.0], [91.6, 8621.0], [91.7, 8733.0], [91.8, 9310.0], [91.9, 9760.0], [92.0, 9841.0], [92.1, 9950.0], [92.2, 10063.0], [92.3, 10132.0], [92.4, 10328.0], [92.5, 11004.0], [92.6, 11116.0], [92.7, 11166.0], [92.8, 11172.0], [92.9, 11187.0], [93.0, 11218.0], [93.1, 11221.0], [93.2, 11258.0], [93.3, 11260.0], [93.4, 11301.0], [93.5, 11406.0], [93.6, 11571.0], [93.7, 11582.0], [93.8, 11750.0], [93.9, 11784.0], [94.0, 12484.0], [94.1, 12694.0], [94.2, 13686.0], [94.3, 13745.0], [94.4, 15150.0], [94.5, 19223.0], [94.6, 19234.0], [94.7, 19242.0], [94.8, 19256.0], [94.9, 19259.0], [95.0, 19291.0], [95.1, 19310.0], [95.2, 19339.0], [95.3, 19341.0], [95.4, 19354.0], [95.5, 19360.0], [95.6, 19371.0], [95.7, 19471.0], [95.8, 19515.0], [95.9, 19528.0], [96.0, 19539.0], [96.1, 19546.0], [96.2, 19653.0], [96.3, 19686.0], [96.4, 19857.0], [96.5, 19929.0], [96.6, 20308.0], [96.7, 20816.0], [96.8, 21342.0], [96.9, 35005.0], [97.0, 35613.0], [97.1, 35790.0], [97.2, 35833.0], [97.3, 35867.0], [97.4, 35938.0], [97.5, 36007.0], [97.6, 36227.0], [97.7, 36626.0], [97.8, 36754.0], [97.9, 37079.0], [98.0, 37394.0], [98.1, 38979.0], [98.2, 67003.0], [98.3, 68809.0], [98.4, 68835.0], [98.5, 68940.0], [98.6, 69161.0], [98.7, 69309.0], [98.8, 70553.0], [98.9, 71049.0], [99.0, 71702.0], [99.1, 71756.0], [99.2, 75001.0], [99.3, 75001.0], [99.4, 75001.0], [99.5, 75001.0], [99.6, 75001.0], [99.7, 75001.0], [99.8, 75002.0], [99.9, 75003.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 0.0, "maxY": 249.0, "series": [{"data": [[0.0, 249.0], [69100.0, 1.0], [100.0, 72.0], [35900.0, 1.0], [35700.0, 1.0], [36700.0, 1.0], [37300.0, 1.0], [38900.0, 1.0], [200.0, 21.0], [67000.0, 1.0], [71000.0, 1.0], [300.0, 9.0], [75000.0, 8.0], [400.0, 11.0], [500.0, 12.0], [600.0, 6.0], [700.0, 3.0], [800.0, 1.0], [900.0, 1.0], [1000.0, 116.0], [1100.0, 40.0], [1200.0, 24.0], [1300.0, 11.0], [1400.0, 10.0], [1500.0, 6.0], [1600.0, 6.0], [1700.0, 4.0], [1800.0, 5.0], [1900.0, 3.0], [2000.0, 51.0], [2100.0, 25.0], [2200.0, 11.0], [2300.0, 9.0], [2400.0, 3.0], [2500.0, 3.0], [2600.0, 2.0], [2800.0, 2.0], [2700.0, 1.0], [2900.0, 3.0], [3000.0, 16.0], [3100.0, 14.0], [3200.0, 10.0], [3300.0, 4.0], [3400.0, 6.0], [3500.0, 3.0], [3700.0, 6.0], [3600.0, 6.0], [3800.0, 1.0], [3900.0, 2.0], [4000.0, 8.0], [4100.0, 16.0], [4200.0, 9.0], [4300.0, 5.0], [69300.0, 1.0], [68900.0, 1.0], [4500.0, 7.0], [4400.0, 2.0], [70500.0, 1.0], [4600.0, 2.0], [71700.0, 2.0], [4800.0, 1.0], [5000.0, 6.0], [5100.0, 11.0], [5300.0, 3.0], [5200.0, 5.0], [5500.0, 2.0], [5400.0, 1.0], [5800.0, 1.0], [6100.0, 1.0], [5900.0, 3.0], [6000.0, 1.0], [6300.0, 1.0], [6200.0, 3.0], [6400.0, 1.0], [6500.0, 1.0], [6900.0, 1.0], [6700.0, 1.0], [7100.0, 13.0], [7000.0, 4.0], [7200.0, 9.0], [7300.0, 2.0], [7400.0, 2.0], [7600.0, 1.0], [7500.0, 1.0], [7900.0, 2.0], [7800.0, 2.0], [8700.0, 1.0], [8600.0, 1.0], [9300.0, 1.0], [9700.0, 1.0], [10100.0, 1.0], [9800.0, 1.0], [9900.0, 1.0], [10000.0, 1.0], [10300.0, 1.0], [11100.0, 4.0], [11200.0, 4.0], [11000.0, 1.0], [11400.0, 1.0], [11300.0, 1.0], [11500.0, 2.0], [11700.0, 2.0], [12400.0, 1.0], [12600.0, 1.0], [13600.0, 1.0], [13700.0, 1.0], [15100.0, 1.0], [19200.0, 6.0], [19300.0, 6.0], [19400.0, 1.0], [19500.0, 4.0], [19800.0, 1.0], [19600.0, 2.0], [19900.0, 1.0], [20300.0, 1.0], [20800.0, 1.0], [21300.0, 1.0], [35000.0, 1.0], [35600.0, 1.0], [36000.0, 1.0], [35800.0, 2.0], [36600.0, 1.0], [36200.0, 1.0], [37000.0, 1.0], [68800.0, 2.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 75000.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 57.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 378.0, "series": [{"data": [[0.0, 356.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 209.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 378.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [[3.0, 57.0]], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 3.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 1.5555555555555556, "minX": 1.71575514E12, "maxY": 80.28877679697356, "series": [{"data": [[1.71575526E12, 9.6875], [1.7157552E12, 29.386666666666674], [1.71575532E12, 1.5555555555555556], [1.71575514E12, 80.28877679697356]], "isOverall": false, "label": "Thread Group", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.71575532E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 114.5, "minX": 1.0, "maxY": 41917.8, "series": [{"data": [[2.0, 26546.333333333336], [3.0, 3056.6666666666665], [4.0, 3819.0], [5.0, 5807.0], [6.0, 19134.0], [7.0, 4281.0], [8.0, 24064.25], [9.0, 2850.0], [10.0, 10268.166666666668], [11.0, 8538.333333333334], [12.0, 3731.0], [13.0, 6776.888888888889], [14.0, 18454.6875], [15.0, 27773.63636363636], [16.0, 3155.0], [17.0, 41917.8], [18.0, 1209.0], [19.0, 4262.0], [20.0, 436.2], [21.0, 13681.0], [22.0, 4155.8], [23.0, 1147.25], [24.0, 9023.8], [25.0, 1743.6666666666667], [26.0, 1500.75], [27.0, 813.25], [28.0, 340.5], [29.0, 9425.666666666666], [30.0, 3644.727272727273], [31.0, 4220.75], [32.0, 12136.2], [33.0, 4232.722222222222], [34.0, 12373.25], [35.0, 9529.4], [36.0, 539.0], [37.0, 2228.0], [38.0, 1738.2], [39.0, 6885.666666666665], [40.0, 5394.75], [41.0, 1814.0], [42.0, 4952.799999999999], [43.0, 703.0], [44.0, 1665.0], [45.0, 3405.4736842105262], [46.0, 5257.8], [47.0, 1563.3333333333335], [48.0, 4373.076923076923], [49.0, 5551.750000000001], [51.0, 4490.333333333334], [50.0, 2700.5], [52.0, 3575.6666666666665], [53.0, 2039.0], [54.0, 2268.0], [55.0, 1042.3333333333333], [56.0, 4222.0], [57.0, 1131.0], [58.0, 6452.466666666667], [59.0, 4893.75], [60.0, 6668.5], [61.0, 147.0], [62.0, 1504.3333333333333], [63.0, 539.3333333333334], [64.0, 3005.5714285714284], [65.0, 738.0], [66.0, 1346.2857142857142], [67.0, 161.0], [68.0, 592.5], [69.0, 5566.0], [70.0, 1566.6], [71.0, 3599.777777777778], [74.0, 1628.625], [75.0, 1080.6666666666667], [73.0, 3676.5000000000005], [72.0, 6223.5], [76.0, 2102.5], [77.0, 3101.8125], [78.0, 3189.0], [79.0, 3005.1428571428573], [80.0, 2903.2], [81.0, 2161.8], [82.0, 2659.8947368421054], [83.0, 2395.2], [84.0, 1609.875], [85.0, 441.0], [87.0, 114.5], [86.0, 2285.5882352941176], [88.0, 2550.470588235294], [89.0, 1279.666666666667], [90.0, 860.25], [91.0, 2166.178571428571], [92.0, 2062.1111111111104], [93.0, 1562.8124999999998], [94.0, 1701.2083333333333], [95.0, 1079.8974358974356], [96.0, 1145.4615384615386], [97.0, 1277.304347826087], [98.0, 874.1568627450981], [99.0, 546.0], [100.0, 587.46875], [1.0, 3700.75]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[68.55599999999998, 4056.2500000000014]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 17.4, "minX": 1.71575514E12, "maxY": 4142.366666666667, "series": [{"data": [[1.71575526E12, 203.23333333333332], [1.7157552E12, 808.0], [1.71575532E12, 22.05], [1.71575514E12, 4142.366666666667]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.71575526E12, 88.93333333333334], [1.7157552E12, 270.6666666666667], [1.71575532E12, 17.4], [1.71575514E12, 1446.1333333333334]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.71575532E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 1821.5573770491812, "minX": 1.71575514E12, "maxY": 13018.020833333334, "series": [{"data": [[1.71575526E12, 13018.020833333334], [1.7157552E12, 12563.406666666666], [1.71575532E12, 11375.444444444445], [1.71575514E12, 1821.5573770491812]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.71575532E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 1689.4640605296347, "minX": 1.71575514E12, "maxY": 11375.444444444445, "series": [{"data": [[1.71575526E12, 9892.95833333333], [1.7157552E12, 8863.199999999995], [1.71575532E12, 11375.444444444445], [1.71575514E12, 1689.4640605296347]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.71575532E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 1737.9949558638077, "minX": 1.71575514E12, "maxY": 11654.159999999996, "series": [{"data": [[1.71575526E12, 10652.583333333336], [1.7157552E12, 11654.159999999996], [1.71575532E12, 8123.444444444444], [1.71575514E12, 1737.9949558638077]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.71575532E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 4.0, "minX": 1.71575514E12, "maxY": 71756.0, "series": [{"data": [[1.71575526E12, 71702.0], [1.7157552E12, 70553.0], [1.71575532E12, 71756.0], [1.71575514E12, 19857.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.71575526E12, 1117.0], [1.7157552E12, 453.0], [1.71575532E12, 2305.0], [1.71575514E12, 4.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.71575526E12, 26063.100000000068], [1.7157552E12, 35828.7], [1.71575532E12, 71756.0], [1.71575514E12, 4369.000000000003]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.71575526E12, 71702.0], [1.7157552E12, 70042.96], [1.71575532E12, 71756.0], [1.71575514E12, 19340.02]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.71575526E12, 5120.5], [1.7157552E12, 3193.5], [1.71575532E12, 4116.0], [1.71575514E12, 1025.0]], "isOverall": false, "label": "Median", "isController": false}, {"data": [[1.71575526E12, 59824.499999999956], [1.7157552E12, 37361.99999999999], [1.71575532E12, 71756.0], [1.71575514E12, 7233.849999999999]], "isOverall": false, "label": "95th percentile", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.71575532E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 18.0, "minX": 1.0, "maxY": 75001.0, "series": [{"data": [[2.0, 4367.0], [40.0, 1083.0], [46.0, 1071.0], [3.0, 4538.0], [53.0, 1060.0], [67.0, 1029.0], [4.0, 4379.0], [5.0, 1801.0], [88.0, 1022.0], [6.0, 1493.0], [7.0, 1919.0], [8.0, 1594.0], [144.0, 18.0], [9.0, 1365.0], [11.0, 1243.5], [12.0, 1396.0], [13.0, 7162.0], [14.0, 4316.0], [15.0, 2191.5], [16.0, 1295.0], [1.0, 4116.0], [17.0, 1294.0], [18.0, 1122.0], [19.0, 2197.0], [23.0, 1163.5], [24.0, 2112.0], [26.0, 1278.0], [30.0, 1126.0]], "isOverall": false, "label": "Successes", "isController": false}, {"data": [[2.0, 75001.0], [40.0, 3001.0], [46.0, 3002.0], [3.0, 75001.0], [53.0, 2002.0], [67.0, 1500.5], [4.0, 75001.0], [88.0, 1001.5], [6.0, 2004.0], [8.0, 1001.0], [144.0, 149.0], [11.0, 2001.0], [12.0, 1000.0], [13.0, 1000.0], [14.0, 1001.0], [15.0, 7003.0], [16.0, 2002.0], [1.0, 75001.0], [17.0, 2002.0], [18.0, 7003.0], [19.0, 1001.0], [23.0, 3003.0], [24.0, 1002.0], [26.0, 2001.0], [30.0, 3004.0]], "isOverall": false, "label": "Failures", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 144.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 0.0, "minX": 1.0, "maxY": 7162.0, "series": [{"data": [[2.0, 4367.0], [40.0, 1083.0], [46.0, 1071.0], [3.0, 4538.0], [53.0, 1060.0], [67.0, 1029.0], [4.0, 4379.0], [5.0, 1801.0], [88.0, 1022.0], [6.0, 1493.0], [7.0, 1919.0], [8.0, 1594.0], [144.0, 18.0], [9.0, 1365.0], [11.0, 1243.5], [12.0, 1396.0], [13.0, 7162.0], [14.0, 4316.0], [15.0, 2191.5], [16.0, 1295.0], [1.0, 4116.0], [17.0, 1294.0], [18.0, 1122.0], [19.0, 2197.0], [23.0, 1163.5], [24.0, 2112.0], [26.0, 1278.0], [30.0, 1126.0]], "isOverall": false, "label": "Successes", "isController": false}, {"data": [[2.0, 0.0], [40.0, 0.0], [46.0, 0.0], [3.0, 0.0], [53.0, 0.0], [67.0, 0.0], [4.0, 0.0], [88.0, 0.0], [6.0, 0.0], [8.0, 0.0], [144.0, 0.0], [11.0, 0.0], [12.0, 0.0], [13.0, 0.0], [14.0, 0.0], [15.0, 0.0], [16.0, 0.0], [1.0, 0.0], [17.0, 0.0], [18.0, 0.0], [19.0, 0.0], [23.0, 0.0], [24.0, 0.0], [26.0, 0.0], [30.0, 0.0]], "isOverall": false, "label": "Failures", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 144.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 0.11666666666666667, "minX": 1.71575514E12, "maxY": 13.966666666666667, "series": [{"data": [[1.71575526E12, 0.6], [1.7157552E12, 1.9833333333333334], [1.71575532E12, 0.11666666666666667], [1.71575514E12, 13.966666666666667]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.71575532E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 0.03333333333333333, "minX": 1.71575514E12, "maxY": 12.466666666666667, "series": [{"data": [[1.71575526E12, 0.7666666666666667], [1.7157552E12, 2.3333333333333335], [1.71575532E12, 0.15], [1.71575514E12, 12.466666666666667]], "isOverall": false, "label": "200", "isController": false}, {"data": [[1.71575526E12, 0.03333333333333333], [1.7157552E12, 0.1]], "isOverall": false, "label": "Non HTTP response code: org.apache.http.conn.HttpHostConnectException", "isController": false}, {"data": [[1.7157552E12, 0.06666666666666667], [1.71575514E12, 0.75]], "isOverall": false, "label": "Non HTTP response code: java.net.SocketException", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.71575532E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 0.03333333333333333, "minX": 1.71575514E12, "maxY": 12.466666666666667, "series": [{"data": [[1.71575526E12, 0.03333333333333333], [1.7157552E12, 0.16666666666666666], [1.71575514E12, 0.75]], "isOverall": false, "label": "HTTP Request-failure", "isController": false}, {"data": [[1.71575526E12, 0.7666666666666667], [1.7157552E12, 2.3333333333333335], [1.71575532E12, 0.15], [1.71575514E12, 12.466666666666667]], "isOverall": false, "label": "HTTP Request-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.71575532E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 0.03333333333333333, "minX": 1.71575514E12, "maxY": 12.466666666666667, "series": [{"data": [[1.71575526E12, 0.7666666666666667], [1.7157552E12, 2.3333333333333335], [1.71575532E12, 0.15], [1.71575514E12, 12.466666666666667]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [[1.71575526E12, 0.03333333333333333], [1.7157552E12, 0.16666666666666666], [1.71575514E12, 0.75]], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.71575532E12, "title": "Total Transactions Per Second"}},
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

