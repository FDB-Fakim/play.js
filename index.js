///
// global variables to change
body = document.querySelector('body');

class Svg{
  constructor(windowName){
    this._size = size;
    this._stroke = stroke;
    this._fill = fill;
    this._markup = markup;
    this._margin = margin;
    // properties above this have getter and setter
    this.paths = [];
    this.name = windowName;
    // probably wont use these, implement this.size/2 instead
    this._xloc 
    this._yloc
    
  }

  set size(x){this.size = x;} get size(){return this.size;} 
  set stroke(x){this.stroke = x;} get size(){return this.stroke;} 
  set fill(x){this.fill = x;} get size(){return this.fill;} 
  set markup(x){this.markup = x;} get size(){return this.markup;}
  set margin(x){this.margin = x;} get size(){return this.margin;}
}



class Row{
  constructor(windowName){
    this._rowid = rowid;
    this._strokeWidth = strokeWidth ;
    this._stroke = stroke;
    this._fill = fill;
    this._radius = radius;
    this._isCustom = isCustom;
    // properties above this have getter and setter
    this._parentSvg = windowName;
    this._buttons = [];

  }

  set rowid(x){this.rowid = x;} get size(){return this.rowid;}
  set strokeWidth(x){this.strokeWidth = x;} get size(){return this.strokeWidth;}
  set stroke(x){this.stroke = x;} get size(){return this.stroke;}
  set fill(x){this.fill = x;} get size(){return this.fill;}
  set radius(x){this.radius = x;} get size(){return this.radius;}
  set isCustom(x){this.isCustom = x;} get size(){return this.isCustom;}
    
}

class Btn{
  constructor(){

    // properties above this have getter and setter
    this._key = key;
    this._fill = fill;
    this._stroke = stroke;
    this._strokeWidth = strokeWidth;
  }

  
}
    
/*
********************* defaultSvg Values ********************
*/

/// Gray scale color pallete
const grey1 = "#f2f2f2";
const grey2 = "#bfbfbf";
const grey3 = "#808080";
const grey4 = "#404040";
const grey5 = "#0d0d0d";


const defaultSize = 200;
const defaultStroke = grey3;

// build defaultSvg
function buildNewSvg(){
  const newSvg = new Svg("defaultSvg");
  newSvg.size(defaultSize);
}







var log = "log"
window.onload = function(){
  console.log(log);
  
  document.querySelector('body').style.width = String(window.innerWidth)+ 'px';
  document.querySelector('body').style.height = String(window.innerHeight)+ 'px'; 
}





/*

                  Notes

*********** querySelector for custom attributes ***********
document.querySelectorAll('[data-foo="value"]');
document.querySelector('[row="1"]')



*/
