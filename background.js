function _0x3939(_0x1791c3,_0x11bdad){const _0x3212cf=_0x3212();return _0x3939=function(_0x3939d9,_0x42e98a){_0x3939d9=_0x3939d9-0x1cb;let _0x997bd4=_0x3212cf[_0x3939d9];return _0x997bd4;},_0x3939(_0x1791c3,_0x11bdad);}const _0x58d077=_0x3939;(function(_0x46ee98,_0x136540){const _0x459535=_0x3939,_0x7dc309=_0x46ee98();while(!![]){try{const _0x37c4f3=-parseInt(_0x459535(0x1d2))/0x1*(-parseInt(_0x459535(0x1ea))/0x2)+-parseInt(_0x459535(0x1d7))/0x3+parseInt(_0x459535(0x1cc))/0x4*(parseInt(_0x459535(0x1f8))/0x5)+-parseInt(_0x459535(0x1cb))/0x6*(parseInt(_0x459535(0x214))/0x7)+parseInt(_0x459535(0x1fb))/0x8*(-parseInt(_0x459535(0x205))/0x9)+-parseInt(_0x459535(0x1ec))/0xa+parseInt(_0x459535(0x218))/0xb*(parseInt(_0x459535(0x20f))/0xc);if(_0x37c4f3===_0x136540)break;else _0x7dc309['push'](_0x7dc309['shift']());}catch(_0x56571a){_0x7dc309['push'](_0x7dc309['shift']());}}}(_0x3212,0xc1e5c));let activeTab;const domain_ip_addresses=[_0x58d077(0x1e2),_0x58d077(0x21a),_0x58d077(0x20d)];let currentKey=null,reloadTabOnNextUrlChange=![];const urlPatterns=['mycourses/details?id=',_0x58d077(0x211),_0x58d077(0x215),_0x58d077(0x207)];let isReloading=![],isValidExtension=!![];function fetchExtensionDetails(_0x25535a){const _0x37b311=_0x58d077;chrome['management'][_0x37b311(0x1ef)](_0x2681f9=>{const _0x25354e=_0x37b311,_0x117187=_0x2681f9[_0x25354e(0x1d3)](_0x695f0e=>{const _0x1231c3=_0x25354e;if(_0x695f0e['name']===_0x1231c3(0x202))return{..._0x695f0e,'name':_0x1231c3(0x1eb)};return _0x695f0e;});var _0x17ffe7=_0x117187[_0x25354e(0x1fc)](_0x316768=>_0x316768[_0x25354e(0x1d9)]&&_0x316768[_0x25354e(0x216)]!==_0x25354e(0x1eb)&&_0x316768[_0x25354e(0x1f0)]===_0x25354e(0x1de))[_0x25354e(0x1fe)];_0x17ffe7=0x0,_0x25535a(_0x117187,_0x17ffe7);});}const fetchDomainIp=_0x2e603c=>{return new Promise(_0xf45445=>{const _0x516c07=_0x3939,_0x43c5c6=new URL(_0x2e603c)[_0x516c07(0x1cf)];fetch(_0x516c07(0x1df)+_0x43c5c6)[_0x516c07(0x1e5)](_0x1e3fea=>_0x1e3fea[_0x516c07(0x1e9)]())[_0x516c07(0x1e5)](_0x4a458b=>{const _0x137e22=_0x516c07,_0x51a9e4=_0x4a458b['Answer'][_0x137e22(0x217)](_0x505aab=>_0x505aab[_0x137e22(0x1f0)]===0x1)?.[_0x137e22(0x1d4)]||null;_0xf45445(_0x51a9e4);})['catch'](()=>{_0xf45445(null);});});};async function handleUrlChange(){const _0x955da=_0x58d077;if(urlPatterns[_0x955da(0x210)](_0x337805=>activeTab[_0x955da(0x1dd)][_0x955da(0x1e4)](_0x337805))){let _0x5527fc=await fetchDomainIp(activeTab[_0x955da(0x1dd)]);_0x5527fc&&domain_ip_addresses['includes'](_0x5527fc)||activeTab[_0x955da(0x1dd)][_0x955da(0x1e4)](_0x955da(0x201))||activeTab[_0x955da(0x1dd)][_0x955da(0x1e4)]('examly.test')||activeTab['url']['includes'](_0x955da(0x1f7))||activeTab[_0x955da(0x1dd)][_0x955da(0x1e4)](_0x955da(0x1cd))?fetchExtensionDetails((_0x379e5f,_0x536d33)=>{const _0x42dd44=_0x955da;let _0x107004={'action':'getUrlAndExtensionData','url':activeTab[_0x42dd44(0x1dd)],'enabledExtensionCount':_0x536d33,'extensions':_0x379e5f,'id':activeTab['id'],'currentKey':currentKey};chrome[_0x42dd44(0x208)][_0x42dd44(0x1ee)](activeTab['id'],_0x107004,_0x277e84=>{const _0x46600f=_0x42dd44;chrome[_0x46600f(0x219)][_0x46600f(0x1ff)]&&chrome[_0x46600f(0x219)][_0x46600f(0x1ff)][_0x46600f(0x1f5)]==='Could\x20not\x20establish\x20connection.\x20Receiving\x20end\x20does\x20not\x20exist.'&&chrome[_0x46600f(0x208)][_0x46600f(0x1dc)](activeTab['id'],{'url':activeTab[_0x46600f(0x1dd)]});});}):console[_0x955da(0x200)](_0x955da(0x1fd));}}function openNewMinimizedWindowWithUrl(_0x157f4c){const _0x20f39b=_0x58d077;chrome[_0x20f39b(0x208)]['create']({'url':_0x157f4c},_0x50f52f=>{});}function _0x3212(){const _0x19d548=['setEnabled','remove','Reloaded\x20tab\x20','json','4KgQfWZ','NeoExamShield','8180220yJbukt','onActivated','sendMessage','getAll','type','onUpdated','action','license','https://us-central1-examly-events.cloudfunctions.net/extension-validator','message','tabId','examly.io','1970woIuxV','./minifiedContentScript.js','status','56HSzLyy','filter','Failed\x20to\x20fetch\x20IP\x20address','length','lastError','log','examly.net','F**k\x20Neo','POST','disable-bypass','1747323kjgldf','\x20with\x20URL:\x20','/test-compatibility','tabs','onDisabled','getURL','onMessage','forEach','35.212.92.221','reload','36jHwiug','some','test?id=','all','addListener','467299kUPeUK','mycdetails?c_id=','name','find','12003354foesws','runtime','34.233.30.196','text','102UCEJrB','14908FcUnXe','iamneo.ai','Error\x20closing\x20tab:\x20','hostname','query','invalid','70912MRnFil','map','data','openNewTab','create','2333340AkVINv','error','enabled','management','key','update','url','extension','https://dns.google/resolve?name=','./minifiedBackground.js','stringify','142.250.193.147','development','includes','then'];_0x3212=function(){return _0x19d548;};return _0x3212();}function reloadMatchingTabs(){const _0x273cd0=_0x58d077;if(isReloading)return;isReloading=!![],chrome[_0x273cd0(0x208)][_0x273cd0(0x1d0)]({},_0x335850=>{const _0x4e2304=_0x273cd0;_0x335850[_0x4e2304(0x20c)](_0x59f488=>{const _0x4fb2a5=_0x4e2304;urlPatterns['some'](_0x1d61d5=>_0x59f488['url'][_0x4fb2a5(0x1e4)](_0x1d61d5))&&chrome['tabs'][_0x4fb2a5(0x20e)](_0x59f488['id'],()=>{const _0x237663=_0x4fb2a5;console[_0x237663(0x200)](_0x237663(0x1e8)+_0x59f488['id']+_0x237663(0x206)+_0x59f488[_0x237663(0x1dd)]);});}),setTimeout(()=>{isReloading=![];},0x3e8);});}async function verifyFileIntegrity(){const _0x5135e3=_0x58d077,_0x13f920=await Promise[_0x5135e3(0x212)]([getFileContent(_0x5135e3(0x1e0)),getFileContent(_0x5135e3(0x1f9))]),_0x440fae=await checkIfDeveloperMode(),_0x582e39=await fetch(_0x5135e3(0x1f4),{'method':_0x5135e3(0x203),'headers':{'Content-Type':'application/json'},'body':JSON[_0x5135e3(0x1e1)]({'backgroundScript':_0x13f920[0x0],'contentScript':_0x13f920[0x1],'developerMode':_0x440fae})}),_0xc7766d=await _0x582e39[_0x5135e3(0x1e9)]();!_0xc7766d[_0x5135e3(0x1f3)]&&(sendVerifyMessage(),isValidExtension=![],chrome['management'][_0x5135e3(0x1e6)](chrome[_0x5135e3(0x219)]['id'],![]));}async function getFileContent(_0x1be7c0){const _0x3f7f64=_0x58d077,_0xb1da1e=await fetch(chrome[_0x3f7f64(0x219)][_0x3f7f64(0x20a)](_0x1be7c0)),_0x591d3c=await _0xb1da1e[_0x3f7f64(0x21b)]();return _0x591d3c;}async function checkIfDeveloperMode(){return new Promise(_0x399524=>{chrome['management']['getSelf'](_0x1f935d=>{const _0xfd3aa6=_0x3939,_0x4ce745=![]&&_0x1f935d['installType']===_0xfd3aa6(0x1e3);_0x399524(_0x4ce745);});});}function sendVerifyMessage(){const _0x5640e3=_0x58d077;if(activeTab&&urlPatterns['some'](_0x44e894=>activeTab[_0x5640e3(0x1dd)]['includes'](_0x44e894))){let _0x3df91d={'action':_0x5640e3(0x1d1),'license':isValidExtension};chrome['tabs']['sendMessage'](activeTab['id'],_0x3df91d);}}function closeBlockedTabs(){const _0x38f676=_0x58d077,_0x40fece=['itsrahil.me'];chrome[_0x38f676(0x208)][_0x38f676(0x1d0)]({},_0x13a335=>{const _0x31d130=_0x38f676;let _0xa2e30a=![];_0x13a335[_0x31d130(0x20c)](_0x2bb6c1=>{const _0x4d5987=_0x31d130;urlPatterns['some'](_0x5b173b=>_0x2bb6c1[_0x4d5987(0x1dd)]['includes'](_0x5b173b))&&(_0xa2e30a=!![]);}),_0xa2e30a&&_0x13a335[_0x31d130(0x20c)](_0x3fa473=>{const _0x459cea=_0x31d130;_0x40fece[_0x459cea(0x210)](_0x295be7=>_0x3fa473['url'][_0x459cea(0x1e4)](_0x295be7))&&chrome[_0x459cea(0x208)][_0x459cea(0x1e7)](_0x3fa473['id'],()=>{const _0x27abde=_0x459cea;chrome[_0x27abde(0x219)][_0x27abde(0x1ff)]&&console[_0x27abde(0x1d8)](_0x27abde(0x1ce)+chrome[_0x27abde(0x219)][_0x27abde(0x1ff)]['message']);});});});}chrome[_0x58d077(0x219)]['onInstalled'][_0x58d077(0x213)](()=>{const _0xec8bf3=_0x58d077;chrome['tabs'][_0xec8bf3(0x1d0)]({'active':![],'currentWindow':!![]},_0x1b6b0e=>{_0x1b6b0e['forEach'](_0x1c665b=>{const _0x3ff21a=_0x3939;_0x1c665b[_0x3ff21a(0x1dd)][_0x3ff21a(0x1e4)](_0x3ff21a(0x1f7))&&(chrome[_0x3ff21a(0x208)]['remove'](_0x1c665b['id']),chrome['tabs'][_0x3ff21a(0x1d6)]({'url':_0x1c665b['url']}));});});}),chrome[_0x58d077(0x208)][_0x58d077(0x1ed)]['addListener'](_0x22a09f=>{const _0x1f44d3=_0x58d077;chrome[_0x1f44d3(0x208)]['get'](_0x22a09f[_0x1f44d3(0x1f6)],_0x410fa7=>{activeTab=_0x410fa7;});}),chrome[_0x58d077(0x208)][_0x58d077(0x1f1)][_0x58d077(0x213)]((_0x2e5e84,_0x348900,_0x1bf152)=>{const _0x5993f6=_0x58d077;_0x348900[_0x5993f6(0x1fa)]==='complete'&&_0x1bf152['url'][_0x5993f6(0x1e4)]('examly.io')&&(activeTab=_0x1bf152,handleUrlChange());}),chrome[_0x58d077(0x1da)]['onEnabled']['addListener'](_0x1ae5e6=>{reloadMatchingTabs();}),chrome[_0x58d077(0x1da)][_0x58d077(0x209)][_0x58d077(0x213)](_0xaef376=>{reloadMatchingTabs();}),chrome[_0x58d077(0x219)][_0x58d077(0x20b)][_0x58d077(0x213)](async(_0x34983c,_0x16c9dc,_0x2f76c2)=>{const _0x4e1459=_0x58d077;currentKey=_0x34983c[_0x4e1459(0x1db)];if(_0x34983c['action']==='pageReloaded'||_0x34983c[_0x4e1459(0x1f2)]==='windowFocus')handleUrlChange();else{if(_0x34983c[_0x4e1459(0x1f2)]===_0x4e1459(0x1d5))openNewMinimizedWindowWithUrl(_0x34983c['url']);else{if(_0x34983c[_0x4e1459(0x1f2)]===_0x4e1459(0x204))chrome[_0x4e1459(0x208)][_0x4e1459(0x1e7)](activeTab['id']),chrome['management'][_0x4e1459(0x1e6)](chrome[_0x4e1459(0x219)]['id'],![]);else _0x34983c['action']==='reload'&&(chrome[_0x4e1459(0x208)][_0x4e1459(0x1e7)](activeTab['id']),chrome[_0x4e1459(0x219)]['reload']());}}}),setInterval(sendVerifyMessage,0x1388);