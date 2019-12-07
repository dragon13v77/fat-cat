function _classCallCheck(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function _defineProperties(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}function _createClass(t,e,n){return e&&_defineProperties(t.prototype,e),n&&_defineProperties(t,n),t}function _defineProperty(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function ownKeys(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,i)}return n}function _objectSpread2(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?ownKeys(n,!0).forEach(function(t){_defineProperty(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):ownKeys(n).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}var PAW_PATH="M256 224c-79.41 0-192 122.76-192 200.25 0 34.9 26.81 55.75 71.74 55.75 48.84 0 81.09-25.08 120.26-25.08 39.51 0 71.85 25.08 120.26 25.08 44.93 0 71.74-20.85 71.74-55.75C448 346.76 335.41 224 256 224zm-147.28-12.61c-10.4-34.65-42.44-57.09-71.56-50.13-29.12 6.96-44.29 40.69-33.89 75.34 10.4 34.65 42.44 57.09 71.56 50.13 29.12-6.96 44.29-40.69 33.89-75.34zm84.72-20.78c30.94-8.14 46.42-49.94 34.58-93.36s-46.52-72.01-77.46-63.87-46.42 49.94-34.58 93.36c11.84 43.42 46.53 72.02 77.46 63.87zm281.39-29.34c-29.12-6.96-61.15 15.48-71.56 50.13-10.4 34.65 4.77 68.38 33.89 75.34 29.12 6.96 61.15-15.48 71.56-50.13 10.4-34.65-4.77-68.38-33.89-75.34zm-156.27 29.34c30.94 8.14 65.62-20.45 77.46-63.87 11.84-43.42-3.64-85.21-34.58-93.36s-65.62 20.45-77.46 63.87c-11.84 43.42 3.64 85.22 34.58 93.36z",COLORS={BORDER:"gray",REGULAR:"white",PERMANENT:"rgb(144, 140, 255)",TEMPORARY:"rgb(195, 186, 255)",HOVER:"rgb(195, 186, 0)"},APP_INJECTION_ID="app",Image=function(){function e(t){_classCallCheck(this,e),this.containerWidth=t.rectDimension||0,this.width=this.containerWidth/e.SCALE_FACTOR,this.left=t.left||0,this.top=t.top||0,this.imageObject=new fabric.Path(PAW_PATH),this.imageObject.set({left:this.left,top:this.top}),this.imageObject.scaleToWidth(this.width),this.imageObject.scaleToHeight(this.width),this.imageObject.selection=!1,this.imageObject.hasBorders=!1,this.imageObject.hasControls=!1,this.imageObject.hoverCursor="default",this.toggleImageVisibillity(!1),this.attachListeners()}return _createClass(e,[{key:"toggleImageVisibillity",value:function(t){this.imageObject.opacity=t?1:0}},{key:"setImagePosition",value:function(t){var e=t.column*this.containerWidth+(this.containerWidth-this.width)/2,n=t.row*this.containerWidth+(this.containerWidth-this.width)/2;this.toggleImageVisibillity(!0),this.imageObject.set({left:e,top:n})}},{key:"attachListeners",value:function(){}}]),e}();Image.SCALE_FACTOR=2.5;var Canvas=function(){function e(t){_classCallCheck(this,e),this.id=t.id,this.className="my_canvas",this.canvas=null,this.init(t),this.create(t),this.createImage(t)}return _createClass(e,[{key:"init",value:function(t){var e=document.createElement("canvas");e.id=t.id,document.getElementById("app").appendChild(e)}},{key:"create",value:function(t){this.canvas=new fabric.Canvas(t.id,{containerClass:this.className}),this.canvas.setHeight(t.height+1),this.canvas.setWidth(t.width+1)}},{key:"destroy",value:function(){var t=document.getElementsByClassName(this.className);t&&t[0].remove(),this.canvas&&this.canvas.dispose()}},{key:"add",value:function(t){this.canvas.add(t)}},{key:"insertAt",value:function(t,e){this.canvas.insertAt(t,e,!1)}},{key:"createImage",value:function(t){this.image=new Image(t),this.canvas.insertAt(this.image.imageObject,0)}}]),e}(),Rectangle=function(){function e(t){_classCallCheck(this,e),this.rect=null,this.dimension=t.dimension||50,this.column=t.column,this.row=t.row,this.clicked=t.clicked,this.mouseOver=t.mouseOver,this.mouseOut=t.mouseOut,this.isPermanent=!1,this.isTemporary=!0,this.create(t),this.attachSelectedListener()}return _createClass(e,[{key:"create",value:function(t){var e=this.column*this.dimension,n=this.row*this.dimension;this.rect=new fabric.Rect({id:"".concat(this.column,"_").concat(this.row),left:e,top:n,fill:COLORS.REGULAR,width:this.dimension,height:this.dimension,stroke:COLORS.BORDER,strokeWidth:t.strokeWidth||1,lockMovementX:!0,lockMovementY:!0,selection:!1,hasBorders:!1,hasControls:!1,hoverCursor:"default"})}},{key:"get",value:function(){return this.rect}},{key:"attachSelectedListener",value:function(){var t=this;this.rect.on("selected",function(){return t.clicked(t)})}},{key:"deattachSelectedListener",value:function(){this.rect.__eventListeners.selected=[]}},{key:"attachMouseOverListener",value:function(){var t=this;this.rect.on("mouseover",function(){return t.mouseOver(t)})}},{key:"deatachMouseOverListener",value:function(){this.rect.__eventListeners.mouseover=[]}},{key:"attachMouseOutListener",value:function(){var t=this;this.rect.on("mouseout",function(){return t.mouseOut(t)})}},{key:"deatachMouseOutListener",value:function(){this.rect.__eventListeners.mouseout=[]}},{key:"setIsPermanent",value:function(t){this.isPermanent=t,this.deattachSelectedListener(),this.fillRectangle(COLORS.PERMANENT)}},{key:"setIsTemporary",value:function(t){this.isTemporary=t,this.fillRectangle(t?COLORS.TEMPORARY:COLORS.REGULAR),t?(this.attachMouseOverListener(),this.attachMouseOutListener(),this.rect.hoverCursor="pointer"):(this.rect.hoverCursor="default",this.deatachMouseOverListener(),this.deatachMouseOutListener())}},{key:"fillRectangle",value:function(t){var e=0<arguments.length&&void 0!==t?t:COLORS.DEFAULT;this.rect.set("fill",e)}}]),e}(),Game=function(){function e(t){var o=this;_classCallCheck(this,e),_defineProperty(this,"rectangleClickedHandler",function(t){t.isTemporary&&(o.resetTemporaryRectangles(),o.setPermanentRectangle(t),o.setTemporaryRectangles(t)),t.rect.canvas.setActiveObject(t.rect.canvas._objects[0])}),_defineProperty(this,"setPermanentRectangle",function(t){o.state.permanent.push(t),t.setIsPermanent(!0),o.layout.image.setImagePosition({column:t.column,row:t.row})}),_defineProperty(this,"setTemporaryRectangles",function(t){var e=Object.keys(o.pattern);for(var n in e){var i=o.pattern[e[n]],s=t.column-i.column,a=t.row-i.row;if(0<=s&&s<o.width&&0<=a&&a<o.height){var r=o.rectangles[s][a];r.isPermanent||(r.setIsTemporary(!0),o.state.temporary.push(r))}}o.checkScore()}),_defineProperty(this,"resetTemporaryRectangles",function(){o.state.temporary=[],o.rectangles.map(function(t){t.map(function(t){t.isPermanent||t.setIsTemporary(!1)})})}),_defineProperty(this,"rectangleMouseOverHandler",function(t){t.get().set("fill",COLORS.HOVER),t.get().canvas.renderAll()}),_defineProperty(this,"rectangleMouseOutHandler",function(t){t.get().set("fill",COLORS.TEMPORARY),t.get().canvas.renderAll()}),this.state={history:[],permanent:[],temporary:[]},this.rectangles=null,this.pattern=t.pattern&&e.PATTERN[t.pattern]||e.PATTERN.PATTERN_2,this.rectDimension=t.rectDimension||null,this.rectStrokeWidth=t.rectStrokeWidth||null,this.width=t&&t.width&&t.width||10,this.height=t&&t.height&&t.height||10,this.initCanvas(t),this.initRectangles(),this.createRectangles(t),this.setScore(0)}return _createClass(e,[{key:"exit",value:function(){this.layout&&this.layout.destroy()}},{key:"initCanvas",value:function(t){this.layout=new Canvas({id:t.id,rectDimension:t.rectDimension,width:t.rectDimension*this.width+this.rectStrokeWidth,height:t.rectDimension*this.height+this.rectStrokeWidth})}},{key:"initRectangles",value:function(){this.rectangles=new Array(this.width);for(var t=0;t<this.width;t++)this.rectangles[t]=new Array(this.height)}},{key:"createRectangles",value:function(t){for(var e=0;e<this.width;e++)for(var n=0;n<this.height;n++){var i=this.getRectangle(_objectSpread2({},t,{column:e,row:n}));this.rectangles[e][n]=i,this.layout.add(i.get())}}},{key:"getRectangle",value:function(t){return new Rectangle({column:t.column,row:t.row,dimension:this.rectDimension,strokeWidth:this.rectStrokeWidth,clicked:this.rectangleClickedHandler,mouseOver:this.rectangleMouseOverHandler,mouseOut:this.rectangleMouseOutHandler})}},{key:"checkScore",value:function(){0===this.state.temporary.length&&alert("Mjau mrnjau :("),this.state.permanent.length===this.width*this.height&&alert("Mjau mrnjau :)"),this.setScore(this.state.permanent.length)}},{key:"setScore",value:function(t){document.getElementById("score").innerHTML=" SCORE: ".concat(t," / ").concat(this.width*this.height)}}]),e}();Game.PATTERN={PATTERN_1:{stage_1:{column:0,row:2},stage_2:{column:1,row:1},stage_3:{column:2,row:0},stage_4:{column:1,row:-1},stage_5:{column:0,row:-2},stage_6:{column:-1,row:-1},stage_7:{column:-2,row:0},stage_8:{column:-1,row:1}},PATTERN_2:{stage_1:{column:0,row:3},stage_2:{column:2,row:2},stage_3:{column:3,row:0},stage_4:{column:2,row:-2},stage_5:{column:0,row:-3},stage_6:{column:-2,row:-2},stage_7:{column:-3,row:0},stage_8:{column:-2,row:2}},PATTERN_3:{stage_1:{column:0,row:4},stage_2:{column:3,row:3},stage_3:{column:4,row:0},stage_4:{column:3,row:-3},stage_5:{column:0,row:-4},stage_6:{column:-3,row:-3},stage_7:{column:-4,row:0},stage_8:{column:-3,row:3}}};var PLAY_EVENT="PLAY_EVENT",Controls=function(){function t(){if(_classCallCheck(this,t),this.maxWidth=50,this.maxHeight=50,this.maxDimension=100,this.width=10,this.height=10,this.rectDimension=50,this.pattern=null,t.instance)return console.warn("Cant create another instance"),t.instance;this.set(),this.attachListeners(),t.instance=this}return _createClass(t,[{key:"set",value:function(){document.getElementById("app").innerHTML=this.get()}},{key:"get",value:function(){return'\n\t\t\t<h1> X BOXES </h1>\n\t\t\t<h3 id="score"> SCORE: </h3>\n\t\t\t<div class="app_controls">\n\t\t\t\t<div class="control_container app_controls_columns">\n\t\t\t\t\t<span>Columns: </span>\n\t\t\t\t\t<input id="input_columns" TYPE="NUMBER" MIN="10" MAX="50" STEP="1" VALUE="10" SIZE="10">\n\t\t\t\t</div>\n\t\t\t\t<div class="control_container app_controls_rows">\n\t\t\t\t\t<span>Rows: </span>\n\t\t\t\t\t<input id="input_rows" TYPE="NUMBER" MIN="10" MAX="50" STEP="1" VALUE="10" SIZE="10">\n\t\t\t\t</div>\n\t\t\t\t<div class="control_container app_controls_cell_width">\n\t\t\t\t\t<span>Cell width: </span>\n\t\t\t\t\t<input id="input_cell_width" TYPE="NUMBER" MIN="20" MAX="100" STEP="1" VALUE="50" SIZE="10">\n\t\t\t\t</div>\n\t\t\t\t<div class="control_container app_controls_patterns">\n\t\t\t\t\t<span>Pattern: </span>\n\t\t\t\t\t<select id="input_pattern">\n\t\t\t\t\t\t<option value="PATTERN_1">Small</option>\n\t\t\t\t\t\t<option value="PATTERN_2" selected>Medium</option>\n\t\t\t\t\t\t<option value="PATTERN_3">Big</option>\n\t\t\t\t\t</select>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<div class="play_controls">\n\t\t\t\t<button id="play_game" style="clear: both; display: inline-block"> NEW GAME </button>\n\t\t\t</div>'}},{key:"attachListeners",value:function(){var t;t=this,document.addEventListener("DOMContentLoaded",function(){document.getElementById("input_columns").setAttribute("max",t.maxWidth),document.getElementById("input_rows").setAttribute("max",t.maxHeight),document.getElementById("input_cell_width").setAttribute("max",t.maxDimension)}),document.getElementById("input_columns").addEventListener("change",function(){t.width=parseInt(this.value,10),t.width=t.width<10?10:t.width,t.width=t.width>t.maxWidth?t.maxWidth:t.width}),document.getElementById("input_rows").addEventListener("change",function(){t.height=parseInt(this.value,10),t.height=t.height<10?10:t.height,t.height=t.height>t.maxHeight?t.maxHeight:t.height}),document.getElementById("input_cell_width").addEventListener("change",function(){t.rectDimension=parseInt(this.value,10),t.rectDimension=t.rectDimension<20?20:t.rectDimension,t.rectDimension=t.rectDimension>t.maxDimension?t.maxDimension:t.rectDimension}),document.getElementById("input_pattern").addEventListener("change",function(){t.pattern=this.value}),document.getElementById("play_game").addEventListener("click",function(){document.getElementById(APP_INJECTION_ID).dispatchEvent(new CustomEvent(PLAY_EVENT,{payload:{}}))})}}]),t}();Controls.instance=null;var app=function(){var e=null;return{controls:null,init:function(){var e;return this.controls||(this.controls=new Controls({})),e=this,document.getElementById(APP_INJECTION_ID).addEventListener(PLAY_EVENT,function(t){e.play({width:e.controls.width,height:e.controls.height,rectDimension:e.controls.rectDimension,pattern:e.controls.pattern})}),this},play:function(t){e&&e.exit(),e=new Game({id:"fat_cat",rectStrokeWidth:1,rectDimension:t&&t.rectDimension||this.controls.rectDimension,width:t&&t.width||this.controls.width,height:t&&t.height||this.controls.height,pattern:t&&t.pattern||this.controls.pattern})}}}();app.init().play({});
