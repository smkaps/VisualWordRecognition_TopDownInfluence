
// An investigation into top-down influence using the Word Superiority Effect
// v. 9 - Semantic Priming (concrete noun/action verb)

// Written by Simon Kaplan 2018-2021

/******************************************************************************/

//  *
//  *     Requires:
//  *     psiturk.js
//  *     utils.js
//  *

// Initalize psiturk object
var psiTurk = new PsiTurk(uniqueId, adServerLoc, mode);

var mycondition = condition;  // these two variables are passed by the psiturk server process
var mycounterbalance = counterbalance;  // they tell you which condition you have been assigned to - they are not used in the stroop code but may be useful to you

// below are the pre-loaded pages (instructions)

var pages = [
	"instructions/disclaimer.html",
	//  "instructions/instruct-0.html",
	//  "instructions/instruct-1.html",
	//  "instructions/instruct-2.html",
	//  "instructions/instruct-3.html",
	//  "instructions/instruct-4.html",
	//  "instructions/instruct-5.html",
	//  "instructions/instruct-6.html",
	//  "instructions/instruct-7.html",
	// "instructions/instruct-ready.html",
	"stage.html",
	"postquestionnaire.html"
];

psiTurk.preloadPages(pages);

var instructionPages = [ 
	"instructions/disclaimer.html",
	//  "instructions/instruct-0.html",
	//  "instructions/instruct-1.html",
	//  "instructions/instruct-2.html",
	//  "instructions/instruct-3.html",
	//  "instructions/instruct-4.html",
	//  "instructions/instruct-5.html",
	//  "instructions/instruct-6.html",
	// "instructions/instruct-7.html",	
	// "instructions/instruct-ready.html"
];

// here are the preloaded images (randomimageset) that make up the scrambled masks. 
// one of five sets currently used due to lag in loading images upon first appearance

