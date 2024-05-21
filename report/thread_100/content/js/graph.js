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
        data: {"result": {"minY": 241.0, "minX": 0.0, "maxY": 142015.0, "series": [{"data": [[0.0, 241.0], [0.1, 250.0], [0.2, 279.0], [0.3, 279.0], [0.4, 296.0], [0.5, 296.0], [0.6, 296.0], [0.7, 297.0], [0.8, 329.0], [0.9, 347.0], [1.0, 367.0], [1.1, 369.0], [1.2, 369.0], [1.3, 381.0], [1.4, 403.0], [1.5, 410.0], [1.6, 412.0], [1.7, 412.0], [1.8, 417.0], [1.9, 429.0], [2.0, 432.0], [2.1, 434.0], [2.2, 436.0], [2.3, 437.0], [2.4, 442.0], [2.5, 445.0], [2.6, 451.0], [2.7, 452.0], [2.8, 458.0], [2.9, 489.0], [3.0, 498.0], [3.1, 501.0], [3.2, 510.0], [3.3, 512.0], [3.4, 514.0], [3.5, 514.0], [3.6, 519.0], [3.7, 526.0], [3.8, 535.0], [3.9, 539.0], [4.0, 546.0], [4.1, 551.0], [4.2, 560.0], [4.3, 561.0], [4.4, 561.0], [4.5, 562.0], [4.6, 562.0], [4.7, 564.0], [4.8, 564.0], [4.9, 573.0], [5.0, 578.0], [5.1, 581.0], [5.2, 592.0], [5.3, 592.0], [5.4, 593.0], [5.5, 593.0], [5.6, 595.0], [5.7, 595.0], [5.8, 600.0], [5.9, 601.0], [6.0, 601.0], [6.1, 609.0], [6.2, 615.0], [6.3, 616.0], [6.4, 617.0], [6.5, 620.0], [6.6, 623.0], [6.7, 624.0], [6.8, 624.0], [6.9, 625.0], [7.0, 626.0], [7.1, 628.0], [7.2, 632.0], [7.3, 636.0], [7.4, 645.0], [7.5, 645.0], [7.6, 645.0], [7.7, 645.0], [7.8, 651.0], [7.9, 654.0], [8.0, 655.0], [8.1, 656.0], [8.2, 657.0], [8.3, 659.0], [8.4, 662.0], [8.5, 665.0], [8.6, 666.0], [8.7, 667.0], [8.8, 672.0], [8.9, 673.0], [9.0, 679.0], [9.1, 682.0], [9.2, 687.0], [9.3, 689.0], [9.4, 692.0], [9.5, 699.0], [9.6, 700.0], [9.7, 701.0], [9.8, 702.0], [9.9, 702.0], [10.0, 704.0], [10.1, 704.0], [10.2, 708.0], [10.3, 710.0], [10.4, 710.0], [10.5, 711.0], [10.6, 712.0], [10.7, 712.0], [10.8, 716.0], [10.9, 716.0], [11.0, 717.0], [11.1, 719.0], [11.2, 720.0], [11.3, 720.0], [11.4, 721.0], [11.5, 730.0], [11.6, 731.0], [11.7, 734.0], [11.8, 734.0], [11.9, 740.0], [12.0, 743.0], [12.1, 747.0], [12.2, 749.0], [12.3, 755.0], [12.4, 756.0], [12.5, 756.0], [12.6, 759.0], [12.7, 760.0], [12.8, 761.0], [12.9, 762.0], [13.0, 764.0], [13.1, 765.0], [13.2, 768.0], [13.3, 768.0], [13.4, 768.0], [13.5, 769.0], [13.6, 772.0], [13.7, 773.0], [13.8, 776.0], [13.9, 784.0], [14.0, 786.0], [14.1, 788.0], [14.2, 790.0], [14.3, 790.0], [14.4, 798.0], [14.5, 801.0], [14.6, 803.0], [14.7, 803.0], [14.8, 804.0], [14.9, 805.0], [15.0, 805.0], [15.1, 807.0], [15.2, 808.0], [15.3, 811.0], [15.4, 811.0], [15.5, 816.0], [15.6, 823.0], [15.7, 826.0], [15.8, 829.0], [15.9, 831.0], [16.0, 831.0], [16.1, 835.0], [16.2, 837.0], [16.3, 838.0], [16.4, 839.0], [16.5, 840.0], [16.6, 841.0], [16.7, 841.0], [16.8, 842.0], [16.9, 847.0], [17.0, 854.0], [17.1, 855.0], [17.2, 856.0], [17.3, 860.0], [17.4, 863.0], [17.5, 867.0], [17.6, 869.0], [17.7, 870.0], [17.8, 871.0], [17.9, 872.0], [18.0, 872.0], [18.1, 874.0], [18.2, 877.0], [18.3, 878.0], [18.4, 881.0], [18.5, 882.0], [18.6, 882.0], [18.7, 886.0], [18.8, 886.0], [18.9, 888.0], [19.0, 888.0], [19.1, 898.0], [19.2, 902.0], [19.3, 903.0], [19.4, 903.0], [19.5, 905.0], [19.6, 905.0], [19.7, 907.0], [19.8, 907.0], [19.9, 907.0], [20.0, 908.0], [20.1, 910.0], [20.2, 911.0], [20.3, 912.0], [20.4, 912.0], [20.5, 914.0], [20.6, 915.0], [20.7, 915.0], [20.8, 918.0], [20.9, 920.0], [21.0, 920.0], [21.1, 921.0], [21.2, 921.0], [21.3, 927.0], [21.4, 929.0], [21.5, 929.0], [21.6, 935.0], [21.7, 937.0], [21.8, 937.0], [21.9, 942.0], [22.0, 944.0], [22.1, 945.0], [22.2, 946.0], [22.3, 946.0], [22.4, 948.0], [22.5, 949.0], [22.6, 952.0], [22.7, 956.0], [22.8, 957.0], [22.9, 961.0], [23.0, 962.0], [23.1, 962.0], [23.2, 963.0], [23.3, 964.0], [23.4, 971.0], [23.5, 972.0], [23.6, 974.0], [23.7, 975.0], [23.8, 976.0], [23.9, 980.0], [24.0, 985.0], [24.1, 986.0], [24.2, 986.0], [24.3, 993.0], [24.4, 994.0], [24.5, 996.0], [24.6, 998.0], [24.7, 999.0], [24.8, 1006.0], [24.9, 1011.0], [25.0, 1014.0], [25.1, 1014.0], [25.2, 1014.0], [25.3, 1021.0], [25.4, 1022.0], [25.5, 1023.0], [25.6, 1024.0], [25.7, 1024.0], [25.8, 1026.0], [25.9, 1027.0], [26.0, 1028.0], [26.1, 1031.0], [26.2, 1032.0], [26.3, 1033.0], [26.4, 1034.0], [26.5, 1037.0], [26.6, 1038.0], [26.7, 1038.0], [26.8, 1039.0], [26.9, 1041.0], [27.0, 1044.0], [27.1, 1049.0], [27.2, 1054.0], [27.3, 1054.0], [27.4, 1055.0], [27.5, 1056.0], [27.6, 1056.0], [27.7, 1058.0], [27.8, 1060.0], [27.9, 1061.0], [28.0, 1064.0], [28.1, 1068.0], [28.2, 1069.0], [28.3, 1071.0], [28.4, 1074.0], [28.5, 1078.0], [28.6, 1082.0], [28.7, 1086.0], [28.8, 1087.0], [28.9, 1087.0], [29.0, 1087.0], [29.1, 1088.0], [29.2, 1089.0], [29.3, 1092.0], [29.4, 1093.0], [29.5, 1098.0], [29.6, 1098.0], [29.7, 1107.0], [29.8, 1110.0], [29.9, 1112.0], [30.0, 1114.0], [30.1, 1117.0], [30.2, 1119.0], [30.3, 1120.0], [30.4, 1121.0], [30.5, 1123.0], [30.6, 1127.0], [30.7, 1131.0], [30.8, 1132.0], [30.9, 1134.0], [31.0, 1138.0], [31.1, 1141.0], [31.2, 1141.0], [31.3, 1144.0], [31.4, 1149.0], [31.5, 1151.0], [31.6, 1151.0], [31.7, 1158.0], [31.8, 1162.0], [31.9, 1164.0], [32.0, 1165.0], [32.1, 1165.0], [32.2, 1171.0], [32.3, 1171.0], [32.4, 1171.0], [32.5, 1172.0], [32.6, 1174.0], [32.7, 1176.0], [32.8, 1177.0], [32.9, 1188.0], [33.0, 1189.0], [33.1, 1192.0], [33.2, 1194.0], [33.3, 1196.0], [33.4, 1198.0], [33.5, 1203.0], [33.6, 1206.0], [33.7, 1207.0], [33.8, 1207.0], [33.9, 1208.0], [34.0, 1208.0], [34.1, 1209.0], [34.2, 1212.0], [34.3, 1212.0], [34.4, 1213.0], [34.5, 1213.0], [34.6, 1214.0], [34.7, 1215.0], [34.8, 1218.0], [34.9, 1220.0], [35.0, 1226.0], [35.1, 1230.0], [35.2, 1233.0], [35.3, 1235.0], [35.4, 1237.0], [35.5, 1240.0], [35.6, 1244.0], [35.7, 1246.0], [35.8, 1249.0], [35.9, 1253.0], [36.0, 1260.0], [36.1, 1260.0], [36.2, 1261.0], [36.3, 1261.0], [36.4, 1268.0], [36.5, 1268.0], [36.6, 1276.0], [36.7, 1278.0], [36.8, 1282.0], [36.9, 1285.0], [37.0, 1298.0], [37.1, 1303.0], [37.2, 1304.0], [37.3, 1310.0], [37.4, 1312.0], [37.5, 1315.0], [37.6, 1316.0], [37.7, 1317.0], [37.8, 1319.0], [37.9, 1319.0], [38.0, 1320.0], [38.1, 1322.0], [38.2, 1325.0], [38.3, 1328.0], [38.4, 1329.0], [38.5, 1332.0], [38.6, 1340.0], [38.7, 1340.0], [38.8, 1347.0], [38.9, 1350.0], [39.0, 1350.0], [39.1, 1353.0], [39.2, 1355.0], [39.3, 1356.0], [39.4, 1367.0], [39.5, 1375.0], [39.6, 1384.0], [39.7, 1385.0], [39.8, 1385.0], [39.9, 1389.0], [40.0, 1396.0], [40.1, 1411.0], [40.2, 1411.0], [40.3, 1412.0], [40.4, 1413.0], [40.5, 1414.0], [40.6, 1414.0], [40.7, 1415.0], [40.8, 1419.0], [40.9, 1432.0], [41.0, 1433.0], [41.1, 1444.0], [41.2, 1444.0], [41.3, 1449.0], [41.4, 1452.0], [41.5, 1462.0], [41.6, 1463.0], [41.7, 1465.0], [41.8, 1465.0], [41.9, 1466.0], [42.0, 1480.0], [42.1, 1484.0], [42.2, 1485.0], [42.3, 1488.0], [42.4, 1492.0], [42.5, 1499.0], [42.6, 1500.0], [42.7, 1501.0], [42.8, 1501.0], [42.9, 1504.0], [43.0, 1506.0], [43.1, 1508.0], [43.2, 1510.0], [43.3, 1512.0], [43.4, 1514.0], [43.5, 1521.0], [43.6, 1521.0], [43.7, 1522.0], [43.8, 1526.0], [43.9, 1526.0], [44.0, 1531.0], [44.1, 1532.0], [44.2, 1533.0], [44.3, 1537.0], [44.4, 1544.0], [44.5, 1544.0], [44.6, 1554.0], [44.7, 1557.0], [44.8, 1557.0], [44.9, 1560.0], [45.0, 1565.0], [45.1, 1567.0], [45.2, 1569.0], [45.3, 1574.0], [45.4, 1578.0], [45.5, 1581.0], [45.6, 1584.0], [45.7, 1589.0], [45.8, 1590.0], [45.9, 1595.0], [46.0, 1598.0], [46.1, 1601.0], [46.2, 1607.0], [46.3, 1607.0], [46.4, 1607.0], [46.5, 1609.0], [46.6, 1615.0], [46.7, 1619.0], [46.8, 1621.0], [46.9, 1622.0], [47.0, 1623.0], [47.1, 1624.0], [47.2, 1630.0], [47.3, 1630.0], [47.4, 1633.0], [47.5, 1646.0], [47.6, 1652.0], [47.7, 1655.0], [47.8, 1657.0], [47.9, 1661.0], [48.0, 1665.0], [48.1, 1666.0], [48.2, 1670.0], [48.3, 1671.0], [48.4, 1674.0], [48.5, 1681.0], [48.6, 1686.0], [48.7, 1687.0], [48.8, 1690.0], [48.9, 1695.0], [49.0, 1695.0], [49.1, 1696.0], [49.2, 1700.0], [49.3, 1700.0], [49.4, 1701.0], [49.5, 1706.0], [49.6, 1716.0], [49.7, 1716.0], [49.8, 1719.0], [49.9, 1720.0], [50.0, 1722.0], [50.1, 1726.0], [50.2, 1726.0], [50.3, 1729.0], [50.4, 1737.0], [50.5, 1739.0], [50.6, 1739.0], [50.7, 1739.0], [50.8, 1744.0], [50.9, 1745.0], [51.0, 1746.0], [51.1, 1748.0], [51.2, 1751.0], [51.3, 1758.0], [51.4, 1759.0], [51.5, 1761.0], [51.6, 1764.0], [51.7, 1766.0], [51.8, 1769.0], [51.9, 1770.0], [52.0, 1770.0], [52.1, 1774.0], [52.2, 1779.0], [52.3, 1781.0], [52.4, 1783.0], [52.5, 1787.0], [52.6, 1787.0], [52.7, 1791.0], [52.8, 1793.0], [52.9, 1796.0], [53.0, 1805.0], [53.1, 1810.0], [53.2, 1818.0], [53.3, 1818.0], [53.4, 1820.0], [53.5, 1821.0], [53.6, 1839.0], [53.7, 1840.0], [53.8, 1842.0], [53.9, 1844.0], [54.0, 1846.0], [54.1, 1847.0], [54.2, 1850.0], [54.3, 1866.0], [54.4, 1867.0], [54.5, 1875.0], [54.6, 1876.0], [54.7, 1877.0], [54.8, 1880.0], [54.9, 1885.0], [55.0, 1886.0], [55.1, 1892.0], [55.2, 1903.0], [55.3, 1911.0], [55.4, 1913.0], [55.5, 1914.0], [55.6, 1918.0], [55.7, 1922.0], [55.8, 1930.0], [55.9, 1934.0], [56.0, 1935.0], [56.1, 1941.0], [56.2, 1941.0], [56.3, 1943.0], [56.4, 1948.0], [56.5, 1959.0], [56.6, 1963.0], [56.7, 1965.0], [56.8, 1966.0], [56.9, 1967.0], [57.0, 1967.0], [57.1, 1982.0], [57.2, 1984.0], [57.3, 1985.0], [57.4, 1994.0], [57.5, 1997.0], [57.6, 2002.0], [57.7, 2012.0], [57.8, 2013.0], [57.9, 2016.0], [58.0, 2018.0], [58.1, 2020.0], [58.2, 2027.0], [58.3, 2032.0], [58.4, 2035.0], [58.5, 2036.0], [58.6, 2042.0], [58.7, 2043.0], [58.8, 2045.0], [58.9, 2047.0], [59.0, 2049.0], [59.1, 2051.0], [59.2, 2064.0], [59.3, 2069.0], [59.4, 2069.0], [59.5, 2069.0], [59.6, 2070.0], [59.7, 2070.0], [59.8, 2071.0], [59.9, 2075.0], [60.0, 2077.0], [60.1, 2086.0], [60.2, 2087.0], [60.3, 2094.0], [60.4, 2095.0], [60.5, 2097.0], [60.6, 2097.0], [60.7, 2100.0], [60.8, 2101.0], [60.9, 2105.0], [61.0, 2105.0], [61.1, 2108.0], [61.2, 2109.0], [61.3, 2111.0], [61.4, 2114.0], [61.5, 2119.0], [61.6, 2131.0], [61.7, 2138.0], [61.8, 2139.0], [61.9, 2139.0], [62.0, 2145.0], [62.1, 2146.0], [62.2, 2147.0], [62.3, 2148.0], [62.4, 2158.0], [62.5, 2161.0], [62.6, 2163.0], [62.7, 2172.0], [62.8, 2180.0], [62.9, 2181.0], [63.0, 2184.0], [63.1, 2188.0], [63.2, 2190.0], [63.3, 2192.0], [63.4, 2197.0], [63.5, 2206.0], [63.6, 2226.0], [63.7, 2228.0], [63.8, 2235.0], [63.9, 2239.0], [64.0, 2248.0], [64.1, 2249.0], [64.2, 2253.0], [64.3, 2253.0], [64.4, 2258.0], [64.5, 2266.0], [64.6, 2292.0], [64.7, 2293.0], [64.8, 2293.0], [64.9, 2304.0], [65.0, 2308.0], [65.1, 2325.0], [65.2, 2329.0], [65.3, 2336.0], [65.4, 2353.0], [65.5, 2358.0], [65.6, 2364.0], [65.7, 2374.0], [65.8, 2414.0], [65.9, 2427.0], [66.0, 2430.0], [66.1, 2431.0], [66.2, 2467.0], [66.3, 2508.0], [66.4, 2525.0], [66.5, 2532.0], [66.6, 2535.0], [66.7, 2557.0], [66.8, 2576.0], [66.9, 2582.0], [67.0, 2582.0], [67.1, 2587.0], [67.2, 2611.0], [67.3, 2612.0], [67.4, 2612.0], [67.5, 2619.0], [67.6, 2625.0], [67.7, 2627.0], [67.8, 2642.0], [67.9, 2644.0], [68.0, 2647.0], [68.1, 2659.0], [68.2, 2683.0], [68.3, 2729.0], [68.4, 2734.0], [68.5, 2774.0], [68.6, 2786.0], [68.7, 2847.0], [68.8, 2856.0], [68.9, 2872.0], [69.0, 2873.0], [69.1, 2928.0], [69.2, 2952.0], [69.3, 2982.0], [69.4, 3053.0], [69.5, 3090.0], [69.6, 3100.0], [69.7, 3167.0], [69.8, 3196.0], [69.9, 3292.0], [70.0, 3293.0], [70.1, 3302.0], [70.2, 3325.0], [70.3, 3330.0], [70.4, 3522.0], [70.5, 3531.0], [70.6, 3535.0], [70.7, 3540.0], [70.8, 3560.0], [70.9, 3562.0], [71.0, 3573.0], [71.1, 3616.0], [71.2, 3629.0], [71.3, 3630.0], [71.4, 3671.0], [71.5, 3674.0], [71.6, 3686.0], [71.7, 3689.0], [71.8, 3717.0], [71.9, 3729.0], [72.0, 3731.0], [72.1, 3733.0], [72.2, 3739.0], [72.3, 3744.0], [72.4, 3752.0], [72.5, 3754.0], [72.6, 3757.0], [72.7, 3789.0], [72.8, 3799.0], [72.9, 3832.0], [73.0, 3833.0], [73.1, 3839.0], [73.2, 3848.0], [73.3, 3877.0], [73.4, 3887.0], [73.5, 3892.0], [73.6, 3912.0], [73.7, 3921.0], [73.8, 3948.0], [73.9, 3957.0], [74.0, 3957.0], [74.1, 3981.0], [74.2, 3992.0], [74.3, 3998.0], [74.4, 4026.0], [74.5, 4030.0], [74.6, 4049.0], [74.7, 4050.0], [74.8, 4055.0], [74.9, 4055.0], [75.0, 4062.0], [75.1, 4082.0], [75.2, 4087.0], [75.3, 4093.0], [75.4, 4097.0], [75.5, 4103.0], [75.6, 4114.0], [75.7, 4122.0], [75.8, 4126.0], [75.9, 4134.0], [76.0, 4138.0], [76.1, 4166.0], [76.2, 4166.0], [76.3, 4175.0], [76.4, 4175.0], [76.5, 4176.0], [76.6, 4180.0], [76.7, 4181.0], [76.8, 4184.0], [76.9, 4188.0], [77.0, 4197.0], [77.1, 4204.0], [77.2, 4204.0], [77.3, 4210.0], [77.4, 4216.0], [77.5, 4229.0], [77.6, 4238.0], [77.7, 4246.0], [77.8, 4250.0], [77.9, 4257.0], [78.0, 4263.0], [78.1, 4316.0], [78.2, 4332.0], [78.3, 4397.0], [78.4, 4397.0], [78.5, 4400.0], [78.6, 4440.0], [78.7, 4461.0], [78.8, 4490.0], [78.9, 4500.0], [79.0, 4510.0], [79.1, 4522.0], [79.2, 4524.0], [79.3, 4556.0], [79.4, 4582.0], [79.5, 4606.0], [79.6, 4643.0], [79.7, 4820.0], [79.8, 4832.0], [79.9, 4844.0], [80.0, 4874.0], [80.1, 4901.0], [80.2, 4903.0], [80.3, 4919.0], [80.4, 4920.0], [80.5, 4940.0], [80.6, 4946.0], [80.7, 4946.0], [80.8, 4998.0], [80.9, 5056.0], [81.0, 5097.0], [81.1, 5173.0], [81.2, 5177.0], [81.3, 5199.0], [81.4, 5219.0], [81.5, 5369.0], [81.6, 5639.0], [81.7, 5803.0], [81.8, 5955.0], [81.9, 7586.0], [82.0, 7645.0], [82.1, 7651.0], [82.2, 7654.0], [82.3, 7664.0], [82.4, 7696.0], [82.5, 7741.0], [82.6, 7775.0], [82.7, 7786.0], [82.8, 7805.0], [82.9, 7838.0], [83.0, 7846.0], [83.1, 7861.0], [83.2, 7872.0], [83.3, 7882.0], [83.4, 7907.0], [83.5, 7920.0], [83.6, 7967.0], [83.7, 8015.0], [83.8, 8015.0], [83.9, 8065.0], [84.0, 8092.0], [84.1, 8123.0], [84.2, 8149.0], [84.3, 8167.0], [84.4, 8168.0], [84.5, 8181.0], [84.6, 8276.0], [84.7, 8293.0], [84.8, 8312.0], [84.9, 8318.0], [85.0, 8330.0], [85.1, 8334.0], [85.2, 8352.0], [85.3, 8353.0], [85.4, 8357.0], [85.5, 8398.0], [85.6, 8410.0], [85.7, 8446.0], [85.8, 8498.0], [85.9, 8535.0], [86.0, 8542.0], [86.1, 8549.0], [86.2, 8586.0], [86.3, 8615.0], [86.4, 8616.0], [86.5, 8623.0], [86.6, 8657.0], [86.7, 8661.0], [86.8, 8666.0], [86.9, 8673.0], [87.0, 8687.0], [87.1, 8731.0], [87.2, 8740.0], [87.3, 8809.0], [87.4, 8928.0], [87.5, 8977.0], [87.6, 9121.0], [87.7, 9355.0], [87.8, 9389.0], [87.9, 9531.0], [88.0, 9970.0], [88.1, 11482.0], [88.2, 13602.0], [88.3, 15502.0], [88.4, 15872.0], [88.5, 15905.0], [88.6, 15992.0], [88.7, 15996.0], [88.8, 16148.0], [88.9, 16159.0], [89.0, 16160.0], [89.1, 16218.0], [89.2, 16234.0], [89.3, 16236.0], [89.4, 16278.0], [89.5, 16326.0], [89.6, 16393.0], [89.7, 16436.0], [89.8, 16462.0], [89.9, 16486.0], [90.0, 16491.0], [90.1, 16519.0], [90.2, 16567.0], [90.3, 16604.0], [90.4, 16612.0], [90.5, 16641.0], [90.6, 16681.0], [90.7, 16698.0], [90.8, 16784.0], [90.9, 16794.0], [91.0, 16943.0], [91.1, 16949.0], [91.2, 16949.0], [91.3, 17009.0], [91.4, 17020.0], [91.5, 17084.0], [91.6, 17100.0], [91.7, 17163.0], [91.8, 17194.0], [91.9, 17284.0], [92.0, 17380.0], [92.1, 17431.0], [92.2, 17434.0], [92.3, 17986.0], [92.4, 18005.0], [92.5, 18077.0], [92.6, 18093.0], [92.7, 19319.0], [92.8, 19602.0], [92.9, 20146.0], [93.0, 20277.0], [93.1, 21058.0], [93.2, 23624.0], [93.3, 24354.0], [93.4, 32645.0], [93.5, 33187.0], [93.6, 33341.0], [93.7, 33482.0], [93.8, 33485.0], [93.9, 33712.0], [94.0, 33746.0], [94.1, 33762.0], [94.2, 33770.0], [94.3, 33855.0], [94.4, 33878.0], [94.5, 33959.0], [94.6, 34174.0], [94.7, 34302.0], [94.8, 34494.0], [94.9, 34956.0], [95.0, 35439.0], [95.1, 35596.0], [95.2, 36023.0], [95.3, 36029.0], [95.4, 36391.0], [95.5, 39039.0], [95.6, 43439.0], [95.7, 44346.0], [95.8, 49210.0], [95.9, 63827.0], [96.0, 65418.0], [96.1, 65764.0], [96.2, 65838.0], [96.3, 65880.0], [96.4, 65885.0], [96.5, 65989.0], [96.6, 66289.0], [96.7, 66558.0], [96.8, 66847.0], [96.9, 67018.0], [97.0, 67163.0], [97.1, 67244.0], [97.2, 67572.0], [97.3, 67648.0], [97.4, 67954.0], [97.5, 68085.0], [97.6, 68308.0], [97.7, 68329.0], [97.8, 68535.0], [97.9, 68550.0], [98.0, 68942.0], [98.1, 68984.0], [98.2, 69050.0], [98.3, 69759.0], [98.4, 69888.0], [98.5, 69918.0], [98.6, 70665.0], [98.7, 79643.0], [98.8, 129795.0], [98.9, 130498.0], [99.0, 130508.0], [99.1, 130774.0], [99.2, 130882.0], [99.3, 131821.0], [99.4, 132332.0], [99.5, 132354.0], [99.6, 132971.0], [99.7, 133069.0], [99.8, 134137.0], [99.9, 142015.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 200.0, "maxY": 55.0, "series": [{"data": [[132900.0, 1.0], [65900.0, 1.0], [67100.0, 1.0], [67500.0, 1.0], [67900.0, 1.0], [68300.0, 2.0], [69900.0, 1.0], [130700.0, 1.0], [133000.0, 1.0], [33700.0, 4.0], [33300.0, 1.0], [33900.0, 1.0], [34300.0, 1.0], [34100.0, 1.0], [33100.0, 1.0], [132300.0, 2.0], [35500.0, 1.0], [34900.0, 1.0], [36300.0, 1.0], [44300.0, 1.0], [200.0, 7.0], [65800.0, 3.0], [67000.0, 1.0], [69000.0, 1.0], [66200.0, 1.0], [69800.0, 1.0], [70600.0, 1.0], [300.0, 6.0], [400.0, 17.0], [500.0, 27.0], [142000.0, 1.0], [600.0, 39.0], [700.0, 49.0], [800.0, 47.0], [900.0, 55.0], [1000.0, 49.0], [1100.0, 38.0], [1200.0, 36.0], [1300.0, 30.0], [1400.0, 25.0], [1500.0, 35.0], [1600.0, 31.0], [1700.0, 38.0], [1800.0, 22.0], [1900.0, 24.0], [2000.0, 31.0], [2100.0, 28.0], [134100.0, 1.0], [2300.0, 9.0], [2200.0, 14.0], [2400.0, 5.0], [2500.0, 9.0], [2600.0, 11.0], [2700.0, 4.0], [2800.0, 4.0], [2900.0, 3.0], [3000.0, 2.0], [3100.0, 3.0], [3200.0, 2.0], [3300.0, 3.0], [3500.0, 7.0], [3700.0, 11.0], [3600.0, 7.0], [3800.0, 7.0], [3900.0, 8.0], [4000.0, 12.0], [4100.0, 16.0], [4200.0, 10.0], [4300.0, 4.0], [68500.0, 2.0], [68900.0, 2.0], [66500.0, 1.0], [65700.0, 1.0], [4500.0, 6.0], [4600.0, 2.0], [4400.0, 4.0], [69700.0, 1.0], [4800.0, 4.0], [4900.0, 8.0], [5000.0, 2.0], [5100.0, 3.0], [5200.0, 1.0], [5300.0, 1.0], [5600.0, 1.0], [5800.0, 1.0], [5900.0, 1.0], [7600.0, 5.0], [7500.0, 1.0], [7700.0, 3.0], [7800.0, 6.0], [7900.0, 3.0], [8100.0, 5.0], [8000.0, 4.0], [129700.0, 1.0], [130500.0, 1.0], [8400.0, 3.0], [8500.0, 4.0], [8200.0, 2.0], [8600.0, 8.0], [8700.0, 2.0], [8300.0, 8.0], [131800.0, 1.0], [9100.0, 1.0], [8900.0, 2.0], [8800.0, 1.0], [9300.0, 2.0], [9500.0, 1.0], [9900.0, 1.0], [11400.0, 1.0], [13600.0, 1.0], [15800.0, 1.0], [15500.0, 1.0], [16100.0, 3.0], [16200.0, 4.0], [15900.0, 3.0], [16300.0, 2.0], [17300.0, 1.0], [16600.0, 5.0], [16500.0, 2.0], [17000.0, 3.0], [17100.0, 3.0], [17400.0, 2.0], [16900.0, 3.0], [16400.0, 4.0], [17200.0, 1.0], [16700.0, 2.0], [18000.0, 3.0], [17900.0, 1.0], [19300.0, 1.0], [20100.0, 1.0], [20200.0, 1.0], [19600.0, 1.0], [21000.0, 1.0], [23600.0, 1.0], [24300.0, 1.0], [32600.0, 1.0], [33400.0, 2.0], [34400.0, 1.0], [33800.0, 2.0], [36000.0, 2.0], [35400.0, 1.0], [39000.0, 1.0], [43400.0, 1.0], [49200.0, 1.0], [65400.0, 1.0], [63800.0, 1.0], [66800.0, 1.0], [67200.0, 1.0], [67600.0, 1.0], [68000.0, 1.0], [79600.0, 1.0], [130400.0, 1.0], [130800.0, 1.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 142000.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 12.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 562.0, "series": [{"data": [[0.0, 30.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 396.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 562.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [[3.0, 12.0]], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 3.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 10.03738317757009, "minX": 1.71541806E12, "maxY": 89.27468581687617, "series": [{"data": [[1.71541812E12, 38.57440476190476], [1.71541806E12, 89.27468581687617], [1.71541818E12, 10.03738317757009]], "isOverall": false, "label": "Thread Group", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.71541818E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 579.0, "minX": 1.0, "maxY": 46652.230769230766, "series": [{"data": [[2.0, 1249.0], [3.0, 1355.0], [4.0, 1411.0], [5.0, 1410.0], [6.0, 1261.5], [7.0, 1104.6666666666667], [8.0, 2328.3333333333335], [9.0, 1637.0], [10.0, 1567.7142857142856], [11.0, 16711.61111111111], [12.0, 27656.459999999995], [13.0, 1326.0], [14.0, 1139.6666666666667], [15.0, 1303.0], [16.0, 2131.875], [17.0, 1624.5714285714287], [18.0, 1089.0], [19.0, 1796.0], [20.0, 2138.0], [21.0, 3069.75], [22.0, 1484.285714285714], [23.0, 7426.5], [24.0, 16147.5], [25.0, 33387.5], [26.0, 16996.875], [27.0, 6490.0], [28.0, 11298.666666666666], [29.0, 1217.8888888888887], [30.0, 851.0], [31.0, 1615.0], [33.0, 1793.4285714285716], [32.0, 1121.5], [35.0, 1882.6666666666667], [34.0, 2933.833333333333], [37.0, 7596.5], [36.0, 1550.5], [39.0, 1537.0], [38.0, 4048.8571428571427], [41.0, 1946.0], [40.0, 6411.0], [43.0, 5951.520833333335], [42.0, 2924.4444444444443], [45.0, 25102.128205128203], [44.0, 4834.787878787879], [47.0, 4871.5], [46.0, 46652.230769230766], [49.0, 662.0], [48.0, 5490.0], [51.0, 1197.0], [50.0, 1403.5], [53.0, 1465.3333333333333], [52.0, 616.0], [55.0, 7587.999999999999], [54.0, 1734.5], [57.0, 15701.666666666668], [56.0, 4558.2], [59.0, 1063.6666666666667], [58.0, 2145.0], [61.0, 2791.0], [60.0, 1332.0], [62.0, 579.0], [63.0, 2767.5], [67.0, 986.0], [66.0, 1836.7499999999998], [65.0, 5557.0], [64.0, 692.0], [71.0, 7914.0], [70.0, 3512.7000000000003], [69.0, 4468.666666666667], [68.0, 2056.5], [75.0, 4166.0], [74.0, 963.0], [73.0, 8222.904761904761], [72.0, 3393.0], [79.0, 2213.0], [78.0, 5548.166666666666], [77.0, 4460.25], [76.0, 3270.764705882353], [83.0, 2481.6], [82.0, 16166.727272727272], [81.0, 12775.0], [80.0, 9365.25], [87.0, 4126.363636363636], [86.0, 7401.125000000002], [85.0, 3675.791666666667], [84.0, 1403.0], [91.0, 4841.740740740742], [90.0, 5602.55172413793], [89.0, 2007.428571428571], [88.0, 2088.6666666666665], [92.0, 4476.307692307692], [93.0, 3912.8571428571427], [95.0, 2206.0], [94.0, 4731.714285714285], [99.0, 1413.0], [98.0, 4025.358974358974], [97.0, 4416.235294117647], [96.0, 1701.0], [100.0, 2616.2340425531916], [1.0, 1356.0]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[63.76100000000006, 7336.573000000002]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 185.25, "minX": 1.71541806E12, "maxY": 1364.65, "series": [{"data": [[1.71541812E12, 823.2], [1.71541806E12, 1364.65], [1.71541818E12, 651.35]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.71541812E12, 655.2], [1.71541806E12, 1086.15], [1.71541818E12, 185.25]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.71541818E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 4419.894075403951, "minX": 1.71541806E12, "maxY": 16269.45794392523, "series": [{"data": [[1.71541812E12, 9326.964285714279], [1.71541806E12, 4419.894075403951], [1.71541818E12, 16269.45794392523]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.71541818E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 1398.6355140186915, "minX": 1.71541806E12, "maxY": 9326.815476190472, "series": [{"data": [[1.71541812E12, 9326.815476190472], [1.71541806E12, 4419.730700179536], [1.71541818E12, 1398.6355140186915]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.71541818E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 1.1401869158878506, "minX": 1.71541806E12, "maxY": 2.5834829443447043, "series": [{"data": [[1.71541812E12, 1.3095238095238086], [1.71541806E12, 2.5834829443447043], [1.71541818E12, 1.1401869158878506]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.71541818E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 241.0, "minX": 1.71541806E12, "maxY": 79643.0, "series": [{"data": [[1.71541812E12, 79643.0], [1.71541806E12, 44346.0], [1.71541818E12, 4903.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.71541812E12, 429.0], [1.71541806E12, 250.0], [1.71541818E12, 241.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.71541812E12, 34330.20000000002], [1.71541806E12, 8966.599999999999], [1.71541818E12, 2602.4000000000005]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.71541812E12, 69906.9], [1.71541806E12, 35224.799999999974], [1.71541818E12, 4903.0]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.71541812E12, 1591.0], [1.71541806E12, 1850.0], [1.71541818E12, 1385.0]], "isOverall": false, "label": "Median", "isController": false}, {"data": [[1.71541812E12, 67293.2], [1.71541806E12, 17385.4], [1.71541818E12, 3119.199999999999]], "isOverall": false, "label": "95th percentile", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.71541818E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 765.0, "minX": 1.0, "maxY": 136448.5, "series": [{"data": [[2.0, 791.0], [8.0, 1611.5], [9.0, 1785.0], [10.0, 2414.0], [11.0, 1820.0], [12.0, 1541.0], [3.0, 1249.0], [13.0, 2734.0], [14.0, 1821.0], [15.0, 1842.0], [4.0, 1400.0], [1.0, 1356.0], [17.0, 1024.0], [18.0, 3443.5], [19.0, 765.0], [5.0, 1728.0], [21.0, 1557.0], [6.0, 1562.5], [7.0, 1764.0]], "isOverall": false, "label": "Successes", "isController": false}, {"data": [[6.0, 132343.0], [12.0, 130503.0], [7.0, 136448.5]], "isOverall": false, "label": "Failures", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 21.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 0.0, "minX": 1.0, "maxY": 3443.5, "series": [{"data": [[2.0, 790.5], [8.0, 1611.5], [9.0, 1785.0], [10.0, 2414.0], [11.0, 1820.0], [12.0, 1541.0], [3.0, 1249.0], [13.0, 2734.0], [14.0, 1821.0], [15.0, 1841.0], [4.0, 1400.0], [1.0, 1355.5], [17.0, 1024.0], [18.0, 3443.5], [19.0, 765.0], [5.0, 1727.5], [21.0, 1557.0], [6.0, 1562.0], [7.0, 1764.0]], "isOverall": false, "label": "Successes", "isController": false}, {"data": [[6.0, 0.0], [12.0, 0.0], [7.0, 0.0]], "isOverall": false, "label": "Failures", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 21.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 1.5666666666666667, "minX": 1.71541806E12, "maxY": 10.316666666666666, "series": [{"data": [[1.71541812E12, 4.783333333333333], [1.71541806E12, 10.316666666666666], [1.71541818E12, 1.5666666666666667]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.71541818E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 0.2, "minX": 1.71541806E12, "maxY": 9.283333333333333, "series": [{"data": [[1.71541812E12, 5.6], [1.71541806E12, 9.283333333333333], [1.71541818E12, 1.5833333333333333]], "isOverall": false, "label": "200", "isController": false}, {"data": [[1.71541818E12, 0.2]], "isOverall": false, "label": "Non HTTP response code: org.apache.http.NoHttpResponseException", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.71541818E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 0.2, "minX": 1.71541806E12, "maxY": 9.283333333333333, "series": [{"data": [[1.71541812E12, 5.6], [1.71541806E12, 9.283333333333333], [1.71541818E12, 1.5833333333333333]], "isOverall": false, "label": "HTTP Request-success", "isController": false}, {"data": [[1.71541818E12, 0.2]], "isOverall": false, "label": "HTTP Request-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.71541818E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 0.2, "minX": 1.71541806E12, "maxY": 9.283333333333333, "series": [{"data": [[1.71541812E12, 5.6], [1.71541806E12, 9.283333333333333], [1.71541818E12, 1.5833333333333333]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [[1.71541818E12, 0.2]], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.71541818E12, "title": "Total Transactions Per Second"}},
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

