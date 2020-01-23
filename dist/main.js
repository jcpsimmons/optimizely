!function(modules){var installedModules={};function __webpack_require__(moduleId){if(installedModules[moduleId])return installedModules[moduleId].exports;var module=installedModules[moduleId]={i:moduleId,l:!1,exports:{}};return modules[moduleId].call(module.exports,module,module.exports,__webpack_require__),module.l=!0,module.exports}__webpack_require__.m=modules,__webpack_require__.c=installedModules,__webpack_require__.d=function(exports,name,getter){__webpack_require__.o(exports,name)||Object.defineProperty(exports,name,{enumerable:!0,get:getter})},__webpack_require__.r=function(exports){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(exports,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(exports,"__esModule",{value:!0})},__webpack_require__.t=function(value,mode){if(1&mode&&(value=__webpack_require__(value)),8&mode)return value;if(4&mode&&"object"==typeof value&&value&&value.__esModule)return value;var ns=Object.create(null);if(__webpack_require__.r(ns),Object.defineProperty(ns,"default",{enumerable:!0,value:value}),2&mode&&"string"!=typeof value)for(var key in value)__webpack_require__.d(ns,key,function(key){return value[key]}.bind(null,key));return ns},__webpack_require__.n=function(module){var getter=module&&module.__esModule?function(){return module.default}:function(){return module};return __webpack_require__.d(getter,"a",getter),getter},__webpack_require__.o=function(object,property){return Object.prototype.hasOwnProperty.call(object,property)},__webpack_require__.p="",__webpack_require__(__webpack_require__.s=2)}([function(module,exports,__webpack_require__){module.exports=__webpack_require__(3)},function(module,exports){function asyncGeneratorStep(gen,resolve,reject,_next,_throw,key,arg){try{var info=gen[key](arg),value=info.value}catch(error){return void reject(error)}info.done?resolve(value):Promise.resolve(value).then(_next,_throw)}module.exports=function(fn){return function(){var self=this,args=arguments;return new Promise((function(resolve,reject){var gen=fn.apply(self,args);function _next(value){asyncGeneratorStep(gen,resolve,reject,_next,_throw,"next",value)}function _throw(err){asyncGeneratorStep(gen,resolve,reject,_next,_throw,"throw",err)}_next(void 0)}))}}},function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);var _ref,_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(0),_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__),_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(1),injectCss=function(){$("<style type='text/css'>.ellipsis-wrap { overflow: hidden; text-overflow: ellipsis; white-space: nowrap; max-width: 100%;}#SuggestedProducts .cart-component .container {padding-left:0;padding-left:0;</style>").appendTo("head")},ratingGenerator=function(average,count){if(!parseInt(average)>0||!parseInt(average)>0)return"";var roundedAverage=Math.ceil(2*average)/2,fullStars=parseInt(roundedAverage),fullStarsHtml=new Array(10).fill(1,0,fullStars).map((function(throwawayVar){return'<span class="fa fa-star" aria-hidden="true"></span>'}));Number.isInteger(roundedAverage)||fullStarsHtml.push('<span class="fa fa-star-half-o" aria-hidden="true"></span>');var missingStars=5-fullStarsHtml.length;if(missingStars)for(i=0;i<missingStars;i++)fullStarsHtml.push('<span class="fa fa-star-o" aria-hidden="true"></span>');return'<div class="ratings" role="button">'.concat(fullStarsHtml.join(""),'<span aria-label="total number of reviews" class="number">(').concat(count,")</span> </div>")},buildHtml=(_ref=__webpack_require__.n(_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__)()(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark((function _callee(userData,cssSelector){var html,cartItems,recentlyViewed,res,data,_iteratorNormalCompletion,_didIteratorError,_iteratorError,_iterator,_step,product,_iteratorNormalCompletion2,_didIteratorError2,_iteratorError2,_iterator2,_step2,_product;return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap((function(_context){for(;;)switch(_context.prev=_context.next){case 0:if(html=[],cartItems=userData.product_id,0!=(recentlyViewed=(recentlyViewed=JSON.parse(userData["cp.lsf-recently-viewed-list"])).filter((function(item){return!cartItems.includes(item)})).slice(0,4)).length){_context.next=6;break}return _context.abrupt("return",!1);case 6:return _context.next=8,fetch("https://www.livingspaces.com/api/restfulproducts?pid=".concat(recentlyViewed.join(",")));case 8:return res=_context.sent,_context.next=11,res.json();case 11:if(data=_context.sent,"desktop"!=utag_data.site_type){_context.next=36;break}for(_iteratorNormalCompletion=!0,_didIteratorError=!1,_iteratorError=void 0,_context.prev=16,_iterator=data.products[Symbol.iterator]();!(_iteratorNormalCompletion=(_step=_iterator.next()).done);_iteratorNormalCompletion=!0)product=_step.value,html.push('<div class="col-xs-3 product-element"> <a href="https://www.livingspaces.com/'.concat(product.pid,'"> <img src="').concat(product.images[0].imageUrl,'?w=263&amp;h=174&amp;mode=pad" class="img-responsive" alt="').concat(product.title,'"> <span class="title ellipsis-wrap">').concat(product.title,'</span> <span class="price">$').concat(product.price.salePrice,'</span><div class="ratings" role="button">').concat(ratingGenerator(product.reviewsAvg,product.reviewsCount),"</div></a> </div>"));_context.next=24;break;case 20:_context.prev=20,_context.t0=_context.catch(16),_didIteratorError=!0,_iteratorError=_context.t0;case 24:_context.prev=24,_context.prev=25,_iteratorNormalCompletion||null==_iterator.return||_iterator.return();case 27:if(_context.prev=27,!_didIteratorError){_context.next=30;break}throw _iteratorError;case 30:return _context.finish(27);case 31:return _context.finish(24);case 32:html='<section id="" class="container board"> <a class="collapse-link" role="button" data-toggle="collapse" href="#SuggestedProducts" aria-expanded="true" aria-controls="SuggestedProducts">People Who Bought This Also Bought</a> <div class="collapse in"> <div class="product-grid-component"> <div class="row" id="SuggestedProducts"> '.concat(html.join("")," </div> </div> </div> </section>"),$(cssSelector).before(html),_context.next=58;break;case 36:for(_iteratorNormalCompletion2=!0,_didIteratorError2=!1,_iteratorError2=void 0,_context.prev=39,_iterator2=data.products[Symbol.iterator]();!(_iteratorNormalCompletion2=(_step2=_iterator2.next()).done);_iteratorNormalCompletion2=!0)_product=_step2.value,html.push('<div class="product-element"> <a href="https://www.livingspaces.com/'.concat(_product.pid,'"> <img src="').concat(_product.images[0].imageUrl,'?w=151&amp;h=100&amp;mode=pad" class="img-responsive lazy " alt="').concat(_product.title,'"> <span class="title">').concat(_product.title,'</span> <span class="price">$').concat(_product.price.salePrice,'</span> <div class="ratings" role="button">').concat(ratingGenerator(_product.reviewsAvg,_product.reviewsCount),"</div> </a> </div>"));_context.next=47;break;case 43:_context.prev=43,_context.t1=_context.catch(39),_didIteratorError2=!0,_iteratorError2=_context.t1;case 47:_context.prev=47,_context.prev=48,_iteratorNormalCompletion2||null==_iterator2.return||_iterator2.return();case 50:if(_context.prev=50,!_didIteratorError2){_context.next=53;break}throw _iteratorError2;case 53:return _context.finish(50);case 54:return _context.finish(47);case 55:html='<section class="board"> <a class="collapse-link" role="button" data-toggle="collapse" href="#SuggestedProducts" aria-expanded="true" aria-controls="SuggestedProducts" style=" font-size: 2.1rem; ">People Who Bought This Also Bought</a> <div class="collapse in" id="SuggestedProducts"> <div class="product-grid-component"> <div class="mobile-carousel-component"> '.concat(html.join(""),"</div> </div> </div> </section>"),$(cssSelector).before(html),$("#SuggestedProducts .mobile-carousel-component").slick({infinite:!0,slidesToShow:2,slidesToScroll:1,dots:!1,arrows:!1});case 58:return _context.abrupt("return",!0);case 59:case"end":return _context.stop()}}),_callee,null,[[16,20,24,32],[25,,27,31],[39,43,47,55],[48,,50,54]])}))),function(_x,_x2){return _ref.apply(this,arguments)}),anotherInterval=setInterval((function(){if(void 0!==window.jQuery){clearInterval(anotherInterval);var $=window.jQuery;injectCss(),buildHtml(utag_data,".noFormattingForPrint"),$("#SuggestedProducts").click((function(e){window.optimizely=window.optimizely||[],window.optimizely.push({type:"event",eventName:"clickSuggestedProducts",tags:{revenue:0,value:0}})}))}}),50)},function(module,exports,__webpack_require__){var runtime=function(exports){"use strict";var Op=Object.prototype,hasOwn=Op.hasOwnProperty,$Symbol="function"==typeof Symbol?Symbol:{},iteratorSymbol=$Symbol.iterator||"@@iterator",asyncIteratorSymbol=$Symbol.asyncIterator||"@@asyncIterator",toStringTagSymbol=$Symbol.toStringTag||"@@toStringTag";function wrap(innerFn,outerFn,self,tryLocsList){var protoGenerator=outerFn&&outerFn.prototype instanceof Generator?outerFn:Generator,generator=Object.create(protoGenerator.prototype),context=new Context(tryLocsList||[]);return generator._invoke=function(innerFn,self,context){var state="suspendedStart";return function(method,arg){if("executing"===state)throw new Error("Generator is already running");if("completed"===state){if("throw"===method)throw arg;return doneResult()}for(context.method=method,context.arg=arg;;){var delegate=context.delegate;if(delegate){var delegateResult=maybeInvokeDelegate(delegate,context);if(delegateResult){if(delegateResult===ContinueSentinel)continue;return delegateResult}}if("next"===context.method)context.sent=context._sent=context.arg;else if("throw"===context.method){if("suspendedStart"===state)throw state="completed",context.arg;context.dispatchException(context.arg)}else"return"===context.method&&context.abrupt("return",context.arg);state="executing";var record=tryCatch(innerFn,self,context);if("normal"===record.type){if(state=context.done?"completed":"suspendedYield",record.arg===ContinueSentinel)continue;return{value:record.arg,done:context.done}}"throw"===record.type&&(state="completed",context.method="throw",context.arg=record.arg)}}}(innerFn,self,context),generator}function tryCatch(fn,obj,arg){try{return{type:"normal",arg:fn.call(obj,arg)}}catch(err){return{type:"throw",arg:err}}}exports.wrap=wrap;var ContinueSentinel={};function Generator(){}function GeneratorFunction(){}function GeneratorFunctionPrototype(){}var IteratorPrototype={};IteratorPrototype[iteratorSymbol]=function(){return this};var getProto=Object.getPrototypeOf,NativeIteratorPrototype=getProto&&getProto(getProto(values([])));NativeIteratorPrototype&&NativeIteratorPrototype!==Op&&hasOwn.call(NativeIteratorPrototype,iteratorSymbol)&&(IteratorPrototype=NativeIteratorPrototype);var Gp=GeneratorFunctionPrototype.prototype=Generator.prototype=Object.create(IteratorPrototype);function defineIteratorMethods(prototype){["next","throw","return"].forEach((function(method){prototype[method]=function(arg){return this._invoke(method,arg)}}))}function AsyncIterator(generator){var previousPromise;this._invoke=function(method,arg){function callInvokeWithMethodAndArg(){return new Promise((function(resolve,reject){!function invoke(method,arg,resolve,reject){var record=tryCatch(generator[method],generator,arg);if("throw"!==record.type){var result=record.arg,value=result.value;return value&&"object"==typeof value&&hasOwn.call(value,"__await")?Promise.resolve(value.__await).then((function(value){invoke("next",value,resolve,reject)}),(function(err){invoke("throw",err,resolve,reject)})):Promise.resolve(value).then((function(unwrapped){result.value=unwrapped,resolve(result)}),(function(error){return invoke("throw",error,resolve,reject)}))}reject(record.arg)}(method,arg,resolve,reject)}))}return previousPromise=previousPromise?previousPromise.then(callInvokeWithMethodAndArg,callInvokeWithMethodAndArg):callInvokeWithMethodAndArg()}}function maybeInvokeDelegate(delegate,context){var method=delegate.iterator[context.method];if(void 0===method){if(context.delegate=null,"throw"===context.method){if(delegate.iterator.return&&(context.method="return",context.arg=void 0,maybeInvokeDelegate(delegate,context),"throw"===context.method))return ContinueSentinel;context.method="throw",context.arg=new TypeError("The iterator does not provide a 'throw' method")}return ContinueSentinel}var record=tryCatch(method,delegate.iterator,context.arg);if("throw"===record.type)return context.method="throw",context.arg=record.arg,context.delegate=null,ContinueSentinel;var info=record.arg;return info?info.done?(context[delegate.resultName]=info.value,context.next=delegate.nextLoc,"return"!==context.method&&(context.method="next",context.arg=void 0),context.delegate=null,ContinueSentinel):info:(context.method="throw",context.arg=new TypeError("iterator result is not an object"),context.delegate=null,ContinueSentinel)}function pushTryEntry(locs){var entry={tryLoc:locs[0]};1 in locs&&(entry.catchLoc=locs[1]),2 in locs&&(entry.finallyLoc=locs[2],entry.afterLoc=locs[3]),this.tryEntries.push(entry)}function resetTryEntry(entry){var record=entry.completion||{};record.type="normal",delete record.arg,entry.completion=record}function Context(tryLocsList){this.tryEntries=[{tryLoc:"root"}],tryLocsList.forEach(pushTryEntry,this),this.reset(!0)}function values(iterable){if(iterable){var iteratorMethod=iterable[iteratorSymbol];if(iteratorMethod)return iteratorMethod.call(iterable);if("function"==typeof iterable.next)return iterable;if(!isNaN(iterable.length)){var i=-1,next=function next(){for(;++i<iterable.length;)if(hasOwn.call(iterable,i))return next.value=iterable[i],next.done=!1,next;return next.value=void 0,next.done=!0,next};return next.next=next}}return{next:doneResult}}function doneResult(){return{value:void 0,done:!0}}return GeneratorFunction.prototype=Gp.constructor=GeneratorFunctionPrototype,GeneratorFunctionPrototype.constructor=GeneratorFunction,GeneratorFunctionPrototype[toStringTagSymbol]=GeneratorFunction.displayName="GeneratorFunction",exports.isGeneratorFunction=function(genFun){var ctor="function"==typeof genFun&&genFun.constructor;return!!ctor&&(ctor===GeneratorFunction||"GeneratorFunction"===(ctor.displayName||ctor.name))},exports.mark=function(genFun){return Object.setPrototypeOf?Object.setPrototypeOf(genFun,GeneratorFunctionPrototype):(genFun.__proto__=GeneratorFunctionPrototype,toStringTagSymbol in genFun||(genFun[toStringTagSymbol]="GeneratorFunction")),genFun.prototype=Object.create(Gp),genFun},exports.awrap=function(arg){return{__await:arg}},defineIteratorMethods(AsyncIterator.prototype),AsyncIterator.prototype[asyncIteratorSymbol]=function(){return this},exports.AsyncIterator=AsyncIterator,exports.async=function(innerFn,outerFn,self,tryLocsList){var iter=new AsyncIterator(wrap(innerFn,outerFn,self,tryLocsList));return exports.isGeneratorFunction(outerFn)?iter:iter.next().then((function(result){return result.done?result.value:iter.next()}))},defineIteratorMethods(Gp),Gp[toStringTagSymbol]="Generator",Gp[iteratorSymbol]=function(){return this},Gp.toString=function(){return"[object Generator]"},exports.keys=function(object){var keys=[];for(var key in object)keys.push(key);return keys.reverse(),function next(){for(;keys.length;){var key=keys.pop();if(key in object)return next.value=key,next.done=!1,next}return next.done=!0,next}},exports.values=values,Context.prototype={constructor:Context,reset:function(skipTempReset){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(resetTryEntry),!skipTempReset)for(var name in this)"t"===name.charAt(0)&&hasOwn.call(this,name)&&!isNaN(+name.slice(1))&&(this[name]=void 0)},stop:function(){this.done=!0;var rootRecord=this.tryEntries[0].completion;if("throw"===rootRecord.type)throw rootRecord.arg;return this.rval},dispatchException:function(exception){if(this.done)throw exception;var context=this;function handle(loc,caught){return record.type="throw",record.arg=exception,context.next=loc,caught&&(context.method="next",context.arg=void 0),!!caught}for(var i=this.tryEntries.length-1;i>=0;--i){var entry=this.tryEntries[i],record=entry.completion;if("root"===entry.tryLoc)return handle("end");if(entry.tryLoc<=this.prev){var hasCatch=hasOwn.call(entry,"catchLoc"),hasFinally=hasOwn.call(entry,"finallyLoc");if(hasCatch&&hasFinally){if(this.prev<entry.catchLoc)return handle(entry.catchLoc,!0);if(this.prev<entry.finallyLoc)return handle(entry.finallyLoc)}else if(hasCatch){if(this.prev<entry.catchLoc)return handle(entry.catchLoc,!0)}else{if(!hasFinally)throw new Error("try statement without catch or finally");if(this.prev<entry.finallyLoc)return handle(entry.finallyLoc)}}}},abrupt:function(type,arg){for(var i=this.tryEntries.length-1;i>=0;--i){var entry=this.tryEntries[i];if(entry.tryLoc<=this.prev&&hasOwn.call(entry,"finallyLoc")&&this.prev<entry.finallyLoc){var finallyEntry=entry;break}}finallyEntry&&("break"===type||"continue"===type)&&finallyEntry.tryLoc<=arg&&arg<=finallyEntry.finallyLoc&&(finallyEntry=null);var record=finallyEntry?finallyEntry.completion:{};return record.type=type,record.arg=arg,finallyEntry?(this.method="next",this.next=finallyEntry.finallyLoc,ContinueSentinel):this.complete(record)},complete:function(record,afterLoc){if("throw"===record.type)throw record.arg;return"break"===record.type||"continue"===record.type?this.next=record.arg:"return"===record.type?(this.rval=this.arg=record.arg,this.method="return",this.next="end"):"normal"===record.type&&afterLoc&&(this.next=afterLoc),ContinueSentinel},finish:function(finallyLoc){for(var i=this.tryEntries.length-1;i>=0;--i){var entry=this.tryEntries[i];if(entry.finallyLoc===finallyLoc)return this.complete(entry.completion,entry.afterLoc),resetTryEntry(entry),ContinueSentinel}},catch:function(tryLoc){for(var i=this.tryEntries.length-1;i>=0;--i){var entry=this.tryEntries[i];if(entry.tryLoc===tryLoc){var record=entry.completion;if("throw"===record.type){var thrown=record.arg;resetTryEntry(entry)}return thrown}}throw new Error("illegal catch attempt")},delegateYield:function(iterable,resultName,nextLoc){return this.delegate={iterator:values(iterable),resultName:resultName,nextLoc:nextLoc},"next"===this.method&&(this.arg=void 0),ContinueSentinel}},exports}(module.exports);try{regeneratorRuntime=runtime}catch(accidentalStrictMode){Function("r","regeneratorRuntime = r")(runtime)}}]);