var randomimageset = ["static/images/scrambled1a.jpg", "static/images/scrambled1b.jpg", "static/images/scrambled1c.jpg", "static/images/scrambled1d.jpg", "static/images/scrambled2a.jpg", "static/images/scrambled2b.jpg", "static/images/scrambled2c.jpg", "static/images/scrambled2d.jpg", "static/images/scrambled3a.jpg", "static/images/scrambled3b.jpg", "static/images/scrambled3c.jpg", "static/images/scrambled3d.jpg", "static/images/scrambled4a.jpg", "static/images/scrambled4b.jpg", "static/images/scrambled4c.jpg", "static/images/scrambled4d.jpg"]
// var randomimageset = ["static/images/scrambled35.jpg",  "static/images/scrambled580.jpg",  "static/images/scrambled21.jpg",  "static/images/scrambled594.jpg",  "static/images/scrambled1009.jpg",  "static/images/scrambled1021.jpg",  "static/images/scrambled1035.jpg",  "static/images/scrambled543.jpg",  "static/images/scrambled225.jpg",  "static/images/scrambled231.jpg",  "static/images/scrambled557.jpg",  "static/images/scrambled219.jpg",  "static/images/scrambled782.jpg",  "static/images/scrambled796.jpg",  "static/images/scrambled966.jpg",  "static/images/scrambled972.jpg",  "static/images/scrambled741.jpg",  "static/images/scrambled999.jpg",  "static/images/scrambled755.jpg",  "static/images/scrambled769.jpg",  "static/images/scrambled190.jpg",  "static/images/scrambled184.jpg",  "static/images/scrambled812.jpg",  "static/images/scrambled806.jpg",  "static/images/scrambled153.jpg",  "static/images/scrambled635.jpg",  "static/images/scrambled621.jpg",  "static/images/scrambled147.jpg",  "static/images/scrambled609.jpg",  "static/images/scrambled1169.jpg",  "static/images/scrambled392.jpg",  "static/images/scrambled386.jpg",  "static/images/scrambled1155.jpg",  "static/images/scrambled1141.jpg",  "static/images/scrambled437.jpg",  "static/images/scrambled351.jpg",  "static/images/scrambled345.jpg",  "static/images/scrambled423.jpg",  "static/images/scrambled1196.jpg",  "static/images/scrambled379.jpg",  "static/images/scrambled1182.jpg",  "static/images/scrambled378.jpg",  "static/images/scrambled1183.jpg",  "static/images/scrambled1197.jpg",  "static/images/scrambled344.jpg",  "static/images/scrambled422.jpg",  "static/images/scrambled436.jpg",  "static/images/scrambled350.jpg",  "static/images/scrambled1140.jpg",  "static/images/scrambled1154.jpg",  "static/images/scrambled387.jpg",  "static/images/scrambled1168.jpg",  "static/images/scrambled393.jpg",  "static/images/scrambled608.jpg",  "static/images/scrambled620.jpg",  "static/images/scrambled146.jpg",  "static/images/scrambled152.jpg",  "static/images/scrambled634.jpg",  "static/images/scrambled807.jpg",  "static/images/scrambled813.jpg",  "static/images/scrambled185.jpg",  "static/images/scrambled191.jpg",  "static/images/scrambled768.jpg",  "static/images/scrambled754.jpg",  "static/images/scrambled998.jpg",  "static/images/scrambled740.jpg",  "static/images/scrambled973.jpg",  "static/images/scrambled967.jpg",  "static/images/scrambled797.jpg",  "static/images/scrambled783.jpg",  "static/images/scrambled218.jpg",  "static/images/scrambled230.jpg",  "static/images/scrambled556.jpg",  "static/images/scrambled542.jpg",  "static/images/scrambled224.jpg",  "static/images/scrambled1034.jpg",  "static/images/scrambled1020.jpg",  "static/images/scrambled1008.jpg",  "static/images/scrambled595.jpg",  "static/images/scrambled20.jpg",  "static/images/scrambled581.jpg",  "static/images/scrambled34.jpg",  "static/images/scrambled22.jpg",  "static/images/scrambled597.jpg",  "static/images/scrambled36.jpg",  "static/images/scrambled583.jpg",  "static/images/scrambled1036.jpg",  "static/images/scrambled1022.jpg",  "static/images/scrambled554.jpg",  "static/images/scrambled232.jpg",  "static/images/scrambled226.jpg",  "static/images/scrambled540.jpg",  "static/images/scrambled568.jpg",  "static/images/scrambled795.jpg",  "static/images/scrambled959.jpg",  "static/images/scrambled781.jpg",  "static/images/scrambled971.jpg",  "static/images/scrambled965.jpg",  "static/images/scrambled756.jpg",  "static/images/scrambled742.jpg",  "static/images/scrambled187.jpg",  "static/images/scrambled839.jpg",  "static/images/scrambled193.jpg",  "static/images/scrambled805.jpg",  "static/images/scrambled811.jpg",  "static/images/scrambled144.jpg",  "static/images/scrambled622.jpg",  "static/images/scrambled636.jpg",  "static/images/scrambled150.jpg",  "static/images/scrambled178.jpg",  "static/images/scrambled385.jpg",  "static/images/scrambled391.jpg",  "static/images/scrambled1142.jpg",  "static/images/scrambled1156.jpg",  "static/images/scrambled420.jpg",  "static/images/scrambled346.jpg",  "static/images/scrambled352.jpg",  "static/images/scrambled434.jpg",  "static/images/scrambled1181.jpg",  "static/images/scrambled408.jpg",  "static/images/scrambled1195.jpg",  "static/images/scrambled1194.jpg",  "static/images/scrambled409.jpg",  "static/images/scrambled1180.jpg",  "static/images/scrambled353.jpg",  "static/images/scrambled435.jpg",  "static/images/scrambled421.jpg",  "static/images/scrambled347.jpg",  "static/images/scrambled1157.jpg",  "static/images/scrambled1143.jpg",  "static/images/scrambled390.jpg",  "static/images/scrambled384.jpg",  "static/images/scrambled179.jpg",  "static/images/scrambled637.jpg",  "static/images/scrambled151.jpg",  "static/images/scrambled145.jpg",  "static/images/scrambled623.jpg",  "static/images/scrambled810.jpg",  "static/images/scrambled804.jpg",  "static/images/scrambled192.jpg",  "static/images/scrambled186.jpg",  "static/images/scrambled838.jpg",  "static/images/scrambled743.jpg",  "static/images/scrambled757.jpg",  "static/images/scrambled964.jpg",  "static/images/scrambled970.jpg",  "static/images/scrambled780.jpg",  "static/images/scrambled958.jpg",  "static/images/scrambled794.jpg",  "static/images/scrambled569.jpg",  "static/images/scrambled227.jpg",  "static/images/scrambled541.jpg",  "static/images/scrambled555.jpg",  "static/images/scrambled233.jpg",  "static/images/scrambled1023.jpg",  "static/images/scrambled1037.jpg",  "static/images/scrambled582.jpg",  "static/images/scrambled37.jpg",  "static/images/scrambled596.jpg",  "static/images/scrambled23.jpg",  "static/images/scrambled1033.jpg",  "static/images/scrambled1027.jpg",  "static/images/scrambled592.jpg",  "static/images/scrambled27.jpg",  "static/images/scrambled586.jpg",  "static/images/scrambled33.jpg",  "static/images/scrambled579.jpg",  "static/images/scrambled237.jpg",  "static/images/scrambled551.jpg",  "static/images/scrambled545.jpg",  "static/images/scrambled223.jpg",  "static/images/scrambled974.jpg",  "static/images/scrambled960.jpg",  "static/images/scrambled948.jpg",  "static/images/scrambled790.jpg",  "static/images/scrambled784.jpg",  "static/images/scrambled753.jpg",  "static/images/scrambled747.jpg",  "static/images/scrambled800.jpg",  "static/images/scrambled814.jpg",  "static/images/scrambled182.jpg",  "static/images/scrambled196.jpg",  "static/images/scrambled828.jpg",  "static/images/scrambled169.jpg",  "static/images/scrambled627.jpg",  "static/images/scrambled141.jpg",  "static/images/scrambled155.jpg",  "static/images/scrambled633.jpg",  "static/images/scrambled1147.jpg",  "static/images/scrambled1153.jpg",  "static/images/scrambled380.jpg",  "static/images/scrambled394.jpg",  "static/images/scrambled419.jpg",  "static/images/scrambled1184.jpg",  "static/images/scrambled1190.jpg",  "static/images/scrambled343.jpg",  "static/images/scrambled425.jpg",  "static/images/scrambled431.jpg",  "static/images/scrambled357.jpg",  "static/images/scrambled430.jpg",  "static/images/scrambled356.jpg",  "static/images/scrambled342.jpg",  "static/images/scrambled424.jpg",  "static/images/scrambled1191.jpg",  "static/images/scrambled1185.jpg",  "static/images/scrambled418.jpg",  "static/images/scrambled395.jpg",  "static/images/scrambled381.jpg",  "static/images/scrambled1152.jpg",  "static/images/scrambled1146.jpg",  "static/images/scrambled154.jpg",  "static/images/scrambled632.jpg",  "static/images/scrambled626.jpg",  "static/images/scrambled140.jpg",  "static/images/scrambled168.jpg",  "static/images/scrambled197.jpg",  "static/images/scrambled829.jpg",  "static/images/scrambled183.jpg",  "static/images/scrambled815.jpg",  "static/images/scrambled801.jpg",  "static/images/scrambled746.jpg",  "static/images/scrambled752.jpg",  "static/images/scrambled785.jpg",  "static/images/scrambled791.jpg",  "static/images/scrambled949.jpg",  "static/images/scrambled961.jpg",  "static/images/scrambled975.jpg",  "static/images/scrambled544.jpg",  "static/images/scrambled222.jpg",  "static/images/scrambled236.jpg",  "static/images/scrambled550.jpg",  "static/images/scrambled578.jpg",  "static/images/scrambled32.jpg",  "static/images/scrambled587.jpg",  "static/images/scrambled26.jpg",  "static/images/scrambled593.jpg",  "static/images/scrambled1026.jpg",  "static/images/scrambled1032.jpg",  "static/images/scrambled1024.jpg",  "static/images/scrambled18.jpg",  "static/images/scrambled1030.jpg",  "static/images/scrambled585.jpg",  "static/images/scrambled30.jpg",  "static/images/scrambled1018.jpg",  "static/images/scrambled591.jpg",  "static/images/scrambled24.jpg",  "static/images/scrambled208.jpg",  "static/images/scrambled220.jpg",  "static/images/scrambled546.jpg",  "static/images/scrambled552.jpg",  "static/images/scrambled234.jpg",  "static/images/scrambled963.jpg",  "static/images/scrambled977.jpg",  "static/images/scrambled787.jpg",  "static/images/scrambled793.jpg",  "static/images/scrambled778.jpg",  "static/images/scrambled744.jpg",  "static/images/scrambled750.jpg",  "static/images/scrambled988.jpg",  "static/images/scrambled817.jpg",  "static/images/scrambled803.jpg",  "static/images/scrambled195.jpg",  "static/images/scrambled181.jpg",  "static/images/scrambled618.jpg",  "static/images/scrambled630.jpg",  "static/images/scrambled156.jpg",  "static/images/scrambled142.jpg",  "static/images/scrambled624.jpg",  "static/images/scrambled1150.jpg",  "static/images/scrambled1144.jpg",  "static/images/scrambled397.jpg",  "static/images/scrambled1178.jpg",  "static/images/scrambled383.jpg",  "static/images/scrambled368.jpg",  "static/images/scrambled1193.jpg",  "static/images/scrambled1187.jpg",  "static/images/scrambled354.jpg",  "static/images/scrambled432.jpg",  "static/images/scrambled426.jpg",  "static/images/scrambled340.jpg",  "static/images/scrambled427.jpg",  "static/images/scrambled341.jpg",  "static/images/scrambled355.jpg",  "static/images/scrambled433.jpg",  "static/images/scrambled1186.jpg",  "static/images/scrambled369.jpg",  "static/images/scrambled1192.jpg",  "static/images/scrambled1179.jpg",  "static/images/scrambled382.jpg",  "static/images/scrambled396.jpg",  "static/images/scrambled1145.jpg",  "static/images/scrambled1151.jpg",  "static/images/scrambled143.jpg",  "static/images/scrambled625.jpg",  "static/images/scrambled631.jpg",  "static/images/scrambled157.jpg",  "static/images/scrambled619.jpg",  "static/images/scrambled180.jpg",  "static/images/scrambled194.jpg",  "static/images/scrambled802.jpg"]
// var randomimageset2 = ["static/images/scrambled816.jpg",  "static/images/scrambled989.jpg",  "static/images/scrambled751.jpg",  "static/images/scrambled745.jpg",  "static/images/scrambled779.jpg",  "static/images/scrambled792.jpg",  "static/images/scrambled786.jpg",  "static/images/scrambled976.jpg",  "static/images/scrambled962.jpg",  "static/images/scrambled553.jpg",  "static/images/scrambled235.jpg",  "static/images/scrambled221.jpg",  "static/images/scrambled547.jpg",  "static/images/scrambled209.jpg",  "static/images/scrambled25.jpg",  "static/images/scrambled590.jpg",  "static/images/scrambled1019.jpg",  "static/images/scrambled31.jpg",  "static/images/scrambled584.jpg",  "static/images/scrambled1031.jpg",  "static/images/scrambled19.jpg",  "static/images/scrambled1025.jpg",  "static/images/scrambled285.jpg",  "static/images/scrambled56.jpg",  "static/images/scrambled42.jpg",  "static/images/scrambled291.jpg",  "static/images/scrambled1042.jpg",  "static/images/scrambled1056.jpg",  "static/images/scrambled246.jpg",  "static/images/scrambled95.jpg",  "static/images/scrambled520.jpg",  "static/images/scrambled81.jpg",  "static/images/scrambled534.jpg",  "static/images/scrambled252.jpg",  "static/images/scrambled1081.jpg",  "static/images/scrambled1095.jpg",  "static/images/scrambled508.jpg",  "static/images/scrambled939.jpg",  "static/images/scrambled905.jpg",  "static/images/scrambled911.jpg",  "static/images/scrambled722.jpg",  "static/images/scrambled736.jpg",  "static/images/scrambled695.jpg",  "static/images/scrambled681.jpg",  "static/images/scrambled859.jpg",  "static/images/scrambled871.jpg",  "static/images/scrambled865.jpg",  "static/images/scrambled656.jpg",  "static/images/scrambled130.jpg",  "static/images/scrambled124.jpg",  "static/images/scrambled642.jpg",  "static/images/scrambled118.jpg",  "static/images/scrambled497.jpg",  "static/images/scrambled483.jpg",  "static/images/scrambled1136.jpg",  "static/images/scrambled1122.jpg",  "static/images/scrambled332.jpg",  "static/images/scrambled454.jpg",  "static/images/scrambled440.jpg",  "static/images/scrambled326.jpg",  "static/images/scrambled468.jpg",  "static/images/scrambled469.jpg",  "static/images/scrambled441.jpg",  "static/images/scrambled327.jpg",  "static/images/scrambled333.jpg",  "static/images/scrambled455.jpg",  "static/images/scrambled1123.jpg",  "static/images/scrambled1137.jpg",  "static/images/scrambled482.jpg",  "static/images/scrambled496.jpg",  "static/images/scrambled119.jpg",  "static/images/scrambled125.jpg",  "static/images/scrambled643.jpg",  "static/images/scrambled657.jpg",  "static/images/scrambled131.jpg",  "static/images/scrambled864.jpg",  "static/images/scrambled870.jpg",  "static/images/scrambled858.jpg",  "static/images/scrambled680.jpg",  "static/images/scrambled694.jpg",  "static/images/scrambled737.jpg",  "static/images/scrambled723.jpg",  "static/images/scrambled910.jpg",  "static/images/scrambled904.jpg",  "static/images/scrambled938.jpg",  "static/images/scrambled509.jpg",  "static/images/scrambled1094.jpg",  "static/images/scrambled1080.jpg",  "static/images/scrambled535.jpg",  "static/images/scrambled80.jpg",  "static/images/scrambled253.jpg",  "static/images/scrambled247.jpg",  "static/images/scrambled521.jpg",  "static/images/scrambled94.jpg",  "static/images/scrambled1057.jpg",  "static/images/scrambled1043.jpg",  "static/images/scrambled43.jpg",  "static/images/scrambled290.jpg",  "static/images/scrambled284.jpg",  "static/images/scrambled57.jpg",  "static/images/scrambled292.jpg",  "static/images/scrambled41.jpg",  "static/images/scrambled1069.jpg",  "static/images/scrambled55.jpg",  "static/images/scrambled286.jpg",  "static/images/scrambled1055.jpg",  "static/images/scrambled69.jpg",  "static/images/scrambled1041.jpg",  "static/images/scrambled251.jpg",  "static/images/scrambled82.jpg",  "static/images/scrambled537.jpg",  "static/images/scrambled96.jpg",  "static/images/scrambled523.jpg",  "static/images/scrambled245.jpg",  "static/images/scrambled1096.jpg",  "static/images/scrambled1082.jpg",  "static/images/scrambled279.jpg",  "static/images/scrambled912.jpg",  "static/images/scrambled906.jpg",  "static/images/scrambled735.jpg",  "static/images/scrambled721.jpg",  "static/images/scrambled709.jpg",  "static/images/scrambled682.jpg",  "static/images/scrambled696.jpg",  "static/images/scrambled866.jpg",  "static/images/scrambled872.jpg",  "static/images/scrambled899.jpg",  "static/images/scrambled641.jpg",  "static/images/scrambled127.jpg",  "static/images/scrambled133.jpg",  "static/images/scrambled655.jpg",  "static/images/scrambled669.jpg",  "static/images/scrambled480.jpg",  "static/images/scrambled1109.jpg",  "static/images/scrambled494.jpg",  "static/images/scrambled1121.jpg",  "static/images/scrambled1135.jpg",  "static/images/scrambled325.jpg",  "static/images/scrambled443.jpg",  "static/images/scrambled457.jpg",  "static/images/scrambled331.jpg",  "static/images/scrambled319.jpg",  "static/images/scrambled318.jpg",  "static/images/scrambled456.jpg",  "static/images/scrambled330.jpg",  "static/images/scrambled324.jpg",  "static/images/scrambled442.jpg",  "static/images/scrambled1134.jpg",  "static/images/scrambled1120.jpg",  "static/images/scrambled495.jpg",  "static/images/scrambled1108.jpg",  "static/images/scrambled481.jpg",  "static/images/scrambled668.jpg",  "static/images/scrambled132.jpg",  "static/images/scrambled654.jpg",  "static/images/scrambled640.jpg",  "static/images/scrambled898.jpg",  "static/images/scrambled126.jpg",  "static/images/scrambled873.jpg",  "static/images/scrambled867.jpg",  "static/images/scrambled697.jpg",  "static/images/scrambled683.jpg",  "static/images/scrambled708.jpg",  "static/images/scrambled720.jpg",  "static/images/scrambled734.jpg",  "static/images/scrambled907.jpg",  "static/images/scrambled913.jpg",  "static/images/scrambled1083.jpg",  "static/images/scrambled278.jpg",  "static/images/scrambled1097.jpg",  "static/images/scrambled522.jpg",  "static/images/scrambled97.jpg",  "static/images/scrambled244.jpg",  "static/images/scrambled250.jpg",  "static/images/scrambled536.jpg",  "static/images/scrambled83.jpg",  "static/images/scrambled1040.jpg",  "static/images/scrambled68.jpg",  "static/images/scrambled1054.jpg",  "static/images/scrambled54.jpg",  "static/images/scrambled287.jpg",  "static/images/scrambled293.jpg",  "static/images/scrambled1068.jpg",  "static/images/scrambled40.jpg",  "static/images/scrambled78.jpg",  "static/images/scrambled1050.jpg",  "static/images/scrambled1044.jpg",  "static/images/scrambled44.jpg",  "static/images/scrambled297.jpg",  "static/images/scrambled283.jpg",  "static/images/scrambled50.jpg",  "static/images/scrambled1078.jpg",  "static/images/scrambled1093.jpg",  "static/images/scrambled268.jpg",  "static/images/scrambled1087.jpg",  "static/images/scrambled532.jpg",  "static/images/scrambled87.jpg",  "static/images/scrambled254.jpg",  "static/images/scrambled240.jpg",  "static/images/scrambled526.jpg",  "static/images/scrambled93.jpg",  "static/images/scrambled917.jpg",  "static/images/scrambled903.jpg",  "static/images/scrambled718.jpg",  "static/images/scrambled9.jpg",  "static/images/scrambled730.jpg",  "static/images/scrambled724.jpg",  "static/images/scrambled863.jpg",  "static/images/scrambled877.jpg",  "static/images/scrambled687.jpg",  "static/images/scrambled693.jpg",  "static/images/scrambled678.jpg",  "static/images/scrambled122.jpg",  "static/images/scrambled644.jpg",  "static/images/scrambled888.jpg",  "static/images/scrambled650.jpg",  "static/images/scrambled136.jpg",  "static/images/scrambled1124.jpg",  "static/images/scrambled1130.jpg",  "static/images/scrambled1118.jpg",  "static/images/scrambled485.jpg",  "static/images/scrambled491.jpg",  "static/images/scrambled308.jpg",  "static/images/scrambled446.jpg",  "static/images/scrambled320.jpg",  "static/images/scrambled334.jpg",  "static/images/scrambled452.jpg",  "static/images/scrambled335.jpg",  "static/images/scrambled453.jpg",  "static/images/scrambled447.jpg",  "static/images/scrambled321.jpg",  "static/images/scrambled309.jpg",  "static/images/scrambled490.jpg",  "static/images/scrambled484.jpg",  "static/images/scrambled1119.jpg",  "static/images/scrambled1131.jpg",  "static/images/scrambled1125.jpg",  "static/images/scrambled651.jpg",  "static/images/scrambled889.jpg",  "static/images/scrambled137.jpg",  "static/images/scrambled123.jpg",  "static/images/scrambled645.jpg",  "static/images/scrambled679.jpg",  "static/images/scrambled692.jpg",  "static/images/scrambled686.jpg",  "static/images/scrambled876.jpg",  "static/images/scrambled862.jpg",  "static/images/scrambled725.jpg",  "static/images/scrambled731.jpg",  "static/images/scrambled8.jpg",  "static/images/scrambled719.jpg",  "static/images/scrambled902.jpg",  "static/images/scrambled916.jpg",  "static/images/scrambled241.jpg",  "static/images/scrambled92.jpg",  "static/images/scrambled527.jpg",  "static/images/scrambled86.jpg",  "static/images/scrambled533.jpg",  "static/images/scrambled255.jpg",  "static/images/scrambled1086.jpg",  "static/images/scrambled1092.jpg",  "static/images/scrambled269.jpg",  "static/images/scrambled282.jpg",  "static/images/scrambled1079.jpg",  "static/images/scrambled51.jpg",  "static/images/scrambled45.jpg",  "static/images/scrambled296.jpg",  "static/images/scrambled1045.jpg",  "static/images/scrambled1051.jpg",  "static/images/scrambled79.jpg",  "static/images/scrambled1047.jpg",  "static/images/scrambled1053.jpg",  "static/images/scrambled53.jpg",  "static/images/scrambled280.jpg",  "static/images/scrambled294.jpg",  "static/images/scrambled47.jpg",  "static/images/scrambled1084.jpg",  "static/images/scrambled519.jpg",  "static/images/scrambled1090.jpg",  "static/images/scrambled525.jpg",  "static/images/scrambled90.jpg",  "static/images/scrambled243.jpg",  "static/images/scrambled257.jpg",  "static/images/scrambled531.jpg",  "static/images/scrambled84.jpg",  "static/images/scrambled900.jpg",  "static/images/scrambled914.jpg",  "static/images/scrambled928.jpg",  "static/images/scrambled727.jpg",  "static/images/scrambled733.jpg",  "static/images/scrambled874.jpg",  "static/images/scrambled860.jpg",  "static/images/scrambled690.jpg",  "static/images/scrambled848.jpg",  "static/images/scrambled684.jpg",  "static/images/scrambled109.jpg",  "static/images/scrambled135.jpg",  "static/images/scrambled653.jpg",  "static/images/scrambled647.jpg",  "static/images/scrambled121.jpg"]	
// var randomimageset3 = ["static/images/scrambled1133.jpg",  "static/images/scrambled1127.jpg",  "static/images/scrambled492.jpg",  "static/images/scrambled486.jpg",  "static/images/scrambled479.jpg",  "static/images/scrambled451.jpg",  "static/images/scrambled337.jpg",  "static/images/scrambled323.jpg",  "static/images/scrambled445.jpg",  "static/images/scrambled322.jpg",  "static/images/scrambled444.jpg",  "static/images/scrambled450.jpg",  "static/images/scrambled336.jpg",  "static/images/scrambled478.jpg",  "static/images/scrambled487.jpg",  "static/images/scrambled493.jpg",  "static/images/scrambled1126.jpg",  "static/images/scrambled1132.jpg",  "static/images/scrambled646.jpg",  "static/images/scrambled120.jpg",  "static/images/scrambled134.jpg",  "static/images/scrambled652.jpg",  "static/images/scrambled108.jpg",  "static/images/scrambled685.jpg",  "static/images/scrambled849.jpg",  "static/images/scrambled691.jpg",  "static/images/scrambled861.jpg",  "static/images/scrambled875.jpg",  "static/images/scrambled732.jpg",  "static/images/scrambled726.jpg",  "static/images/scrambled929.jpg",  "static/images/scrambled915.jpg",  "static/images/scrambled901.jpg",  "static/images/scrambled256.jpg",  "static/images/scrambled85.jpg",  "static/images/scrambled530.jpg",  "static/images/scrambled91.jpg",  "static/images/scrambled524.jpg",  "static/images/scrambled242.jpg",  "static/images/scrambled1091.jpg",  "static/images/scrambled518.jpg",  "static/images/scrambled1085.jpg",  "static/images/scrambled295.jpg",  "static/images/scrambled46.jpg",  "static/images/scrambled52.jpg",  "static/images/scrambled281.jpg",  "static/images/scrambled1052.jpg",  "static/images/scrambled1046.jpg",  "static/images/scrambled77.jpg",  "static/images/scrambled63.jpg",  "static/images/scrambled298.jpg",  "static/images/scrambled1063.jpg",  "static/images/scrambled1077.jpg",  "static/images/scrambled267.jpg",  "static/images/scrambled501.jpg",  "static/images/scrambled1088.jpg",  "static/images/scrambled515.jpg",  "static/images/scrambled273.jpg",  "static/images/scrambled88.jpg",  "static/images/scrambled529.jpg",  "static/images/scrambled918.jpg",  "static/images/scrambled924.jpg",  "static/images/scrambled930.jpg",  "static/images/scrambled703.jpg",  "static/images/scrambled717.jpg",  "static/images/scrambled6.jpg",  "static/images/scrambled878.jpg",  "static/images/scrambled688.jpg",  "static/images/scrambled850.jpg",  "static/images/scrambled844.jpg",  "static/images/scrambled677.jpg",  "static/images/scrambled111.jpg",  "static/images/scrambled105.jpg",  "static/images/scrambled663.jpg",  "static/images/scrambled893.jpg",  "static/images/scrambled139.jpg",  "static/images/scrambled887.jpg",  "static/images/scrambled1117.jpg",  "static/images/scrambled1103.jpg",  "static/images/scrambled313.jpg",  "static/images/scrambled475.jpg",  "static/images/scrambled461.jpg",  "static/images/scrambled307.jpg",  "static/images/scrambled449.jpg",  "static/images/scrambled448.jpg",  "static/images/scrambled460.jpg",  "static/images/scrambled306.jpg",  "static/images/scrambled312.jpg",  "static/images/scrambled474.jpg",  "static/images/scrambled1102.jpg",  "static/images/scrambled1116.jpg",  "static/images/scrambled138.jpg",  "static/images/scrambled886.jpg",  "static/images/scrambled892.jpg",  "static/images/scrambled104.jpg",  "static/images/scrambled662.jpg",  "static/images/scrambled676.jpg",  "static/images/scrambled110.jpg",  "static/images/scrambled845.jpg",  "static/images/scrambled851.jpg",  "static/images/scrambled689.jpg",  "static/images/scrambled879.jpg",  "static/images/scrambled7.jpg",  "static/images/scrambled716.jpg",  "static/images/scrambled702.jpg",  "static/images/scrambled931.jpg",  "static/images/scrambled925.jpg",  "static/images/scrambled919.jpg",  "static/images/scrambled528.jpg",  "static/images/scrambled89.jpg",  "static/images/scrambled514.jpg",  "static/images/scrambled1089.jpg",  "static/images/scrambled272.jpg",  "static/images/scrambled266.jpg",  "static/images/scrambled500.jpg",  "static/images/scrambled1076.jpg",  "static/images/scrambled299.jpg",  "static/images/scrambled1062.jpg",  "static/images/scrambled62.jpg",  "static/images/scrambled76.jpg",  "static/images/scrambled60.jpg",  "static/images/scrambled1048.jpg",  "static/images/scrambled74.jpg",  "static/images/scrambled1074.jpg",  "static/images/scrambled48.jpg",  "static/images/scrambled1060.jpg",  "static/images/scrambled270.jpg",  "static/images/scrambled516.jpg",  "static/images/scrambled502.jpg",  "static/images/scrambled264.jpg",  "static/images/scrambled258.jpg",  "static/images/scrambled933.jpg",  "static/images/scrambled927.jpg",  "static/images/scrambled714.jpg",  "static/images/scrambled5.jpg",  "static/images/scrambled700.jpg",  "static/images/scrambled728.jpg",  "static/images/scrambled847.jpg",  "static/images/scrambled853.jpg",  "static/images/scrambled660.jpg",  "static/images/scrambled106.jpg",  "static/images/scrambled112.jpg",  "static/images/scrambled674.jpg",  "static/images/scrambled884.jpg",  "static/images/scrambled890.jpg",  "static/images/scrambled648.jpg",  "static/images/scrambled1128.jpg",  "static/images/scrambled1100.jpg",  "static/images/scrambled1114.jpg",  "static/images/scrambled489.jpg",  "static/images/scrambled304.jpg",  "static/images/scrambled462.jpg",  "static/images/scrambled476.jpg",  "static/images/scrambled310.jpg",  "static/images/scrambled338.jpg",  "static/images/scrambled339.jpg",  "static/images/scrambled477.jpg",  "static/images/scrambled311.jpg",  "static/images/scrambled305.jpg",  "static/images/scrambled463.jpg",  "static/images/scrambled488.jpg",  "static/images/scrambled1115.jpg",  "static/images/scrambled1101.jpg",  "static/images/scrambled1129.jpg",  "static/images/scrambled649.jpg",  "static/images/scrambled891.jpg",  "static/images/scrambled885.jpg",  "static/images/scrambled113.jpg",  "static/images/scrambled675.jpg",  "static/images/scrambled661.jpg",  "static/images/scrambled107.jpg",  "static/images/scrambled852.jpg",  "static/images/scrambled846.jpg",  "static/images/scrambled729.jpg",  "static/images/scrambled701.jpg",  "static/images/scrambled4.jpg",  "static/images/scrambled715.jpg",  "static/images/scrambled926.jpg",  "static/images/scrambled932.jpg",  "static/images/scrambled259.jpg",  "static/images/scrambled503.jpg",  "static/images/scrambled265.jpg",  "static/images/scrambled271.jpg",  "static/images/scrambled517.jpg",  "static/images/scrambled1061.jpg",  "static/images/scrambled49.jpg",  "static/images/scrambled1075.jpg",  "static/images/scrambled75.jpg",  "static/images/scrambled1049.jpg",  "static/images/scrambled61.jpg",  "static/images/scrambled59.jpg",  "static/images/scrambled1071.jpg",  "static/images/scrambled1065.jpg",  "static/images/scrambled65.jpg",  "static/images/scrambled71.jpg",  "static/images/scrambled1059.jpg",  "static/images/scrambled249.jpg",  "static/images/scrambled513.jpg",  "static/images/scrambled275.jpg",  "static/images/scrambled261.jpg",  "static/images/scrambled507.jpg",  "static/images/scrambled936.jpg",  "static/images/scrambled922.jpg",  "static/images/scrambled739.jpg",  "static/images/scrambled711.jpg",  "static/images/scrambled705.jpg",  "static/images/scrambled842.jpg",  "static/images/scrambled856.jpg",  "static/images/scrambled881.jpg",  "static/images/scrambled659.jpg",  "static/images/scrambled895.jpg",  "static/images/scrambled103.jpg",  "static/images/scrambled665.jpg",  "static/images/scrambled671.jpg",  "static/images/scrambled117.jpg",  "static/images/scrambled1105.jpg",  "static/images/scrambled498.jpg",  "static/images/scrambled1111.jpg",  "static/images/scrambled1139.jpg",  "static/images/scrambled329.jpg",  "static/images/scrambled467.jpg",  "static/images/scrambled301.jpg",  "static/images/scrambled315.jpg",  "static/images/scrambled473.jpg",  "static/images/scrambled314.jpg",  "static/images/scrambled472.jpg",  "static/images/scrambled466.jpg",  "static/images/scrambled300.jpg",  "static/images/scrambled328.jpg",  "static/images/scrambled1138.jpg",  "static/images/scrambled1110.jpg",  "static/images/scrambled499.jpg",  "static/images/scrambled1104.jpg",  "static/images/scrambled670.jpg",  "static/images/scrambled116.jpg",  "static/images/scrambled102.jpg",  "static/images/scrambled664.jpg",  "static/images/scrambled894.jpg",  "static/images/scrambled658.jpg",  "static/images/scrambled880.jpg",  "static/images/scrambled857.jpg",  "static/images/scrambled843.jpg",  "static/images/scrambled704.jpg",  "static/images/scrambled1.jpg",  "static/images/scrambled710.jpg",  "static/images/scrambled738.jpg",  "static/images/scrambled923.jpg",  "static/images/scrambled937.jpg",  "static/images/scrambled260.jpg",  "static/images/scrambled506.jpg",  "static/images/scrambled512.jpg",  "static/images/scrambled274.jpg",  "static/images/scrambled248.jpg",  "static/images/scrambled1058.jpg",  "static/images/scrambled70.jpg",  "static/images/scrambled64.jpg",  "static/images/scrambled1064.jpg",  "static/images/scrambled1070.jpg",  "static/images/scrambled58.jpg",  "static/images/scrambled1066.jpg",  "static/images/scrambled289.jpg",  "static/images/scrambled1072.jpg",  "static/images/scrambled72.jpg",  "static/images/scrambled66.jpg",  "static/images/scrambled538.jpg",  "static/images/scrambled99.jpg",  "static/images/scrambled1099.jpg",  "static/images/scrambled504.jpg",  "static/images/scrambled262.jpg",  "static/images/scrambled276.jpg",  "static/images/scrambled510.jpg",  "static/images/scrambled921.jpg",  "static/images/scrambled935.jpg",  "static/images/scrambled909.jpg",  "static/images/scrambled706.jpg",  "static/images/scrambled712.jpg",  "static/images/scrambled3.jpg",  "static/images/scrambled855.jpg",  "static/images/scrambled699.jpg",  "static/images/scrambled841.jpg",  "static/images/scrambled869.jpg",  "static/images/scrambled128.jpg",  "static/images/scrambled896.jpg",  "static/images/scrambled882.jpg",  "static/images/scrambled114.jpg",  "static/images/scrambled672.jpg",  "static/images/scrambled666.jpg",  "static/images/scrambled100.jpg",  "static/images/scrambled1112.jpg",  "static/images/scrambled1106.jpg",  "static/images/scrambled458.jpg",  "static/images/scrambled470.jpg",  "static/images/scrambled316.jpg",  "static/images/scrambled302.jpg",  "static/images/scrambled464.jpg",  "static/images/scrambled303.jpg",  "static/images/scrambled465.jpg",  "static/images/scrambled471.jpg",  "static/images/scrambled317.jpg",  "static/images/scrambled459.jpg"]	
// var randomimageset4 = ["static/images/scrambled1107.jpg",  "static/images/scrambled1113.jpg",  "static/images/scrambled667.jpg",  "static/images/scrambled101.jpg",  "static/images/scrambled115.jpg",  "static/images/scrambled673.jpg",  "static/images/scrambled883.jpg",  "static/images/scrambled129.jpg",  "static/images/scrambled897.jpg",  "static/images/scrambled868.jpg",  "static/images/scrambled840.jpg",  "static/images/scrambled698.jpg",  "static/images/scrambled854.jpg",  "static/images/scrambled2.jpg",  "static/images/scrambled713.jpg",  "static/images/scrambled707.jpg",  "static/images/scrambled908.jpg",  "static/images/scrambled934.jpg",  "static/images/scrambled920.jpg",  "static/images/scrambled277.jpg",  "static/images/scrambled511.jpg",  "static/images/scrambled505.jpg",  "static/images/scrambled1098.jpg",  "static/images/scrambled263.jpg",  "static/images/scrambled98.jpg",  "static/images/scrambled539.jpg",  "static/images/scrambled67.jpg",  "static/images/scrambled73.jpg",  "static/images/scrambled288.jpg",  "static/images/scrambled1073.jpg",  "static/images/scrambled1067.jpg",  "static/images/scrambled14.jpg",  "static/images/scrambled1028.jpg",  "static/images/scrambled28.jpg",  "static/images/scrambled1000.jpg",  "static/images/scrambled589.jpg",  "static/images/scrambled1014.jpg",  "static/images/scrambled562.jpg",  "static/images/scrambled204.jpg",  "static/images/scrambled210.jpg",  "static/images/scrambled576.jpg",  "static/images/scrambled238.jpg",  "static/images/scrambled1202.jpg",  "static/images/scrambled947.jpg",  "static/images/scrambled953.jpg",  "static/images/scrambled760.jpg",  "static/images/scrambled774.jpg",  "static/images/scrambled984.jpg",  "static/images/scrambled748.jpg",  "static/images/scrambled990.jpg",  "static/images/scrambled833.jpg",  "static/images/scrambled827.jpg",  "static/images/scrambled199.jpg",  "static/images/scrambled172.jpg",  "static/images/scrambled614.jpg",  "static/images/scrambled600.jpg",  "static/images/scrambled166.jpg",  "static/images/scrambled628.jpg",  "static/images/scrambled1148.jpg",  "static/images/scrambled1174.jpg",  "static/images/scrambled1160.jpg",  "static/images/scrambled416.jpg",  "static/images/scrambled370.jpg",  "static/images/scrambled364.jpg",  "static/images/scrambled402.jpg",  "static/images/scrambled358.jpg",  "static/images/scrambled359.jpg",  "static/images/scrambled365.jpg",  "static/images/scrambled403.jpg",  "static/images/scrambled417.jpg",  "static/images/scrambled371.jpg",  "static/images/scrambled1161.jpg",  "static/images/scrambled1175.jpg",  "static/images/scrambled1149.jpg",  "static/images/scrambled629.jpg",  "static/images/scrambled601.jpg",  "static/images/scrambled167.jpg",  "static/images/scrambled173.jpg",  "static/images/scrambled615.jpg",  "static/images/scrambled826.jpg",  "static/images/scrambled198.jpg",  "static/images/scrambled832.jpg",  "static/images/scrambled991.jpg",  "static/images/scrambled749.jpg",  "static/images/scrambled985.jpg",  "static/images/scrambled775.jpg",  "static/images/scrambled761.jpg",  "static/images/scrambled952.jpg",  "static/images/scrambled946.jpg",  "static/images/scrambled1203.jpg",  "static/images/scrambled239.jpg",  "static/images/scrambled211.jpg",  "static/images/scrambled577.jpg",  "static/images/scrambled563.jpg",  "static/images/scrambled205.jpg",  "static/images/scrambled1015.jpg",  "static/images/scrambled588.jpg",  "static/images/scrambled1001.jpg",  "static/images/scrambled29.jpg",  "static/images/scrambled1029.jpg",  "static/images/scrambled15.jpg",  "static/images/scrambled17.jpg",  "static/images/scrambled1017.jpg",  "static/images/scrambled1003.jpg",  "static/images/scrambled575.jpg",  "static/images/scrambled213.jpg",  "static/images/scrambled207.jpg",  "static/images/scrambled561.jpg",  "static/images/scrambled549.jpg",  "static/images/scrambled978.jpg",  "static/images/scrambled950.jpg",  "static/images/scrambled788.jpg",  "static/images/scrambled1201.jpg",  "static/images/scrambled944.jpg",  "static/images/scrambled777.jpg",  "static/images/scrambled763.jpg",  "static/images/scrambled993.jpg",  "static/images/scrambled987.jpg",  "static/images/scrambled818.jpg",  "static/images/scrambled824.jpg",  "static/images/scrambled830.jpg",  "static/images/scrambled165.jpg",  "static/images/scrambled603.jpg",  "static/images/scrambled617.jpg",  "static/images/scrambled171.jpg",  "static/images/scrambled159.jpg",  "static/images/scrambled1163.jpg",  "static/images/scrambled398.jpg",  "static/images/scrambled1177.jpg",  "static/images/scrambled401.jpg",  "static/images/scrambled367.jpg",  "static/images/scrambled373.jpg",  "static/images/scrambled415.jpg",  "static/images/scrambled1188.jpg",  "static/images/scrambled429.jpg",  "static/images/scrambled428.jpg",  "static/images/scrambled372.jpg",  "static/images/scrambled1189.jpg",  "static/images/scrambled414.jpg",  "static/images/scrambled400.jpg",  "static/images/scrambled366.jpg",  "static/images/scrambled1176.jpg",  "static/images/scrambled1162.jpg",  "static/images/scrambled399.jpg",  "static/images/scrambled158.jpg",  "static/images/scrambled616.jpg",  "static/images/scrambled170.jpg",  "static/images/scrambled164.jpg",  "static/images/scrambled602.jpg",  "static/images/scrambled831.jpg",  "static/images/scrambled825.jpg",  "static/images/scrambled819.jpg",  "static/images/scrambled986.jpg",  "static/images/scrambled992.jpg",  "static/images/scrambled762.jpg",  "static/images/scrambled776.jpg",  "static/images/scrambled945.jpg",  "static/images/scrambled1200.jpg",  "static/images/scrambled789.jpg",  "static/images/scrambled951.jpg",  "static/images/scrambled979.jpg",  "static/images/scrambled548.jpg",  "static/images/scrambled206.jpg",  "static/images/scrambled560.jpg",  "static/images/scrambled574.jpg",  "static/images/scrambled212.jpg",  "static/images/scrambled1002.jpg",  "static/images/scrambled1016.jpg",  "static/images/scrambled16.jpg",  "static/images/scrambled1012.jpg",  "static/images/scrambled1006.jpg",  "static/images/scrambled12.jpg",  "static/images/scrambled558.jpg",  "static/images/scrambled216.jpg",  "static/images/scrambled570.jpg",  "static/images/scrambled564.jpg",  "static/images/scrambled202.jpg",  "static/images/scrambled955.jpg",  "static/images/scrambled1204.jpg",  "static/images/scrambled941.jpg",  "static/images/scrambled799.jpg",  "static/images/scrambled969.jpg",  "static/images/scrambled996.jpg",  "static/images/scrambled982.jpg",  "static/images/scrambled772.jpg",  "static/images/scrambled766.jpg",  "static/images/scrambled821.jpg",  "static/images/scrambled835.jpg",  "static/images/scrambled809.jpg",  "static/images/scrambled148.jpg",  "static/images/scrambled606.jpg",  "static/images/scrambled160.jpg",  "static/images/scrambled174.jpg",  "static/images/scrambled612.jpg",  "static/images/scrambled1166.jpg",  "static/images/scrambled1172.jpg",  "static/images/scrambled389.jpg",  "static/images/scrambled438.jpg",  "static/images/scrambled362.jpg",  "static/images/scrambled404.jpg",  "static/images/scrambled1199.jpg",  "static/images/scrambled410.jpg",  "static/images/scrambled376.jpg",  "static/images/scrambled411.jpg",  "static/images/scrambled377.jpg",  "static/images/scrambled363.jpg",  "static/images/scrambled1198.jpg",  "static/images/scrambled405.jpg",  "static/images/scrambled439.jpg",  "static/images/scrambled1173.jpg",  "static/images/scrambled388.jpg",  "static/images/scrambled1167.jpg",  "static/images/scrambled175.jpg",  "static/images/scrambled613.jpg",  "static/images/scrambled607.jpg",  "static/images/scrambled161.jpg",  "static/images/scrambled149.jpg",  "static/images/scrambled808.jpg",  "static/images/scrambled834.jpg",  "static/images/scrambled820.jpg",  "static/images/scrambled767.jpg",  "static/images/scrambled773.jpg",  "static/images/scrambled983.jpg",  "static/images/scrambled997.jpg",  "static/images/scrambled968.jpg",  "static/images/scrambled798.jpg",  "static/images/scrambled940.jpg",  "static/images/scrambled1205.jpg",  "static/images/scrambled954.jpg",  "static/images/scrambled565.jpg",  "static/images/scrambled203.jpg",  "static/images/scrambled217.jpg",  "static/images/scrambled571.jpg",  "static/images/scrambled559.jpg",  "static/images/scrambled13.jpg",  "static/images/scrambled1007.jpg",  "static/images/scrambled1013.jpg",  "static/images/scrambled598.jpg",  "static/images/scrambled1005.jpg",  "static/images/scrambled39.jpg",  "static/images/scrambled1011.jpg",  "static/images/scrambled11.jpg",  "static/images/scrambled1039.jpg",  "static/images/scrambled229.jpg",  "static/images/scrambled201.jpg",  "static/images/scrambled567.jpg",  "static/images/scrambled573.jpg",  "static/images/scrambled215.jpg",  "static/images/scrambled942.jpg",  "static/images/scrambled956.jpg",  "static/images/scrambled759.jpg",  "static/images/scrambled981.jpg",  "static/images/scrambled995.jpg",  "static/images/scrambled765.jpg",  "static/images/scrambled771.jpg",  "static/images/scrambled836.jpg",  "static/images/scrambled188.jpg",  "static/images/scrambled822.jpg",  "static/images/scrambled639.jpg",  "static/images/scrambled611.jpg",  "static/images/scrambled177.jpg",  "static/images/scrambled163.jpg",  "static/images/scrambled605.jpg",  "static/images/scrambled1171.jpg",  "static/images/scrambled1165.jpg",  "static/images/scrambled1159.jpg",  "static/images/scrambled349.jpg",  "static/images/scrambled375.jpg",  "static/images/scrambled413.jpg",  "static/images/scrambled407.jpg",  "static/images/scrambled361.jpg",  "static/images/scrambled406.jpg",  "static/images/scrambled360.jpg",  "static/images/scrambled374.jpg",  "static/images/scrambled412.jpg",  "static/images/scrambled348.jpg",  "static/images/scrambled1158.jpg",  "static/images/scrambled1164.jpg",  "static/images/scrambled1170.jpg",  "static/images/scrambled162.jpg",  "static/images/scrambled604.jpg",  "static/images/scrambled610.jpg",  "static/images/scrambled176.jpg",  "static/images/scrambled638.jpg",  "static/images/scrambled823.jpg",  "static/images/scrambled837.jpg",  "static/images/scrambled189.jpg",  "static/images/scrambled770.jpg",  "static/images/scrambled764.jpg",  "static/images/scrambled994.jpg",  "static/images/scrambled980.jpg",  "static/images/scrambled758.jpg",  "static/images/scrambled957.jpg",  "static/images/scrambled943.jpg",  "static/images/scrambled572.jpg",  "static/images/scrambled214.jpg",  "static/images/scrambled200.jpg",  "static/images/scrambled566.jpg",  "static/images/scrambled228.jpg",  "static/images/scrambled1038.jpg",  "static/images/scrambled10.jpg",  "static/images/scrambled1010.jpg",  "static/images/scrambled38.jpg",  "static/images/scrambled1004.jpg",  "static/images/scrambled599.jpg"]		

