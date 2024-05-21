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
        data: {"result": {"minY": 0.0, "minX": 0.0, "maxY": 15933.0, "series": [{"data": [[0.0, 0.0], [0.1, 1.0], [0.2, 1.0], [0.3, 1.0], [0.4, 1.0], [0.5, 1.0], [0.6, 1.0], [0.7, 1.0], [0.8, 1.0], [0.9, 1.0], [1.0, 1.0], [1.1, 1.0], [1.2, 1.0], [1.3, 1.0], [1.4, 1.0], [1.5, 1.0], [1.6, 1.0], [1.7, 1.0], [1.8, 1.0], [1.9, 1.0], [2.0, 1.0], [2.1, 1.0], [2.2, 1.0], [2.3, 1.0], [2.4, 1.0], [2.5, 1.0], [2.6, 1.0], [2.7, 1.0], [2.8, 1.0], [2.9, 1.0], [3.0, 1.0], [3.1, 1.0], [3.2, 1.0], [3.3, 1.0], [3.4, 1.0], [3.5, 1.0], [3.6, 1.0], [3.7, 1.0], [3.8, 1.0], [3.9, 1.0], [4.0, 1.0], [4.1, 1.0], [4.2, 1.0], [4.3, 1.0], [4.4, 1.0], [4.5, 1.0], [4.6, 1.0], [4.7, 1.0], [4.8, 1.0], [4.9, 1.0], [5.0, 1.0], [5.1, 1.0], [5.2, 1.0], [5.3, 1.0], [5.4, 1.0], [5.5, 1.0], [5.6, 1.0], [5.7, 1.0], [5.8, 1.0], [5.9, 1.0], [6.0, 1.0], [6.1, 1.0], [6.2, 1.0], [6.3, 2.0], [6.4, 2.0], [6.5, 2.0], [6.6, 2.0], [6.7, 2.0], [6.8, 2.0], [6.9, 2.0], [7.0, 2.0], [7.1, 2.0], [7.2, 2.0], [7.3, 2.0], [7.4, 2.0], [7.5, 2.0], [7.6, 2.0], [7.7, 2.0], [7.8, 2.0], [7.9, 2.0], [8.0, 2.0], [8.1, 2.0], [8.2, 2.0], [8.3, 2.0], [8.4, 2.0], [8.5, 2.0], [8.6, 2.0], [8.7, 2.0], [8.8, 2.0], [8.9, 2.0], [9.0, 2.0], [9.1, 2.0], [9.2, 2.0], [9.3, 2.0], [9.4, 2.0], [9.5, 2.0], [9.6, 2.0], [9.7, 2.0], [9.8, 2.0], [9.9, 2.0], [10.0, 2.0], [10.1, 2.0], [10.2, 2.0], [10.3, 2.0], [10.4, 2.0], [10.5, 2.0], [10.6, 2.0], [10.7, 2.0], [10.8, 2.0], [10.9, 2.0], [11.0, 2.0], [11.1, 2.0], [11.2, 2.0], [11.3, 2.0], [11.4, 2.0], [11.5, 2.0], [11.6, 2.0], [11.7, 2.0], [11.8, 2.0], [11.9, 2.0], [12.0, 2.0], [12.1, 2.0], [12.2, 2.0], [12.3, 2.0], [12.4, 2.0], [12.5, 2.0], [12.6, 2.0], [12.7, 2.0], [12.8, 2.0], [12.9, 2.0], [13.0, 2.0], [13.1, 2.0], [13.2, 2.0], [13.3, 2.0], [13.4, 2.0], [13.5, 2.0], [13.6, 2.0], [13.7, 2.0], [13.8, 2.0], [13.9, 2.0], [14.0, 2.0], [14.1, 2.0], [14.2, 2.0], [14.3, 2.0], [14.4, 2.0], [14.5, 2.0], [14.6, 2.0], [14.7, 2.0], [14.8, 2.0], [14.9, 2.0], [15.0, 2.0], [15.1, 2.0], [15.2, 2.0], [15.3, 2.0], [15.4, 2.0], [15.5, 2.0], [15.6, 2.0], [15.7, 2.0], [15.8, 2.0], [15.9, 2.0], [16.0, 2.0], [16.1, 2.0], [16.2, 2.0], [16.3, 2.0], [16.4, 2.0], [16.5, 2.0], [16.6, 2.0], [16.7, 2.0], [16.8, 2.0], [16.9, 2.0], [17.0, 2.0], [17.1, 2.0], [17.2, 2.0], [17.3, 2.0], [17.4, 2.0], [17.5, 2.0], [17.6, 2.0], [17.7, 2.0], [17.8, 2.0], [17.9, 2.0], [18.0, 2.0], [18.1, 2.0], [18.2, 2.0], [18.3, 2.0], [18.4, 2.0], [18.5, 2.0], [18.6, 2.0], [18.7, 2.0], [18.8, 2.0], [18.9, 2.0], [19.0, 2.0], [19.1, 3.0], [19.2, 3.0], [19.3, 3.0], [19.4, 3.0], [19.5, 3.0], [19.6, 3.0], [19.7, 3.0], [19.8, 3.0], [19.9, 3.0], [20.0, 3.0], [20.1, 3.0], [20.2, 3.0], [20.3, 3.0], [20.4, 3.0], [20.5, 3.0], [20.6, 3.0], [20.7, 3.0], [20.8, 3.0], [20.9, 3.0], [21.0, 3.0], [21.1, 3.0], [21.2, 3.0], [21.3, 3.0], [21.4, 3.0], [21.5, 3.0], [21.6, 3.0], [21.7, 3.0], [21.8, 3.0], [21.9, 3.0], [22.0, 3.0], [22.1, 3.0], [22.2, 3.0], [22.3, 3.0], [22.4, 3.0], [22.5, 3.0], [22.6, 3.0], [22.7, 3.0], [22.8, 3.0], [22.9, 3.0], [23.0, 3.0], [23.1, 3.0], [23.2, 3.0], [23.3, 3.0], [23.4, 3.0], [23.5, 3.0], [23.6, 3.0], [23.7, 3.0], [23.8, 3.0], [23.9, 3.0], [24.0, 3.0], [24.1, 3.0], [24.2, 3.0], [24.3, 3.0], [24.4, 3.0], [24.5, 3.0], [24.6, 3.0], [24.7, 3.0], [24.8, 3.0], [24.9, 3.0], [25.0, 3.0], [25.1, 3.0], [25.2, 3.0], [25.3, 3.0], [25.4, 3.0], [25.5, 3.0], [25.6, 3.0], [25.7, 3.0], [25.8, 3.0], [25.9, 3.0], [26.0, 3.0], [26.1, 3.0], [26.2, 3.0], [26.3, 4.0], [26.4, 4.0], [26.5, 4.0], [26.6, 4.0], [26.7, 4.0], [26.8, 4.0], [26.9, 4.0], [27.0, 4.0], [27.1, 4.0], [27.2, 4.0], [27.3, 4.0], [27.4, 4.0], [27.5, 4.0], [27.6, 4.0], [27.7, 4.0], [27.8, 4.0], [27.9, 4.0], [28.0, 4.0], [28.1, 4.0], [28.2, 4.0], [28.3, 4.0], [28.4, 4.0], [28.5, 4.0], [28.6, 4.0], [28.7, 4.0], [28.8, 4.0], [28.9, 4.0], [29.0, 4.0], [29.1, 4.0], [29.2, 4.0], [29.3, 4.0], [29.4, 4.0], [29.5, 4.0], [29.6, 4.0], [29.7, 4.0], [29.8, 4.0], [29.9, 4.0], [30.0, 4.0], [30.1, 5.0], [30.2, 5.0], [30.3, 5.0], [30.4, 5.0], [30.5, 5.0], [30.6, 5.0], [30.7, 5.0], [30.8, 5.0], [30.9, 5.0], [31.0, 5.0], [31.1, 5.0], [31.2, 5.0], [31.3, 5.0], [31.4, 5.0], [31.5, 5.0], [31.6, 5.0], [31.7, 5.0], [31.8, 5.0], [31.9, 5.0], [32.0, 5.0], [32.1, 5.0], [32.2, 5.0], [32.3, 5.0], [32.4, 6.0], [32.5, 6.0], [32.6, 6.0], [32.7, 6.0], [32.8, 6.0], [32.9, 6.0], [33.0, 6.0], [33.1, 6.0], [33.2, 6.0], [33.3, 6.0], [33.4, 6.0], [33.5, 6.0], [33.6, 6.0], [33.7, 6.0], [33.8, 6.0], [33.9, 7.0], [34.0, 7.0], [34.1, 7.0], [34.2, 7.0], [34.3, 7.0], [34.4, 7.0], [34.5, 7.0], [34.6, 7.0], [34.7, 7.0], [34.8, 7.0], [34.9, 7.0], [35.0, 7.0], [35.1, 8.0], [35.2, 8.0], [35.3, 8.0], [35.4, 9.0], [35.5, 10.0], [35.6, 10.0], [35.7, 11.0], [35.8, 11.0], [35.9, 12.0], [36.0, 13.0], [36.1, 14.0], [36.2, 14.0], [36.3, 21.0], [36.4, 23.0], [36.5, 47.0], [36.6, 48.0], [36.7, 53.0], [36.8, 53.0], [36.9, 57.0], [37.0, 57.0], [37.1, 57.0], [37.2, 59.0], [37.3, 59.0], [37.4, 61.0], [37.5, 62.0], [37.6, 63.0], [37.7, 64.0], [37.8, 65.0], [37.9, 65.0], [38.0, 65.0], [38.1, 66.0], [38.2, 67.0], [38.3, 67.0], [38.4, 68.0], [38.5, 70.0], [38.6, 70.0], [38.7, 80.0], [38.8, 84.0], [38.9, 89.0], [39.0, 90.0], [39.1, 94.0], [39.2, 95.0], [39.3, 96.0], [39.4, 98.0], [39.5, 99.0], [39.6, 99.0], [39.7, 99.0], [39.8, 100.0], [39.9, 100.0], [40.0, 100.0], [40.1, 100.0], [40.2, 100.0], [40.3, 100.0], [40.4, 100.0], [40.5, 100.0], [40.6, 100.0], [40.7, 100.0], [40.8, 100.0], [40.9, 100.0], [41.0, 100.0], [41.1, 100.0], [41.2, 100.0], [41.3, 100.0], [41.4, 101.0], [41.5, 101.0], [41.6, 102.0], [41.7, 102.0], [41.8, 103.0], [41.9, 103.0], [42.0, 103.0], [42.1, 103.0], [42.2, 103.0], [42.3, 104.0], [42.4, 106.0], [42.5, 107.0], [42.6, 107.0], [42.7, 108.0], [42.8, 108.0], [42.9, 108.0], [43.0, 108.0], [43.1, 108.0], [43.2, 108.0], [43.3, 109.0], [43.4, 109.0], [43.5, 109.0], [43.6, 109.0], [43.7, 109.0], [43.8, 109.0], [43.9, 110.0], [44.0, 110.0], [44.1, 110.0], [44.2, 110.0], [44.3, 110.0], [44.4, 110.0], [44.5, 110.0], [44.6, 110.0], [44.7, 110.0], [44.8, 110.0], [44.9, 110.0], [45.0, 110.0], [45.1, 110.0], [45.2, 110.0], [45.3, 111.0], [45.4, 111.0], [45.5, 111.0], [45.6, 111.0], [45.7, 111.0], [45.8, 112.0], [45.9, 112.0], [46.0, 112.0], [46.1, 113.0], [46.2, 113.0], [46.3, 113.0], [46.4, 114.0], [46.5, 114.0], [46.6, 115.0], [46.7, 115.0], [46.8, 115.0], [46.9, 116.0], [47.0, 117.0], [47.1, 118.0], [47.2, 118.0], [47.3, 118.0], [47.4, 119.0], [47.5, 119.0], [47.6, 119.0], [47.7, 119.0], [47.8, 119.0], [47.9, 120.0], [48.0, 120.0], [48.1, 120.0], [48.2, 120.0], [48.3, 120.0], [48.4, 120.0], [48.5, 120.0], [48.6, 121.0], [48.7, 121.0], [48.8, 121.0], [48.9, 122.0], [49.0, 122.0], [49.1, 127.0], [49.2, 127.0], [49.3, 128.0], [49.4, 128.0], [49.5, 129.0], [49.6, 130.0], [49.7, 130.0], [49.8, 130.0], [49.9, 131.0], [50.0, 131.0], [50.1, 131.0], [50.2, 131.0], [50.3, 133.0], [50.4, 136.0], [50.5, 139.0], [50.6, 139.0], [50.7, 141.0], [50.8, 149.0], [50.9, 160.0], [51.0, 559.0], [51.1, 559.0], [51.2, 559.0], [51.3, 666.0], [51.4, 667.0], [51.5, 667.0], [51.6, 667.0], [51.7, 667.0], [51.8, 1020.0], [51.9, 1038.0], [52.0, 1039.0], [52.1, 1039.0], [52.2, 1040.0], [52.3, 1059.0], [52.4, 1071.0], [52.5, 1075.0], [52.6, 1079.0], [52.7, 1082.0], [52.8, 1096.0], [52.9, 1101.0], [53.0, 1108.0], [53.1, 1118.0], [53.2, 1119.0], [53.3, 1120.0], [53.4, 1129.0], [53.5, 1129.0], [53.6, 1130.0], [53.7, 1130.0], [53.8, 1130.0], [53.9, 1130.0], [54.0, 1130.0], [54.1, 1131.0], [54.2, 1132.0], [54.3, 1133.0], [54.4, 1136.0], [54.5, 1136.0], [54.6, 1136.0], [54.7, 1137.0], [54.8, 1138.0], [54.9, 1139.0], [55.0, 1140.0], [55.1, 1140.0], [55.2, 1140.0], [55.3, 1141.0], [55.4, 1143.0], [55.5, 1146.0], [55.6, 1146.0], [55.7, 1149.0], [55.8, 1150.0], [55.9, 1150.0], [56.0, 1150.0], [56.1, 1151.0], [56.2, 1151.0], [56.3, 1157.0], [56.4, 1160.0], [56.5, 1165.0], [56.6, 1170.0], [56.7, 1176.0], [56.8, 1177.0], [56.9, 1179.0], [57.0, 1179.0], [57.1, 1180.0], [57.2, 1180.0], [57.3, 1188.0], [57.4, 1190.0], [57.5, 1190.0], [57.6, 1190.0], [57.7, 1190.0], [57.8, 1200.0], [57.9, 1209.0], [58.0, 1210.0], [58.1, 1210.0], [58.2, 1234.0], [58.3, 1302.0], [58.4, 1302.0], [58.5, 1302.0], [58.6, 1303.0], [58.7, 1330.0], [58.8, 1341.0], [58.9, 1349.0], [59.0, 1359.0], [59.1, 1378.0], [59.2, 1380.0], [59.3, 1413.0], [59.4, 1435.0], [59.5, 1549.0], [59.6, 1571.0], [59.7, 1573.0], [59.8, 1577.0], [59.9, 1580.0], [60.0, 1593.0], [60.1, 1618.0], [60.2, 1630.0], [60.3, 1635.0], [60.4, 1637.0], [60.5, 1916.0], [60.6, 1916.0], [60.7, 1917.0], [60.8, 1917.0], [60.9, 1918.0], [61.0, 1918.0], [61.1, 1918.0], [61.2, 1918.0], [61.3, 1918.0], [61.4, 1918.0], [61.5, 1918.0], [61.6, 1918.0], [61.7, 1918.0], [61.8, 1918.0], [61.9, 1919.0], [62.0, 1919.0], [62.1, 1919.0], [62.2, 1919.0], [62.3, 1919.0], [62.4, 1919.0], [62.5, 1919.0], [62.6, 1919.0], [62.7, 1919.0], [62.8, 1919.0], [62.9, 1920.0], [63.0, 1920.0], [63.1, 1920.0], [63.2, 1920.0], [63.3, 1921.0], [63.4, 1921.0], [63.5, 1921.0], [63.6, 1921.0], [63.7, 1921.0], [63.8, 1921.0], [63.9, 1921.0], [64.0, 1922.0], [64.1, 1922.0], [64.2, 1922.0], [64.3, 1922.0], [64.4, 1922.0], [64.5, 1922.0], [64.6, 1922.0], [64.7, 1923.0], [64.8, 1923.0], [64.9, 1923.0], [65.0, 1923.0], [65.1, 1923.0], [65.2, 1923.0], [65.3, 1924.0], [65.4, 1924.0], [65.5, 1924.0], [65.6, 1924.0], [65.7, 1924.0], [65.8, 1924.0], [65.9, 1924.0], [66.0, 1925.0], [66.1, 1925.0], [66.2, 1925.0], [66.3, 1925.0], [66.4, 1925.0], [66.5, 1926.0], [66.6, 1930.0], [66.7, 1943.0], [66.8, 1951.0], [66.9, 1957.0], [67.0, 1966.0], [67.1, 1979.0], [67.2, 1987.0], [67.3, 2003.0], [67.4, 2024.0], [67.5, 2055.0], [67.6, 2776.0], [67.7, 2788.0], [67.8, 2797.0], [67.9, 2817.0], [68.0, 2838.0], [68.1, 2842.0], [68.2, 2856.0], [68.3, 2862.0], [68.4, 2863.0], [68.5, 2866.0], [68.6, 2873.0], [68.7, 2901.0], [68.8, 2901.0], [68.9, 3091.0], [69.0, 3091.0], [69.1, 3091.0], [69.2, 3091.0], [69.3, 3092.0], [69.4, 3097.0], [69.5, 3098.0], [69.6, 3101.0], [69.7, 3109.0], [69.8, 3111.0], [69.9, 3112.0], [70.0, 3121.0], [70.1, 3130.0], [70.2, 3140.0], [70.3, 3151.0], [70.4, 3151.0], [70.5, 3152.0], [70.6, 3159.0], [70.7, 3161.0], [70.8, 3170.0], [70.9, 3174.0], [71.0, 3183.0], [71.1, 3190.0], [71.2, 3200.0], [71.3, 3209.0], [71.4, 3210.0], [71.5, 3210.0], [71.6, 3211.0], [71.7, 3215.0], [71.8, 3218.0], [71.9, 3219.0], [72.0, 3219.0], [72.1, 3219.0], [72.2, 3219.0], [72.3, 3219.0], [72.4, 3219.0], [72.5, 3220.0], [72.6, 3220.0], [72.7, 3220.0], [72.8, 3220.0], [72.9, 3220.0], [73.0, 3220.0], [73.1, 3221.0], [73.2, 3223.0], [73.3, 3225.0], [73.4, 3226.0], [73.5, 3227.0], [73.6, 3230.0], [73.7, 3230.0], [73.8, 3230.0], [73.9, 3230.0], [74.0, 3232.0], [74.1, 3238.0], [74.2, 3240.0], [74.3, 3247.0], [74.4, 3249.0], [74.5, 3268.0], [74.6, 3270.0], [74.7, 3270.0], [74.8, 3270.0], [74.9, 3287.0], [75.0, 3288.0], [75.1, 3290.0], [75.2, 3290.0], [75.3, 3296.0], [75.4, 3302.0], [75.5, 3302.0], [75.6, 3304.0], [75.7, 3305.0], [75.8, 3371.0], [75.9, 3410.0], [76.0, 3412.0], [76.1, 3413.0], [76.2, 3418.0], [76.3, 3442.0], [76.4, 3450.0], [76.5, 3456.0], [76.6, 3478.0], [76.7, 3518.0], [76.8, 3552.0], [76.9, 3623.0], [77.0, 3629.0], [77.1, 3647.0], [77.2, 3677.0], [77.3, 3679.0], [77.4, 3706.0], [77.5, 4029.0], [77.6, 4038.0], [77.7, 4042.0], [77.8, 4047.0], [77.9, 4058.0], [78.0, 4080.0], [78.1, 4091.0], [78.2, 4099.0], [78.3, 4110.0], [78.4, 4179.0], [78.5, 4337.0], [78.6, 4338.0], [78.7, 4529.0], [78.8, 4569.0], [78.9, 4930.0], [79.0, 4943.0], [79.1, 5543.0], [79.2, 5779.0], [79.3, 6415.0], [79.4, 6416.0], [79.5, 6416.0], [79.6, 6417.0], [79.7, 6417.0], [79.8, 6417.0], [79.9, 6501.0], [80.0, 6501.0], [80.1, 6502.0], [80.2, 6577.0], [80.3, 6578.0], [80.4, 6579.0], [80.5, 6579.0], [80.6, 6586.0], [80.7, 6596.0], [80.8, 6659.0], [80.9, 6660.0], [81.0, 6660.0], [81.1, 6674.0], [81.2, 6736.0], [81.3, 6737.0], [81.4, 6739.0], [81.5, 6819.0], [81.6, 6888.0], [81.7, 6895.0], [81.8, 6895.0], [81.9, 6895.0], [82.0, 6895.0], [82.1, 6898.0], [82.2, 6979.0], [82.3, 6979.0], [82.4, 6980.0], [82.5, 7057.0], [82.6, 7170.0], [82.7, 7171.0], [82.8, 7172.0], [82.9, 7173.0], [83.0, 7180.0], [83.1, 7181.0], [83.2, 7181.0], [83.3, 7181.0], [83.4, 7191.0], [83.5, 7191.0], [83.6, 7194.0], [83.7, 7198.0], [83.8, 7201.0], [83.9, 7208.0], [84.0, 7209.0], [84.1, 7209.0], [84.2, 7209.0], [84.3, 7210.0], [84.4, 7214.0], [84.5, 7217.0], [84.6, 7221.0], [84.7, 7222.0], [84.8, 7222.0], [84.9, 7229.0], [85.0, 7231.0], [85.1, 7234.0], [85.2, 7242.0], [85.3, 7243.0], [85.4, 7243.0], [85.5, 7279.0], [85.6, 7287.0], [85.7, 7288.0], [85.8, 7297.0], [85.9, 7298.0], [86.0, 7298.0], [86.1, 7299.0], [86.2, 7299.0], [86.3, 7311.0], [86.4, 7320.0], [86.5, 7320.0], [86.6, 7320.0], [86.7, 7323.0], [86.8, 7340.0], [86.9, 7342.0], [87.0, 7352.0], [87.1, 7356.0], [87.2, 7366.0], [87.3, 7366.0], [87.4, 7367.0], [87.5, 7368.0], [87.6, 7368.0], [87.7, 7369.0], [87.8, 7378.0], [87.9, 7416.0], [88.0, 7416.0], [88.1, 7417.0], [88.2, 7430.0], [88.3, 7518.0], [88.4, 7538.0], [88.5, 7607.0], [88.6, 7607.0], [88.7, 7660.0], [88.8, 7660.0], [88.9, 7745.0], [89.0, 7763.0], [89.1, 7781.0], [89.2, 7793.0], [89.3, 7805.0], [89.4, 7808.0], [89.5, 8128.0], [89.6, 8148.0], [89.7, 8203.0], [89.8, 9733.0], [89.9, 9736.0], [90.0, 9746.0], [90.1, 9750.0], [90.2, 9750.0], [90.3, 9751.0], [90.4, 9756.0], [90.5, 9760.0], [90.6, 9763.0], [90.7, 9766.0], [90.8, 9786.0], [90.9, 9792.0], [91.0, 9792.0], [91.1, 10544.0], [91.2, 10570.0], [91.3, 10596.0], [91.4, 14202.0], [91.5, 14284.0], [91.6, 14294.0], [91.7, 14296.0], [91.8, 14320.0], [91.9, 14325.0], [92.0, 14335.0], [92.1, 14337.0], [92.2, 14378.0], [92.3, 14380.0], [92.4, 14383.0], [92.5, 14386.0], [92.6, 15250.0], [92.7, 15261.0], [92.8, 15285.0], [92.9, 15324.0], [93.0, 15338.0], [93.1, 15343.0], [93.2, 15348.0], [93.3, 15349.0], [93.4, 15353.0], [93.5, 15354.0], [93.6, 15359.0], [93.7, 15366.0], [93.8, 15372.0], [93.9, 15385.0], [94.0, 15391.0], [94.1, 15399.0], [94.2, 15499.0], [94.3, 15500.0], [94.4, 15506.0], [94.5, 15546.0], [94.6, 15710.0], [94.7, 15762.0], [94.8, 15775.0], [94.9, 15793.0], [95.0, 15812.0], [95.1, 15816.0], [95.2, 15817.0], [95.3, 15825.0], [95.4, 15825.0], [95.5, 15834.0], [95.6, 15839.0], [95.7, 15840.0], [95.8, 15846.0], [95.9, 15851.0], [96.0, 15855.0], [96.1, 15858.0], [96.2, 15858.0], [96.3, 15862.0], [96.4, 15864.0], [96.5, 15873.0], [96.6, 15875.0], [96.7, 15884.0], [96.8, 15887.0], [96.9, 15894.0], [97.0, 15896.0], [97.1, 15906.0], [97.2, 15906.0], [97.3, 15910.0], [97.4, 15916.0], [97.5, 15920.0], [97.6, 15926.0], [97.7, 15926.0], [97.8, 15927.0], [97.9, 15927.0], [98.0, 15927.0], [98.1, 15927.0], [98.2, 15928.0], [98.3, 15928.0], [98.4, 15928.0], [98.5, 15928.0], [98.6, 15928.0], [98.7, 15929.0], [98.8, 15930.0], [98.9, 15930.0], [99.0, 15931.0], [99.1, 15931.0], [99.2, 15932.0], [99.3, 15932.0], [99.4, 15932.0], [99.5, 15932.0], [99.6, 15932.0], [99.7, 15933.0], [99.8, 15933.0], [99.9, 15933.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 0.0, "maxY": 397.0, "series": [{"data": [[0.0, 397.0], [600.0, 5.0], [1000.0, 11.0], [1100.0, 49.0], [1200.0, 5.0], [1300.0, 10.0], [1400.0, 2.0], [1500.0, 6.0], [1600.0, 4.0], [1900.0, 68.0], [2000.0, 3.0], [2800.0, 8.0], [2700.0, 3.0], [2900.0, 2.0], [3000.0, 7.0], [3100.0, 17.0], [3300.0, 5.0], [3200.0, 42.0], [3400.0, 8.0], [3500.0, 2.0], [3600.0, 5.0], [3700.0, 1.0], [4000.0, 8.0], [4100.0, 2.0], [4300.0, 2.0], [4500.0, 2.0], [4900.0, 2.0], [5500.0, 1.0], [5700.0, 1.0], [6600.0, 4.0], [6500.0, 9.0], [6400.0, 6.0], [6900.0, 3.0], [6700.0, 3.0], [6800.0, 7.0], [7100.0, 12.0], [7000.0, 1.0], [7300.0, 16.0], [7200.0, 25.0], [7400.0, 4.0], [7600.0, 4.0], [7500.0, 2.0], [7700.0, 4.0], [7800.0, 2.0], [8100.0, 2.0], [8200.0, 1.0], [9700.0, 13.0], [10500.0, 3.0], [14300.0, 8.0], [14200.0, 4.0], [15300.0, 13.0], [15200.0, 3.0], [15800.0, 21.0], [15700.0, 4.0], [15500.0, 3.0], [15400.0, 1.0], [15900.0, 29.0], [100.0, 112.0], [500.0, 3.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 15900.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 69.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 662.0, "series": [{"data": [[0.0, 144.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 69.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 125.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [[3.0, 662.0]], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 3.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 140.7240000000001, "minX": 1.71552396E12, "maxY": 140.7240000000001, "series": [{"data": [[1.71552396E12, 140.7240000000001]], "isOverall": false, "label": "Thread Group", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.71552396E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 1.0, "minX": 2.0, "maxY": 15034.963855421694, "series": [{"data": [[2.0, 2.0], [7.0, 3.0], [9.0, 1.6666666666666667], [11.0, 1.8333333333333335], [16.0, 2.0], [17.0, 3.0], [18.0, 2.0], [19.0, 3.0], [20.0, 2.0], [23.0, 1.5], [25.0, 1.5], [27.0, 1.0], [28.0, 2.0], [29.0, 2.0], [33.0, 1.5], [35.0, 1.25], [34.0, 2.0], [36.0, 2.0], [39.0, 2.25], [40.0, 1.0], [43.0, 1.25], [45.0, 1.0], [49.0, 2.0], [50.0, 1.5], [52.0, 2.0], [55.0, 2.0], [54.0, 1.5], [57.0, 1.6666666666666667], [56.0, 2.0], [58.0, 2.0], [61.0, 3.0], [67.0, 2.0], [71.0, 1.6], [70.0, 1.0], [68.0, 2.5], [75.0, 1.6666666666666667], [77.0, 1.1666666666666667], [83.0, 1.1428571428571428], [87.0, 4.419354838709676], [86.0, 5.8], [85.0, 5.285714285714286], [84.0, 4.846153846153846], [90.0, 4.0], [89.0, 3.4285714285714284], [88.0, 2.5], [93.0, 1.5], [92.0, 3.25], [99.0, 2.5], [97.0, 2.0], [96.0, 2.5], [103.0, 2.0], [102.0, 2.0], [101.0, 2.0], [107.0, 2.0], [105.0, 1.6], [111.0, 2.0], [110.0, 2.0], [115.0, 1.5], [123.0, 3.142857142857143], [122.0, 3.842105263157895], [121.0, 2.8666666666666663], [127.0, 2.3333333333333335], [126.0, 3.0], [125.0, 2.6], [124.0, 3.0], [135.0, 7324.222222222223], [133.0, 6993.428571428572], [132.0, 6223.190476190475], [131.0, 1303.0392156862763], [129.0, 2.6153846153846145], [140.0, 559.0], [142.0, 5837.7], [141.0, 5868.272727272728], [139.0, 15034.963855421694], [137.0, 13172.6], [136.0, 11609.0], [149.0, 115.0], [151.0, 23.166666666666668], [150.0, 3.5], [148.0, 5.0], [147.0, 1038.0], [146.0, 3058.8749999999995], [145.0, 7591.8], [144.0, 5864.384615384615], [159.0, 3325.0], [157.0, 3.0], [156.0, 341.33333333333337], [155.0, 1039.0], [154.0, 7211.5], [153.0, 2722.636363636363], [152.0, 5.0], [163.0, 683.2], [165.0, 1275.2500000000002], [167.0, 1960.25], [166.0, 1426.6666666666665], [164.0, 65.0], [162.0, 2.0], [161.0, 3.0], [160.0, 347.66666666666663], [175.0, 720.5], [174.0, 6752.249999999999], [173.0, 1769.3333333333333], [172.0, 2801.0], [171.0, 5561.333333333333], [170.0, 2029.375], [169.0, 685.1111111111111], [168.0, 394.0], [177.0, 2802.230769230769], [179.0, 899.4], [183.0, 97.0], [182.0, 3249.0], [181.0, 1669.5], [180.0, 837.0], [178.0, 116.0], [176.0, 1660.0], [189.0, 1183.0], [191.0, 323.0], [190.0, 1150.0], [188.0, 541.6666666666666], [187.0, 1321.6666666666667], [185.0, 1651.125], [184.0, 1308.2857142857142], [199.0, 1934.1379310344826], [198.0, 2525.277777777777], [197.0, 299.2], [196.0, 2152.2], [195.0, 511.3333333333333], [194.0, 1869.8000000000002], [193.0, 1409.0], [192.0, 1191.5555555555557], [200.0, 827.3802816901409]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[140.72300000000004, 2912.840999999997]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 200.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 653.4666666666667, "minX": 1.71552396E12, "maxY": 33557.0, "series": [{"data": [[1.71552396E12, 33557.0]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.71552396E12, 653.4666666666667]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.71552396E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 2912.840999999997, "minX": 1.71552396E12, "maxY": 2912.840999999997, "series": [{"data": [[1.71552396E12, 2912.840999999997]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.71552396E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 602.6750000000002, "minX": 1.71552396E12, "maxY": 602.6750000000002, "series": [{"data": [[1.71552396E12, 602.6750000000002]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.71552396E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 2890.460000000002, "minX": 1.71552396E12, "maxY": 2890.460000000002, "series": [{"data": [[1.71552396E12, 2890.460000000002]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.71552396E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 47.0, "minX": 1.71552396E12, "maxY": 8203.0, "series": [{"data": [[1.71552396E12, 8203.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.71552396E12, 47.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.71552396E12, 4100.1]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.71552396E12, 8003.200000000004]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.71552396E12, 1136.5]], "isOverall": false, "label": "Median", "isController": false}, {"data": [[1.71552396E12, 7340.1]], "isOverall": false, "label": "95th percentile", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.71552396E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 3.0, "minX": 1.0, "maxY": 15890.5, "series": [{"data": [[32.0, 1144.5], [34.0, 1130.0], [37.0, 6596.0], [39.0, 1176.0], [40.0, 3243.5], [41.0, 1129.0], [30.0, 112.0], [61.0, 113.5], [31.0, 129.0]], "isOverall": false, "label": "Successes", "isController": false}, {"data": [[16.0, 7201.5], [1.0, 7191.0], [11.0, 15546.0], [3.0, 7171.0], [12.0, 14330.0], [52.0, 3135.0], [466.0, 3.0], [61.0, 5.0], [62.0, 15890.5]], "isOverall": false, "label": "Failures", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 466.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 0.0, "minX": 1.0, "maxY": 6596.0, "series": [{"data": [[32.0, 1143.0], [34.0, 1129.0], [37.0, 6596.0], [39.0, 1175.0], [40.0, 3242.5], [41.0, 1129.0], [30.0, 111.0], [61.0, 110.5], [31.0, 128.0]], "isOverall": false, "label": "Successes", "isController": false}, {"data": [[16.0, 0.0], [1.0, 0.0], [11.0, 0.0], [3.0, 0.0], [12.0, 0.0], [52.0, 0.0], [466.0, 0.0], [61.0, 0.0], [62.0, 0.0]], "isOverall": false, "label": "Failures", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 466.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 16.666666666666668, "minX": 1.71552396E12, "maxY": 16.666666666666668, "series": [{"data": [[1.71552396E12, 16.666666666666668]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.71552396E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 0.016666666666666666, "minX": 1.71552396E12, "maxY": 5.633333333333334, "series": [{"data": [[1.71552396E12, 5.633333333333334]], "isOverall": false, "label": "200", "isController": false}, {"data": [[1.71552396E12, 3.2666666666666666]], "isOverall": false, "label": "Non HTTP response code: javax.net.ssl.SSLHandshakeException", "isController": false}, {"data": [[1.71552396E12, 5.483333333333333]], "isOverall": false, "label": "Non HTTP response code: org.apache.http.conn.HttpHostConnectException", "isController": false}, {"data": [[1.71552396E12, 0.016666666666666666]], "isOverall": false, "label": "Non HTTP response code: org.apache.http.NoHttpResponseException", "isController": false}, {"data": [[1.71552396E12, 2.2666666666666666]], "isOverall": false, "label": "Non HTTP response code: java.net.SocketException", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.71552396E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 5.633333333333334, "minX": 1.71552396E12, "maxY": 11.033333333333333, "series": [{"data": [[1.71552396E12, 5.633333333333334]], "isOverall": false, "label": "HTTP Request-success", "isController": false}, {"data": [[1.71552396E12, 11.033333333333333]], "isOverall": false, "label": "HTTP Request-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.71552396E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 5.633333333333334, "minX": 1.71552396E12, "maxY": 11.033333333333333, "series": [{"data": [[1.71552396E12, 5.633333333333334]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [[1.71552396E12, 11.033333333333333]], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.71552396E12, "title": "Total Transactions Per Second"}},
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

