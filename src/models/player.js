import hash from 'object-hash';

function Player(firstName, lastName, positions, overall, team, usageCount) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.positions = positions;
    this.team = team;
    this.overall = overall;
    this.id = hash({firstName: firstName, lastName: lastName, team: team, overall: overall});
    this.usageCount = Number(localStorage.getItem("nba_draft." + this.id) || usageCount || 0);
}

Player.prototype.isSamePlayer = function(player) {
    return this.firstName === player.firstName && this.lastName === player.lastName;
};

Player.prototype.isExactSamePlayer = function(player) {
    return this.id === player.id;
};

Player.prototype.isIn = function(collection, exact=false) {
    for (let player of collection) {
        if (exact) {
            if (this.isExactSamePlayer(player)) {
                return true;
            }
        } else {
            if (this.isSamePlayer(player)) {
                return true;
            }
        }
    }
    return false;
}

Player.POSITION_POINT_GUARD = "PG"
Player.POSITION_SHOOTING_GUARD = "SG"
Player.POSITION_SMALL_FORWARD = "SF"
Player.POSITION_POWER_FORWARD = "PF"
Player.POSITION_CENTER = "C"
Player.ALL_POSITIONS = new Set([
    Player.POSITION_POINT_GUARD,
    Player.POSITION_SHOOTING_GUARD,
    Player.POSITION_SMALL_FORWARD,
    Player.POSITION_POWER_FORWARD,
    Player.POSITION_CENTER
])

export default Player;