psiTurk.preloadImages(randomimageset);
// psiTurk.preloadImages(randomimageset2);
// psiTurk.preloadImages(randomimageset3);
// psiTurk.preloadImages(randomimageset4);

var stimages = ["static/stimages/upperBEIK.png", "static/stimages/lowersand.png", "static/stimages/upperDIVE.png", "static/stimages/loweritch.png", "static/stimages/lowerplun.png", "static/stimages/upperPINT.png", "static/stimages/lowerneck.png", "static/stimages/lowersoar.png", "static/stimages/upperSWAR.png", "static/stimages/lowersoap.png", "static/stimages/upperSLAP.png", "static/stimages/upperNAIL.png", "static/stimages/upperLIPT.png", "static/stimages/upperPROD.png", "static/stimages/upperWACT.png", "static/stimages/upperFOTH.png", "static/stimages/upperHACK.png", "static/stimages/lowerfork.png", "static/stimages/upperSWAT.png", "static/stimages/upperKUCH.png", "static/stimages/lowersali.png", "static/stimages/loweryarn.png", "static/stimages/lowertaco.png", "static/stimages/lowerpunt.png", "static/stimages/lowerrake.png", "static/stimages/upperYAVE.png", "static/stimages/upperHING.png", "static/stimages/lowermank.png", "static/stimages/upperSOAR.png", "static/stimages/upperNECK.png", "static/stimages/lowerpint.png", "static/stimages/upperRIPT.png", "static/stimages/upperSONK.png", "static/stimages/upperSAND.png", "static/stimages/lowerhild.png", "static/stimages/lowerbeik.png", "static/stimages/upperPLUN.png", "static/stimages/lowerdive.png", "static/stimages/upperITCH.png", "static/stimages/lowerprod.png", "static/stimages/upperSAOB.png", "static/stimages/upperSOAG.png", "static/stimages/upperSOAP.png", "static/stimages/lowerslap.png", "static/stimages/lowernail.png", "static/stimages/lowernirp.png", "static/stimages/lowerswat.png", "static/stimages/upperFORK.png", "static/stimages/lowerhack.png", "static/stimages/upperTACO.png", "static/stimages/upperYARN.png", "static/stimages/upperSALI.png", "static/stimages/lowerweck.png", "static/stimages/upperRAKE.png", "static/stimages/upperPUNT.png", "static/stimages/upperWISK.png", "static/stimages/upperHAIR.png", "static/stimages/upperPLUG.png", "static/stimages/lowerfoth.png", "static/stimages/upperPLOK.png", "static/stimages/upperNEWS.png", "static/stimages/lowernask.png", "static/stimages/upperSING.png", "static/stimages/upperWIPE.png", "static/stimages/lowerdact.png", "static/stimages/lowerknob.png", "static/stimages/lowerlift.png", "static/stimages/lowertais.png", "static/stimages/lowerdeli.png", "static/stimages/lowerpath.png", "static/stimages/loweryint.png", "static/stimages/lowermilk.png", "static/stimages/upperPERO.png", "static/stimages/lowerpawr.png", "static/stimages/loweryank.png", "static/stimages/lowerbait.png", "static/stimages/lowerhair.png", "static/stimages/upperSTID.png", "static/stimages/lowerplug.png", "static/stimages/lowerwisk.png", "static/stimages/upperNASK.png", "static/stimages/upperWECK.png", "static/stimages/lowersing.png", "static/stimages/lowerwipe.png", "static/stimages/upperNIRP.png", "static/stimages/lowernews.png", "static/stimages/upperHILD.png", "static/stimages/upperLIFT.png", "static/stimages/upperDELI.png", "static/stimages/upperTAIS.png", "static/stimages/upperSAFT.png", "static/stimages/upperKNOB.png", "static/stimages/upperPRAT.png", "static/stimages/upperDACT.png", "static/stimages/lowersoag.png", "static/stimages/upperBAIT.png", "static/stimages/upperYANK.png", "static/stimages/upperPAWR.png", "static/stimages/lowerpero.png", "static/stimages/upperMILK.png", "static/stimages/upperPATH.png", "static/stimages/upperNIKT.png", "static/stimages/upperYINT.png", "static/stimages/upperDANP.png", "static/stimages/upperMANK.png", "static/stimages/lowerwact.png", "static/stimages/loweryave.png", "static/stimages/lowerswar.png", "static/stimages/lowerdanp.png", "static/stimages/lowersonk.png", "static/stimages/lowersaob.png", "static/stimages/lowerhing.png", "static/stimages/lowerkuch.png", "static/stimages/lowerstid.png", "static/stimages/lowernikt.png", "static/stimages/lowerprat.png", "static/stimages/lowerplok.png", "static/stimages/lowerlipt.png", "static/stimages/lowersaft.png", "static/stimages/lowerript.png"]

