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
        data: {"result": {"minY": 59.0, "minX": 0.0, "maxY": 7943.0, "series": [{"data": [[0.0, 59.0], [0.1, 63.0], [0.2, 65.0], [0.3, 65.0], [0.4, 67.0], [0.5, 69.0], [0.6, 70.0], [0.7, 71.0], [0.8, 74.0], [0.9, 78.0], [1.0, 78.0], [1.1, 81.0], [1.2, 81.0], [1.3, 83.0], [1.4, 83.0], [1.5, 84.0], [1.6, 84.0], [1.7, 85.0], [1.8, 86.0], [1.9, 86.0], [2.0, 87.0], [2.1, 87.0], [2.2, 88.0], [2.3, 88.0], [2.4, 89.0], [2.5, 89.0], [2.6, 89.0], [2.7, 95.0], [2.8, 95.0], [2.9, 97.0], [3.0, 97.0], [3.1, 98.0], [3.2, 98.0], [3.3, 98.0], [3.4, 99.0], [3.5, 99.0], [3.6, 102.0], [3.7, 104.0], [3.8, 104.0], [3.9, 105.0], [4.0, 106.0], [4.1, 107.0], [4.2, 107.0], [4.3, 109.0], [4.4, 109.0], [4.5, 111.0], [4.6, 112.0], [4.7, 112.0], [4.8, 112.0], [4.9, 112.0], [5.0, 113.0], [5.1, 113.0], [5.2, 113.0], [5.3, 114.0], [5.4, 114.0], [5.5, 115.0], [5.6, 115.0], [5.7, 116.0], [5.8, 116.0], [5.9, 116.0], [6.0, 117.0], [6.1, 117.0], [6.2, 119.0], [6.3, 119.0], [6.4, 120.0], [6.5, 120.0], [6.6, 121.0], [6.7, 123.0], [6.8, 124.0], [6.9, 126.0], [7.0, 126.0], [7.1, 127.0], [7.2, 127.0], [7.3, 127.0], [7.4, 129.0], [7.5, 131.0], [7.6, 131.0], [7.7, 131.0], [7.8, 131.0], [7.9, 131.0], [8.0, 132.0], [8.1, 132.0], [8.2, 132.0], [8.3, 134.0], [8.4, 135.0], [8.5, 135.0], [8.6, 137.0], [8.7, 137.0], [8.8, 137.0], [8.9, 138.0], [9.0, 139.0], [9.1, 139.0], [9.2, 139.0], [9.3, 141.0], [9.4, 141.0], [9.5, 142.0], [9.6, 142.0], [9.7, 144.0], [9.8, 146.0], [9.9, 146.0], [10.0, 147.0], [10.1, 147.0], [10.2, 148.0], [10.3, 149.0], [10.4, 149.0], [10.5, 149.0], [10.6, 150.0], [10.7, 150.0], [10.8, 150.0], [10.9, 150.0], [11.0, 151.0], [11.1, 151.0], [11.2, 154.0], [11.3, 155.0], [11.4, 156.0], [11.5, 156.0], [11.6, 156.0], [11.7, 160.0], [11.8, 160.0], [11.9, 161.0], [12.0, 161.0], [12.1, 162.0], [12.2, 162.0], [12.3, 163.0], [12.4, 164.0], [12.5, 165.0], [12.6, 165.0], [12.7, 165.0], [12.8, 165.0], [12.9, 166.0], [13.0, 167.0], [13.1, 167.0], [13.2, 168.0], [13.3, 168.0], [13.4, 168.0], [13.5, 170.0], [13.6, 170.0], [13.7, 171.0], [13.8, 172.0], [13.9, 172.0], [14.0, 172.0], [14.1, 173.0], [14.2, 173.0], [14.3, 174.0], [14.4, 174.0], [14.5, 175.0], [14.6, 175.0], [14.7, 175.0], [14.8, 175.0], [14.9, 176.0], [15.0, 177.0], [15.1, 177.0], [15.2, 178.0], [15.3, 180.0], [15.4, 180.0], [15.5, 181.0], [15.6, 182.0], [15.7, 183.0], [15.8, 183.0], [15.9, 184.0], [16.0, 185.0], [16.1, 185.0], [16.2, 185.0], [16.3, 185.0], [16.4, 187.0], [16.5, 187.0], [16.6, 187.0], [16.7, 187.0], [16.8, 187.0], [16.9, 188.0], [17.0, 189.0], [17.1, 191.0], [17.2, 191.0], [17.3, 192.0], [17.4, 192.0], [17.5, 194.0], [17.6, 195.0], [17.7, 196.0], [17.8, 197.0], [17.9, 198.0], [18.0, 199.0], [18.1, 199.0], [18.2, 199.0], [18.3, 200.0], [18.4, 201.0], [18.5, 201.0], [18.6, 201.0], [18.7, 202.0], [18.8, 203.0], [18.9, 203.0], [19.0, 205.0], [19.1, 205.0], [19.2, 206.0], [19.3, 206.0], [19.4, 207.0], [19.5, 207.0], [19.6, 207.0], [19.7, 208.0], [19.8, 209.0], [19.9, 209.0], [20.0, 211.0], [20.1, 212.0], [20.2, 212.0], [20.3, 212.0], [20.4, 212.0], [20.5, 213.0], [20.6, 214.0], [20.7, 214.0], [20.8, 215.0], [20.9, 217.0], [21.0, 218.0], [21.1, 218.0], [21.2, 222.0], [21.3, 223.0], [21.4, 223.0], [21.5, 224.0], [21.6, 224.0], [21.7, 225.0], [21.8, 225.0], [21.9, 226.0], [22.0, 227.0], [22.1, 227.0], [22.2, 227.0], [22.3, 228.0], [22.4, 228.0], [22.5, 228.0], [22.6, 231.0], [22.7, 232.0], [22.8, 232.0], [22.9, 232.0], [23.0, 232.0], [23.1, 232.0], [23.2, 234.0], [23.3, 234.0], [23.4, 234.0], [23.5, 235.0], [23.6, 236.0], [23.7, 237.0], [23.8, 237.0], [23.9, 237.0], [24.0, 237.0], [24.1, 238.0], [24.2, 238.0], [24.3, 238.0], [24.4, 238.0], [24.5, 238.0], [24.6, 239.0], [24.7, 240.0], [24.8, 240.0], [24.9, 241.0], [25.0, 241.0], [25.1, 242.0], [25.2, 242.0], [25.3, 242.0], [25.4, 243.0], [25.5, 243.0], [25.6, 243.0], [25.7, 244.0], [25.8, 244.0], [25.9, 244.0], [26.0, 245.0], [26.1, 245.0], [26.2, 245.0], [26.3, 247.0], [26.4, 247.0], [26.5, 247.0], [26.6, 248.0], [26.7, 249.0], [26.8, 250.0], [26.9, 250.0], [27.0, 251.0], [27.1, 252.0], [27.2, 252.0], [27.3, 253.0], [27.4, 253.0], [27.5, 253.0], [27.6, 253.0], [27.7, 253.0], [27.8, 253.0], [27.9, 253.0], [28.0, 253.0], [28.1, 254.0], [28.2, 255.0], [28.3, 255.0], [28.4, 256.0], [28.5, 256.0], [28.6, 257.0], [28.7, 258.0], [28.8, 258.0], [28.9, 258.0], [29.0, 259.0], [29.1, 259.0], [29.2, 259.0], [29.3, 259.0], [29.4, 259.0], [29.5, 260.0], [29.6, 260.0], [29.7, 261.0], [29.8, 261.0], [29.9, 262.0], [30.0, 262.0], [30.1, 262.0], [30.2, 263.0], [30.3, 264.0], [30.4, 266.0], [30.5, 266.0], [30.6, 268.0], [30.7, 269.0], [30.8, 269.0], [30.9, 269.0], [31.0, 269.0], [31.1, 270.0], [31.2, 272.0], [31.3, 273.0], [31.4, 274.0], [31.5, 276.0], [31.6, 277.0], [31.7, 278.0], [31.8, 279.0], [31.9, 280.0], [32.0, 281.0], [32.1, 282.0], [32.2, 282.0], [32.3, 284.0], [32.4, 285.0], [32.5, 286.0], [32.6, 288.0], [32.7, 288.0], [32.8, 289.0], [32.9, 290.0], [33.0, 290.0], [33.1, 291.0], [33.2, 291.0], [33.3, 292.0], [33.4, 292.0], [33.5, 292.0], [33.6, 293.0], [33.7, 293.0], [33.8, 293.0], [33.9, 293.0], [34.0, 293.0], [34.1, 293.0], [34.2, 295.0], [34.3, 295.0], [34.4, 295.0], [34.5, 296.0], [34.6, 296.0], [34.7, 297.0], [34.8, 298.0], [34.9, 298.0], [35.0, 299.0], [35.1, 299.0], [35.2, 300.0], [35.3, 302.0], [35.4, 302.0], [35.5, 303.0], [35.6, 303.0], [35.7, 304.0], [35.8, 304.0], [35.9, 304.0], [36.0, 305.0], [36.1, 305.0], [36.2, 307.0], [36.3, 307.0], [36.4, 308.0], [36.5, 309.0], [36.6, 309.0], [36.7, 310.0], [36.8, 310.0], [36.9, 310.0], [37.0, 311.0], [37.1, 312.0], [37.2, 312.0], [37.3, 314.0], [37.4, 314.0], [37.5, 314.0], [37.6, 314.0], [37.7, 315.0], [37.8, 316.0], [37.9, 318.0], [38.0, 319.0], [38.1, 319.0], [38.2, 319.0], [38.3, 319.0], [38.4, 320.0], [38.5, 320.0], [38.6, 321.0], [38.7, 321.0], [38.8, 323.0], [38.9, 324.0], [39.0, 324.0], [39.1, 324.0], [39.2, 324.0], [39.3, 325.0], [39.4, 325.0], [39.5, 326.0], [39.6, 326.0], [39.7, 327.0], [39.8, 328.0], [39.9, 329.0], [40.0, 330.0], [40.1, 331.0], [40.2, 331.0], [40.3, 332.0], [40.4, 333.0], [40.5, 333.0], [40.6, 334.0], [40.7, 334.0], [40.8, 334.0], [40.9, 334.0], [41.0, 338.0], [41.1, 340.0], [41.2, 341.0], [41.3, 341.0], [41.4, 342.0], [41.5, 342.0], [41.6, 343.0], [41.7, 343.0], [41.8, 344.0], [41.9, 344.0], [42.0, 344.0], [42.1, 345.0], [42.2, 346.0], [42.3, 346.0], [42.4, 347.0], [42.5, 348.0], [42.6, 349.0], [42.7, 350.0], [42.8, 350.0], [42.9, 351.0], [43.0, 351.0], [43.1, 352.0], [43.2, 353.0], [43.3, 354.0], [43.4, 355.0], [43.5, 355.0], [43.6, 355.0], [43.7, 355.0], [43.8, 355.0], [43.9, 356.0], [44.0, 356.0], [44.1, 356.0], [44.2, 357.0], [44.3, 357.0], [44.4, 357.0], [44.5, 358.0], [44.6, 359.0], [44.7, 359.0], [44.8, 360.0], [44.9, 360.0], [45.0, 360.0], [45.1, 361.0], [45.2, 361.0], [45.3, 361.0], [45.4, 361.0], [45.5, 362.0], [45.6, 362.0], [45.7, 365.0], [45.8, 366.0], [45.9, 367.0], [46.0, 368.0], [46.1, 370.0], [46.2, 370.0], [46.3, 371.0], [46.4, 371.0], [46.5, 371.0], [46.6, 374.0], [46.7, 376.0], [46.8, 376.0], [46.9, 376.0], [47.0, 376.0], [47.1, 377.0], [47.2, 379.0], [47.3, 379.0], [47.4, 380.0], [47.5, 380.0], [47.6, 380.0], [47.7, 384.0], [47.8, 385.0], [47.9, 387.0], [48.0, 387.0], [48.1, 388.0], [48.2, 391.0], [48.3, 391.0], [48.4, 391.0], [48.5, 392.0], [48.6, 393.0], [48.7, 396.0], [48.8, 396.0], [48.9, 398.0], [49.0, 398.0], [49.1, 400.0], [49.2, 400.0], [49.3, 400.0], [49.4, 401.0], [49.5, 402.0], [49.6, 403.0], [49.7, 407.0], [49.8, 407.0], [49.9, 408.0], [50.0, 408.0], [50.1, 410.0], [50.2, 411.0], [50.3, 412.0], [50.4, 412.0], [50.5, 413.0], [50.6, 414.0], [50.7, 415.0], [50.8, 415.0], [50.9, 416.0], [51.0, 416.0], [51.1, 420.0], [51.2, 420.0], [51.3, 420.0], [51.4, 421.0], [51.5, 421.0], [51.6, 422.0], [51.7, 422.0], [51.8, 423.0], [51.9, 425.0], [52.0, 425.0], [52.1, 426.0], [52.2, 428.0], [52.3, 428.0], [52.4, 429.0], [52.5, 430.0], [52.6, 431.0], [52.7, 435.0], [52.8, 435.0], [52.9, 435.0], [53.0, 436.0], [53.1, 436.0], [53.2, 436.0], [53.3, 437.0], [53.4, 437.0], [53.5, 437.0], [53.6, 438.0], [53.7, 442.0], [53.8, 442.0], [53.9, 442.0], [54.0, 443.0], [54.1, 445.0], [54.2, 447.0], [54.3, 447.0], [54.4, 447.0], [54.5, 447.0], [54.6, 447.0], [54.7, 447.0], [54.8, 447.0], [54.9, 448.0], [55.0, 448.0], [55.1, 450.0], [55.2, 450.0], [55.3, 453.0], [55.4, 456.0], [55.5, 457.0], [55.6, 458.0], [55.7, 459.0], [55.8, 460.0], [55.9, 460.0], [56.0, 461.0], [56.1, 462.0], [56.2, 462.0], [56.3, 464.0], [56.4, 465.0], [56.5, 466.0], [56.6, 467.0], [56.7, 467.0], [56.8, 468.0], [56.9, 468.0], [57.0, 469.0], [57.1, 471.0], [57.2, 472.0], [57.3, 472.0], [57.4, 475.0], [57.5, 475.0], [57.6, 477.0], [57.7, 477.0], [57.8, 477.0], [57.9, 480.0], [58.0, 481.0], [58.1, 481.0], [58.2, 483.0], [58.3, 483.0], [58.4, 483.0], [58.5, 484.0], [58.6, 485.0], [58.7, 489.0], [58.8, 491.0], [58.9, 491.0], [59.0, 492.0], [59.1, 492.0], [59.2, 493.0], [59.3, 494.0], [59.4, 495.0], [59.5, 498.0], [59.6, 499.0], [59.7, 499.0], [59.8, 500.0], [59.9, 504.0], [60.0, 505.0], [60.1, 505.0], [60.2, 508.0], [60.3, 508.0], [60.4, 509.0], [60.5, 513.0], [60.6, 513.0], [60.7, 513.0], [60.8, 515.0], [60.9, 518.0], [61.0, 519.0], [61.1, 520.0], [61.2, 521.0], [61.3, 522.0], [61.4, 522.0], [61.5, 522.0], [61.6, 526.0], [61.7, 528.0], [61.8, 529.0], [61.9, 531.0], [62.0, 532.0], [62.1, 533.0], [62.2, 534.0], [62.3, 535.0], [62.4, 537.0], [62.5, 538.0], [62.6, 546.0], [62.7, 547.0], [62.8, 549.0], [62.9, 553.0], [63.0, 556.0], [63.1, 557.0], [63.2, 558.0], [63.3, 560.0], [63.4, 563.0], [63.5, 564.0], [63.6, 566.0], [63.7, 567.0], [63.8, 569.0], [63.9, 570.0], [64.0, 570.0], [64.1, 571.0], [64.2, 571.0], [64.3, 573.0], [64.4, 573.0], [64.5, 574.0], [64.6, 576.0], [64.7, 577.0], [64.8, 577.0], [64.9, 580.0], [65.0, 580.0], [65.1, 580.0], [65.2, 580.0], [65.3, 585.0], [65.4, 586.0], [65.5, 586.0], [65.6, 587.0], [65.7, 589.0], [65.8, 589.0], [65.9, 590.0], [66.0, 590.0], [66.1, 591.0], [66.2, 594.0], [66.3, 594.0], [66.4, 594.0], [66.5, 595.0], [66.6, 595.0], [66.7, 595.0], [66.8, 596.0], [66.9, 596.0], [67.0, 596.0], [67.1, 599.0], [67.2, 600.0], [67.3, 600.0], [67.4, 601.0], [67.5, 601.0], [67.6, 601.0], [67.7, 605.0], [67.8, 606.0], [67.9, 607.0], [68.0, 607.0], [68.1, 608.0], [68.2, 609.0], [68.3, 611.0], [68.4, 611.0], [68.5, 612.0], [68.6, 615.0], [68.7, 616.0], [68.8, 617.0], [68.9, 618.0], [69.0, 619.0], [69.1, 621.0], [69.2, 621.0], [69.3, 621.0], [69.4, 625.0], [69.5, 627.0], [69.6, 628.0], [69.7, 629.0], [69.8, 630.0], [69.9, 630.0], [70.0, 630.0], [70.1, 631.0], [70.2, 632.0], [70.3, 632.0], [70.4, 633.0], [70.5, 633.0], [70.6, 639.0], [70.7, 641.0], [70.8, 645.0], [70.9, 650.0], [71.0, 651.0], [71.1, 652.0], [71.2, 652.0], [71.3, 652.0], [71.4, 653.0], [71.5, 653.0], [71.6, 653.0], [71.7, 655.0], [71.8, 656.0], [71.9, 657.0], [72.0, 659.0], [72.1, 660.0], [72.2, 660.0], [72.3, 664.0], [72.4, 666.0], [72.5, 667.0], [72.6, 669.0], [72.7, 669.0], [72.8, 672.0], [72.9, 673.0], [73.0, 677.0], [73.1, 677.0], [73.2, 679.0], [73.3, 681.0], [73.4, 681.0], [73.5, 685.0], [73.6, 686.0], [73.7, 686.0], [73.8, 691.0], [73.9, 695.0], [74.0, 695.0], [74.1, 696.0], [74.2, 697.0], [74.3, 697.0], [74.4, 699.0], [74.5, 701.0], [74.6, 707.0], [74.7, 708.0], [74.8, 710.0], [74.9, 711.0], [75.0, 712.0], [75.1, 716.0], [75.2, 716.0], [75.3, 716.0], [75.4, 716.0], [75.5, 717.0], [75.6, 718.0], [75.7, 721.0], [75.8, 721.0], [75.9, 722.0], [76.0, 729.0], [76.1, 729.0], [76.2, 731.0], [76.3, 733.0], [76.4, 737.0], [76.5, 741.0], [76.6, 753.0], [76.7, 757.0], [76.8, 758.0], [76.9, 760.0], [77.0, 763.0], [77.1, 763.0], [77.2, 767.0], [77.3, 771.0], [77.4, 772.0], [77.5, 775.0], [77.6, 777.0], [77.7, 779.0], [77.8, 779.0], [77.9, 782.0], [78.0, 782.0], [78.1, 786.0], [78.2, 788.0], [78.3, 793.0], [78.4, 795.0], [78.5, 797.0], [78.6, 798.0], [78.7, 798.0], [78.8, 799.0], [78.9, 799.0], [79.0, 803.0], [79.1, 804.0], [79.2, 808.0], [79.3, 809.0], [79.4, 812.0], [79.5, 813.0], [79.6, 813.0], [79.7, 814.0], [79.8, 817.0], [79.9, 833.0], [80.0, 835.0], [80.1, 835.0], [80.2, 848.0], [80.3, 852.0], [80.4, 853.0], [80.5, 857.0], [80.6, 857.0], [80.7, 862.0], [80.8, 871.0], [80.9, 879.0], [81.0, 879.0], [81.1, 889.0], [81.2, 896.0], [81.3, 900.0], [81.4, 904.0], [81.5, 910.0], [81.6, 921.0], [81.7, 929.0], [81.8, 969.0], [81.9, 969.0], [82.0, 970.0], [82.1, 974.0], [82.2, 975.0], [82.3, 982.0], [82.4, 986.0], [82.5, 992.0], [82.6, 996.0], [82.7, 997.0], [82.8, 1002.0], [82.9, 1006.0], [83.0, 1007.0], [83.1, 1011.0], [83.2, 1014.0], [83.3, 1017.0], [83.4, 1032.0], [83.5, 1046.0], [83.6, 1049.0], [83.7, 1051.0], [83.8, 1057.0], [83.9, 1065.0], [84.0, 1065.0], [84.1, 1073.0], [84.2, 1073.0], [84.3, 1073.0], [84.4, 1089.0], [84.5, 1097.0], [84.6, 1104.0], [84.7, 1128.0], [84.8, 1130.0], [84.9, 1131.0], [85.0, 1143.0], [85.1, 1166.0], [85.2, 1167.0], [85.3, 1178.0], [85.4, 1189.0], [85.5, 1189.0], [85.6, 1201.0], [85.7, 1203.0], [85.8, 1209.0], [85.9, 1214.0], [86.0, 1219.0], [86.1, 1221.0], [86.2, 1232.0], [86.3, 1235.0], [86.4, 1238.0], [86.5, 1255.0], [86.6, 1257.0], [86.7, 1259.0], [86.8, 1261.0], [86.9, 1269.0], [87.0, 1270.0], [87.1, 1271.0], [87.2, 1272.0], [87.3, 1274.0], [87.4, 1276.0], [87.5, 1280.0], [87.6, 1283.0], [87.7, 1299.0], [87.8, 1300.0], [87.9, 1302.0], [88.0, 1303.0], [88.1, 1306.0], [88.2, 1306.0], [88.3, 1308.0], [88.4, 1311.0], [88.5, 1315.0], [88.6, 1318.0], [88.7, 1322.0], [88.8, 1325.0], [88.9, 1326.0], [89.0, 1326.0], [89.1, 1328.0], [89.2, 1334.0], [89.3, 1336.0], [89.4, 1342.0], [89.5, 1344.0], [89.6, 1350.0], [89.7, 1355.0], [89.8, 1362.0], [89.9, 1362.0], [90.0, 1363.0], [90.1, 1366.0], [90.2, 1374.0], [90.3, 1376.0], [90.4, 1380.0], [90.5, 1380.0], [90.6, 1380.0], [90.7, 1381.0], [90.8, 1389.0], [90.9, 1394.0], [91.0, 1408.0], [91.1, 1409.0], [91.2, 1410.0], [91.3, 1410.0], [91.4, 1414.0], [91.5, 1435.0], [91.6, 1441.0], [91.7, 1442.0], [91.8, 1456.0], [91.9, 1474.0], [92.0, 1476.0], [92.1, 1481.0], [92.2, 1484.0], [92.3, 1485.0], [92.4, 1498.0], [92.5, 1505.0], [92.6, 1508.0], [92.7, 1520.0], [92.8, 1522.0], [92.9, 1525.0], [93.0, 1528.0], [93.1, 1532.0], [93.2, 1547.0], [93.3, 1554.0], [93.4, 1554.0], [93.5, 1577.0], [93.6, 1588.0], [93.7, 1590.0], [93.8, 1592.0], [93.9, 1605.0], [94.0, 1609.0], [94.1, 1631.0], [94.2, 1652.0], [94.3, 1659.0], [94.4, 1674.0], [94.5, 1674.0], [94.6, 1677.0], [94.7, 1687.0], [94.8, 1690.0], [94.9, 1700.0], [95.0, 1701.0], [95.1, 1706.0], [95.2, 1712.0], [95.3, 1725.0], [95.4, 1741.0], [95.5, 1747.0], [95.6, 1752.0], [95.7, 1770.0], [95.8, 1776.0], [95.9, 1785.0], [96.0, 1790.0], [96.1, 1794.0], [96.2, 1859.0], [96.3, 1861.0], [96.4, 1866.0], [96.5, 1867.0], [96.6, 1884.0], [96.7, 1893.0], [96.8, 1893.0], [96.9, 1916.0], [97.0, 1926.0], [97.1, 1942.0], [97.2, 1949.0], [97.3, 2061.0], [97.4, 2082.0], [97.5, 2149.0], [97.6, 2157.0], [97.7, 2340.0], [97.8, 2591.0], [97.9, 3356.0], [98.0, 3370.0], [98.1, 3384.0], [98.2, 3422.0], [98.3, 3429.0], [98.4, 3463.0], [98.5, 3518.0], [98.6, 3527.0], [98.7, 3550.0], [98.8, 3564.0], [98.9, 3577.0], [99.0, 3642.0], [99.1, 3729.0], [99.2, 3767.0], [99.3, 3849.0], [99.4, 3850.0], [99.5, 3911.0], [99.6, 4243.0], [99.7, 4495.0], [99.8, 7903.0], [99.9, 7943.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 0.0, "maxY": 168.0, "series": [{"data": [[0.0, 35.0], [600.0, 73.0], [700.0, 46.0], [800.0, 23.0], [900.0, 15.0], [1000.0, 18.0], [1100.0, 10.0], [1200.0, 22.0], [1300.0, 32.0], [1400.0, 15.0], [1500.0, 14.0], [100.0, 148.0], [1600.0, 10.0], [1700.0, 13.0], [1800.0, 7.0], [1900.0, 4.0], [2000.0, 2.0], [2100.0, 2.0], [2300.0, 1.0], [2500.0, 1.0], [200.0, 168.0], [3300.0, 3.0], [3400.0, 3.0], [3500.0, 5.0], [3700.0, 2.0], [3600.0, 1.0], [3800.0, 2.0], [3900.0, 1.0], [4200.0, 1.0], [4400.0, 1.0], [300.0, 139.0], [400.0, 107.0], [7900.0, 2.0], [500.0, 74.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 7900.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 75.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 598.0, "series": [{"data": [[0.0, 598.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 327.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 75.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 2.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 8.010101010101007, "minX": 1.71541728E12, "maxY": 9.833570412517771, "series": [{"data": [[1.71541734E12, 8.010101010101007], [1.71541728E12, 9.833570412517771]], "isOverall": false, "label": "Thread Group", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.71541734E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 356.5, "minX": 1.0, "maxY": 1003.3199999999999, "series": [{"data": [[4.0, 609.8461538461538], [8.0, 1003.3199999999999], [2.0, 649.0], [1.0, 568.4347826086959], [9.0, 631.125], [5.0, 645.6923076923078], [10.0, 597.5542168674698], [3.0, 356.5], [6.0, 754.9375], [7.0, 898.9545454545455]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[9.292, 622.6770000000006]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 10.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 579.15, "minX": 1.71541728E12, "maxY": 1722.35, "series": [{"data": [[1.71541734E12, 727.65], [1.71541728E12, 1722.35]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.71541734E12, 579.15], [1.71541728E12, 1370.85]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.71541734E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 504.3926031294455, "minX": 1.71541728E12, "maxY": 902.656565656566, "series": [{"data": [[1.71541734E12, 902.656565656566], [1.71541728E12, 504.3926031294455]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.71541734E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 504.23328591749623, "minX": 1.71541728E12, "maxY": 902.5218855218855, "series": [{"data": [[1.71541734E12, 902.5218855218855], [1.71541728E12, 504.23328591749623]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.71541734E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 0.5218855218855216, "minX": 1.71541728E12, "maxY": 0.6486486486486484, "series": [{"data": [[1.71541734E12, 0.5218855218855216], [1.71541728E12, 0.6486486486486484]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.71541734E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 59.0, "minX": 1.71541728E12, "maxY": 7943.0, "series": [{"data": [[1.71541734E12, 7943.0], [1.71541728E12, 4243.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.71541734E12, 167.0], [1.71541728E12, 59.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.71541734E12, 1692.0], [1.71541728E12, 1304.8000000000002]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.71541734E12, 4563.159999999938], [1.71541728E12, 3526.6400000000003]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.71541734E12, 677.0], [1.71541728E12, 309.0]], "isOverall": false, "label": "Median", "isController": false}, {"data": [[1.71541734E12, 1895.2999999999993], [1.71541728E12, 1516.9999999999993]], "isOverall": false, "label": "95th percentile", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.71541734E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 113.0, "minX": 1.0, "maxY": 981.5, "series": [{"data": [[33.0, 185.0], [2.0, 531.0], [47.0, 135.0], [48.0, 113.0], [3.0, 447.0], [4.0, 644.0], [5.0, 605.0], [6.0, 981.5], [7.0, 760.0], [8.0, 619.0], [9.0, 739.5], [10.0, 691.5], [11.0, 621.0], [12.0, 520.5], [13.0, 634.5], [14.0, 429.5], [15.0, 396.0], [16.0, 436.0], [1.0, 720.0], [17.0, 505.0], [20.0, 344.0], [21.0, 355.0], [22.0, 298.5], [23.0, 308.0], [24.0, 165.5], [26.0, 273.0], [27.0, 247.0], [28.0, 226.5], [31.0, 202.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 48.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 112.0, "minX": 1.0, "maxY": 981.0, "series": [{"data": [[33.0, 185.0], [2.0, 530.5], [47.0, 135.0], [48.0, 112.0], [3.0, 447.0], [4.0, 644.0], [5.0, 605.0], [6.0, 981.0], [7.0, 760.0], [8.0, 619.0], [9.0, 739.5], [10.0, 691.5], [11.0, 621.0], [12.0, 520.0], [13.0, 634.5], [14.0, 429.5], [15.0, 396.0], [16.0, 436.0], [1.0, 719.5], [17.0, 505.0], [20.0, 343.5], [21.0, 355.0], [22.0, 298.5], [23.0, 308.0], [24.0, 165.0], [26.0, 272.5], [27.0, 246.0], [28.0, 226.5], [31.0, 202.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 48.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 4.783333333333333, "minX": 1.71541728E12, "maxY": 11.883333333333333, "series": [{"data": [[1.71541734E12, 4.783333333333333], [1.71541728E12, 11.883333333333333]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.71541734E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 4.95, "minX": 1.71541728E12, "maxY": 11.716666666666667, "series": [{"data": [[1.71541734E12, 4.95], [1.71541728E12, 11.716666666666667]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.71541734E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 4.95, "minX": 1.71541728E12, "maxY": 11.716666666666667, "series": [{"data": [[1.71541734E12, 4.95], [1.71541728E12, 11.716666666666667]], "isOverall": false, "label": "HTTP Request-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.71541734E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 4.95, "minX": 1.71541728E12, "maxY": 11.716666666666667, "series": [{"data": [[1.71541734E12, 4.95], [1.71541728E12, 11.716666666666667]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.71541734E12, "title": "Total Transactions Per Second"}},
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

