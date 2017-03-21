class CrewMember {
  static getConstructor(role){
    return {
      "Gunner": Gunner,
      "Pilot": Pilot,
      "Defender": Defender
    }[role]
  }
  constructor(position) {
    if (this.constructor != CrewMember) return

    let roleConstructor = CrewMember.getConstructor(position)
    let role = new roleConstructor
    role.currentShip = "Looking for a Rig"
    return role
  }
  engageWarpDrive() { return "had no effect" }
  setsInvisibility(){ return "had no effect" }
  chargePhasers()   { return "had no effect" }

  canDoJob(){
    return this.currentShip != "Looking for a Rig"
  }
}

class Gunner extends CrewMember {
  constructor(){
    super()
    this.position = "Gunner"
  }
  chargePhasers(){
    if (!this.canDoJob()) return super.chargePhasers()
    this.currentShip.phasersCharge = "charged!"
  }
}

class Pilot extends CrewMember {
  constructor(){
    super()
    this.position = "Pilot"
  }
  engageWarpDrive(){
    if (!this.canDoJob()) return super.chargePhasers()
    this.currentShip.warpDrive = "engaged!"
  }
}

class Defender extends CrewMember {
  constructor(){
    super()
    this.position = "Defender"
  }
  setsInvisibility(){
    if (!this.canDoJob()) return super.chargePhasers()
    this.currentShip.cloaked = true
  }
}