psiTurk.preloadImages(stimages);

// *******************
// * Practice *
// *******************



var Practice1 = function() {

	var trialstart,
	    listening = true;

	trial_count = 0;

	//readtextfile function uses XML request to pull .txt stimuli files and create js matrix

	function readTextFile(file){
		var rawFile = new XMLHttpRequest();
		rawFile.open("GET", file, false);
		rawFile.onreadystatechange = function ()
		{
			if(rawFile.readyState === 4)
			{
				if(rawFile.status === 200 || rawFile.status == 0)
				{
					allText = rawFile.responseText.split("\n");
					//allText = rawFile.responseText.toString().split("\n");
					var arr1 = [];
					
					allText.map(function(item){
					  var tabs = item.split('\t');
					  arr1.push(tabs[0]);
					  arr1.push(tabs[1]);
					  arr1.push(tabs[2]);
					  arr1.push(tabs[3]);
					  arr1.push(tabs[4]);
					  arr1.push(tabs[5]);
					  arr1.push(tabs[6]);
					  arr1.push(tabs[7]);
					  arr1.push(tabs[8]);
					  arr1.push(tabs[9]);
					  arr1.push(tabs[10]);
					});
					//alert(arr1);
					input = [];
					var locs = [];
					var tab = [];
					for (var i = 0; i < 240; i++){
						for (var j = 0; j<11; j++){
							tab[j] = arr1[11*i+j];
						};
						input[i] = [tab[0],tab[1],tab[2],tab[3],tab[4],tab[5],tab[6],tab[7],tab[8],tab[9],tab[10]];
						
					};
					var first = [];
					stimuli = [];
					for (var h = 0; h < 240; h++){
						first = input[h];
						stimuli[h] = first;
					};		
				}
			}
		}
		rawFile.send(null);
		return stimuli;
	};

	// function readTextFile0(file){
	// 	var rawFile = new XMLHttpRequest();
	// 	rawFile.open("GET", file, false);
	// 	rawFile.onreadystatechange = function ()
	// 	{
	// 		if(rawFile.readyState === 4)
	// 		{
	// 			if(rawFile.status === 200 || rawFile.status == 0)
	// 			{
	// 				allText = rawFile.responseText.split("\n");
	// 				//allText = rawFile.responseText.toString().split("\n");
	// 				var arr1 = [];
					
	// 				allText.map(function(item){
	// 				  var tabs = item.split('\t');
	// 				  arr1.push(tabs[0]);
	// 				});
	// 				//alert(arr1);
	// 				input = [];
	// 				var locs = [];
	// 				var tab = [];
	// 				for (var i = 0; i < 240; i++){
	// 					for (var j = 0; j<1; j++){
	// 						tab[j] = arr1[1*i+j];
	// 					};
	// 					input[i] = [tab[0]];
						
	// 				};
	// 				var first = [];
	// 				stimuli = [];
	// 				for (var h = 0; h < 240; h++){
	// 					first = input[h];
	// 					stimuli[h] =first;
	// 				};		
	// 			}
	// 		}
	// 	}
	// 	rawFile.send(null);
	// 	return stimuli;
	// };

	order = [1,1,2,2];
	allwords_order = [];

	//readarray uses readtxtfile function to import .txt stimuli file with allwordsorder (representing randomized target position) .concat at end

	function readarray(){
	    for (var i = 0; i < 30; i++){ 
	        rand_order = _.shuffle(order); //shuffle the order
	        for (var j = 0; j <4; j++){ 
	            allwords_order.push(rand_order[j]);  
	        }
	    } 

	    stimuli = readTextFile("/static/stim/practice-stim-list.txt");	

	    var combined_cond = [];
	    
	    for(var i=0;i<30;i++) {
		  combined_cond[i] = stimuli[i].concat(allwords_order[i]);
		}
	    return combined_cond;

	};

	stims = readarray();
	stims = _.shuffle(stims);
	pracstims = stims

	//shuffles the order of the stimuli

	var next = function() {
		if (pracstims.length===29) { //total set is 30 (==14 for n=16)
			var s = Snap('#svgMain');
			s.clear();
			clearTimeout(handle7);
			finish2();
		}

		//next proceeds through the stimuli until there are none left (len=0)

		else {

			var s = Snap('#svgMain');
			s.clear(); //clears the screen
			stim = pracstims.shift(); //moves onto the next stim
			clearTimeout();
			show_fixation(); //calls the show_fixation function
			handle2 = setTimeout(function(){
				show_prime(stim[7]);},500); //fixation on screen until 1000ms, then show_word
			handle2 = setTimeout(function(){
				show_mask2();},1000); //fixation on screen until 1000ms, then show_word
			handle2 = setTimeout(function(){
				show_root(stim[0]);},1250); //fixation on screen until 1000ms, then show_word
			handle3 = setTimeout(function(){
				show_mask();},1325); //show_word on screen for 60ms, then show_mask until response
			listening = true; 
			
		};
	};


	var response_handler = function(e, trialonset) {
		if (!listening) return;

		var keyCode = e.keyCode,
			response;

		switch (keyCode) {
			case 77:
				// "M"
				response="1";
				break;
			case 90:
				// "Z"
				response="2";
				break;
			default:
				response = String.fromCharCode();
				break;

			//here is where responses are encoded	

		}
		if (response.length>0) {
			var hit = response == stim[1]; 
			var rt = new Date().getTime() - trialstart; //this records the rt
			if (response == stim[11]) {
				var accuracy = 1;
			}
			else { 
				var accuracy = 0
			} 

			psiTurk.recordTrialData({'phase':"PRAC",
                                     'rootword':stim[0],
                                     'targetletter':stim[5],
                                     'trial#':trial_count,
                                     'rootword_group': stim[6],
                                     'prime': stim[7],
                                     'prime_group' : stim[8],
                                     'staircase_group': stim[9],
                                     //'block': stim[10],
                                     'targetPosition': stim[11],
                                     'response':response,
                                     'accuracy':accuracy,
                                     'rt':rt,
                                 	 // 'n/n-threshold':A1_diff,
                                 	 // 'n/v-threshold':B1_diff,                                 	 
                                 	 // 'v/v-threshold':C1_diff,
                                 	 // 'v/n-threshold':D1_diff,
                                 	 // 'pn/pn-threshold':E1_diff,                                 	 
                                 	 // 'pn/pv-threshold':F1_diff,
                                 	 // 'pv/pv-threshold':G1_diff,
                                 	 // 'pv/pn-threshold':H1_diff,                                 	 
                                 	 // 'newdiff':newdiff,
                                 	 // 'newdiff-1250':newdiff - 1250,
                                 	 // 'reference':reference,
                                 	 'date/time':now.toUTCString()}
                                );

			if (response == stim[11]) {
				PracticeITIcorrect();
			}
			else { 
				PracticeITIincorrect()
			} 

		};

		//recordtrialdata function represents what is saved to csv
	};

	var finish2 = function() {
		var s = Snap('#svgMain');
		var after_prac = s.image("/static/images/afterprac.png", 60,105);
		$("body").unbind("keydown", response_handler); // bind keys
		document.addEventListener("keydown",finishprac, false);
	};

	var finishprac = function(e){
		if (e.keyCode == 32) {
			document.removeEventListener("keydown",finishprac,false);
			currentview = new WSEExperiment();
			}
		};

	//finish and finishprac send us from practice to the main experiment

	var show_prime = function(text, color) {
		var s = Snap('#svgMain');
		$("body").unbind("keydown", response_handler); 
		s.clear();
		
	//the 'show_word' function presents the stim[0] on the screen, using the snap library for size and font details
	
		var presentation = s.text(540,400,text).attr({'fill' : "black",  'stroke': "black", 'stroke-width': 5,'font-size':75});

	};

	var show_root = function(text, color) {
		var s = Snap('#svgMain');
		$("body").unbind("keydown", response_handler); 
		s.clear();
		
	//the 'show_word' function presents the stim[0] on the screen, using the snap library for size and font details
	
		var presentation = s.text(540,400,text).attr({'fill' : "black",  'stroke': "black", 'stroke-width': 5,'font-size':75});

	};

	var show_mask = function(text, color) {
		var s = Snap('#svgMain');
		$("body").bind("keydown", response_handler); // bind keys
		s.clear();
		
		if (stim[11] == '2') {
			var q2 = randomString2()
			var q4 = randomString()
		} else {
			var q2 = randomString()
			var q4 = randomString2()
		}

		if (stim[5] == 1) {
			var question = s.text(440,300,q2).attr({'fill' : "black",  'stroke': "black", 'stroke-width': 5,'font-size':75});
					   s.text(440,500,q4).attr({'fill' : "black",  'stroke': "black", 'stroke-width': 5,'font-size':75});
			}
		else if (stim[5] == 2) {
			var question = s.text(505,300,q2).attr({'fill' : "black",  'stroke': "black", 'stroke-width': 5,'font-size':75});
					   s.text(505,500,q4).attr({'fill' : "black",  'stroke': "black", 'stroke-width': 5,'font-size':75});
			}
		else if (stim[5] == 3) {
			var question = s.text(565,300,q2).attr({'fill' : "black",  'stroke': "black", 'stroke-width': 5,'font-size':75});
					   s.text(565,500,q4).attr({'fill' : "black",  'stroke': "black", 'stroke-width': 5,'font-size':75});
			}
		else {
			var question = s.text(632,300,q2).attr({'fill' : "black",  'stroke': "black", 'stroke-width': 5,'font-size':75});
					   s.text(632,500,q4).attr({'fill' : "black",  'stroke': "black", 'stroke-width': 5,'font-size':75});
			}
			
		//font and sizing for the mask and question from the snap library

		var scramble1 = s.image("/static/images/scrambled1a.jpg", 397, 320, 80, 110);
		var scramble2 = s.image("/static/images/scrambled2a.jpg", 460, 320, 80, 110);
		var scramble3 = s.image("/static/images/scrambled3a.jpg", 523, 320, 80, 110);
		var scramble4 = s.image("/static/images/scrambled4a.jpg", 585, 320, 80, 110);

		trialstart = new Date().getTime(); //records date and time at keypress

	};

	var show_mask2 = function(text, color) {
		var s = Snap('#svgMain');
		$("body").bind("keydown", response_handler); // bind keys
		s.clear();

		// var scramble1 = s.image("/static/images/scrambled5.jpg", 397, 320, 80, 110);
		// var scramble2 = s.image("/static/images/scrambled6.jpg", 460, 320, 80, 110);
		// var scramble3 = s.image("/static/images/scrambled7.jpg", 523, 320, 80, 110);
		// var scramble4 = s.image("/static/images/scrambled8.jpg", 585, 320, 80, 110);		

		var scramble5 = s.image("/static/images/scrambled1b.jpg", 397, 320, 80, 110);
		var scramble6 = s.image("/static/images/scrambled2b.jpg", 460, 320, 80, 110);
		var scramble7 = s.image("/static/images/scrambled3b.jpg", 523, 320, 80, 110);
		var scramble8 = s.image("/static/images/scrambled4b.jpg", 585, 320, 80, 110);

	};

 	var show_fixation = function(){
		document.body.style.cursor = 'none';
		var event = $(document).click(function(e) {
			e.stopPropagation();
			e.preventDefault();
			e.stopImmediatePropagation();
			return false;
		});
		var s = Snap('#svgMain');
		var horizontal = s.line(520,380,560,380);
		horizontal.attr({
		  id:"fix1",
		  stroke: "rgb(0, 0, 0)", 
		  strokeWidth:10
		});
		var vertical = s.line(540,360,540,400);
		vertical.attr({
		  id:"fix2",
		  stroke: "rgb(0, 0, 0)", 
		  strokeWidth:10

		});
	};

	var randomString = function() {
    var text = "";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXY"; //all possible incorrect stimuli drawn from presented letters
    for (var stimIndex = 1; stimIndex < 5; stimIndex++) {
    	possible = possible.replace(stim[stimIndex], "")
    }
    text += possible.charAt(Math.floor(Math.random() * possible.length));

	//this is the variable that calls a random letter from the alphabet that isn't contained within the word
  	
  	return text;

    };

    var randomString2 = function() {

	    var text = stim[5];

	    if (stim[5] == '1'){
	    	var text = stim[1]
	    }
	    if (stim[5] == '2'){
	    	var text = stim[2]
	    }    
	    if (stim[5] == '3'){
	    	var text = stim[3]
	    }    
	    if (stim[5] == '4'){
	    	var text = stim[4]
	    }
	  	return text;
    };

	var PracticeITIcorrect = function(){
		var s = Snap('#svgMain');
		s.clear();

			var text = "Correct"
			var presentation = s.text(540,400,text).attr({'fill' : "green",  'stroke': "green", 'stroke-width': 5,'font-size':55});

		trial_count++;
		handle7 = setTimeout(function(){
				ifbreak()},500);

	};

	var PracticeITIincorrect = function(){
		var s = Snap('#svgMain');
		s.clear();

			var text = "Incorrect"
			var presentation = s.text(540,400,text).attr({'fill' : "red",  'stroke': "red", 'stroke-width': 5,'font-size':55});

		trial_count++;
		handle7 = setTimeout(function(){
				ifbreak()},500);

	};

	var ifbreak = function(){
		if (trial_count % 120 == 0 && trial_count != 240){
			var s = Snap('#svgMain');
			s.clear();
			var blockbreak = s.image("/static/images/break.png", 280,300);
			document.addEventListener("keypress",nextblock,false);
		}
		else{
			next();
		};
	};

	var nextblock = function(e){
		if (e.keyCode == 32){
			document.removeEventListener("keypress",nextblock,false);
			clearTimeout(handle7);
			next();
		}
	};
	

	// psiturk functions: load the stage.html snippet into the body of the page, and register the response handler that is defined above to handle any key down events.

	psiTurk.showPage('stage.html');
	$("body").focus().keydown(response_handler); 

	// start the practice 

	next();
};

/********************
*  WSE Experiment   *
********************/


