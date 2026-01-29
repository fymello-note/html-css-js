// JavaScript Document

class mechwarrior {
	constructor (name, immagine, modpiloting, modiniziativa, modlogshooter, modfisicattack, modmultitarget) {
		this.name = name;
		this.immagine = immagine;
		this.modpiloting = modpiloting;
		this.modiniziativa = modiniziativa;
		this.modlogshooter = modlogshooter;
		this.modfisicattack = modfisicattack;
		this.modmultitarget = modmultitarget;
	}
}

var Kali = new mechwarrior('Kali','../immagini/kali.png', 1, 0, 0, 0, 0);
var Candace  = new mechwarrior('Candace','../immagini/candace.png', 0, 1, 0, 0, 0);
var Jerome  = new mechwarrior('Jerome','../immagini/jerome.png', 0, 0, -1, 0, 0);
var Kai = new mechwarrior('Kai','../immagini/kai.png', 0, 0, 0, -1, 0);
var Ardan  = new mechwarrior('Ardan','../immagini/ardan.png', 0, 0, 0, 0, -1);


var dictmechwarrior = {
	"Kali" : Kali,
	"Candace" : Candace,
	"Jerome" : Jerome,
	"Kai" : Kai,
	"Ardan" : Ardan
};


class ammo {
constructor (name, spaziocritico) {
	this.name = name;
	this.spaziocritico = spaziocritico;
	}
}
var SRM2Ammo = new ammo('SRM2Ammo', 1);
var LRM15Ammo = new ammo('LRM15Ammo', 1);
var LRM10Ammo = new ammo('LRM10Ammo', 1);
var AC10Ammo = new ammo('AC10Ammo', 1);

var dictammo = {
	"SRM2Ammo" : SRM2Ammo,
	"LRM15Ammo" : LRM15Ammo,
	"LRM10Ammo" : LRM10Ammo,
	"AC10Ammo" : AC10Ammo
};

class weapon {
  constructor(name, heat, damage, minrange, shortrange, mediumrange, longrange, spaziocritico, tipo, numammoperfire) {
    this.name = name;
	this.heat = heat;
	this.damage = damage;
	this.minrange = minrange;
	this.shortrange = shortrange;
	this.mediumrange = mediumrange;
	this.longrange = longrange;
	this.spaziocritico = spaziocritico;
	this.tipo = tipo;
	this.numammoperfire = numammoperfire;
  }
}

var SmallLaser = new weapon('Small Laser', 1, 3, 0, 1, 2, 3, 1, "laser", 1);
var MediumLaser = new weapon('Medium Laser', 3, 5, 0, 3, 6, 9, 1, "laser", 1);
var MediumLaserR = new weapon('Medium Laser (R)', 3, 5, 0, 3, 6, 9, 1, "laser", 1);
var LargeLaser = new weapon('Large Laser', 8, 8, 0, 5, 10, 15, 2, "laser", 1);
var SRM2 = new weapon('SRM2', 2, 2, 0, 3, 6, 9, 2, "missile", 2);
var LRM15 = new weapon('LRM15', 5, 1, 6, 7, 14, 21, 3, "missile", 15);
var LRM10 = new weapon('LRM10', 4, 1, 6, 7, 14, 21, 2, "missile", 10);
var AC10 = new weapon('AC10', 3, 10, 0, 5, 10, 15, 7, "autocannon", 1);

var dictweapon = {
	"Small Laser" : SmallLaser,	
	"Medium Laser" : MediumLaser,
	"Medium Laser (R)" : MediumLaserR,
	"Large Laser" : LargeLaser,
	"SRM2" : SRM2,
	"LRM15" : LRM15,
	"LRM10" : LRM10,
	"AC10" : AC10,
};

class mech {
  constructor(name, immagine, immagine_b, immaginemech, tipomech, tons, walk, jump, heatsink, internalHead, internalCTorso, internalRTorso, internalLTorso, internalLArm, internalRArm, internalLLeg, internalRLeg, armorHead, armorCTorso, armorRTorso, armorLTorso, armorLArm, armorRArm, armorLLeg, armorRLeg, armorCTorsoRear, armorRTorsoRear, armorLTorsoRear, weapons, weaponsLoc, weaponsNum, weaponsammo, weaponsammoLoc, weaponsammoNum, weaponsammoQty, headcrit, torsocrit, LAcrit, RAcrit, LLcrit, RLcrit, LTcrit, RTcrit) {
    this.name = name;
	this.immagine = immagine;
	this.immagine_b = immagine_b;
	this.immaginemech = immaginemech;
	this.tipomech = tipomech;
    this.tons = tons;
    this.walk = walk;
	this.jump = jump;
	this.heatsink = heatsink;
	this.internalHead = internalHead;
	this.internalCTorso = internalCTorso;
	this.internalRTorso = internalRTorso;
	this.internalLTorso = internalLTorso;
	this.internalLArm = internalLArm;
	this.internalRArm = internalRArm;
	this.internalLLeg = internalLLeg;
	this.internalRLeg = internalRLeg;
	this.armorHead = armorHead;
	this.armorCTorso = armorCTorso;
	this.armorRTorso = armorRTorso;
	this.armorLTorso = armorLTorso;
	this.armorLArm = armorLArm;
	this.armorRArm = armorRArm;
	this.armorLLeg = armorLLeg;
	this.armorRLeg = armorRLeg;
	this.armorCTorsoRear = armorCTorsoRear;
	this.armorRTorsoRear = armorRTorsoRear;
	this.armorLTorsoRear = armorLTorsoRear;
	this.weapons = weapons;
	this.weaponsLoc = weaponsLoc;
	this.weaponsNum = weaponsNum;
	this.weaponsammo = weaponsammo;
	this.weaponsammoLoc = weaponsammoLoc;
	this.weaponsammoNum = weaponsammoNum;
	this.weaponsammoQty = weaponsammoQty; //numero di pack
	this.headcrit = headcrit;
	this.torsocrit = torsocrit;
	this.LAcrit = LAcrit;
	this.RAcrit = RAcrit;
	this.LLcrit = LLcrit;
	this.RLcrit = RLcrit;
	this.LTcrit = LTcrit;
	this.RTcrit = RTcrit;
	
  }
}


