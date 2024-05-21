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
        data: {"result": {"minY": 1.0, "minX": 0.0, "maxY": 27731.0, "series": [{"data": [[0.0, 1.0], [0.1, 1.0], [0.2, 1.0], [0.3, 1.0], [0.4, 1.0], [0.5, 1.0], [0.6, 1.0], [0.7, 1.0], [0.8, 1.0], [0.9, 1.0], [1.0, 1.0], [1.1, 1.0], [1.2, 1.0], [1.3, 1.0], [1.4, 1.0], [1.5, 1.0], [1.6, 1.0], [1.7, 1.0], [1.8, 1.0], [1.9, 1.0], [2.0, 1.0], [2.1, 1.0], [2.2, 1.0], [2.3, 1.0], [2.4, 1.0], [2.5, 1.0], [2.6, 2.0], [2.7, 2.0], [2.8, 2.0], [2.9, 2.0], [3.0, 2.0], [3.1, 2.0], [3.2, 2.0], [3.3, 2.0], [3.4, 2.0], [3.5, 2.0], [3.6, 2.0], [3.7, 2.0], [3.8, 2.0], [3.9, 2.0], [4.0, 2.0], [4.1, 2.0], [4.2, 2.0], [4.3, 2.0], [4.4, 2.0], [4.5, 2.0], [4.6, 2.0], [4.7, 2.0], [4.8, 2.0], [4.9, 2.0], [5.0, 2.0], [5.1, 2.0], [5.2, 2.0], [5.3, 2.0], [5.4, 2.0], [5.5, 2.0], [5.6, 2.0], [5.7, 2.0], [5.8, 2.0], [5.9, 2.0], [6.0, 2.0], [6.1, 2.0], [6.2, 2.0], [6.3, 2.0], [6.4, 2.0], [6.5, 2.0], [6.6, 2.0], [6.7, 2.0], [6.8, 2.0], [6.9, 2.0], [7.0, 2.0], [7.1, 2.0], [7.2, 2.0], [7.3, 2.0], [7.4, 2.0], [7.5, 2.0], [7.6, 2.0], [7.7, 2.0], [7.8, 2.0], [7.9, 2.0], [8.0, 2.0], [8.1, 2.0], [8.2, 2.0], [8.3, 2.0], [8.4, 3.0], [8.5, 3.0], [8.6, 3.0], [8.7, 3.0], [8.8, 3.0], [8.9, 3.0], [9.0, 3.0], [9.1, 3.0], [9.2, 3.0], [9.3, 3.0], [9.4, 3.0], [9.5, 3.0], [9.6, 3.0], [9.7, 3.0], [9.8, 3.0], [9.9, 3.0], [10.0, 3.0], [10.1, 3.0], [10.2, 3.0], [10.3, 3.0], [10.4, 3.0], [10.5, 3.0], [10.6, 3.0], [10.7, 3.0], [10.8, 3.0], [10.9, 3.0], [11.0, 3.0], [11.1, 3.0], [11.2, 3.0], [11.3, 3.0], [11.4, 3.0], [11.5, 3.0], [11.6, 3.0], [11.7, 3.0], [11.8, 3.0], [11.9, 3.0], [12.0, 3.0], [12.1, 3.0], [12.2, 3.0], [12.3, 3.0], [12.4, 3.0], [12.5, 3.0], [12.6, 3.0], [12.7, 3.0], [12.8, 3.0], [12.9, 3.0], [13.0, 3.0], [13.1, 3.0], [13.2, 3.0], [13.3, 3.0], [13.4, 3.0], [13.5, 3.0], [13.6, 3.0], [13.7, 3.0], [13.8, 3.0], [13.9, 3.0], [14.0, 3.0], [14.1, 3.0], [14.2, 4.0], [14.3, 4.0], [14.4, 4.0], [14.5, 4.0], [14.6, 4.0], [14.7, 4.0], [14.8, 4.0], [14.9, 4.0], [15.0, 4.0], [15.1, 4.0], [15.2, 4.0], [15.3, 4.0], [15.4, 4.0], [15.5, 4.0], [15.6, 4.0], [15.7, 4.0], [15.8, 4.0], [15.9, 4.0], [16.0, 4.0], [16.1, 4.0], [16.2, 4.0], [16.3, 4.0], [16.4, 4.0], [16.5, 4.0], [16.6, 4.0], [16.7, 4.0], [16.8, 4.0], [16.9, 4.0], [17.0, 4.0], [17.1, 4.0], [17.2, 4.0], [17.3, 4.0], [17.4, 4.0], [17.5, 4.0], [17.6, 4.0], [17.7, 4.0], [17.8, 4.0], [17.9, 4.0], [18.0, 4.0], [18.1, 4.0], [18.2, 4.0], [18.3, 4.0], [18.4, 4.0], [18.5, 4.0], [18.6, 5.0], [18.7, 5.0], [18.8, 5.0], [18.9, 5.0], [19.0, 5.0], [19.1, 5.0], [19.2, 5.0], [19.3, 5.0], [19.4, 5.0], [19.5, 5.0], [19.6, 5.0], [19.7, 5.0], [19.8, 5.0], [19.9, 5.0], [20.0, 5.0], [20.1, 5.0], [20.2, 5.0], [20.3, 5.0], [20.4, 5.0], [20.5, 5.0], [20.6, 5.0], [20.7, 5.0], [20.8, 5.0], [20.9, 5.0], [21.0, 5.0], [21.1, 5.0], [21.2, 5.0], [21.3, 5.0], [21.4, 5.0], [21.5, 5.0], [21.6, 5.0], [21.7, 5.0], [21.8, 5.0], [21.9, 5.0], [22.0, 5.0], [22.1, 5.0], [22.2, 5.0], [22.3, 5.0], [22.4, 5.0], [22.5, 6.0], [22.6, 6.0], [22.7, 6.0], [22.8, 6.0], [22.9, 6.0], [23.0, 6.0], [23.1, 6.0], [23.2, 6.0], [23.3, 6.0], [23.4, 6.0], [23.5, 6.0], [23.6, 6.0], [23.7, 6.0], [23.8, 6.0], [23.9, 6.0], [24.0, 6.0], [24.1, 6.0], [24.2, 6.0], [24.3, 6.0], [24.4, 6.0], [24.5, 6.0], [24.6, 6.0], [24.7, 6.0], [24.8, 6.0], [24.9, 6.0], [25.0, 6.0], [25.1, 6.0], [25.2, 6.0], [25.3, 6.0], [25.4, 6.0], [25.5, 6.0], [25.6, 7.0], [25.7, 7.0], [25.8, 7.0], [25.9, 7.0], [26.0, 7.0], [26.1, 7.0], [26.2, 7.0], [26.3, 7.0], [26.4, 7.0], [26.5, 7.0], [26.6, 7.0], [26.7, 7.0], [26.8, 7.0], [26.9, 7.0], [27.0, 7.0], [27.1, 7.0], [27.2, 7.0], [27.3, 7.0], [27.4, 7.0], [27.5, 7.0], [27.6, 7.0], [27.7, 7.0], [27.8, 7.0], [27.9, 7.0], [28.0, 7.0], [28.1, 7.0], [28.2, 7.0], [28.3, 7.0], [28.4, 7.0], [28.5, 7.0], [28.6, 7.0], [28.7, 7.0], [28.8, 7.0], [28.9, 7.0], [29.0, 8.0], [29.1, 8.0], [29.2, 8.0], [29.3, 8.0], [29.4, 8.0], [29.5, 8.0], [29.6, 8.0], [29.7, 8.0], [29.8, 8.0], [29.9, 8.0], [30.0, 8.0], [30.1, 8.0], [30.2, 8.0], [30.3, 8.0], [30.4, 8.0], [30.5, 8.0], [30.6, 8.0], [30.7, 8.0], [30.8, 8.0], [30.9, 8.0], [31.0, 8.0], [31.1, 8.0], [31.2, 8.0], [31.3, 8.0], [31.4, 8.0], [31.5, 8.0], [31.6, 8.0], [31.7, 8.0], [31.8, 8.0], [31.9, 8.0], [32.0, 8.0], [32.1, 8.0], [32.2, 8.0], [32.3, 8.0], [32.4, 8.0], [32.5, 8.0], [32.6, 9.0], [32.7, 9.0], [32.8, 9.0], [32.9, 9.0], [33.0, 9.0], [33.1, 9.0], [33.2, 9.0], [33.3, 9.0], [33.4, 9.0], [33.5, 9.0], [33.6, 9.0], [33.7, 9.0], [33.8, 9.0], [33.9, 9.0], [34.0, 9.0], [34.1, 9.0], [34.2, 9.0], [34.3, 9.0], [34.4, 9.0], [34.5, 9.0], [34.6, 9.0], [34.7, 9.0], [34.8, 9.0], [34.9, 9.0], [35.0, 9.0], [35.1, 9.0], [35.2, 9.0], [35.3, 9.0], [35.4, 9.0], [35.5, 9.0], [35.6, 9.0], [35.7, 9.0], [35.8, 9.0], [35.9, 10.0], [36.0, 10.0], [36.1, 10.0], [36.2, 10.0], [36.3, 10.0], [36.4, 10.0], [36.5, 10.0], [36.6, 10.0], [36.7, 10.0], [36.8, 10.0], [36.9, 10.0], [37.0, 10.0], [37.1, 10.0], [37.2, 10.0], [37.3, 10.0], [37.4, 10.0], [37.5, 10.0], [37.6, 10.0], [37.7, 10.0], [37.8, 10.0], [37.9, 11.0], [38.0, 11.0], [38.1, 11.0], [38.2, 11.0], [38.3, 11.0], [38.4, 11.0], [38.5, 11.0], [38.6, 11.0], [38.7, 11.0], [38.8, 11.0], [38.9, 11.0], [39.0, 11.0], [39.1, 11.0], [39.2, 11.0], [39.3, 11.0], [39.4, 11.0], [39.5, 11.0], [39.6, 12.0], [39.7, 12.0], [39.8, 12.0], [39.9, 12.0], [40.0, 12.0], [40.1, 12.0], [40.2, 12.0], [40.3, 12.0], [40.4, 12.0], [40.5, 12.0], [40.6, 12.0], [40.7, 12.0], [40.8, 12.0], [40.9, 12.0], [41.0, 13.0], [41.1, 13.0], [41.2, 13.0], [41.3, 13.0], [41.4, 13.0], [41.5, 13.0], [41.6, 13.0], [41.7, 13.0], [41.8, 13.0], [41.9, 13.0], [42.0, 13.0], [42.1, 13.0], [42.2, 13.0], [42.3, 13.0], [42.4, 13.0], [42.5, 13.0], [42.6, 13.0], [42.7, 13.0], [42.8, 13.0], [42.9, 13.0], [43.0, 13.0], [43.1, 14.0], [43.2, 14.0], [43.3, 14.0], [43.4, 14.0], [43.5, 14.0], [43.6, 14.0], [43.7, 14.0], [43.8, 14.0], [43.9, 14.0], [44.0, 14.0], [44.1, 14.0], [44.2, 14.0], [44.3, 14.0], [44.4, 15.0], [44.5, 15.0], [44.6, 15.0], [44.7, 15.0], [44.8, 15.0], [44.9, 15.0], [45.0, 15.0], [45.1, 15.0], [45.2, 15.0], [45.3, 15.0], [45.4, 16.0], [45.5, 16.0], [45.6, 16.0], [45.7, 16.0], [45.8, 16.0], [45.9, 16.0], [46.0, 16.0], [46.1, 16.0], [46.2, 16.0], [46.3, 16.0], [46.4, 16.0], [46.5, 17.0], [46.6, 17.0], [46.7, 17.0], [46.8, 17.0], [46.9, 17.0], [47.0, 17.0], [47.1, 17.0], [47.2, 18.0], [47.3, 18.0], [47.4, 18.0], [47.5, 18.0], [47.6, 18.0], [47.7, 18.0], [47.8, 18.0], [47.9, 18.0], [48.0, 18.0], [48.1, 18.0], [48.2, 18.0], [48.3, 18.0], [48.4, 18.0], [48.5, 18.0], [48.6, 18.0], [48.7, 18.0], [48.8, 18.0], [48.9, 18.0], [49.0, 19.0], [49.1, 19.0], [49.2, 19.0], [49.3, 19.0], [49.4, 20.0], [49.5, 20.0], [49.6, 20.0], [49.7, 20.0], [49.8, 20.0], [49.9, 20.0], [50.0, 21.0], [50.1, 21.0], [50.2, 44.0], [50.3, 44.0], [50.4, 48.0], [50.5, 48.0], [50.6, 49.0], [50.7, 49.0], [50.8, 50.0], [50.9, 50.0], [51.0, 50.0], [51.1, 51.0], [51.2, 52.0], [51.3, 52.0], [51.4, 53.0], [51.5, 53.0], [51.6, 55.0], [51.7, 55.0], [51.8, 56.0], [51.9, 57.0], [52.0, 57.0], [52.1, 57.0], [52.2, 58.0], [52.3, 58.0], [52.4, 58.0], [52.5, 59.0], [52.6, 60.0], [52.7, 61.0], [52.8, 62.0], [52.9, 64.0], [53.0, 64.0], [53.1, 64.0], [53.2, 65.0], [53.3, 66.0], [53.4, 66.0], [53.5, 67.0], [53.6, 67.0], [53.7, 67.0], [53.8, 67.0], [53.9, 67.0], [54.0, 68.0], [54.1, 69.0], [54.2, 70.0], [54.3, 71.0], [54.4, 71.0], [54.5, 75.0], [54.6, 76.0], [54.7, 76.0], [54.8, 80.0], [54.9, 84.0], [55.0, 88.0], [55.1, 89.0], [55.2, 90.0], [55.3, 92.0], [55.4, 95.0], [55.5, 95.0], [55.6, 97.0], [55.7, 98.0], [55.8, 98.0], [55.9, 98.0], [56.0, 99.0], [56.1, 99.0], [56.2, 99.0], [56.3, 100.0], [56.4, 100.0], [56.5, 100.0], [56.6, 100.0], [56.7, 100.0], [56.8, 100.0], [56.9, 100.0], [57.0, 100.0], [57.1, 100.0], [57.2, 100.0], [57.3, 100.0], [57.4, 100.0], [57.5, 100.0], [57.6, 100.0], [57.7, 100.0], [57.8, 100.0], [57.9, 101.0], [58.0, 101.0], [58.1, 101.0], [58.2, 101.0], [58.3, 102.0], [58.4, 102.0], [58.5, 102.0], [58.6, 103.0], [58.7, 103.0], [58.8, 104.0], [58.9, 104.0], [59.0, 104.0], [59.1, 104.0], [59.2, 104.0], [59.3, 104.0], [59.4, 105.0], [59.5, 105.0], [59.6, 105.0], [59.7, 106.0], [59.8, 106.0], [59.9, 108.0], [60.0, 108.0], [60.1, 109.0], [60.2, 109.0], [60.3, 109.0], [60.4, 109.0], [60.5, 109.0], [60.6, 109.0], [60.7, 110.0], [60.8, 110.0], [60.9, 110.0], [61.0, 110.0], [61.1, 110.0], [61.2, 110.0], [61.3, 110.0], [61.4, 110.0], [61.5, 110.0], [61.6, 110.0], [61.7, 110.0], [61.8, 110.0], [61.9, 110.0], [62.0, 110.0], [62.1, 110.0], [62.2, 110.0], [62.3, 110.0], [62.4, 110.0], [62.5, 110.0], [62.6, 110.0], [62.7, 110.0], [62.8, 110.0], [62.9, 110.0], [63.0, 110.0], [63.1, 110.0], [63.2, 110.0], [63.3, 110.0], [63.4, 110.0], [63.5, 110.0], [63.6, 110.0], [63.7, 111.0], [63.8, 111.0], [63.9, 111.0], [64.0, 111.0], [64.1, 112.0], [64.2, 113.0], [64.3, 113.0], [64.4, 113.0], [64.5, 114.0], [64.6, 114.0], [64.7, 114.0], [64.8, 117.0], [64.9, 117.0], [65.0, 118.0], [65.1, 119.0], [65.2, 119.0], [65.3, 119.0], [65.4, 119.0], [65.5, 119.0], [65.6, 120.0], [65.7, 120.0], [65.8, 120.0], [65.9, 120.0], [66.0, 120.0], [66.1, 120.0], [66.2, 120.0], [66.3, 120.0], [66.4, 120.0], [66.5, 121.0], [66.6, 121.0], [66.7, 122.0], [66.8, 123.0], [66.9, 123.0], [67.0, 127.0], [67.1, 127.0], [67.2, 128.0], [67.3, 130.0], [67.4, 130.0], [67.5, 130.0], [67.6, 130.0], [67.7, 130.0], [67.8, 130.0], [67.9, 133.0], [68.0, 135.0], [68.1, 139.0], [68.2, 139.0], [68.3, 140.0], [68.4, 140.0], [68.5, 141.0], [68.6, 141.0], [68.7, 164.0], [68.8, 174.0], [68.9, 458.0], [69.0, 459.0], [69.1, 1010.0], [69.2, 1012.0], [69.3, 1020.0], [69.4, 1021.0], [69.5, 1022.0], [69.6, 1023.0], [69.7, 1050.0], [69.8, 1063.0], [69.9, 1073.0], [70.0, 1078.0], [70.1, 1080.0], [70.2, 1083.0], [70.3, 1086.0], [70.4, 1090.0], [70.5, 1094.0], [70.6, 1097.0], [70.7, 1099.0], [70.8, 1101.0], [70.9, 1105.0], [71.0, 1107.0], [71.1, 1112.0], [71.2, 1114.0], [71.3, 1116.0], [71.4, 1119.0], [71.5, 1120.0], [71.6, 1120.0], [71.7, 1124.0], [71.8, 1124.0], [71.9, 1124.0], [72.0, 1127.0], [72.1, 1129.0], [72.2, 1130.0], [72.3, 1130.0], [72.4, 1131.0], [72.5, 1135.0], [72.6, 1139.0], [72.7, 1140.0], [72.8, 1140.0], [72.9, 1140.0], [73.0, 1144.0], [73.1, 1144.0], [73.2, 1144.0], [73.3, 1147.0], [73.4, 1149.0], [73.5, 1150.0], [73.6, 1150.0], [73.7, 1150.0], [73.8, 1150.0], [73.9, 1150.0], [74.0, 1152.0], [74.1, 1152.0], [74.2, 1159.0], [74.3, 1160.0], [74.4, 1170.0], [74.5, 1170.0], [74.6, 1170.0], [74.7, 1171.0], [74.8, 1173.0], [74.9, 1173.0], [75.0, 1180.0], [75.1, 1180.0], [75.2, 1181.0], [75.3, 1183.0], [75.4, 1183.0], [75.5, 1189.0], [75.6, 1190.0], [75.7, 1190.0], [75.8, 1190.0], [75.9, 1206.0], [76.0, 1211.0], [76.1, 1310.0], [76.2, 1340.0], [76.3, 1350.0], [76.4, 1354.0], [76.5, 1365.0], [76.6, 1366.0], [76.7, 1367.0], [76.8, 1380.0], [76.9, 1390.0], [77.0, 1390.0], [77.1, 1391.0], [77.2, 1413.0], [77.3, 1416.0], [77.4, 1421.0], [77.5, 1547.0], [77.6, 1564.0], [77.7, 1570.0], [77.8, 1570.0], [77.9, 1587.0], [78.0, 1600.0], [78.1, 1604.0], [78.2, 1948.0], [78.3, 1984.0], [78.4, 1991.0], [78.5, 2005.0], [78.6, 2013.0], [78.7, 2019.0], [78.8, 2790.0], [78.9, 2851.0], [79.0, 2857.0], [79.1, 2987.0], [79.2, 3146.0], [79.3, 3200.0], [79.4, 3201.0], [79.5, 3202.0], [79.6, 3210.0], [79.7, 3213.0], [79.8, 3230.0], [79.9, 3230.0], [80.0, 3242.0], [80.1, 3244.0], [80.2, 3257.0], [80.3, 3260.0], [80.4, 3260.0], [80.5, 3273.0], [80.6, 3280.0], [80.7, 3298.0], [80.8, 3430.0], [80.9, 3430.0], [81.0, 3450.0], [81.1, 3452.0], [81.2, 3463.0], [81.3, 3483.0], [81.4, 3650.0], [81.5, 3660.0], [81.6, 3660.0], [81.7, 3673.0], [81.8, 3674.0], [81.9, 3683.0], [82.0, 3722.0], [82.1, 4050.0], [82.2, 4075.0], [82.3, 4112.0], [82.4, 4492.0], [82.5, 4494.0], [82.6, 4494.0], [82.7, 4494.0], [82.8, 4495.0], [82.9, 4496.0], [83.0, 4521.0], [83.1, 4874.0], [83.2, 4952.0], [83.3, 5131.0], [83.4, 5131.0], [83.5, 5131.0], [83.6, 5773.0], [83.7, 6406.0], [83.8, 6407.0], [83.9, 6407.0], [84.0, 6407.0], [84.1, 6407.0], [84.2, 6407.0], [84.3, 6407.0], [84.4, 6408.0], [84.5, 6409.0], [84.6, 6409.0], [84.7, 6409.0], [84.8, 6410.0], [84.9, 6410.0], [85.0, 6753.0], [85.1, 7052.0], [85.2, 7053.0], [85.3, 7119.0], [85.4, 7181.0], [85.5, 7184.0], [85.6, 7199.0], [85.7, 7200.0], [85.8, 7200.0], [85.9, 7210.0], [86.0, 7241.0], [86.1, 7242.0], [86.2, 7244.0], [86.3, 7290.0], [86.4, 7293.0], [86.5, 7305.0], [86.6, 7309.0], [86.7, 7340.0], [86.8, 7343.0], [86.9, 7349.0], [87.0, 7424.0], [87.1, 7484.0], [87.2, 7484.0], [87.3, 7515.0], [87.4, 7690.0], [87.5, 7691.0], [87.6, 7702.0], [87.7, 7802.0], [87.8, 7811.0], [87.9, 7831.0], [88.0, 7831.0], [88.1, 8329.0], [88.2, 8330.0], [88.3, 8331.0], [88.4, 8972.0], [88.5, 8972.0], [88.6, 8972.0], [88.7, 8973.0], [88.8, 9609.0], [88.9, 10241.0], [89.0, 10241.0], [89.1, 10241.0], [89.2, 10241.0], [89.3, 10241.0], [89.4, 10251.0], [89.5, 10251.0], [89.6, 10252.0], [89.7, 10886.0], [89.8, 10887.0], [89.9, 11520.0], [90.0, 11520.0], [90.1, 11520.0], [90.2, 11520.0], [90.3, 11520.0], [90.4, 11520.0], [90.5, 11520.0], [90.6, 11520.0], [90.7, 11521.0], [90.8, 11521.0], [90.9, 11521.0], [91.0, 11522.0], [91.1, 11522.0], [91.2, 11523.0], [91.3, 11525.0], [91.4, 11611.0], [91.5, 11770.0], [91.6, 11929.0], [91.7, 12164.0], [91.8, 12165.0], [91.9, 12167.0], [92.0, 12167.0], [92.1, 12168.0], [92.2, 12248.0], [92.3, 12249.0], [92.4, 12249.0], [92.5, 12251.0], [92.6, 13934.0], [92.7, 13938.0], [92.8, 13942.0], [92.9, 14245.0], [93.0, 14293.0], [93.1, 14324.0], [93.2, 14390.0], [93.3, 14581.0], [93.4, 15260.0], [93.5, 15282.0], [93.6, 15283.0], [93.7, 15310.0], [93.8, 15312.0], [93.9, 15332.0], [94.0, 15332.0], [94.1, 15359.0], [94.2, 15360.0], [94.3, 15360.0], [94.4, 15413.0], [94.5, 15415.0], [94.6, 15420.0], [94.7, 15420.0], [94.8, 15420.0], [94.9, 15420.0], [95.0, 15422.0], [95.1, 15422.0], [95.2, 15427.0], [95.3, 15483.0], [95.4, 15484.0], [95.5, 15503.0], [95.6, 15571.0], [95.7, 15571.0], [95.8, 15571.0], [95.9, 15579.0], [96.0, 15580.0], [96.1, 15586.0], [96.2, 15603.0], [96.3, 15612.0], [96.4, 15616.0], [96.5, 15620.0], [96.6, 15630.0], [96.7, 15646.0], [96.8, 15650.0], [96.9, 15660.0], [97.0, 15666.0], [97.1, 15669.0], [97.2, 15670.0], [97.3, 15689.0], [97.4, 15698.0], [97.5, 15699.0], [97.6, 15705.0], [97.7, 15715.0], [97.8, 15722.0], [97.9, 15728.0], [98.0, 15730.0], [98.1, 15740.0], [98.2, 15748.0], [98.3, 15752.0], [98.4, 15771.0], [98.5, 15779.0], [98.6, 15830.0], [98.7, 15858.0], [98.8, 15866.0], [98.9, 17345.0], [99.0, 17393.0], [99.1, 20609.0], [99.2, 20664.0], [99.3, 20685.0], [99.4, 20989.0], [99.5, 21001.0], [99.6, 21197.0], [99.7, 21236.0], [99.8, 27702.0], [99.9, 27731.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 0.0, "maxY": 562.0, "series": [{"data": [[0.0, 562.0], [1000.0, 17.0], [1100.0, 51.0], [1200.0, 2.0], [1300.0, 11.0], [1400.0, 3.0], [1500.0, 5.0], [1600.0, 2.0], [1900.0, 3.0], [2000.0, 3.0], [2800.0, 2.0], [2700.0, 1.0], [2900.0, 1.0], [3100.0, 1.0], [3200.0, 15.0], [3400.0, 6.0], [3600.0, 6.0], [3700.0, 1.0], [4000.0, 2.0], [4100.0, 1.0], [4500.0, 1.0], [4400.0, 6.0], [4800.0, 1.0], [4900.0, 1.0], [5100.0, 3.0], [5700.0, 1.0], [6400.0, 13.0], [6700.0, 1.0], [7100.0, 4.0], [7000.0, 2.0], [7300.0, 5.0], [7400.0, 3.0], [7200.0, 8.0], [7500.0, 1.0], [7600.0, 2.0], [7800.0, 4.0], [7700.0, 1.0], [8300.0, 3.0], [8900.0, 4.0], [9600.0, 1.0], [10200.0, 8.0], [10800.0, 2.0], [11500.0, 15.0], [11700.0, 1.0], [11600.0, 1.0], [12200.0, 4.0], [12100.0, 5.0], [11900.0, 1.0], [14300.0, 2.0], [13900.0, 3.0], [14200.0, 2.0], [14500.0, 1.0], [15200.0, 3.0], [15300.0, 7.0], [15500.0, 7.0], [15600.0, 14.0], [15800.0, 3.0], [15700.0, 10.0], [15400.0, 11.0], [17300.0, 2.0], [21200.0, 1.0], [21100.0, 1.0], [20600.0, 3.0], [21000.0, 1.0], [20900.0, 1.0], [100.0, 126.0], [27700.0, 2.0], [400.0, 3.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 27700.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 75.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 662.0, "series": [{"data": [[0.0, 187.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 76.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 75.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [[3.0, 662.0]], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 3.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 73.60700000000001, "minX": 1.71552366E12, "maxY": 73.60700000000001, "series": [{"data": [[1.71552366E12, 73.60700000000001]], "isOverall": false, "label": "Thread Group", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.71552366E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 1.0, "minX": 1.0, "maxY": 14700.692307692305, "series": [{"data": [[4.0, 1.6666666666666667], [6.0, 3.0], [8.0, 2.0], [9.0, 2.0], [12.0, 1.75], [15.0, 3.0], [16.0, 5.0], [17.0, 3.0], [21.0, 6.142857142857142], [22.0, 6.0], [24.0, 6.0], [25.0, 3.0], [26.0, 9.0], [27.0, 7.5], [28.0, 7.333333333333333], [29.0, 7.0], [30.0, 6.0], [31.0, 5.0], [33.0, 4.0], [32.0, 5.0], [35.0, 3.0], [34.0, 2.6666666666666665], [36.0, 2.0], [39.0, 3.0], [38.0, 2.6], [41.0, 7.181818181818182], [40.0, 7.0], [43.0, 10.0], [42.0, 8.142857142857144], [45.0, 5.0], [44.0, 6.8], [47.0, 2.0], [46.0, 3.3333333333333335], [49.0, 12.0], [48.0, 5.124999999999999], [51.0, 8.0], [50.0, 10.066666666666666], [53.0, 7.199999999999999], [52.0, 7.5], [55.0, 3.4736842105263155], [54.0, 1.0], [57.0, 200.14285714285714], [56.0, 5.145833333333332], [59.0, 9.666666666666666], [58.0, 8.5], [61.0, 109.5], [60.0, 7.666666666666667], [62.0, 8.250000000000002], [63.0, 11.857142857142856], [64.0, 28.22222222222222], [67.0, 11.133333333333335], [66.0, 15.75], [68.0, 12.527777777777777], [71.0, 13.473684210526319], [70.0, 15.633333333333333], [69.0, 9.75], [72.0, 3879.0], [75.0, 14700.692307692305], [74.0, 13520.882352941177], [73.0, 7918.244444444444], [78.0, 69.8], [79.0, 3.0], [77.0, 3.0], [76.0, 2.0], [83.0, 852.2941176470586], [82.0, 2.0], [81.0, 1180.1904761904761], [80.0, 3.75], [84.0, 1487.8], [86.0, 26.2], [87.0, 3.25], [85.0, 2.5], [91.0, 6155.666666666665], [90.0, 2990.8], [89.0, 1921.2500000000002], [88.0, 2448.3999999999996], [92.0, 2544.04347826087], [95.0, 759.7407407407408], [94.0, 1251.8], [93.0, 1216.2941176470588], [97.0, 94.33333333333333], [99.0, 1165.526315789474], [98.0, 657.6923076923077], [96.0, 1322.1304347826087], [100.0, 859.588652482269], [1.0, 2.0]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[73.60700000000001, 2339.0979999999995]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 653.4666666666667, "minX": 1.71552366E12, "maxY": 32888.183333333334, "series": [{"data": [[1.71552366E12, 32888.183333333334]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.71552366E12, 653.4666666666667]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.71552366E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 2339.0979999999995, "minX": 1.71552366E12, "maxY": 2339.0979999999995, "series": [{"data": [[1.71552366E12, 2339.0979999999995]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.71552366E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 486.7759999999999, "minX": 1.71552366E12, "maxY": 486.7759999999999, "series": [{"data": [[1.71552366E12, 486.7759999999999]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.71552366E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 2317.9059999999968, "minX": 1.71552366E12, "maxY": 2317.9059999999968, "series": [{"data": [[1.71552366E12, 2317.9059999999968]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.71552366E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 44.0, "minX": 1.71552366E12, "maxY": 14390.0, "series": [{"data": [[1.71552366E12, 14390.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.71552366E12, 44.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.71552366E12, 3661.3]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.71552366E12, 14274.28]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.71552366E12, 130.0]], "isOverall": false, "label": "Median", "isController": false}, {"data": [[1.71552366E12, 7340.15]], "isOverall": false, "label": "95th percentile", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.71552366E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 4.0, "minX": 3.0, "maxY": 20609.0, "series": [{"data": [[36.0, 115.5], [37.0, 140.0], [39.0, 1101.0], [19.0, 1570.0], [41.0, 117.0], [42.0, 604.0], [46.0, 110.0], [105.0, 120.0], [15.0, 151.5]], "isOverall": false, "label": "Successes", "isController": false}, {"data": [[4.0, 15625.0], [18.0, 15679.0], [159.0, 19.0], [10.0, 15734.0], [5.0, 15366.0], [343.0, 7.0], [3.0, 15422.0], [6.0, 15390.0], [105.0, 4.0], [13.0, 20609.0]], "isOverall": false, "label": "Failures", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 343.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 0.0, "minX": 3.0, "maxY": 1569.0, "series": [{"data": [[36.0, 114.5], [37.0, 140.0], [39.0, 1100.5], [19.0, 1569.0], [41.0, 116.0], [42.0, 603.5], [46.0, 109.0], [105.0, 120.0], [15.0, 151.0]], "isOverall": false, "label": "Successes", "isController": false}, {"data": [[4.0, 0.0], [18.0, 0.0], [159.0, 0.0], [10.0, 0.0], [5.0, 0.0], [343.0, 0.0], [3.0, 0.0], [6.0, 0.0], [105.0, 0.0], [13.0, 0.0]], "isOverall": false, "label": "Failures", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 343.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 16.666666666666668, "minX": 1.71552366E12, "maxY": 16.666666666666668, "series": [{"data": [[1.71552366E12, 16.666666666666668]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.71552366E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 0.016666666666666666, "minX": 1.71552366E12, "maxY": 7.133333333333334, "series": [{"data": [[1.71552366E12, 5.633333333333334]], "isOverall": false, "label": "200", "isController": false}, {"data": [[1.71552366E12, 2.683333333333333]], "isOverall": false, "label": "Non HTTP response code: javax.net.ssl.SSLHandshakeException", "isController": false}, {"data": [[1.71552366E12, 7.133333333333334]], "isOverall": false, "label": "Non HTTP response code: org.apache.http.conn.HttpHostConnectException", "isController": false}, {"data": [[1.71552366E12, 0.016666666666666666]], "isOverall": false, "label": "Non HTTP response code: org.apache.http.NoHttpResponseException", "isController": false}, {"data": [[1.71552366E12, 1.2]], "isOverall": false, "label": "Non HTTP response code: java.net.SocketException", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.71552366E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 5.633333333333334, "minX": 1.71552366E12, "maxY": 11.033333333333333, "series": [{"data": [[1.71552366E12, 5.633333333333334]], "isOverall": false, "label": "HTTP Request-success", "isController": false}, {"data": [[1.71552366E12, 11.033333333333333]], "isOverall": false, "label": "HTTP Request-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.71552366E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 5.633333333333334, "minX": 1.71552366E12, "maxY": 11.033333333333333, "series": [{"data": [[1.71552366E12, 5.633333333333334]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [[1.71552366E12, 11.033333333333333]], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.71552366E12, "title": "Total Transactions Per Second"}},
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