var WSEExperiment = function() {

	var trialstart, 
	    listening = true;

	trial_count = 0;
	function readTextFile2(file){
		var rawFile = new XMLHttpRequest();
		rawFile.open("GET", file, false);
		rawFile.onreadystatechange = function ()
		{
			if(rawFile.readyState === 4)
			{
				if(rawFile.status === 200 || rawFile.status == 0)
				{
					allText = rawFile.responseText.split("\n");
					//allText = rawFile.responseText.toString().split("\n");
					var arr1 = [];
					
					allText.map(function(item){
					  var tabs = item.split('\t');
					  arr1.push(tabs[0]);
					  arr1.push(tabs[1]);
					  arr1.push(tabs[2]);
					  arr1.push(tabs[3]);
					  arr1.push(tabs[4]);
					  arr1.push(tabs[5]);
					  arr1.push(tabs[6]);
					  arr1.push(tabs[7]);
					  arr1.push(tabs[8]);
					  arr1.push(tabs[9]);
					  arr1.push(tabs[10]);
					});

					input = [];
					var locs = [];
					var tab = [];
					for (var i = 0; i < 240; i++){
						for (var j = 0; j<11; j++){
							tab[j] = arr1[11*i+j];
						};
						input[i] = [tab[0],tab[1],tab[2],tab[3],tab[4],tab[5],tab[6],tab[7],tab[8],tab[9],tab[10]];
						
					};
					var first = [];
					stimuli = [];
					for (var h = 0; h < 240; h++){
						first = input[h];
						stimuli[h] =first;
					};		
				}
			}
		}
		rawFile.send(null);
		return stimuli;
	};
	order = [1,1,2,2];
	allwords_order = [];

	reference = [];

	//reference = readTextFile0("/static/js/reference.txt"); //reference is the text file to read in a specfic stimset
	
	reference = Math.floor(Math.random() * 14) +1;

	//in this case, the stim set (1 of 14) is being read in at random

	var possiblearray = ["A", "A", "A", "A", "A", "A", "A", "A", "A", "A", "A", "A", "A", "A", "B", "B", "C", "C", "D", "D", "D", "D", "E", "E", "E", "E", "E", "E", "F", "F", "G", "G", "H", "H", "H", "H", "I", "I", "I", "I", "I", "I", "I", "I", "I", "I", "I", "I", "K", "K", "K", "K", "K", "K", "K", "K", "L", "L", "L", "L", "L", "L", "M", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "O", "O", "O", "O", "O", "O", "P", "P", "P", "P", "P", "P", "P", "P", "R", "R", "R", "R", "R", "R", "S", "S", "S", "S", "S", "S", "S", "S", "T", "T", "T", "T", "T", "T", "T", "T", "U", "U", "V", "W", "W", "W", "W", "Y", "Y", "A", "A", "A", "A", "A", "A", "A", "A", "A", "A", "A", "A", "A", "A", "B", "B", "C", "C", "D", "D", "D", "D", "E", "E", "E", "E", "E", "E", "F", "F", "G", "G", "H", "H", "H", "H", "I", "I", "I", "I", "I", "I", "I", "I", "I", "I", "I", "I", "K", "K", "K", "K", "K", "K", "K", "K", "L", "L", "L", "L", "L", "L", "M", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "O", "O", "O", "O", "O", "O", "P", "P", "P", "P", "P", "P", "P", "P", "R", "R", "R", "R", "R", "R", "S", "S", "S", "S", "S", "S", "S", "S", "T", "T", "T", "T", "T", "T", "T", "T", "U", "U", "V", "W", "W", "W", "W", "Y", "Y"]
    
    possiblearray = _.shuffle(possiblearray);

    //possiblearray is every letter that appears as a target/foil

	function readarray2(){
	    for (var i = 0; i < 80; i++){ 
	        rand_order = _.shuffle(order); 
	        for (var j = 0; j <3; j++){ 
	            allwords_order.push(rand_order[j]);  
	        }
	    }

	    if (reference == "1"){
	    	stimuli = readTextFile2("/static/stim/stim-list.txt");	
	    }
	    if (reference == "2"){
	    	stimuli = readTextFile2("/static/stim/stim-list2.txt");	
	    }
	    if (reference == "3"){
	    	stimuli = readTextFile2("/static/stim/stim-list3.txt");	
	    }
	    if (reference == "4"){
	    	stimuli = readTextFile2("/static/stim/stim-list4.txt");	
	    }
	    if (reference == "5"){
	    	stimuli = readTextFile2("/static/stim/stim-list5.txt");	
	    }
	    if (reference == "6"){
	    	stimuli = readTextFile2("/static/stim/stim-list6.txt");	
	    }
	    if (reference == "7"){
	    	stimuli = readTextFile2("/static/stim/stim-list7.txt");	
	     }
	    if (reference == "8"){
	    	stimuli = readTextFile2("/static/stim/stim-list8.txt");	
	    }
	    if (reference == "9"){
	    	stimuli = readTextFile2("/static/stim/stim-list9.txt");	
	    }
	    if (reference == "10"){
	    	stimuli = readTextFile2("/static/stim/stim-list10.txt");	
	    }
	    if (reference == "11"){
	    	stimuli = readTextFile2("/static/stim/stim-list11.txt");	
	    }
	    if (reference == "12"){
	    	stimuli = readTextFile2("/static/stim/stim-list12.txt");	
	    }
	    if (reference == "13"){
	    	stimuli = readTextFile2("/static/stim/stim-list13.txt");	
	    }
	    if (reference == "14"){
	    	stimuli = readTextFile2("/static/stim/stim-list14.txt");	
	    }

	    
	    var combined_cond = [];
	    
	    for(var i=0;i<240;i++) {
		  combined_cond[i] = stimuli[i].concat(allwords_order[i]);
		}

	    // var full_cond = [];

	 	// for(var i=0;i<240;i++) {
		//   full_cond[i] = combined_cond[i].concat(possiblearray[i]);
		// }

		return combined_cond;

		// for(var i=0;i<240;i++) {
		//   if (stim[1]||stim[2]||stim[3]||stim[4] == stim[12]) {
		//   	full_cond[i] = full_cond[i].replace(stim[12], "XXXXXX");
		//   }
		// }

	// function checkarray() {
	// 	for (var stimIndex = 1; stimIndex < 5; stimIndex++) {
	// 	    	possible = possible.replace(stim[stimIndex], "")
	// 	}
	// 	   text += possible.charAt(Math.floor(Math.random() * possible.length));
	// 	   possible = possible.replace(text, "")
	// }


	};

	stims = readarray2();
	stimsb0 = _.shuffle(stims.slice(0,8)); //first 8 trial == 1 from each condition to set threshold at trial
	stimsb1 = _.shuffle(stims.slice(8,48));
	stimsb2 = _.shuffle(stims.slice(48,96));
	stimsb3 = _.shuffle(stims.slice(96,144));
	stimsb4 = _.shuffle(stims.slice(144,192));
	stimsb5 = _.shuffle(stims.slice(192,240));

	stims = stimsb0.concat(stimsb1,stimsb2,stimsb3,stimsb4,stimsb5);

	current_condition = []

	var next = function() {
		if (stims.length===0) {
			var s = Snap('#svgMain');
			s.clear();
			clearTimeout(handle7);
			finish();
		}

		else {
			var s = Snap('#svgMain');
			s.clear(); //clears the screen
			stim = stims.shift(); //moves onto the next stim
			
			if (stim[9] == 'n - n' & trial_count > 7){
			current_condition = cond[0];
			} 
			else if (stim[9] == 'n - v' & trial_count > 7){
			current_condition = cond[1];
			} 
			else if (stim[9] == 'v - v' & trial_count > 7){
			current_condition = cond[2];
			}
			else if (stim[9] == 'v - n' & trial_count > 7){
			current_condition = cond[3];
			}
			else if (stim[9] == 'pn - pn' & trial_count > 7){
			current_condition = cond[4];
			}
			else if (stim[9] == 'pn - pv' & trial_count > 7){
			current_condition = cond[5];
			}
			else if (stim[9] == 'pv - pv' & trial_count > 7){
			current_condition = cond[6];
			}
			else if (stim[9] == 'pv - pn' & trial_count > 7){
			current_condition = cond[7];
			}
			else if (trial_count < 8){
			current_condition = cond[16];
			}

			// newdiff=staircase();
			// clearTimeout();
			// show_fixation(); //calls the show_fixation function
			// handle2 = setTimeout(function(){
			// 	show_word(stim[7]);},500); //fixation on screen until 500ms, then show prime
			// handle2 = setTimeout(function(){
			// 	show_mask2();},1000); //prime on screen until 1000ms, then show forward mask
			// handle2 = setTimeout(function(){
			// 	show_word(stim[0]);},1250); //forward mask on screen until 1250ms, then show word
			// handle3 = setTimeout(function(){
			// 	show_mask();},newdiff); //show_word on screen for 60ms, then show_mask until response
			// listening = true; 

			newdiff=staircase();
			clearTimeout();
			show_fixation(); //calls the show_fixation function
			handle2 = setTimeout(function(){
				show_prime();},500); //fixation on screen until 500ms, then show prime
			handle2 = setTimeout(function(){
				show_mask2();},1000); //prime on screen until 1000ms, then show forward mask
			handle2 = setTimeout(function(){
				show_root();},1250); //forward mask on screen until 1250ms, then show word
			handle3 = setTimeout(function(){
				show_mask();},newdiff); //show_word on screen for 60ms, then show_mask until response
			listening = true; 
			
		};
	};


	var response_handler = function(e, trialonset) {
		if (!listening) return;

		var keyCode = e.keyCode,
			response;

		switch (keyCode) {
			case 77:
				// "M"
				response="1";
				break;
			case 90:
				// "Z"
				response="2";
				break;
			default:
				response = String.fromCharCode();
				break;
				
		}
		if (response.length>0) {
			var hit = response == stim[1]; 
			var rt = new Date().getTime() - trialstart; //this records the rt

			if (response == stim[11]) {
				var accuracy = 1;
			}
			else { 
				var accuracy = 0
			} 

			psiTurk.recordTrialData({'phase':"TEST",
                                     'rootword':stim[0],
                                     'targetletter':stim[5],
                                     'trial#':trial_count,
                                     'rootword_group': stim[6],
                                     'prime': stim[7],
                                     'prime_group' : stim[8],
                                     'staircase_group': stim[9],
                                     'block': stim[10],
                                     'targetPosition': stim[11],
                                     'response':response,
                                     'accuracy':accuracy,
                                     'rt':rt,
                                 	 'n/n-threshold':A1_diff,
                                 	 'n/v-threshold':B1_diff,                                 	 
                                 	 'v/v-threshold':C1_diff,
                                 	 'v/n-threshold':D1_diff,
                                 	 'pn/pn-threshold':E1_diff,                                 	 
                                 	 'pn/pv-threshold':F1_diff,
                                 	 'pv/pv-threshold':G1_diff,
                                 	 'pv/pn-threshold':H1_diff,                                 	 
                                 	 'newdiff':newdiff,
                                 	 'newdiff-1250':newdiff - 1250,
                                 	 'reference':reference,
                                 	 'staircase_acc_bycond':acc,
                                 	 'staircase_reversals_bycond':reversals,
                                 	 'trial_bycond': trial1,
                                 	 'acc_sumlast5': acc_sumlast5,
                                 	 'unix_timestamp': trialstart}
                                );

			ITI();

		};

		//******************************* staircase function *****************************************//
	
	//startdiff = staircase(); 
	//you will first call the staircase function and it will return the current value for the stimulus difference

	//once you get the response for this trial, you will decide whether the response is correct or not and
	//then update the staircase (reversals and wait for each condition)

	if(response == stim[11]){
		acc = acc+1; //if the trial response is correct
	    wait = 2;
	    sign = -1; //correct response - we set wait to 2 so that for the next trial, staircase will go down
	    // if (reversals >= 1){//switch to two-down one-up after the first reversal
	    //     wait = wait+1; //correct response - wait value goes up by 1
	    // }
	    // if (wait ==2){//this is to track the sign of the staircase change, whether going up or down
	    //     sign = -1; //-1 means going down
	    // }
	    // if (wait ==1){ //when wait ==1, it means the previous trial has a correct response
	    //     sign = sign_back1; // the sign of the current trial would be the same as the previous trial
	    // }
	}
	else{
		acc = acc-1; //if acc != 0, we reset wait to 0, so the staircase for the next trial will go up
	    wait = 0;
	    sign = 1;//sign of the current trial set to 1, meaning the direction of going up
	};

	if (acc > 5){//define the upper and lower bound of the accuracy 
        acc = 5;
    };
    if (acc < 0){
        acc = 0;
    };

    acc_array.push(accuracy)

     var acc_array_last5 = acc_array[acc_array.length -5]
	 var acc_array_last4 = acc_array[acc_array.length -4]
	 var acc_array_last3 = acc_array[acc_array.length -3]
	 var acc_array_last2 = acc_array[acc_array.length -2]
	 var acc_array_last1 = acc_array[acc_array.length -1]

	var acc_sumlast5 = acc_array_last5 + acc_array_last4 + acc_array_last3 + acc_array_last2 + acc_array_last1;
 

    if (trial_count == 8){
    	newdiff=A1_diff=B1_diff=C1_diff=D1_diff=E1_diff=F1_diff=G1_diff=H1_diff=I1_diff=J1_diff=K1_diff=L1_diff=M1_diff=N1_diff=O1_diff=P1_diff=Q1_diff;
    }

	//we will use the sign of the current and past trial to decide if there is a reversal or not
	if (trial1!= 0 & sign != sign_back1){//when the two signs are not the same, there is a reversal
	    current_rev = rev_all[current_condition];//we get the reversal for the current condition
	    current_rev ++;//increase it by 1
	    rev_all[current_condition] = current_rev;//and then assign back to the rev_all variable
	}
	if (trial1 ==0 & sign != sign_back1){
	    current_rev = rev_all[current_condition];
	    current_rev ++;
	    rev_all[current_condition] = current_rev;
	}

	switch(current_condition){ //update those variables after each trial
	    case 0:
	    	A1_back1 = sign;
	        cond_trial = A1_trial;
	        A1_wait = wait;
	        A1_revback1 = current_rev;
	        A1_acc = acc;
	        A1_acc_sumlast5 = acc_sumlast5;  
	        A1_acc_array = acc_array;
	        A1_acc_array_last5 = acc_array_last1;
	        A1_acc_array_last4 = acc_array_last2;
	        A1_acc_array_last3 = acc_array_last3;
	        A1_acc_array_last2 = acc_array_last4;
	        A1_acc_array_last1 = acc_array_last5;
	        break;
	    case 1:
	    	B1_back1 = sign;
	        cond_trial = B1_trial;
	        B1_wait = wait;
	        B1_revback1 = current_rev;
	        B1_acc = acc;
	        B1_acc_sumlast5 = acc_sumlast5;  
	        B1_acc_array = acc_array;
	        B1_acc_array_last5 = acc_array_last1;
	        B1_acc_array_last4 = acc_array_last2;
	        B1_acc_array_last3 = acc_array_last3;
	        B1_acc_array_last2 = acc_array_last4;
	        B1_acc_array_last1 = acc_array_last5;              
	        break;
	     case 2:
	     	C1_back1 = sign;
	        cond_trial = C1_trial;
	        C1_wait = wait;
	        C1_revback1 = current_rev;
	        C1_acc = acc;
	        C1_acc_sumlast5 = acc_sumlast5;  
	        C1_acc_array = acc_array;
	        C1_acc_array_last5 = acc_array_last1;
	        C1_acc_array_last4 = acc_array_last2;
	        C1_acc_array_last3 = acc_array_last3;
	        C1_acc_array_last2 = acc_array_last4;
	        C1_acc_array_last1 = acc_array_last5;               
	        break;
	     case 3:
	     	D1_back1 = sign;
	        cond_trial = D1_trial;
	        D1_wait = wait;
	        D1_revback1 = current_rev;
	        D1_acc = acc;
	        D1_acc_sumlast5 = acc_sumlast5;  
	        D1_acc_array = acc_array;
	        D1_acc_array_last5 = acc_array_last1;
	        D1_acc_array_last4 = acc_array_last2;
	        D1_acc_array_last3 = acc_array_last3;
	        D1_acc_array_last2 = acc_array_last4;
	        D1_acc_array_last1 = acc_array_last5;                          
	        break;
	     case 4:
	     	E1_back1 = sign;
	        cond_trial = E1_trial;
	        E1_wait = wait;
	        E1_revback1 = current_rev;
	        E1_acc = acc;
	        E1_acc_sumlast5 = acc_sumlast5;  
	        E1_acc_array = acc_array;
	        E1_acc_array_last5 = acc_array_last1;
	        E1_acc_array_last4 = acc_array_last2;
	        E1_acc_array_last3 = acc_array_last3;
	        E1_acc_array_last2 = acc_array_last4;
	        E1_acc_array_last1 = acc_array_last5;           
	        break;
	     case 5:
	     	F1_back1 = sign;
	        cond_trial = F1_trial;
	        F1_wait = wait;
	        F1_revback1 = current_rev;
	        F1_acc = acc;
	        F1_acc_sumlast5 = acc_sumlast5;  
	        F1_acc_array = acc_array;
	        F1_acc_array_last5 = acc_array_last1;
	        F1_acc_array_last4 = acc_array_last2;
	        F1_acc_array_last3 = acc_array_last3;
	        F1_acc_array_last2 = acc_array_last4;
	        F1_acc_array_last1 = acc_array_last5;             
	        break;
	     case 6:
	     	G1_back1 = sign;
	        cond_trial = G1_trial;
	        G1_wait = wait;
	        G1_revback1 = current_rev;
	        G1_acc = acc;
	        G1_acc_sumlast5 = acc_sumlast5;  
	        G1_acc_array = acc_array;
	        G1_acc_array_last5 = acc_array_last1;
	        G1_acc_array_last4 = acc_array_last2;
	        G1_acc_array_last3 = acc_array_last3;
	        G1_acc_array_last2 = acc_array_last4;
	        G1_acc_array_last1 = acc_array_last5;           
	        break;
	     case 7:
	     	H1_back1 = sign;
	        cond_trial = H1_trial;
	        H1_wait = wait;
	        H1_revback1 = current_rev;
	        H1_acc = acc;
	        H1_acc_sumlast5 = acc_sumlast5;  
	        H1_acc_array = acc_array;
	        H1_acc_array_last5 = acc_array_last1;
	        H1_acc_array_last4 = acc_array_last2;
	        H1_acc_array_last3 = acc_array_last3;
	        H1_acc_array_last2 = acc_array_last4;
	        H1_acc_array_last1 = acc_array_last5;          
	        break;
	     case 8:
	     	I1_back1 = sign;
	        cond_trial = I1_trial;
	        I1_wait = wait;
	        I1_revback1 = current_rev;
	        I1_acc = acc;
	        I1_acc_sumlast5 = acc_sumlast5;  
	        I1_acc_array = acc_array;
	        I1_acc_array_last5 = acc_array_last1;
	        I1_acc_array_last4 = acc_array_last2;
	        I1_acc_array_last3 = acc_array_last3;
	        I1_acc_array_last2 = acc_array_last4;
	        I1_acc_array_last1 = acc_array_last5;             
	        break;
	     case 9:
	     	J1_back1 = sign;
	        cond_trial = J1_trial;
	        J1_wait = wait;
	        J1_revback1 = current_rev;
	        J1_acc = acc;
	        J1_acc_sumlast5 = acc_sumlast5;  
	        J1_acc_array = acc_array;
	        J1_acc_array_last5 = acc_array_last1;
	        J1_acc_array_last4 = acc_array_last2;
	        J1_acc_array_last3 = acc_array_last3;
	        J1_acc_array_last2 = acc_array_last4;
	        J1_acc_array_last1 = acc_array_last5;            
	        break;
	     case 10:
	     	K1_back1 = sign;
	        cond_trial = K1_trial;
	        K1_wait = wait;
	        K1_revback1 = current_rev;
	        K1_acc = acc;
	        K1_acc_sumlast5 = acc_sumlast5;  
	        K1_acc_array = acc_array;
	        K1_acc_array_last5 = acc_array_last1;
	        K1_acc_array_last4 = acc_array_last2;
	        K1_acc_array_last3 = acc_array_last3;
	        K1_acc_array_last2 = acc_array_last4;
	        K1_acc_array_last1 = acc_array_last5;          
	        break;
	     case 11:
	     	L1_back1 = sign;
	        cond_trial = L1_trial;
	        L1_wait = wait;
	        L1_revbacL1 = current_rev;
	        L1_acc = acc;
	        L1_acc_sumlast5 = acc_sumlast5;  
	        L1_acc_array = acc_array;
	        L1_acc_array_last5 = acc_array_last1;
	        L1_acc_array_last4 = acc_array_last2;
	        L1_acc_array_last3 = acc_array_last3;
	        L1_acc_array_last2 = acc_array_last4;
	        L1_acc_array_last1 = acc_array_last5;            
	        break;
	     case 12:
	     	M1_back1 = sign;
	        cond_trial = M1_trial;
	        M1_wait = wait;
	        M1_revbacM1 = current_rev;
	        M1_acc = acc;
	        M1_acc_sumlast5 = acc_sumlast5;  
	        M1_acc_array = acc_array;
	        M1_acc_array_last5 = acc_array_last1;
	        M1_acc_array_last4 = acc_array_last2;
	        M1_acc_array_last3 = acc_array_last3;
	        M1_acc_array_last2 = acc_array_last4;
	        M1_acc_array_last1 = acc_array_last5;           
	        break;
	     case 13:
	        N1_back1 = sign;
	        cond_trial = N1_trial;
	        N1_wait = wait;
	        N1_revbacN1 = current_rev;
	        N1_acc = acc;
	        N1_acc_sumlast5 = acc_sumlast5;  
	        N1_acc_array = acc_array;
	        N1_acc_array_last5 = acc_array_last1;
	        N1_acc_array_last4 = acc_array_last2;
	        N1_acc_array_last3 = acc_array_last3;
	        N1_acc_array_last2 = acc_array_last4;
	        N1_acc_array_last1 = acc_array_last5;          
	        break;
	     case 14:
	        O1_back1 = sign;
	        cond_trial = O1_trial;
	        O1_wait = wait;
	        O1_revbacO1 = current_rev;
	        O1_acc = acc;
	        O1_acc_sumlast5 = acc_sumlast5;  
	        O1_acc_array = acc_array;
	        O1_acc_array_last5 = acc_array_last1;
	        O1_acc_array_last4 = acc_array_last2;
	        O1_acc_array_last3 = acc_array_last3;
	        O1_acc_array_last2 = acc_array_last4;
	        O1_acc_array_last1 = acc_array_last5          
	        break;
	     case 15:
	        P1_back1 = sign;
	        cond_trial = P1_trial;
	        P1_wait = wait;
	        P1_revbacP1 = current_rev;
	        P1_acc = acc;
	        P1_acc_sumlast5 = acc_sumlast5;  
	        P1_acc_array = acc_array;
	        P1_acc_array_last5 = acc_array_last1;
	        P1_acc_array_last4 = acc_array_last2;
	        P1_acc_array_last3 = acc_array_last3;
	        P1_acc_array_last2 = acc_array_last4;
	        P1_acc_array_last1 = acc_array_last5;  
	        break;
	     case 16:
	        Q1_back1 = sign;
	        cond_trial = Q1_trial;
	        Q1_wait = wait;
	        Q1_revbacQ1 = current_rev;
	        Q1_acc = acc;
	        Q1_acc_sumlast5 = acc_sumlast5;  
	        Q1_acc_array = acc_array;
	        Q1_acc_array_last5 = acc_array_last1;
	        Q1_acc_array_last4 = acc_array_last2;
	        Q1_acc_array_last3 = acc_array_last3;
	        Q1_acc_array_last2 = acc_array_last4;
	        Q1_acc_array_last1 = acc_array_last5;  
	};

	};

	var finish = function() {
		var s = Snap('#svgMain');
	    $("body").unbind("keydown", response_handler); // unbinds keys
	    currentview = new Questionnaire(); 

	    //the variable 'finish' is called when stims.length=0. it then proceeds onto the questionnaire.
	};


	var show_prime = function(text, color) {
		var s = Snap('#svgMain');
		$("body").unbind("keydown", response_handler); 
		s.clear();

		//the 'show_word' function presents the stim[0] on the screen, using the snap library for size and font details
	
		//var presentation = s.text(540,400,text).attr({'fill' : "black",  'stroke': "black", 'stroke-width': 5,'font-size':75});

		if (stim[7] == 'm i l k'){
		var presentation = s.image("static/stimages/lowermilk.png", 340,320);
		}
		if (stim[7] == 's a n d'){
		var presentation = s.image("static/stimages/lowersand.png", 340,320);
		}
		if (stim[7] == 'f o r k'){
		var presentation = s.image("static/stimages/lowerfork.png", 340,320);
		}
		if (stim[7] == 's o a p'){
		var presentation = s.image("static/stimages/lowersoap.png", 340,320);
		}
		if (stim[7] == 'p a t h'){
		var presentation = s.image("static/stimages/lowerpath.png", 340,320);
		}
		if (stim[7] == 'p l u g'){
		var presentation = s.image("static/stimages/lowerplug.png", 340,320);
		}
		if (stim[7] == 'd e l i'){
		var presentation = s.image("static/stimages/lowerdeli.png", 340,320);
		}
		if (stim[7] == 'y a r n'){
		var presentation = s.image("static/stimages/loweryarn.png", 340,320);
		}
		if (stim[7] == 't a c o'){
		var presentation = s.image("static/stimages/lowertaco.png", 340,320);
		}
		if (stim[7] == 'p i n t'){
		var presentation = s.image("static/stimages/lowerpint.png", 340,320);
		}
		if (stim[7] == 'b a i t'){
		var presentation = s.image("static/stimages/lowerbait.png", 340,320);
		}
		if (stim[7] == 'n e w s'){
		var presentation = s.image("static/stimages/lowernews.png", 340,320);
		}
		if (stim[7] == 'h a i r'){
		var presentation = s.image("static/stimages/lowerhair.png", 340,320);
		}
		if (stim[7] == 'w i s k'){
		var presentation = s.image("static/stimages/lowerwisk.png", 340,320);
		}
		if (stim[7] == 'n e c k'){
		var presentation = s.image("static/stimages/lowerneck.png", 340,320);
		}
		if (stim[7] == 'n a i l'){
		var presentation = s.image("static/stimages/lowernail.png", 340,320);
		}
		if (stim[7] == 'k n o b'){
		var presentation = s.image("static/stimages/lowerknob.png", 340,320);
		}
		if (stim[7] == 'p u n t'){
		var presentation = s.image("static/stimages/lowerpunt.png", 340,320);
		}
		if (stim[7] == 'i t c h'){
		var presentation = s.image("static/stimages/loweritch.png", 340,320);
		}
		if (stim[7] == 's i n g'){
		var presentation = s.image("static/stimages/lowersing.png", 340,320);
		}
		if (stim[7] == 'p r o d'){
		var presentation = s.image("static/stimages/lowerprod.png", 340,320);
		}
		if (stim[7] == 'l i f t'){
		var presentation = s.image("static/stimages/lowerlift.png", 340,320);
		}
		if (stim[7] == 's w a t'){
		var presentation = s.image("static/stimages/lowerswat.png", 340,320);
		}
		if (stim[7] == 'r a k e'){
		var presentation = s.image("static/stimages/lowerrake.png", 340,320);
		}
		if (stim[7] == 'w i p e'){
		var presentation = s.image("static/stimages/lowerwipe.png", 340,320);
		}
		if (stim[7] == 'y a n k'){
		var presentation = s.image("static/stimages/loweryank.png", 340,320);
		}
		if (stim[7] == 's l a p'){
		var presentation = s.image("static/stimages/lowerslap.png", 340,320);
		}
		if (stim[7] == 'd i v e'){
		var presentation = s.image("static/stimages/lowerdive.png", 340,320);
		}
		if (stim[7] == 'h a c k'){
		var presentation = s.image("static/stimages/lowerhack.png", 340,320);
		}
		if (stim[7] == 's o a r'){
		var presentation = s.image("static/stimages/lowersoar.png", 340,320);
		}
		if (stim[7] == 's o a g'){
		var presentation = s.image("static/stimages/lowersoag.png", 340,320);
		}
		if (stim[7] == 'f o t h'){
		var presentation = s.image("static/stimages/lowerfoth.png", 340,320);
		}
		if (stim[7] == 's a l i'){
		var presentation = s.image("static/stimages/lowersali.png", 340,320);
		}
		if (stim[7] == 'p l u n'){
		var presentation = s.image("static/stimages/lowerplun.png", 340,320);
		}
		if (stim[7] == 'p e r o'){
		var presentation = s.image("static/stimages/lowerpero.png", 340,320);
		}
		if (stim[7] == 'd a c t'){
		var presentation = s.image("static/stimages/lowerdact.png", 340,320);
		}
		if (stim[7] == 'y i n t'){
		var presentation = s.image("static/stimages/loweryint.png", 340,320);
		}
		if (stim[7] == 't a i s'){
		var presentation = s.image("static/stimages/lowertais.png", 340,320);
		}
		if (stim[7] == 'p a w r'){
		var presentation = s.image("static/stimages/lowerpawr.png", 340,320);
		}
		if (stim[7] == 'b e i k'){
		var presentation = s.image("static/stimages/lowerbeik.png", 340,320);
		}
		if (stim[7] == 'n a s k'){
		var presentation = s.image("static/stimages/lowernask.png", 340,320);
		}
		if (stim[7] == 'h i l d'){
		var presentation = s.image("static/stimages/lowerhild.png", 340,320);
		}
		if (stim[7] == 'w e c k'){
		var presentation = s.image("static/stimages/lowerweck.png", 340,320);
		}
		if (stim[7] == 'n i r p'){
		var presentation = s.image("static/stimages/lowernirp.png", 340,320);
		}
		if (stim[7] == 'm a n k'){
		var presentation = s.image("static/stimages/lowermank.png", 340,320);
		}
		if (stim[7] == 'h i n g'){
		var presentation = s.image("static/stimages/lowerhing.png", 340,320);
		}
		if (stim[7] == 'k u c h'){
		var presentation = s.image("static/stimages/lowerkuch.png", 340,320);
		}
		if (stim[7] == 's t i d'){
		var presentation = s.image("static/stimages/lowerstid.png", 340,320);
		}
		if (stim[7] == 'n i k t'){
		var presentation = s.image("static/stimages/lowernikt.png", 340,320);
		}
		if (stim[7] == 'p r a t'){
		var presentation = s.image("static/stimages/lowerprat.png", 340,320);
		}
		if (stim[7] == 'p l o k'){
		var presentation = s.image("static/stimages/lowerplok.png", 340,320);
		}
		if (stim[7] == 'l i p t'){
		var presentation = s.image("static/stimages/lowerlipt.png", 340,320);
		}
		if (stim[7] == 's a f t'){
		var presentation = s.image("static/stimages/lowersaft.png", 340,320);
		}
		if (stim[7] == 'r i p t'){
		var presentation = s.image("static/stimages/lowerript.png", 340,320);
		}
		if (stim[7] == 'w a c t'){
		var presentation = s.image("static/stimages/lowerwact.png", 340,320);
		}
		if (stim[7] == 'y a v e'){
		var presentation = s.image("static/stimages/loweryave.png", 340,320);
		}
		if (stim[7] == 's w a r'){
		var presentation = s.image("static/stimages/lowerswar.png", 340,320);
		}
		if (stim[7] == 'd a n p'){
		var presentation = s.image("static/stimages/lowerdanp.png", 340,320);
		}
		if (stim[7] == 's o n k'){
		var presentation = s.image("static/stimages/lowersonk.png", 340,320);
		}
		if (stim[7] == 's a o b'){
		var presentation = s.image("static/stimages/lowersaob.png", 340,320);
		}

	};

	var show_root = function(text, color) {
		var s = Snap('#svgMain');
		$("body").unbind("keydown", response_handler); 
		s.clear();

		//the 'show_word' function presents the stim[0] on the screen, using the snap library for size and font details
		//console.log(new Date().getTime())
		//var presentation = s.text(540,400,text).attr({'fill' : "black",  'stroke': "black", 'stroke-width': 5,'font-size':75});

		if (stim[0] == 'M I L K'){
		var presentation = s.image("static/stimages/upperMILK.png", 340,320);
		}
		if (stim[0] == 'S A N D'){
		var presentation = s.image("static/stimages/upperSAND.png", 340,320);
		}
		if (stim[0] == 'F O R K'){
		var presentation = s.image("static/stimages/upperFORK.png", 340,320);
		}
		if (stim[0] == 'S O A P'){
		var presentation = s.image("static/stimages/upperSOAP.png", 340,320);
		}
		if (stim[0] == 'P A T H'){
		var presentation = s.image("static/stimages/upperPATH.png", 340,320);
		}
		if (stim[0] == 'P L U G'){
		var presentation = s.image("static/stimages/upperPLUG.png", 340,320);
		}
		if (stim[0] == 'D E L I'){
		var presentation = s.image("static/stimages/upperDELI.png", 340,320);
		}
		if (stim[0] == 'Y A R N'){
		var presentation = s.image("static/stimages/upperYARN.png", 340,320);
		}
		if (stim[0] == 'T A C O'){
		var presentation = s.image("static/stimages/upperTACO.png", 340,320);
		}
		if (stim[0] == 'P I N T'){
		var presentation = s.image("static/stimages/upperPINT.png", 340,320);
		}
		if (stim[0] == 'B A I T'){
		var presentation = s.image("static/stimages/upperBAIT.png", 340,320);
		}
		if (stim[0] == 'N E W S'){
		var presentation = s.image("static/stimages/upperNEWS.png", 340,320);
		}
		if (stim[0] == 'H A I R'){
		var presentation = s.image("static/stimages/upperHAIR.png", 340,320);
		}
		if (stim[0] == 'W I S K'){
		var presentation = s.image("static/stimages/upperWISK.png", 340,320);
		}
		if (stim[0] == 'N E C K'){
		var presentation = s.image("static/stimages/upperNECK.png", 340,320);
		}
		if (stim[0] == 'N A I L'){
		var presentation = s.image("static/stimages/upperNAIL.png", 340,320);
		}
		if (stim[0] == 'K N O B'){
		var presentation = s.image("static/stimages/upperKNOB.png", 340,320);
		}
		if (stim[0] == 'P U N T'){
		var presentation = s.image("static/stimages/upperPUNT.png", 340,320);
		}
		if (stim[0] == 'I T C H'){
		var presentation = s.image("static/stimages/upperITCH.png", 340,320);
		}
		if (stim[0] == 'S I N G'){
		var presentation = s.image("static/stimages/upperSING.png", 340,320);
		}
		if (stim[0] == 'P R O D'){
		var presentation = s.image("static/stimages/upperPROD.png", 340,320);
		}
		if (stim[0] == 'L I F T'){
		var presentation = s.image("static/stimages/upperLIFT.png", 340,320);
		}
		if (stim[0] == 'S W A T'){
		var presentation = s.image("static/stimages/upperSWAT.png", 340,320);
		}
		if (stim[0] == 'R A K E'){
		var presentation = s.image("static/stimages/upperRAKE.png", 340,320);
		}
		if (stim[0] == 'W I P E'){
		var presentation = s.image("static/stimages/upperWIPE.png", 340,320);
		}
		if (stim[0] == 'Y A N K'){
		var presentation = s.image("static/stimages/upperYANK.png", 340,320);
		}
		if (stim[0] == 'S L A P'){
		var presentation = s.image("static/stimages/upperSLAP.png", 340,320);
		}
		if (stim[0] == 'D I V E'){
		var presentation = s.image("static/stimages/upperDIVE.png", 340,320);
		}
		if (stim[0] == 'H A C K'){
		var presentation = s.image("static/stimages/upperHACK.png", 340,320);
		}
		if (stim[0] == 'S O A R'){
		var presentation = s.image("static/stimages/upperSOAR.png", 340,320);
		}
		if (stim[0] == 'S O A G'){
		var presentation = s.image("static/stimages/upperSOAG.png", 340,320);
		}
		if (stim[0] == 'F O T H'){
		var presentation = s.image("static/stimages/upperFOTH.png", 340,320);
		}
		if (stim[0] == 'S A L I'){
		var presentation = s.image("static/stimages/upperSALI.png", 340,320);
		}
		if (stim[0] == 'P L U N'){
		var presentation = s.image("static/stimages/upperPLUN.png", 340,320);
		}
		if (stim[0] == 'P E R O'){
		var presentation = s.image("static/stimages/upperPERO.png", 340,320);
		}
		if (stim[0] == 'D A C T'){
		var presentation = s.image("static/stimages/upperDACT.png", 340,320);
		}
		if (stim[0] == 'Y I N T'){
		var presentation = s.image("static/stimages/upperYINT.png", 340,320);
		}
		if (stim[0] == 'T A I S'){
		var presentation = s.image("static/stimages/upperTAIS.png", 340,320);
		}
		if (stim[0] == 'P A W R'){
		var presentation = s.image("static/stimages/upperPAWR.png", 340,320);
		}
		if (stim[0] == 'B E I K'){
		var presentation = s.image("static/stimages/upperBEIK.png", 340,320);
		}
		if (stim[0] == 'N A S K'){
		var presentation = s.image("static/stimages/upperNASK.png", 340,320);
		}
		if (stim[0] == 'H I L D'){
		var presentation = s.image("static/stimages/upperHILD.png", 340,320);
		}
		if (stim[0] == 'W E C K'){
		var presentation = s.image("static/stimages/upperWECK.png", 340,320);
		}
		if (stim[0] == 'N I R P'){
		var presentation = s.image("static/stimages/upperNIRP.png", 340,320);
		}
		if (stim[0] == 'M A N K'){
		var presentation = s.image("static/stimages/upperMANK.png", 340,320);
		}
		if (stim[0] == 'H I N G'){
		var presentation = s.image("static/stimages/upperHING.png", 340,320);
		}
		if (stim[0] == 'K U C H'){
		var presentation = s.image("static/stimages/upperKUCH.png", 340,320);
		}
		if (stim[0] == 'S T I D'){
		var presentation = s.image("static/stimages/upperSTID.png", 340,320);
		}
		if (stim[0] == 'N I K T'){
		var presentation = s.image("static/stimages/upperNIKT.png", 340,320);
		}
		if (stim[0] == 'P R A T'){
		var presentation = s.image("static/stimages/upperPRAT.png", 340,320);
		}
		if (stim[0] == 'P L O K'){
		var presentation = s.image("static/stimages/upperPLOK.png", 340,320);
		}
		if (stim[0] == 'L I P T'){
		var presentation = s.image("static/stimages/upperLIPT.png", 340,320);
		}
		if (stim[0] == 'S A F T'){
		var presentation = s.image("static/stimages/upperSAFT.png", 340,320);
		}
		if (stim[0] == 'R I P T'){
		var presentation = s.image("static/stimages/upperRIPT.png", 340,320);
		}
		if (stim[0] == 'W A C T'){
		var presentation = s.image("static/stimages/upperWACT.png", 340,320);
		}
		if (stim[0] == 'Y A V E'){
		var presentation = s.image("static/stimages/upperYAVE.png", 340,320);
		}
		if (stim[0] == 'S W A R'){
		var presentation = s.image("static/stimages/upperSWAR.png", 340,320);
		}
		if (stim[0] == 'D A N P'){
		var presentation = s.image("static/stimages/upperDANP.png", 340,320);
		}
		if (stim[0] == 'S O N K'){
		var presentation = s.image("static/stimages/upperSONK.png", 340,320);
		}
		if (stim[0] == 'S A O B'){
		var presentation = s.image("static/stimages/upperSAOB.png", 340,320);
		}
	};


	var show_mask = function(text, color) {
		var s = Snap('#svgMain');
		$("body").bind("keydown", response_handler); // Bind keys
		s.clear(); 
		//console.log(new Date().getTime())
		
		if (stim[11] == '2') {
			var q2 = randomString2()
			var q4 = randomString()
		} else {
			var q2 = randomString()
			var q4 = randomString2()
		}

		if (stim[5] == 1) {
			var question = s.text(440,300,q2).attr({'fill' : "black",  'stroke': "black", 'stroke-width': 5,'font-size':75});
					   s.text(440,500,q4).attr({'fill' : "black",  'stroke': "black", 'stroke-width': 5,'font-size':75});
			}
		else if (stim[5] == 2) {
			var question = s.text(505,300,q2).attr({'fill' : "black",  'stroke': "black", 'stroke-width': 5,'font-size':75});
					   s.text(505,500,q4).attr({'fill' : "black",  'stroke': "black", 'stroke-width': 5,'font-size':75});
			}
		else if (stim[5] == 3) {
			var question = s.text(565,300,q2).attr({'fill' : "black",  'stroke': "black", 'stroke-width': 5,'font-size':75});
					   s.text(565,500,q4).attr({'fill' : "black",  'stroke': "black", 'stroke-width': 5,'font-size':75});
			}
		else {
			var question = s.text(632,300,q2).attr({'fill' : "black",  'stroke': "black", 'stroke-width': 5,'font-size':75});
					   s.text(632,500,q4).attr({'fill' : "black",  'stroke': "black", 'stroke-width': 5,'font-size':75});
			}

		var randomimage1 = Math.floor(Math.random() * 15);
		var randomimage2 = Math.floor(Math.random() * 15);
		var randomimage3 = Math.floor(Math.random() * 15);
		var randomimage4 = Math.floor(Math.random() * 15);

		var scramble1 = s.image((randomimageset[randomimage1]), 397, 320, 80, 110);
		var scramble2 = s.image((randomimageset[randomimage2]), 460, 320, 80, 110);
		var scramble3 = s.image((randomimageset[randomimage3]), 523, 320, 80, 110);
		var scramble4 = s.image((randomimageset[randomimage4]), 585, 320, 80, 110);

		trialstart = new Date().getTime(); //records date and time

	};

	var show_mask2 = function(text, color) {
		var s = Snap('#svgMain');
		$("body").unbind("keydown", response_handler); // Bind keys
		s.clear();

		var randomimage5 = Math.floor(Math.random() * 15);
		var randomimage6 = Math.floor(Math.random() * 15);
		var randomimage7 = Math.floor(Math.random() * 15);
		var randomimage8 = Math.floor(Math.random() * 15);

		var scramble5 = s.image((randomimageset[randomimage5]), 397, 320, 80, 110);
		var scramble6 = s.image((randomimageset[randomimage6]), 460, 320, 80, 110);
		var scramble7 = s.image((randomimageset[randomimage7]), 523, 320, 80, 110);
		var scramble8 = s.image((randomimageset[randomimage8]), 585, 320, 80, 110);

	};


 	var show_fixation = function(){
		document.body.style.cursor = 'none';
		var event = $(document).click(function(e) {
			e.stopPropagation();
			e.preventDefault();
			e.stopImmediatePropagation();
			return false;
		});
		var s = Snap('#svgMain');
		var horizontal = s.line(520,380,560,380);
		horizontal.attr({
		  id:"fix1",
		  stroke: "rgb(0, 0, 0)", 
		  strokeWidth:10
		});
		var vertical = s.line(540,360,540,400);
		vertical.attr({
		  id:"fix2",
		  stroke: "rgb(0, 0, 0)", 
		  strokeWidth:10

		});
	};


	var randomString = function() {
    var text = "";
    
    //var possible = "ABCDEFGHIKLMNOPRSTUWY"; //all possible incorrect stimuli drawn from presented letters
    
    var possible = "AAAAAAAAAAAAAABBCCDDDDEEEEEEFFGGHHHHIIIIIIIIIIIIKKKKKKKKLLLLLLMNNNNNNNNNNOOOOOOPPPPPPPPRRRRRRSSSSSSSSTTTTTTTTUUVWWWWYYAAAAAAAAAAAAAABBCCDDDDEEEEEEFFGGHHHHIIIIIIIIIIIIKKKKKKKKLLLLLLMNNNNNNNNNNOOOOOOPPPPPPPPRRRRRRSSSSSSSSTTTTTTTTUUVWWWWYY";

    //all possible incorrect stimuli drawn from presented letters in appropraite proportions

    for (var stimIndex = 1; stimIndex < 5; stimIndex++) {
    	possible = possible.replaceAll(stim[stimIndex], "")
    }
    text += possible.charAt(Math.floor(Math.random() * possible.length));
    possible = possible.replace(text, "")

	//this is the variable that calls a random letter from the alphabet that isn't contained within the word

  	return text;

    };


    var randomString2 = function() {

    var text = stim[5];

    if (stim[5] == '1'){
    	var text = stim[1]
    }
    if (stim[5] == '2'){
    	var text = stim[2]
    }    
    if (stim[5] == '3'){
    	var text = stim[3]
    }    
    if (stim[5] == '4'){
    	var text = stim[4]
    }
  	return text;
    };


	var ITI = function(){
		var s = Snap('#svgMain');
		$("body").unbind("keydown", response_handler); // unbind keys
		s.clear();
		trial_count++;
		handle7 = setTimeout(function(){
				ifbreak()},500);
	};

	var ifbreak = function(){
		if (trial_count % 120 == 0 && trial_count != 240){
			var s = Snap('#svgMain');
			s.clear();
			var blockbreak = s.image("/static/images/break.png", 280,300);
			document.addEventListener("keypress",nextblock,false);
		}
		else{
			next();
		};
	};

	var nextblock = function(e){
		if (e.keyCode == 32){
			document.removeEventListener("keypress",nextblock,false);
			clearTimeout(handle7);
			next();
		}
	};

	// psiturk functions: load the stage.html snippet into the body of the page, and register the response handler that is defined above to handle any key down events.

	psiTurk.showPage('stage.html');

	$("body").focus().keydown(response_handler); 

	// start the test
	next();
};

