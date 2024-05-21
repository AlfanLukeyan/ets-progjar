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
        data: {"result": {"minY": 1.0, "minX": 0.0, "maxY": 75002.0, "series": [{"data": [[0.0, 1.0], [0.1, 1.0], [0.2, 1.0], [0.3, 1.0], [0.4, 2.0], [0.5, 2.0], [0.6, 5.0], [0.7, 6.0], [0.8, 6.0], [0.9, 7.0], [1.0, 8.0], [1.1, 8.0], [1.2, 9.0], [1.3, 9.0], [1.4, 9.0], [1.5, 9.0], [1.6, 9.0], [1.7, 9.0], [1.8, 9.0], [1.9, 9.0], [2.0, 9.0], [2.1, 9.0], [2.2, 10.0], [2.3, 10.0], [2.4, 10.0], [2.5, 10.0], [2.6, 10.0], [2.7, 10.0], [2.8, 11.0], [2.9, 11.0], [3.0, 12.0], [3.1, 12.0], [3.2, 12.0], [3.3, 12.0], [3.4, 12.0], [3.5, 12.0], [3.6, 12.0], [3.7, 12.0], [3.8, 12.0], [3.9, 13.0], [4.0, 13.0], [4.1, 13.0], [4.2, 13.0], [4.3, 13.0], [4.4, 13.0], [4.5, 13.0], [4.6, 13.0], [4.7, 13.0], [4.8, 13.0], [4.9, 14.0], [5.0, 14.0], [5.1, 14.0], [5.2, 14.0], [5.3, 14.0], [5.4, 14.0], [5.5, 14.0], [5.6, 14.0], [5.7, 15.0], [5.8, 15.0], [5.9, 15.0], [6.0, 15.0], [6.1, 15.0], [6.2, 15.0], [6.3, 16.0], [6.4, 16.0], [6.5, 16.0], [6.6, 16.0], [6.7, 16.0], [6.8, 16.0], [6.9, 16.0], [7.0, 16.0], [7.1, 16.0], [7.2, 17.0], [7.3, 17.0], [7.4, 17.0], [7.5, 17.0], [7.6, 17.0], [7.7, 17.0], [7.8, 17.0], [7.9, 18.0], [8.0, 18.0], [8.1, 18.0], [8.2, 18.0], [8.3, 19.0], [8.4, 19.0], [8.5, 19.0], [8.6, 20.0], [8.7, 20.0], [8.8, 20.0], [8.9, 20.0], [9.0, 20.0], [9.1, 20.0], [9.2, 20.0], [9.3, 20.0], [9.4, 21.0], [9.5, 21.0], [9.6, 21.0], [9.7, 21.0], [9.8, 21.0], [9.9, 21.0], [10.0, 21.0], [10.1, 22.0], [10.2, 22.0], [10.3, 22.0], [10.4, 22.0], [10.5, 22.0], [10.6, 22.0], [10.7, 22.0], [10.8, 22.0], [10.9, 23.0], [11.0, 23.0], [11.1, 24.0], [11.2, 24.0], [11.3, 24.0], [11.4, 24.0], [11.5, 25.0], [11.6, 25.0], [11.7, 26.0], [11.8, 26.0], [11.9, 26.0], [12.0, 26.0], [12.1, 27.0], [12.2, 27.0], [12.3, 27.0], [12.4, 27.0], [12.5, 28.0], [12.6, 28.0], [12.7, 28.0], [12.8, 28.0], [12.9, 29.0], [13.0, 29.0], [13.1, 29.0], [13.2, 30.0], [13.3, 31.0], [13.4, 32.0], [13.5, 32.0], [13.6, 33.0], [13.7, 33.0], [13.8, 33.0], [13.9, 34.0], [14.0, 34.0], [14.1, 34.0], [14.2, 34.0], [14.3, 36.0], [14.4, 36.0], [14.5, 36.0], [14.6, 38.0], [14.7, 38.0], [14.8, 38.0], [14.9, 38.0], [15.0, 38.0], [15.1, 39.0], [15.2, 40.0], [15.3, 41.0], [15.4, 41.0], [15.5, 41.0], [15.6, 42.0], [15.7, 42.0], [15.8, 44.0], [15.9, 46.0], [16.0, 47.0], [16.1, 48.0], [16.2, 49.0], [16.3, 49.0], [16.4, 49.0], [16.5, 51.0], [16.6, 51.0], [16.7, 52.0], [16.8, 53.0], [16.9, 54.0], [17.0, 54.0], [17.1, 54.0], [17.2, 54.0], [17.3, 55.0], [17.4, 55.0], [17.5, 56.0], [17.6, 58.0], [17.7, 58.0], [17.8, 60.0], [17.9, 61.0], [18.0, 62.0], [18.1, 62.0], [18.2, 62.0], [18.3, 63.0], [18.4, 64.0], [18.5, 66.0], [18.6, 66.0], [18.7, 68.0], [18.8, 69.0], [18.9, 69.0], [19.0, 69.0], [19.1, 70.0], [19.2, 70.0], [19.3, 72.0], [19.4, 74.0], [19.5, 75.0], [19.6, 76.0], [19.7, 77.0], [19.8, 78.0], [19.9, 81.0], [20.0, 83.0], [20.1, 83.0], [20.2, 83.0], [20.3, 85.0], [20.4, 86.0], [20.5, 86.0], [20.6, 88.0], [20.7, 88.0], [20.8, 89.0], [20.9, 90.0], [21.0, 91.0], [21.1, 92.0], [21.2, 92.0], [21.3, 94.0], [21.4, 94.0], [21.5, 95.0], [21.6, 98.0], [21.7, 99.0], [21.8, 100.0], [21.9, 102.0], [22.0, 105.0], [22.1, 106.0], [22.2, 107.0], [22.3, 109.0], [22.4, 111.0], [22.5, 111.0], [22.6, 112.0], [22.7, 112.0], [22.8, 112.0], [22.9, 117.0], [23.0, 118.0], [23.1, 121.0], [23.2, 124.0], [23.3, 124.0], [23.4, 127.0], [23.5, 127.0], [23.6, 129.0], [23.7, 131.0], [23.8, 132.0], [23.9, 133.0], [24.0, 138.0], [24.1, 141.0], [24.2, 142.0], [24.3, 143.0], [24.4, 144.0], [24.5, 145.0], [24.6, 152.0], [24.7, 152.0], [24.8, 152.0], [24.9, 155.0], [25.0, 156.0], [25.1, 156.0], [25.2, 157.0], [25.3, 159.0], [25.4, 168.0], [25.5, 169.0], [25.6, 170.0], [25.7, 175.0], [25.8, 178.0], [25.9, 180.0], [26.0, 186.0], [26.1, 191.0], [26.2, 193.0], [26.3, 193.0], [26.4, 201.0], [26.5, 202.0], [26.6, 211.0], [26.7, 219.0], [26.8, 222.0], [26.9, 237.0], [27.0, 240.0], [27.1, 245.0], [27.2, 245.0], [27.3, 260.0], [27.4, 260.0], [27.5, 262.0], [27.6, 263.0], [27.7, 263.0], [27.8, 264.0], [27.9, 270.0], [28.0, 275.0], [28.1, 280.0], [28.2, 285.0], [28.3, 294.0], [28.4, 295.0], [28.5, 295.0], [28.6, 302.0], [28.7, 315.0], [28.8, 317.0], [28.9, 347.0], [29.0, 348.0], [29.1, 363.0], [29.2, 371.0], [29.3, 409.0], [29.4, 410.0], [29.5, 428.0], [29.6, 435.0], [29.7, 436.0], [29.8, 438.0], [29.9, 465.0], [30.0, 487.0], [30.1, 506.0], [30.2, 514.0], [30.3, 530.0], [30.4, 532.0], [30.5, 564.0], [30.6, 605.0], [30.7, 648.0], [30.8, 658.0], [30.9, 688.0], [31.0, 717.0], [31.1, 747.0], [31.2, 752.0], [31.3, 768.0], [31.4, 770.0], [31.5, 776.0], [31.6, 787.0], [31.7, 791.0], [31.8, 926.0], [31.9, 930.0], [32.0, 1001.0], [32.1, 1001.0], [32.2, 1001.0], [32.3, 1001.0], [32.4, 1001.0], [32.5, 1001.0], [32.6, 1001.0], [32.7, 1001.0], [32.8, 1001.0], [32.9, 1001.0], [33.0, 1001.0], [33.1, 1001.0], [33.2, 1001.0], [33.3, 1001.0], [33.4, 1001.0], [33.5, 1001.0], [33.6, 1002.0], [33.7, 1002.0], [33.8, 1002.0], [33.9, 1002.0], [34.0, 1003.0], [34.1, 1003.0], [34.2, 1003.0], [34.3, 1009.0], [34.4, 1010.0], [34.5, 1012.0], [34.6, 1018.0], [34.7, 1018.0], [34.8, 1018.0], [34.9, 1019.0], [35.0, 1022.0], [35.1, 1023.0], [35.2, 1023.0], [35.3, 1024.0], [35.4, 1027.0], [35.5, 1027.0], [35.6, 1027.0], [35.7, 1027.0], [35.8, 1028.0], [35.9, 1028.0], [36.0, 1028.0], [36.1, 1029.0], [36.2, 1030.0], [36.3, 1030.0], [36.4, 1030.0], [36.5, 1032.0], [36.6, 1032.0], [36.7, 1034.0], [36.8, 1034.0], [36.9, 1034.0], [37.0, 1034.0], [37.1, 1034.0], [37.2, 1034.0], [37.3, 1035.0], [37.4, 1036.0], [37.5, 1037.0], [37.6, 1038.0], [37.7, 1038.0], [37.8, 1039.0], [37.9, 1039.0], [38.0, 1040.0], [38.1, 1041.0], [38.2, 1041.0], [38.3, 1042.0], [38.4, 1042.0], [38.5, 1042.0], [38.6, 1042.0], [38.7, 1042.0], [38.8, 1043.0], [38.9, 1043.0], [39.0, 1043.0], [39.1, 1044.0], [39.2, 1044.0], [39.3, 1044.0], [39.4, 1045.0], [39.5, 1045.0], [39.6, 1045.0], [39.7, 1045.0], [39.8, 1047.0], [39.9, 1047.0], [40.0, 1048.0], [40.1, 1048.0], [40.2, 1048.0], [40.3, 1048.0], [40.4, 1049.0], [40.5, 1049.0], [40.6, 1049.0], [40.7, 1049.0], [40.8, 1050.0], [40.9, 1051.0], [41.0, 1052.0], [41.1, 1054.0], [41.2, 1054.0], [41.3, 1054.0], [41.4, 1055.0], [41.5, 1055.0], [41.6, 1055.0], [41.7, 1056.0], [41.8, 1057.0], [41.9, 1057.0], [42.0, 1060.0], [42.1, 1065.0], [42.2, 1065.0], [42.3, 1066.0], [42.4, 1068.0], [42.5, 1068.0], [42.6, 1073.0], [42.7, 1074.0], [42.8, 1074.0], [42.9, 1074.0], [43.0, 1075.0], [43.1, 1077.0], [43.2, 1077.0], [43.3, 1079.0], [43.4, 1079.0], [43.5, 1079.0], [43.6, 1081.0], [43.7, 1082.0], [43.8, 1085.0], [43.9, 1086.0], [44.0, 1095.0], [44.1, 1096.0], [44.2, 1097.0], [44.3, 1105.0], [44.4, 1105.0], [44.5, 1107.0], [44.6, 1109.0], [44.7, 1112.0], [44.8, 1112.0], [44.9, 1113.0], [45.0, 1114.0], [45.1, 1115.0], [45.2, 1118.0], [45.3, 1126.0], [45.4, 1127.0], [45.5, 1132.0], [45.6, 1133.0], [45.7, 1135.0], [45.8, 1137.0], [45.9, 1143.0], [46.0, 1146.0], [46.1, 1148.0], [46.2, 1149.0], [46.3, 1150.0], [46.4, 1151.0], [46.5, 1153.0], [46.6, 1154.0], [46.7, 1159.0], [46.8, 1176.0], [46.9, 1178.0], [47.0, 1185.0], [47.1, 1193.0], [47.2, 1199.0], [47.3, 1200.0], [47.4, 1200.0], [47.5, 1202.0], [47.6, 1206.0], [47.7, 1219.0], [47.8, 1224.0], [47.9, 1228.0], [48.0, 1234.0], [48.1, 1236.0], [48.2, 1250.0], [48.3, 1252.0], [48.4, 1252.0], [48.5, 1256.0], [48.6, 1266.0], [48.7, 1267.0], [48.8, 1272.0], [48.9, 1274.0], [49.0, 1290.0], [49.1, 1294.0], [49.2, 1308.0], [49.3, 1310.0], [49.4, 1342.0], [49.5, 1378.0], [49.6, 1401.0], [49.7, 1425.0], [49.8, 1427.0], [49.9, 1436.0], [50.0, 1549.0], [50.1, 1557.0], [50.2, 1569.0], [50.3, 1647.0], [50.4, 1698.0], [50.5, 1780.0], [50.6, 1825.0], [50.7, 1848.0], [50.8, 1850.0], [50.9, 1877.0], [51.0, 1901.0], [51.1, 1920.0], [51.2, 1954.0], [51.3, 1990.0], [51.4, 1992.0], [51.5, 2001.0], [51.6, 2001.0], [51.7, 2001.0], [51.8, 2002.0], [51.9, 2002.0], [52.0, 2002.0], [52.1, 2002.0], [52.2, 2002.0], [52.3, 2002.0], [52.4, 2002.0], [52.5, 2002.0], [52.6, 2002.0], [52.7, 2003.0], [52.8, 2003.0], [52.9, 2004.0], [53.0, 2025.0], [53.1, 2025.0], [53.2, 2030.0], [53.3, 2032.0], [53.4, 2035.0], [53.5, 2036.0], [53.6, 2037.0], [53.7, 2037.0], [53.8, 2038.0], [53.9, 2038.0], [54.0, 2041.0], [54.1, 2043.0], [54.2, 2043.0], [54.3, 2044.0], [54.4, 2044.0], [54.5, 2044.0], [54.6, 2045.0], [54.7, 2046.0], [54.8, 2046.0], [54.9, 2050.0], [55.0, 2052.0], [55.1, 2055.0], [55.2, 2057.0], [55.3, 2061.0], [55.4, 2063.0], [55.5, 2064.0], [55.6, 2064.0], [55.7, 2064.0], [55.8, 2065.0], [55.9, 2066.0], [56.0, 2068.0], [56.1, 2070.0], [56.2, 2070.0], [56.3, 2071.0], [56.4, 2072.0], [56.5, 2072.0], [56.6, 2073.0], [56.7, 2074.0], [56.8, 2074.0], [56.9, 2078.0], [57.0, 2079.0], [57.1, 2086.0], [57.2, 2089.0], [57.3, 2098.0], [57.4, 2106.0], [57.5, 2106.0], [57.6, 2108.0], [57.7, 2108.0], [57.8, 2108.0], [57.9, 2108.0], [58.0, 2113.0], [58.1, 2115.0], [58.2, 2117.0], [58.3, 2120.0], [58.4, 2120.0], [58.5, 2135.0], [58.6, 2140.0], [58.7, 2148.0], [58.8, 2150.0], [58.9, 2152.0], [59.0, 2152.0], [59.1, 2174.0], [59.2, 2180.0], [59.3, 2185.0], [59.4, 2204.0], [59.5, 2205.0], [59.6, 2216.0], [59.7, 2219.0], [59.8, 2219.0], [59.9, 2237.0], [60.0, 2266.0], [60.1, 2275.0], [60.2, 2281.0], [60.3, 2301.0], [60.4, 2301.0], [60.5, 2311.0], [60.6, 2323.0], [60.7, 2331.0], [60.8, 2342.0], [60.9, 2356.0], [61.0, 2411.0], [61.1, 2427.0], [61.2, 2452.0], [61.3, 2483.0], [61.4, 2509.0], [61.5, 2539.0], [61.6, 2637.0], [61.7, 2664.0], [61.8, 2702.0], [61.9, 2807.0], [62.0, 2856.0], [62.1, 2884.0], [62.2, 2887.0], [62.3, 2898.0], [62.4, 2944.0], [62.5, 3000.0], [62.6, 3001.0], [62.7, 3001.0], [62.8, 3002.0], [62.9, 3002.0], [63.0, 3002.0], [63.1, 3002.0], [63.2, 3002.0], [63.3, 3002.0], [63.4, 3002.0], [63.5, 3003.0], [63.6, 3003.0], [63.7, 3004.0], [63.8, 3037.0], [63.9, 3039.0], [64.0, 3045.0], [64.1, 3046.0], [64.2, 3047.0], [64.3, 3050.0], [64.4, 3052.0], [64.5, 3056.0], [64.6, 3061.0], [64.7, 3062.0], [64.8, 3065.0], [64.9, 3065.0], [65.0, 3067.0], [65.1, 3067.0], [65.2, 3069.0], [65.3, 3072.0], [65.4, 3073.0], [65.5, 3077.0], [65.6, 3078.0], [65.7, 3084.0], [65.8, 3092.0], [65.9, 3095.0], [66.0, 3098.0], [66.1, 3100.0], [66.2, 3102.0], [66.3, 3103.0], [66.4, 3106.0], [66.5, 3109.0], [66.6, 3110.0], [66.7, 3110.0], [66.8, 3111.0], [66.9, 3113.0], [67.0, 3116.0], [67.1, 3117.0], [67.2, 3117.0], [67.3, 3121.0], [67.4, 3122.0], [67.5, 3128.0], [67.6, 3128.0], [67.7, 3135.0], [67.8, 3144.0], [67.9, 3153.0], [68.0, 3155.0], [68.1, 3162.0], [68.2, 3174.0], [68.3, 3176.0], [68.4, 3181.0], [68.5, 3183.0], [68.6, 3183.0], [68.7, 3187.0], [68.8, 3188.0], [68.9, 3189.0], [69.0, 3205.0], [69.1, 3209.0], [69.2, 3210.0], [69.3, 3212.0], [69.4, 3216.0], [69.5, 3235.0], [69.6, 3247.0], [69.7, 3250.0], [69.8, 3253.0], [69.9, 3257.0], [70.0, 3258.0], [70.1, 3284.0], [70.2, 3290.0], [70.3, 3293.0], [70.4, 3297.0], [70.5, 3318.0], [70.6, 3336.0], [70.7, 3347.0], [70.8, 3351.0], [70.9, 3354.0], [71.0, 3370.0], [71.1, 3370.0], [71.2, 3372.0], [71.3, 3375.0], [71.4, 3383.0], [71.5, 3384.0], [71.6, 3428.0], [71.7, 3471.0], [71.8, 3472.0], [71.9, 3618.0], [72.0, 3650.0], [72.1, 3750.0], [72.2, 3800.0], [72.3, 3805.0], [72.4, 3827.0], [72.5, 4002.0], [72.6, 4002.0], [72.7, 4003.0], [72.8, 4003.0], [72.9, 4004.0], [73.0, 4007.0], [73.1, 4034.0], [73.2, 4037.0], [73.3, 4047.0], [73.4, 4058.0], [73.5, 4058.0], [73.6, 4060.0], [73.7, 4065.0], [73.8, 4068.0], [73.9, 4068.0], [74.0, 4070.0], [74.1, 4094.0], [74.2, 4106.0], [74.3, 4106.0], [74.4, 4108.0], [74.5, 4113.0], [74.6, 4121.0], [74.7, 4136.0], [74.8, 4137.0], [74.9, 4147.0], [75.0, 4149.0], [75.1, 4151.0], [75.2, 4154.0], [75.3, 4157.0], [75.4, 4159.0], [75.5, 4161.0], [75.6, 4161.0], [75.7, 4167.0], [75.8, 4169.0], [75.9, 4169.0], [76.0, 4189.0], [76.1, 4191.0], [76.2, 4192.0], [76.3, 4195.0], [76.4, 4221.0], [76.5, 4237.0], [76.6, 4256.0], [76.7, 4257.0], [76.8, 4269.0], [76.9, 4270.0], [77.0, 4280.0], [77.1, 4286.0], [77.2, 4322.0], [77.3, 4345.0], [77.4, 4374.0], [77.5, 4390.0], [77.6, 4433.0], [77.7, 4527.0], [77.8, 4565.0], [77.9, 4596.0], [78.0, 4705.0], [78.1, 4743.0], [78.2, 4944.0], [78.3, 5003.0], [78.4, 5004.0], [78.5, 5032.0], [78.6, 5041.0], [78.7, 5047.0], [78.8, 5075.0], [78.9, 5076.0], [79.0, 5076.0], [79.1, 5080.0], [79.2, 5082.0], [79.3, 5082.0], [79.4, 5093.0], [79.5, 5099.0], [79.6, 5099.0], [79.7, 5108.0], [79.8, 5108.0], [79.9, 5122.0], [80.0, 5123.0], [80.1, 5130.0], [80.2, 5140.0], [80.3, 5150.0], [80.4, 5155.0], [80.5, 5166.0], [80.6, 5175.0], [80.7, 5182.0], [80.8, 5199.0], [80.9, 5209.0], [81.0, 5212.0], [81.1, 5215.0], [81.2, 5221.0], [81.3, 5226.0], [81.4, 5232.0], [81.5, 5237.0], [81.6, 5240.0], [81.7, 5296.0], [81.8, 5309.0], [81.9, 5337.0], [82.0, 5352.0], [82.1, 5397.0], [82.2, 5417.0], [82.3, 5477.0], [82.4, 5525.0], [82.5, 5532.0], [82.6, 5565.0], [82.7, 5574.0], [82.8, 5602.0], [82.9, 5652.0], [83.0, 5909.0], [83.1, 6007.0], [83.2, 6542.0], [83.3, 6583.0], [83.4, 6868.0], [83.5, 6984.0], [83.6, 7006.0], [83.7, 7059.0], [83.8, 7090.0], [83.9, 7103.0], [84.0, 7109.0], [84.1, 7134.0], [84.2, 7148.0], [84.3, 7155.0], [84.4, 7159.0], [84.5, 7171.0], [84.6, 7177.0], [84.7, 7177.0], [84.8, 7178.0], [84.9, 7186.0], [85.0, 7195.0], [85.1, 7207.0], [85.2, 7213.0], [85.3, 7217.0], [85.4, 7224.0], [85.5, 7233.0], [85.6, 7236.0], [85.7, 7252.0], [85.8, 7265.0], [85.9, 7287.0], [86.0, 7381.0], [86.1, 7454.0], [86.2, 7455.0], [86.3, 7467.0], [86.4, 7564.0], [86.5, 7681.0], [86.6, 7721.0], [86.7, 7784.0], [86.8, 7827.0], [86.9, 8121.0], [87.0, 8333.0], [87.1, 8457.0], [87.2, 9489.0], [87.3, 9762.0], [87.4, 10571.0], [87.5, 10636.0], [87.6, 11003.0], [87.7, 11006.0], [87.8, 11007.0], [87.9, 11135.0], [88.0, 11151.0], [88.1, 11183.0], [88.2, 11189.0], [88.3, 11203.0], [88.4, 11204.0], [88.5, 11211.0], [88.6, 11213.0], [88.7, 11221.0], [88.8, 11225.0], [88.9, 11225.0], [89.0, 11240.0], [89.1, 11251.0], [89.2, 11256.0], [89.3, 11261.0], [89.4, 11263.0], [89.5, 11269.0], [89.6, 11283.0], [89.7, 11286.0], [89.8, 11288.0], [89.9, 11299.0], [90.0, 11321.0], [90.1, 11337.0], [90.2, 11362.0], [90.3, 11367.0], [90.4, 11383.0], [90.5, 11431.0], [90.6, 11682.0], [90.7, 12215.0], [90.8, 12457.0], [90.9, 12461.0], [91.0, 12634.0], [91.1, 12965.0], [91.2, 13237.0], [91.3, 13339.0], [91.4, 13997.0], [91.5, 14070.0], [91.6, 16314.0], [91.7, 19157.0], [91.8, 19268.0], [91.9, 19276.0], [92.0, 19284.0], [92.1, 19295.0], [92.2, 19302.0], [92.3, 19313.0], [92.4, 19322.0], [92.5, 19323.0], [92.6, 19336.0], [92.7, 19339.0], [92.8, 19376.0], [92.9, 19391.0], [93.0, 19394.0], [93.1, 19399.0], [93.2, 19467.0], [93.3, 19469.0], [93.4, 19551.0], [93.5, 19575.0], [93.6, 19634.0], [93.7, 19637.0], [93.8, 19639.0], [93.9, 19652.0], [94.0, 19708.0], [94.1, 19970.0], [94.2, 20518.0], [94.3, 21082.0], [94.4, 21111.0], [94.5, 21342.0], [94.6, 22883.0], [94.7, 23113.0], [94.8, 23434.0], [94.9, 24316.0], [95.0, 35003.0], [95.1, 35003.0], [95.2, 35512.0], [95.3, 35686.0], [95.4, 35725.0], [95.5, 35785.0], [95.6, 35807.0], [95.7, 35872.0], [95.8, 35971.0], [95.9, 35997.0], [96.0, 36066.0], [96.1, 36128.0], [96.2, 36341.0], [96.3, 36398.0], [96.4, 36613.0], [96.5, 37209.0], [96.6, 37867.0], [96.7, 38023.0], [96.8, 38377.0], [96.9, 39213.0], [97.0, 39485.0], [97.1, 68718.0], [97.2, 68980.0], [97.3, 69284.0], [97.4, 69466.0], [97.5, 69727.0], [97.6, 70624.0], [97.7, 71581.0], [97.8, 72507.0], [97.9, 72962.0], [98.0, 75000.0], [98.1, 75000.0], [98.2, 75000.0], [98.3, 75000.0], [98.4, 75000.0], [98.5, 75000.0], [98.6, 75001.0], [98.7, 75001.0], [98.8, 75001.0], [98.9, 75001.0], [99.0, 75001.0], [99.1, 75001.0], [99.2, 75001.0], [99.3, 75001.0], [99.4, 75001.0], [99.5, 75001.0], [99.6, 75001.0], [99.7, 75002.0], [99.8, 75002.0], [99.9, 75002.0], [100.0, 75002.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 0.0, "maxY": 228.0, "series": [{"data": [[0.0, 228.0], [68700.0, 1.0], [71500.0, 1.0], [100.0, 49.0], [35500.0, 1.0], [35900.0, 2.0], [35700.0, 2.0], [36100.0, 1.0], [36300.0, 2.0], [38300.0, 1.0], [200.0, 23.0], [69400.0, 1.0], [70600.0, 1.0], [300.0, 7.0], [75000.0, 22.0], [400.0, 9.0], [500.0, 5.0], [600.0, 4.0], [700.0, 8.0], [900.0, 2.0], [1000.0, 130.0], [1100.0, 31.0], [1200.0, 20.0], [1300.0, 4.0], [1400.0, 5.0], [1500.0, 3.0], [1600.0, 2.0], [1700.0, 1.0], [1800.0, 4.0], [1900.0, 5.0], [2000.0, 62.0], [2100.0, 21.0], [2200.0, 10.0], [2300.0, 7.0], [2400.0, 4.0], [2500.0, 2.0], [2600.0, 2.0], [2700.0, 1.0], [2800.0, 6.0], [2900.0, 1.0], [3000.0, 38.0], [3100.0, 30.0], [3200.0, 16.0], [3300.0, 11.0], [3400.0, 3.0], [3600.0, 3.0], [3700.0, 1.0], [3800.0, 3.0], [4000.0, 18.0], [4100.0, 23.0], [4200.0, 8.0], [4300.0, 4.0], [68900.0, 1.0], [4400.0, 1.0], [4500.0, 3.0], [72900.0, 1.0], [72500.0, 1.0], [69700.0, 1.0], [4700.0, 3.0], [5000.0, 14.0], [5100.0, 13.0], [4900.0, 1.0], [5200.0, 9.0], [5300.0, 5.0], [5500.0, 4.0], [5400.0, 2.0], [5600.0, 2.0], [6000.0, 1.0], [5900.0, 1.0], [6500.0, 2.0], [6800.0, 1.0], [6900.0, 1.0], [7100.0, 13.0], [7000.0, 3.0], [7200.0, 9.0], [7400.0, 4.0], [7300.0, 1.0], [7600.0, 1.0], [7500.0, 1.0], [7700.0, 2.0], [7800.0, 1.0], [8100.0, 1.0], [8300.0, 1.0], [8400.0, 1.0], [9400.0, 1.0], [9700.0, 1.0], [10600.0, 1.0], [10500.0, 1.0], [11200.0, 17.0], [11100.0, 5.0], [11000.0, 3.0], [11300.0, 6.0], [11400.0, 1.0], [11600.0, 1.0], [12200.0, 1.0], [12400.0, 2.0], [12600.0, 1.0], [13200.0, 1.0], [12900.0, 1.0], [13300.0, 1.0], [13900.0, 1.0], [14000.0, 1.0], [16300.0, 1.0], [19300.0, 10.0], [19200.0, 5.0], [19100.0, 1.0], [19400.0, 2.0], [19500.0, 2.0], [19600.0, 4.0], [19700.0, 2.0], [19900.0, 1.0], [20500.0, 1.0], [21000.0, 1.0], [21300.0, 1.0], [21100.0, 1.0], [23100.0, 1.0], [22800.0, 1.0], [23400.0, 1.0], [24300.0, 1.0], [35800.0, 2.0], [35000.0, 2.0], [36600.0, 1.0], [36000.0, 2.0], [35600.0, 1.0], [37200.0, 1.0], [38000.0, 1.0], [37800.0, 1.0], [39200.0, 1.0], [39400.0, 1.0], [69200.0, 1.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 75000.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 100.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 462.0, "series": [{"data": [[0.0, 306.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 182.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 462.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [[3.0, 100.0]], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 3.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 1.5, "minX": 1.71575706E12, "maxY": 113.6753100338219, "series": [{"data": [[1.71575706E12, 113.6753100338219], [1.71575724E12, 1.5], [1.71575712E12, 31.017857142857146], [1.71575718E12, 11.808510638297872]], "isOverall": false, "label": "Thread Group", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.71575724E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 71.33333333333334, "minX": 1.0, "maxY": 75001.0, "series": [{"data": [[2.0, 26303.333333333336], [3.0, 3284.0], [4.0, 4527.0], [5.0, 75000.0], [6.0, 35126.0], [7.0, 5047.0], [8.0, 5032.0], [9.0, 14563.0], [10.0, 4711.0], [11.0, 4349.0], [12.0, 6556.5], [13.0, 23031.0], [14.0, 23434.0], [15.0, 31048.0], [16.0, 21537.0], [17.0, 22227.5], [18.0, 75001.0], [19.0, 3934.0], [20.0, 4280.0], [21.0, 8585.5], [22.0, 24560.5], [23.0, 42306.5], [24.0, 17337.833333333332], [25.0, 40538.24137931034], [26.0, 61085.75], [27.0, 1992.0], [28.0, 2689.5], [29.0, 4112.0], [30.0, 7800.142857142857], [31.0, 2190.5], [33.0, 1935.75], [32.0, 3797.0], [34.0, 5709.666666666667], [35.0, 484.6666666666667], [36.0, 18609.0], [37.0, 4678.166666666667], [38.0, 6844.333333333333], [39.0, 3352.25], [40.0, 2499.2], [41.0, 4562.333333333333], [42.0, 1483.0], [43.0, 2918.3], [44.0, 9960.300000000001], [45.0, 16455.666666666668], [46.0, 3367.222222222222], [47.0, 22440.352941176472], [48.0, 615.75], [49.0, 11759.25], [50.0, 170.75], [51.0, 2453.75], [52.0, 10343.0], [53.0, 1434.5], [54.0, 789.5], [55.0, 9043.666666666668], [56.0, 1993.6666666666665], [57.0, 4789.166666666667], [58.0, 708.5], [59.0, 1142.4285714285713], [60.0, 8046.8], [61.0, 260.5], [63.0, 4619.0], [62.0, 514.0], [65.0, 4860.25], [66.0, 835.0], [67.0, 4703.600000000001], [64.0, 270.0], [68.0, 6139.375000000001], [69.0, 2047.5], [71.0, 3253.0], [70.0, 10087.5], [73.0, 218.5], [74.0, 111.0], [75.0, 9670.0], [72.0, 10721.0], [76.0, 1113.5], [77.0, 2105.5], [78.0, 1257.3333333333333], [79.0, 7237.2], [81.0, 5675.0], [82.0, 1130.0], [83.0, 4636.583333333333], [80.0, 1278.0], [86.0, 71.75], [87.0, 3572.75], [85.0, 8584.0], [84.0, 8129.0], [88.0, 2730.2], [90.0, 4054.142857142857], [91.0, 1601.0], [89.0, 317.0], [92.0, 4130.666666666667], [94.0, 568.5], [95.0, 3998.2], [93.0, 2960.9333333333334], [96.0, 5948.888888888889], [98.0, 3179.0], [99.0, 1718.5], [97.0, 1310.0], [100.0, 2165.714285714286], [101.0, 2770.625], [102.0, 1168.6666666666665], [103.0, 5215.0], [104.0, 384.0], [105.0, 8124.6], [107.0, 188.5], [106.0, 11286.0], [108.0, 4195.444444444444], [110.0, 2532.9166666666665], [111.0, 1166.5], [109.0, 245.0], [112.0, 5092.0], [115.0, 4233.625], [114.0, 5222.0], [113.0, 5068.666666666667], [116.0, 2884.5], [117.0, 2610.0], [118.0, 1293.25], [119.0, 2970.833333333333], [121.0, 1813.25], [123.0, 2408.6666666666665], [122.0, 2091.0], [120.0, 5209.0], [125.0, 1122.5], [127.0, 2163.0], [126.0, 135.0], [124.0, 2733.6], [129.0, 71.33333333333334], [131.0, 1073.0], [133.0, 1795.583333333333], [134.0, 2019.2857142857142], [135.0, 2787.0000000000005], [132.0, 2091.75], [130.0, 2628.1875], [128.0, 1200.0], [136.0, 780.2857142857143], [137.0, 2081.5], [138.0, 1534.5624999999998], [140.0, 1728.5555555555557], [142.0, 1229.2631578947367], [143.0, 2201.142857142857], [141.0, 2024.8333333333326], [139.0, 2530.8571428571427], [144.0, 972.2173913043478], [147.0, 1387.8484848484845], [148.0, 1137.9], [150.0, 809.2411347517731], [149.0, 1105.7058823529414], [146.0, 1488.3333333333333], [145.0, 2390.6666666666665], [1.0, 2584.0]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[99.87142857142857, 5743.733333333335]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 150.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 7.733333333333333, "minX": 1.71575706E12, "maxY": 5970.4, "series": [{"data": [[1.71575706E12, 5970.4], [1.71575724E12, 9.8], [1.71575712E12, 1201.9666666666667], [1.71575718E12, 243.6]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.71575706E12, 1569.8666666666666], [1.71575724E12, 7.733333333333333], [1.71575712E12, 174.0], [1.71575718E12, 85.06666666666666]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.71575724E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 2994.0710259301027, "minX": 1.71575706E12, "maxY": 21128.83928571428, "series": [{"data": [[1.71575706E12, 2994.0710259301027], [1.71575724E12, 20115.0], [1.71575712E12, 21128.83928571428], [1.71575718E12, 19750.829787234044]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.71575724E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 2742.8275084554675, "minX": 1.71575706E12, "maxY": 20115.0, "series": [{"data": [[1.71575706E12, 2742.8275084554675], [1.71575724E12, 20115.0], [1.71575712E12, 8271.38392857143], [1.71575718E12, 14963.553191489362]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.71575724E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 2887.6268320180384, "minX": 1.71575706E12, "maxY": 19942.8125, "series": [{"data": [[1.71575706E12, 2887.6268320180384], [1.71575724E12, 17619.25], [1.71575712E12, 19942.8125], [1.71575718E12, 17288.276595744675]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.71575724E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 5.0, "minX": 1.71575706E12, "maxY": 72962.0, "series": [{"data": [[1.71575706E12, 36341.0], [1.71575724E12, 69727.0], [1.71575712E12, 70624.0], [1.71575718E12, 72962.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.71575706E12, 5.0], [1.71575724E12, 1850.0], [1.71575712E12, 930.0], [1.71575718E12, 2266.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.71575706E12, 7230.3], [1.71575724E12, 69727.0], [1.71575712E12, 34895.500000000065], [1.71575718E12, 39349.0]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.71575706E12, 35777.2], [1.71575724E12, 69727.0], [1.71575712E12, 70624.0], [1.71575718E12, 72962.0]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.71575706E12, 1067.0], [1.71575724E12, 4441.5], [1.71575712E12, 4063.0], [1.71575718E12, 5588.0]], "isOverall": false, "label": "Median", "isController": false}, {"data": [[1.71575706E12, 11399.799999999996], [1.71575724E12, 69727.0], [1.71575712E12, 68835.9], [1.71575718E12, 72275.5]], "isOverall": false, "label": "95th percentile", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.71575724E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 17.0, "minX": 1.0, "maxY": 75001.0, "series": [{"data": [[2.0, 5170.5], [45.0, 2130.5], [47.0, 1591.0], [3.0, 3750.0], [56.0, 1054.0], [4.0, 5076.0], [74.0, 1073.5], [5.0, 1990.0], [87.0, 1032.0], [6.0, 6499.5], [7.0, 2539.0], [8.0, 1520.0], [151.0, 17.0], [10.0, 5397.0], [11.0, 2912.0], [12.0, 4374.0], [13.0, 1231.0], [14.0, 4195.0], [15.0, 2233.0], [16.0, 5240.0], [1.0, 5569.5], [18.0, 3188.0], [21.0, 3212.0], [26.0, 1139.0], [27.0, 3168.0], [28.0, 2118.5], [29.0, 2063.0], [31.0, 1185.0]], "isOverall": false, "label": "Successes", "isController": false}, {"data": [[2.0, 75000.0], [45.0, 3002.0], [47.0, 2002.0], [3.0, 75001.0], [56.0, 3001.0], [4.0, 75001.0], [74.0, 1001.5], [5.0, 75001.0], [87.0, 1001.5], [6.0, 35003.0], [7.0, 2002.0], [151.0, 152.0], [10.0, 7006.0], [11.0, 2502.5], [12.0, 2002.0], [14.0, 1003.0], [15.0, 3000.0], [16.0, 11007.0], [1.0, 75001.0], [18.0, 1001.0], [21.0, 6002.0], [26.0, 2502.5], [27.0, 3002.0], [29.0, 2002.0], [31.0, 3003.5]], "isOverall": false, "label": "Failures", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 151.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 0.0, "minX": 1.0, "maxY": 6499.5, "series": [{"data": [[2.0, 5170.5], [45.0, 2130.5], [47.0, 1591.0], [3.0, 3750.0], [56.0, 1054.0], [4.0, 5076.0], [74.0, 1073.5], [5.0, 1990.0], [87.0, 1032.0], [6.0, 6499.5], [7.0, 2539.0], [8.0, 1520.0], [151.0, 17.0], [10.0, 5397.0], [11.0, 2912.0], [12.0, 4374.0], [13.0, 1231.0], [14.0, 4195.0], [15.0, 2233.0], [16.0, 5240.0], [1.0, 5569.0], [18.0, 3188.0], [21.0, 3211.0], [26.0, 1138.5], [27.0, 3167.5], [28.0, 2118.5], [29.0, 2062.0], [31.0, 1185.0]], "isOverall": false, "label": "Successes", "isController": false}, {"data": [[2.0, 0.0], [45.0, 0.0], [47.0, 0.0], [3.0, 0.0], [56.0, 0.0], [4.0, 0.0], [74.0, 0.0], [5.0, 0.0], [87.0, 0.0], [6.0, 0.0], [7.0, 0.0], [151.0, 0.0], [10.0, 0.0], [11.0, 0.0], [12.0, 0.0], [14.0, 0.0], [15.0, 0.0], [16.0, 0.0], [1.0, 0.0], [18.0, 0.0], [21.0, 0.0], [26.0, 0.0], [27.0, 0.0], [29.0, 0.0], [31.0, 0.0]], "isOverall": false, "label": "Failures", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 151.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 0.03333333333333333, "minX": 1.71575706E12, "maxY": 15.516666666666667, "series": [{"data": [[1.71575706E12, 15.516666666666667], [1.71575724E12, 0.03333333333333333], [1.71575712E12, 1.5], [1.71575718E12, 0.45]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.71575724E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 0.05, "minX": 1.71575706E12, "maxY": 13.533333333333333, "series": [{"data": [[1.71575706E12, 13.533333333333333], [1.71575724E12, 0.06666666666666667], [1.71575712E12, 1.5], [1.71575718E12, 0.7333333333333333]], "isOverall": false, "label": "200", "isController": false}, {"data": [[1.71575712E12, 0.31666666666666665], [1.71575718E12, 0.05]], "isOverall": false, "label": "Non HTTP response code: org.apache.http.conn.HttpHostConnectException", "isController": false}, {"data": [[1.71575706E12, 1.25], [1.71575712E12, 0.05]], "isOverall": false, "label": "Non HTTP response code: java.net.SocketException", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.71575724E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 0.05, "minX": 1.71575706E12, "maxY": 13.533333333333333, "series": [{"data": [[1.71575706E12, 1.25], [1.71575712E12, 0.36666666666666664], [1.71575718E12, 0.05]], "isOverall": false, "label": "HTTP Request-failure", "isController": false}, {"data": [[1.71575706E12, 13.533333333333333], [1.71575724E12, 0.06666666666666667], [1.71575712E12, 1.5], [1.71575718E12, 0.7333333333333333]], "isOverall": false, "label": "HTTP Request-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.71575724E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 0.05, "minX": 1.71575706E12, "maxY": 13.533333333333333, "series": [{"data": [[1.71575706E12, 13.533333333333333], [1.71575724E12, 0.06666666666666667], [1.71575712E12, 1.5], [1.71575718E12, 0.7333333333333333]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [[1.71575706E12, 1.25], [1.71575712E12, 0.36666666666666664], [1.71575718E12, 0.05]], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.71575724E12, "title": "Total Transactions Per Second"}},
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

