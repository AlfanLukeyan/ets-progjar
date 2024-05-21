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
        data: {"result": {"minY": 1.0, "minX": 0.0, "maxY": 75004.0, "series": [{"data": [[0.0, 1.0], [0.1, 1.0], [0.2, 1.0], [0.3, 2.0], [0.4, 2.0], [0.5, 2.0], [0.6, 6.0], [0.7, 6.0], [0.8, 6.0], [0.9, 7.0], [1.0, 7.0], [1.1, 7.0], [1.2, 8.0], [1.3, 8.0], [1.4, 8.0], [1.5, 9.0], [1.6, 9.0], [1.7, 9.0], [1.8, 9.0], [1.9, 9.0], [2.0, 9.0], [2.1, 9.0], [2.2, 9.0], [2.3, 9.0], [2.4, 10.0], [2.5, 10.0], [2.6, 10.0], [2.7, 10.0], [2.8, 11.0], [2.9, 11.0], [3.0, 11.0], [3.1, 12.0], [3.2, 12.0], [3.3, 12.0], [3.4, 12.0], [3.5, 13.0], [3.6, 13.0], [3.7, 13.0], [3.8, 14.0], [3.9, 14.0], [4.0, 14.0], [4.1, 15.0], [4.2, 15.0], [4.3, 15.0], [4.4, 15.0], [4.5, 15.0], [4.6, 15.0], [4.7, 15.0], [4.8, 15.0], [4.9, 15.0], [5.0, 16.0], [5.1, 16.0], [5.2, 16.0], [5.3, 16.0], [5.4, 16.0], [5.5, 16.0], [5.6, 16.0], [5.7, 16.0], [5.8, 16.0], [5.9, 16.0], [6.0, 16.0], [6.1, 16.0], [6.2, 17.0], [6.3, 17.0], [6.4, 17.0], [6.5, 17.0], [6.6, 17.0], [6.7, 18.0], [6.8, 18.0], [6.9, 18.0], [7.0, 18.0], [7.1, 18.0], [7.2, 18.0], [7.3, 18.0], [7.4, 19.0], [7.5, 19.0], [7.6, 19.0], [7.7, 20.0], [7.8, 20.0], [7.9, 20.0], [8.0, 21.0], [8.1, 21.0], [8.2, 21.0], [8.3, 21.0], [8.4, 21.0], [8.5, 21.0], [8.6, 21.0], [8.7, 21.0], [8.8, 21.0], [8.9, 21.0], [9.0, 22.0], [9.1, 22.0], [9.2, 22.0], [9.3, 22.0], [9.4, 22.0], [9.5, 23.0], [9.6, 23.0], [9.7, 23.0], [9.8, 23.0], [9.9, 23.0], [10.0, 23.0], [10.1, 23.0], [10.2, 23.0], [10.3, 24.0], [10.4, 24.0], [10.5, 24.0], [10.6, 24.0], [10.7, 24.0], [10.8, 24.0], [10.9, 25.0], [11.0, 25.0], [11.1, 25.0], [11.2, 25.0], [11.3, 25.0], [11.4, 25.0], [11.5, 25.0], [11.6, 26.0], [11.7, 26.0], [11.8, 26.0], [11.9, 26.0], [12.0, 26.0], [12.1, 27.0], [12.2, 27.0], [12.3, 28.0], [12.4, 29.0], [12.5, 29.0], [12.6, 29.0], [12.7, 30.0], [12.8, 30.0], [12.9, 31.0], [13.0, 31.0], [13.1, 32.0], [13.2, 33.0], [13.3, 33.0], [13.4, 34.0], [13.5, 34.0], [13.6, 34.0], [13.7, 34.0], [13.8, 35.0], [13.9, 35.0], [14.0, 35.0], [14.1, 36.0], [14.2, 36.0], [14.3, 37.0], [14.4, 37.0], [14.5, 39.0], [14.6, 39.0], [14.7, 39.0], [14.8, 39.0], [14.9, 41.0], [15.0, 42.0], [15.1, 42.0], [15.2, 42.0], [15.3, 43.0], [15.4, 43.0], [15.5, 44.0], [15.6, 45.0], [15.7, 45.0], [15.8, 46.0], [15.9, 46.0], [16.0, 46.0], [16.1, 48.0], [16.2, 48.0], [16.3, 49.0], [16.4, 49.0], [16.5, 50.0], [16.6, 50.0], [16.7, 50.0], [16.8, 52.0], [16.9, 52.0], [17.0, 53.0], [17.1, 55.0], [17.2, 55.0], [17.3, 57.0], [17.4, 57.0], [17.5, 57.0], [17.6, 59.0], [17.7, 59.0], [17.8, 59.0], [17.9, 61.0], [18.0, 61.0], [18.1, 61.0], [18.2, 61.0], [18.3, 61.0], [18.4, 63.0], [18.5, 64.0], [18.6, 67.0], [18.7, 73.0], [18.8, 74.0], [18.9, 74.0], [19.0, 75.0], [19.1, 76.0], [19.2, 76.0], [19.3, 78.0], [19.4, 80.0], [19.5, 80.0], [19.6, 83.0], [19.7, 84.0], [19.8, 86.0], [19.9, 89.0], [20.0, 90.0], [20.1, 92.0], [20.2, 92.0], [20.3, 93.0], [20.4, 93.0], [20.5, 93.0], [20.6, 93.0], [20.7, 95.0], [20.8, 95.0], [20.9, 97.0], [21.0, 97.0], [21.1, 100.0], [21.2, 103.0], [21.3, 106.0], [21.4, 107.0], [21.5, 108.0], [21.6, 110.0], [21.7, 111.0], [21.8, 114.0], [21.9, 115.0], [22.0, 118.0], [22.1, 118.0], [22.2, 121.0], [22.3, 121.0], [22.4, 125.0], [22.5, 130.0], [22.6, 134.0], [22.7, 136.0], [22.8, 144.0], [22.9, 145.0], [23.0, 149.0], [23.1, 152.0], [23.2, 152.0], [23.3, 153.0], [23.4, 153.0], [23.5, 157.0], [23.6, 162.0], [23.7, 162.0], [23.8, 162.0], [23.9, 162.0], [24.0, 162.0], [24.1, 162.0], [24.2, 163.0], [24.3, 163.0], [24.4, 164.0], [24.5, 165.0], [24.6, 169.0], [24.7, 177.0], [24.8, 178.0], [24.9, 184.0], [25.0, 184.0], [25.1, 190.0], [25.2, 191.0], [25.3, 192.0], [25.4, 193.0], [25.5, 195.0], [25.6, 202.0], [25.7, 208.0], [25.8, 210.0], [25.9, 211.0], [26.0, 212.0], [26.1, 219.0], [26.2, 221.0], [26.3, 226.0], [26.4, 237.0], [26.5, 239.0], [26.6, 252.0], [26.7, 255.0], [26.8, 259.0], [26.9, 268.0], [27.0, 277.0], [27.1, 280.0], [27.2, 281.0], [27.3, 287.0], [27.4, 288.0], [27.5, 294.0], [27.6, 296.0], [27.7, 299.0], [27.8, 300.0], [27.9, 312.0], [28.0, 331.0], [28.1, 338.0], [28.2, 343.0], [28.3, 345.0], [28.4, 350.0], [28.5, 350.0], [28.6, 352.0], [28.7, 355.0], [28.8, 356.0], [28.9, 360.0], [29.0, 361.0], [29.1, 365.0], [29.2, 371.0], [29.3, 372.0], [29.4, 377.0], [29.5, 392.0], [29.6, 393.0], [29.7, 405.0], [29.8, 439.0], [29.9, 449.0], [30.0, 499.0], [30.1, 501.0], [30.2, 506.0], [30.3, 510.0], [30.4, 521.0], [30.5, 565.0], [30.6, 569.0], [30.7, 584.0], [30.8, 607.0], [30.9, 628.0], [31.0, 640.0], [31.1, 650.0], [31.2, 660.0], [31.3, 669.0], [31.4, 675.0], [31.5, 684.0], [31.6, 756.0], [31.7, 810.0], [31.8, 827.0], [31.9, 845.0], [32.0, 894.0], [32.1, 898.0], [32.2, 943.0], [32.3, 953.0], [32.4, 1000.0], [32.5, 1000.0], [32.6, 1000.0], [32.7, 1001.0], [32.8, 1001.0], [32.9, 1001.0], [33.0, 1001.0], [33.1, 1001.0], [33.2, 1001.0], [33.3, 1001.0], [33.4, 1001.0], [33.5, 1001.0], [33.6, 1001.0], [33.7, 1001.0], [33.8, 1001.0], [33.9, 1002.0], [34.0, 1002.0], [34.1, 1002.0], [34.2, 1002.0], [34.3, 1003.0], [34.4, 1003.0], [34.5, 1003.0], [34.6, 1003.0], [34.7, 1005.0], [34.8, 1015.0], [34.9, 1016.0], [35.0, 1017.0], [35.1, 1017.0], [35.2, 1017.0], [35.3, 1018.0], [35.4, 1018.0], [35.5, 1018.0], [35.6, 1019.0], [35.7, 1021.0], [35.8, 1021.0], [35.9, 1022.0], [36.0, 1023.0], [36.1, 1023.0], [36.2, 1023.0], [36.3, 1024.0], [36.4, 1024.0], [36.5, 1024.0], [36.6, 1025.0], [36.7, 1025.0], [36.8, 1025.0], [36.9, 1026.0], [37.0, 1027.0], [37.1, 1027.0], [37.2, 1029.0], [37.3, 1029.0], [37.4, 1029.0], [37.5, 1030.0], [37.6, 1030.0], [37.7, 1030.0], [37.8, 1031.0], [37.9, 1032.0], [38.0, 1032.0], [38.1, 1032.0], [38.2, 1033.0], [38.3, 1033.0], [38.4, 1033.0], [38.5, 1034.0], [38.6, 1034.0], [38.7, 1036.0], [38.8, 1036.0], [38.9, 1036.0], [39.0, 1036.0], [39.1, 1036.0], [39.2, 1037.0], [39.3, 1037.0], [39.4, 1037.0], [39.5, 1038.0], [39.6, 1038.0], [39.7, 1039.0], [39.8, 1042.0], [39.9, 1042.0], [40.0, 1044.0], [40.1, 1044.0], [40.2, 1044.0], [40.3, 1044.0], [40.4, 1044.0], [40.5, 1044.0], [40.6, 1045.0], [40.7, 1045.0], [40.8, 1045.0], [40.9, 1046.0], [41.0, 1046.0], [41.1, 1046.0], [41.2, 1048.0], [41.3, 1049.0], [41.4, 1051.0], [41.5, 1051.0], [41.6, 1052.0], [41.7, 1053.0], [41.8, 1053.0], [41.9, 1056.0], [42.0, 1056.0], [42.1, 1056.0], [42.2, 1057.0], [42.3, 1058.0], [42.4, 1058.0], [42.5, 1058.0], [42.6, 1059.0], [42.7, 1059.0], [42.8, 1059.0], [42.9, 1059.0], [43.0, 1059.0], [43.1, 1059.0], [43.2, 1060.0], [43.3, 1060.0], [43.4, 1062.0], [43.5, 1062.0], [43.6, 1064.0], [43.7, 1064.0], [43.8, 1067.0], [43.9, 1068.0], [44.0, 1069.0], [44.1, 1071.0], [44.2, 1072.0], [44.3, 1072.0], [44.4, 1073.0], [44.5, 1073.0], [44.6, 1074.0], [44.7, 1076.0], [44.8, 1077.0], [44.9, 1077.0], [45.0, 1080.0], [45.1, 1082.0], [45.2, 1085.0], [45.3, 1085.0], [45.4, 1085.0], [45.5, 1088.0], [45.6, 1089.0], [45.7, 1091.0], [45.8, 1092.0], [45.9, 1093.0], [46.0, 1094.0], [46.1, 1096.0], [46.2, 1098.0], [46.3, 1103.0], [46.4, 1107.0], [46.5, 1107.0], [46.6, 1108.0], [46.7, 1109.0], [46.8, 1111.0], [46.9, 1111.0], [47.0, 1115.0], [47.1, 1116.0], [47.2, 1120.0], [47.3, 1123.0], [47.4, 1127.0], [47.5, 1134.0], [47.6, 1136.0], [47.7, 1139.0], [47.8, 1139.0], [47.9, 1151.0], [48.0, 1154.0], [48.1, 1160.0], [48.2, 1162.0], [48.3, 1175.0], [48.4, 1181.0], [48.5, 1190.0], [48.6, 1190.0], [48.7, 1192.0], [48.8, 1194.0], [48.9, 1198.0], [49.0, 1202.0], [49.1, 1206.0], [49.2, 1211.0], [49.3, 1231.0], [49.4, 1247.0], [49.5, 1249.0], [49.6, 1267.0], [49.7, 1273.0], [49.8, 1274.0], [49.9, 1295.0], [50.0, 1296.0], [50.1, 1299.0], [50.2, 1301.0], [50.3, 1304.0], [50.4, 1313.0], [50.5, 1324.0], [50.6, 1324.0], [50.7, 1327.0], [50.8, 1330.0], [50.9, 1336.0], [51.0, 1336.0], [51.1, 1340.0], [51.2, 1360.0], [51.3, 1368.0], [51.4, 1377.0], [51.5, 1404.0], [51.6, 1439.0], [51.7, 1538.0], [51.8, 1557.0], [51.9, 1576.0], [52.0, 1597.0], [52.1, 1721.0], [52.2, 1779.0], [52.3, 1839.0], [52.4, 1960.0], [52.5, 1966.0], [52.6, 2000.0], [52.7, 2000.0], [52.8, 2000.0], [52.9, 2001.0], [53.0, 2002.0], [53.1, 2002.0], [53.2, 2002.0], [53.3, 2002.0], [53.4, 2002.0], [53.5, 2002.0], [53.6, 2002.0], [53.7, 2002.0], [53.8, 2003.0], [53.9, 2003.0], [54.0, 2003.0], [54.1, 2004.0], [54.2, 2022.0], [54.3, 2028.0], [54.4, 2028.0], [54.5, 2030.0], [54.6, 2031.0], [54.7, 2031.0], [54.8, 2031.0], [54.9, 2034.0], [55.0, 2040.0], [55.1, 2041.0], [55.2, 2042.0], [55.3, 2042.0], [55.4, 2044.0], [55.5, 2046.0], [55.6, 2046.0], [55.7, 2047.0], [55.8, 2048.0], [55.9, 2050.0], [56.0, 2050.0], [56.1, 2050.0], [56.2, 2052.0], [56.3, 2055.0], [56.4, 2057.0], [56.5, 2057.0], [56.6, 2057.0], [56.7, 2058.0], [56.8, 2061.0], [56.9, 2062.0], [57.0, 2063.0], [57.1, 2065.0], [57.2, 2067.0], [57.3, 2069.0], [57.4, 2069.0], [57.5, 2069.0], [57.6, 2069.0], [57.7, 2070.0], [57.8, 2072.0], [57.9, 2073.0], [58.0, 2079.0], [58.1, 2085.0], [58.2, 2087.0], [58.3, 2087.0], [58.4, 2090.0], [58.5, 2090.0], [58.6, 2090.0], [58.7, 2091.0], [58.8, 2092.0], [58.9, 2093.0], [59.0, 2093.0], [59.1, 2095.0], [59.2, 2096.0], [59.3, 2101.0], [59.4, 2104.0], [59.5, 2104.0], [59.6, 2105.0], [59.7, 2109.0], [59.8, 2111.0], [59.9, 2111.0], [60.0, 2114.0], [60.1, 2116.0], [60.2, 2118.0], [60.3, 2122.0], [60.4, 2127.0], [60.5, 2129.0], [60.6, 2129.0], [60.7, 2131.0], [60.8, 2132.0], [60.9, 2133.0], [61.0, 2135.0], [61.1, 2139.0], [61.2, 2141.0], [61.3, 2148.0], [61.4, 2152.0], [61.5, 2153.0], [61.6, 2158.0], [61.7, 2162.0], [61.8, 2171.0], [61.9, 2173.0], [62.0, 2175.0], [62.1, 2180.0], [62.2, 2181.0], [62.3, 2190.0], [62.4, 2191.0], [62.5, 2218.0], [62.6, 2219.0], [62.7, 2223.0], [62.8, 2227.0], [62.9, 2230.0], [63.0, 2247.0], [63.1, 2257.0], [63.2, 2263.0], [63.3, 2272.0], [63.4, 2297.0], [63.5, 2299.0], [63.6, 2308.0], [63.7, 2330.0], [63.8, 2336.0], [63.9, 2370.0], [64.0, 2419.0], [64.1, 2435.0], [64.2, 2472.0], [64.3, 2474.0], [64.4, 2493.0], [64.5, 2494.0], [64.6, 2504.0], [64.7, 2513.0], [64.8, 2520.0], [64.9, 2609.0], [65.0, 2651.0], [65.1, 2671.0], [65.2, 2703.0], [65.3, 2734.0], [65.4, 2742.0], [65.5, 2748.0], [65.6, 2762.0], [65.7, 2837.0], [65.8, 2845.0], [65.9, 2868.0], [66.0, 2873.0], [66.1, 2915.0], [66.2, 2955.0], [66.3, 2970.0], [66.4, 3001.0], [66.5, 3002.0], [66.6, 3003.0], [66.7, 3003.0], [66.8, 3017.0], [66.9, 3030.0], [67.0, 3041.0], [67.1, 3042.0], [67.2, 3044.0], [67.3, 3045.0], [67.4, 3045.0], [67.5, 3046.0], [67.6, 3051.0], [67.7, 3053.0], [67.8, 3053.0], [67.9, 3055.0], [68.0, 3056.0], [68.1, 3063.0], [68.2, 3067.0], [68.3, 3068.0], [68.4, 3073.0], [68.5, 3075.0], [68.6, 3076.0], [68.7, 3080.0], [68.8, 3080.0], [68.9, 3081.0], [69.0, 3085.0], [69.1, 3088.0], [69.2, 3088.0], [69.3, 3089.0], [69.4, 3093.0], [69.5, 3095.0], [69.6, 3095.0], [69.7, 3099.0], [69.8, 3109.0], [69.9, 3111.0], [70.0, 3115.0], [70.1, 3118.0], [70.2, 3123.0], [70.3, 3131.0], [70.4, 3134.0], [70.5, 3134.0], [70.6, 3136.0], [70.7, 3138.0], [70.8, 3140.0], [70.9, 3150.0], [71.0, 3152.0], [71.1, 3163.0], [71.2, 3164.0], [71.3, 3171.0], [71.4, 3173.0], [71.5, 3175.0], [71.6, 3189.0], [71.7, 3217.0], [71.8, 3219.0], [71.9, 3278.0], [72.0, 3280.0], [72.1, 3282.0], [72.2, 3302.0], [72.3, 3306.0], [72.4, 3359.0], [72.5, 3377.0], [72.6, 3386.0], [72.7, 3401.0], [72.8, 3461.0], [72.9, 3476.0], [73.0, 3559.0], [73.1, 3646.0], [73.2, 3808.0], [73.3, 3854.0], [73.4, 3874.0], [73.5, 3930.0], [73.6, 4003.0], [73.7, 4004.0], [73.8, 4040.0], [73.9, 4056.0], [74.0, 4057.0], [74.1, 4061.0], [74.2, 4064.0], [74.3, 4065.0], [74.4, 4066.0], [74.5, 4068.0], [74.6, 4071.0], [74.7, 4075.0], [74.8, 4078.0], [74.9, 4078.0], [75.0, 4079.0], [75.1, 4086.0], [75.2, 4095.0], [75.3, 4098.0], [75.4, 4104.0], [75.5, 4104.0], [75.6, 4109.0], [75.7, 4110.0], [75.8, 4113.0], [75.9, 4119.0], [76.0, 4129.0], [76.1, 4131.0], [76.2, 4136.0], [76.3, 4145.0], [76.4, 4147.0], [76.5, 4165.0], [76.6, 4166.0], [76.7, 4167.0], [76.8, 4176.0], [76.9, 4181.0], [77.0, 4182.0], [77.1, 4189.0], [77.2, 4213.0], [77.3, 4218.0], [77.4, 4253.0], [77.5, 4281.0], [77.6, 4282.0], [77.7, 4287.0], [77.8, 4329.0], [77.9, 4362.0], [78.0, 4407.0], [78.1, 4496.0], [78.2, 4669.0], [78.3, 5001.0], [78.4, 5003.0], [78.5, 5004.0], [78.6, 5071.0], [78.7, 5071.0], [78.8, 5075.0], [78.9, 5077.0], [79.0, 5079.0], [79.1, 5092.0], [79.2, 5092.0], [79.3, 5098.0], [79.4, 5101.0], [79.5, 5108.0], [79.6, 5108.0], [79.7, 5111.0], [79.8, 5114.0], [79.9, 5123.0], [80.0, 5128.0], [80.1, 5132.0], [80.2, 5132.0], [80.3, 5137.0], [80.4, 5138.0], [80.5, 5157.0], [80.6, 5162.0], [80.7, 5164.0], [80.8, 5173.0], [80.9, 5179.0], [81.0, 5183.0], [81.1, 5202.0], [81.2, 5204.0], [81.3, 5205.0], [81.4, 5228.0], [81.5, 5248.0], [81.6, 5309.0], [81.7, 5458.0], [81.8, 5535.0], [81.9, 5613.0], [82.0, 5779.0], [82.1, 5779.0], [82.2, 5806.0], [82.3, 5913.0], [82.4, 5917.0], [82.5, 6001.0], [82.6, 6027.0], [82.7, 6104.0], [82.8, 6120.0], [82.9, 6161.0], [83.0, 6369.0], [83.1, 6397.0], [83.2, 6543.0], [83.3, 6925.0], [83.4, 7005.0], [83.5, 7005.0], [83.6, 7054.0], [83.7, 7054.0], [83.8, 7070.0], [83.9, 7080.0], [84.0, 7097.0], [84.1, 7100.0], [84.2, 7121.0], [84.3, 7124.0], [84.4, 7125.0], [84.5, 7131.0], [84.6, 7163.0], [84.7, 7166.0], [84.8, 7167.0], [84.9, 7168.0], [85.0, 7169.0], [85.1, 7183.0], [85.2, 7192.0], [85.3, 7213.0], [85.4, 7216.0], [85.5, 7217.0], [85.6, 7267.0], [85.7, 7346.0], [85.8, 7724.0], [85.9, 7936.0], [86.0, 8301.0], [86.1, 8322.0], [86.2, 11002.0], [86.3, 11002.0], [86.4, 11006.0], [86.5, 11007.0], [86.6, 11007.0], [86.7, 11106.0], [86.8, 11108.0], [86.9, 11115.0], [87.0, 11116.0], [87.1, 11118.0], [87.2, 11141.0], [87.3, 11145.0], [87.4, 11159.0], [87.5, 11162.0], [87.6, 11168.0], [87.7, 11174.0], [87.8, 11178.0], [87.9, 11178.0], [88.0, 11190.0], [88.1, 11193.0], [88.2, 11204.0], [88.3, 11223.0], [88.4, 11224.0], [88.5, 11226.0], [88.6, 11231.0], [88.7, 11233.0], [88.8, 11253.0], [88.9, 11256.0], [89.0, 11260.0], [89.1, 11269.0], [89.2, 11275.0], [89.3, 11275.0], [89.4, 11276.0], [89.5, 11276.0], [89.6, 11289.0], [89.7, 11290.0], [89.8, 11312.0], [89.9, 11316.0], [90.0, 11319.0], [90.1, 11335.0], [90.2, 11405.0], [90.3, 11457.0], [90.4, 11478.0], [90.5, 11962.0], [90.6, 12568.0], [90.7, 12686.0], [90.8, 13279.0], [90.9, 13754.0], [91.0, 19003.0], [91.1, 19004.0], [91.2, 19144.0], [91.3, 19198.0], [91.4, 19238.0], [91.5, 19260.0], [91.6, 19263.0], [91.7, 19264.0], [91.8, 19278.0], [91.9, 19310.0], [92.0, 19321.0], [92.1, 19345.0], [92.2, 19362.0], [92.3, 19373.0], [92.4, 19379.0], [92.5, 19405.0], [92.6, 19409.0], [92.7, 19445.0], [92.8, 19464.0], [92.9, 19516.0], [93.0, 19539.0], [93.1, 19539.0], [93.2, 19543.0], [93.3, 19583.0], [93.4, 20674.0], [93.5, 20697.0], [93.6, 21017.0], [93.7, 21221.0], [93.8, 21776.0], [93.9, 22016.0], [94.0, 22044.0], [94.1, 35004.0], [94.2, 35004.0], [94.3, 35007.0], [94.4, 35008.0], [94.5, 35302.0], [94.6, 35420.0], [94.7, 35425.0], [94.8, 35447.0], [94.9, 35482.0], [95.0, 35487.0], [95.1, 35494.0], [95.2, 35499.0], [95.3, 35521.0], [95.4, 35557.0], [95.5, 35561.0], [95.6, 35584.0], [95.7, 35616.0], [95.8, 35742.0], [95.9, 35841.0], [96.0, 36204.0], [96.1, 36218.0], [96.2, 37680.0], [96.3, 67006.0], [96.4, 67592.0], [96.5, 67607.0], [96.6, 67689.0], [96.7, 67751.0], [96.8, 67762.0], [96.9, 67768.0], [97.0, 67836.0], [97.1, 67926.0], [97.2, 67967.0], [97.3, 69535.0], [97.4, 69807.0], [97.5, 75001.0], [97.6, 75001.0], [97.7, 75001.0], [97.8, 75001.0], [97.9, 75001.0], [98.0, 75001.0], [98.1, 75001.0], [98.2, 75001.0], [98.3, 75001.0], [98.4, 75001.0], [98.5, 75002.0], [98.6, 75002.0], [98.7, 75002.0], [98.8, 75002.0], [98.9, 75002.0], [99.0, 75002.0], [99.1, 75002.0], [99.2, 75002.0], [99.3, 75002.0], [99.4, 75002.0], [99.5, 75002.0], [99.6, 75002.0], [99.7, 75003.0], [99.8, 75004.0], [99.9, 75004.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 0.0, "maxY": 210.0, "series": [{"data": [[0.0, 210.0], [67900.0, 2.0], [67500.0, 1.0], [69500.0, 1.0], [100.0, 45.0], [35500.0, 4.0], [35300.0, 1.0], [35700.0, 1.0], [200.0, 22.0], [67000.0, 1.0], [67800.0, 1.0], [69800.0, 1.0], [300.0, 19.0], [75000.0, 25.0], [400.0, 4.0], [500.0, 7.0], [600.0, 8.0], [700.0, 1.0], [800.0, 5.0], [900.0, 2.0], [1000.0, 139.0], [1100.0, 27.0], [1200.0, 12.0], [1300.0, 13.0], [1400.0, 2.0], [1500.0, 4.0], [1700.0, 2.0], [1800.0, 1.0], [1900.0, 2.0], [2000.0, 67.0], [2100.0, 32.0], [2200.0, 11.0], [2300.0, 4.0], [2400.0, 6.0], [2500.0, 3.0], [2600.0, 3.0], [2700.0, 5.0], [2800.0, 4.0], [2900.0, 3.0], [3000.0, 34.0], [3100.0, 19.0], [3200.0, 6.0], [3300.0, 5.0], [3400.0, 3.0], [3500.0, 1.0], [3600.0, 1.0], [3800.0, 3.0], [3900.0, 1.0], [4000.0, 18.0], [4100.0, 18.0], [4200.0, 6.0], [4300.0, 2.0], [67700.0, 3.0], [4400.0, 2.0], [4600.0, 1.0], [5000.0, 11.0], [5100.0, 17.0], [5200.0, 5.0], [5300.0, 1.0], [5600.0, 1.0], [5500.0, 1.0], [5400.0, 1.0], [5800.0, 1.0], [5700.0, 2.0], [6000.0, 2.0], [6100.0, 3.0], [5900.0, 2.0], [6300.0, 2.0], [6500.0, 1.0], [6900.0, 1.0], [7100.0, 12.0], [7000.0, 7.0], [7200.0, 4.0], [7300.0, 1.0], [7700.0, 1.0], [7900.0, 1.0], [8300.0, 2.0], [11100.0, 15.0], [11200.0, 16.0], [11000.0, 5.0], [11300.0, 4.0], [11400.0, 3.0], [11900.0, 1.0], [12600.0, 1.0], [12500.0, 1.0], [13200.0, 1.0], [13700.0, 1.0], [19000.0, 2.0], [19300.0, 6.0], [19400.0, 4.0], [19100.0, 2.0], [19200.0, 5.0], [19500.0, 5.0], [21000.0, 1.0], [21200.0, 1.0], [20600.0, 2.0], [21700.0, 1.0], [22000.0, 2.0], [35000.0, 4.0], [35400.0, 7.0], [35800.0, 1.0], [36200.0, 2.0], [35600.0, 1.0], [37600.0, 1.0], [67600.0, 2.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 75000.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 105.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 420.0, "series": [{"data": [[0.0, 287.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 188.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 420.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [[3.0, 105.0]], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 3.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 6.629629629629629, "minX": 1.7157579E12, "maxY": 143.8866103739445, "series": [{"data": [[1.71575802E12, 6.629629629629629], [1.7157579E12, 143.8866103739445], [1.71575796E12, 33.88194444444443]], "isOverall": false, "label": "Thread Group", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.71575802E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 33.0, "minX": 1.0, "maxY": 75003.0, "series": [{"data": [[2.0, 36097.5], [3.0, 3560.0], [4.0, 2748.0], [5.0, 9991.0], [6.0, 35405.0], [7.0, 10904.0], [8.0, 20674.0], [9.0, 2845.0], [10.0, 22044.0], [11.0, 22016.0], [12.0, 12176.0], [13.0, 5458.0], [14.0, 12667.5], [15.0, 2257.0], [16.0, 13780.0], [17.0, 9666.333333333334], [18.0, 2640.0], [19.0, 2621.5], [20.0, 2341.0], [21.0, 9122.6], [22.0, 5658.0], [23.0, 7430.5], [24.0, 5199.0], [25.0, 8322.0], [26.0, 4864.75], [27.0, 27759.666666666664], [28.0, 2336.0], [29.0, 75003.0], [30.0, 2094.3333333333335], [31.0, 40581.5], [33.0, 38569.0], [32.0, 46398.26666666666], [35.0, 27037.346153846156], [34.0, 2917.0], [37.0, 569.0], [36.0, 1391.0], [39.0, 640.0], [38.0, 35616.0], [41.0, 4877.5], [40.0, 9741.4], [43.0, 4345.666666666666], [42.0, 660.0], [45.0, 565.0], [44.0, 5806.0], [47.0, 2985.333333333333], [46.0, 19274.0], [48.0, 1271.3333333333333], [49.0, 898.0], [50.0, 8125.4], [51.0, 4524.454545454546], [52.0, 7489.2], [53.0, 26022.066666666662], [54.0, 2073.666666666667], [55.0, 934.3333333333333], [56.0, 9694.0], [57.0, 624.75], [58.0, 6494.0], [59.0, 101.66666666666667], [61.0, 7828.5], [60.0, 2513.0], [62.0, 6618.666666666667], [63.0, 5312.5], [65.0, 6536.333333333334], [66.0, 485.6666666666667], [67.0, 10858.5], [64.0, 9657.5], [68.0, 3781.3333333333335], [70.0, 1917.0], [71.0, 257.5], [69.0, 2357.0], [72.0, 182.0], [74.0, 9639.5], [75.0, 5263.428571428572], [73.0, 6509.0], [76.0, 155.5], [77.0, 442.6666666666667], [79.0, 4355.454545454545], [78.0, 7291.666666666667], [81.0, 276.2], [83.0, 80.0], [82.0, 886.0], [80.0, 1812.5], [85.0, 749.6666666666666], [86.0, 5029.5], [87.0, 6482.285714285715], [84.0, 9326.2], [90.0, 654.5], [91.0, 833.0], [89.0, 15114.0], [88.0, 12700.75], [92.0, 1825.0], [93.0, 601.5], [95.0, 6229.0], [94.0, 3223.0], [96.0, 388.6666666666667], [98.0, 3854.0], [99.0, 1662.5], [97.0, 3476.0], [100.0, 1778.0], [102.0, 1061.3333333333333], [103.0, 2749.0], [101.0, 9222.0], [106.0, 1655.3333333333335], [107.0, 4155.0], [105.0, 6648.0], [104.0, 763.0], [110.0, 2464.0], [111.0, 2171.0], [109.0, 670.5], [108.0, 1304.0], [112.0, 3996.8], [113.0, 642.5], [115.0, 1106.6666666666667], [114.0, 221.0], [118.0, 2982.6], [119.0, 3873.727272727273], [117.0, 4341.375], [116.0, 4754.0], [121.0, 2577.5], [123.0, 2438.8333333333335], [122.0, 145.0], [120.0, 3134.0], [125.0, 3384.0], [127.0, 1088.0], [126.0, 6777.5], [124.0, 6602.0], [129.0, 1811.0], [130.0, 476.0], [133.0, 1719.3333333333333], [135.0, 6593.615384615384], [134.0, 8581.300000000001], [132.0, 3105.230769230769], [131.0, 3173.0], [128.0, 11253.0], [137.0, 57.0], [138.0, 2084.6666666666665], [142.0, 2115.4], [143.0, 3195.0], [141.0, 3152.0], [140.0, 2355.75], [139.0, 1878.4999999999998], [136.0, 7372.222222222223], [145.0, 114.0], [146.0, 880.375], [147.0, 3771.3333333333335], [148.0, 1599.5], [149.0, 2638.625], [150.0, 2888.0], [151.0, 3817.9999999999995], [144.0, 2139.0], [152.0, 2884.0], [155.0, 3116.0], [157.0, 1741.0], [159.0, 1003.0], [158.0, 153.0], [156.0, 3765.0], [154.0, 2254.6], [153.0, 177.0], [160.0, 1713.3333333333335], [161.0, 3886.2], [163.0, 1542.0], [165.0, 2316.25], [167.0, 1089.6666666666667], [166.0, 4087.8], [164.0, 1069.0], [162.0, 2984.7], [169.0, 2405.6666666666665], [171.0, 2214.375], [173.0, 1667.8], [175.0, 1160.090909090909], [174.0, 3058.0], [172.0, 2173.0], [168.0, 2995.888888888889], [176.0, 2090.5], [179.0, 575.5], [180.0, 2309.3846153846157], [182.0, 1608.5555555555557], [183.0, 2544.75], [181.0, 1355.4], [178.0, 2603.0], [177.0, 1926.3333333333335], [185.0, 541.75], [187.0, 760.3], [191.0, 1159.3703703703702], [190.0, 2057.0], [189.0, 1258.0833333333335], [188.0, 1270.3076923076922], [186.0, 834.6666666666669], [184.0, 1637.1428571428573], [193.0, 318.0], [194.0, 766.1136363636361], [195.0, 33.0], [197.0, 440.4166666666667], [196.0, 790.6382978723403], [192.0, 422.4], [1.0, 1721.0]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[124.34000000000027, 6116.766000000001]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 197.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 48.333333333333336, "minX": 1.7157579E12, "maxY": 5781.0, "series": [{"data": [[1.71575802E12, 173.71666666666667], [1.7157579E12, 5781.0], [1.71575796E12, 1537.2666666666667]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.71575802E12, 48.333333333333336], [1.7157579E12, 1457.7333333333333], [1.71575796E12, 224.26666666666668]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.71575802E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 3002.8878166465624, "minX": 1.7157579E12, "maxY": 22018.6875, "series": [{"data": [[1.71575802E12, 16914.11111111111], [1.7157579E12, 3002.8878166465624], [1.71575796E12, 22018.6875]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.71575802E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 2688.763570566947, "minX": 1.7157579E12, "maxY": 14321.037037037038, "series": [{"data": [[1.71575802E12, 14321.037037037038], [1.7157579E12, 2688.763570566947], [1.71575796E12, 8441.854166666666]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.71575802E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 2922.8926417370326, "minX": 1.7157579E12, "maxY": 21406.340277777766, "series": [{"data": [[1.71575802E12, 15091.148148148146], [1.7157579E12, 2922.8926417370326], [1.71575796E12, 21406.340277777766]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.71575802E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 6.0, "minX": 1.7157579E12, "maxY": 69807.0, "series": [{"data": [[1.71575802E12, 69807.0], [1.7157579E12, 35584.0], [1.71575796E12, 67967.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.71575802E12, 1111.0], [1.7157579E12, 6.0], [1.71575796E12, 338.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.71575802E12, 50422.000000000065], [1.7157579E12, 7187.5], [1.71575796E12, 35771.7]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.71575802E12, 69807.0], [1.7157579E12, 35422.25], [1.71575796E12, 67960.03]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.71575802E12, 4066.0], [1.7157579E12, 1071.5], [1.71575796E12, 2852.5]], "isOverall": false, "label": "Median", "isController": false}, {"data": [[1.71575802E12, 69725.4], [1.7157579E12, 11313.0], [1.71575796E12, 67752.65]], "isOverall": false, "label": "95th percentile", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.71575802E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 16.5, "minX": 1.0, "maxY": 75002.0, "series": [{"data": [[2.0, 5972.0], [36.0, 2173.0], [39.0, 2065.5], [47.0, 3045.0], [3.0, 3461.0], [61.0, 1067.0], [4.0, 2330.0], [71.0, 1044.0], [5.0, 2493.0], [6.0, 2809.0], [106.0, 1021.0], [7.0, 892.5], [116.0, 16.5], [8.0, 3380.0], [9.0, 2356.5], [10.0, 1335.0], [11.0, 2230.0], [14.0, 3828.5], [16.0, 2349.0], [1.0, 3131.0], [17.0, 2414.0], [18.0, 2150.0], [21.0, 2298.0], [23.0, 3138.0], [30.0, 2133.0]], "isOverall": false, "label": "Successes", "isController": false}, {"data": [[2.0, 35005.5], [36.0, 2002.0], [9.0, 2002.0], [39.0, 2002.0], [11.0, 19004.0], [47.0, 2002.0], [3.0, 11006.0], [61.0, 1002.0], [4.0, 75002.0], [71.0, 1501.5], [17.0, 75002.0], [18.0, 11007.0], [5.0, 67006.0], [21.0, 3001.5], [23.0, 11002.0], [6.0, 75001.0], [106.0, 1001.0], [7.0, 19003.0], [116.0, 162.0], [30.0, 4004.0]], "isOverall": false, "label": "Failures", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 116.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 0.0, "minX": 1.0, "maxY": 5972.0, "series": [{"data": [[2.0, 5972.0], [36.0, 2173.0], [39.0, 2065.5], [47.0, 3045.0], [3.0, 3461.0], [61.0, 1067.0], [4.0, 2330.0], [71.0, 1044.0], [5.0, 2493.0], [6.0, 2808.5], [106.0, 1021.0], [7.0, 892.5], [116.0, 16.0], [8.0, 3380.0], [9.0, 2356.5], [10.0, 1334.5], [11.0, 2230.0], [14.0, 3828.5], [16.0, 2349.0], [1.0, 3131.0], [17.0, 2414.0], [18.0, 2150.0], [21.0, 2298.0], [23.0, 3138.0], [30.0, 2132.0]], "isOverall": false, "label": "Successes", "isController": false}, {"data": [[2.0, 0.0], [36.0, 0.0], [9.0, 0.0], [39.0, 0.0], [11.0, 0.0], [47.0, 0.0], [3.0, 0.0], [61.0, 0.0], [4.0, 0.0], [71.0, 0.0], [17.0, 0.0], [18.0, 0.0], [5.0, 0.0], [21.0, 0.0], [23.0, 0.0], [6.0, 0.0], [106.0, 0.0], [7.0, 0.0], [116.0, 0.0], [30.0, 0.0]], "isOverall": false, "label": "Failures", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 116.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 0.21666666666666667, "minX": 1.7157579E12, "maxY": 14.683333333333334, "series": [{"data": [[1.71575802E12, 0.21666666666666667], [1.7157579E12, 14.683333333333334], [1.71575796E12, 1.7666666666666666]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.71575802E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 0.03333333333333333, "minX": 1.7157579E12, "maxY": 12.566666666666666, "series": [{"data": [[1.71575802E12, 0.4166666666666667], [1.7157579E12, 12.566666666666666], [1.71575796E12, 1.9333333333333333]], "isOverall": false, "label": "200", "isController": false}, {"data": [[1.71575796E12, 0.4166666666666667]], "isOverall": false, "label": "Non HTTP response code: org.apache.http.conn.HttpHostConnectException", "isController": false}, {"data": [[1.71575802E12, 0.03333333333333333], [1.7157579E12, 1.25], [1.71575796E12, 0.05]], "isOverall": false, "label": "Non HTTP response code: java.net.SocketException", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.71575802E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 0.03333333333333333, "minX": 1.7157579E12, "maxY": 12.566666666666666, "series": [{"data": [[1.71575802E12, 0.03333333333333333], [1.7157579E12, 1.25], [1.71575796E12, 0.4666666666666667]], "isOverall": false, "label": "HTTP Request-failure", "isController": false}, {"data": [[1.71575802E12, 0.4166666666666667], [1.7157579E12, 12.566666666666666], [1.71575796E12, 1.9333333333333333]], "isOverall": false, "label": "HTTP Request-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.71575802E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 0.03333333333333333, "minX": 1.7157579E12, "maxY": 12.566666666666666, "series": [{"data": [[1.71575802E12, 0.4166666666666667], [1.7157579E12, 12.566666666666666], [1.71575796E12, 1.9333333333333333]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [[1.71575802E12, 0.03333333333333333], [1.7157579E12, 1.25], [1.71575796E12, 0.4666666666666667]], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.71575802E12, "title": "Total Transactions Per Second"}},
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

