class Spaceship {
  constructor(name, crewMembers, phasers, shields) {
    this.name = name
    this.crewMembers = crewMembers
    this.phasers = phasers
    this.shields = shields

    this.cloaked = false
    this.warpDrive = 'disengaged'
    this.docked = !Boolean(crewMembers.length)
    this.phasersCharge = 'uncharged'

    this.registerCrewMembers()
  }

  registerCrewMembers(){
    this.crewMembers.forEach((member) =>{
      member.currentShip = this
    })
  }
}
