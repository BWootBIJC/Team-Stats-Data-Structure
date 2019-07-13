const team ={
  _players: [{
    firstName: 'John',
    lastName: 'Hancock',
    age: 19,
  },
  {
    firstName: 'Jose',
    lastName: 'Bautista',
    age: 24,
  },
  {
   firstName: 'Tim',
   lastName: 'Tebow',
   age: 31,            
  }],
  _games: [{
    opponent: 'Seahawks',
    teamPoints: 35,
    opponentPoints: 28,
  },
  {
    opponent: 'Falcons',
    teamPoints: 21,
    opponentPoints: 17,
  },
  {
    opponent: 'Eagles',
    teamPoints: 14,
    opponentPoints: 21,        
  }],
  get players(){
   return this._players 
  },
  get games(){
   return this._games
  },
  addPlayer(firstName, lastName, age){
    let player = {
      fName: firstName,
      lName: lastName,
      yearsOld: age,
    }
    this._players.push(player) 
  },
  addGame(opponentName, myTeamPoints, opponentTeamPoints){
    const game = {
      opponentName: opponentName,
      myTeamPoints: myTeamPoints,
      opponentTeamPoints: opponentTeamPoints,
    }
    this._games.push(game)
  }
}

team.addPlayer('Steph', 'Curry', 28)
team.addPlayer('Lisa', 'Leslie', 44)
team.addPlayer('Bugs', 'Bunny', 76)

console.log(team.players)

team.addGame('Steelers', 21, 14)
team.addGame('Bengals', 10, 3)
team.addGame('Patriots', 21, 13)

console.log(team.games)