var Catapult = new mech('CPLT_C1', '../immagini/catapult.gif', '../immagini/catapult_b.gif', '../immagini/catapult_mech.png', 'Catapult', 65, 4, 4, 15, 3, 21, 15, 15, 10, 10, 15, 15, 9, 24, 19, 19, 13, 13, 18, 18, 11, 8, 8, [MediumLaser,MediumLaser,MediumLaser,MediumLaser,LRM15,LRM15], ["CT","CT","LT","RT","LA","RA"], [0,1,0,0,0,0], [LRM15Ammo,LRM15Ammo], ["LA","RA"], [0,0], [null,null,null,null,8,8], ["LifeSupport","Sensors","Cockpit","Sensors","LifeSupport","HeatSink"], ["Engine","Engine","Engine","Gyro","Gyro","Gyro","Gyro","Engine","Engine","Engine"], ["Shoulder","UpperArmActuator","LowerArmActuator","HandActuator"], ["Shoulder","UpperArmActuator","LowerArmActuator","HandActuator"], ["Hip","UpperLegActuator","LowerLegActuator","FootActuator","HeatSink","HeatSink"], ["Hip","UpperLegActuator","LowerLegActuator","FootActuator","HeatSink","HeatSink"],["Jumpjet","Jumpjet"],["Jumpjet","Jumpjet"]);
var Centurion = new mech('CN9_A', '../immagini/centurion.png', '../immagini/centurion_b.png', '../immagini/centurion_mech.png', 'Centurion', 50, 4, 0, 10, 3, 16, 12, 12, 8, 8, 12, 12, 9, 18, 13, 13, 16, 16, 16, 16, 7, 6, 6, [MediumLaser,MediumLaserR,AC10,LRM10], ["CT","CTR","RA","LT"], [0,1,0,0], [AC10Ammo,LRM10Ammo], ["RT","LT"], [0,0], [null,null,20,24], ["LifeSupport","Sensors","Cockpit","Sensors","LifeSupport"], ["Engine","Engine","Engine","Gyro","Gyro","Gyro","Gyro","Engine","Engine","Engine"], ["Shoulder","UpperArmActuator","LowerArmActuator","HandActuator"], ["Shoulder","UpperArmActuator","LowerArmActuator","HandActuator"], ["Hip","UpperLegActuator","LowerLegActuator","FootActuator"], ["Hip","UpperLegActuator","LowerLegActuator","FootActuator"],["HeatSink"],["HeatSink"]);
var Wasp = new mech('WSP-1A', '../immagini/wasp.png', '../immagini/wasp_b.png', '../immagini/wasp_mech.png', 'Wasp', 20, 6, 6, 10, 3, 6, 5, 5, 3, 3, 4, 4, 4, 6, 6, 6, 4, 4, 5, 5, 4, 2, 2, [MediumLaser,SRM2], ["RA","LL"], [0,0], [SRM2Ammo], ["LT"], [0], [null,50], ["LifeSupport","Sensors","Cockpit","Sensors","LifeSupport"], ["Engine","Engine","Engine","Gyro","Gyro","Gyro","Gyro","Engine","Engine","Engine","Jumpjet"], ["Shoulder","UpperArmActuator","LowerArmActuator","HandActuator"], ["Shoulder","UpperArmActuator","LowerArmActuator","HandActuator"], ["Hip","UpperLegActuator","LowerLegActuator","FootActuator","Jumpjet"], ["Hip","UpperLegActuator","LowerLegActuator","FootActuator","Jumpjet"],["Jumpjet","HeatSink","HeatSink","HeatSink"],["Jumpjet","HeatSink","HeatSink","HeatSink"]);

var dict = {
  "Catapult" : Catapult,
  "Centurion" : Centurion,
  "Wasp" : Wasp
};