//************************************ staircase parameters ************************************//

startdiff = 1390;
var newdiff = startdiff; //define the starting difference
var A1_diff = Q1_diff; 
var B1_diff = Q1_diff; 
var C1_diff = Q1_diff; 
var D1_diff = Q1_diff; 
var E1_diff = Q1_diff; 
var F1_diff = Q1_diff; 
var G1_diff = Q1_diff; 
var H1_diff = Q1_diff; 
var I1_diff = Q1_diff; 
var J1_diff = Q1_diff; 
var K1_diff = Q1_diff; 
var L1_diff = Q1_diff; 
var M1_diff = Q1_diff; 
var N1_diff = Q1_diff; 
var O1_diff = Q1_diff; 
var P1_diff = Q1_diff; 
var Q1_diff = startdiff;

var step10 = 10;
var step4 = 5; //Define the size of the stairs
var step2 = 3; //start with bigger stairs and gradually reduce with more reversals
var step1 = 1;//this is to make the staircase more efficient

var trial1 = 0;
var A1_trial = 0, B1_trial = 0, C1_trial = 0, D1_trial = 0, E1_trial = 0, F1_trial = 0, G1_trial = 0, H1_trial = 0, I1_trial = 0, J1_trial = 0, K1_trial = 0, L1_trial = 0, M1_trial = 0, N1_trial = 0, O1_trial = 0, P1_trial = 0, Q1_trial = 0; //we will need to keep count of the trial numbers for each condition
var reversals = 0; 

