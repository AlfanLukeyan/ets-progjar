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
        data: {"result": {"minY": 1.0, "minX": 0.0, "maxY": 15840.0, "series": [{"data": [[0.0, 1.0], [0.1, 1.0], [0.2, 1.0], [0.3, 1.0], [0.4, 1.0], [0.5, 1.0], [0.6, 1.0], [0.7, 1.0], [0.8, 1.0], [0.9, 1.0], [1.0, 1.0], [1.1, 1.0], [1.2, 1.0], [1.3, 1.0], [1.4, 1.0], [1.5, 1.0], [1.6, 1.0], [1.7, 1.0], [1.8, 1.0], [1.9, 1.0], [2.0, 1.0], [2.1, 1.0], [2.2, 1.0], [2.3, 1.0], [2.4, 1.0], [2.5, 1.0], [2.6, 1.0], [2.7, 1.0], [2.8, 1.0], [2.9, 1.0], [3.0, 1.0], [3.1, 1.0], [3.2, 1.0], [3.3, 1.0], [3.4, 1.0], [3.5, 1.0], [3.6, 1.0], [3.7, 1.0], [3.8, 1.0], [3.9, 1.0], [4.0, 1.0], [4.1, 1.0], [4.2, 1.0], [4.3, 1.0], [4.4, 1.0], [4.5, 1.0], [4.6, 1.0], [4.7, 1.0], [4.8, 2.0], [4.9, 2.0], [5.0, 2.0], [5.1, 2.0], [5.2, 2.0], [5.3, 2.0], [5.4, 2.0], [5.5, 2.0], [5.6, 2.0], [5.7, 2.0], [5.8, 2.0], [5.9, 2.0], [6.0, 2.0], [6.1, 2.0], [6.2, 2.0], [6.3, 2.0], [6.4, 2.0], [6.5, 2.0], [6.6, 2.0], [6.7, 2.0], [6.8, 2.0], [6.9, 2.0], [7.0, 2.0], [7.1, 2.0], [7.2, 2.0], [7.3, 2.0], [7.4, 2.0], [7.5, 2.0], [7.6, 2.0], [7.7, 2.0], [7.8, 2.0], [7.9, 2.0], [8.0, 2.0], [8.1, 2.0], [8.2, 2.0], [8.3, 2.0], [8.4, 2.0], [8.5, 2.0], [8.6, 2.0], [8.7, 2.0], [8.8, 2.0], [8.9, 2.0], [9.0, 2.0], [9.1, 2.0], [9.2, 2.0], [9.3, 2.0], [9.4, 2.0], [9.5, 2.0], [9.6, 2.0], [9.7, 2.0], [9.8, 2.0], [9.9, 2.0], [10.0, 2.0], [10.1, 2.0], [10.2, 2.0], [10.3, 2.0], [10.4, 2.0], [10.5, 2.0], [10.6, 2.0], [10.7, 2.0], [10.8, 2.0], [10.9, 2.0], [11.0, 2.0], [11.1, 2.0], [11.2, 2.0], [11.3, 2.0], [11.4, 2.0], [11.5, 2.0], [11.6, 2.0], [11.7, 2.0], [11.8, 2.0], [11.9, 2.0], [12.0, 2.0], [12.1, 2.0], [12.2, 2.0], [12.3, 2.0], [12.4, 2.0], [12.5, 2.0], [12.6, 2.0], [12.7, 2.0], [12.8, 2.0], [12.9, 2.0], [13.0, 2.0], [13.1, 2.0], [13.2, 2.0], [13.3, 2.0], [13.4, 2.0], [13.5, 2.0], [13.6, 2.0], [13.7, 2.0], [13.8, 2.0], [13.9, 2.0], [14.0, 2.0], [14.1, 2.0], [14.2, 2.0], [14.3, 2.0], [14.4, 2.0], [14.5, 2.0], [14.6, 2.0], [14.7, 2.0], [14.8, 2.0], [14.9, 2.0], [15.0, 2.0], [15.1, 2.0], [15.2, 2.0], [15.3, 2.0], [15.4, 2.0], [15.5, 2.0], [15.6, 2.0], [15.7, 2.0], [15.8, 2.0], [15.9, 2.0], [16.0, 2.0], [16.1, 2.0], [16.2, 2.0], [16.3, 2.0], [16.4, 2.0], [16.5, 2.0], [16.6, 2.0], [16.7, 2.0], [16.8, 2.0], [16.9, 2.0], [17.0, 2.0], [17.1, 2.0], [17.2, 2.0], [17.3, 2.0], [17.4, 2.0], [17.5, 3.0], [17.6, 3.0], [17.7, 3.0], [17.8, 3.0], [17.9, 3.0], [18.0, 3.0], [18.1, 3.0], [18.2, 3.0], [18.3, 3.0], [18.4, 3.0], [18.5, 3.0], [18.6, 3.0], [18.7, 3.0], [18.8, 3.0], [18.9, 3.0], [19.0, 3.0], [19.1, 3.0], [19.2, 3.0], [19.3, 3.0], [19.4, 3.0], [19.5, 3.0], [19.6, 3.0], [19.7, 3.0], [19.8, 3.0], [19.9, 3.0], [20.0, 3.0], [20.1, 3.0], [20.2, 3.0], [20.3, 3.0], [20.4, 3.0], [20.5, 3.0], [20.6, 3.0], [20.7, 3.0], [20.8, 3.0], [20.9, 3.0], [21.0, 3.0], [21.1, 3.0], [21.2, 3.0], [21.3, 3.0], [21.4, 3.0], [21.5, 3.0], [21.6, 3.0], [21.7, 3.0], [21.8, 3.0], [21.9, 3.0], [22.0, 3.0], [22.1, 3.0], [22.2, 3.0], [22.3, 3.0], [22.4, 3.0], [22.5, 3.0], [22.6, 3.0], [22.7, 3.0], [22.8, 3.0], [22.9, 3.0], [23.0, 3.0], [23.1, 3.0], [23.2, 3.0], [23.3, 3.0], [23.4, 3.0], [23.5, 3.0], [23.6, 3.0], [23.7, 3.0], [23.8, 3.0], [23.9, 3.0], [24.0, 3.0], [24.1, 3.0], [24.2, 3.0], [24.3, 3.0], [24.4, 3.0], [24.5, 3.0], [24.6, 3.0], [24.7, 3.0], [24.8, 3.0], [24.9, 3.0], [25.0, 3.0], [25.1, 3.0], [25.2, 3.0], [25.3, 3.0], [25.4, 3.0], [25.5, 3.0], [25.6, 3.0], [25.7, 3.0], [25.8, 3.0], [25.9, 3.0], [26.0, 3.0], [26.1, 3.0], [26.2, 3.0], [26.3, 3.0], [26.4, 3.0], [26.5, 3.0], [26.6, 3.0], [26.7, 4.0], [26.8, 4.0], [26.9, 4.0], [27.0, 4.0], [27.1, 4.0], [27.2, 4.0], [27.3, 4.0], [27.4, 4.0], [27.5, 4.0], [27.6, 4.0], [27.7, 4.0], [27.8, 4.0], [27.9, 4.0], [28.0, 4.0], [28.1, 4.0], [28.2, 4.0], [28.3, 4.0], [28.4, 4.0], [28.5, 4.0], [28.6, 4.0], [28.7, 4.0], [28.8, 4.0], [28.9, 4.0], [29.0, 4.0], [29.1, 4.0], [29.2, 4.0], [29.3, 4.0], [29.4, 4.0], [29.5, 4.0], [29.6, 4.0], [29.7, 4.0], [29.8, 4.0], [29.9, 4.0], [30.0, 4.0], [30.1, 4.0], [30.2, 4.0], [30.3, 4.0], [30.4, 4.0], [30.5, 4.0], [30.6, 4.0], [30.7, 4.0], [30.8, 4.0], [30.9, 4.0], [31.0, 4.0], [31.1, 4.0], [31.2, 4.0], [31.3, 4.0], [31.4, 4.0], [31.5, 4.0], [31.6, 4.0], [31.7, 4.0], [31.8, 4.0], [31.9, 4.0], [32.0, 4.0], [32.1, 4.0], [32.2, 4.0], [32.3, 4.0], [32.4, 4.0], [32.5, 4.0], [32.6, 4.0], [32.7, 4.0], [32.8, 4.0], [32.9, 4.0], [33.0, 4.0], [33.1, 4.0], [33.2, 5.0], [33.3, 5.0], [33.4, 5.0], [33.5, 5.0], [33.6, 5.0], [33.7, 5.0], [33.8, 5.0], [33.9, 5.0], [34.0, 5.0], [34.1, 5.0], [34.2, 5.0], [34.3, 5.0], [34.4, 5.0], [34.5, 5.0], [34.6, 5.0], [34.7, 5.0], [34.8, 5.0], [34.9, 5.0], [35.0, 5.0], [35.1, 5.0], [35.2, 5.0], [35.3, 5.0], [35.4, 5.0], [35.5, 5.0], [35.6, 5.0], [35.7, 5.0], [35.8, 5.0], [35.9, 5.0], [36.0, 5.0], [36.1, 5.0], [36.2, 5.0], [36.3, 5.0], [36.4, 5.0], [36.5, 5.0], [36.6, 5.0], [36.7, 5.0], [36.8, 5.0], [36.9, 5.0], [37.0, 5.0], [37.1, 5.0], [37.2, 5.0], [37.3, 5.0], [37.4, 5.0], [37.5, 5.0], [37.6, 5.0], [37.7, 5.0], [37.8, 5.0], [37.9, 5.0], [38.0, 5.0], [38.1, 5.0], [38.2, 5.0], [38.3, 5.0], [38.4, 5.0], [38.5, 5.0], [38.6, 5.0], [38.7, 5.0], [38.8, 6.0], [38.9, 6.0], [39.0, 6.0], [39.1, 6.0], [39.2, 6.0], [39.3, 6.0], [39.4, 6.0], [39.5, 6.0], [39.6, 6.0], [39.7, 6.0], [39.8, 6.0], [39.9, 6.0], [40.0, 6.0], [40.1, 6.0], [40.2, 6.0], [40.3, 6.0], [40.4, 6.0], [40.5, 6.0], [40.6, 6.0], [40.7, 7.0], [40.8, 7.0], [40.9, 7.0], [41.0, 7.0], [41.1, 7.0], [41.2, 7.0], [41.3, 7.0], [41.4, 7.0], [41.5, 7.0], [41.6, 7.0], [41.7, 7.0], [41.8, 7.0], [41.9, 8.0], [42.0, 8.0], [42.1, 8.0], [42.2, 8.0], [42.3, 8.0], [42.4, 8.0], [42.5, 8.0], [42.6, 9.0], [42.7, 9.0], [42.8, 9.0], [42.9, 9.0], [43.0, 9.0], [43.1, 9.0], [43.2, 9.0], [43.3, 10.0], [43.4, 11.0], [43.5, 11.0], [43.6, 12.0], [43.7, 12.0], [43.8, 12.0], [43.9, 13.0], [44.0, 13.0], [44.1, 13.0], [44.2, 13.0], [44.3, 13.0], [44.4, 14.0], [44.5, 15.0], [44.6, 15.0], [44.7, 15.0], [44.8, 16.0], [44.9, 18.0], [45.0, 18.0], [45.1, 19.0], [45.2, 19.0], [45.3, 20.0], [45.4, 21.0], [45.5, 21.0], [45.6, 21.0], [45.7, 22.0], [45.8, 22.0], [45.9, 24.0], [46.0, 26.0], [46.1, 27.0], [46.2, 29.0], [46.3, 48.0], [46.4, 50.0], [46.5, 53.0], [46.6, 54.0], [46.7, 57.0], [46.8, 58.0], [46.9, 58.0], [47.0, 59.0], [47.1, 59.0], [47.2, 61.0], [47.3, 62.0], [47.4, 62.0], [47.5, 64.0], [47.6, 66.0], [47.7, 66.0], [47.8, 66.0], [47.9, 67.0], [48.0, 68.0], [48.1, 68.0], [48.2, 70.0], [48.3, 72.0], [48.4, 76.0], [48.5, 79.0], [48.6, 83.0], [48.7, 85.0], [48.8, 87.0], [48.9, 89.0], [49.0, 90.0], [49.1, 93.0], [49.2, 93.0], [49.3, 93.0], [49.4, 93.0], [49.5, 98.0], [49.6, 98.0], [49.7, 99.0], [49.8, 99.0], [49.9, 99.0], [50.0, 100.0], [50.1, 100.0], [50.2, 100.0], [50.3, 100.0], [50.4, 100.0], [50.5, 100.0], [50.6, 100.0], [50.7, 100.0], [50.8, 100.0], [50.9, 100.0], [51.0, 100.0], [51.1, 100.0], [51.2, 101.0], [51.3, 101.0], [51.4, 101.0], [51.5, 101.0], [51.6, 101.0], [51.7, 101.0], [51.8, 102.0], [51.9, 103.0], [52.0, 104.0], [52.1, 104.0], [52.2, 105.0], [52.3, 105.0], [52.4, 106.0], [52.5, 107.0], [52.6, 108.0], [52.7, 108.0], [52.8, 109.0], [52.9, 109.0], [53.0, 109.0], [53.1, 109.0], [53.2, 109.0], [53.3, 109.0], [53.4, 109.0], [53.5, 109.0], [53.6, 110.0], [53.7, 110.0], [53.8, 110.0], [53.9, 110.0], [54.0, 110.0], [54.1, 110.0], [54.2, 110.0], [54.3, 110.0], [54.4, 110.0], [54.5, 110.0], [54.6, 110.0], [54.7, 110.0], [54.8, 110.0], [54.9, 110.0], [55.0, 111.0], [55.1, 111.0], [55.2, 112.0], [55.3, 112.0], [55.4, 112.0], [55.5, 112.0], [55.6, 112.0], [55.7, 112.0], [55.8, 113.0], [55.9, 113.0], [56.0, 114.0], [56.1, 117.0], [56.2, 118.0], [56.3, 118.0], [56.4, 119.0], [56.5, 119.0], [56.6, 119.0], [56.7, 119.0], [56.8, 119.0], [56.9, 120.0], [57.0, 120.0], [57.1, 120.0], [57.2, 121.0], [57.3, 124.0], [57.4, 125.0], [57.5, 128.0], [57.6, 128.0], [57.7, 128.0], [57.8, 128.0], [57.9, 130.0], [58.0, 130.0], [58.1, 130.0], [58.2, 131.0], [58.3, 133.0], [58.4, 139.0], [58.5, 145.0], [58.6, 158.0], [58.7, 174.0], [58.8, 455.0], [58.9, 469.0], [59.0, 485.0], [59.1, 647.0], [59.2, 648.0], [59.3, 649.0], [59.4, 649.0], [59.5, 649.0], [59.6, 649.0], [59.7, 649.0], [59.8, 649.0], [59.9, 650.0], [60.0, 652.0], [60.1, 653.0], [60.2, 654.0], [60.3, 707.0], [60.4, 1010.0], [60.5, 1011.0], [60.6, 1012.0], [60.7, 1020.0], [60.8, 1020.0], [60.9, 1021.0], [61.0, 1022.0], [61.1, 1024.0], [61.2, 1030.0], [61.3, 1037.0], [61.4, 1041.0], [61.5, 1049.0], [61.6, 1059.0], [61.7, 1066.0], [61.8, 1077.0], [61.9, 1080.0], [62.0, 1085.0], [62.1, 1089.0], [62.2, 1089.0], [62.3, 1089.0], [62.4, 1089.0], [62.5, 1097.0], [62.6, 1102.0], [62.7, 1104.0], [62.8, 1105.0], [62.9, 1106.0], [63.0, 1107.0], [63.1, 1110.0], [63.2, 1119.0], [63.3, 1119.0], [63.4, 1119.0], [63.5, 1119.0], [63.6, 1120.0], [63.7, 1120.0], [63.8, 1120.0], [63.9, 1124.0], [64.0, 1128.0], [64.1, 1128.0], [64.2, 1129.0], [64.3, 1130.0], [64.4, 1130.0], [64.5, 1130.0], [64.6, 1130.0], [64.7, 1133.0], [64.8, 1137.0], [64.9, 1139.0], [65.0, 1140.0], [65.1, 1140.0], [65.2, 1140.0], [65.3, 1140.0], [65.4, 1141.0], [65.5, 1142.0], [65.6, 1149.0], [65.7, 1150.0], [65.8, 1150.0], [65.9, 1152.0], [66.0, 1155.0], [66.1, 1156.0], [66.2, 1157.0], [66.3, 1157.0], [66.4, 1159.0], [66.5, 1160.0], [66.6, 1160.0], [66.7, 1160.0], [66.8, 1160.0], [66.9, 1160.0], [67.0, 1164.0], [67.1, 1166.0], [67.2, 1169.0], [67.3, 1169.0], [67.4, 1170.0], [67.5, 1170.0], [67.6, 1170.0], [67.7, 1170.0], [67.8, 1170.0], [67.9, 1171.0], [68.0, 1171.0], [68.1, 1175.0], [68.2, 1175.0], [68.3, 1179.0], [68.4, 1180.0], [68.5, 1180.0], [68.6, 1180.0], [68.7, 1186.0], [68.8, 1187.0], [68.9, 1190.0], [69.0, 1192.0], [69.1, 1194.0], [69.2, 1201.0], [69.3, 1208.0], [69.4, 1220.0], [69.5, 1220.0], [69.6, 1290.0], [69.7, 1291.0], [69.8, 1291.0], [69.9, 1291.0], [70.0, 1296.0], [70.1, 1297.0], [70.2, 1341.0], [70.3, 1345.0], [70.4, 1357.0], [70.5, 1360.0], [70.6, 1360.0], [70.7, 1360.0], [70.8, 1380.0], [70.9, 1380.0], [71.0, 1390.0], [71.1, 1420.0], [71.2, 1474.0], [71.3, 1540.0], [71.4, 1560.0], [71.5, 1564.0], [71.6, 1583.0], [71.7, 1594.0], [71.8, 1603.0], [71.9, 1604.0], [72.0, 1621.0], [72.1, 1640.0], [72.2, 1640.0], [72.3, 1942.0], [72.4, 1986.0], [72.5, 1996.0], [72.6, 1998.0], [72.7, 2033.0], [72.8, 2571.0], [72.9, 2571.0], [73.0, 2571.0], [73.1, 2571.0], [73.2, 2571.0], [73.3, 2575.0], [73.4, 2575.0], [73.5, 2575.0], [73.6, 2576.0], [73.7, 2576.0], [73.8, 2577.0], [73.9, 2577.0], [74.0, 2577.0], [74.1, 2577.0], [74.2, 2578.0], [74.3, 2578.0], [74.4, 2580.0], [74.5, 2581.0], [74.6, 2803.0], [74.7, 2804.0], [74.8, 2811.0], [74.9, 2815.0], [75.0, 2826.0], [75.1, 2829.0], [75.2, 2830.0], [75.3, 2844.0], [75.4, 2878.0], [75.5, 2909.0], [75.6, 3090.0], [75.7, 3090.0], [75.8, 3091.0], [75.9, 3091.0], [76.0, 3091.0], [76.1, 3100.0], [76.2, 3100.0], [76.3, 3101.0], [76.4, 3109.0], [76.5, 3110.0], [76.6, 3111.0], [76.7, 3127.0], [76.8, 3128.0], [76.9, 3148.0], [77.0, 3150.0], [77.1, 3150.0], [77.2, 3151.0], [77.3, 3152.0], [77.4, 3160.0], [77.5, 3161.0], [77.6, 3163.0], [77.7, 3171.0], [77.8, 3180.0], [77.9, 3186.0], [78.0, 3190.0], [78.1, 3200.0], [78.2, 3201.0], [78.3, 3201.0], [78.4, 3204.0], [78.5, 3210.0], [78.6, 3210.0], [78.7, 3211.0], [78.8, 3219.0], [78.9, 3229.0], [79.0, 3230.0], [79.1, 3231.0], [79.2, 3239.0], [79.3, 3240.0], [79.4, 3240.0], [79.5, 3241.0], [79.6, 3247.0], [79.7, 3247.0], [79.8, 3248.0], [79.9, 3252.0], [80.0, 3256.0], [80.1, 3262.0], [80.2, 3267.0], [80.3, 3270.0], [80.4, 3270.0], [80.5, 3278.0], [80.6, 3379.0], [80.7, 3381.0], [80.8, 3410.0], [80.9, 3437.0], [81.0, 3440.0], [81.1, 3441.0], [81.2, 3442.0], [81.3, 3443.0], [81.4, 3444.0], [81.5, 3450.0], [81.6, 3454.0], [81.7, 3458.0], [81.8, 3472.0], [81.9, 3476.0], [82.0, 3480.0], [82.1, 3495.0], [82.2, 3496.0], [82.3, 3666.0], [82.4, 3670.0], [82.5, 3703.0], [82.6, 3932.0], [82.7, 3978.0], [82.8, 4030.0], [82.9, 4035.0], [83.0, 4038.0], [83.1, 4049.0], [83.2, 4079.0], [83.3, 4090.0], [83.4, 4164.0], [83.5, 4369.0], [83.6, 4381.0], [83.7, 4381.0], [83.8, 4447.0], [83.9, 4460.0], [84.0, 4475.0], [84.1, 4508.0], [84.2, 4740.0], [84.3, 4741.0], [84.4, 4780.0], [84.5, 4800.0], [84.6, 4821.0], [84.7, 4893.0], [84.8, 4898.0], [84.9, 4943.0], [85.0, 4972.0], [85.1, 5299.0], [85.2, 5300.0], [85.3, 5381.0], [85.4, 5451.0], [85.5, 5459.0], [85.6, 5539.0], [85.7, 5541.0], [85.8, 5541.0], [85.9, 5618.0], [86.0, 5779.0], [86.1, 5780.0], [86.2, 5781.0], [86.3, 5859.0], [86.4, 5860.0], [86.5, 5860.0], [86.6, 5861.0], [86.7, 5939.0], [86.8, 6020.0], [86.9, 6097.0], [87.0, 6181.0], [87.1, 6260.0], [87.2, 6262.0], [87.3, 6330.0], [87.4, 6336.0], [87.5, 6337.0], [87.6, 6337.0], [87.7, 6337.0], [87.8, 6338.0], [87.9, 6339.0], [88.0, 6339.0], [88.1, 6410.0], [88.2, 6413.0], [88.3, 6414.0], [88.4, 6481.0], [88.5, 6490.0], [88.6, 6576.0], [88.7, 6577.0], [88.8, 6597.0], [88.9, 6608.0], [89.0, 6640.0], [89.1, 6657.0], [89.2, 6709.0], [89.3, 6728.0], [89.4, 6770.0], [89.5, 6777.0], [89.6, 6795.0], [89.7, 6795.0], [89.8, 6800.0], [89.9, 6809.0], [90.0, 7169.0], [90.1, 7170.0], [90.2, 7170.0], [90.3, 7170.0], [90.4, 7171.0], [90.5, 7171.0], [90.6, 7171.0], [90.7, 7171.0], [90.8, 7171.0], [90.9, 7171.0], [91.0, 7171.0], [91.1, 7172.0], [91.2, 7172.0], [91.3, 7175.0], [91.4, 7175.0], [91.5, 7180.0], [91.6, 7181.0], [91.7, 7190.0], [91.8, 7191.0], [91.9, 7191.0], [92.0, 7200.0], [92.1, 7221.0], [92.2, 7221.0], [92.3, 7247.0], [92.4, 7318.0], [92.5, 7324.0], [92.6, 7329.0], [92.7, 7330.0], [92.8, 7347.0], [92.9, 7360.0], [93.0, 7370.0], [93.1, 7386.0], [93.2, 7504.0], [93.3, 7555.0], [93.4, 7566.0], [93.5, 7584.0], [93.6, 7596.0], [93.7, 7830.0], [93.8, 7980.0], [93.9, 8090.0], [94.0, 8872.0], [94.1, 8995.0], [94.2, 9006.0], [94.3, 9766.0], [94.4, 9782.0], [94.5, 9797.0], [94.6, 10051.0], [94.7, 10063.0], [94.8, 10064.0], [94.9, 10071.0], [95.0, 10092.0], [95.1, 10122.0], [95.2, 10142.0], [95.3, 10548.0], [95.4, 10559.0], [95.5, 10583.0], [95.6, 10586.0], [95.7, 14140.0], [95.8, 14196.0], [95.9, 14609.0], [96.0, 14645.0], [96.1, 14672.0], [96.2, 14679.0], [96.3, 14680.0], [96.4, 14680.0], [96.5, 14681.0], [96.6, 14681.0], [96.7, 14682.0], [96.8, 14682.0], [96.9, 14682.0], [97.0, 14682.0], [97.1, 14682.0], [97.2, 14682.0], [97.3, 14683.0], [97.4, 14683.0], [97.5, 14990.0], [97.6, 15246.0], [97.7, 15340.0], [97.8, 15366.0], [97.9, 15366.0], [98.0, 15415.0], [98.1, 15490.0], [98.2, 15491.0], [98.3, 15512.0], [98.4, 15520.0], [98.5, 15553.0], [98.6, 15557.0], [98.7, 15611.0], [98.8, 15631.0], [98.9, 15641.0], [99.0, 15669.0], [99.1, 15687.0], [99.2, 15694.0], [99.3, 15708.0], [99.4, 15710.0], [99.5, 15711.0], [99.6, 15751.0], [99.7, 15782.0], [99.8, 15802.0], [99.9, 15805.0], [100.0, 15840.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 0.0, "maxY": 525.0, "series": [{"data": [[0.0, 525.0], [600.0, 13.0], [700.0, 1.0], [1000.0, 23.0], [1100.0, 69.0], [1200.0, 11.0], [1300.0, 9.0], [1400.0, 2.0], [1500.0, 5.0], [1600.0, 6.0], [1900.0, 4.0], [2000.0, 1.0], [2500.0, 19.0], [2800.0, 9.0], [2900.0, 1.0], [3000.0, 6.0], [3100.0, 21.0], [3200.0, 26.0], [3300.0, 2.0], [3400.0, 16.0], [3600.0, 2.0], [3700.0, 1.0], [3900.0, 2.0], [4000.0, 6.0], [4100.0, 1.0], [4300.0, 3.0], [4500.0, 1.0], [4400.0, 4.0], [4800.0, 4.0], [4700.0, 3.0], [4900.0, 2.0], [5200.0, 1.0], [5300.0, 2.0], [5600.0, 1.0], [5400.0, 2.0], [5500.0, 3.0], [5800.0, 4.0], [5700.0, 4.0], [6000.0, 2.0], [5900.0, 1.0], [6100.0, 1.0], [6300.0, 9.0], [6200.0, 2.0], [6600.0, 3.0], [6500.0, 3.0], [6400.0, 5.0], [6700.0, 6.0], [6800.0, 2.0], [7100.0, 21.0], [7300.0, 8.0], [7200.0, 5.0], [7500.0, 5.0], [7800.0, 1.0], [7900.0, 1.0], [8000.0, 1.0], [9000.0, 1.0], [8900.0, 1.0], [8800.0, 2.0], [9700.0, 3.0], [10000.0, 5.0], [10100.0, 2.0], [10500.0, 4.0], [14100.0, 2.0], [14600.0, 17.0], [14900.0, 1.0], [15200.0, 1.0], [15300.0, 3.0], [15400.0, 4.0], [15500.0, 4.0], [15800.0, 3.0], [15700.0, 5.0], [15600.0, 6.0], [100.0, 92.0], [400.0, 3.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 15800.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 90.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 712.0, "series": [{"data": [[0.0, 134.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 90.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 114.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [[3.0, 712.0]], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 3.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 105.51619047619056, "minX": 1.71552378E12, "maxY": 105.51619047619056, "series": [{"data": [[1.71552378E12, 105.51619047619056]], "isOverall": false, "label": "Thread Group", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.71552378E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 1.0, "minX": 3.0, "maxY": 10260.632911392402, "series": [{"data": [[3.0, 1.0], [4.0, 1.0], [5.0, 2.0], [7.0, 1.5], [11.0, 1.0], [14.0, 2.0], [17.0, 2.0], [18.0, 2.0], [19.0, 2.0], [20.0, 2.4], [21.0, 2.0], [24.0, 1.0], [25.0, 1.3333333333333333], [26.0, 1.0], [28.0, 1.0], [29.0, 1.3333333333333333], [34.0, 1.0], [37.0, 2.0], [41.0, 2.111111111111111], [43.0, 2.25], [42.0, 1.5999999999999999], [45.0, 2.8], [47.0, 3.0], [46.0, 2.0], [49.0, 2.0], [48.0, 2.0], [51.0, 3.0], [50.0, 1.5], [53.0, 2.0], [55.0, 2.5], [57.0, 3.25], [56.0, 4.0], [59.0, 3.0], [58.0, 2.5], [61.0, 3.0], [60.0, 3.0], [63.0, 1.9], [67.0, 2.0], [66.0, 2.6], [65.0, 2.5714285714285716], [64.0, 2.5], [70.0, 3.333333333333333], [69.0, 2.166666666666667], [68.0, 2.3333333333333335], [75.0, 3.5588235294117645], [74.0, 4.333333333333333], [73.0, 4.5], [72.0, 3.0833333333333335], [79.0, 3.833333333333333], [78.0, 3.736842105263158], [77.0, 4.6], [76.0, 4.0], [83.0, 2.432432432432432], [81.0, 4.0625], [85.0, 203.42857142857142], [87.0, 2.4], [86.0, 3.0], [84.0, 3.7857142857142856], [91.0, 5139.222222222223], [90.0, 2104.367346938776], [89.0, 5.045454545454547], [88.0, 3.363636363636364], [93.0, 3305.25], [95.0, 3450.0], [94.0, 3994.6], [92.0, 6073.4], [99.0, 2.0], [98.0, 3.0], [97.0, 5466.869565217391], [96.0, 10260.632911392402], [102.0, 55.75000000000001], [103.0, 5.0], [101.0, 4.0], [100.0, 3.5], [105.0, 112.0], [107.0, 5.0], [106.0, 3515.2857142857138], [104.0, 387.6842105263157], [111.0, 73.66666666666667], [110.0, 10.42857142857143], [109.0, 6.666666666666667], [108.0, 5.5], [112.0, 2405.9090909090914], [115.0, 423.4], [114.0, 2.0], [113.0, 1437.4], [119.0, 2.3333333333333335], [118.0, 3774.0], [117.0, 8.5], [116.0, 6.333333333333333], [120.0, 40.166666666666664], [123.0, 4.5], [122.0, 4.0], [121.0, 4.333333333333333], [124.0, 4090.4999999999995], [127.0, 4.0], [126.0, 3902.5], [125.0, 2.2222222222222228], [131.0, 46.33333333333334], [134.0, 24.333333333333336], [135.0, 3.0], [133.0, 1478.3333333333333], [132.0, 8.5], [130.0, 3.0], [128.0, 4.333333333333333], [140.0, 364.375], [143.0, 2847.769230769231], [142.0, 1180.0], [141.0, 1667.1428571428569], [139.0, 274.83333333333337], [138.0, 1589.6666666666665], [137.0, 109.0], [136.0, 2169.3], [149.0, 890.9130434782608], [150.0, 1644.7738095238094], [148.0, 1560.0], [147.0, 2347.9], [146.0, 1476.6666666666665], [145.0, 3878.5555555555557], [144.0, 1724.2499999999995]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[105.51619047619056, 2018.6399999999985]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 150.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 653.4666666666667, "minX": 1.71552378E12, "maxY": 36032.166666666664, "series": [{"data": [[1.71552378E12, 36032.166666666664]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.71552378E12, 653.4666666666667]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.71552378E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 2018.6399999999985, "minX": 1.71552378E12, "maxY": 2018.6399999999985, "series": [{"data": [[1.71552378E12, 2018.6399999999985]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.71552378E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 550.7800000000004, "minX": 1.71552378E12, "maxY": 550.7800000000004, "series": [{"data": [[1.71552378E12, 550.7800000000004]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.71552378E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 1997.6733333333295, "minX": 1.71552378E12, "maxY": 1997.6733333333295, "series": [{"data": [[1.71552378E12, 1997.6733333333295]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.71552378E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 48.0, "minX": 1.71552378E12, "maxY": 9006.0, "series": [{"data": [[1.71552378E12, 9006.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.71552378E12, 48.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.71552378E12, 4080.1000000000004]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.71552378E12, 7988.600000000004]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.71552378E12, 1140.0]], "isOverall": false, "label": "Median", "isController": false}, {"data": [[1.71552378E12, 7318.3]], "isOverall": false, "label": "95th percentile", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.71552378E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 3.0, "minX": 1.0, "maxY": 15478.0, "series": [{"data": [[35.0, 1140.0], [37.0, 1152.0], [39.0, 1089.0], [42.0, 119.0], [21.0, 1564.0], [43.0, 3241.0], [188.0, 109.5], [6.0, 287.0], [29.0, 1357.0]], "isOverall": false, "label": "Successes", "isController": false}, {"data": [[1.0, 7171.0], [2.0, 7171.0], [20.0, 14681.0], [188.0, 7.0], [13.0, 7171.0], [7.0, 15478.0], [463.0, 3.0], [30.0, 7170.5]], "isOverall": false, "label": "Failures", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 463.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 0.0, "minX": 1.0, "maxY": 3240.0, "series": [{"data": [[35.0, 1140.0], [37.0, 1151.0], [39.0, 1089.0], [42.0, 118.5], [21.0, 1564.0], [43.0, 3240.0], [188.0, 109.0], [6.0, 283.0], [29.0, 1356.0]], "isOverall": false, "label": "Successes", "isController": false}, {"data": [[1.0, 0.0], [2.0, 0.0], [20.0, 0.0], [188.0, 0.0], [13.0, 0.0], [7.0, 0.0], [463.0, 0.0], [30.0, 0.0]], "isOverall": false, "label": "Failures", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 463.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 17.5, "minX": 1.71552378E12, "maxY": 17.5, "series": [{"data": [[1.71552378E12, 17.5]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.71552378E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 0.016666666666666666, "minX": 1.71552378E12, "maxY": 5.866666666666666, "series": [{"data": [[1.71552378E12, 5.633333333333334]], "isOverall": false, "label": "200", "isController": false}, {"data": [[1.71552378E12, 4.45]], "isOverall": false, "label": "Non HTTP response code: javax.net.ssl.SSLHandshakeException", "isController": false}, {"data": [[1.71552378E12, 5.866666666666666]], "isOverall": false, "label": "Non HTTP response code: org.apache.http.conn.HttpHostConnectException", "isController": false}, {"data": [[1.71552378E12, 0.016666666666666666]], "isOverall": false, "label": "Non HTTP response code: org.apache.http.NoHttpResponseException", "isController": false}, {"data": [[1.71552378E12, 1.5333333333333334]], "isOverall": false, "label": "Non HTTP response code: java.net.SocketException", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.71552378E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 5.633333333333334, "minX": 1.71552378E12, "maxY": 11.866666666666667, "series": [{"data": [[1.71552378E12, 5.633333333333334]], "isOverall": false, "label": "HTTP Request-success", "isController": false}, {"data": [[1.71552378E12, 11.866666666666667]], "isOverall": false, "label": "HTTP Request-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.71552378E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 5.633333333333334, "minX": 1.71552378E12, "maxY": 11.866666666666667, "series": [{"data": [[1.71552378E12, 5.633333333333334]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [[1.71552378E12, 11.866666666666667]], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.71552378E12, "title": "Total Transactions Per Second"}},
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

