var sliderPosition = [];

for (var i = 100; i < 129; i++){
	sliderPosition[i]= {"vmixOutput": 100}  	
}


//
// Honestly I have no idea where these halfway values came from or what they mean
// the vMixOutput values were captured from vMix as I changed my sliders by 1 step
//

sliderPosition[100]= {"vmixOutput": 100}  
sliderPosition[99] = {"vmixOutput": 96}  
sliderPosition[98] = {"vmixOutput": 92}  
sliderPosition[97] = {"vmixOutput": 88}		// -3sliderPosition}  
sliderPosition[96] = {"vmixOutput": 84}  
sliderPosition[95] = {"vmixOutput": 81}  
sliderPosition[94] = {"vmixOutput": 78}	    // -6sliderPosition}  
sliderPosition[93] = {"vmixOutput": 74}  
sliderPosition[92] = {"vmixOutput": 71}  
sliderPosition[91] = {"vmixOutput": 68}		//-9sliderPosition}  
sliderPosition[90] = {"vmixOutput": 65}		//-10sliderPosition}  
sliderPosition[89] = {"vmixOutput": 62}  
sliderPosition[88] = {"vmixOutput": 59}		//-12sliderPosition}  
sliderPosition[87] = {"vmixOutput": 57}  
sliderPosition[86] = {"vmixOutput": 54}  
sliderPosition[85] = {"vmixOutput": 52}  
sliderPosition[84] = {"vmixOutput": 49}  
sliderPosition[83] = {"vmixOutput": 47}  
sliderPosition[82] = {"vmixOutput": 45}		//-18sliderPosition}  
sliderPosition[81] = {"vmixOutput": 43}  
sliderPosition[80] = {"vmixOutput": 40}		//-20sliderPosition}  
sliderPosition[79] = {"vmixOutput": 38}  
sliderPosition[78] = {"vmixOutput": 37}  
sliderPosition[77] = {"vmixOutput": 35}  
sliderPosition[76] = {"vmixOutput": 33}  
sliderPosition[75] = {"vmixOutput": 31}		//-25sliderPosition}  
sliderPosition[74] = {"vmixOutput": 29}  
sliderPosition[73] = {"vmixOutput": 28}  
sliderPosition[72] = {"vmixOutput": 26}  
sliderPosition[71] = {"vmixOutput": 25}  
sliderPosition[70] = {"vmixOutput": 24} 	//-30sliderPosition}  
sliderPosition[69] = {"vmixOutput": 22}  
sliderPosition[68] = {"vmixOutput": 21}  
sliderPosition[67] = {"vmixOutput": 20}  
sliderPosition[66] = {"vmixOutput": 18}  
sliderPosition[65] = {"vmixOutput": 17}  
sliderPosition[64] = {"vmixOutput": 16}  
sliderPosition[63] = {"vmixOutput": 15}  
sliderPosition[62] = {"vmixOutput": 14}  
sliderPosition[61] = {"vmixOutput": 13}  
sliderPosition[60] = {"vmixOutput": 12}     //-40sliderPosition}  
sliderPosition[59] = {"vmixOutput": 12}  
sliderPosition[58] = {"vmixOutput": 11}  
sliderPosition[57] = {"vmixOutput": 10}  
sliderPosition[56] = {"vmixOutput": 9}  
sliderPosition[55] = {"vmixOutput": 9}  
sliderPosition[54] = {"vmixOutput": 8}  
sliderPosition[53] = {"vmixOutput": 7}  
sliderPosition[52] = {"vmixOutput": 7}  
sliderPosition[51] = {"vmixOutput": 6}  
sliderPosition[50] = {"vmixOutput": 6}      //-50}  
sliderPosition[49] = {"vmixOutput": 5}  
sliderPosition[48] = {"vmixOutput": 5}  
sliderPosition[47] = {"vmixOutput": 4}  
sliderPosition[46] = {"vmixOutput": 4}  
sliderPosition[45] = {"vmixOutput": 4}  
sliderPosition[44] = {"vmixOutput": 3}  
sliderPosition[43] = {"vmixOutput": 3}  
sliderPosition[42] = {"vmixOutput": 3}  
sliderPosition[41] = {"vmixOutput": 2}  
sliderPosition[40] = {"vmixOutput": 2}      //-60}  
sliderPosition[39] = {"vmixOutput": 2}  
sliderPosition[38] = {"vmixOutput": 2}  
sliderPosition[37] = {"vmixOutput": 1}  
sliderPosition[36] = {"vmixOutput": 1}  
sliderPosition[35] = {"vmixOutput": 1}  
sliderPosition[34] = {"vmixOutput": 1}  
sliderPosition[33] = {"vmixOutput": 1}  
sliderPosition[32] = {"vmixOutput": 1}  
sliderPosition[31] = {"vmixOutput": 0}  
sliderPosition[30] = {"vmixOutput": 0}  // little bump here}  
sliderPosition[29] = {"vmixOutput": 0}  
sliderPosition[28] = {"vmixOutput": 0}  
sliderPosition[27] = {"vmixOutput": 0}  
sliderPosition[26] = {"vmixOutput": 0}  
sliderPosition[25] = {"vmixOutput": 0}  
sliderPosition[24] = {"vmixOutput": 0}  
sliderPosition[23] = {"vmixOutput": 0}  
sliderPosition[22] = {"vmixOutput": 0}  
sliderPosition[21] = {"vmixOutput": 0}  
sliderPosition[20] = {"vmixOutput": 0}  
sliderPosition[19] = {"vmixOutput": 0}  
sliderPosition[18] = {"vmixOutput": 0}  
sliderPosition[17] = {"vmixOutput": 0}  
sliderPosition[16] = {"vmixOutput": 0}  
sliderPosition[15] = {"vmixOutput": 0}  
sliderPosition[14] = {"vmixOutput": 0}  
sliderPosition[13] = {"vmixOutput": 0}  
sliderPosition[12] = {"vmixOutput": 0}  
sliderPosition[11] = {"vmixOutput": 0}  
sliderPosition[10] = {"vmixOutput": 0}				//-90}  
sliderPosition[9]  = {"vmixOutput": 0}  
sliderPosition[8]  = {"vmixOutput": 0}  
sliderPosition[7]  = {"vmixOutput": 0}  
sliderPosition[6]  = {"vmixOutput": 0}  
sliderPosition[5]  = {"vmixOutput": 0}  
sliderPosition[4]  = {"vmixOutput": 0}  
sliderPosition[3]  = {"vmixOutput": 0}  
sliderPosition[2]  = {"vmixOutput": 0}  
sliderPosition[1]  = {"vmixOutput": 0}  
sliderPosition[0]  = {"vmixOutput": 0}  

sliderPosition[0] = {"m":0,"l":0,"h":0}	

for ( i = 1; i < 127; i++){
	sliderPosition[i] = {"m":sliderPosition[i].vmixOutput,"l":(sliderPosition[i].vmixOutput+sliderPosition[i-1].m)/2,"h":(sliderPosition[i].vmixOutput+sliderPosition[i+1].vmixOutput)/2}	
}

module.exports = {sliderPosition,sliderPosition}