var wait = 0; 

var acc = 3;

var A1_acc = 3, B1_acc = 3, C1_acc = 3, D1_acc = 3, E1_acc = 3, F1_acc = 3, G1_acc = 3, H1_acc = 3, I1_acc = 3, J1_acc = 3, K1_acc = 3, L1_acc = 3, M1_acc = 3, N1_acc = 3, O1_acc = 3, P1_acc = 3, Q1_acc = 3;//each condition gets their separate 'wait' variable


//because it is a two-down one-up staircase, only when there are two consecutively correct trial,
//the staircase will go down. After the first correct trial, we assign the 'wait' variable a value,
//then we wait and see if the next trial is correct or not.
//When the staircase goes down, we will need to reset the wait variable to 0.

var A1_wait = 0, B1_wait = 0, C1_wait = 0, D1_wait = 0, E1_wait = 0, F1_wait = 0, G1_wait = 0, H1_wait = 0, I1_wait = 0, J1_wait = 0, K1_wait = 0, L1_wait = 0, M1_wait = 0, N1_wait = 0, O1_wait = 0, P1_wait = 0, Q1_wait = 0; //each condition gets their separate 'wait' variable

//var A1_wait, B1_wait, C1_wait, D1_wait, E1_wait, F1_wait, G1_wait, H1_wait, I1_wait, J1_wait, K1_wait, L1_wait, M1_wait, N1_wait, O1_wait, P1_wait; //each condition gets their separate 'wait' variable


var A1_back1 = -1, B1_back1 = -1, C1_back1 = -1, D1_back1 = -1, E1_back1 = -1, F1_back1 = -1, G1_back1 = -1, H1_back1 = -1, I1_back1 = -1, J1_back1 = -1, K1_back1 = -1, L1_back1 = -1, M1_back1 = -1, N1_back1 = -1, O1_back1 = -1, P1_back1 = -1, Q1_back = -1;//this is the sign of the previous trial (trial n-1)

var prev_rev;
var A1_revback1 = 0, B1_revback1 = 0, C1_revback1 = 0, D1_revback1 = 0, E1_revback1 = 0, F1_revback1 = 0, G1_revback1 = 0, H1_revback1 = 0, I1_revback1 = 0, J1_revback1 = 0, K1_revback1 = 0, L1_revback1 = 0, M1_revback1 = 0, N1_revback1 = 0, O1_revback1 = 0, P1_revback1 = 0, Q1_revback1 = 0; //reversal for the previous trial
var sign_back1;
var A1_back1, B1_back1, C1_back1, D1_back1, E1_back1, F1_back1, G1_back1, H1_back1, I1_back1, J1_back1, K1_back1, L1_back1, M1_back1, N1_back1, O1_back1, P1_back1, Q1_back1;

var current_rev = 0; //I somehow deleted this line when I was adapting the code. This caused the error in the first correct trial because the variable is not defined

var cond = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16];
var rev_all = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]; // we use this variable to record the number of reversals for each conditions

//var current_condition = cond[Math.floor(Math.random()*2)]; //This is just a example to pick a random condition

var acc_array = [];

var A1_acc_array = [];
var B1_acc_array = [];
var C1_acc_array = [];
var D1_acc_array = [];
var E1_acc_array = [];
var F1_acc_array = [];
var G1_acc_array = [];
var H1_acc_array = [];
var I1_acc_array = [];
var J1_acc_array = [];
var K1_acc_array = [];
var L1_acc_array = [];
var M1_acc_array = [];
var N1_acc_array = [];
var O1_acc_array = [];
var P1_acc_array = [];
var Q1_acc_array = [];
var A1_acc_array_last1 = [];
var B1_acc_array_last1 = [];
var C1_acc_array_last1 = [];
var D1_acc_array_last1 = [];
var E1_acc_array_last1 = [];
var F1_acc_array_last1 = [];
var G1_acc_array_last1 = [];
var H1_acc_array_last1 = [];
var I1_acc_array_last1 = [];
var J1_acc_array_last1 = [];
var K1_acc_array_last1 = [];
var L1_acc_array_last1 = [];
var M1_acc_array_last1 = [];
var N1_acc_array_last1 = [];
var O1_acc_array_last1 = [];
var P1_acc_array_last1 = [];
var Q1_acc_array_last1 = [];
var A1_acc_array_last2 = [];
var B1_acc_array_last2 = [];
var C1_acc_array_last2 = [];
var D1_acc_array_last2 = [];
var E1_acc_array_last2 = [];
var F1_acc_array_last2 = [];
var G1_acc_array_last2 = [];
var H1_acc_array_last2 = [];
var I1_acc_array_last2 = [];
var J1_acc_array_last2 = [];
var K1_acc_array_last2 = [];
var L1_acc_array_last2 = [];
var M1_acc_array_last2 = [];
var N1_acc_array_last2 = [];
var O1_acc_array_last2 = [];
var P1_acc_array_last2 = [];
var Q1_acc_array_last2 = [];
var A1_acc_array_last3 = [];
var B1_acc_array_last3 = [];
var C1_acc_array_last3 = [];
var D1_acc_array_last3 = [];
var E1_acc_array_last3 = [];
var F1_acc_array_last3 = [];
var G1_acc_array_last3 = [];
var H1_acc_array_last3 = [];
var I1_acc_array_last3 = [];
var J1_acc_array_last3 = [];
var K1_acc_array_last3 = [];
var L1_acc_array_last3 = [];
var M1_acc_array_last3 = [];
var N1_acc_array_last3 = [];
var O1_acc_array_last3 = [];
var P1_acc_array_last3 = [];
var Q1_acc_array_last3 = [];
var A1_acc_array_last4 = [];
var B1_acc_array_last4 = [];
var C1_acc_array_last4 = [];
var D1_acc_array_last4 = [];
var E1_acc_array_last4 = [];
var F1_acc_array_last4 = [];
var G1_acc_array_last4 = [];
var H1_acc_array_last4 = [];
var I1_acc_array_last4 = [];
var J1_acc_array_last4 = [];
var K1_acc_array_last4 = [];
var L1_acc_array_last4 = [];
var M1_acc_array_last4 = [];
var N1_acc_array_last4 = [];
var O1_acc_array_last4 = [];
var P1_acc_array_last4 = [];
var Q1_acc_array_last4 = [];
var A1_acc_array_last5 = [];
var B1_acc_array_last5 = [];
var C1_acc_array_last5 = [];
var D1_acc_array_last5 = [];
var E1_acc_array_last5 = [];
var F1_acc_array_last5 = [];
var G1_acc_array_last5 = [];
var H1_acc_array_last5 = [];
var I1_acc_array_last5 = [];
var J1_acc_array_last5 = [];
var K1_acc_array_last5 = [];
var L1_acc_array_last5 = [];
var M1_acc_array_last5 = [];
var N1_acc_array_last5 = [];
var O1_acc_array_last5 = [];
var P1_acc_array_last5 = [];
var Q1_acc_array_last5 = [];


var A1_acc_sumlast5 = []; 
var B1_acc_sumlast5 = []; 
var C1_acc_sumlast5 = []; 
var D1_acc_sumlast5 = []; 
var E1_acc_sumlast5 = []; 
var F1_acc_sumlast5 = []; 
var G1_acc_sumlast5 = []; 
var H1_acc_sumlast5 = []; 
var I1_acc_sumlast5 = []; 
var J1_acc_sumlast5 = []; 
var K1_acc_sumlast5 = []; 
var L1_acc_sumlast5 = []; 
var M1_acc_sumlast5 = []; 
var N1_acc_sumlast5 = []; 
var O1_acc_sumlast5 = []; 
var P1_acc_sumlast5 = []; 
var Q1_acc_sumlast5 = []; 



