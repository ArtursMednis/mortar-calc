
export type tPointGrid = {east:number, north:number};
export type tShiftGrid = {right:number, add:number};
export type tPolarPointer = {radius:number, radians:number};

export type tRadians = {value:number};


export interface iRadians {
  value:number
}


export interface iMil {
  value:number
}

export interface iPointGrid {
  north:number,
  east:number
}




export interface iGeoLocationElement {
  No:number;
  DisplayTitle:string;
  location:iLocationInput_;
  readonly htmlElem:HTMLElement;
  onRemove:()=>void;
}


export interface iLocationInput_ {
  east:number;
  north:number;
  readonly htmlElem:HTMLElement;
  disabled:boolean;
}

export interface iMortar_ extends iGeoLocationElement, iMTRelationShipInput_ {
  resaultsDiv: HTMLDivElement;
  addLineToResaults:(text:string)=>void;
}

export interface iMTRelationShipInput_ {
  updateRelationShips:()=>void;
  pairedUnitsElement:HTMLUListElement;
  readonly htmlElem:HTMLElement;
}

export interface iTarget_ extends iGeoLocationElement, iMTRelationShipInput_ {
  OTLineRad:number;
  OTLineMil:number;
  
  FODistance:number;

  AddCorrection:number;
  DropCorrection:number;
  LeftCorrection:number;
  RightCorrection:number;
  

  offsetCorrections():void;

  
  getLocationMethod():"Grid"|"Polar"|"Shift (Grid)"|"Shift (Polar)";
  setLocationMethod(val:string):void;

  shiftedLocation:iLocationInput_;

  
  shiftedFODistance:number;
  shiftedOTLineRad:number;
}


