import { v4 as uuidv4 } from 'uuid'

function Player(firstName, lastName, positions, overall, team) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.positions = positions;
    this.team = team;
    this.overall = overall;
    this.id = uuidv4();
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
