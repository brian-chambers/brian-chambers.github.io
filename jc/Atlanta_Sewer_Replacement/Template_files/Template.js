// Created by iWeb 3.0.2 local-build-20101204

setTransparentGifURL('Media/transparent.gif');function applyEffects()
{var registry=IWCreateEffectRegistry();registry.registerEffects({stroke_0:new IWStrokeParts([{rect:new IWRect(-5,5,10,190),url:'Template_files/stroke.png'},{rect:new IWRect(-5,-5,10,10),url:'Template_files/stroke_1.png'},{rect:new IWRect(5,-5,661,10),url:'Template_files/stroke_2.png'},{rect:new IWRect(666,-5,10,10),url:'Template_files/stroke_3.png'},{rect:new IWRect(666,5,10,190),url:'Template_files/stroke_4.png'},{rect:new IWRect(666,195,10,11),url:'Template_files/stroke_5.png'},{rect:new IWRect(5,195,661,11),url:'Template_files/stroke_6.png'},{rect:new IWRect(-5,195,10,11),url:'Template_files/stroke_7.png'}],new IWSize(671,201))});registry.applyEffects();}
function hostedOnDM()
{return false;}
function onPageLoad()
{loadMozillaCSS('Template_files/TemplateMoz.css')
adjustLineHeightIfTooBig('id1');adjustFontSizeIfTooBig('id1');adjustLineHeightIfTooBig('id2');adjustFontSizeIfTooBig('id2');adjustLineHeightIfTooBig('id3');adjustFontSizeIfTooBig('id3');adjustLineHeightIfTooBig('id4');adjustFontSizeIfTooBig('id4');Widget.onload();fixAllIEPNGs('Media/transparent.gif');fixupIECSS3Opacity('id5');applyEffects()}
function onPageUnload()
{Widget.onunload();}
