function initBodyMap(){
  var pnts = new Array();
  pnts[0] = {label: '0', id: 0,lat: -29.981386500, lng: -51.135263400, proxpnt : [] };
  pnts[1] = {label: '1',id: 1, lat: -29.983115000, lng: -51.135134700, proxpnt : [] };
  pnts[2] = {label: '2',id: 2, lat: -29.984806300, lng: -51.135048900, proxpnt : [] };
  pnts[3] = {label: '3',id: 3, lat:-29.986516200, lng: -51.134898700, proxpnt : [] };
  pnts[4] = {label: '4',id: 4, lat: -29.988244600, lng: -51.134705500, proxpnt : [] };
  pnts[5] = {label: '5',id: 5, lat: -29.988114500, lng: -51.133997400, proxpnt : [] };
  pnts[6] = {label: '6',id: 6, lat: -29.986441800, lng: -51.134233500, proxpnt : [] };
  pnts[7] = {label: '7',id: 7, lat: -29.984750600, lng: -51.134276400, proxpnt : [] };
  pnts[8] = {label: '8',id: 8, lat:-29.983077800, lng: -51.134383700, proxpnt : [] };
  pnts[9] = {label: '9',id: 9, lat: -29.981405100, lng: 	-51.134405100, proxpnt : [] };
  pnts[10] = {label: '10',id: 10, lat:-29.981367900, lng:	-51.133697000, proxpnt : [] };
  pnts[11] = {label: '11',id: 11, lat: -29.982984900	, lng: -51.133589700, proxpnt : [] };
  pnts[12] = {label: '12',id: 12, lat: -29.984713400	, lng: -51.133439500, proxpnt : [] };
  pnts[13] = {label: '13',id: 13, lat: -29.986404700	, lng: -51.133289300, proxpnt : [] };
  pnts[14] = {label: '14',id: 14, lat: -29.988077300	, lng: -51.133267900, proxpnt : [] };
  pnts[15] = {label: '15',id: 15, lat: -29.988077300	, lng: -51.132495400, proxpnt : [] };
  pnts[16] = {label: '16',id: 16, lat: -29.986367500	, lng: -51.132559800, proxpnt : [] };
  pnts[17] = {label: '17',id: 17, lat: -29.984676200	, lng: -51.132731400, proxpnt : [] };
  pnts[18] = {label: '18',id: 18, lat: -29.981293500	, lng: -51.132924600, proxpnt : [] };
  pnts[19] = {label: '19',id: 19, lat: -29.981256400	, lng: -51.132173500, proxpnt : [] };
  pnts[20] = {label: '20',id: 20, lat: -29.982260000	, lng: -51.132087700, proxpnt : [] };
  pnts[21] = {label: '21',id: 21, lat: -29.982947700	, lng:-51.132087700, proxpnt : [] };
  pnts[22] = {label: '22',id: 22, lat: -29.983654000	, lng: -51.132023300, proxpnt : [] };
  pnts[23] = {label: '23',id: 23, lat: -29.984676200	, lng: -51.131894600, proxpnt : [] };
  pnts[24] = {label: '24',id: 24, lat: -29.986311700	, lng: -51.131787300, proxpnt : [] };
  pnts[25] = {label: '25',id: 25, lat: -29.987928700	, lng:-51.131658600, proxpnt : [] };
  pnts[26] = {label: '26',id: 26, lat: -29.987891500	, lng: -51.130971900, proxpnt : [] };
  pnts[27] = {label: '27',id: 27, lat: -29.986330300	, lng: -51.131100700, proxpnt : [] };
  pnts[28] = {label: '28',id: 28, lat: -29.984620500	, lng: -51.131143600, proxpnt : [] };
  pnts[29] = {label: '29',id: 29, lat:-29.983579600	, lng: -51.131293800, proxpnt : [] };
  pnts[30] = {label: '30',id: 30, lat:-29.982222900	, lng: -51.131379600, proxpnt : [] };
  pnts[31] = {label: '31',id: 31, lat: -29.981144900	, lng: -51.131401100, proxpnt : [] };
  pnts[32] = {label: '32',id: 32, lat: -29.981182000		, lng: -51.130757300, proxpnt : [] };
  pnts[33] = {label: '33',id: 33, lat: -29.982241400	, lng: -51.130607100, proxpnt : []};
  pnts[34] = {label: '34',id: 34, lat: -29.983486700		, lng: -51.130521300, proxpnt : [] };
  pnts[35] = {label: '35',id: 35, lat: 	-29.984527500	, lng: -51.130456900, proxpnt : [] };
  pnts[36] = {label: '36',id: 36, lat: -29.987947300		, lng: -51.130199400, proxpnt : [] };
  pnts[37] = {label: '37',id: 37, lat: -29.987928700	, lng: -51.129362600, proxpnt : [] };
  pnts[38] = {label: '38',id: 38, lat: -29.986181600	, lng:-51.129512800, proxpnt : [] };
  pnts[39] = {label: '39',id: 39, lat: -29.984490400	, lng: -51.129663000, proxpnt : [] };
  pnts[40] = {label: '40',id: 40, lat: -29.981107700	, lng: -51.129941900, proxpnt : [] };
  pnts[41] = {label: '41',id: 41, lat: -29.981051900	, lng: -51.129190900, proxpnt : [] };
  pnts[42] = {label: '42',id: 42, lat: -29.984508900	, lng: -51.128890500, proxpnt : [] };
  pnts[43] = {label: '43',id: 43, lat: -29.987835700	, lng:-51.128611600, proxpnt : [] };
  //fim criação dos pontos
  //cria mapa
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 16,
    center: pnts[28],
  });
  //fim cria mapa
  //inserir marcadores no mapa
  var iconBase ='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAC9ElEQVRYR7WWS2sUQRSFz60JMRtFEHFhMtU9D5+Q4CK6iKioGEEDooKK4E9QjI8sdKcb8wB3/gBBBUEDAUVRTEIWihFiFllkOv3ITLIKKi4SNdN1pXUiY9LT3fOa5VSdc76aunNvEcr4JJoT6ViMzzP4EBR2KahNnpyEWBCgKQX1jpR6YmSzM1FtKcrGbZq2QwH3wOjy8kI0TAqDLoseM2dmwvzDzJCOa5ddVn1CiMYws+J1pdRPERNXDdt+EKQLBEhq2n1iXCknePVeAvdnHOdGKY+SAGmp32bwnWrCV7TE6MnM2r1+Xr4AiXhivyA1AkDUAgCAS4SOjG1/WPsLrU2gtJQTDGqtUXjBhscNx2kPBUjHEyeZ1FBtwwtugjoNy3pd7L3mChJSPhWgs3UBUHhkZO2LQQCUatG+QGBjPQAUeMF0nM0lAbZLqbsgsx7hK57CzTdP53Jz//4hxWHJeLyDSIzVE0ApsdfMmh/9AaQ8TKC39QQgQQczljXqC6DremtM8ed6AriC2izLmvQFSKVSG7Cc/xZh4FTKqBaXf62fn59f9AXwvky2aFMksLPShCAdgSczjtMW2AeSUvYSqOTwqAaMwX0zjnMzEKCedaCUaDez5ngggLeYiMdHBIkD1Zx2tVYxJsxZe0/oLCgAHBEk3tQSAEyXjFnrYSQAb1NKai8BHK8NBE83O/ruYQznIwN4D1BBahICTdVCMPj0jOM89/MJfpJJ/TqB+6oBIMaLzKx9opRH2KNUJKV8RaCjFUJ8Rb6h1ZgzcpUCQNf1LaT4kwC2lgtB4DMZx3kW3JwiuKY1bR+7GC6nHvyaTtk1UCxIato5YjyOMicUYci07VMAVNj5wmrgP31Kym6ABkL6/diS6x7L5XJLYeHeelkAniAt9bsMvuVnzgrvaV1Dp2EY36OEVwTwt0npAwB3F4coVqOisbGrnPCKAf5AtOj9EHytADGYJ1ywbftH1JOv7Cv7CooD/lyHQpORtbwRG1pwfnC/AfUDCDAO7gZXAAAAAElFTkSuQmCC';
  //var p3 = document.getElementById('formGroupExampleInput3').value;
  for (var i = 0; i < pnts.length; i++) {
    var marker = new google.maps.Marker({
      position: pnts[i],
      map: map,
      icon: iconBase,
      label: {
        fontSize: "1em",
        fontWeight: "bold",
        text: pnts[i].label,
        color: 'white',
      },
      title: 'Ponto '+ pnts[i].id
    });
  }
}
//fim marcadores
function initMap() {
  //criação dos pontos
  var pnts = new Array();
  function addpnt(pntf1, pntf2) {
    pntf1.proxpnt.push(pntf2);
    addpnt1(pntf2, pntf1);
  }
  function addpnt1(pntf1, pntf2) {
    pntf1.proxpnt.push(pntf2);
  }
  pnts[0] = {label: '0', id: 0,lat: -29.981386500, lng: -51.135263400, proxpnt : [] };
  pnts[1] = {label: '1',id: 1, lat: -29.983115000, lng: -51.135134700, proxpnt : [] };
  pnts[2] = {label: '2',id: 2, lat: -29.984806300, lng: -51.135048900, proxpnt : [] };
  pnts[3] = {label: '3',id: 3, lat:-29.986516200, lng: -51.134898700, proxpnt : [] };
  pnts[4] = {label: '4',id: 4, lat: -29.988244600, lng: -51.134705500, proxpnt : [] };
  pnts[5] = {label: '5',id: 5, lat: -29.988114500, lng: -51.133997400, proxpnt : [] };
  pnts[6] = {label: '6',id: 6, lat: -29.986441800, lng: -51.134233500, proxpnt : [] };
  pnts[7] = {label: '7',id: 7, lat: -29.984750600, lng: -51.134276400, proxpnt : [] };
  pnts[8] = {label: '8',id: 8, lat:-29.983077800, lng: -51.134383700, proxpnt : [] };
  pnts[9] = {label: '9',id: 9, lat: -29.981405100, lng: 	-51.134405100, proxpnt : [] };
  pnts[10] = {label: '10',id: 10, lat:-29.981367900, lng:	-51.133697000, proxpnt : [] };
  pnts[11] = {label: '11',id: 11, lat: -29.982984900	, lng: -51.133589700, proxpnt : [] };
  pnts[12] = {label: '12',id: 12, lat: -29.984713400	, lng: -51.133439500, proxpnt : [] };
  pnts[13] = {label: '13',id: 13, lat: -29.986404700	, lng: -51.133289300, proxpnt : [] };
  pnts[14] = {label: '14',id: 14, lat: -29.988077300	, lng: -51.133267900, proxpnt : [] };
  pnts[15] = {label: '15',id: 15, lat: -29.988077300	, lng: -51.132495400, proxpnt : [] };
  pnts[16] = {label: '16',id: 16, lat: -29.986367500	, lng: -51.132559800, proxpnt : [] };
  pnts[17] = {label: '17',id: 17, lat: -29.984676200	, lng: -51.132731400, proxpnt : [] };
  pnts[18] = {label: '18',id: 18, lat: -29.981293500	, lng: -51.132924600, proxpnt : [] };
  pnts[19] = {label: '19',id: 19, lat: -29.981256400	, lng: -51.132173500, proxpnt : [] };
  pnts[20] = {label: '20',id: 20, lat: -29.982260000	, lng: -51.132087700, proxpnt : [] };
  pnts[21] = {label: '21',id: 21, lat: -29.982947700	, lng:-51.132087700, proxpnt : [] };
  pnts[22] = {label: '22',id: 22, lat: -29.983654000	, lng: -51.132023300, proxpnt : [] };
  pnts[23] = {label: '23',id: 23, lat: -29.984676200	, lng: -51.131894600, proxpnt : [] };
  pnts[24] = {label: '24',id: 24, lat: -29.986311700	, lng: -51.131787300, proxpnt : [] };
  pnts[25] = {label: '25',id: 25, lat: -29.987928700	, lng:-51.131658600, proxpnt : [] };
  pnts[26] = {label: '26',id: 26, lat: -29.987891500	, lng: -51.130971900, proxpnt : [] };
  pnts[27] = {label: '27',id: 27, lat: -29.986330300	, lng: -51.131100700, proxpnt : [] };
  pnts[28] = {label: '28',id: 28, lat: -29.984620500	, lng: -51.131143600, proxpnt : [] };
  pnts[29] = {label: '29',id: 29, lat:-29.983579600	, lng: -51.131293800, proxpnt : [] };
  pnts[30] = {label: '30',id: 30, lat:-29.982222900	, lng: -51.131379600, proxpnt : [] };
  pnts[31] = {label: '31',id: 31, lat: -29.981144900	, lng: -51.131401100, proxpnt : [] };
  pnts[32] = {label: '32',id: 32, lat: -29.981182000		, lng: -51.130757300, proxpnt : [] };
  pnts[33] = {label: '33',id: 33, lat: -29.982241400	, lng: -51.130607100, proxpnt : []};
  pnts[34] = {label: '34',id: 34, lat: -29.983486700		, lng: -51.130521300, proxpnt : [] };
  pnts[35] = {label: '35',id: 35, lat: 	-29.984527500	, lng: -51.130456900, proxpnt : [] };
  pnts[36] = {label: '36',id: 36, lat: -29.987947300		, lng: -51.130199400, proxpnt : [] };
  pnts[37] = {label: '37',id: 37, lat: -29.987928700	, lng: -51.129362600, proxpnt : [] };
  pnts[38] = {label: '38',id: 38, lat: -29.986181600	, lng:-51.129512800, proxpnt : [] };
  pnts[39] = {label: '39',id: 39, lat: -29.984490400	, lng: -51.129663000, proxpnt : [] };
  pnts[40] = {label: '40',id: 40, lat: -29.981107700	, lng: -51.129941900, proxpnt : [] };
  pnts[41] = {label: '41',id: 41, lat: -29.981051900	, lng: -51.129190900, proxpnt : [] };
  pnts[42] = {label: '42',id: 42, lat: -29.984508900	, lng: -51.128890500, proxpnt : [] };
  pnts[43] = {label: '43',id: 43, lat: -29.987835700	, lng:-51.128611600, proxpnt : [] };
  //fim criação dos pontos

  //colocação dos vizinhos
  addpnt(pnts[0],pnts[1]);
  addpnt(pnts[0],pnts[9]);
  addpnt(pnts[1], pnts[2]);
  addpnt(pnts[1], pnts[8]);
  addpnt(pnts[2], pnts[3]);
  addpnt(pnts[2], pnts[7]);
  addpnt(pnts[3], pnts[4]);
  addpnt(pnts[3], pnts[6]);
  addpnt(pnts[4], pnts[5]);
  addpnt(pnts[5], pnts[6]);
  addpnt(pnts[5], pnts[14]);
  addpnt(pnts[6], pnts[7]);
  addpnt(pnts[6], pnts[13]);
  addpnt(pnts[7], pnts[8]);
  addpnt(pnts[7], pnts[12]);
  addpnt(pnts[8], pnts[9]);
  addpnt(pnts[8], pnts[11]);
  addpnt(pnts[9], pnts[10]);
  addpnt(pnts[10], pnts[11]);
  addpnt(pnts[10], pnts[18]);
  addpnt(pnts[11], pnts[12]);
  addpnt(pnts[12], pnts[13]);
  addpnt(pnts[12], pnts[17]);
  addpnt(pnts[13], pnts[14]);
  addpnt(pnts[13], pnts[16]);
  addpnt(pnts[14], pnts[15]);
  addpnt(pnts[15], pnts[16]);
  addpnt(pnts[15], pnts[25]);
  addpnt(pnts[16], pnts[17]);
  addpnt(pnts[16], pnts[24]);
  addpnt(pnts[17], pnts[23]);
  addpnt(pnts[18], pnts[19]);
  addpnt(pnts[19], pnts[20]);
  addpnt(pnts[19], pnts[31]);
  addpnt(pnts[20], pnts[21]);
  addpnt(pnts[20], pnts[30]);
  addpnt(pnts[21], pnts[22]);
  addpnt(pnts[22], pnts[23]);
  addpnt(pnts[22], pnts[29]);
  addpnt(pnts[23], pnts[24]);
  addpnt(pnts[23], pnts[28]);
  addpnt(pnts[24], pnts[25]);
  addpnt(pnts[24], pnts[27]);
  addpnt(pnts[25], pnts[26]);
  addpnt(pnts[26], pnts[27]);
  addpnt(pnts[26], pnts[36]);
  addpnt(pnts[27], pnts[28]);
  addpnt(pnts[28], pnts[35]);
  addpnt(pnts[28], pnts[29]);
  addpnt(pnts[29], pnts[34]);
  addpnt(pnts[30], pnts[31]);
  addpnt(pnts[30], pnts[33]);
  addpnt(pnts[31], pnts[32]);
  addpnt(pnts[32], pnts[33]);
  addpnt(pnts[32], pnts[40]);
  addpnt(pnts[33], pnts[34]);
  addpnt(pnts[34], pnts[35]);
  addpnt(pnts[35], pnts[39]);
  addpnt(pnts[36], pnts[37]);
  addpnt(pnts[37], pnts[43]);
  addpnt(pnts[37], pnts[38]);
  addpnt(pnts[38], pnts[39]);
  addpnt(pnts[39], pnts[42]);
  addpnt(pnts[39], pnts[40]);
  addpnt(pnts[40], pnts[41]);
  addpnt(pnts[41], pnts[42]);
  addpnt(pnts[42], pnts[43]);
  //fim vizinhos
  //cria mapa
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 16,
    center: pnts[28],
  });
  //fim cria mapa
  //Desenharua code
  var Ruas = [];
  for(var c = 0; c < pnts.length; c++){
    for(var d = 0; d < pnts[c].proxpnt.length; d++){
      Ruas.push({lat: pnts[c].lat, lng: pnts[c].lng});
      Ruas.push({lat: pnts[c].proxpnt[d].lat, lng: pnts[c].proxpnt[d].lng});
    }
    var DesenharRota = new google.maps.Polyline({
      path: Ruas,
      geodesic: true,
      strokeColor: 'grey',
      strokeOpacity: 0.3,
      strokeWeight: 7
    });
    DesenharRota.setMap(map);
    var Ruas = [];
  }
  //fim Desenharua code
  //inserir marcadores no mapa
  var iconBase = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAC9ElEQVRYR7WWS2sUQRSFz60JMRtFEHFhMtU9D5+Q4CK6iKioGEEDooKK4E9QjI8sdKcb8wB3/gBBBUEDAUVRTEIWihFiFllkOv3ITLIKKi4SNdN1pXUiY9LT3fOa5VSdc76aunNvEcr4JJoT6ViMzzP4EBR2KahNnpyEWBCgKQX1jpR6YmSzM1FtKcrGbZq2QwH3wOjy8kI0TAqDLoseM2dmwvzDzJCOa5ddVn1CiMYws+J1pdRPERNXDdt+EKQLBEhq2n1iXCknePVeAvdnHOdGKY+SAGmp32bwnWrCV7TE6MnM2r1+Xr4AiXhivyA1AkDUAgCAS4SOjG1/WPsLrU2gtJQTDGqtUXjBhscNx2kPBUjHEyeZ1FBtwwtugjoNy3pd7L3mChJSPhWgs3UBUHhkZO2LQQCUatG+QGBjPQAUeMF0nM0lAbZLqbsgsx7hK57CzTdP53Jz//4hxWHJeLyDSIzVE0ApsdfMmh/9AaQ8TKC39QQgQQczljXqC6DremtM8ed6AriC2izLmvQFSKVSG7Cc/xZh4FTKqBaXf62fn59f9AXwvky2aFMksLPShCAdgSczjtMW2AeSUvYSqOTwqAaMwX0zjnMzEKCedaCUaDez5ngggLeYiMdHBIkD1Zx2tVYxJsxZe0/oLCgAHBEk3tQSAEyXjFnrYSQAb1NKai8BHK8NBE83O/ruYQznIwN4D1BBahICTdVCMPj0jOM89/MJfpJJ/TqB+6oBIMaLzKx9opRH2KNUJKV8RaCjFUJ8Rb6h1ZgzcpUCQNf1LaT4kwC2lgtB4DMZx3kW3JwiuKY1bR+7GC6nHvyaTtk1UCxIato5YjyOMicUYci07VMAVNj5wmrgP31Kym6ABkL6/diS6x7L5XJLYeHeelkAniAt9bsMvuVnzgrvaV1Dp2EY36OEVwTwt0npAwB3F4coVqOisbGrnPCKAf5AtOj9EHytADGYJ1ywbftH1JOv7Cv7CooD/lyHQpORtbwRG1pwfnC/AfUDCDAO7gZXAAAAAElFTkSuQmCC';
  var iconS = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAADcklEQVRYR+2XTWxUVRTH/+fc1wH6OYMkmJiALMAqCISPDjgphc6I2riokJIAcUNICWGBGyvGxJgYoxhYaGBRQggENoZAuioJ2mkrNO1gIchX1bjpggAKaWc6BdrOO8e80WmnzXQ6b6R0w9283Pfevf/fO+f/znmPmpubZw3PLj0MoZ1wBuO052n045qamqHkfJoHNYUvHwFo3zgdke9rQ5X7J2o/qX5roWD4Dee8kOktroz8Rl9A/g8jNf3U0QeGV5X8hoVFqVMEfVtCgbmpjWPBikqycZAM1k8Qe6jQ86ymsSjcdS0fEGoKd6izsLY6QM5x4jwerGgQwdfMYAiiYL0i4ASLXQ7mRWOi0qowX5a0RFrdgOQCkASUZash5cvh3bs3Cdp37JhSrB/WhXOHIbobjLL/hH+G0lfF4cjFbCBaV2cGH/Z+mxOAiNj29nrjbOirrx8FSM0fvecvLXhtVRQ9N4UTw5wUVr2pxI1ky7nitl/up2AUoHhoXRVBvoHCnzNAaWu3lXryyUD+DgRKPBUrY/zHbdDTx6MBEGPdZXvkDgADslZC7VF/PVOAUUCxYZ09uZ1Ud6pl3ifbHpcNLSwGPY4nz+UMkC0F2SLjbWz0DPo85YkNm2+AAGq5uLisrfPPeLAi6a1pB8jkGUfYNUAuHpjKI+nXC3447i4FMw6QrweeWQpmHGDGU1BS1e2Jt699XarevQUorPYf1xTqnNv9O3Y8mawwZTOlOxMCypC/AJ6fXlFEMESMNoKeGanbdRpsMpbqTCCuXsOUqAC9ADklFYzEQhFTnuySzpg1G7JkGUZ+v1r20oVIzGlW2SLjEkAvMeiTwpYrnekRiG1cPc9Y1hZR2UOgVcmuWWASWLLCsm90+Xxt1/snA3GRgjUHiyq7P53qy2cg6N9EIp+DaeO/kDIA0InEO1v3q3fuWGqOHlXTcx3c82tuhWhcF8lhMlC9dgNYPyPlzWOps+/S/AWvQAT04N4gGEVOi2fmhil7QQ6aGW+Jh9a/SZrYY4O2MvBymo+URdsZ5kBha1dk2gDSqaJv+xcbwauqapPonfQPlOcCkC2KLwBeRGDmI3A+fCnK4FJA1kGNAWkHBP21oYAv3xrgZl3Gn1NVfPdBMPCRm43yvZec3/OhOd5DpPIhhFQJp0YeeRu2bVs6nO+mbtb9A56QI3nzmpcOAAAAAElFTkSuQmCC';
  var iconE = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAADgUlEQVRYR+2XUWgUVxSG/3Nnu00b3CTakjSFRAvBNGoJIia6WdtoWnBMS2qppQR9UvJQqFXIRhFEkGKTrkKlL74UxApFqARa11ZK4ia7jfrQliaGCD64YtQ2DcnGrJpk5xyZgYkbSXZ3VtO8OC/DvWfuPd/858w5dygYDL44meM5CqZGmJfCKffDWLOu6xPWeJ4vau8IfwvQZzP8MB9vqPPtftJ3IKKXQqTCmmdEx31VA4foED8NI7X/FhmBQr4IVWmKFQv1MGNka513sb1xW3iLj5hbQbQu2RmD/yOmsyDXCf+Gn/7IBoTaOyJiLmzY6CXz/uS4rWuzn0SOQCkFQkwEV4SRgEK5ApbZTgncaZB2uKXmXKcTkLQAX3frFmBJ3lso9lTAt3SHBRqJnpb7UzH8eefcUSLZCUGeFRkyuojUl37v+QupQM6c+ViLvhZvywiAwUZNyXbN3NBb2jgNYI+PX9rsKcytjA2OXmUDCWXOC6EXghNI4Ed/bfCuDSMCCoTr3zYw9ZUGrSpjgBbfLy77zecCaQ1/sGhZ3qqx2/cGMGU8eCwAuwZFJfpB0IhVJYin8+uZAtiADMal6A+fEkkjkVbPYsyIhtuVi8lE3JrLGCBVCFIp0zd0zB2PF5YvL9r4N0C4NnyhbO/6X6/buTXvALPljAnsGCCTHEiXI8n232+edhaCBQfINgeeWQgWHGDBQ/CgptqdE+l5c+Wrm/pEgGtDoTXjifjVd9/YZVWcuaQ2S/ZsdmdJyGZllX9JUeHMbogJBbkIUd+vK/nkFJGWMYijz9B2ysJRiOq3ar1CqcZcbnVJAC+oHBQvWo679//K+7z6/Nhcb24r5RSgG0q1NHt/7klWIND5/itw8VYBNwG02rRp5EoUeypcd4YHCvbUto8+dQgC3XrreM3a/elOPq3hLbXEfJCI3rEgme+JUt9VFum7c90F06HpunFSbsV6MThmCZm+F6Tq6bPZAiF9gxAOgPCebTeYB5e8XPy6QDDy8J+4AnLNFq+g/Gl7gVMA+/ljIX0VKzQJ+CNAFU3nkZnQJCEi2tfsC16eN4Bk8LZQfZnSeKkYYghTf/IB5X8BSKXic4DnCiy8Amc7umMKygNwNUTTQBIBY7ShzluQbQ1wsm7Wn1MRfPPhJu8XTjbK9lkyf88nXsoPkPB2MIkQTk4N5/u3bVsxme2mTtY9Au04JVbz4IatAAAAAElFTkSuQmCC';
  var iconO = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAB1ElEQVQ4T5XVyavPURjH8dfNuMcC2Rh2ioV/wFBshDJmKhtFKUqGfwALFkRKIklc92Jhowz/gLKxJUOGwt4YfW7n1PHr+7v3d8/ue77PeZ9n+DzPGdK9ZmIbNmAF5hazT3iO+7iL773Hhzp4O3C2gfS500ccxnBr0AKn4CL2NwZf8BSvEduFWIXZjc0lHMKf7LXAyw3sM47iNn73uDgNu3AGc8q/QA+2wIR5qzn4GOu7ctTYzMMjLC17yflwPEwBElISH89eYk0x3jgBdD5eFE8/YFGAe3G93LIbI3iAtQNC9+FqPR/gPWxCCpAwkrN4PSh0OmMVn4XRAN9hAe5ge5OjyUCjyc14G+AvTMUpnOyp6KDQ0ziGny0wmyc6VDwINM4cr8AachSf0netiaA15DdtUb6WoiQFk4G2RRkJMFK5UQiRwLV+zdun+umaK+XMzirsV8W7SGd5kUE/bhv+Eywrvf0eS2ovJ3fp26x0yjpE+eNBH2J1YxDZjOmwrkyaA+UjnqZqN1O5HmpytqfIrE6dC2Xi/DdtMr7ON9BwvuEZkpK/WIyVpSvqPTlzpGt8VYOtOIc0/ngrOcuAHW2NuiZ2/s/AFmTatE9AerY+AQH96L3xH1J4duEnl2GMAAAAAElFTkSuQmCC';
  var p1 = document.getElementById('formGroupExampleInput').value;
  var p2 = document.getElementById('formGroupExampleInput2').value;
  //começo obstaculo
  var p3 = document.getElementById('formGroupExampleInput3').value;
  if(p3.length != 0) {
    caminhodanificado(p3);
  }
  function caminhodanificado(npnt){
    for(var i = 0; i < pnts[npnt].proxpnt.length; i++){
      rmvpnt(pnts[npnt].proxpnt[i],pnts[npnt]);
    }
    for(i; i>=0; i--){
      pnts[npnt].pop;
    }
     
  }
  // //fim obstaculo
  for (var i = 0; i < pnts.length; i++) {
    if(i == 0){
      if(p1 == 0){
        var marker = new google.maps.Marker({
          position: pnts[i],
          map: map,
          icon: iconS,
          label: {
            fontSize: "1em",
            fontWeight: "bold",
            text: pnts[i].label,
            color: 'white',
          },
          title: 'Ponto Partida: ' + pnts[i].id
        });
      } else if(p2 == 0){
        var marker = new google.maps.Marker({
          position: pnts[i],
          map: map,
          icon: iconE,
          label: {
            fontSize: "1em",
            fontWeight: "bold",
            text: pnts[i].label,
            color: 'white',
          },
          title: 'Ponto Destino: ' + pnts[i].id
        });
      }
      else {
        var marker = new google.maps.Marker({
          position: pnts[i],
          map: map,
          icon: iconBase,
          label: {
            fontSize: "1em",
            fontWeight: "bold",
            text: pnts[i].label,
            color: 'white',
          },
          title: 'Ponto 0'
        });
      }
    }
    else if(i == p1) {
      var marker = new google.maps.Marker({
        position: pnts[i],
        map: map,
        icon: iconS,        title: 'Ponto Partida: ' + pnts[i].id
      });
    } else if(i == p2){
      var marker = new google.maps.Marker({
        position: pnts[i],
        map: map,
        icon: iconE,
        title: 'Ponto Destino: ' + pnts[i].id
      });
    } else if(i == p3){
      var marker = new google.maps.Marker({
        position: pnts[i],
        map: map,
        icon: iconO,
        title: 'Ponto interditado.'
      });
    } else {
      var marker = new google.maps.Marker({
        position: pnts[i],
        map: map,
        icon: iconBase,
        label: {
          fontSize: "1em",
          fontWeight: "bold",
          text: pnts[i].label,
          color: 'white',
        },
        title: 'Ponto '+ pnts[i].id
      });
    }
  }
  //fim marcadores

  //MelhorTrajeto code
  var MelhorRota = [];
  function rmvpnt(pntf1, pntf2) {
    for(var i = 0; i < pntf1.proxpnt.length; i++){
      if(pntf1.proxpnt[i].lat == pntf2.lat && pntf1.proxpnt[i].lng == pntf2.lng )
      {
        pntf1.proxpnt.splice(i,1);
      }
    }
  }


  var MelhorTrajeto = function(pnt1, pnt2,MelhorRota){
    for(var i =0; i < pnts.length;i++){
      rmvpnt(pnts[i],pnt1);
    }
    if(DistTraj(pnt1,pnt2) == 0){
      //console.log('Distancia do ponto ' + pnt1.id+' até o destino:'+DistTraj(pnt1,pnt2));
      return 0;
    }
    //console.log('Distancia do ponto ' + pnt1.id + ' até o destino:' +DistTraj(pnt1,pnt2));
    var aux = 1000000;
    var pntaux;
    for(var i = 0; i < pnt1.proxpnt.length;i++){
      if( aux > DistTraj(pnt1.proxpnt[i],pnt2)){
        aux = DistTraj(pnt1.proxpnt[i],pnt2);
        pntaux = i;
      }
    }
    if(pnt1.proxpnt.length == 0)
    return 1;
    MelhorRota.push({id: pnt1.id, lat: pnt1.lat, lng: pnt1.lng});
    MelhorRota.push({id: pnt1.proxpnt[pntaux].id, lat: pnt1.proxpnt[pntaux].lat, lng: pnt1.proxpnt[pntaux].lng});


    if(MelhorTrajeto(pnt1.proxpnt[pntaux], pnt2,MelhorRota) == 1){
      MelhorRota.pop();
      MelhorRota.pop();
      return MelhorTrajeto(pnt1,pnt2,MelhorRota);
    }
    return 0;
  }

  var DistTraj = function(pnt1, pnt2) {
    var deg2rad = 0.017453292519943295; // === Math.PI / 180
    var cos = Math.cos;
    lat1 = pnt1.lat;
    lon1 = pnt1.lng;
    lat2 = pnt2.lat;
    lon2 = pnt2.lng;
    lat1 *= deg2rad;
    lon1 *= deg2rad;
    lat2 *= deg2rad;
    lon2 *= deg2rad;
    var diam = 12742; // Diameter of the earth in km (2 * 6371)
    var dLat = lat2 - lat1;
    var dLon = lon2 - lon1;
    var a = ( (1 - cos(dLat)) +
    (1 - cos(dLon)) * cos(lat1) * cos(lat2)
  ) / 2;

  return diam * Math.asin(Math.sqrt(a)) * 1000;
};
MelhorTrajeto(pnts[p1],pnts[p2],MelhorRota);
function squash(arr){
  var tmp = [];
  for(var i = 0; i < arr.length; i++){
    if(tmp.indexOf(arr[i].id) == -1){
      tmp.push(arr[i].id);
    }
  }
  return tmp;
}
//adicionar rota na div
function reapareceDiv() {
  document.getElementById("lista").style.visibility = "visible";
}
var MelhorRota2 = squash(MelhorRota);
var subs = [];
for(var i = 0; i < MelhorRota2.length; i++){
  if(i == (MelhorRota2.length-1)){
    subs[i] = "<li> Você chegou ao destino. </li>";
  } else {
    subs[i] = "<li> Saia do ponto " + MelhorRota2[i] +" e vá até o " + MelhorRota2[i+1] + ".</li>";
  }
}
document.getElementById("cam").innerHTML = subs.join('');
reapareceDiv();

//fim adicionar rota no HTML
//fim Melhor trajeto code
//DesenhaRota code
var DesenharRota = new google.maps.Polyline({
  path: MelhorRota,
  geodesic: true,
  strokeColor: '#0095b6 ',
  strokeOpacity: 1,
  strokeWeight: 10
});
DesenharRota.setMap(map);
//fim DesenhaRota code

}//fim mapa
