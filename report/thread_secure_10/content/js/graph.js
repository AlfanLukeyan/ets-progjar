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
        data: {"result": {"minY": 0.0, "minX": 0.0, "maxY": 80251.0, "series": [{"data": [[0.0, 0.0], [0.1, 1.0], [0.2, 1.0], [0.3, 1.0], [0.4, 1.0], [0.5, 1.0], [0.6, 2.0], [0.7, 3.0], [0.8, 4.0], [0.9, 4.0], [1.0, 4.0], [1.1, 4.0], [1.2, 5.0], [1.3, 5.0], [1.4, 5.0], [1.5, 5.0], [1.6, 5.0], [1.7, 5.0], [1.8, 5.0], [1.9, 5.0], [2.0, 5.0], [2.1, 6.0], [2.2, 6.0], [2.3, 6.0], [2.4, 6.0], [2.5, 6.0], [2.6, 6.0], [2.7, 6.0], [2.8, 6.0], [2.9, 6.0], [3.0, 6.0], [3.1, 6.0], [3.2, 7.0], [3.3, 7.0], [3.4, 7.0], [3.5, 7.0], [3.6, 7.0], [3.7, 7.0], [3.8, 7.0], [3.9, 7.0], [4.0, 8.0], [4.1, 8.0], [4.2, 8.0], [4.3, 8.0], [4.4, 8.0], [4.5, 8.0], [4.6, 8.0], [4.7, 8.0], [4.8, 8.0], [4.9, 8.0], [5.0, 8.0], [5.1, 9.0], [5.2, 9.0], [5.3, 9.0], [5.4, 9.0], [5.5, 9.0], [5.6, 9.0], [5.7, 9.0], [5.8, 9.0], [5.9, 9.0], [6.0, 9.0], [6.1, 10.0], [6.2, 10.0], [6.3, 10.0], [6.4, 10.0], [6.5, 10.0], [6.6, 10.0], [6.7, 10.0], [6.8, 10.0], [6.9, 11.0], [7.0, 11.0], [7.1, 11.0], [7.2, 11.0], [7.3, 11.0], [7.4, 11.0], [7.5, 12.0], [7.6, 12.0], [7.7, 12.0], [7.8, 12.0], [7.9, 12.0], [8.0, 12.0], [8.1, 12.0], [8.2, 12.0], [8.3, 12.0], [8.4, 12.0], [8.5, 12.0], [8.6, 13.0], [8.7, 13.0], [8.8, 13.0], [8.9, 13.0], [9.0, 13.0], [9.1, 13.0], [9.2, 13.0], [9.3, 13.0], [9.4, 14.0], [9.5, 14.0], [9.6, 14.0], [9.7, 14.0], [9.8, 14.0], [9.9, 14.0], [10.0, 14.0], [10.1, 14.0], [10.2, 14.0], [10.3, 14.0], [10.4, 15.0], [10.5, 15.0], [10.6, 15.0], [10.7, 15.0], [10.8, 16.0], [10.9, 16.0], [11.0, 16.0], [11.1, 16.0], [11.2, 16.0], [11.3, 16.0], [11.4, 16.0], [11.5, 16.0], [11.6, 16.0], [11.7, 16.0], [11.8, 16.0], [11.9, 17.0], [12.0, 17.0], [12.1, 17.0], [12.2, 17.0], [12.3, 17.0], [12.4, 17.0], [12.5, 18.0], [12.6, 18.0], [12.7, 18.0], [12.8, 18.0], [12.9, 18.0], [13.0, 18.0], [13.1, 18.0], [13.2, 19.0], [13.3, 19.0], [13.4, 19.0], [13.5, 19.0], [13.6, 19.0], [13.7, 20.0], [13.8, 20.0], [13.9, 20.0], [14.0, 20.0], [14.1, 20.0], [14.2, 20.0], [14.3, 20.0], [14.4, 20.0], [14.5, 20.0], [14.6, 21.0], [14.7, 21.0], [14.8, 21.0], [14.9, 21.0], [15.0, 22.0], [15.1, 22.0], [15.2, 22.0], [15.3, 22.0], [15.4, 22.0], [15.5, 22.0], [15.6, 22.0], [15.7, 22.0], [15.8, 23.0], [15.9, 23.0], [16.0, 23.0], [16.1, 23.0], [16.2, 23.0], [16.3, 23.0], [16.4, 23.0], [16.5, 23.0], [16.6, 23.0], [16.7, 23.0], [16.8, 24.0], [16.9, 24.0], [17.0, 24.0], [17.1, 24.0], [17.2, 24.0], [17.3, 24.0], [17.4, 24.0], [17.5, 24.0], [17.6, 25.0], [17.7, 25.0], [17.8, 25.0], [17.9, 25.0], [18.0, 25.0], [18.1, 25.0], [18.2, 25.0], [18.3, 26.0], [18.4, 26.0], [18.5, 26.0], [18.6, 26.0], [18.7, 26.0], [18.8, 26.0], [18.9, 26.0], [19.0, 27.0], [19.1, 27.0], [19.2, 27.0], [19.3, 27.0], [19.4, 27.0], [19.5, 28.0], [19.6, 28.0], [19.7, 28.0], [19.8, 28.0], [19.9, 28.0], [20.0, 28.0], [20.1, 28.0], [20.2, 28.0], [20.3, 29.0], [20.4, 29.0], [20.5, 29.0], [20.6, 29.0], [20.7, 29.0], [20.8, 29.0], [20.9, 29.0], [21.0, 29.0], [21.1, 29.0], [21.2, 29.0], [21.3, 30.0], [21.4, 30.0], [21.5, 30.0], [21.6, 30.0], [21.7, 30.0], [21.8, 30.0], [21.9, 30.0], [22.0, 31.0], [22.1, 31.0], [22.2, 31.0], [22.3, 31.0], [22.4, 31.0], [22.5, 31.0], [22.6, 32.0], [22.7, 32.0], [22.8, 32.0], [22.9, 32.0], [23.0, 32.0], [23.1, 33.0], [23.2, 33.0], [23.3, 33.0], [23.4, 33.0], [23.5, 34.0], [23.6, 34.0], [23.7, 34.0], [23.8, 35.0], [23.9, 35.0], [24.0, 35.0], [24.1, 35.0], [24.2, 35.0], [24.3, 35.0], [24.4, 36.0], [24.5, 36.0], [24.6, 36.0], [24.7, 37.0], [24.8, 37.0], [24.9, 37.0], [25.0, 37.0], [25.1, 38.0], [25.2, 38.0], [25.3, 38.0], [25.4, 38.0], [25.5, 39.0], [25.6, 39.0], [25.7, 39.0], [25.8, 40.0], [25.9, 40.0], [26.0, 40.0], [26.1, 40.0], [26.2, 40.0], [26.3, 41.0], [26.4, 41.0], [26.5, 41.0], [26.6, 42.0], [26.7, 42.0], [26.8, 42.0], [26.9, 42.0], [27.0, 42.0], [27.1, 42.0], [27.2, 42.0], [27.3, 43.0], [27.4, 43.0], [27.5, 43.0], [27.6, 43.0], [27.7, 43.0], [27.8, 44.0], [27.9, 44.0], [28.0, 44.0], [28.1, 45.0], [28.2, 45.0], [28.3, 45.0], [28.4, 45.0], [28.5, 45.0], [28.6, 46.0], [28.7, 46.0], [28.8, 47.0], [28.9, 48.0], [29.0, 48.0], [29.1, 48.0], [29.2, 48.0], [29.3, 49.0], [29.4, 49.0], [29.5, 49.0], [29.6, 50.0], [29.7, 51.0], [29.8, 51.0], [29.9, 51.0], [30.0, 51.0], [30.1, 51.0], [30.2, 51.0], [30.3, 52.0], [30.4, 52.0], [30.5, 53.0], [30.6, 53.0], [30.7, 53.0], [30.8, 53.0], [30.9, 54.0], [31.0, 54.0], [31.1, 55.0], [31.2, 55.0], [31.3, 55.0], [31.4, 56.0], [31.5, 57.0], [31.6, 57.0], [31.7, 57.0], [31.8, 57.0], [31.9, 57.0], [32.0, 58.0], [32.1, 58.0], [32.2, 58.0], [32.3, 58.0], [32.4, 59.0], [32.5, 59.0], [32.6, 60.0], [32.7, 60.0], [32.8, 60.0], [32.9, 60.0], [33.0, 61.0], [33.1, 61.0], [33.2, 61.0], [33.3, 61.0], [33.4, 63.0], [33.5, 63.0], [33.6, 64.0], [33.7, 64.0], [33.8, 64.0], [33.9, 64.0], [34.0, 65.0], [34.1, 65.0], [34.2, 65.0], [34.3, 66.0], [34.4, 66.0], [34.5, 67.0], [34.6, 68.0], [34.7, 68.0], [34.8, 68.0], [34.9, 68.0], [35.0, 68.0], [35.1, 68.0], [35.2, 68.0], [35.3, 68.0], [35.4, 69.0], [35.5, 71.0], [35.6, 71.0], [35.7, 72.0], [35.8, 72.0], [35.9, 72.0], [36.0, 73.0], [36.1, 73.0], [36.2, 74.0], [36.3, 74.0], [36.4, 74.0], [36.5, 74.0], [36.6, 74.0], [36.7, 75.0], [36.8, 75.0], [36.9, 75.0], [37.0, 76.0], [37.1, 77.0], [37.2, 78.0], [37.3, 78.0], [37.4, 79.0], [37.5, 80.0], [37.6, 80.0], [37.7, 80.0], [37.8, 81.0], [37.9, 81.0], [38.0, 81.0], [38.1, 82.0], [38.2, 83.0], [38.3, 83.0], [38.4, 84.0], [38.5, 85.0], [38.6, 85.0], [38.7, 85.0], [38.8, 85.0], [38.9, 86.0], [39.0, 87.0], [39.1, 88.0], [39.2, 88.0], [39.3, 89.0], [39.4, 89.0], [39.5, 89.0], [39.6, 90.0], [39.7, 90.0], [39.8, 90.0], [39.9, 91.0], [40.0, 91.0], [40.1, 91.0], [40.2, 92.0], [40.3, 92.0], [40.4, 92.0], [40.5, 92.0], [40.6, 93.0], [40.7, 93.0], [40.8, 94.0], [40.9, 94.0], [41.0, 94.0], [41.1, 95.0], [41.2, 95.0], [41.3, 95.0], [41.4, 96.0], [41.5, 96.0], [41.6, 98.0], [41.7, 99.0], [41.8, 99.0], [41.9, 99.0], [42.0, 100.0], [42.1, 100.0], [42.2, 101.0], [42.3, 101.0], [42.4, 102.0], [42.5, 102.0], [42.6, 103.0], [42.7, 105.0], [42.8, 105.0], [42.9, 106.0], [43.0, 108.0], [43.1, 109.0], [43.2, 109.0], [43.3, 109.0], [43.4, 111.0], [43.5, 111.0], [43.6, 111.0], [43.7, 114.0], [43.8, 114.0], [43.9, 114.0], [44.0, 115.0], [44.1, 115.0], [44.2, 116.0], [44.3, 116.0], [44.4, 116.0], [44.5, 117.0], [44.6, 120.0], [44.7, 120.0], [44.8, 122.0], [44.9, 122.0], [45.0, 123.0], [45.1, 124.0], [45.2, 124.0], [45.3, 125.0], [45.4, 128.0], [45.5, 130.0], [45.6, 130.0], [45.7, 130.0], [45.8, 131.0], [45.9, 132.0], [46.0, 132.0], [46.1, 133.0], [46.2, 133.0], [46.3, 136.0], [46.4, 136.0], [46.5, 137.0], [46.6, 137.0], [46.7, 138.0], [46.8, 139.0], [46.9, 141.0], [47.0, 141.0], [47.1, 142.0], [47.2, 143.0], [47.3, 145.0], [47.4, 145.0], [47.5, 145.0], [47.6, 145.0], [47.7, 149.0], [47.8, 149.0], [47.9, 149.0], [48.0, 149.0], [48.1, 150.0], [48.2, 152.0], [48.3, 153.0], [48.4, 153.0], [48.5, 155.0], [48.6, 157.0], [48.7, 157.0], [48.8, 157.0], [48.9, 157.0], [49.0, 158.0], [49.1, 158.0], [49.2, 161.0], [49.3, 162.0], [49.4, 164.0], [49.5, 164.0], [49.6, 165.0], [49.7, 167.0], [49.8, 167.0], [49.9, 167.0], [50.0, 167.0], [50.1, 169.0], [50.2, 171.0], [50.3, 171.0], [50.4, 173.0], [50.5, 173.0], [50.6, 174.0], [50.7, 176.0], [50.8, 177.0], [50.9, 184.0], [51.0, 185.0], [51.1, 185.0], [51.2, 185.0], [51.3, 185.0], [51.4, 186.0], [51.5, 186.0], [51.6, 187.0], [51.7, 188.0], [51.8, 191.0], [51.9, 192.0], [52.0, 192.0], [52.1, 193.0], [52.2, 193.0], [52.3, 193.0], [52.4, 193.0], [52.5, 196.0], [52.6, 197.0], [52.7, 197.0], [52.8, 198.0], [52.9, 199.0], [53.0, 199.0], [53.1, 199.0], [53.2, 200.0], [53.3, 203.0], [53.4, 206.0], [53.5, 207.0], [53.6, 207.0], [53.7, 209.0], [53.8, 209.0], [53.9, 211.0], [54.0, 212.0], [54.1, 214.0], [54.2, 217.0], [54.3, 221.0], [54.4, 225.0], [54.5, 225.0], [54.6, 226.0], [54.7, 229.0], [54.8, 230.0], [54.9, 231.0], [55.0, 232.0], [55.1, 234.0], [55.2, 234.0], [55.3, 238.0], [55.4, 239.0], [55.5, 243.0], [55.6, 245.0], [55.7, 247.0], [55.8, 247.0], [55.9, 251.0], [56.0, 257.0], [56.1, 258.0], [56.2, 260.0], [56.3, 263.0], [56.4, 264.0], [56.5, 265.0], [56.6, 269.0], [56.7, 270.0], [56.8, 275.0], [56.9, 276.0], [57.0, 277.0], [57.1, 277.0], [57.2, 278.0], [57.3, 278.0], [57.4, 279.0], [57.5, 279.0], [57.6, 284.0], [57.7, 286.0], [57.8, 287.0], [57.9, 288.0], [58.0, 288.0], [58.1, 289.0], [58.2, 292.0], [58.3, 295.0], [58.4, 296.0], [58.5, 297.0], [58.6, 299.0], [58.7, 302.0], [58.8, 306.0], [58.9, 316.0], [59.0, 319.0], [59.1, 320.0], [59.2, 322.0], [59.3, 337.0], [59.4, 338.0], [59.5, 341.0], [59.6, 343.0], [59.7, 353.0], [59.8, 356.0], [59.9, 357.0], [60.0, 357.0], [60.1, 371.0], [60.2, 379.0], [60.3, 381.0], [60.4, 402.0], [60.5, 406.0], [60.6, 417.0], [60.7, 418.0], [60.8, 427.0], [60.9, 427.0], [61.0, 430.0], [61.1, 432.0], [61.2, 432.0], [61.3, 435.0], [61.4, 438.0], [61.5, 447.0], [61.6, 454.0], [61.7, 486.0], [61.8, 493.0], [61.9, 500.0], [62.0, 506.0], [62.1, 523.0], [62.2, 548.0], [62.3, 571.0], [62.4, 599.0], [62.5, 603.0], [62.6, 607.0], [62.7, 610.0], [62.8, 620.0], [62.9, 641.0], [63.0, 650.0], [63.1, 663.0], [63.2, 668.0], [63.3, 671.0], [63.4, 687.0], [63.5, 749.0], [63.6, 753.0], [63.7, 761.0], [63.8, 788.0], [63.9, 791.0], [64.0, 802.0], [64.1, 841.0], [64.2, 841.0], [64.3, 858.0], [64.4, 879.0], [64.5, 888.0], [64.6, 980.0], [64.7, 1000.0], [64.8, 1000.0], [64.9, 1001.0], [65.0, 1002.0], [65.1, 1010.0], [65.2, 1019.0], [65.3, 1020.0], [65.4, 1022.0], [65.5, 1023.0], [65.6, 1024.0], [65.7, 1026.0], [65.8, 1027.0], [65.9, 1032.0], [66.0, 1034.0], [66.1, 1034.0], [66.2, 1038.0], [66.3, 1041.0], [66.4, 1043.0], [66.5, 1043.0], [66.6, 1045.0], [66.7, 1047.0], [66.8, 1048.0], [66.9, 1050.0], [67.0, 1054.0], [67.1, 1054.0], [67.2, 1059.0], [67.3, 1061.0], [67.4, 1064.0], [67.5, 1072.0], [67.6, 1072.0], [67.7, 1088.0], [67.8, 1088.0], [67.9, 1090.0], [68.0, 1090.0], [68.1, 1090.0], [68.2, 1093.0], [68.3, 1094.0], [68.4, 1095.0], [68.5, 1102.0], [68.6, 1103.0], [68.7, 1111.0], [68.8, 1112.0], [68.9, 1118.0], [69.0, 1119.0], [69.1, 1121.0], [69.2, 1122.0], [69.3, 1122.0], [69.4, 1125.0], [69.5, 1130.0], [69.6, 1144.0], [69.7, 1146.0], [69.8, 1150.0], [69.9, 1151.0], [70.0, 1156.0], [70.1, 1156.0], [70.2, 1159.0], [70.3, 1160.0], [70.4, 1162.0], [70.5, 1162.0], [70.6, 1165.0], [70.7, 1167.0], [70.8, 1167.0], [70.9, 1171.0], [71.0, 1175.0], [71.1, 1175.0], [71.2, 1180.0], [71.3, 1191.0], [71.4, 1205.0], [71.5, 1212.0], [71.6, 1217.0], [71.7, 1225.0], [71.8, 1226.0], [71.9, 1227.0], [72.0, 1237.0], [72.1, 1248.0], [72.2, 1257.0], [72.3, 1257.0], [72.4, 1261.0], [72.5, 1274.0], [72.6, 1275.0], [72.7, 1276.0], [72.8, 1284.0], [72.9, 1301.0], [73.0, 1320.0], [73.1, 1320.0], [73.2, 1325.0], [73.3, 1338.0], [73.4, 1341.0], [73.5, 1350.0], [73.6, 1354.0], [73.7, 1356.0], [73.8, 1357.0], [73.9, 1365.0], [74.0, 1382.0], [74.1, 1389.0], [74.2, 1427.0], [74.3, 1428.0], [74.4, 1428.0], [74.5, 1435.0], [74.6, 1438.0], [74.7, 1446.0], [74.8, 1463.0], [74.9, 1476.0], [75.0, 1508.0], [75.1, 1514.0], [75.2, 1520.0], [75.3, 1535.0], [75.4, 1576.0], [75.5, 1587.0], [75.6, 1602.0], [75.7, 1616.0], [75.8, 1646.0], [75.9, 1662.0], [76.0, 1679.0], [76.1, 1682.0], [76.2, 1728.0], [76.3, 1731.0], [76.4, 1762.0], [76.5, 1794.0], [76.6, 1805.0], [76.7, 1823.0], [76.8, 1876.0], [76.9, 1912.0], [77.0, 1927.0], [77.1, 1950.0], [77.2, 1955.0], [77.3, 1963.0], [77.4, 1963.0], [77.5, 1982.0], [77.6, 1990.0], [77.7, 2003.0], [77.8, 2004.0], [77.9, 2016.0], [78.0, 2028.0], [78.1, 2040.0], [78.2, 2043.0], [78.3, 2076.0], [78.4, 2080.0], [78.5, 2090.0], [78.6, 2106.0], [78.7, 2107.0], [78.8, 2109.0], [78.9, 2121.0], [79.0, 2122.0], [79.1, 2122.0], [79.2, 2127.0], [79.3, 2133.0], [79.4, 2138.0], [79.5, 2143.0], [79.6, 2151.0], [79.7, 2155.0], [79.8, 2156.0], [79.9, 2182.0], [80.0, 2189.0], [80.1, 2214.0], [80.2, 2215.0], [80.3, 2218.0], [80.4, 2229.0], [80.5, 2237.0], [80.6, 2245.0], [80.7, 2246.0], [80.8, 2268.0], [80.9, 2270.0], [81.0, 2279.0], [81.1, 2284.0], [81.2, 2299.0], [81.3, 2312.0], [81.4, 2318.0], [81.5, 2323.0], [81.6, 2330.0], [81.7, 2356.0], [81.8, 2379.0], [81.9, 2423.0], [82.0, 2439.0], [82.1, 2444.0], [82.2, 2447.0], [82.3, 2454.0], [82.4, 2457.0], [82.5, 2465.0], [82.6, 2511.0], [82.7, 2513.0], [82.8, 2543.0], [82.9, 2555.0], [83.0, 2570.0], [83.1, 2580.0], [83.2, 2588.0], [83.3, 2620.0], [83.4, 2623.0], [83.5, 2657.0], [83.6, 2687.0], [83.7, 2696.0], [83.8, 2717.0], [83.9, 2771.0], [84.0, 2797.0], [84.1, 2840.0], [84.2, 2850.0], [84.3, 2919.0], [84.4, 2928.0], [84.5, 2973.0], [84.6, 2976.0], [84.7, 3017.0], [84.8, 3041.0], [84.9, 3052.0], [85.0, 3053.0], [85.1, 3073.0], [85.2, 3095.0], [85.3, 3098.0], [85.4, 3111.0], [85.5, 3115.0], [85.6, 3151.0], [85.7, 3152.0], [85.8, 3171.0], [85.9, 3180.0], [86.0, 3189.0], [86.1, 3193.0], [86.2, 3212.0], [86.3, 3222.0], [86.4, 3257.0], [86.5, 3295.0], [86.6, 3313.0], [86.7, 3355.0], [86.8, 3373.0], [86.9, 3418.0], [87.0, 3434.0], [87.1, 3436.0], [87.2, 3482.0], [87.3, 3519.0], [87.4, 3527.0], [87.5, 3545.0], [87.6, 3557.0], [87.7, 3627.0], [87.8, 3640.0], [87.9, 3722.0], [88.0, 3724.0], [88.1, 3736.0], [88.2, 3785.0], [88.3, 3808.0], [88.4, 3810.0], [88.5, 3816.0], [88.6, 3864.0], [88.7, 3871.0], [88.8, 4003.0], [88.9, 4004.0], [89.0, 4038.0], [89.1, 4041.0], [89.2, 4091.0], [89.3, 4125.0], [89.4, 4130.0], [89.5, 4171.0], [89.6, 4172.0], [89.7, 4173.0], [89.8, 4176.0], [89.9, 4191.0], [90.0, 4203.0], [90.1, 4276.0], [90.2, 4299.0], [90.3, 4302.0], [90.4, 4312.0], [90.5, 4315.0], [90.6, 4318.0], [90.7, 4356.0], [90.8, 4543.0], [90.9, 4574.0], [91.0, 4596.0], [91.1, 4602.0], [91.2, 4641.0], [91.3, 4660.0], [91.4, 4692.0], [91.5, 4886.0], [91.6, 4921.0], [91.7, 4988.0], [91.8, 4997.0], [91.9, 5002.0], [92.0, 5020.0], [92.1, 5025.0], [92.2, 5181.0], [92.3, 5268.0], [92.4, 5387.0], [92.5, 5534.0], [92.6, 5558.0], [92.7, 5601.0], [92.8, 5646.0], [92.9, 5700.0], [93.0, 5717.0], [93.1, 5844.0], [93.2, 5876.0], [93.3, 5888.0], [93.4, 5898.0], [93.5, 5962.0], [93.6, 5963.0], [93.7, 5984.0], [93.8, 5986.0], [93.9, 6001.0], [94.0, 6081.0], [94.1, 6296.0], [94.2, 6483.0], [94.3, 6508.0], [94.4, 6598.0], [94.5, 6765.0], [94.6, 6951.0], [94.7, 6986.0], [94.8, 7057.0], [94.9, 7151.0], [95.0, 7190.0], [95.1, 7296.0], [95.2, 7324.0], [95.3, 7375.0], [95.4, 7398.0], [95.5, 7535.0], [95.6, 7560.0], [95.7, 7582.0], [95.8, 7616.0], [95.9, 7682.0], [96.0, 7834.0], [96.1, 7948.0], [96.2, 7969.0], [96.3, 8163.0], [96.4, 8208.0], [96.5, 8438.0], [96.6, 8471.0], [96.7, 8499.0], [96.8, 8567.0], [96.9, 8594.0], [97.0, 8839.0], [97.1, 8842.0], [97.2, 8847.0], [97.3, 8917.0], [97.4, 8948.0], [97.5, 9054.0], [97.6, 9478.0], [97.7, 9505.0], [97.8, 9752.0], [97.9, 10723.0], [98.0, 10785.0], [98.1, 11584.0], [98.2, 11884.0], [98.3, 12245.0], [98.4, 12508.0], [98.5, 12938.0], [98.6, 13050.0], [98.7, 13835.0], [98.8, 14202.0], [98.9, 14282.0], [99.0, 18701.0], [99.1, 19784.0], [99.2, 20965.0], [99.3, 22467.0], [99.4, 22669.0], [99.5, 23174.0], [99.6, 72532.0], [99.7, 74089.0], [99.8, 75001.0], [99.9, 80251.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 0.0, "maxY": 419.0, "series": [{"data": [[0.0, 419.0], [100.0, 112.0], [200.0, 55.0], [300.0, 17.0], [75000.0, 1.0], [80200.0, 1.0], [400.0, 15.0], [500.0, 6.0], [600.0, 10.0], [700.0, 5.0], [800.0, 6.0], [900.0, 1.0], [1000.0, 38.0], [1100.0, 30.0], [1200.0, 15.0], [1300.0, 13.0], [1400.0, 8.0], [1500.0, 6.0], [1600.0, 6.0], [1700.0, 4.0], [1800.0, 3.0], [1900.0, 8.0], [2000.0, 9.0], [2100.0, 15.0], [2200.0, 12.0], [2300.0, 6.0], [2400.0, 7.0], [2500.0, 7.0], [2600.0, 5.0], [2700.0, 3.0], [2800.0, 2.0], [2900.0, 4.0], [3000.0, 7.0], [3100.0, 8.0], [3200.0, 4.0], [3300.0, 3.0], [3400.0, 4.0], [3500.0, 4.0], [3700.0, 4.0], [3600.0, 2.0], [3800.0, 5.0], [4000.0, 5.0], [4200.0, 3.0], [4300.0, 5.0], [4100.0, 7.0], [4600.0, 4.0], [4500.0, 3.0], [72500.0, 1.0], [4800.0, 1.0], [5100.0, 1.0], [5000.0, 3.0], [4900.0, 3.0], [5200.0, 1.0], [5300.0, 1.0], [5600.0, 2.0], [5500.0, 2.0], [5800.0, 4.0], [5700.0, 2.0], [5900.0, 4.0], [6000.0, 2.0], [6200.0, 1.0], [6500.0, 2.0], [6400.0, 1.0], [6900.0, 2.0], [6700.0, 1.0], [7000.0, 1.0], [7100.0, 2.0], [7300.0, 3.0], [7200.0, 1.0], [7500.0, 3.0], [7600.0, 2.0], [7900.0, 2.0], [7800.0, 1.0], [8100.0, 1.0], [8400.0, 3.0], [8500.0, 2.0], [8200.0, 1.0], [8900.0, 2.0], [9000.0, 1.0], [8800.0, 3.0], [9500.0, 1.0], [9400.0, 1.0], [9700.0, 1.0], [10700.0, 2.0], [11500.0, 1.0], [12200.0, 1.0], [11800.0, 1.0], [12500.0, 1.0], [13000.0, 1.0], [12900.0, 1.0], [13800.0, 1.0], [14200.0, 2.0], [18700.0, 1.0], [19700.0, 1.0], [20900.0, 1.0], [22400.0, 1.0], [23100.0, 1.0], [22600.0, 1.0], [74000.0, 1.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 80200.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 17.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 611.0, "series": [{"data": [[0.0, 611.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 127.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 245.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [[3.0, 17.0]], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 3.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 2.4736842105263164, "minX": 1.71575328E12, "maxY": 9.30179028132993, "series": [{"data": [[1.71575334E12, 8.666666666666668], [1.71575346E12, 4.580645161290322], [1.71575328E12, 9.30179028132993], [1.7157534E12, 7.261904761904761], [1.71575352E12, 2.4736842105263164]], "isOverall": false, "label": "Thread Group", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.71575352E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 464.5667701863353, "minX": 1.0, "maxY": 6024.305555555556, "series": [{"data": [[4.0, 5828.57894736842], [8.0, 3643.315789473685], [2.0, 5133.374999999999], [1.0, 5888.0], [9.0, 2507.473684210527], [5.0, 3668.5], [10.0, 464.5667701863353], [3.0, 3457.6129032258063], [6.0, 6024.305555555556], [7.0, 5090.791666666667]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[8.860000000000012, 1679.324]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 10.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 36.733333333333334, "minX": 1.71575328E12, "maxY": 2590.0333333333333, "series": [{"data": [[1.71575334E12, 400.5], [1.71575346E12, 118.76666666666667], [1.71575328E12, 2590.0333333333333], [1.7157534E12, 102.9], [1.71575352E12, 46.55]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.71575334E12, 239.73333333333332], [1.71575346E12, 58.0], [1.71575328E12, 1484.8], [1.7157534E12, 81.2], [1.71575352E12, 36.733333333333334]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.71575352E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 424.9015345268541, "minX": 1.71575328E12, "maxY": 11671.548387096775, "series": [{"data": [[1.71575334E12, 3391.6190476190486], [1.71575346E12, 11671.548387096775], [1.71575328E12, 424.9015345268541], [1.7157534E12, 9622.190476190475], [1.71575352E12, 8092.473684210526]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.71575352E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 411.99488491048567, "minX": 1.71575328E12, "maxY": 9622.07142857143, "series": [{"data": [[1.71575334E12, 3335.9682539682544], [1.71575346E12, 9252.032258064513], [1.71575328E12, 411.99488491048567], [1.7157534E12, 9622.07142857143], [1.71575352E12, 8092.368421052631]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.71575352E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 333.25831202046044, "minX": 1.71575328E12, "maxY": 6939.935483870967, "series": [{"data": [[1.71575334E12, 2236.9285714285706], [1.71575346E12, 6939.935483870967], [1.71575328E12, 333.25831202046044], [1.7157534E12, 6476.166666666666], [1.71575352E12, 3348.0526315789475]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.71575352E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 4.0, "minX": 1.71575328E12, "maxY": 80251.0, "series": [{"data": [[1.71575334E12, 19784.0], [1.71575346E12, 74089.0], [1.71575328E12, 7582.0], [1.7157534E12, 80251.0], [1.71575352E12, 22669.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.71575334E12, 599.0], [1.71575346E12, 2028.0], [1.71575328E12, 4.0], [1.7157534E12, 1927.0], [1.71575352E12, 3222.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.71575334E12, 6148.5], [1.71575346E12, 11774.100000000002], [1.71575328E12, 1257.4], [1.7157534E12, 20285.800000000007], [1.71575352E12, 22467.0]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.71575334E12, 18100.5], [1.71575346E12, 74089.0], [1.71575328E12, 3953.0799999999745], [1.7157534E12, 80251.0], [1.71575352E12, 22669.0]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.71575334E12, 2575.0], [1.71575346E12, 7335.5], [1.71575328E12, 88.5], [1.7157534E12, 4628.0], [1.71575352E12, 5876.0]], "isOverall": false, "label": "Median", "isController": false}, {"data": [[1.71575334E12, 8812.5], [1.71575346E12, 40219.44999999995], [1.71575328E12, 2140.75], [1.7157534E12, 65128.30000000007], [1.71575352E12, 22669.0]], "isOverall": false, "label": "95th percentile", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.71575352E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 0.0, "minX": 1.0, "maxY": 38502.5, "series": [{"data": [[2.0, 4022.0], [35.0, 70.0], [43.0, 51.0], [3.0, 2504.5], [54.0, 42.0], [4.0, 2622.5], [68.0, 30.0], [81.0, 8.0], [5.0, 1242.5], [92.0, 20.0], [6.0, 663.0], [7.0, 432.0], [8.0, 1039.5], [9.0, 427.0], [10.0, 304.0], [12.0, 234.0], [13.0, 278.5], [14.0, 278.0], [15.0, 212.0], [1.0, 5579.5], [17.0, 251.0], [18.0, 174.0], [21.0, 149.0], [25.0, 125.0], [27.0, 114.0], [28.0, 97.0], [29.0, 80.0]], "isOverall": false, "label": "Successes", "isController": false}, {"data": [[2.0, 38502.5], [35.0, 1002.0], [12.0, 1001.0], [3.0, 5002.0], [13.0, 1.0], [54.0, 2.0], [14.0, 2003.0], [68.0, 0.0], [17.0, 1.0], [18.0, 1000.0], [81.0, 1.0], [92.0, 1.0], [6.0, 4004.0], [29.0, 1000.0]], "isOverall": false, "label": "Failures", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 92.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 0.0, "minX": 1.0, "maxY": 5579.5, "series": [{"data": [[2.0, 4022.0], [35.0, 70.0], [43.0, 51.0], [3.0, 2504.5], [54.0, 42.0], [4.0, 2622.5], [68.0, 30.0], [81.0, 8.0], [5.0, 1242.5], [92.0, 20.0], [6.0, 663.0], [7.0, 432.0], [8.0, 1039.5], [9.0, 427.0], [10.0, 303.5], [12.0, 234.0], [13.0, 278.0], [14.0, 277.0], [15.0, 212.0], [1.0, 5579.5], [17.0, 251.0], [18.0, 173.0], [21.0, 149.0], [25.0, 125.0], [27.0, 113.0], [28.0, 97.0], [29.0, 79.5]], "isOverall": false, "label": "Successes", "isController": false}, {"data": [[2.0, 0.0], [35.0, 0.0], [12.0, 0.0], [3.0, 0.0], [13.0, 0.0], [54.0, 0.0], [14.0, 0.0], [68.0, 0.0], [17.0, 0.0], [18.0, 0.0], [81.0, 0.0], [92.0, 0.0], [6.0, 0.0], [29.0, 0.0]], "isOverall": false, "label": "Failures", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 92.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 0.26666666666666666, "minX": 1.71575328E12, "maxY": 13.183333333333334, "series": [{"data": [[1.71575334E12, 2.0833333333333335], [1.71575346E12, 0.4666666666666667], [1.71575328E12, 13.183333333333334], [1.7157534E12, 0.6666666666666666], [1.71575352E12, 0.26666666666666666]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.71575352E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 0.016666666666666666, "minX": 1.71575328E12, "maxY": 12.8, "series": [{"data": [[1.71575334E12, 2.066666666666667], [1.71575346E12, 0.5], [1.71575328E12, 12.8], [1.7157534E12, 0.7], [1.71575352E12, 0.31666666666666665]], "isOverall": false, "label": "200", "isController": false}, {"data": [[1.71575346E12, 0.016666666666666666]], "isOverall": false, "label": "Non HTTP response code: org.apache.http.conn.HttpHostConnectException", "isController": false}, {"data": [[1.71575334E12, 0.03333333333333333], [1.71575328E12, 0.23333333333333334]], "isOverall": false, "label": "Non HTTP response code: java.net.SocketException", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.71575352E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 0.016666666666666666, "minX": 1.71575328E12, "maxY": 12.8, "series": [{"data": [[1.71575334E12, 2.066666666666667], [1.71575346E12, 0.5], [1.71575328E12, 12.8], [1.7157534E12, 0.7], [1.71575352E12, 0.31666666666666665]], "isOverall": false, "label": "HTTP Request-success", "isController": false}, {"data": [[1.71575334E12, 0.03333333333333333], [1.71575346E12, 0.016666666666666666], [1.71575328E12, 0.23333333333333334]], "isOverall": false, "label": "HTTP Request-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.71575352E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 0.016666666666666666, "minX": 1.71575328E12, "maxY": 12.8, "series": [{"data": [[1.71575334E12, 2.066666666666667], [1.71575346E12, 0.5], [1.71575328E12, 12.8], [1.7157534E12, 0.7], [1.71575352E12, 0.31666666666666665]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [[1.71575334E12, 0.03333333333333333], [1.71575346E12, 0.016666666666666666], [1.71575328E12, 0.23333333333333334]], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.71575352E12, "title": "Total Transactions Per Second"}},
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

