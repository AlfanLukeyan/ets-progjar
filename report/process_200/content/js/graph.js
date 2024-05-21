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
        data: {"result": {"minY": 0.0, "minX": 0.0, "maxY": 3265.0, "series": [{"data": [[0.0, 0.0], [0.1, 0.0], [0.2, 0.0], [0.3, 0.0], [0.4, 0.0], [0.5, 0.0], [0.6, 0.0], [0.7, 0.0], [0.8, 1.0], [0.9, 1.0], [1.0, 1.0], [1.1, 1.0], [1.2, 1.0], [1.3, 1.0], [1.4, 1.0], [1.5, 1.0], [1.6, 1.0], [1.7, 1.0], [1.8, 1.0], [1.9, 1.0], [2.0, 1.0], [2.1, 1.0], [2.2, 1.0], [2.3, 1.0], [2.4, 1.0], [2.5, 1.0], [2.6, 1.0], [2.7, 1.0], [2.8, 1.0], [2.9, 1.0], [3.0, 1.0], [3.1, 1.0], [3.2, 1.0], [3.3, 1.0], [3.4, 1.0], [3.5, 1.0], [3.6, 1.0], [3.7, 1.0], [3.8, 1.0], [3.9, 1.0], [4.0, 2.0], [4.1, 2.0], [4.2, 2.0], [4.3, 2.0], [4.4, 2.0], [4.5, 2.0], [4.6, 2.0], [4.7, 2.0], [4.8, 2.0], [4.9, 2.0], [5.0, 2.0], [5.1, 2.0], [5.2, 2.0], [5.3, 2.0], [5.4, 2.0], [5.5, 2.0], [5.6, 2.0], [5.7, 2.0], [5.8, 2.0], [5.9, 2.0], [6.0, 2.0], [6.1, 2.0], [6.2, 2.0], [6.3, 2.0], [6.4, 2.0], [6.5, 2.0], [6.6, 2.0], [6.7, 2.0], [6.8, 2.0], [6.9, 2.0], [7.0, 2.0], [7.1, 2.0], [7.2, 2.0], [7.3, 2.0], [7.4, 2.0], [7.5, 2.0], [7.6, 2.0], [7.7, 2.0], [7.8, 2.0], [7.9, 2.0], [8.0, 3.0], [8.1, 3.0], [8.2, 3.0], [8.3, 3.0], [8.4, 3.0], [8.5, 3.0], [8.6, 3.0], [8.7, 3.0], [8.8, 3.0], [8.9, 3.0], [9.0, 3.0], [9.1, 3.0], [9.2, 3.0], [9.3, 3.0], [9.4, 3.0], [9.5, 3.0], [9.6, 3.0], [9.7, 3.0], [9.8, 3.0], [9.9, 3.0], [10.0, 3.0], [10.1, 3.0], [10.2, 3.0], [10.3, 3.0], [10.4, 3.0], [10.5, 3.0], [10.6, 3.0], [10.7, 3.0], [10.8, 3.0], [10.9, 3.0], [11.0, 3.0], [11.1, 3.0], [11.2, 3.0], [11.3, 3.0], [11.4, 3.0], [11.5, 3.0], [11.6, 3.0], [11.7, 3.0], [11.8, 3.0], [11.9, 3.0], [12.0, 3.0], [12.1, 3.0], [12.2, 3.0], [12.3, 3.0], [12.4, 3.0], [12.5, 3.0], [12.6, 3.0], [12.7, 3.0], [12.8, 3.0], [12.9, 3.0], [13.0, 3.0], [13.1, 4.0], [13.2, 4.0], [13.3, 4.0], [13.4, 4.0], [13.5, 4.0], [13.6, 4.0], [13.7, 4.0], [13.8, 4.0], [13.9, 4.0], [14.0, 4.0], [14.1, 4.0], [14.2, 4.0], [14.3, 4.0], [14.4, 4.0], [14.5, 4.0], [14.6, 4.0], [14.7, 4.0], [14.8, 4.0], [14.9, 4.0], [15.0, 4.0], [15.1, 4.0], [15.2, 4.0], [15.3, 4.0], [15.4, 4.0], [15.5, 4.0], [15.6, 4.0], [15.7, 4.0], [15.8, 4.0], [15.9, 4.0], [16.0, 4.0], [16.1, 4.0], [16.2, 4.0], [16.3, 4.0], [16.4, 4.0], [16.5, 4.0], [16.6, 4.0], [16.7, 4.0], [16.8, 4.0], [16.9, 4.0], [17.0, 4.0], [17.1, 4.0], [17.2, 4.0], [17.3, 4.0], [17.4, 4.0], [17.5, 5.0], [17.6, 5.0], [17.7, 5.0], [17.8, 5.0], [17.9, 5.0], [18.0, 5.0], [18.1, 5.0], [18.2, 5.0], [18.3, 5.0], [18.4, 5.0], [18.5, 5.0], [18.6, 5.0], [18.7, 5.0], [18.8, 5.0], [18.9, 5.0], [19.0, 5.0], [19.1, 5.0], [19.2, 5.0], [19.3, 5.0], [19.4, 5.0], [19.5, 5.0], [19.6, 5.0], [19.7, 5.0], [19.8, 5.0], [19.9, 5.0], [20.0, 5.0], [20.1, 5.0], [20.2, 5.0], [20.3, 5.0], [20.4, 5.0], [20.5, 5.0], [20.6, 5.0], [20.7, 6.0], [20.8, 6.0], [20.9, 6.0], [21.0, 6.0], [21.1, 6.0], [21.2, 6.0], [21.3, 6.0], [21.4, 6.0], [21.5, 6.0], [21.6, 6.0], [21.7, 6.0], [21.8, 6.0], [21.9, 6.0], [22.0, 6.0], [22.1, 6.0], [22.2, 6.0], [22.3, 6.0], [22.4, 6.0], [22.5, 6.0], [22.6, 6.0], [22.7, 6.0], [22.8, 6.0], [22.9, 6.0], [23.0, 6.0], [23.1, 6.0], [23.2, 6.0], [23.3, 6.0], [23.4, 6.0], [23.5, 6.0], [23.6, 7.0], [23.7, 7.0], [23.8, 7.0], [23.9, 7.0], [24.0, 7.0], [24.1, 7.0], [24.2, 7.0], [24.3, 7.0], [24.4, 7.0], [24.5, 7.0], [24.6, 7.0], [24.7, 7.0], [24.8, 7.0], [24.9, 7.0], [25.0, 7.0], [25.1, 7.0], [25.2, 7.0], [25.3, 7.0], [25.4, 7.0], [25.5, 7.0], [25.6, 7.0], [25.7, 7.0], [25.8, 7.0], [25.9, 7.0], [26.0, 8.0], [26.1, 8.0], [26.2, 8.0], [26.3, 8.0], [26.4, 8.0], [26.5, 8.0], [26.6, 8.0], [26.7, 8.0], [26.8, 8.0], [26.9, 8.0], [27.0, 8.0], [27.1, 8.0], [27.2, 8.0], [27.3, 9.0], [27.4, 9.0], [27.5, 9.0], [27.6, 9.0], [27.7, 9.0], [27.8, 9.0], [27.9, 9.0], [28.0, 9.0], [28.1, 9.0], [28.2, 9.0], [28.3, 9.0], [28.4, 9.0], [28.5, 9.0], [28.6, 10.0], [28.7, 10.0], [28.8, 10.0], [28.9, 10.0], [29.0, 10.0], [29.1, 10.0], [29.2, 10.0], [29.3, 10.0], [29.4, 10.0], [29.5, 10.0], [29.6, 10.0], [29.7, 10.0], [29.8, 10.0], [29.9, 10.0], [30.0, 10.0], [30.1, 10.0], [30.2, 10.0], [30.3, 10.0], [30.4, 10.0], [30.5, 10.0], [30.6, 11.0], [30.7, 11.0], [30.8, 11.0], [30.9, 11.0], [31.0, 11.0], [31.1, 11.0], [31.2, 11.0], [31.3, 11.0], [31.4, 11.0], [31.5, 11.0], [31.6, 11.0], [31.7, 11.0], [31.8, 11.0], [31.9, 11.0], [32.0, 11.0], [32.1, 11.0], [32.2, 11.0], [32.3, 11.0], [32.4, 11.0], [32.5, 11.0], [32.6, 11.0], [32.7, 11.0], [32.8, 11.0], [32.9, 11.0], [33.0, 11.0], [33.1, 11.0], [33.2, 11.0], [33.3, 11.0], [33.4, 12.0], [33.5, 12.0], [33.6, 12.0], [33.7, 12.0], [33.8, 12.0], [33.9, 12.0], [34.0, 12.0], [34.1, 12.0], [34.2, 12.0], [34.3, 12.0], [34.4, 12.0], [34.5, 12.0], [34.6, 12.0], [34.7, 12.0], [34.8, 13.0], [34.9, 13.0], [35.0, 13.0], [35.1, 13.0], [35.2, 13.0], [35.3, 13.0], [35.4, 13.0], [35.5, 13.0], [35.6, 13.0], [35.7, 13.0], [35.8, 13.0], [35.9, 13.0], [36.0, 13.0], [36.1, 13.0], [36.2, 13.0], [36.3, 14.0], [36.4, 14.0], [36.5, 14.0], [36.6, 14.0], [36.7, 14.0], [36.8, 14.0], [36.9, 14.0], [37.0, 14.0], [37.1, 14.0], [37.2, 14.0], [37.3, 14.0], [37.4, 14.0], [37.5, 14.0], [37.6, 14.0], [37.7, 14.0], [37.8, 14.0], [37.9, 14.0], [38.0, 14.0], [38.1, 14.0], [38.2, 14.0], [38.3, 14.0], [38.4, 14.0], [38.5, 15.0], [38.6, 15.0], [38.7, 15.0], [38.8, 15.0], [38.9, 15.0], [39.0, 15.0], [39.1, 15.0], [39.2, 15.0], [39.3, 15.0], [39.4, 15.0], [39.5, 15.0], [39.6, 15.0], [39.7, 15.0], [39.8, 15.0], [39.9, 15.0], [40.0, 15.0], [40.1, 15.0], [40.2, 15.0], [40.3, 15.0], [40.4, 15.0], [40.5, 15.0], [40.6, 15.0], [40.7, 15.0], [40.8, 15.0], [40.9, 15.0], [41.0, 16.0], [41.1, 16.0], [41.2, 16.0], [41.3, 16.0], [41.4, 16.0], [41.5, 16.0], [41.6, 16.0], [41.7, 16.0], [41.8, 16.0], [41.9, 16.0], [42.0, 16.0], [42.1, 16.0], [42.2, 16.0], [42.3, 16.0], [42.4, 16.0], [42.5, 16.0], [42.6, 16.0], [42.7, 16.0], [42.8, 16.0], [42.9, 16.0], [43.0, 16.0], [43.1, 16.0], [43.2, 16.0], [43.3, 16.0], [43.4, 17.0], [43.5, 17.0], [43.6, 17.0], [43.7, 17.0], [43.8, 17.0], [43.9, 17.0], [44.0, 17.0], [44.1, 17.0], [44.2, 17.0], [44.3, 17.0], [44.4, 17.0], [44.5, 17.0], [44.6, 17.0], [44.7, 17.0], [44.8, 17.0], [44.9, 17.0], [45.0, 17.0], [45.1, 17.0], [45.2, 17.0], [45.3, 17.0], [45.4, 17.0], [45.5, 18.0], [45.6, 18.0], [45.7, 18.0], [45.8, 18.0], [45.9, 18.0], [46.0, 18.0], [46.1, 18.0], [46.2, 18.0], [46.3, 18.0], [46.4, 18.0], [46.5, 18.0], [46.6, 18.0], [46.7, 19.0], [46.8, 19.0], [46.9, 19.0], [47.0, 19.0], [47.1, 19.0], [47.2, 19.0], [47.3, 19.0], [47.4, 19.0], [47.5, 19.0], [47.6, 19.0], [47.7, 19.0], [47.8, 19.0], [47.9, 19.0], [48.0, 19.0], [48.1, 19.0], [48.2, 19.0], [48.3, 19.0], [48.4, 19.0], [48.5, 20.0], [48.6, 20.0], [48.7, 20.0], [48.8, 20.0], [48.9, 20.0], [49.0, 20.0], [49.1, 20.0], [49.2, 20.0], [49.3, 20.0], [49.4, 20.0], [49.5, 20.0], [49.6, 20.0], [49.7, 20.0], [49.8, 20.0], [49.9, 20.0], [50.0, 20.0], [50.1, 20.0], [50.2, 20.0], [50.3, 20.0], [50.4, 20.0], [50.5, 20.0], [50.6, 20.0], [50.7, 21.0], [50.8, 21.0], [50.9, 21.0], [51.0, 21.0], [51.1, 21.0], [51.2, 21.0], [51.3, 21.0], [51.4, 21.0], [51.5, 21.0], [51.6, 21.0], [51.7, 21.0], [51.8, 21.0], [51.9, 22.0], [52.0, 22.0], [52.1, 22.0], [52.2, 22.0], [52.3, 22.0], [52.4, 22.0], [52.5, 22.0], [52.6, 23.0], [52.7, 23.0], [52.8, 23.0], [52.9, 23.0], [53.0, 23.0], [53.1, 23.0], [53.2, 23.0], [53.3, 23.0], [53.4, 23.0], [53.5, 23.0], [53.6, 23.0], [53.7, 23.0], [53.8, 23.0], [53.9, 23.0], [54.0, 23.0], [54.1, 24.0], [54.2, 24.0], [54.3, 24.0], [54.4, 24.0], [54.5, 24.0], [54.6, 24.0], [54.7, 24.0], [54.8, 24.0], [54.9, 24.0], [55.0, 24.0], [55.1, 24.0], [55.2, 24.0], [55.3, 24.0], [55.4, 24.0], [55.5, 24.0], [55.6, 25.0], [55.7, 25.0], [55.8, 25.0], [55.9, 25.0], [56.0, 25.0], [56.1, 25.0], [56.2, 25.0], [56.3, 25.0], [56.4, 26.0], [56.5, 26.0], [56.6, 26.0], [56.7, 26.0], [56.8, 26.0], [56.9, 26.0], [57.0, 26.0], [57.1, 26.0], [57.2, 26.0], [57.3, 26.0], [57.4, 26.0], [57.5, 26.0], [57.6, 26.0], [57.7, 27.0], [57.8, 27.0], [57.9, 27.0], [58.0, 27.0], [58.1, 27.0], [58.2, 27.0], [58.3, 27.0], [58.4, 27.0], [58.5, 27.0], [58.6, 27.0], [58.7, 27.0], [58.8, 27.0], [58.9, 28.0], [59.0, 28.0], [59.1, 28.0], [59.2, 28.0], [59.3, 28.0], [59.4, 28.0], [59.5, 28.0], [59.6, 28.0], [59.7, 28.0], [59.8, 28.0], [59.9, 28.0], [60.0, 29.0], [60.1, 29.0], [60.2, 29.0], [60.3, 29.0], [60.4, 29.0], [60.5, 30.0], [60.6, 30.0], [60.7, 30.0], [60.8, 31.0], [60.9, 32.0], [61.0, 32.0], [61.1, 32.0], [61.2, 33.0], [61.3, 33.0], [61.4, 33.0], [61.5, 33.0], [61.6, 34.0], [61.7, 34.0], [61.8, 34.0], [61.9, 35.0], [62.0, 35.0], [62.1, 35.0], [62.2, 35.0], [62.3, 35.0], [62.4, 35.0], [62.5, 35.0], [62.6, 36.0], [62.7, 36.0], [62.8, 37.0], [62.9, 37.0], [63.0, 37.0], [63.1, 38.0], [63.2, 38.0], [63.3, 39.0], [63.4, 40.0], [63.5, 40.0], [63.6, 40.0], [63.7, 40.0], [63.8, 42.0], [63.9, 42.0], [64.0, 43.0], [64.1, 45.0], [64.2, 47.0], [64.3, 47.0], [64.4, 47.0], [64.5, 50.0], [64.6, 51.0], [64.7, 52.0], [64.8, 54.0], [64.9, 55.0], [65.0, 55.0], [65.1, 56.0], [65.2, 57.0], [65.3, 57.0], [65.4, 58.0], [65.5, 58.0], [65.6, 59.0], [65.7, 59.0], [65.8, 59.0], [65.9, 60.0], [66.0, 60.0], [66.1, 61.0], [66.2, 62.0], [66.3, 62.0], [66.4, 62.0], [66.5, 62.0], [66.6, 62.0], [66.7, 62.0], [66.8, 63.0], [66.9, 63.0], [67.0, 64.0], [67.1, 64.0], [67.2, 64.0], [67.3, 65.0], [67.4, 65.0], [67.5, 65.0], [67.6, 65.0], [67.7, 66.0], [67.8, 66.0], [67.9, 66.0], [68.0, 67.0], [68.1, 67.0], [68.2, 68.0], [68.3, 68.0], [68.4, 68.0], [68.5, 69.0], [68.6, 69.0], [68.7, 69.0], [68.8, 70.0], [68.9, 70.0], [69.0, 71.0], [69.1, 74.0], [69.2, 74.0], [69.3, 75.0], [69.4, 75.0], [69.5, 75.0], [69.6, 75.0], [69.7, 76.0], [69.8, 76.0], [69.9, 76.0], [70.0, 77.0], [70.1, 79.0], [70.2, 80.0], [70.3, 81.0], [70.4, 81.0], [70.5, 86.0], [70.6, 88.0], [70.7, 88.0], [70.8, 88.0], [70.9, 89.0], [71.0, 92.0], [71.1, 93.0], [71.2, 95.0], [71.3, 95.0], [71.4, 95.0], [71.5, 100.0], [71.6, 103.0], [71.7, 112.0], [71.8, 113.0], [71.9, 118.0], [72.0, 121.0], [72.1, 124.0], [72.2, 124.0], [72.3, 127.0], [72.4, 129.0], [72.5, 132.0], [72.6, 132.0], [72.7, 134.0], [72.8, 134.0], [72.9, 136.0], [73.0, 137.0], [73.1, 140.0], [73.2, 141.0], [73.3, 143.0], [73.4, 145.0], [73.5, 146.0], [73.6, 148.0], [73.7, 150.0], [73.8, 153.0], [73.9, 155.0], [74.0, 156.0], [74.1, 156.0], [74.2, 161.0], [74.3, 161.0], [74.4, 161.0], [74.5, 161.0], [74.6, 164.0], [74.7, 165.0], [74.8, 165.0], [74.9, 166.0], [75.0, 167.0], [75.1, 167.0], [75.2, 167.0], [75.3, 169.0], [75.4, 170.0], [75.5, 170.0], [75.6, 171.0], [75.7, 175.0], [75.8, 178.0], [75.9, 232.0], [76.0, 246.0], [76.1, 247.0], [76.2, 248.0], [76.3, 248.0], [76.4, 249.0], [76.5, 249.0], [76.6, 250.0], [76.7, 285.0], [76.8, 314.0], [76.9, 314.0], [77.0, 316.0], [77.1, 317.0], [77.2, 317.0], [77.3, 319.0], [77.4, 319.0], [77.5, 320.0], [77.6, 325.0], [77.7, 329.0], [77.8, 330.0], [77.9, 397.0], [78.0, 397.0], [78.1, 398.0], [78.2, 399.0], [78.3, 399.0], [78.4, 400.0], [78.5, 401.0], [78.6, 401.0], [78.7, 401.0], [78.8, 402.0], [78.9, 489.0], [79.0, 490.0], [79.1, 1022.0], [79.2, 1025.0], [79.3, 1026.0], [79.4, 1027.0], [79.5, 1028.0], [79.6, 1028.0], [79.7, 1028.0], [79.8, 1028.0], [79.9, 1029.0], [80.0, 1030.0], [80.1, 1030.0], [80.2, 1031.0], [80.3, 1032.0], [80.4, 1032.0], [80.5, 1033.0], [80.6, 1033.0], [80.7, 1034.0], [80.8, 1034.0], [80.9, 1034.0], [81.0, 1035.0], [81.1, 1035.0], [81.2, 1036.0], [81.3, 1036.0], [81.4, 1036.0], [81.5, 1037.0], [81.6, 1037.0], [81.7, 1037.0], [81.8, 1037.0], [81.9, 1038.0], [82.0, 1039.0], [82.1, 1041.0], [82.2, 1042.0], [82.3, 1045.0], [82.4, 1047.0], [82.5, 1049.0], [82.6, 1051.0], [82.7, 1052.0], [82.8, 1052.0], [82.9, 1052.0], [83.0, 1053.0], [83.1, 1053.0], [83.2, 1054.0], [83.3, 1056.0], [83.4, 1056.0], [83.5, 1058.0], [83.6, 1059.0], [83.7, 1060.0], [83.8, 1060.0], [83.9, 1063.0], [84.0, 1063.0], [84.1, 1063.0], [84.2, 1063.0], [84.3, 1063.0], [84.4, 1064.0], [84.5, 1065.0], [84.6, 1067.0], [84.7, 1067.0], [84.8, 1067.0], [84.9, 1068.0], [85.0, 1068.0], [85.1, 1069.0], [85.2, 1072.0], [85.3, 1073.0], [85.4, 1074.0], [85.5, 1074.0], [85.6, 1075.0], [85.7, 1076.0], [85.8, 1077.0], [85.9, 1077.0], [86.0, 1078.0], [86.1, 1079.0], [86.2, 1084.0], [86.3, 1088.0], [86.4, 1090.0], [86.5, 1099.0], [86.6, 1100.0], [86.7, 1110.0], [86.8, 1114.0], [86.9, 1115.0], [87.0, 1116.0], [87.1, 1124.0], [87.2, 1126.0], [87.3, 1127.0], [87.4, 1133.0], [87.5, 1134.0], [87.6, 1136.0], [87.7, 1140.0], [87.8, 1146.0], [87.9, 1187.0], [88.0, 1195.0], [88.1, 1198.0], [88.2, 1201.0], [88.3, 1202.0], [88.4, 1202.0], [88.5, 1229.0], [88.6, 1230.0], [88.7, 1240.0], [88.8, 1246.0], [88.9, 1257.0], [89.0, 1273.0], [89.1, 1280.0], [89.2, 1281.0], [89.3, 1281.0], [89.4, 1287.0], [89.5, 1289.0], [89.6, 1291.0], [89.7, 1291.0], [89.8, 1294.0], [89.9, 1295.0], [90.0, 1295.0], [90.1, 1300.0], [90.2, 1301.0], [90.3, 1302.0], [90.4, 1304.0], [90.5, 1306.0], [90.6, 1311.0], [90.7, 1315.0], [90.8, 1316.0], [90.9, 1329.0], [91.0, 1345.0], [91.1, 1348.0], [91.2, 1348.0], [91.3, 1351.0], [91.4, 1351.0], [91.5, 1355.0], [91.6, 1358.0], [91.7, 1359.0], [91.8, 1360.0], [91.9, 1362.0], [92.0, 1363.0], [92.1, 1367.0], [92.2, 1370.0], [92.3, 1373.0], [92.4, 1422.0], [92.5, 1519.0], [92.6, 1559.0], [92.7, 1577.0], [92.8, 1581.0], [92.9, 1585.0], [93.0, 1588.0], [93.1, 1608.0], [93.2, 1621.0], [93.3, 1639.0], [93.4, 1679.0], [93.5, 1681.0], [93.6, 1693.0], [93.7, 1696.0], [93.8, 1698.0], [93.9, 1700.0], [94.0, 1714.0], [94.1, 1719.0], [94.2, 1724.0], [94.3, 1734.0], [94.4, 1734.0], [94.5, 1735.0], [94.6, 1749.0], [94.7, 1758.0], [94.8, 1760.0], [94.9, 1762.0], [95.0, 1773.0], [95.1, 1786.0], [95.2, 1789.0], [95.3, 1790.0], [95.4, 1793.0], [95.5, 1794.0], [95.6, 1798.0], [95.7, 1803.0], [95.8, 3093.0], [95.9, 3098.0], [96.0, 3103.0], [96.1, 3104.0], [96.2, 3111.0], [96.3, 3120.0], [96.4, 3125.0], [96.5, 3142.0], [96.6, 3142.0], [96.7, 3143.0], [96.8, 3144.0], [96.9, 3144.0], [97.0, 3147.0], [97.1, 3148.0], [97.2, 3149.0], [97.3, 3150.0], [97.4, 3151.0], [97.5, 3151.0], [97.6, 3151.0], [97.7, 3157.0], [97.8, 3158.0], [97.9, 3165.0], [98.0, 3165.0], [98.1, 3169.0], [98.2, 3171.0], [98.3, 3176.0], [98.4, 3179.0], [98.5, 3190.0], [98.6, 3193.0], [98.7, 3198.0], [98.8, 3199.0], [98.9, 3202.0], [99.0, 3210.0], [99.1, 3211.0], [99.2, 3212.0], [99.3, 3214.0], [99.4, 3220.0], [99.5, 3222.0], [99.6, 3224.0], [99.7, 3225.0], [99.8, 3235.0], [99.9, 3265.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 0.0, "maxY": 715.0, "series": [{"data": [[0.0, 715.0], [3000.0, 2.0], [3100.0, 29.0], [200.0, 9.0], [3200.0, 11.0], [1000.0, 75.0], [1100.0, 16.0], [1200.0, 19.0], [300.0, 16.0], [1300.0, 23.0], [1400.0, 1.0], [1500.0, 6.0], [100.0, 44.0], [1600.0, 8.0], [400.0, 7.0], [1700.0, 18.0], [1800.0, 1.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 3200.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 1.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 493.0, "series": [{"data": [[0.0, 455.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 51.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 1.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [[3.0, 493.0]], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 3.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 107.48600000000027, "minX": 1.71545196E12, "maxY": 107.48600000000027, "series": [{"data": [[1.71545196E12, 107.48600000000027]], "isOverall": false, "label": "Thread Group", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.71545196E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 0.0, "minX": 1.0, "maxY": 2924.5744680851067, "series": [{"data": [[2.0, 0.0], [4.0, 1.0], [7.0, 2.0], [9.0, 0.0], [10.0, 1.0], [12.0, 1.0], [13.0, 0.8571428571428572], [15.0, 1.0], [16.0, 0.8], [17.0, 1.4], [18.0, 2.666666666666667], [19.0, 1.0], [22.0, 4.5], [23.0, 1.0], [24.0, 0.0], [25.0, 6.5], [27.0, 1.0], [29.0, 3.0], [32.0, 4.333333333333333], [35.0, 1.0], [34.0, 1.0], [36.0, 4.0], [47.0, 8.695652173913043], [46.0, 2.0], [49.0, 584.6666666666666], [48.0, 642.0], [51.0, 232.85714285714283], [50.0, 418.1333333333333], [53.0, 225.25], [52.0, 316.9], [55.0, 425.0], [54.0, 609.0], [57.0, 134.0], [58.0, 767.7499999999999], [59.0, 559.8571428571429], [60.0, 2924.5744680851067], [61.0, 602.0], [62.0, 750.1111111111111], [63.0, 945.25], [64.0, 343.6], [65.0, 777.8], [67.0, 94.0], [68.0, 23.857142857142858], [69.0, 64.5], [70.0, 59.33333333333333], [71.0, 47.99999999999999], [72.0, 50.666666666666664], [73.0, 608.1111111111111], [74.0, 32.0], [75.0, 34.0], [76.0, 62.0], [77.0, 20.25], [78.0, 882.7499999999999], [79.0, 584.6], [80.0, 1295.25], [81.0, 36.5], [82.0, 49.6], [83.0, 7.0], [84.0, 76.0], [86.0, 45.625], [87.0, 36.16666666666667], [85.0, 14.5], [88.0, 43.333333333333336], [91.0, 50.0], [90.0, 2.0], [89.0, 1336.083333333333], [92.0, 21.666666666666664], [93.0, 14.777777777777775], [94.0, 24.333333333333336], [95.0, 22.444444444444443], [97.0, 21.5], [98.0, 564.8333333333333], [99.0, 286.25], [96.0, 535.0], [100.0, 20.375], [101.0, 31.999999999999996], [102.0, 656.2142857142858], [103.0, 42.0], [104.0, 34.0], [106.0, 39.875], [107.0, 398.7], [105.0, 2.75], [108.0, 14.75], [109.0, 490.75], [110.0, 851.6666666666666], [111.0, 18.714285714285715], [112.0, 54.0], [113.0, 13.0], [114.0, 17.0], [115.0, 18.8], [116.0, 22.0], [117.0, 24.400000000000002], [119.0, 10.333333333333334], [121.0, 87.33333333333333], [122.0, 549.0], [123.0, 441.4], [120.0, 13.0], [124.0, 526.3333333333334], [125.0, 753.8571428571429], [126.0, 26.2], [127.0, 14.666666666666668], [128.0, 14.2], [129.0, 12.5], [131.0, 9.250000000000004], [132.0, 508.79999999999995], [133.0, 12.75], [134.0, 14.0], [135.0, 10.4], [130.0, 3.0], [136.0, 206.5], [138.0, 23.333333333333336], [139.0, 462.5714285714286], [140.0, 21.5], [141.0, 22.5], [142.0, 19.2], [143.0, 325.70000000000005], [137.0, 3.6666666666666665], [144.0, 309.42857142857144], [145.0, 640.3793103448276], [146.0, 12.0], [147.0, 9.4], [148.0, 9.555555555555555], [149.0, 313.14285714285717], [150.0, 312.25], [151.0, 204.71428571428572], [152.0, 214.8], [153.0, 373.8666666666667], [154.0, 426.66666666666663], [155.0, 13.0], [156.0, 14.5], [157.0, 15.062499999999996], [158.0, 342.15384615384613], [159.0, 14.75], [160.0, 16.000000000000004], [161.0, 17.0], [163.0, 324.00000000000006], [165.0, 20.222222222222225], [164.0, 15.5], [166.0, 11.200000000000001], [167.0, 9.0], [162.0, 546.2], [168.0, 357.1500000000001], [170.0, 27.4], [171.0, 30.2], [173.0, 13.5], [175.0, 29.9], [174.0, 16.27272727272727], [172.0, 5.5], [169.0, 67.6], [1.0, 1.0]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[107.48600000000027, 372.88999999999976]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 175.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 980.2, "minX": 1.71545196E12, "maxY": 19847.266666666666, "series": [{"data": [[1.71545196E12, 19847.266666666666]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.71545196E12, 980.2]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.71545196E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 372.88999999999976, "minX": 1.71545196E12, "maxY": 372.88999999999976, "series": [{"data": [[1.71545196E12, 372.88999999999976]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.71545196E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 78.92299999999997, "minX": 1.71545196E12, "maxY": 78.92299999999997, "series": [{"data": [[1.71545196E12, 78.92299999999997]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.71545196E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 2.4739999999999998, "minX": 1.71545196E12, "maxY": 2.4739999999999998, "series": [{"data": [[1.71545196E12, 2.4739999999999998]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.71545196E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 5.0, "minX": 1.71545196E12, "maxY": 1639.0, "series": [{"data": [[1.71545196E12, 1639.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.71545196E12, 5.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.71545196E12, 1031.6]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.71545196E12, 1362.76]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.71545196E12, 23.0]], "isOverall": false, "label": "Median", "isController": false}, {"data": [[1.71545196E12, 1138.3999999999999]], "isOverall": false, "label": "95th percentile", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.71545196E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 5.0, "minX": 27.0, "maxY": 1049.0, "series": [{"data": [[309.0, 19.0], [93.0, 79.0], [378.0, 19.0]], "isOverall": false, "label": "Successes", "isController": false}, {"data": [[378.0, 5.0], [193.0, 28.0], [27.0, 1049.0]], "isOverall": false, "label": "Failures", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 378.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 0.0, "minX": 27.0, "maxY": 79.0, "series": [{"data": [[309.0, 19.0], [93.0, 79.0], [378.0, 19.0]], "isOverall": false, "label": "Successes", "isController": false}, {"data": [[378.0, 0.0], [193.0, 0.0], [27.0, 0.0]], "isOverall": false, "label": "Failures", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 378.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 16.666666666666668, "minX": 1.71545196E12, "maxY": 16.666666666666668, "series": [{"data": [[1.71545196E12, 16.666666666666668]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.71545196E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 1.0, "minX": 1.71545196E12, "maxY": 8.45, "series": [{"data": [[1.71545196E12, 8.45]], "isOverall": false, "label": "200", "isController": false}, {"data": [[1.71545196E12, 1.6166666666666667]], "isOverall": false, "label": "Non HTTP response code: org.apache.http.conn.HttpHostConnectException", "isController": false}, {"data": [[1.71545196E12, 5.6]], "isOverall": false, "label": "Non HTTP response code: org.apache.http.NoHttpResponseException", "isController": false}, {"data": [[1.71545196E12, 1.0]], "isOverall": false, "label": "Non HTTP response code: java.net.SocketException", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.71545196E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 8.216666666666667, "minX": 1.71545196E12, "maxY": 8.45, "series": [{"data": [[1.71545196E12, 8.45]], "isOverall": false, "label": "HTTP Request-success", "isController": false}, {"data": [[1.71545196E12, 8.216666666666667]], "isOverall": false, "label": "HTTP Request-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.71545196E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 8.216666666666667, "minX": 1.71545196E12, "maxY": 8.45, "series": [{"data": [[1.71545196E12, 8.45]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [[1.71545196E12, 8.216666666666667]], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.71545196E12, "title": "Total Transactions Per Second"}},
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