var staircase = function(){
    switch(current_condition){
        case 0:
            newdiff = A1_diff; //we first find the parameters for this condition
            reversals = rev_all[current_condition]; //get the current reversal number
            trial1 = A1_trial;
            wait = A1_wait;
            sign = sign_back1;
            sign_back1 = A1_back1;
            prev_rev = A1_revback1;
            acc = A1_acc;
            acc_sumlast5 = A1_acc_sumlast5;
            acc_array = A1_acc_array;
            acc_array_last5 = A1_acc_array_last5;
            acc_array_last4 = A1_acc_array_last4;
            acc_array_last3 = A1_acc_array_last3;
            acc_array_last2 = A1_acc_array_last2;
            acc_array_last1 = A1_acc_array_last1;
            break;
        case 1:
            newdiff = B1_diff; //we first find the parameters for this condition
            reversals = rev_all[current_condition]; //get the current reversal number
            trial1 = B1_trial;
            wait = B1_wait;
            sign = sign_back1;
            sign_back1 = B1_back1;
            prev_rev = B1_revback1;
            acc = B1_acc;
            acc_sumlast5 = B1_acc_sumlast5;
            acc_array = B1_acc_array;
            acc_array_last5 = B1_acc_array_last5;
            acc_array_last4 = B1_acc_array_last4;
            acc_array_last3 = B1_acc_array_last3;
            acc_array_last2 = B1_acc_array_last2;
            acc_array_last1 = B1_acc_array_last1;
            break;
        case 2:
            newdiff = C1_diff; //we first find the parameters for this condition
            reversals = rev_all[current_condition]; //get the current reversal number
            trial1 = C1_trial;
            wait = C1_wait;
            sign = sign_back1;
            sign_back1 = C1_back1;
            prev_rev = C1_revback1;
            acc = C1_acc;
            acc_sumlast5 = C1_acc_sumlast5;
            acc_array = C1_acc_array;
            acc_array_last5 = C1_acc_array_last5;
            acc_array_last4 = C1_acc_array_last4;
            acc_array_last3 = C1_acc_array_last3;
            acc_array_last2 = C1_acc_array_last2;
            acc_array_last1 = C1_acc_array_last1;
            break;
        case 3:
            newdiff = D1_diff; //we first find the parameters for this condition
            reversals = rev_all[current_condition]; //get the current reversal number
            trial1 = D1_trial;
            wait = D1_wait;
            sign = sign_back1;
            sign_back1 = D1_back1;
            prev_rev = D1_revback1;
            acc = D1_acc;
            acc_sumlast5 = D1_acc_sumlast5;
            acc_array = D1_acc_array;
            acc_array_last5 = D1_acc_array_last5;
            acc_array_last4 = D1_acc_array_last4;
            acc_array_last3 = D1_acc_array_last3;
            acc_array_last2 = D1_acc_array_last2;
            acc_array_last1 = D1_acc_array_last1;
            break;
        case 4:
            newdiff = E1_diff; //we first find the parameters for this condition
            reversals = rev_all[current_condition]; //get the current reversal number
            trial1 = E1_trial;
            wait = E1_wait;
            sign = sign_back1;
            sign_back1 = E1_back1;
            prev_rev = E1_revback1;
            acc = E1_acc;
            acc_sumlast5 = E1_acc_sumlast5;
            acc_array = E1_acc_array;
            acc_array_last5 = E1_acc_array_last5;
            acc_array_last4 = E1_acc_array_last4;
            acc_array_last3 = E1_acc_array_last3;
            acc_array_last2 = E1_acc_array_last2;
            acc_array_last1 = E1_acc_array_last1;
            break;
        case 5:
            newdiff = F1_diff; //we first find the parameters for this condition
            reversals = rev_all[current_condition]; //get the current reversal number
            trial1 = F1_trial;
            wait = F1_wait;
            sign = sign_back1;
            sign_back1 = F1_back1;
            prev_rev = F1_revback1;
            acc = F1_acc;
            acc_sumlast5 = F1_acc_sumlast5;
            acc_array = F1_acc_array;
            acc_array_last5 = F1_acc_array_last5;
            acc_array_last4 = F1_acc_array_last4;
            acc_array_last3 = F1_acc_array_last3;
            acc_array_last2 = F1_acc_array_last2;
            acc_array_last1 = F1_acc_array_last1;
            break;
        case 6:
            newdiff = G1_diff; //we first find the parameters for this condition
            reversals = rev_all[current_condition]; //get the current reversal number
            trial1 = G1_trial;
            wait = G1_wait;
            sign = sign_back1;
            sign_back1 = G1_back1;
            prev_rev = G1_revback1;
            acc = G1_acc;
            acc_sumlast5 = G1_acc_sumlast5;
            acc_array = G1_acc_array;
            acc_array_last5 = G1_acc_array_last5;
            acc_array_last4 = G1_acc_array_last4;
            acc_array_last3 = G1_acc_array_last3;
            acc_array_last2 = G1_acc_array_last2;
            acc_array_last1 = G1_acc_array_last1;
            break;
        case 7:
            newdiff = H1_diff; //we first find the parameters for this condition
            reversals = rev_all[current_condition]; //get the current reversal number
            trial1 = H1_trial;
            wait = H1_wait;
            sign = sign_back1;
            sign_back1 = H1_back1;
            prev_rev = H1_revback1;
            acc = H1_acc;
            acc_sumlast5 = H1_acc_sumlast5;
            acc_array = H1_acc_array;
            acc_array_last5 = H1_acc_array_last5;
            acc_array_last4 = H1_acc_array_last4;
            acc_array_last3 = H1_acc_array_last3;
            acc_array_last2 = H1_acc_array_last2;
            acc_array_last1 = H1_acc_array_last1;
            break;
        case 8:
            newdiff = I1_diff; //we first find the parameters for this condition
            reversals = rev_all[current_condition]; //get the current reversal number
            trial1 = I1_trial;
            wait = I1_wait;
            sign = sign_back1;
            sign_back1 = I1_back1;
            prev_rev = I1_revback1;
            acc = I1_acc;
            acc_sumlast5 = I1_acc_sumlast5;
            acc_array = I1_acc_array;
            acc_array_last5 = I1_acc_array_last5;
            acc_array_last4 = I1_acc_array_last4;
            acc_array_last3 = I1_acc_array_last3;
            acc_array_last2 = I1_acc_array_last2;
            acc_array_last1 = I1_acc_array_last1;
            break;
        case 9:
            newdiff = J1_diff; //we first find the parameters for this condition
            reversals = rev_all[current_condition]; //get the current reversal number
            trial1 = J1_trial;
            wait = J1_wait;
            sign = sign_back1;
            sign_back1 = J1_back1;
            prev_rev = J1_revback1;
            acc = J1_acc;
            acc_sumlast5 = J1_acc_sumlast5;
            acc_array = J1_acc_array;
            acc_array_last5 = J1_acc_array_last5;
            acc_array_last4 = J1_acc_array_last4;
            acc_array_last3 = J1_acc_array_last3;
            acc_array_last2 = J1_acc_array_last2;
            acc_array_last1 = J1_acc_array_last1;
            break;
        case 10:
            newdiff = K1_diff; //we first find the parameters for this condition
            reversals = rev_all[current_condition]; //get the current reversal number
            trial1 = K1_trial;
            wait = K1_wait;
            sign = sign_back1;
            sign_back1 = K1_back1;
            prev_rev = K1_revback1;
            acc = K1_acc;
            acc_sumlast5 = K1_acc_sumlast5;
            acc_array = K1_acc_array;
            acc_array_last5 = K1_acc_array_last5;
            acc_array_last4 = K1_acc_array_last4;
            acc_array_last3 = K1_acc_array_last3;
            acc_array_last2 = K1_acc_array_last2;
            acc_array_last1 = K1_acc_array_last1;
            break;
        case 11:
            newdiff = L1_diff; //we first find the parameters for this condition
            reversals = rev_all[current_condition]; //get the current reversal number
            trial1 = L1_trial;
            wait = L1_wait;
            sign = sign_back1;
            sign_back1 = L1_back1;
            prev_rev = L1_revback1;
            acc = L1_acc;
            acc_sumlast5 = L1_acc_sumlast5;
            acc_array = L1_acc_array;
            acc_array_last5 = L1_acc_array_last5;
            acc_array_last4 = L1_acc_array_last4;
            acc_array_last3 = L1_acc_array_last3;
            acc_array_last2 = L1_acc_array_last2;
            acc_array_last1 = L1_acc_array_last1;
            break;
        case 12:
            newdiff = M1_diff; //we first find the parameters for this condition
            reversals = rev_all[current_condition]; //get the current reversal number
            triaM1 = M1_trial;
            wait = M1_wait;
            sign = sign_back1;
            sign_back1 = M1_back1;
            prev_rev = M1_revback1;
            acc = M1_acc;
            acc_sumlast5 = M1_acc_sumlast5;
            acc_array = M1_acc_array;
            acc_array_last5 = M1_acc_array_last5;
            acc_array_last4 = M1_acc_array_last4;
            acc_array_last3 = M1_acc_array_last3;
            acc_array_last2 = M1_acc_array_last2;
            acc_array_last1 = M1_acc_array_last1;
            break;
        case 13:
            newdiff = N1_diff; //we first find the parameters for this condition
            reversals = rev_all[current_condition]; //get the current reversal number
            triaN1 = N1_trial;
            wait = N1_wait;
            sign = sign_back1;
            sign_back1 = N1_back1;
            prev_rev = N1_revback1;
            acc = N1_acc;
            acc_sumlast5 = N1_acc_sumlast5;
            acc_array = N1_acc_array;
            acc_array_last5 = N1_acc_array_last5;
            acc_array_last4 = N1_acc_array_last4;
            acc_array_last3 = N1_acc_array_last3;
            acc_array_last2 = N1_acc_array_last2;
            acc_array_last1 = N1_acc_array_last1;
            break;
        case 14:
            newdiff = O1_diff; //we first find the parameters for this condition
            reversals = rev_all[current_condition]; //get the current reversal number
            triaO1 = O1_trial;
            wait = O1_wait;
            sign = sign_back1;
            sign_back1 = O1_back1;
            prev_rev = O1_revback1;
            acc = O1_acc;
            acc_sumlast5 = O1_acc_sumlast5;
            acc_array = O1_acc_array;
            acc_array_last5 = O1_acc_array_last5;
            acc_array_last4 = O1_acc_array_last4;
            acc_array_last3 = O1_acc_array_last3;
            acc_array_last2 = O1_acc_array_last2;
            acc_array_last1 = O1_acc_array_last1;
            break;
        case 15:
            newdiff = P1_diff; //we first find the parameters for this condition
            reversals = rev_all[current_condition]; //get the current reversal number
            triaP1 = P1_trial;
            wait = P1_wait;
            sign = sign_back1;
            sign_back1 = P1_back1;
            prev_rev = P1_revback1;
            acc = P1_acc;
            acc_sumlast5 = P1_acc_sumlast5;
            acc_array = P1_acc_array;
            acc_array_last5 = P1_acc_array_last5;
            acc_array_last4 = P1_acc_array_last4;
            acc_array_last3 = P1_acc_array_last3;
            acc_array_last2 = P1_acc_array_last2;
            acc_array_last1 = P1_acc_array_last1;
        case 16:
            newdiff = Q1_diff; //we first find the parameters for this condition
            reversals = rev_all[current_condition]; //get the current reversal number
            triaQ1 = Q1_trial;
            wait = Q1_wait;
            sign = sign_back1;
            sign_back1 = Q1_back1;
            prev_rev = Q1_revback1;
            acc = Q1_acc;
            acc_sumlast5 = Q1_acc_sumlast5;
            acc_array = Q1_acc_array;
            acc_array_last5 = Q1_acc_array_last5;
            acc_array_last4 = Q1_acc_array_last4;
            acc_array_last3 = Q1_acc_array_last3;
            acc_array_last2 = Q1_acc_array_last2;
            acc_array_last1 = Q1_acc_array_last1;
    }

    // if (trial1 >0) {
    //     if (wait == 2){ // 'wait' start off as 0, then after the first correct trial, it goes up to 1;
    //     //after the second correct trial, goes up to 2. When wait ==2, staircase goes down and resets wait to 0
    //         wait = 0;
    //         if (reversals < 2) { //within the first few reversals, we adopt a big step size
    //             newdiff = newdiff-step4;//you could change the number of reversals depending on the task
    //         }
    //         else if (reversals < 3){
    //             newdiff = newdiff-step2;
    //         }
    //         else{
    //             newdiff = newdiff-step1;
    //         }
    //     }
    //     else if (wait == 0){ //when wait ==0, it means the previous trial is wrong and the staircase goes up
    //         if (reversals < 2) {
    //             newdiff = newdiff+step4;
    //         }
    //         else if (reversals < 3){
    //             newdiff = newdiff+step2;
    //         }
    //         else{
    //             newdiff = newdiff+step1;
    //         };
    //         //reversals ++;
    //     };
    // };

    // use the above for the wait/sign 1up2back system, below for the 3of4 acc system

    if (trial_count >7) {
        if (acc_sumlast5 == 5 || acc_sumlast5 == 4){ // 'acc' start off as 0, then after the first correct trial, it goes up to 1;
        //after the second correct trial, goes up to 2. When acc > 3, staircase goes down (75% accuracy)
        	wait = 0;
            if (reversals < 5) { //within the first few reversals, we adopt a big step size
                newdiff = newdiff-step4;//you could change the number of reversals depending on the task
            }
            else if (reversals < 8){
                newdiff = newdiff-step2;
            }
            else{
                newdiff = newdiff-step1;
            }
        }
        else if (acc_sumlast5 == 0 || acc_sumlast5 == 1 || acc_sumlast5 == 2 || acc_sumlast5 == 3){ //when wait ==0, it means the previous trial is wrong and the staircase goes up
            if (reversals < 5) {
                newdiff = newdiff+step4;
            }
            else if (reversals < 8){
                newdiff = newdiff+step2;
            }
            else{
                newdiff = newdiff+step1;
            };
            //reversals ++;
        };
    };

    if (trial_count <8) {
        if (acc_sumlast5 == 5 || acc_sumlast5 == 4){ // 'acc' start off as 0, then after the first correct trial, it goes up to 1;
        //after the second correct trial, goes up to 2. When acc > 3, staircase goes down (75% accuracy)
        	wait = 0;
            if (reversals < 5) { //within the first few reversals, we adopt a big step size
                newdiff = newdiff-step10;//you could change the number of reversals depending on the task
            }
            else if (reversals < 8){
                newdiff = newdiff-step10;
            }
            else{
                newdiff = newdiff-step10;
            }
        }
        else if (acc_sumlast5 == 0 || acc_sumlast5 == 1 || acc_sumlast5 == 2 || acc_sumlast5 == 3){ //when wait ==0, it means the previous trial is wrong and the staircase goes up
            if (reversals < 5) {
                newdiff = newdiff+step10;
            }
            else if (reversals < 8){
                newdiff = newdiff+step10;
            }
            else{
                newdiff = newdiff+step10;
            };
            //reversals ++;
        };
    };

    if (newdiff > 1750){//define the upper and lower bound of the staircase
        newdiff = 1750;
    };
    if (newdiff < 1270){
        newdiff = 1270;
    };


    switch(current_condition){
    //once we decide the stimulus difference of the current trial, 
    //we assign the value to A1_diff/B1_diff... to keep track
        case 0:
            A1_diff=newdiff;
            A1_trial++;
            break;
        case 1:
            B1_diff=newdiff;
            B1_trial++;
            break;
        case 2:
            C1_diff=newdiff;
            C1_trial++;
            break;
        case 3:
            D1_diff=newdiff;
            D1_trial++;
            break;
        case 4:
            E1_diff=newdiff;
            E1_trial++;
            break;
        case 5:
            F1_diff=newdiff;
            F1_trial++;
            break;
        case 6:
            G1_diff=newdiff;
            G1_trial++;
            break;
        case 7:
            H1_diff=newdiff;
            H1_trial++;
            break;
        case 8:
            I1_diff=newdiff;
            I1_trial++;
            break;
        case 9:
            J1_diff=newdiff;
            J1_trial++;
            break;
        case 10:
            K1_diff=newdiff;
            K1_trial++;
            break;
        case 11:
            L1_diff=newdiff;
            L1_trial++;
            break;
        case 12:
            M1_diff=newdiff;
            M1_trial++;
            break;
        case 13:
            N1_diff=newdiff;
            N1_trial++;
            break;
        case 14:
            O1_diff=newdiff;
            O1_trial++;
            break;
        case 15:
            P1_diff=newdiff;
            P1_trial++;  
            break;
        case 16:
            Q1_diff=newdiff;
            Q1_trial++;
    }
    return newdiff;

}

var now = new Date();

//******************************** Questionnaire ******************************************//

var Questionnaire = function() {

	var error_message = "<h1>Oops!</h1><p>Something went wrong submitting your HIT. This might happen if you lose your internet connection. Press the button to resubmit.</p><button id='resubmit'>Resubmit</button>";

	record_responses = function() {

		psiTurk.recordTrialData({'phase':'postquestionnaire', 'status':'submit'});

		$('textarea').each( function(i, val) {
			psiTurk.recordUnstructuredData(this.id, this.value);
		});
		$('select').each( function(i, val) {
			psiTurk.recordUnstructuredData(this.id, this.value);		
		});

	};

	prompt_resubmit = function() {
		document.body.innerHTML = error_message;
		$("#resubmit").click(resubmit);
	};

	resubmit = function() {
		document.body.innerHTML = "<h1>Trying to resubmit...</h1>";
		reprompt = setTimeout(prompt_resubmit, 10000);
		
		psiTurk.saveData({
			success: function() {
			    clearInterval(reprompt); 
                //psiTurk.computeBonus('compute_bonus', function(){
                	psiTurk.completeHIT(); // when finished saving compute bonus, the quit
                //}); 


			}, 
			error: prompt_resubmit
		});
	};

	// Load the questionnaire snippet 
	psiTurk.showPage('postquestionnaire.html');
	psiTurk.recordTrialData({'phase':'postquestionnaire', 'status':'begin'});
	
	$("#next").click(function () {
	    record_responses();
	    psiTurk.saveData({
            success: function(){
                //psiTurk.computeBonus('compute_bonus', function() { 
                	psiTurk.completeHIT(); // when finished saving compute bonus, the quit
                //}); 
            }, 
            error: prompt_resubmit});
	});
    
	
};

// Task object to keep track of the current phase
var currentview;

// ********** Run Task *********

$(window).load( function(){
    psiTurk.doInstructions(
    	instructionPages, // a list of pages you want to display in sequence
    	function() { currentview = new Practice1(); } // what you want to do when you are done with instructions
    );
});
