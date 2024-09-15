import Player from './player';
import {choice} from '../utils/random';

function PlayerCollection() {
    this.useAllPlayerVersions = false;
    this.reset();
    this.randomWeightValue = 1;
}

PlayerCollection.prototype.setUseAllPlayerVersions = function(useAllPlayerVersions) {
    this.useAllPlayerVersions = useAllPlayerVersions;
    this.reset();
}

PlayerCollection.prototype.setRandomWeightValue = function(randomWeightValue) {
    this.randomWeightValue = randomWeightValue;
}

PlayerCollection.prototype.clear = function() {
    this.pointGuards = [];
    this.shootingGuards = [];
    this.smallForwards = [];
    this.powerForwards = [];
    this.centers = [];
}

PlayerCollection.prototype.addPlayer = function(firstName, lastName, positions, overall, team, usageCount) {
    const newPlayer = new Player(firstName, lastName, positions, overall, team, usageCount);
    for (let position of positions) {
        switch (position) {
            case Player.POSITION_POINT_GUARD:
                this.pointGuards.push(newPlayer);
                break;
            case Player.POSITION_SHOOTING_GUARD:
                this.shootingGuards.push(newPlayer);
                break;
            case Player.POSITION_SMALL_FORWARD:
                this.smallForwards.push(newPlayer);
                break;
            case Player.POSITION_POWER_FORWARD:
                this.powerForwards.push(newPlayer);
                break;
            case Player.POSITION_CENTER:
                this.centers.push(newPlayer);
                break;
        }
    }
}

PlayerCollection.prototype.removePlayer = function(playerToRemove) {
    let positionPlayers = [];
    for (let position of playerToRemove.positions) {
        switch (position) {
            case Player.POSITION_POINT_GUARD:
                positionPlayers = this.pointGuards;
                break;
            case Player.POSITION_SHOOTING_GUARD:
                positionPlayers = this.shootingGuards;
                break;
            case Player.POSITION_SMALL_FORWARD:
                positionPlayers = this.smallForwards;
                break;
            case Player.POSITION_POWER_FORWARD:
                positionPlayers = this.powerForwards;
                break;
            case Player.POSITION_CENTER:
                positionPlayers = this.centers;
                break;
        }
        
        const playerIndexesToRemove = [];
        positionPlayers.forEach((player, index) => {
            if (player.isSamePlayer(playerToRemove)) {
                playerIndexesToRemove.push(index);
            }
        })
        playerIndexesToRemove.reverse();
        for (let playerIndexToRemove of playerIndexesToRemove) {
            positionPlayers.splice(playerIndexToRemove, 1);
        }
    }

    localStorage.setItem("nba_draft." + playerToRemove.id, playerToRemove.usageCount + 1);
}

PlayerCollection.prototype.populate = function() {
    this.populateCurrent();
    this.populateClassic();
    this.populateStephEra();
    this.populateLeBronEra();
    this.populateKobeEra();
    this.populateJordanEra();
    this.populateMagicEra();
    this.populateAllTime();
    this.populateExtended();
}

PlayerCollection.prototype.populateAllTime = function() {
    this.addPlayer("Elvin", "Hayes", [Player.POSITION_POWER_FORWARD], 94, "Washington Wizards All-Time");
    this.addPlayer("Wes", "Unseld", [Player.POSITION_POWER_FORWARD], 94, "Washington Wizards All-Time");
    this.addPlayer("Gilbert", "Arenas", [Player.POSITION_POINT_GUARD], 93, "Washington Wizards All-Time");
    if (this.useAllPlayerVersions)
        this.addPlayer("Bradley", "Beal", [Player.POSITION_SHOOTING_GUARD], 89, "Washington Wizards All-Time");
    this.addPlayer("Earl", "Monroe", [Player.POSITION_POINT_GUARD], 89, "Washington Wizards All-Time");
    if (this.useAllPlayerVersions)
        this.addPlayer("Moses", "Malone", [Player.POSITION_CENTER], 89, "Washington Wizards All-Time");
    this.addPlayer("Caron", "Butler", [Player.POSITION_SMALL_FORWARD], 88, "Washington Wizards All-Time");
    this.addPlayer("Phil", "Chenier", [Player.POSITION_SHOOTING_GUARD, Player.POSITION_POINT_GUARD], 88, "Washington Wizards All-Time");
    this.addPlayer("Jeff", "Ruland", [Player.POSITION_CENTER, Player.POSITION_POWER_FORWARD], 87, "Washington Wizards All-Time");
    this.addPlayer("Antawn", "Jamison", [Player.POSITION_POWER_FORWARD, Player.POSITION_SMALL_FORWARD], 87, "Washington Wizards All-Time");
    this.addPlayer("Don", "Ohl", [Player.POSITION_SHOOTING_GUARD, Player.POSITION_POINT_GUARD], 87, "Washington Wizards All-Time");
    this.addPlayer("Bernard", "King", [Player.POSITION_SMALL_FORWARD], 87, "Washington Wizards All-Time");
    this.addPlayer("Jack", "Marin", [Player.POSITION_SMALL_FORWARD, Player.POSITION_SHOOTING_GUARD], 86, "Washington Wizards All-Time");
    this.addPlayer("Jeff", "Malone", [Player.POSITION_SHOOTING_GUARD, Player.POSITION_SMALL_FORWARD], 86, "Washington Wizards All-Time");
    
    this.addPlayer("Wilt", "Chamberlain", [Player.POSITION_CENTER], 99, "Golden State Warriors All-Time");
    this.addPlayer("Stephen", "Curry", [Player.POSITION_POINT_GUARD], 98, "Golden State Warriors All-Time");
    if (this.useAllPlayerVersions)
        this.addPlayer("Kevin", "Durant", [Player.POSITION_SMALL_FORWARD, Player.POSITION_POWER_FORWARD], 97, "Golden State Warriors All-Time");
    this.addPlayer("Rick", "Barry", [Player.POSITION_SMALL_FORWARD, Player.POSITION_POWER_FORWARD], 95, "Golden State Warriors All-Time");
    this.addPlayer("Chris", "Mullin", [Player.POSITION_SMALL_FORWARD, Player.POSITION_SHOOTING_GUARD], 94, "Golden State Warriors All-Time");
    this.addPlayer("Nate", "Thurmond", [Player.POSITION_CENTER], 92, "Golden State Warriors All-Time");
    this.addPlayer("Paul", "Arizin", [Player.POSITION_SMALL_FORWARD, Player.POSITION_SHOOTING_GUARD], 91, "Golden State Warriors All-Time");
    this.addPlayer("Baron", "Davis", [Player.POSITION_POINT_GUARD], 91, "Golden State Warriors All-Time");
    if (this.useAllPlayerVersions)
        this.addPlayer("Klay", "Thompson", [Player.POSITION_SHOOTING_GUARD, Player.POSITION_SMALL_FORWARD], 91, "Golden State Warriors All-Time");
    this.addPlayer("Tim", "Hardaway", [Player.POSITION_POINT_GUARD], 90, "Golden State Warriors All-Time");
    if (this.useAllPlayerVersions)
        this.addPlayer("Draymond", "Green", [Player.POSITION_POWER_FORWARD], 89, "Golden State Warriors All-Time");
    this.addPlayer("Sleepy", "Floyd", [Player.POSITION_POINT_GUARD], 88, "Golden State Warriors All-Time");
    if (this.useAllPlayerVersions)
        this.addPlayer("Mitch", "Richmond", [Player.POSITION_SHOOTING_GUARD, Player.POSITION_SMALL_FORWARD], 88, "Golden State Warriors All-Time");
    this.addPlayer("Jason", "Richardson", [Player.POSITION_SHOOTING_GUARD, Player.POSITION_SMALL_FORWARD], 87, "Golden State Warriors All-Time");
    this.addPlayer("Purvis", "Short", [Player.POSITION_SMALL_FORWARD, Player.POSITION_SHOOTING_GUARD], 86, "Golden State Warriors All-Time");
        
    this.addPlayer("Clyde", "Drexler", [Player.POSITION_SHOOTING_GUARD, Player.POSITION_SMALL_FORWARD], 96, "Portland Trail Blazers All-Time");
    this.addPlayer("Bill", "Walton", [Player.POSITION_CENTER], 95, "Portland Trail Blazers All-Time");
    this.addPlayer("Damian", "Lillard", [Player.POSITION_POINT_GUARD], 94, "Portland Trail Blazers All-Time");
    this.addPlayer("Brandon", "Roy", [Player.POSITION_SHOOTING_GUARD, Player.POSITION_SMALL_FORWARD], 91, "Portland Trail Blazers All-Time");
    this.addPlayer("Maurice", "Lucas", [Player.POSITION_POWER_FORWARD, Player.POSITION_SMALL_FORWARD], 90, "Portland Trail Blazers All-Time");
    this.addPlayer("LaMarcus", "Aldridge", [Player.POSITION_POWER_FORWARD, Player.POSITION_CENTER], 89, "Portland Trail Blazers All-Time");
    this.addPlayer("Arvydas", "Sabonis", [Player.POSITION_CENTER], 88, "Portland Trail Blazers All-Time");
    this.addPlayer("Terry", "Porter", [Player.POSITION_POINT_GUARD], 87, "Portland Trail Blazers All-Time");
    this.addPlayer("Sidney", "Wicks", [Player.POSITION_POWER_FORWARD, Player.POSITION_SMALL_FORWARD], 87, "Portland Trail Blazers All-Time");
    this.addPlayer("Geoff", "Petrie", [Player.POSITION_SHOOTING_GUARD, Player.POSITION_POINT_GUARD], 87, "Portland Trail Blazers All-Time");
    this.addPlayer("Jerome", "Kersey", [Player.POSITION_SMALL_FORWARD, Player.POSITION_POWER_FORWARD], 87, "Portland Trail Blazers All-Time");
    this.addPlayer("C.J.", "McCollum", [Player.POSITION_SHOOTING_GUARD], 86, "Portland Trail Blazers All-Time");
    if (this.useAllPlayerVersions)
        this.addPlayer("Kiki", "Vandeweghe", [Player.POSITION_SMALL_FORWARD, Player.POSITION_POWER_FORWARD], 86, "Portland Trail Blazers All-Time");
    this.addPlayer("Jim", "Paxson", [Player.POSITION_SHOOTING_GUARD, Player.POSITION_POINT_GUARD], 85, "Portland Trail Blazers All-Time");
    this.addPlayer("Kevin", "Duckworth", [Player.POSITION_CENTER], 85, "Portland Trail Blazers All-Time");
    
    this.addPlayer("Kevin", "Garnett", [Player.POSITION_POWER_FORWARD, Player.POSITION_CENTER], 98, "Minnesota Timberwolves All-Time");
    if (this.useAllPlayerVersions)
        this.addPlayer("Anthony", "Edwards", [Player.POSITION_SHOOTING_GUARD, Player.POSITION_SMALL_FORWARD], 91, "Minnesota Timberwolves All-Time");
    this.addPlayer("Kevin", "Love", [Player.POSITION_POWER_FORWARD], 91, "Minnesota Timberwolves All-Time");
    this.addPlayer("Karl-Anthony", "Towns", [Player.POSITION_CENTER], 89, "Minnesota Timberwolves All-Time");
    this.addPlayer("Sam", "Cassell", [Player.POSITION_POINT_GUARD], 88, "Minnesota Timberwolves All-Time");
    this.addPlayer("Tom", "Gugliotta", [Player.POSITION_POWER_FORWARD, Player.POSITION_SMALL_FORWARD], 88, "Minnesota Timberwolves All-Time");
    this.addPlayer("Stephon", "Marbury", [Player.POSITION_POINT_GUARD], 87, "Minnesota Timberwolves All-Time");
    if (this.useAllPlayerVersions)
        this.addPlayer("Jimmy", "Butler", [Player.POSITION_SHOOTING_GUARD, Player.POSITION_SMALL_FORWARD], 87, "Minnesota Timberwolves All-Time");
    if (this.useAllPlayerVersions)
        this.addPlayer("Terrell", "Brandon", [Player.POSITION_POINT_GUARD], 86, "Minnesota Timberwolves All-Time");
    this.addPlayer("Wally", "Szczerbiak", [Player.POSITION_SMALL_FORWARD, Player.POSITION_SHOOTING_GUARD], 85, "Minnesota Timberwolves All-Time");
    this.addPlayer("Doug", "West", [Player.POSITION_SHOOTING_GUARD, Player.POSITION_SMALL_FORWARD], 85, "Minnesota Timberwolves All-Time");
    this.addPlayer("Christian", "Laettner", [Player.POSITION_POWER_FORWARD, Player.POSITION_CENTER], 85, "Minnesota Timberwolves All-Time");
    this.addPlayer("Isaiah", "Rider", [Player.POSITION_SHOOTING_GUARD], 84, "Minnesota Timberwolves All-Time");
    if (this.useAllPlayerVersions)
        this.addPlayer("Andrew", "Wiggins", [Player.POSITION_SMALL_FORWARD, Player.POSITION_SHOOTING_GUARD], 83, "Minnesota Timberwolves All-Time");
    if (this.useAllPlayerVersions)
        this.addPlayer("Latrell", "Sprewell", [Player.POSITION_SHOOTING_GUARD, Player.POSITION_SMALL_FORWARD], 83, "Minnesota Timberwolves All-Time");

    this.addPlayer("Kevin", "Durant", [Player.POSITION_SMALL_FORWARD, Player.POSITION_POWER_FORWARD], 97, "Oklahoma City Thunder All-Time");
    this.addPlayer("Gary", "Payton", [Player.POSITION_POINT_GUARD], 95, "Oklahoma City Thunder All-Time");
    if (this.useAllPlayerVersions)
        this.addPlayer("Russell", "Westbrook", [Player.POSITION_POINT_GUARD], 95, "Oklahoma City Thunder All-Time");
    this.addPlayer("Ray", "Allen", [Player.POSITION_SHOOTING_GUARD, Player.POSITION_SMALL_FORWARD], 94, "Oklahoma City Thunder All-Time");
    if (this.useAllPlayerVersions)
        this.addPlayer("Shai", "Gilgeous-Alexander", [Player.POSITION_SHOOTING_GUARD, Player.POSITION_POINT_GUARD], 93, "Oklahoma City Thunder All-Time");
    if (this.useAllPlayerVersions)
        this.addPlayer("Dennis", "Johnson", [Player.POSITION_POINT_GUARD, Player.POSITION_SHOOTING_GUARD], 91, "Oklahoma City Thunder All-Time");
    this.addPlayer("Shawn", "Kemp", [Player.POSITION_POWER_FORWARD, Player.POSITION_CENTER], 90, "Oklahoma City Thunder All-Time");
    this.addPlayer("Spencer", "Haywood", [Player.POSITION_POWER_FORWARD], 89, "Oklahoma City Thunder All-Time");
    this.addPlayer("Gus", "Williams", [Player.POSITION_POINT_GUARD], 89, "Oklahoma City Thunder All-Time");
    this.addPlayer("Jack", "Sikma", [Player.POSITION_CENTER], 89, "Oklahoma City Thunder All-Time");
    this.addPlayer("Rashard", "Lewis", [Player.POSITION_POWER_FORWARD, Player.POSITION_SMALL_FORWARD], 89, "Oklahoma City Thunder All-Time");
    this.addPlayer("Fred", "Brown", [Player.POSITION_SHOOTING_GUARD, Player.POSITION_POINT_GUARD], 88, "Oklahoma City Thunder All-Time");
    this.addPlayer("Dale", "Ellis", [Player.POSITION_SHOOTING_GUARD, Player.POSITION_SMALL_FORWARD], 88, "Oklahoma City Thunder All-Time");
    this.addPlayer("Detlef", "Schrempf", [Player.POSITION_SMALL_FORWARD, Player.POSITION_POWER_FORWARD], 87, "Oklahoma City Thunder All-Time");
    this.addPlayer("Xavier", "McDaniel", [Player.POSITION_SMALL_FORWARD, Player.POSITION_POWER_FORWARD], 87, "Oklahoma City Thunder All-Time");

    this.addPlayer("Steve", "Nash", [Player.POSITION_POINT_GUARD], 96, "Phoenix Suns All-Time");
    this.addPlayer("Dennis", "Johnson", [Player.POSITION_POINT_GUARD, Player.POSITION_SHOOTING_GUARD], 94, "Phoenix Suns All-Time");
    this.addPlayer("Amar'e", "Stoudemire", [Player.POSITION_POWER_FORWARD, Player.POSITION_CENTER], 92, "Phoenix Suns All-Time");
    if (this.useAllPlayerVersions)
        this.addPlayer("Devin", "Booker", [Player.POSITION_SHOOTING_GUARD], 92, "Phoenix Suns All-Time");
    this.addPlayer("Shawn", "Marion", [Player.POSITION_SMALL_FORWARD, Player.POSITION_POWER_FORWARD], 91, "Phoenix Suns All-Time");
    this.addPlayer("Walter", "Davis", [Player.POSITION_SHOOTING_GUARD, Player.POSITION_SMALL_FORWARD], 90, "Phoenix Suns All-Time");
    if (this.useAllPlayerVersions)
        this.addPlayer("Jason", "Kidd", [Player.POSITION_POINT_GUARD], 90, "Phoenix Suns All-Time");
    this.addPlayer("Tom", "Chambers", [Player.POSITION_POWER_FORWARD, Player.POSITION_SMALL_FORWARD], 89, "Phoenix Suns All-Time");
    this.addPlayer("Kevin", "Johnson", [Player.POSITION_POINT_GUARD], 89, "Phoenix Suns All-Time");
    this.addPlayer("Charlie", "Scott", [Player.POSITION_SHOOTING_GUARD, Player.POSITION_POINT_GUARD], 89, "Phoenix Suns All-Time");
    this.addPlayer("Paul", "Westphal", [Player.POSITION_SHOOTING_GUARD, Player.POSITION_POINT_GUARD], 88, "Phoenix Suns All-Time");
    this.addPlayer("Dick", "Van Arsdale", [Player.POSITION_SHOOTING_GUARD, Player.POSITION_SMALL_FORWARD], 88, "Phoenix Suns All-Time");
    this.addPlayer("Dan", "Majerle", [Player.POSITION_SHOOTING_GUARD, Player.POSITION_SMALL_FORWARD], 88, "Phoenix Suns All-Time");
    this.addPlayer("Larry", "Nance", [Player.POSITION_SMALL_FORWARD, Player.POSITION_POWER_FORWARD], 88, "Phoenix Suns All-Time");
    this.addPlayer("Alvan", "Adams", [Player.POSITION_POWER_FORWARD], 85, "Phoenix Suns All-Time");

    this.addPlayer("Tim", "Duncan", [Player.POSITION_POWER_FORWARD, Player.POSITION_CENTER], 98, "San Antonio Spurs All-Time");
    this.addPlayer("David", "Robinson", [Player.POSITION_CENTER], 96, "San Antonio Spurs All-Time");
    this.addPlayer("Tony", "Parker", [Player.POSITION_POINT_GUARD], 95, "San Antonio Spurs All-Time");
    if (this.useAllPlayerVersions)
        this.addPlayer("Kawhi", "Leonard", [Player.POSITION_SMALL_FORWARD, Player.POSITION_POWER_FORWARD], 95, "San Antonio Spurs All-Time");
    this.addPlayer("George", "Gervin", [Player.POSITION_SHOOTING_GUARD, Player.POSITION_SMALL_FORWARD], 94, "San Antonio Spurs All-Time");
    this.addPlayer("Manu", "Ginobili", [Player.POSITION_SHOOTING_GUARD, Player.POSITION_SMALL_FORWARD], 90, "San Antonio Spurs All-Time");
    this.addPlayer("Louie", "Dampier", [Player.POSITION_POINT_GUARD], 89, "San Antonio Spurs All-Time");
    this.addPlayer("Larry", "Kenon", [Player.POSITION_SMALL_FORWARD], 88, "San Antonio Spurs All-Time");
    this.addPlayer("Sean", "Elliott", [Player.POSITION_SMALL_FORWARD, Player.POSITION_SHOOTING_GUARD], 87, "San Antonio Spurs All-Time");
    if (this.useAllPlayerVersions)
        this.addPlayer("Victor", "Wembanyama", [Player.POSITION_CENTER], 86, "San Antonio Spurs All-Time");
    this.addPlayer("Bruce", "Bowen", [Player.POSITION_SMALL_FORWARD, Player.POSITION_SHOOTING_GUARD], 86, "San Antonio Spurs All-Time");
    this.addPlayer("James", "Silas", [Player.POSITION_SHOOTING_GUARD], 86, "San Antonio Spurs All-Time");
    if (this.useAllPlayerVersions)
        this.addPlayer("LaMarcus", "Aldridge", [Player.POSITION_POWER_FORWARD, Player.POSITION_CENTER], 86, "San Antonio Spurs All-Time");
    if (this.useAllPlayerVersions)
        this.addPlayer("Artis", "Gilmore", [Player.POSITION_CENTER], 85, "San Antonio Spurs All-Time");
    this.addPlayer("Johnny", "Moore", [Player.POSITION_POINT_GUARD], 84, "San Antonio Spurs All-Time");

    this.addPlayer("Hakeem", "Olajuwon", [Player.POSITION_CENTER], 99, "Houston Rockets All-Time");
    this.addPlayer("Moses", "Malone", [Player.POSITION_CENTER], 97, "Houston Rockets All-Time");
    this.addPlayer("James", "Harden", [Player.POSITION_SHOOTING_GUARD, Player.POSITION_POINT_GUARD], 95, "Houston Rockets All-Time");
    if (this.useAllPlayerVersions)
        this.addPlayer("Clyde", "Drexler", [Player.POSITION_SHOOTING_GUARD, Player.POSITION_SMALL_FORWARD], 93, "Houston Rockets All-Time");
    if (this.useAllPlayerVersions)
        this.addPlayer("Tracy", "McGrady", [Player.POSITION_SHOOTING_GUARD], 92, "Houston Rockets All-Time");
    this.addPlayer("Calvin", "Murphy", [Player.POSITION_POINT_GUARD], 91, "Houston Rockets All-Time");
    this.addPlayer("Yao", "Ming", [Player.POSITION_CENTER], 91, "Houston Rockets All-Time");
    if (this.useAllPlayerVersions)
        this.addPlayer("Chris", "Paul", [Player.POSITION_POINT_GUARD], 90, "Houston Rockets All-Time");
    this.addPlayer("Ralph", "Sampson", [Player.POSITION_CENTER], 89, "Houston Rockets All-Time");
    if (this.useAllPlayerVersions)
        this.addPlayer("Elvin", "Hayes", [Player.POSITION_POWER_FORWARD], 89, "Houston Rockets All-Time");
    this.addPlayer("Rudy", "Tomjanovich", [Player.POSITION_SMALL_FORWARD, Player.POSITION_POWER_FORWARD], 88, "Houston Rockets All-Time");
    this.addPlayer("Steve", "Francis", [Player.POSITION_POINT_GUARD], 88, "Houston Rockets All-Time");
    this.addPlayer("Kenny", "Smith", [Player.POSITION_POINT_GUARD], 87, "Houston Rockets All-Time");
    this.addPlayer("Otis", "Thorpe", [Player.POSITION_POWER_FORWARD], 86, "Houston Rockets All-Time");
    this.addPlayer("Vernon", "Maxwell", [Player.POSITION_SHOOTING_GUARD, Player.POSITION_SMALL_FORWARD], 83, "Houston Rockets All-Time");

    this.addPlayer("Vince", "Carter", [Player.POSITION_SMALL_FORWARD, Player.POSITION_SHOOTING_GUARD], 96, "Toronto Raptors All-Time");
    this.addPlayer("Kawhi", "Leonard", [Player.POSITION_SMALL_FORWARD, Player.POSITION_POWER_FORWARD], 96, "Toronto Raptors All-Time");
    if (this.useAllPlayerVersions)
        this.addPlayer("Chris", "Bosh", [Player.POSITION_CENTER, Player.POSITION_POWER_FORWARD], 90, "Toronto Raptors All-Time");
    this.addPlayer("Kyle", "Lowry", [Player.POSITION_POINT_GUARD], 89, "Toronto Raptors All-Time");
    if (this.useAllPlayerVersions)
        this.addPlayer("DeMar", "DeRozan", [Player.POSITION_SHOOTING_GUARD, Player.POSITION_SMALL_FORWARD], 89, "Toronto Raptors All-Time");
    this.addPlayer("Damon", "Stoudamire", [Player.POSITION_POINT_GUARD], 86, "Toronto Raptors All-Time");
    this.addPlayer("Pascal", "Siakam", [Player.POSITION_POWER_FORWARD], 86, "Toronto Raptors All-Time");
    this.addPlayer("Scottie", "Barnes", [Player.POSITION_SMALL_FORWARD, Player.POSITION_POWER_FORWARD], 86, "Toronto Raptors All-Time");
    this.addPlayer("Antonio", "Davis", [Player.POSITION_POWER_FORWARD], 85, "Toronto Raptors All-Time");
    this.addPlayer("Morris", "Peterson", [Player.POSITION_SHOOTING_GUARD, Player.POSITION_SMALL_FORWARD], 85, "Toronto Raptors All-Time");
    if (this.useAllPlayerVersions)
        this.addPlayer("Tracy", "McGrady", [Player.POSITION_SHOOTING_GUARD], 85, "Toronto Raptors All-Time");
    this.addPlayer("Andrea", "Bargnani", [Player.POSITION_CENTER, Player.POSITION_POWER_FORWARD], 84, "Toronto Raptors All-Time");
    this.addPlayer("Doug", "Christie", [Player.POSITION_SHOOTING_GUARD, Player.POSITION_SMALL_FORWARD], 84, "Toronto Raptors All-Time");
    this.addPlayer("Fred", "VanVleet", [Player.POSITION_POINT_GUARD], 83, "Toronto Raptors All-Time");
    if (this.useAllPlayerVersions)
        this.addPlayer("Jonas", "Valanciunas", [Player.POSITION_CENTER], 81, "Toronto Raptors All-Time");

    this.addPlayer("Isiah", "Thomas", [Player.POSITION_POINT_GUARD], 95, "Detroit Pistons All-Time");
    this.addPlayer("Joe", "Dumars", [Player.POSITION_SHOOTING_GUARD, Player.POSITION_POINT_GUARD], 93, "Detroit Pistons All-Time");
    this.addPlayer("Grant", "Hill", [Player.POSITION_SMALL_FORWARD, Player.POSITION_SHOOTING_GUARD], 93, "Detroit Pistons All-Time");
    this.addPlayer("Bob", "Lanier", [Player.POSITION_CENTER], 93, "Detroit Pistons All-Time");
    this.addPlayer("Chauncey", "Billups", [Player.POSITION_POINT_GUARD, Player.POSITION_SHOOTING_GUARD], 93, "Detroit Pistons All-Time");
    this.addPlayer("Dave", "Bing", [Player.POSITION_POINT_GUARD, Player.POSITION_SHOOTING_GUARD], 90, "Detroit Pistons All-Time");
    this.addPlayer("Ben", "Wallace", [Player.POSITION_POWER_FORWARD], 89, "Detroit Pistons All-Time");
    if (this.useAllPlayerVersions)
        this.addPlayer("Dave", "DeBusschere", [Player.POSITION_POWER_FORWARD, Player.POSITION_SMALL_FORWARD], 89, "Detroit Pistons All-Time");
    if (this.useAllPlayerVersions)
        this.addPlayer("Dennis", "Rodman", [Player.POSITION_POWER_FORWARD], 89, "Detroit Pistons All-Time");
    this.addPlayer("Jerry", "Stackhouse", [Player.POSITION_SHOOTING_GUARD, Player.POSITION_SMALL_FORWARD], 89, "Detroit Pistons All-Time");
    this.addPlayer("Richard", "Hamilton", [Player.POSITION_SHOOTING_GUARD, Player.POSITION_SMALL_FORWARD], 89, "Detroit Pistons All-Time");
    this.addPlayer("Bailey", "Howell", [Player.POSITION_SMALL_FORWARD, Player.POSITION_POWER_FORWARD], 88, "Detroit Pistons All-Time");
    this.addPlayer("Bill", "Laimbeer", [Player.POSITION_CENTER], 87, "Detroit Pistons All-Time");
    this.addPlayer("Andre", "Drummond", [Player.POSITION_CENTER], 86, "Detroit Pistons All-Time");
    this.addPlayer("Kelly", "Tripucka", [Player.POSITION_SHOOTING_GUARD, Player.POSITION_SMALL_FORWARD], 86, "Detroit Pistons All-Time");

    this.addPlayer("Chris", "Paul", [Player.POSITION_POINT_GUARD], 97, "New Orleans Pelicans All-Time");
    this.addPlayer("Anthony", "Davis", [Player.POSITION_POWER_FORWARD, Player.POSITION_CENTER], 94, "New Orleans Pelicans All-Time");
    this.addPlayer("Baron", "Davis", [Player.POSITION_POINT_GUARD], 92, "New Orleans Pelicans All-Time");
    this.addPlayer("Jamal", "Mashburn", [Player.POSITION_SMALL_FORWARD, Player.POSITION_POWER_FORWARD], 89, "New Orleans Pelicans All-Time");
    this.addPlayer("David", "West", [Player.POSITION_POWER_FORWARD], 88, "New Orleans Pelicans All-Time");
    if (this.useAllPlayerVersions)
        this.addPlayer("Zion", "Williamson", [Player.POSITION_POWER_FORWARD], 88, "New Orleans Pelicans All-Time");
    if (this.useAllPlayerVersions)
        this.addPlayer("Jrue", "Holiday", [Player.POSITION_POINT_GUARD, Player.POSITION_SHOOTING_GUARD], 86, "New Orleans Pelicans All-Time");
    this.addPlayer("Brandon", "Ingram", [Player.POSITION_SMALL_FORWARD, Player.POSITION_POWER_FORWARD], 85, "New Orleans Pelicans All-Time");
    if (this.useAllPlayerVersions)
        this.addPlayer("DeMarcus", "Cousins", [Player.POSITION_CENTER], 85, "New Orleans Pelicans All-Time");
    this.addPlayer("David", "Wesley", [Player.POSITION_SHOOTING_GUARD], 84, "New Orleans Pelicans All-Time");
    this.addPlayer("Tyson", "Chandler", [Player.POSITION_CENTER], 83, "New Orleans Pelicans All-Time");
    if (this.useAllPlayerVersions)
        this.addPlayer("Julius", "Randle", [Player.POSITION_POWER_FORWARD], 83, "New Orleans Pelicans All-Time");
    this.addPlayer("Lonzo", "Ball", [Player.POSITION_POINT_GUARD, Player.POSITION_SHOOTING_GUARD], 82, "New Orleans Pelicans All-Time");
    if (this.useAllPlayerVersions)
        this.addPlayer("Peja", "Stojakovic", [Player.POSITION_SHOOTING_GUARD], 82, "New Orleans Pelicans All-Time");
    this.addPlayer("Eric", "Gordon", [Player.POSITION_SHOOTING_GUARD, Player.POSITION_SMALL_FORWARD], 81, "New Orleans Pelicans All-Time");

    this.addPlayer("Paul", "George", [Player.POSITION_SMALL_FORWARD, Player.POSITION_SHOOTING_GUARD], 93, "Indiana Pacers All-Time");
    this.addPlayer("Mel", "Daniels", [Player.POSITION_POWER_FORWARD], 92, "Indiana Pacers All-Time");
    this.addPlayer("Jermaine", "O'Neal", [Player.POSITION_CENTER, Player.POSITION_POWER_FORWARD], 91, "Indiana Pacers All-Time");
    this.addPlayer("Freddie", "Lewis", [Player.POSITION_POINT_GUARD, Player.POSITION_SHOOTING_GUARD], 89, "Indiana Pacers All-Time");
    this.addPlayer("George", "McGinnis", [Player.POSITION_POWER_FORWARD], 89, "Indiana Pacers All-Time");
    this.addPlayer("Danny", "Granger", [Player.POSITION_SMALL_FORWARD, Player.POSITION_POWER_FORWARD], 88, "Indiana Pacers All-Time");
    this.addPlayer("Ron", "Artest", [Player.POSITION_SMALL_FORWARD], 88, "Indiana Pacers All-Time");
    this.addPlayer("Victor", "Oladipo", [Player.POSITION_SHOOTING_GUARD], 88, "Indiana Pacers All-Time");
    this.addPlayer("Bob", "Netolicky", [Player.POSITION_POWER_FORWARD], 88, "Indiana Pacers All-Time");
    if (this.useAllPlayerVersions)
        this.addPlayer("Tyrese", "Haliburton", [Player.POSITION_POINT_GUARD], 87, "Indiana Pacers All-Time");
    this.addPlayer("Don", "Buse", [Player.POSITION_POINT_GUARD, Player.POSITION_SHOOTING_GUARD], 87, "Indiana Pacers All-Time");
    this.addPlayer("Chuck", "Person", [Player.POSITION_SMALL_FORWARD, Player.POSITION_POWER_FORWARD], 87, "Indiana Pacers All-Time");
    this.addPlayer("Rik", "Smits", [Player.POSITION_CENTER], 87, "Indiana Pacers All-Time");
    if (this.useAllPlayerVersions)
        this.addPlayer("Domantas", "Sabonis", [Player.POSITION_POWER_FORWARD, Player.POSITION_CENTER], 86, "Indiana Pacers All-Time");
    this.addPlayer("Roy", "Hibbert", [Player.POSITION_CENTER], 86, "Indiana Pacers All-Time");

    this.addPlayer("Nikola", "Jokic", [Player.POSITION_CENTER], 97, "Denver Nuggets All-Time");
    this.addPlayer("David", "Thompson", [Player.POSITION_SHOOTING_GUARD, Player.POSITION_SMALL_FORWARD], 95, "Denver Nuggets All-Time");
    this.addPlayer("Carmelo", "Anthony", [Player.POSITION_SMALL_FORWARD, Player.POSITION_POWER_FORWARD], 95, "Denver Nuggets All-Time");
    this.addPlayer("Alex", "English", [Player.POSITION_SMALL_FORWARD, Player.POSITION_POWER_FORWARD], 93, "Denver Nuggets All-Time");
    this.addPlayer("Fat", "Lever", [Player.POSITION_POINT_GUARD, Player.POSITION_SHOOTING_GUARD], 92, "Denver Nuggets All-Time");
    this.addPlayer("Dan", "Issel", [Player.POSITION_POWER_FORWARD], 92, "Denver Nuggets All-Time");
    if (this.useAllPlayerVersions)
        this.addPlayer("Allen", "Iverson", [Player.POSITION_POINT_GUARD, Player.POSITION_SHOOTING_GUARD], 90, "Denver Nuggets All-Time");
    if (this.useAllPlayerVersions)
        this.addPlayer("Dikembe", "Mutombo", [Player.POSITION_CENTER], 90, "Denver Nuggets All-Time");
    this.addPlayer("Byron", "Beck", [Player.POSITION_POWER_FORWARD, Player.POSITION_SMALL_FORWARD], 89, "Denver Nuggets All-Time");
    this.addPlayer("Mahmoud", "Abdul-Rauf", [Player.POSITION_POINT_GUARD], 89, "Denver Nuggets All-Time");
    this.addPlayer("Kiki", "Vandeweghe", [Player.POSITION_SMALL_FORWARD, Player.POSITION_POWER_FORWARD], 89, "Denver Nuggets All-Time");
    this.addPlayer("Antonio", "McDyess", [Player.POSITION_POWER_FORWARD], 88, "Denver Nuggets All-Time");
    if (this.useAllPlayerVersions)
        this.addPlayer("Chauncey", "Billups", [Player.POSITION_POINT_GUARD, Player.POSITION_SHOOTING_GUARD], 88, "Denver Nuggets All-Time");
    this.addPlayer("Jamal", "Murray", [Player.POSITION_POINT_GUARD, Player.POSITION_SHOOTING_GUARD], 87, "Denver Nuggets All-Time");
    if (this.useAllPlayerVersions)
        this.addPlayer("Marcus", "Camby", [Player.POSITION_CENTER], 85, "Denver Nuggets All-Time");

    this.addPlayer("Julius", "Erving", [Player.POSITION_SMALL_FORWARD, Player.POSITION_SHOOTING_GUARD], 97, "Brooklyn Nets All-Time");
    if (this.useAllPlayerVersions)
        this.addPlayer("Kevin", "Durant", [Player.POSITION_POWER_FORWARD, Player.POSITION_SMALL_FORWARD], 96, "Brooklyn Nets All-Time");
    this.addPlayer("Jason", "Kidd", [Player.POSITION_POINT_GUARD], 95, "Brooklyn Nets All-Time");
    this.addPlayer("Drazen", "Petrovic", [Player.POSITION_SHOOTING_GUARD, Player.POSITION_SMALL_FORWARD], 90, "Brooklyn Nets All-Time");
    if (this.useAllPlayerVersions)
        this.addPlayer("Vince", "Carter", [Player.POSITION_SMALL_FORWARD, Player.POSITION_SHOOTING_GUARD], 90, "Brooklyn Nets All-Time");
    if (this.useAllPlayerVersions)
        this.addPlayer("Kyrie", "Irving", [Player.POSITION_POINT_GUARD], 89, "Brooklyn Nets All-Time");
    if (this.useAllPlayerVersions)
        this.addPlayer("James", "Harden", [Player.POSITION_SHOOTING_GUARD, Player.POSITION_POINT_GUARD], 89, "Brooklyn Nets All-Time");
    this.addPlayer("Derrick", "Coleman", [Player.POSITION_POWER_FORWARD, Player.POSITION_CENTER], 88, "Brooklyn Nets All-Time");
    this.addPlayer("Buck", "Williams", [Player.POSITION_POWER_FORWARD], 88, "Brooklyn Nets All-Time");
    this.addPlayer("Kenny", "Anderson", [Player.POSITION_POINT_GUARD], 88, "Brooklyn Nets All-Time");
    this.addPlayer("Brook", "Lopez", [Player.POSITION_CENTER], 87, "Brooklyn Nets All-Time");
    this.addPlayer("Richard", "Jefferson", [Player.POSITION_SMALL_FORWARD, Player.POSITION_SHOOTING_GUARD], 87, "Brooklyn Nets All-Time");
    this.addPlayer("Kenyon", "Martin", [Player.POSITION_POWER_FORWARD], 87, "Brooklyn Nets All-Time");
    if (this.useAllPlayerVersions)
        this.addPlayer("Otis", "Birdsong", [Player.POSITION_SHOOTING_GUARD], 86, "Brooklyn Nets All-Time");
    this.addPlayer("Keith", "Van Horn", [Player.POSITION_SMALL_FORWARD, Player.POSITION_POWER_FORWARD], 86, "Brooklyn Nets All-Time");

    this.addPlayer("Dirk", "Nowitzki", [Player.POSITION_POWER_FORWARD, Player.POSITION_CENTER], 98, "Dallas Mavericks All-Time");
    if (this.useAllPlayerVersions)
        this.addPlayer("Luka", "Doncic", [Player.POSITION_POINT_GUARD, Player.POSITION_SHOOTING_GUARD], 93, "Dallas Mavericks All-Time");
    this.addPlayer("Derek", "Harper", [Player.POSITION_POINT_GUARD, Player.POSITION_SHOOTING_GUARD], 89, "Dallas Mavericks All-Time");
    this.addPlayer("Rolando", "Blackman", [Player.POSITION_SHOOTING_GUARD], 88, "Dallas Mavericks All-Time");
    this.addPlayer("Mark", "Aguirre", [Player.POSITION_SMALL_FORWARD, Player.POSITION_POWER_FORWARD], 88, "Dallas Mavericks All-Time");
    this.addPlayer("Jim", "Jackson", [Player.POSITION_SHOOTING_GUARD], 88, "Dallas Mavericks All-Time");
    this.addPlayer("Michael", "Finley", [Player.POSITION_SMALL_FORWARD, Player.POSITION_SHOOTING_GUARD], 88, "Dallas Mavericks All-Time");
    if (this.useAllPlayerVersions)
        this.addPlayer("Jamal", "Mashburn", [Player.POSITION_SMALL_FORWARD, Player.POSITION_POWER_FORWARD], 88, "Dallas Mavericks All-Time");
    if (this.useAllPlayerVersions)
        this.addPlayer("Jason", "Kidd", [Player.POSITION_POINT_GUARD], 87, "Dallas Mavericks All-Time");
    if (this.useAllPlayerVersions)
        this.addPlayer("Steve", "Nash", [Player.POSITION_POINT_GUARD], 87, "Dallas Mavericks All-Time");
    this.addPlayer("Jason", "Terry", [Player.POSITION_POINT_GUARD], 86, "Dallas Mavericks All-Time");
    this.addPlayer("James", "Donaldson", [Player.POSITION_CENTER], 85, "Dallas Mavericks All-Time");
    this.addPlayer("Brad", "Davis", [Player.POSITION_POINT_GUARD], 84, "Dallas Mavericks All-Time");
    if (this.useAllPlayerVersions)
        this.addPlayer("Tyson", "Chandler", [Player.POSITION_CENTER], 82, "Dallas Mavericks All-Time");
    this.addPlayer("Shawn", "Bradley", [Player.POSITION_CENTER], 82, "Dallas Mavericks All-Time");

    this.addPlayer("Tracy", "McGrady", [Player.POSITION_SHOOTING_GUARD], 95, "Orlando Magic All-Time");
    this.addPlayer("Penny", "Hardaway", [Player.POSITION_POINT_GUARD, Player.POSITION_SHOOTING_GUARD], 94, "Orlando Magic All-Time");
    this.addPlayer("Dwight", "Howard", [Player.POSITION_CENTER], 94, "Orlando Magic All-Time");
    if (this.useAllPlayerVersions)
        this.addPlayer("Shaquille", "O'Neal", [Player.POSITION_CENTER], 93, "Orlando Magic All-Time");
    if (this.useAllPlayerVersions)
        this.addPlayer("Paolo", "Banchero", [Player.POSITION_POWER_FORWARD], 87, "Orlando Magic All-Time");
    this.addPlayer("Grant", "Hill", [Player.POSITION_SMALL_FORWARD, Player.POSITION_SHOOTING_GUARD], 86, "Orlando Magic All-Time");
    this.addPlayer("Nikola", "Vucevic", [Player.POSITION_CENTER], 86, "Orlando Magic All-Time");
    this.addPlayer("Hedo", "Turkoglu", [Player.POSITION_SMALL_FORWARD, Player.POSITION_POWER_FORWARD], 86, "Orlando Magic All-Time");
    if (this.useAllPlayerVersions)
        this.addPlayer("Rashard", "Lewis", [Player.POSITION_POWER_FORWARD, Player.POSITION_SMALL_FORWARD], 86, "Orlando Magic All-Time");
    this.addPlayer("Nick", "Anderson", [Player.POSITION_SHOOTING_GUARD, Player.POSITION_SMALL_FORWARD], 85, "Orlando Magic All-Time");
    this.addPlayer("Scott", "Skiles", [Player.POSITION_POINT_GUARD], 84, "Orlando Magic All-Time");
    this.addPlayer("Dennis", "Scott", [Player.POSITION_SMALL_FORWARD, Player.POSITION_SHOOTING_GUARD], 84, "Orlando Magic All-Time");
    if (this.useAllPlayerVersions)
        this.addPlayer("Horace", "Grant", [Player.POSITION_POWER_FORWARD], 84, "Orlando Magic All-Time");
    this.addPlayer("Darrell", "Armstrong", [Player.POSITION_POINT_GUARD], 83, "Orlando Magic All-Time");
    this.addPlayer("Jameer", "Nelson", [Player.POSITION_POINT_GUARD], 83, "Orlando Magic All-Time");

    this.addPlayer("Magic", "Johnson", [Player.POSITION_POINT_GUARD, Player.POSITION_SHOOTING_GUARD], 99, "Los Angeles Lakers All-Time");
    this.addPlayer("Kobe", "Bryant", [Player.POSITION_SHOOTING_GUARD, Player.POSITION_SMALL_FORWARD], 99, "Los Angeles Lakers All-Time");
    this.addPlayer("Shaquille", "O'Neal", [Player.POSITION_CENTER], 98, "Los Angeles Lakers All-Time");
    this.addPlayer("Jerry", "West", [Player.POSITION_POINT_GUARD], 97, "Los Angeles Lakers All-Time");
    if (this.useAllPlayerVersions)
        this.addPlayer("Kareem", "Abdul-Jabbar", [Player.POSITION_CENTER], 96, "Los Angeles Lakers All-Time");
    this.addPlayer("Elgin", "Baylor", [Player.POSITION_SMALL_FORWARD, Player.POSITION_POWER_FORWARD], 96, "Los Angeles Lakers All-Time");
    if (this.useAllPlayerVersions)
        this.addPlayer("LeBron", "James", [Player.POSITION_SMALL_FORWARD, Player.POSITION_POWER_FORWARD], 96, "Los Angeles Lakers All-Time");
    this.addPlayer("James", "Worthy", [Player.POSITION_SMALL_FORWARD, Player.POSITION_POWER_FORWARD], 95, "Los Angeles Lakers All-Time");
    this.addPlayer("George", "Mikan", [Player.POSITION_CENTER], 94, "Los Angeles Lakers All-Time");
    this.addPlayer("Anthony", "Davis", [Player.POSITION_POWER_FORWARD, Player.POSITION_CENTER], 94, "Los Angeles Lakers All-Time");
    if (this.useAllPlayerVersions)
        this.addPlayer("Wilt", "Chamberlain", [Player.POSITION_CENTER], 91, "Los Angeles Lakers All-Time");
    if (this.useAllPlayerVersions)
        this.addPlayer("Pau", "Gasol", [Player.POSITION_CENTER], 91, "Los Angeles Lakers All-Time");
    this.addPlayer("Gail", "Goodrich", [Player.POSITION_SHOOTING_GUARD, Player.POSITION_POINT_GUARD], 89, "Los Angeles Lakers All-Time");
    this.addPlayer("Jamaal", "Wilkes", [Player.POSITION_SMALL_FORWARD, Player.POSITION_SHOOTING_GUARD], 87, "Los Angeles Lakers All-Time");
    this.addPlayer("Michael", "Cooper", [Player.POSITION_SHOOTING_GUARD], 86, "Los Angeles Lakers All-Time");

    this.addPlayer("Walt", "Frazier", [Player.POSITION_POINT_GUARD], 97, "New York Knicks All-Time");
    this.addPlayer("Patrick", "Ewing", [Player.POSITION_CENTER], 95, "New York Knicks All-Time");
    this.addPlayer("Willis", "Reed", [Player.POSITION_POWER_FORWARD], 94, "New York Knicks All-Time");
    this.addPlayer("Richie", "Guerin", [Player.POSITION_SHOOTING_GUARD, Player.POSITION_POINT_GUARD], 92, "New York Knicks All-Time");
    if (this.useAllPlayerVersions)
        this.addPlayer("Carmelo", "Anthony", [Player.POSITION_SMALL_FORWARD, Player.POSITION_POWER_FORWARD], 92, "New York Knicks All-Time");
    this.addPlayer("Dave", "DeBusschere", [Player.POSITION_POWER_FORWARD, Player.POSITION_SMALL_FORWARD], 92, "New York Knicks All-Time");
    if (this.useAllPlayerVersions)
        this.addPlayer("Amar'e", "Stoudemire", [Player.POSITION_POWER_FORWARD, Player.POSITION_CENTER], 89, "New York Knicks All-Time");
    this.addPlayer("Micheal Ray", "Richardson", [Player.POSITION_POINT_GUARD, Player.POSITION_SHOOTING_GUARD], 89, "New York Knicks All-Time");
    this.addPlayer("Allan", "Houston", [Player.POSITION_SHOOTING_GUARD, Player.POSITION_SMALL_FORWARD], 89, "New York Knicks All-Time");
    if (this.useAllPlayerVersions)
        this.addPlayer("Bernard", "King", [Player.POSITION_SMALL_FORWARD], 89, "New York Knicks All-Time");
    if (this.useAllPlayerVersions)
        this.addPlayer("Earl", "Monroe", [Player.POSITION_POINT_GUARD], 88, "New York Knicks All-Time");
    this.addPlayer("John", "Starks", [Player.POSITION_SHOOTING_GUARD, Player.POSITION_POINT_GUARD], 88, "New York Knicks All-Time");
    this.addPlayer("Dick", "Barnett", [Player.POSITION_SHOOTING_GUARD, Player.POSITION_SMALL_FORWARD], 87, "New York Knicks All-Time");
    this.addPlayer("Charles", "Oakley", [Player.POSITION_POWER_FORWARD], 86, "New York Knicks All-Time");
    this.addPlayer("Julius", "Randle", [Player.POSITION_POWER_FORWARD], 86, "New York Knicks All-Time");

    this.addPlayer("Oscar", "Robertson", [Player.POSITION_POINT_GUARD], 97, "Sacramento Kings All-Time");
    this.addPlayer("Jerry", "Lucas", [Player.POSITION_POWER_FORWARD], 95, "Sacramento Kings All-Time");
    this.addPlayer("Mitch", "Richmond", [Player.POSITION_SHOOTING_GUARD, Player.POSITION_SMALL_FORWARD], 94, "Sacramento Kings All-Time");
    this.addPlayer("Nate", "Archibald", [Player.POSITION_POINT_GUARD], 94, "Sacramento Kings All-Time");
    this.addPlayer("Chris", "Webber", [Player.POSITION_POWER_FORWARD], 93, "Sacramento Kings All-Time");
    this.addPlayer("DeMarcus", "Cousins", [Player.POSITION_CENTER], 90, "Sacramento Kings All-Time");
    this.addPlayer("Wayne", "Embry", [Player.POSITION_POWER_FORWARD], 90, "Sacramento Kings All-Time");
    this.addPlayer("Peja", "Stojakovic", [Player.POSITION_SMALL_FORWARD], 88, "Sacramento Kings All-Time");
    this.addPlayer("Mike", "Bibby", [Player.POSITION_POINT_GUARD], 88, "Sacramento Kings All-Time");
    this.addPlayer("Domantas", "Sabonis", [Player.POSITION_CENTER], 88, "Sacramento Kings All-Time");
    this.addPlayer("Vlade", "Divac", [Player.POSITION_CENTER], 88, "Sacramento Kings All-Time");
    this.addPlayer("Otis", "Birdsong", [Player.POSITION_SHOOTING_GUARD], 87, "Sacramento Kings All-Time");
    this.addPlayer("Eddie", "Johnson", [Player.POSITION_SHOOTING_GUARD, Player.POSITION_SMALL_FORWARD], 86, "Sacramento Kings All-Time");
    this.addPlayer("Kevin", "Martin", [Player.POSITION_SHOOTING_GUARD, Player.POSITION_SMALL_FORWARD], 86, "Sacramento Kings All-Time");
    if (this.useAllPlayerVersions)
        this.addPlayer("Doug", "Christie", [Player.POSITION_SHOOTING_GUARD, Player.POSITION_SMALL_FORWARD], 83, "Sacramento Kings All-Time");

    this.addPlayer("John", "Stockton", [Player.POSITION_POINT_GUARD], 97, "Utah Jazz All-Time");
    this.addPlayer("Karl", "Malone", [Player.POSITION_POWER_FORWARD], 97, "Utah Jazz All-Time");
    this.addPlayer("Pete", "Maravich", [Player.POSITION_SHOOTING_GUARD], 94, "Utah Jazz All-Time");
    this.addPlayer("Adrian", "Dantley", [Player.POSITION_SMALL_FORWARD], 91, "Utah Jazz All-Time");
    this.addPlayer("Mark", "Eaton", [Player.POSITION_CENTER], 89, "Utah Jazz All-Time");
    this.addPlayer("Andrei", "Kirilenko", [Player.POSITION_POWER_FORWARD, Player.POSITION_SMALL_FORWARD], 89, "Utah Jazz All-Time");
    this.addPlayer("Carlos", "Boozer", [Player.POSITION_POWER_FORWARD], 88, "Utah Jazz All-Time");
    if (this.useAllPlayerVersions)
        this.addPlayer("Gordon", "Hayward", [Player.POSITION_SMALL_FORWARD], 88, "Utah Jazz All-Time");
    this.addPlayer("Rudy", "Gobert", [Player.POSITION_CENTER], 88, "Utah Jazz All-Time");
    if (this.useAllPlayerVersions)
        this.addPlayer("Donovan", "Mitchell", [Player.POSITION_SHOOTING_GUARD, Player.POSITION_POINT_GUARD], 88, "Utah Jazz All-Time");
    if (this.useAllPlayerVersions)
        this.addPlayer("Deron", "Williams", [Player.POSITION_POINT_GUARD], 87, "Utah Jazz All-Time");
    this.addPlayer("Darrell", "Griffith", [Player.POSITION_SHOOTING_GUARD], 87, "Utah Jazz All-Time");
    this.addPlayer("Thurl", "Bailey", [Player.POSITION_POWER_FORWARD, Player.POSITION_SMALL_FORWARD], 86, "Utah Jazz All-Time");
    this.addPlayer("Truck", "Robinson", [Player.POSITION_POWER_FORWARD], 86, "Utah Jazz All-Time");
    this.addPlayer("Jeff", "Hornacek", [Player.POSITION_SHOOTING_GUARD, Player.POSITION_POINT_GUARD], 84, "Utah Jazz All-Time");

    this.addPlayer("Glen", "Rice", [Player.POSITION_SMALL_FORWARD], 90, "Charlotte Hornets All-Time");
    this.addPlayer("Kemba", "Walker", [Player.POSITION_POINT_GUARD], 89, "Charlotte Hornets All-Time");
    this.addPlayer("Eddie", "Jones", [Player.POSITION_SHOOTING_GUARD, Player.POSITION_SMALL_FORWARD], 89, "Charlotte Hornets All-Time");
    if (this.useAllPlayerVersions)
        this.addPlayer("Alonzo", "Mourning", [Player.POSITION_CENTER, Player.POSITION_POWER_FORWARD], 89, "Charlotte Hornets All-Time");
    this.addPlayer("Larry", "Johnson", [Player.POSITION_POWER_FORWARD, Player.POSITION_SMALL_FORWARD], 88, "Charlotte Hornets All-Time");
    if (this.useAllPlayerVersions)
        this.addPlayer("Derrick", "Coleman", [Player.POSITION_POWER_FORWARD, Player.POSITION_CENTER], 86, "Charlotte Hornets All-Time");
    if (this.useAllPlayerVersions)
        this.addPlayer("Lamelo", "Ball", [Player.POSITION_POINT_GUARD, Player.POSITION_SHOOTING_GUARD], 86, "Charlotte Hornets All-Time");
    this.addPlayer("Muggsy", "Bogues", [Player.POSITION_POINT_GUARD], 85, "Charlotte Hornets All-Time");
    if (this.useAllPlayerVersions)
        this.addPlayer("Baron", "Davis", [Player.POSITION_POINT_GUARD], 85, "Charlotte Hornets All-Time");
    if (this.useAllPlayerVersions)
        this.addPlayer("Vlade", "Divac", [Player.POSITION_CENTER], 85, "Charlotte Hornets All-Time");
    this.addPlayer("Dell", "Curry", [Player.POSITION_SHOOTING_GUARD, Player.POSITION_SMALL_FORWARD], 85, "Charlotte Hornets All-Time");
    this.addPlayer("Kendall", "Gill", [Player.POSITION_SHOOTING_GUARD, Player.POSITION_SMALL_FORWARD], 85, "Charlotte Hornets All-Time");
    this.addPlayer("Gerald", "Wallace", [Player.POSITION_SMALL_FORWARD, Player.POSITION_POWER_FORWARD], 84, "Charlotte Hornets All-Time");
    if (this.useAllPlayerVersions)
        this.addPlayer("P.J.", "Brown", [Player.POSITION_CENTER], 83, "Charlotte Hornets All-Time");
    this.addPlayer("Stephen", "Jackson", [Player.POSITION_SMALL_FORWARD], 83, "Charlotte Hornets All-Time");

    if (this.useAllPlayerVersions)
        this.addPlayer("LeBron", "James", [Player.POSITION_SMALL_FORWARD, Player.POSITION_POWER_FORWARD], 99, "Miami Heat All-Time");
    this.addPlayer("Dwyane", "Wade", [Player.POSITION_SHOOTING_GUARD], 97, "Miami Heat All-Time");
    this.addPlayer("Alonzo", "Mourning", [Player.POSITION_CENTER, Player.POSITION_POWER_FORWARD], 94, "Miami Heat All-Time");
    if (this.useAllPlayerVersions)
        this.addPlayer("Jimmy", "Butler", [Player.POSITION_SMALL_FORWARD], 93, "Miami Heat All-Time");
    if (this.useAllPlayerVersions)
        this.addPlayer("Tim", "Hardaway", [Player.POSITION_POINT_GUARD], 89, "Miami Heat All-Time");
    if (this.useAllPlayerVersions)
        this.addPlayer("Shaquille", "O'Neal", [Player.POSITION_CENTER], 89, "Miami Heat All-Time");
    if (this.useAllPlayerVersions)
        this.addPlayer("Glen", "Rice", [Player.POSITION_SMALL_FORWARD], 88, "Miami Heat All-Time");
    if (this.useAllPlayerVersions)
        this.addPlayer("Chris", "Bosh", [Player.POSITION_CENTER, Player.POSITION_POWER_FORWARD], 88, "Miami Heat All-Time");
    this.addPlayer("Rony", "Seikaly", [Player.POSITION_CENTER], 86, "Miami Heat All-Time");
    if (this.useAllPlayerVersions)
        this.addPlayer("Bam", "Adebayo", [Player.POSITION_CENTER, Player.POSITION_POWER_FORWARD], 86, "Miami Heat All-Time");
    if (this.useAllPlayerVersions)
        this.addPlayer("Eddie", "Jones", [Player.POSITION_SHOOTING_GUARD, Player.POSITION_SMALL_FORWARD], 85, "Miami Heat All-Time");
    if (this.useAllPlayerVersions)
        this.addPlayer("Steve", "Smith", [Player.POSITION_SHOOTING_GUARD, Player.POSITION_SMALL_FORWARD], 85, "Miami Heat All-Time");
    this.addPlayer("Udonis", "Haslem", [Player.POSITION_POWER_FORWARD], 84, "Miami Heat All-Time");
    if (this.useAllPlayerVersions)
        this.addPlayer("Hassan", "Whiteside", [Player.POSITION_CENTER], 84, "Miami Heat All-Time");
    this.addPlayer("Tyler", "Herro", [Player.POSITION_SHOOTING_GUARD, Player.POSITION_POINT_GUARD], 83, "Miami Heat All-Time");

    this.addPlayer("Dominique", "Wilkins", [Player.POSITION_SMALL_FORWARD, Player.POSITION_SHOOTING_GUARD], 95, "Atlanta Hawks All-Time");
    this.addPlayer("Bob", "Pettit", [Player.POSITION_POWER_FORWARD], 95, "Atlanta Hawks All-Time");
    this.addPlayer("Dikembe", "Mutombo", [Player.POSITION_CENTER], 92, "Atlanta Hawks All-Time");
    this.addPlayer("Cliff", "Hagan", [Player.POSITION_SMALL_FORWARD, Player.POSITION_SHOOTING_GUARD], 91, "Atlanta Hawks All-Time");
    this.addPlayer("Lou", "Hudson", [Player.POSITION_SMALL_FORWARD, Player.POSITION_SHOOTING_GUARD], 91, "Atlanta Hawks All-Time");
    this.addPlayer("Joe", "Johnson", [Player.POSITION_SMALL_FORWARD, Player.POSITION_SHOOTING_GUARD], 89, "Atlanta Hawks All-Time");
    if (this.useAllPlayerVersions)
        this.addPlayer("Trae", "Young", [Player.POSITION_POINT_GUARD], 88, "Atlanta Hawks All-Time");
    this.addPlayer("Joe", "Caldwell", [Player.POSITION_SHOOTING_GUARD, Player.POSITION_SMALL_FORWARD], 88, "Atlanta Hawks All-Time");
    this.addPlayer("Steve", "Smith", [Player.POSITION_SHOOTING_GUARD, Player.POSITION_SMALL_FORWARD], 87, "Atlanta Hawks All-Time");
    if (this.useAllPlayerVersions)
        this.addPlayer("Pete", "Maravich", [Player.POSITION_SHOOTING_GUARD], 87, "Atlanta Hawks All-Time");
    this.addPlayer("Kevin", "Willis", [Player.POSITION_CENTER], 87, "Atlanta Hawks All-Time");
    this.addPlayer("Josh", "Smith", [Player.POSITION_POWER_FORWARD, Player.POSITION_SMALL_FORWARD], 86, "Atlanta Hawks All-Time");
    this.addPlayer("Doc", "Rivers", [Player.POSITION_POINT_GUARD], 86, "Atlanta Hawks All-Time");
    this.addPlayer("Jeff", "Teague", [Player.POSITION_POINT_GUARD], 85, "Atlanta Hawks All-Time");
    this.addPlayer("Al", "Horford", [Player.POSITION_CENTER, Player.POSITION_POWER_FORWARD], 85, "Atlanta Hawks All-Time");

    this.addPlayer("Marc", "Gasol", [Player.POSITION_CENTER], 93, "Memphis Grizzlies All-Time");
    this.addPlayer("Pau", "Gasol", [Player.POSITION_CENTER], 92, "Memphis Grizzlies All-Time");
    if (this.useAllPlayerVersions)
        this.addPlayer("Ja", "Morant", [Player.POSITION_POINT_GUARD], 89, "Memphis Grizzlies All-Time");
    this.addPlayer("Zach", "Randolph", [Player.POSITION_POWER_FORWARD], 89, "Memphis Grizzlies All-Time");
    this.addPlayer("Mike", "Conley", [Player.POSITION_POINT_GUARD], 88, "Memphis Grizzlies All-Time");
    this.addPlayer("Shareef", "Abdur-Rahim", [Player.POSITION_POWER_FORWARD, Player.POSITION_SMALL_FORWARD], 86, "Memphis Grizzlies All-Time");
    if (this.useAllPlayerVersions)
        this.addPlayer("Mike", "Bibby", [Player.POSITION_POINT_GUARD], 86, "Memphis Grizzlies All-Time");
    if (this.useAllPlayerVersions)
        this.addPlayer("Jaren", "Jackson Jr.", [Player.POSITION_POWER_FORWARD, Player.POSITION_CENTER], 86, "Memphis Grizzlies All-Time");
    this.addPlayer("Tony", "Allen", [Player.POSITION_SHOOTING_GUARD, Player.POSITION_SMALL_FORWARD], 85, "Memphis Grizzlies All-Time");
    this.addPlayer("Shane", "Battier", [Player.POSITION_SMALL_FORWARD, Player.POSITION_SHOOTING_GUARD], 85, "Memphis Grizzlies All-Time");
    this.addPlayer("Jason", "Williams", [Player.POSITION_POINT_GUARD], 84, "Memphis Grizzlies All-Time");
    this.addPlayer("Bryant", "Reeves", [Player.POSITION_CENTER], 84, "Memphis Grizzlies All-Time");
    this.addPlayer("Rudy", "Gay", [Player.POSITION_SMALL_FORWARD], 83, "Memphis Grizzlies All-Time");
    this.addPlayer("Mike", "Miller", [Player.POSITION_SHOOTING_GUARD, Player.POSITION_SMALL_FORWARD], 82, "Memphis Grizzlies All-Time");
    this.addPlayer("Jonas", "Valanciunas", [Player.POSITION_CENTER], 82, "Memphis Grizzlies All-Time");

    if (this.useAllPlayerVersions)
        this.addPlayer("Kawhi", "Leonard", [Player.POSITION_SMALL_FORWARD, Player.POSITION_POWER_FORWARD], 95, "Los Angeles Clippers All-Time");
    this.addPlayer("Bob", "McAdoo", [Player.POSITION_POWER_FORWARD], 94, "Los Angeles Clippers All-Time");
    if (this.useAllPlayerVersions)
        this.addPlayer("Chris", "Paul", [Player.POSITION_POINT_GUARD], 93, "Los Angeles Clippers All-Time");
    this.addPlayer("Elton", "Brand", [Player.POSITION_POWER_FORWARD], 90, "Los Angeles Clippers All-Time");
    this.addPlayer("Paul", "George", [Player.POSITION_SMALL_FORWARD, Player.POSITION_SHOOTING_GUARD], 89, "Los Angeles Clippers All-Time");
    this.addPlayer("World B.", "Free", [Player.POSITION_SHOOTING_GUARD, Player.POSITION_POINT_GUARD], 89, "Los Angeles Clippers All-Time");
    this.addPlayer("Ron", "Harper", [Player.POSITION_SHOOTING_GUARD, Player.POSITION_POINT_GUARD], 89, "Los Angeles Clippers All-Time");
    this.addPlayer("Danny", "Manning", [Player.POSITION_POWER_FORWARD], 87, "Los Angeles Clippers All-Time");
    this.addPlayer("Deandre", "Jordan", [Player.POSITION_CENTER], 87, "Los Angeles Clippers All-Time");
    this.addPlayer("Chris", "Kaman", [Player.POSITION_CENTER], 87, "Los Angeles Clippers All-Time");
    this.addPlayer("Norm", "Nixon", [Player.POSITION_POINT_GUARD], 86, "Los Angeles Clippers All-Time");
    this.addPlayer("Corey", "Maggette", [Player.POSITION_SMALL_FORWARD, Player.POSITION_SHOOTING_GUARD], 86, "Los Angeles Clippers All-Time");
    this.addPlayer("Swen", "Nater", [Player.POSITION_CENTER], 84, "Los Angeles Clippers All-Time");
    this.addPlayer("JJ", "Redick", [Player.POSITION_SHOOTING_GUARD], 83, "Los Angeles Clippers All-Time");
    this.addPlayer("Lamar", "Odom", [Player.POSITION_SMALL_FORWARD, Player.POSITION_POWER_FORWARD], 82, "Los Angeles Clippers All-Time");

    this.addPlayer("Larry", "Bird", [Player.POSITION_SMALL_FORWARD, Player.POSITION_POWER_FORWARD], 99, "Boston Celtics All-Time");
    this.addPlayer("Bob", "Cousy", [Player.POSITION_POINT_GUARD], 96, "Boston Celtics All-Time");
    this.addPlayer("John", "Havlicek", [Player.POSITION_SMALL_FORWARD, Player.POSITION_SHOOTING_GUARD], 96, "Boston Celtics All-Time");
    this.addPlayer("Dave", "Cowens", [Player.POSITION_POWER_FORWARD], 95, "Boston Celtics All-Time");
    this.addPlayer("Kevin", "McHale", [Player.POSITION_POWER_FORWARD], 95, "Boston Celtics All-Time");
    this.addPlayer("Paul", "Pierce", [Player.POSITION_SMALL_FORWARD, Player.POSITION_POWER_FORWARD], 94, "Boston Celtics All-Time");
    this.addPlayer("Jo Jo", "White", [Player.POSITION_POINT_GUARD], 94, "Boston Celtics All-Time");
    this.addPlayer("Robert", "Parish", [Player.POSITION_CENTER], 93, "Boston Celtics All-Time");
    if (this.useAllPlayerVersions)
        this.addPlayer("Kevin", "Garnett", [Player.POSITION_POWER_FORWARD, Player.POSITION_CENTER], 92, "Boston Celtics All-Time");
    this.addPlayer("Jayson", "Tatum", [Player.POSITION_SMALL_FORWARD, Player.POSITION_POWER_FORWARD], 92, "Boston Celtics All-Time");
    this.addPlayer("Bill", "Sharman", [Player.POSITION_SHOOTING_GUARD, Player.POSITION_POINT_GUARD], 92, "Boston Celtics All-Time");
    this.addPlayer("Jaylen", "Brown", [Player.POSITION_SMALL_FORWARD, Player.POSITION_SHOOTING_GUARD], 91, "Boston Celtics All-Time");
    this.addPlayer("Rajon", "Rondo", [Player.POSITION_POINT_GUARD], 90, "Boston Celtics All-Time");
    this.addPlayer("Tom", "Heinsohn", [Player.POSITION_POWER_FORWARD, Player.POSITION_SMALL_FORWARD], 89, "Boston Celtics All-Time");
    if (this.useAllPlayerVersions)
        this.addPlayer("Ray", "Allen", [Player.POSITION_SHOOTING_GUARD, Player.POSITION_SMALL_FORWARD], 88, "Boston Celtics All-Time");

    this.addPlayer("LeBron", "James", [Player.POSITION_SMALL_FORWARD, Player.POSITION_POWER_FORWARD], 99, "Cleveland Cavaliers All-Time");
    this.addPlayer("Kyrie", "Irving", [Player.POSITION_POINT_GUARD], 94, "Cleveland Cavaliers All-Time");
    this.addPlayer("Mark", "Price", [Player.POSITION_POINT_GUARD], 93, "Cleveland Cavaliers All-Time");
    this.addPlayer("Brad", "Daugherty", [Player.POSITION_CENTER], 90, "Cleveland Cavaliers All-Time");
    this.addPlayer("Zydrunas", "Ilgauskas", [Player.POSITION_CENTER], 88, "Cleveland Cavaliers All-Time");
    if (this.useAllPlayerVersions)
        this.addPlayer("Larry", "Nance", [Player.POSITION_POWER_FORWARD, Player.POSITION_SMALL_FORWARD], 88, "Cleveland Cavaliers All-Time");
    if (this.useAllPlayerVersions)
        this.addPlayer("Kevin", "Love", [Player.POSITION_POWER_FORWARD], 87, "Cleveland Cavaliers All-Time");
    this.addPlayer("Terrell", "Brandon", [Player.POSITION_POINT_GUARD], 87, "Cleveland Cavaliers All-Time");
    if (this.useAllPlayerVersions)
        this.addPlayer("World B.", "Free", [Player.POSITION_SHOOTING_GUARD, Player.POSITION_POINT_GUARD], 87, "Cleveland Cavaliers All-Time");
    this.addPlayer("Campy", "Russell", [Player.POSITION_SMALL_FORWARD], 86, "Cleveland Cavaliers All-Time");
    this.addPlayer("Austin", "Carr", [Player.POSITION_SHOOTING_GUARD], 86, "Cleveland Cavaliers All-Time");
    this.addPlayer("Hot Rod", "Williams", [Player.POSITION_POWER_FORWARD, Player.POSITION_CENTER], 85, "Cleveland Cavaliers All-Time");
    this.addPlayer("Jim", "Chones", [Player.POSITION_CENTER], 84, "Cleveland Cavaliers All-Time");
    this.addPlayer("Bingo", "Smith", [Player.POSITION_SHOOTING_GUARD, Player.POSITION_SMALL_FORWARD], 84, "Cleveland Cavaliers All-Time");
    this.addPlayer("Anderson", "Varejao", [Player.POSITION_CENTER], 84, "Cleveland Cavaliers All-Time");

    this.addPlayer("Michael", "Jordan", [Player.POSITION_SHOOTING_GUARD, Player.POSITION_SMALL_FORWARD], 99, "Chicago Bulls All-Time");
    this.addPlayer("Scottie", "Pippen", [Player.POSITION_SMALL_FORWARD, Player.POSITION_SHOOTING_GUARD], 97, "Chicago Bulls All-Time");
    this.addPlayer("Derrick", "Rose", [Player.POSITION_POINT_GUARD], 95, "Chicago Bulls All-Time");
    this.addPlayer("Dennis", "Rodman", [Player.POSITION_POWER_FORWARD], 93, "Chicago Bulls All-Time");
    this.addPlayer("Artis", "Gilmore", [Player.POSITION_CENTER], 93, "Chicago Bulls All-Time");
    if (this.useAllPlayerVersions)
        this.addPlayer("Jimmy", "Butler", [Player.POSITION_SHOOTING_GUARD, Player.POSITION_SMALL_FORWARD], 91, "Chicago Bulls All-Time");
    this.addPlayer("Jerry", "Sloan", [Player.POSITION_SHOOTING_GUARD, Player.POSITION_SMALL_FORWARD], 89, "Chicago Bulls All-Time");
    this.addPlayer("Bob", "Love", [Player.POSITION_POWER_FORWARD, Player.POSITION_SMALL_FORWARD], 89, "Chicago Bulls All-Time");
    this.addPlayer("B.J.", "Armstrong", [Player.POSITION_POINT_GUARD], 87, "Chicago Bulls All-Time");
    this.addPlayer("Joakim", "Noah", [Player.POSITION_CENTER], 87, "Chicago Bulls All-Time");
    this.addPlayer("Reggie", "Theus", [Player.POSITION_SHOOTING_GUARD, Player.POSITION_POINT_GUARD], 86, "Chicago Bulls All-Time");
    this.addPlayer("Zach", "LaVine", [Player.POSITION_SHOOTING_GUARD], 86, "Chicago Bulls All-Time");
    this.addPlayer("Toni", "Kukoc", [Player.POSITION_SMALL_FORWARD, Player.POSITION_POWER_FORWARD], 85, "Chicago Bulls All-Time");
    this.addPlayer("Horace", "Grant", [Player.POSITION_POWER_FORWARD], 85, "Chicago Bulls All-Time");
    this.addPlayer("Kirk", "Hinrich", [Player.POSITION_POINT_GUARD], 82, "Chicago Bulls All-Time");

    this.addPlayer("Kareem", "Abdul-Jabbar", [Player.POSITION_CENTER], 99, "Milwaukee Bucks All-Time");
    this.addPlayer("Giannis", "Antetokounmpo", [Player.POSITION_SMALL_FORWARD, Player.POSITION_POWER_FORWARD], 97, "Milwaukee Bucks All-Time");
    if (this.useAllPlayerVersions)
        this.addPlayer("Oscar", "Robertson", [Player.POSITION_POINT_GUARD], 96, "Milwaukee Bucks All-Time");
    this.addPlayer("Sidney", "Moncrief", [Player.POSITION_SHOOTING_GUARD, Player.POSITION_POINT_GUARD], 94, "Milwaukee Bucks All-Time");
    this.addPlayer("Marques", "Johnson", [Player.POSITION_SMALL_FORWARD, Player.POSITION_SHOOTING_GUARD], 92, "Milwaukee Bucks All-Time");
    if (this.useAllPlayerVersions)
        this.addPlayer("Ray", "Allen", [Player.POSITION_SHOOTING_GUARD, Player.POSITION_SMALL_FORWARD], 91, "Milwaukee Bucks All-Time");
    this.addPlayer("Khris", "Middleton", [Player.POSITION_SMALL_FORWARD, Player.POSITION_SHOOTING_GUARD], 88, "Milwaukee Bucks All-Time");
    this.addPlayer("Michael", "Redd", [Player.POSITION_SHOOTING_GUARD, Player.POSITION_SMALL_FORWARD], 88, "Milwaukee Bucks All-Time");
    this.addPlayer("Bob", "Dandridge", [Player.POSITION_SMALL_FORWARD, Player.POSITION_SHOOTING_GUARD], 88, "Milwaukee Bucks All-Time");
    if (this.useAllPlayerVersions)
        this.addPlayer("Terry", "Cummings", [Player.POSITION_POWER_FORWARD], 87, "Milwaukee Bucks All-Time");
    this.addPlayer("Vin", "Baker", [Player.POSITION_POWER_FORWARD], 87, "Milwaukee Bucks All-Time");
    this.addPlayer("Junior", "Bridgeman", [Player.POSITION_SMALL_FORWARD, Player.POSITION_SHOOTING_GUARD], 87, "Milwaukee Bucks All-Time");
    this.addPlayer("Glenn", "Robinson", [Player.POSITION_SMALL_FORWARD, Player.POSITION_POWER_FORWARD], 87, "Milwaukee Bucks All-Time");
    this.addPlayer("Brian", "Winters", [Player.POSITION_SHOOTING_GUARD], 86, "Milwaukee Bucks All-Time");
    if (this.useAllPlayerVersions)
        this.addPlayer("Paul", "Pressey", [Player.POSITION_SHOOTING_GUARD, Player.POSITION_SMALL_FORWARD], 84, "Milwaukee Bucks All-Time");

    if (this.useAllPlayerVersions)
        this.addPlayer("Moses", "Malone", [Player.POSITION_CENTER], 97, "Philadelphia 76ers All-Time");
    this.addPlayer("Allen", "Iverson", [Player.POSITION_POINT_GUARD, Player.POSITION_SHOOTING_GUARD], 96, "Philadelphia 76ers All-Time");
    if (this.useAllPlayerVersions)
        this.addPlayer("Joel", "Embiid", [Player.POSITION_CENTER], 95, "Philadelphia 76ers All-Time");
    if (this.useAllPlayerVersions)
        this.addPlayer("Julius", "Erving", [Player.POSITION_SMALL_FORWARD, Player.POSITION_SHOOTING_GUARD], 94, "Philadelphia 76ers All-Time");
    this.addPlayer("Dolph", "Schayes", [Player.POSITION_POWER_FORWARD], 94, "Philadelphia 76ers All-Time");
    this.addPlayer("Billy", "Cunningham", [Player.POSITION_SMALL_FORWARD, Player.POSITION_POWER_FORWARD], 93, "Philadelphia 76ers All-Time");
    if (this.useAllPlayerVersions)
        this.addPlayer("Wilt", "Chamberlain", [Player.POSITION_CENTER], 93, "Philadelphia 76ers All-Time");
    this.addPlayer("Bobby", "Jones", [Player.POSITION_SMALL_FORWARD, Player.POSITION_POWER_FORWARD], 90, "Philadelphia 76ers All-Time");
    this.addPlayer("Tyrese", "Maxey", [Player.POSITION_POINT_GUARD], 89, "Philadelphia 76ers All-Time");
    this.addPlayer("Hal", "Greer", [Player.POSITION_SHOOTING_GUARD, Player.POSITION_POINT_GUARD], 88, "Philadelphia 76ers All-Time");
    if (this.useAllPlayerVersions)
        this.addPlayer("George", "McGinnis", [Player.POSITION_POWER_FORWARD], 87, "Philadelphia 76ers All-Time");
    this.addPlayer("Hersey", "Hawkins", [Player.POSITION_SHOOTING_GUARD, Player.POSITION_POINT_GUARD], 87, "Philadelphia 76ers All-Time");
    this.addPlayer("Doug", "Collins", [Player.POSITION_SHOOTING_GUARD, Player.POSITION_SMALL_FORWARD], 87, "Philadelphia 76ers All-Time");
    this.addPlayer("Ben", "Simmons", [Player.POSITION_POINT_GUARD, Player.POSITION_POWER_FORWARD], 86, "Philadelphia 76ers All-Time");
    this.addPlayer("Maurice", "Cheeks", [Player.POSITION_POINT_GUARD], 86, "Philadelphia 76ers All-Time");
}

PlayerCollection.prototype.populateClassic = function() {
    if (this.useAllPlayerVersions)
        this.addPlayer("Kyle", "Lowry", [Player.POSITION_POINT_GUARD], 85, "Toronto Raptors '18-'19");

    if (this.useAllPlayerVersions)
        this.addPlayer("Klay", "Thompson", [Player.POSITION_SHOOTING_GUARD, Player.POSITION_SMALL_FORWARD], 91, "Golden State Warriors '16-'17");
    if (this.useAllPlayerVersions)
        this.addPlayer("Draymond", "Green", [Player.POSITION_POWER_FORWARD], 86, "Golden State Warriors '16-'17");
    
    this.addPlayer("Jamal", "Crawford", [Player.POSITION_SHOOTING_GUARD, Player.POSITION_SMALL_FORWARD], 81, "Los Angeles Clippers '13-'14");
    
    if (this.useAllPlayerVersions)
        this.addPlayer("Roy", "Hibbert", [Player.POSITION_CENTER], 83, "Indiana Pacers '13-'14");
    if (this.useAllPlayerVersions)
        this.addPlayer("David", "West", [Player.POSITION_POWER_FORWARD], 81, "Indiana Pacers '13-'14");
    
    if (this.useAllPlayerVersions)
        this.addPlayer("Tim", "Duncan", [Player.POSITION_POWER_FORWARD, Player.POSITION_CENTER], 92, "San Antonio Spurs '13-'14");
    if (this.useAllPlayerVersions)
        this.addPlayer("Kawhi", "Leonard", [Player.POSITION_SMALL_FORWARD, Player.POSITION_POWER_FORWARD], 92, "San Antonio Spurs '13-'14");
    if (this.useAllPlayerVersions)
        this.addPlayer("Tony", "Parker", [Player.POSITION_POINT_GUARD], 85, "San Antonio Spurs '13-'14");
    if (this.useAllPlayerVersions)
        this.addPlayer("Manu", "Ginobili", [Player.POSITION_SHOOTING_GUARD, Player.POSITION_SMALL_FORWARD], 83, "San Antonio Spurs '13-'14");
    this.addPlayer("Danny", "Green", [Player.POSITION_SHOOTING_GUARD, Player.POSITION_SMALL_FORWARD], 81, "San Antonio Spurs '13-'14");
    
    if (this.useAllPlayerVersions)
        this.addPlayer("Dwyane", "Wade", [Player.POSITION_SHOOTING_GUARD], 91, "Miami Heat '12-'13");
    if (this.useAllPlayerVersions)
        this.addPlayer("Chris", "Bosh", [Player.POSITION_CENTER, Player.POSITION_POWER_FORWARD], 85, "Miami Heat '12-'13");
    
    if (this.useAllPlayerVersions)
        this.addPlayer("Marc", "Gasol", [Player.POSITION_CENTER], 88, "Memphis Grizzlies '12-'13");
    if (this.useAllPlayerVersions)
        this.addPlayer("Mike", "Conley", [Player.POSITION_POINT_GUARD], 86, "Memphis Grizzlies '12-'13");
    if (this.useAllPlayerVersions)
        this.addPlayer("Zach", "Randolph", [Player.POSITION_POWER_FORWARD], 85, "Memphis Grizzlies '12-'13");
    
    if (this.useAllPlayerVersions)
        this.addPlayer("Kevin", "Durant", [Player.POSITION_SMALL_FORWARD, Player.POSITION_POWER_FORWARD], 96, "Oklahoma City Thunder '11-'12");
    if (this.useAllPlayerVersions)
        this.addPlayer("Russell", "Westbrook", [Player.POSITION_POINT_GUARD], 88, "Oklahoma City Thunder '11-'12");
    if (this.useAllPlayerVersions)
        this.addPlayer("James", "Harden", [Player.POSITION_SHOOTING_GUARD, Player.POSITION_POINT_GUARD], 87, "Oklahoma City Thunder '11-'12");
    
    if (this.useAllPlayerVersions)
        this.addPlayer("Carmelo", "Anthony", [Player.POSITION_SMALL_FORWARD, Player.POSITION_POWER_FORWARD], 91, "New York Knicks '11-'12");
    this.addPlayer("Jeremy", "Lin", [Player.POSITION_POINT_GUARD], 84, "New York Knicks '11-'12");
    
    if (this.useAllPlayerVersions)
        this.addPlayer("Dirk", "Nowitzki", [Player.POSITION_POWER_FORWARD, Player.POSITION_CENTER], 96, "Dallas Mavericks '10-'11");
    if (this.useAllPlayerVersions)
        this.addPlayer("Shawn", "Marion", [Player.POSITION_SMALL_FORWARD, Player.POSITION_POWER_FORWARD], 83, "Dallas Mavericks '10-'11");
    if (this.useAllPlayerVersions)
        this.addPlayer("Caron", "Butler", [Player.POSITION_SMALL_FORWARD], 80, "Dallas Mavericks '10-'11");
    
    if (this.useAllPlayerVersions)
        this.addPlayer("Carlos", "Boozer", [Player.POSITION_POWER_FORWARD], 85, "Chicago Bulls '10-'11");
    this.addPlayer("Luol", "Deng", [Player.POSITION_SMALL_FORWARD, Player.POSITION_POWER_FORWARD], 82, "Chicago Bulls '10-'11");
    
    if (this.useAllPlayerVersions)
        this.addPlayer("Brandon", "Roy", [Player.POSITION_SHOOTING_GUARD, Player.POSITION_SMALL_FORWARD], 89, "Portland Trail Blazers '09-'10");
    if (this.useAllPlayerVersions)
        this.addPlayer("LaMarcus", "Aldridge", [Player.POSITION_POWER_FORWARD, Player.POSITION_CENTER], 85, "Portland Trail Blazers '09-'10");
    this.addPlayer("Nicolas", "Batum", [Player.POSITION_SMALL_FORWARD, Player.POSITION_SHOOTING_GUARD], 83, "Portland Trail Blazers '09-'10");
    this.addPlayer("Greg", "Oden", [Player.POSITION_CENTER], 83, "Portland Trail Blazers '09-'10");
    
    if (this.useAllPlayerVersions)
        this.addPlayer("Yao", "Ming", [Player.POSITION_CENTER], 88, "Houston Rockets '07-'08");

    if (this.useAllPlayerVersions)
        this.addPlayer("Allen", "Iverson", [Player.POSITION_POINT_GUARD], 88, "Denver Nuggets '07-'08");
    this.addPlayer("Marcus", "Camby", [Player.POSITION_CENTER], 87, "Denver Nuggets '07-'08");
    
    if (this.useAllPlayerVersions)
        this.addPlayer("Kevin", "Garnett", [Player.POSITION_POWER_FORWARD, Player.POSITION_CENTER], 93, "Boston Celtics '07-'08");
    if (this.useAllPlayerVersions)
        this.addPlayer("Paul", "Pierce", [Player.POSITION_SMALL_FORWARD, Player.POSITION_POWER_FORWARD], 92, "Boston Celtics '07-'08");
    if (this.useAllPlayerVersions)
        this.addPlayer("Rajon", "Rondo", [Player.POSITION_POINT_GUARD], 85, "Boston Celtics '07-'08");
    
    if (this.useAllPlayerVersions)
        this.addPlayer("Gilbert", "Arenas", [Player.POSITION_POINT_GUARD], 91, "Washington Wizards '06-'07");
    if (this.useAllPlayerVersions)
        this.addPlayer("Caron", "Butler", [Player.POSITION_SMALL_FORWARD], 86, "Washington Wizards '06-'07");
        
    if (this.useAllPlayerVersions)
        this.addPlayer("Baron", "Davis", [Player.POSITION_POINT_GUARD], 88, "Golden State Warriors '06-'07");
    this.addPlayer("Al", "Harrington", [Player.POSITION_POWER_FORWARD, Player.POSITION_SMALL_FORWARD], 83, "Golden State Warriors '06-'07");
    if (this.useAllPlayerVersions)
        this.addPlayer("Monta", "Ellis", [Player.POSITION_SHOOTING_GUARD, Player.POSITION_POINT_GUARD], 81, "Golden State Warriors '06-'07");
    if (this.useAllPlayerVersions)
        this.addPlayer("Jason", "Richardson", [Player.POSITION_SHOOTING_GUARD, Player.POSITION_SMALL_FORWARD], 80, "Golden State Warriors '06-'07");
    if (this.useAllPlayerVersions)
        this.addPlayer("Stephen", "Jackson", [Player.POSITION_SMALL_FORWARD], 80, "Golden State Warriors '06-'07");
    
    if (this.useAllPlayerVersions)
        this.addPlayer("LeBron", "James", [Player.POSITION_SMALL_FORWARD, Player.POSITION_POWER_FORWARD], 96, "Cleveland Cavaliers '06-'07");
    if (this.useAllPlayerVersions)
        this.addPlayer("Zydrunas", "Ilgauskas", [Player.POSITION_CENTER], 81, "Cleveland Cavaliers '06-'07");
    this.addPlayer("Larry", "Hughes", [Player.POSITION_POINT_GUARD], 80, "Cleveland Cavaliers '06-'07");
    
    if (this.useAllPlayerVersions)
        this.addPlayer("Dwyane", "Wade", [Player.POSITION_SHOOTING_GUARD], 95, "Miami Heat '05-'06");
    
    if (this.useAllPlayerVersions)
        this.addPlayer("Pau", "Gasol", [Player.POSITION_CENTER], 90, "Memphis Grizzlies '05-'06");
    if (this.useAllPlayerVersions)
        this.addPlayer("Shane", "Battier", [Player.POSITION_SMALL_FORWARD, Player.POSITION_SHOOTING_GUARD], 82, "Memphis Grizzlies '05-'06");
    if (this.useAllPlayerVersions)
        this.addPlayer("Mike", "Miller", [Player.POSITION_SHOOTING_GUARD, Player.POSITION_SMALL_FORWARD], 80, "Memphis Grizzlies '05-'06");
    
    if (this.useAllPlayerVersions)
        this.addPlayer("Steve", "Nash", [Player.POSITION_POINT_GUARD], 95, "Phoenix Suns '04-'05");
    if (this.useAllPlayerVersions)
        this.addPlayer("Amar'e", "Stoudemire", [Player.POSITION_POWER_FORWARD, Player.POSITION_CENTER], 88, "Phoenix Suns '04-'05");
    if (this.useAllPlayerVersions)
        this.addPlayer("Shawn", "Marion", [Player.POSITION_SMALL_FORWARD, Player.POSITION_POWER_FORWARD], 87, "Phoenix Suns '04-'05");
    if (this.useAllPlayerVersions)
        this.addPlayer("Joe", "Johnson", [Player.POSITION_SMALL_FORWARD, Player.POSITION_SHOOTING_GUARD], 80, "Phoenix Suns '04-'05");
    
    if (this.useAllPlayerVersions)
        this.addPlayer("Tony", "Parker", [Player.POSITION_POINT_GUARD], 89, "San Antonio Spurs '04-'05");
    if (this.useAllPlayerVersions)
        this.addPlayer("Manu", "Ginobili", [Player.POSITION_SHOOTING_GUARD, Player.POSITION_SMALL_FORWARD], 86, "San Antonio Spurs '04-'05");
    if (this.useAllPlayerVersions)
        this.addPlayer("Bruce", "Bowen", [Player.POSITION_SMALL_FORWARD, Player.POSITION_SHOOTING_GUARD], 83, "San Antonio Spurs '04-'05");
    
    if (this.useAllPlayerVersions)
        this.addPlayer("Kevin", "Garnett", [Player.POSITION_POWER_FORWARD, Player.POSITION_CENTER], 97, "Minnesota Timberwolves '03-'04");
    if (this.useAllPlayerVersions)
        this.addPlayer("Sam", "Cassell", [Player.POSITION_POINT_GUARD], 87, "Minnesota Timberwolves '03-'04");
    
    if (this.useAllPlayerVersions)
        this.addPlayer("Chauncey", "Billups", [Player.POSITION_POINT_GUARD, Player.POSITION_SHOOTING_GUARD], 89, "Detroit Pistons '03-'04");
    if (this.useAllPlayerVersions)
        this.addPlayer("Ben", "Wallace", [Player.POSITION_POWER_FORWARD], 88, "Detroit Pistons '03-'04");
    
    if (this.useAllPlayerVersions)
        this.addPlayer("Kobe", "Bryant", [Player.POSITION_SHOOTING_GUARD, Player.POSITION_SMALL_FORWARD], 95, "Los Angeles Lakers '03-'04");
    if (this.useAllPlayerVersions)
        this.addPlayer("Shaquille", "O'Neal", [Player.POSITION_CENTER], 94, "Los Angeles Lakers '03-'04");
    if (this.useAllPlayerVersions)
        this.addPlayer("Gary", "Payton", [Player.POSITION_POINT_GUARD], 83, "Los Angeles Lakers '03-'04");
    
    if (this.useAllPlayerVersions)
        this.addPlayer("Shawn", "Marion", [Player.POSITION_SMALL_FORWARD, Player.POSITION_POWER_FORWARD], 86, "Phoenix Suns '02-'03");
    if (this.useAllPlayerVersions)
        this.addPlayer("Stephon", "Marbury", [Player.POSITION_POINT_GUARD], 84, "Phoenix Suns '02-'03");
    if (this.useAllPlayerVersions)
        this.addPlayer("Amar'e", "Stoudemire", [Player.POSITION_POWER_FORWARD, Player.POSITION_CENTER], 80, "Phoenix Suns '02-'03");
    
    if (this.useAllPlayerVersions)
        this.addPlayer("Dirk", "Nowitzki", [Player.POSITION_POWER_FORWARD, Player.POSITION_CENTER], 92, "Dallas Mavericks '02-'03");
    if (this.useAllPlayerVersions)
        this.addPlayer("Steve", "Nash", [Player.POSITION_POINT_GUARD], 87, "Dallas Mavericks '02-'03");
    if (this.useAllPlayerVersions)
        this.addPlayer("Nick", "Van Exel", [Player.POSITION_POINT_GUARD], 81, "Dallas Mavericks '02-'03");
    if (this.useAllPlayerVersions)
        this.addPlayer("Michael", "Finley", [Player.POSITION_SMALL_FORWARD, Player.POSITION_SHOOTING_GUARD], 81, "Dallas Mavericks '02-'03");
    
    if (this.useAllPlayerVersions)
        this.addPlayer("Jason", "Kidd", [Player.POSITION_POINT_GUARD], 92, "New Jersey Nets '01-'02");
    if (this.useAllPlayerVersions)
        this.addPlayer("Keith", "Van Horn", [Player.POSITION_SMALL_FORWARD, Player.POSITION_POWER_FORWARD], 82, "New Jersey Nets '01-'02");
    if (this.useAllPlayerVersions)
        this.addPlayer("Kenyon", "Martin", [Player.POSITION_POWER_FORWARD], 82, "New Jersey Nets '01-'02");
    this.addPlayer("Kerry", "Kittles", [Player.POSITION_SHOOTING_GUARD, Player.POSITION_SMALL_FORWARD], 81, "New Jersey Nets '01-'02");
    
    if (this.useAllPlayerVersions)
        this.addPlayer("Peja", "Stojakovic", [Player.POSITION_SMALL_FORWARD], 86, "Sacramento Kings '01-'02");
    if (this.useAllPlayerVersions)
        this.addPlayer("Vlade", "Divac", [Player.POSITION_CENTER], 86, "Sacramento Kings '01-'02");
    if (this.useAllPlayerVersions)
        this.addPlayer("Doug", "Christie", [Player.POSITION_SHOOTING_GUARD, Player.POSITION_SMALL_FORWARD], 83, "Sacramento Kings '01-'02");
    if (this.useAllPlayerVersions)
        this.addPlayer("Mike", "Bibby", [Player.POSITION_POINT_GUARD], 82, "Sacramento Kings '01-'02");
    
    if (this.useAllPlayerVersions)
        this.addPlayer("Kobe", "Bryant", [Player.POSITION_SHOOTING_GUARD, Player.POSITION_SMALL_FORWARD], 98, "Los Angeles Lakers '00-'01");
    if (this.useAllPlayerVersions)
        this.addPlayer("Shaquille", "O'Neal", [Player.POSITION_CENTER], 96, "Los Angeles Lakers '00-'01");
    if (this.useAllPlayerVersions)
        this.addPlayer("Horace", "Grant", [Player.POSITION_POWER_FORWARD], 80, "Los Angeles Lakers '00-'01");
    
    if (this.useAllPlayerVersions)
        this.addPlayer("Allen", "Iverson", [Player.POSITION_POINT_GUARD, Player.POSITION_SHOOTING_GUARD], 93, "Philadelphia 76ers '00-'01");
    if (this.useAllPlayerVersions)
        this.addPlayer("Dikembe", "Mutombo", [Player.POSITION_CENTER], 82, "Philadelphia 76ers '00-'01");
    
    if (this.useAllPlayerVersions)
        this.addPlayer("Arvydas", "Sabonis", [Player.POSITION_CENTER], 86, "Portland Trail Blazers '99-'00");
    if (this.useAllPlayerVersions)
        this.addPlayer("Scottie", "Pippen", [Player.POSITION_SMALL_FORWARD, Player.POSITION_SHOOTING_GUARD], 85, "Portland Trail Blazers '99-'00");
    if (this.useAllPlayerVersions)
        this.addPlayer("Steve", "Smith", [Player.POSITION_SHOOTING_GUARD, Player.POSITION_SMALL_FORWARD], 82, "Portland Trail Blazers '99-'00");
    if (this.useAllPlayerVersions)
        this.addPlayer("Damon", "Stoudamire", [Player.POSITION_POINT_GUARD], 81, "Portland Trail Blazers '99-'00");
    
    if (this.useAllPlayerVersions)
        this.addPlayer("Vince", "Carter", [Player.POSITION_SMALL_FORWARD, Player.POSITION_SHOOTING_GUARD], 94, "Toronto Raptors '99-'00");
    if (this.useAllPlayerVersions)
        this.addPlayer("Tracy", "McGrady", [Player.POSITION_SHOOTING_GUARD], 83, "Toronto Raptors '99-'00");
    if (this.useAllPlayerVersions)
        this.addPlayer("Doug", "Christie", [Player.POSITION_SHOOTING_GUARD, Player.POSITION_SMALL_FORWARD], 80, "Toronto Raptors '99-'00");
    
    if (this.useAllPlayerVersions)
        this.addPlayer("Patrick", "Ewing", [Player.POSITION_CENTER], 85, "New York Knicks '98-'99");
    this.addPlayer("Latrell", "Sprewell", [Player.POSITION_SMALL_FORWARD], 84, "New York Knicks '98-'99");
    if (this.useAllPlayerVersions)
        this.addPlayer("Allan", "Houston", [Player.POSITION_SHOOTING_GUARD, Player.POSITION_SMALL_FORWARD], 83, "New York Knicks '98-'99");
    if (this.useAllPlayerVersions)
        this.addPlayer("Larry", "Johnson", [Player.POSITION_POWER_FORWARD, Player.POSITION_SMALL_FORWARD], 81, "New York Knicks '98-'99");
    
    if (this.useAllPlayerVersions)
        this.addPlayer("David", "Robinson", [Player.POSITION_CENTER], 91, "San Antonio Spurs '97-'98");
    if (this.useAllPlayerVersions)
        this.addPlayer("Tim", "Duncan", [Player.POSITION_POWER_FORWARD, Player.POSITION_CENTER], 87, "San Antonio Spurs '97-'98");
    
    if (this.useAllPlayerVersions)
        this.addPlayer("Shaquille", "O'Neal", [Player.POSITION_CENTER], 93, "Los Angeles Lakers '97-'98");
    if (this.useAllPlayerVersions)
        this.addPlayer("Eddie", "Jones", [Player.POSITION_SHOOTING_GUARD, Player.POSITION_SMALL_FORWARD], 83, "Los Angeles Lakers '97-'98");
    if (this.useAllPlayerVersions)
        this.addPlayer("Kobe", "Bryant", [Player.POSITION_SHOOTING_GUARD, Player.POSITION_SMALL_FORWARD], 83, "Los Angeles Lakers '97-'98");
    this.addPlayer("Nick", "Van Exel", [Player.POSITION_POINT_GUARD], 82, "Los Angeles Lakers '97-'98");
    this.addPlayer("Rick", "Fox", [Player.POSITION_SMALL_FORWARD], 80, "Los Angeles Lakers '97-'98");
    
    if (this.useAllPlayerVersions)
        this.addPlayer("Karl", "Malone", [Player.POSITION_POWER_FORWARD], 96, "San Antonio Spurs '97-'98");
    if (this.useAllPlayerVersions)
        this.addPlayer("John", "Stockton", [Player.POSITION_POINT_GUARD], 93, "Utah Jazz '97-'98");
    if (this.useAllPlayerVersions)
        this.addPlayer("Jeff", "Hornacek", [Player.POSITION_SHOOTING_GUARD, Player.POSITION_POINT_GUARD], 82, "Utah Jazz '97-'98");
    
    if (this.useAllPlayerVersions)
        this.addPlayer("Michael", "Jordan", [Player.POSITION_SHOOTING_GUARD, Player.POSITION_SMALL_FORWARD], 98, "Chicago Bulls '97-'98");
    if (this.useAllPlayerVersions)
        this.addPlayer("Scottie", "Pippen", [Player.POSITION_SMALL_FORWARD, Player.POSITION_SHOOTING_GUARD], 88, "Chicago Bulls '97-'98");
    if (this.useAllPlayerVersions)
        this.addPlayer("Dennis", "Rodman", [Player.POSITION_POWER_FORWARD], 84, "Chicago Bulls '97-'98");
    if (this.useAllPlayerVersions)
        this.addPlayer("Toni", "Kukoc", [Player.POSITION_SMALL_FORWARD, Player.POSITION_POWER_FORWARD], 83, "Chicago Bulls '97-'98");
    if (this.useAllPlayerVersions)
        this.addPlayer("Ron", "Harper", [Player.POSITION_SHOOTING_GUARD, Player.POSITION_POINT_GUARD], 80, "Chicago Bulls '97-'98");
    
    if (this.useAllPlayerVersions)
        this.addPlayer("Alonzo", "Mourning", [Player.POSITION_CENTER, Player.POSITION_POWER_FORWARD], 93, "Miami Heat '96-'97");
    if (this.useAllPlayerVersions)
        this.addPlayer("Tim", "Hardaway", [Player.POSITION_POINT_GUARD], 88, "Miami Heat '96-'97");
    this.addPlayer("P.J.", "Brown", [Player.POSITION_CENTER], 84, "Miami Heat '96-'97");
    
    if (this.useAllPlayerVersions)
        this.addPlayer("Gary", "Payton", [Player.POSITION_POINT_GUARD], 92, "Seattle SuperSonics '95-'96");
    if (this.useAllPlayerVersions)
        this.addPlayer("Shawn", "Kemp", [Player.POSITION_POWER_FORWARD, Player.POSITION_CENTER], 88, "Seattle SuperSonics '95-'96");
    if (this.useAllPlayerVersions)
        this.addPlayer("Detlef", "Schrempf", [Player.POSITION_SMALL_FORWARD, Player.POSITION_POWER_FORWARD], 84, "Seattle SuperSonics '95-'96");
    
    if (this.useAllPlayerVersions)
        this.addPlayer("Michael", "Jordan", [Player.POSITION_SHOOTING_GUARD, Player.POSITION_SMALL_FORWARD], 99, "Chicago Bulls '95-'96");
    if (this.useAllPlayerVersions)
        this.addPlayer("Scottie", "Pippen", [Player.POSITION_SMALL_FORWARD, Player.POSITION_SHOOTING_GUARD], 96, "Chicago Bulls '95-'96");
    if (this.useAllPlayerVersions)
        this.addPlayer("Dennis", "Rodman", [Player.POSITION_POWER_FORWARD], 87, "Chicago Bulls '95-'96");
    if (this.useAllPlayerVersions)
        this.addPlayer("Toni", "Kukoc", [Player.POSITION_SMALL_FORWARD, Player.POSITION_POWER_FORWARD], 83, "Chicago Bulls '95-'96");
    
    if (this.useAllPlayerVersions)
        this.addPlayer("Shaquille", "O'Neal", [Player.POSITION_CENTER], 92, "Orlando Magic '94-'95");
    if (this.useAllPlayerVersions)
        this.addPlayer("Penny", "Hardaway", [Player.POSITION_POINT_GUARD, Player.POSITION_SHOOTING_GUARD], 84, "Orlando Magic '94-'95");
    if (this.useAllPlayerVersions)
        this.addPlayer("Nick", "Anderson", [Player.POSITION_SHOOTING_GUARD, Player.POSITION_SMALL_FORWARD], 83, "Orlando Magic '94-'95");
    if (this.useAllPlayerVersions)
        this.addPlayer("Horace", "Grant", [Player.POSITION_POWER_FORWARD], 82, "Orlando Magic '94-'95");
    if (this.useAllPlayerVersions)
        this.addPlayer("Dennis", "Scott", [Player.POSITION_SMALL_FORWARD, Player.POSITION_SHOOTING_GUARD], 80, "Orlando Magic '94-'95");
    
    if (this.useAllPlayerVersions)
        this.addPlayer("Patrick", "Ewing", [Player.POSITION_CENTER], 90, "New York Knicks '94-'95");
    if (this.useAllPlayerVersions)
        this.addPlayer("John", "Starks", [Player.POSITION_SHOOTING_GUARD, Player.POSITION_POINT_GUARD], 82, "New York Knicks '94-'95");
    if (this.useAllPlayerVersions)
        this.addPlayer("Charles", "Oakley", [Player.POSITION_POWER_FORWARD], 80, "New York Knicks '94-'95");
    
    if (this.useAllPlayerVersions)
        this.addPlayer("Mahmoud", "Abdul-Rauf", [Player.POSITION_POINT_GUARD], 84, "Denver Nuggets '93-'94");
    if (this.useAllPlayerVersions)
        this.addPlayer("Dikembe", "Mutombo", [Player.POSITION_CENTER], 84, "Denver Nuggets '93-'94");
    if (this.useAllPlayerVersions)
        this.addPlayer("Laphonso", "Ellis", [Player.POSITION_POWER_FORWARD], 80, "Denver Nuggets '93-'94");
    
    if (this.useAllPlayerVersions)
        this.addPlayer("Hakeem", "Olajuwon", [Player.POSITION_CENTER], 97, "Houston Rockets '93-'94");
    if (this.useAllPlayerVersions)
        this.addPlayer("Otis", "Thorpe", [Player.POSITION_POWER_FORWARD, Player.POSITION_CENTER], 80, "Houston Rockets '93-'94");
    
    if (this.useAllPlayerVersions)
        this.addPlayer("Alonzo", "Mourning", [Player.POSITION_CENTER, Player.POSITION_POWER_FORWARD], 86, "Charlotte Hornets '92-'93");
    if (this.useAllPlayerVersions)
        this.addPlayer("Larry", "Johnson", [Player.POSITION_POWER_FORWARD, Player.POSITION_SMALL_FORWARD], 83, "Charlotte Hornets '92-'93");
    if (this.useAllPlayerVersions)
        this.addPlayer("Muggsy", "Bogues", [Player.POSITION_POINT_GUARD], 80, "Charlotte Hornets '92-'93");
    
    if (this.useAllPlayerVersions)
        this.addPlayer("Michael", "Jordan", [Player.POSITION_SHOOTING_GUARD, Player.POSITION_SMALL_FORWARD], 99, "Chicago Bulls '92-'93");
    if (this.useAllPlayerVersions)
        this.addPlayer("Scottie", "Pippen", [Player.POSITION_SMALL_FORWARD, Player.POSITION_SHOOTING_GUARD], 92, "Chicago Bulls '92-'93");
    if (this.useAllPlayerVersions)
        this.addPlayer("Horace", "Grant", [Player.POSITION_POWER_FORWARD], 82, "Chicago Bulls '92-'93");
    
    if (this.useAllPlayerVersions)
        this.addPlayer("Chris", "Mullin", [Player.POSITION_SMALL_FORWARD, Player.POSITION_SHOOTING_GUARD], 89, "Golden State Warriors '90-'91");
    if (this.useAllPlayerVersions)
        this.addPlayer("Tim", "Hardaway", [Player.POSITION_POINT_GUARD], 87, "Golden State Warriors '90-'91");
    if (this.useAllPlayerVersions)
        this.addPlayer("Mitch", "Richmond", [Player.POSITION_SHOOTING_GUARD, Player.POSITION_SMALL_FORWARD], 86, "Golden State Warriors '90-'91");
    
    if (this.useAllPlayerVersions)
        this.addPlayer("Clyde", "Drexler", [Player.POSITION_SHOOTING_GUARD, Player.POSITION_SMALL_FORWARD], 90, "Portland Trail Blazers '90-'91");
    if (this.useAllPlayerVersions)
        this.addPlayer("Terry", "Porter", [Player.POSITION_POINT_GUARD], 85, "Portland Trail Blazers '90-'91");
    if (this.useAllPlayerVersions)
        this.addPlayer("Jerome", "Kersey", [Player.POSITION_SMALL_FORWARD, Player.POSITION_POWER_FORWARD], 82, "Portland Trail Blazers '90-'91");
    
    if (this.useAllPlayerVersions)
        this.addPlayer("Magic", "Johnson", [Player.POSITION_POINT_GUARD, Player.POSITION_SHOOTING_GUARD], 92, "Los Angeles Lakers '90-'91");
    if (this.useAllPlayerVersions)
        this.addPlayer("James", "Worthy", [Player.POSITION_SMALL_FORWARD, Player.POSITION_POWER_FORWARD], 86, "Los Angeles Lakers '90-'91");
    
    if (this.useAllPlayerVersions)
        this.addPlayer("Michael", "Jordan", [Player.POSITION_SHOOTING_GUARD, Player.POSITION_SMALL_FORWARD], 97, "Chicago Bulls '90-'91");
    if (this.useAllPlayerVersions)
        this.addPlayer("Scottie", "Pippen", [Player.POSITION_SMALL_FORWARD, Player.POSITION_SHOOTING_GUARD], 89, "Chicago Bulls '90-'91");
    if (this.useAllPlayerVersions)
        this.addPlayer("Horace", "Grant", [Player.POSITION_POWER_FORWARD], 82, "Chicago Bulls '90-'91");
    
    if (this.useAllPlayerVersions)
        this.addPlayer("Mark", "Price", [Player.POSITION_POINT_GUARD], 89, "Cleveland Cavaliers '89-'90");
    if (this.useAllPlayerVersions)
        this.addPlayer("Larry", "Nance", [Player.POSITION_POWER_FORWARD, Player.POSITION_SMALL_FORWARD], 86, "Cleveland Cavaliers '89-'90");
    if (this.useAllPlayerVersions)
        this.addPlayer("Brad", "Daugherty", [Player.POSITION_CENTER], 85, "Cleveland Cavaliers '89-'90");
    if (this.useAllPlayerVersions)
        this.addPlayer("Hot Rod", "Williams", [Player.POSITION_POWER_FORWARD, Player.POSITION_CENTER], 82, "Cleveland Cavaliers '89-'90");
    
    if (this.useAllPlayerVersions)
        this.addPlayer("Michael", "Jordan", [Player.POSITION_SHOOTING_GUARD, Player.POSITION_SMALL_FORWARD], 97, "Chicago Bulls '88-'89");
    if (this.useAllPlayerVersions)
        this.addPlayer("Scottie", "Pippen", [Player.POSITION_SMALL_FORWARD, Player.POSITION_SHOOTING_GUARD], 82, "Chicago Bulls '88-'89");
    if (this.useAllPlayerVersions)
        this.addPlayer("Horace", "Grant", [Player.POSITION_POWER_FORWARD], 81, "Chicago Bulls '88-'89");
    
    if (this.useAllPlayerVersions)
        this.addPlayer("Isiah", "Thomas", [Player.POSITION_POINT_GUARD], 92, "Detroit Pistons '88-'89");
    if (this.useAllPlayerVersions)
        this.addPlayer("Joe", "Dumars", [Player.POSITION_SHOOTING_GUARD, Player.POSITION_POINT_GUARD], 90, "Detroit Pistons '88-'89");
    if (this.useAllPlayerVersions)
        this.addPlayer("Mark", "Aguirre", [Player.POSITION_SMALL_FORWARD, Player.POSITION_SHOOTING_GUARD], 82, "Detroit Pistons '88-'89");
    if (this.useAllPlayerVersions)
        this.addPlayer("Dennis", "Rodman", [Player.POSITION_POWER_FORWARD], 81, "Detroit Pistons '88-'89");
    this.addPlayer("Vinnie", "Johnson", [Player.POSITION_POINT_GUARD], 81, "Detroit Pistons '88-'89");
    if (this.useAllPlayerVersions)
        this.addPlayer("Bill", "Laimbeer", [Player.POSITION_CENTER], 80, "Detroit Pistons '88-'89");
    
    if (this.useAllPlayerVersions)
        this.addPlayer("Magic", "Johnson", [Player.POSITION_POINT_GUARD, Player.POSITION_SHOOTING_GUARD], 96, "Los Angeles Lakers '86-'87");
    if (this.useAllPlayerVersions)
        this.addPlayer("Kareem", "Abdul-Jabbar", [Player.POSITION_CENTER], 94, "Los Angeles Lakers '86-'87");
    if (this.useAllPlayerVersions)
        this.addPlayer("James", "Worthy", [Player.POSITION_SMALL_FORWARD, Player.POSITION_POWER_FORWARD], 85, "Los Angeles Lakers '86-'87");
    if (this.useAllPlayerVersions)
        this.addPlayer("Michael", "Cooper", [Player.POSITION_SHOOTING_GUARD, Player.POSITION_POINT_GUARD], 85, "Los Angeles Lakers '86-'87");
    if (this.useAllPlayerVersions)
        this.addPlayer("Byron", "Scott", [Player.POSITION_SHOOTING_GUARD, Player.POSITION_POINT_GUARD], 82, "Los Angeles Lakers '86-'87");
    this.addPlayer("A.C.", "Green", [Player.POSITION_POWER_FORWARD], 81, "Los Angeles Lakers '86-'87");
    
    if (this.useAllPlayerVersions)
        this.addPlayer("Dominique", "Wilkins", [Player.POSITION_SMALL_FORWARD, Player.POSITION_SHOOTING_GUARD], 90, "Atlanta Hawks '85-'86");
    if (this.useAllPlayerVersions)
        this.addPlayer("Doc", "Rivers", [Player.POSITION_POINT_GUARD], 84, "Atlanta Hawks '85-'86");
    
    if (this.useAllPlayerVersions)
        this.addPlayer("Larry", "Bird", [Player.POSITION_SMALL_FORWARD, Player.POSITION_POWER_FORWARD], 98, "Boston Celtics '85-'86");
    if (this.useAllPlayerVersions)
        this.addPlayer("Kevin", "McHale", [Player.POSITION_POWER_FORWARD], 91, "Boston Celtics '85-'86");
    if (this.useAllPlayerVersions)
        this.addPlayer("Robert", "Parish", [Player.POSITION_CENTER], 85, "Boston Celtics '85-'86");
    if (this.useAllPlayerVersions)
        this.addPlayer("Dennis", "Johnson", [Player.POSITION_POINT_GUARD, Player.POSITION_SHOOTING_GUARD], 84, "Boston Celtics '85-'86");
    if (this.useAllPlayerVersions)
        this.addPlayer("Bill", "Walton", [Player.POSITION_CENTER], 81, "Boston Celtics '85-'86");
    
    if (this.useAllPlayerVersions)
        this.addPlayer("Michael", "Jordan", [Player.POSITION_SHOOTING_GUARD, Player.POSITION_SMALL_FORWARD], 90, "Chicago Bulls '85-'86");
    if (this.useAllPlayerVersions)
        this.addPlayer("George", "Gervin", [Player.POSITION_SHOOTING_GUARD, Player.POSITION_SMALL_FORWARD], 82, "Chicago Bulls '85-'86");
    if (this.useAllPlayerVersions)
        this.addPlayer("Charles", "Oakley", [Player.POSITION_POWER_FORWARD], 81, "Chicago Bulls '85-'86");
    
    if (this.useAllPlayerVersions)
        this.addPlayer("Sidney", "Moncrief", [Player.POSITION_SHOOTING_GUARD, Player.POSITION_POINT_GUARD], 90, "Milwaukee Bucks '84-'85");
    this.addPlayer("Terry", "Cummings", [Player.POSITION_POWER_FORWARD, Player.POSITION_SMALL_FORWARD], 88, "Milwaukee Bucks '84-'85");
    this.addPlayer("Paul", "Pressey", [Player.POSITION_SHOOTING_GUARD, Player.POSITION_SMALL_FORWARD], 85, "Milwaukee Bucks '84-'85");
    
    if (this.useAllPlayerVersions)
        this.addPlayer("Julius", "Erving", [Player.POSITION_SMALL_FORWARD, Player.POSITION_SHOOTING_GUARD], 94, "Philadelphia 76ers '76-'77");
    if (this.useAllPlayerVersions)
        this.addPlayer("George", "McGinnis", [Player.POSITION_POWER_FORWARD], 86, "Philadelphia 76ers '76-'77");
    if (this.useAllPlayerVersions)
        this.addPlayer("Doug", "Collins", [Player.POSITION_SHOOTING_GUARD, Player.POSITION_SMALL_FORWARD], 85, "Philadelphia 76ers '76-'77");
    this.addPlayer("Henry", "Bibby", [Player.POSITION_POINT_GUARD], 80, "Philadelphia 76ers '76-'77");
    if (this.useAllPlayerVersions)
        this.addPlayer("World B.", "Free", [Player.POSITION_SHOOTING_GUARD, Player.POSITION_POINT_GUARD], 80, "Philadelphia 76ers '76-'77");
    
    if (this.useAllPlayerVersions)
        this.addPlayer("Walt", "Frazier", [Player.POSITION_POINT_GUARD], 92, "New York Knicks '71-'72");
    if (this.useAllPlayerVersions)
        this.addPlayer("Jerry", "Lucas", [Player.POSITION_POWER_FORWARD], 86, "New York Knicks '71-'72");
    if (this.useAllPlayerVersions)
        this.addPlayer("Dave", "DeBusschere", [Player.POSITION_POWER_FORWARD, Player.POSITION_SMALL_FORWARD], 84, "New York Knicks '71-'72");
    if (this.useAllPlayerVersions)
        this.addPlayer("Willis", "Reed", [Player.POSITION_POWER_FORWARD], 83, "New York Knicks '71-'72");
    this.addPlayer("Bill", "Bradley", [Player.POSITION_SMALL_FORWARD, Player.POSITION_SHOOTING_GUARD], 80, "New York Knicks '71-'72");
    
    if (this.useAllPlayerVersions)
        this.addPlayer("Jerry", "West", [Player.POSITION_POINT_GUARD], 95, "Los Angeles Lakers '70-'71");
    if (this.useAllPlayerVersions)
        this.addPlayer("Wilt", "Chamberlain", [Player.POSITION_CENTER], 92, "Los Angeles Lakers '70-'71");
    if (this.useAllPlayerVersions)
        this.addPlayer("Gail", "Goodrich", [Player.POSITION_SHOOTING_GUARD, Player.POSITION_POINT_GUARD], 84, "Los Angeles Lakers '70-'71");

    if (this.useAllPlayerVersions)
        this.addPlayer("Kareem", "Abdul-Jabbar", [Player.POSITION_CENTER], 97, "Milwaukee Bucks '70-'71");
    if (this.useAllPlayerVersions)
        this.addPlayer("Oscar", "Robertson", [Player.POSITION_POINT_GUARD], 92, "Milwaukee Bucks '70-'71");
    if (this.useAllPlayerVersions)
        this.addPlayer("Bob", "Dandridge", [Player.POSITION_SMALL_FORWARD, Player.POSITION_SHOOTING_GUARD], 85, "Milwaukee Bucks '70-'71");
    
    if (this.useAllPlayerVersions)
        this.addPlayer("Jerry", "West", [Player.POSITION_POINT_GUARD], 93, "Los Angeles Lakers '64-'65");
    if (this.useAllPlayerVersions)
        this.addPlayer("Elgin", "Baylor", [Player.POSITION_SMALL_FORWARD, Player.POSITION_POWER_FORWARD], 91, "Los Angeles Lakers '64-'65");
    if (this.useAllPlayerVersions)
        this.addPlayer("Rudy", "Larusso", [Player.POSITION_POWER_FORWARD], 82, "Los Angeles Lakers '64-'65");
}

PlayerCollection.prototype.populateCurrent = function() {
    if (this.useAllPlayerVersions)
        this.addPlayer("Stephen", "Curry", [Player.POSITION_POINT_GUARD], 95, "Golden State Warriors");

    this.addPlayer("Deandre", "Ayton", [Player.POSITION_CENTER], 83, "Portland Trail Blazers");
    this.addPlayer("Jerami", "Grant", [Player.POSITION_POWER_FORWARD, Player.POSITION_SMALL_FORWARD], 82, "Portland Trail Blazers");

    this.addPlayer("Anthony", "Edwards", [Player.POSITION_SHOOTING_GUARD], 93, "Minnesota Timberwolves");

    this.addPlayer("Shai", "Gilgeous-Alexander", [Player.POSITION_POINT_GUARD, Player.POSITION_SHOOTING_GUARD], 96, "Oklahoma City Thunder");
    this.addPlayer("Chet", "Holmgren", [Player.POSITION_CENTER], 87, "Oklahoma City Thunder");
    this.addPlayer("Jalen", "Williams", [Player.POSITION_SMALL_FORWARD], 86, "Oklahoma City Thunder");

    this.addPlayer("Devin", "Booker", [Player.POSITION_SHOOTING_GUARD], 93, "Phoenix Suns");
    if (this.useAllPlayerVersions)
        this.addPlayer("Bradley", "Beal", [Player.POSITION_SHOOTING_GUARD], 85, "Phoenix Suns");

    this.addPlayer("Victor", "Wembanyama", [Player.POSITION_CENTER], 91, "San Antonio Spurs");

    this.addPlayer("Jalen", "Green", [Player.POSITION_SHOOTING_GUARD], 84, "Houston Rockets");

    this.addPlayer("Cade", "Cunningham", [Player.POSITION_POINT_GUARD, Player.POSITION_SHOOTING_GUARD], 86, "Detroit Pistons");

    this.addPlayer("Dejounte", "Murray", [Player.POSITION_SHOOTING_GUARD, Player.POSITION_POINT_GUARD], 86, "New Orleans Pelicans");

    this.addPlayer("Tyrese", "Haliburton", [Player.POSITION_POINT_GUARD], 90, "Indiana Pacers");
    this.addPlayer("Pascal", "Siakam", [Player.POSITION_POWER_FORWARD], 88, "Indiana Pacers");
    this.addPlayer("Myles", "Turner", [Player.POSITION_CENTER], 84, "Indiana Pacers");

    this.addPlayer("Michael", "Porter Jr.", [Player.POSITION_SMALL_FORWARD], 83, "Denver Nuggets");

    this.addPlayer("Luka", "Doncic", [Player.POSITION_POINT_GUARD, Player.POSITION_SHOOTING_GUARD], 97, "Dallas Mavericks");
    if (this.useAllPlayerVersions)
        this.addPlayer("Kyrie", "Irving", [Player.POSITION_POINT_GUARD], 92, "Dallas Mavericks");

    this.addPlayer("Paolo", "Banchero", [Player.POSITION_POWER_FORWARD], 89, "Orlando Magic");

    this.addPlayer("Austin", "Reaves", [Player.POSITION_SHOOTING_GUARD, Player.POSITION_POINT_GUARD], 81, "Los Angeles Lakers");

    this.addPlayer("Jalen", "Brunson", [Player.POSITION_POINT_GUARD, Player.POSITION_SHOOTING_GUARD], 93, "New York Knicks");
    this.addPlayer("Mikal", "Bridges", [Player.POSITION_SMALL_FORWARD, Player.POSITION_SHOOTING_GUARD], 84, "New York Knicks");
    this.addPlayer("OG", "Anunoby", [Player.POSITION_SMALL_FORWARD, Player.POSITION_POWER_FORWARD], 84, "New York Knicks");
    this.addPlayer("Josh", "Hart", [Player.POSITION_SMALL_FORWARD], 82, "New York Knicks");

    this.addPlayer("De'Aaron", "Fox", [Player.POSITION_POINT_GUARD], 88, "Sacramento Kings");
    this.addPlayer("Malik", "Monk", [Player.POSITION_SHOOTING_GUARD], 80, "Sacramento Kings");

    this.addPlayer("Lauri", "Markkanen", [Player.POSITION_POWER_FORWARD], 86, "Utah Jazz");

    this.addPlayer("LaMelo", "Ball", [Player.POSITION_POINT_GUARD, Player.POSITION_SHOOTING_GUARD], 87, "Charlotte Hornets");

    this.addPlayer("Bam", "Adebayo", [Player.POSITION_CENTER, Player.POSITION_POWER_FORWARD], 88, "Miami Heat");

    if (this.useAllPlayerVersions)
        this.addPlayer("Trae", "Young", [Player.POSITION_POINT_GUARD], 89, "Atlanta Hawks");
    this.addPlayer("Clint", "Capela", [Player.POSITION_CENTER], 80, "Atlanta Hawks");

    this.addPlayer("Ja", "Morant", [Player.POSITION_POINT_GUARD], 90, "Memphis Grizzlies");
    this.addPlayer("Jaren", "Jackson Jr.", [Player.POSITION_POWER_FORWARD, Player.POSITION_CENTER], 87, "Memphis Grizzlies");

    this.addPlayer("Jayson", "Tatum", [Player.POSITION_SMALL_FORWARD, Player.POSITION_POWER_FORWARD], 95, "Boston Celtics");
    this.addPlayer("Jaylen", "Brown", [Player.POSITION_SHOOTING_GUARD, Player.POSITION_SMALL_FORWARD], 92, "Boston Celtics");
    this.addPlayer("Jrue", "Holiday", [Player.POSITION_POINT_GUARD, Player.POSITION_SHOOTING_GUARD], 87, "Boston Celtics");
    this.addPlayer("Kristaps", "Porzingis", [Player.POSITION_POWER_FORWARD, Player.POSITION_CENTER], 87, "Boston Celtics");
    
    this.addPlayer("Donovan", "Mitchell", [Player.POSITION_SHOOTING_GUARD, Player.POSITION_POINT_GUARD], 92, "Cleveland Cavaliers");
    this.addPlayer("Evan", "Mobley", [Player.POSITION_POWER_FORWARD, Player.POSITION_CENTER], 86, "Cleveland Cavaliers");
    this.addPlayer("Jarrett", "Allen", [Player.POSITION_CENTER], 84, "Cleveland Cavaliers");
    this.addPlayer("Darius", "Garland", [Player.POSITION_POINT_GUARD], 82, "Cleveland Cavaliers");

    if (this.useAllPlayerVersions)
        this.addPlayer("Damian", "Lillard", [Player.POSITION_POINT_GUARD], 89, "Milwaukee Bucks");
    if (this.useAllPlayerVersions)
        this.addPlayer("Khris", "Middleton", [Player.POSITION_SMALL_FORWARD, Player.POSITION_SHOOTING_GUARD], 85, "Milwaukee Bucks");
    
    this.addPlayer("Joel", "Embiid", [Player.POSITION_CENTER], 96, "Philadelphia 76ers");
}

PlayerCollection.prototype.populateStephEra = function() {
    const add = (firstName, lastName, positions, overall) => {
        this.addPlayer(firstName, lastName, positions, overall, "Free Agency");
    }
    const extend = (firstName, lastName, positions, overall) => {
        if (this.useAllPlayerVersions)
            add(firstName, lastName, positions, overall, "Free Agency");
    }

    add("John", "Wall", [Player.POSITION_POINT_GUARD], 92);
    extend("Bradley", "Beal", [Player.POSITION_SHOOTING_GUARD], 87);

    extend("Stephen", "Curry", [Player.POSITION_POINT_GUARD], 97);
    extend("Klay", "Thompson", [Player.POSITION_SHOOTING_GUARD, Player.POSITION_SMALL_FORWARD], 90);
    add("Draymond", "Green", [Player.POSITION_POWER_FORWARD], 90);
    extend("Andre", "Iguodala", [Player.POSITION_SMALL_FORWARD, Player.POSITION_POWER_FORWARD], 82);

    extend("Damian", "Lillard", [Player.POSITION_POINT_GUARD], 91);

    extend("Karl-Anthony", "Towns", [Player.POSITION_CENTER], 87);
    add("Andrew", "Wiggins", [Player.POSITION_SMALL_FORWARD, Player.POSITION_SHOOTING_GUARD], 84);

    add("Russell", "Westbrook", [Player.POSITION_POINT_GUARD], 96);
    add("Steven", "Adams", [Player.POSITION_CENTER], 82);

    add("Eric", "Bledsoe", [Player.POSITION_POINT_GUARD], 85);
    extend("Devin", "Booker", [Player.POSITION_SHOOTING_GUARD], 83);

    add("DeMar", "DeRozan", [Player.POSITION_SHOOTING_GUARD, Player.POSITION_SMALL_FORWARD], 91);

    extend("Paul", "George", [Player.POSITION_SMALL_FORWARD], 90);

    extend("Nikola", "Jokic", [Player.POSITION_CENTER], 86);

    extend("Serge", "Ibaka", [Player.POSITION_POWER_FORWARD, Player.POSITION_CENTER], 82);

    extend("Carmelo", "Anthony", [Player.POSITION_SMALL_FORWARD, Player.POSITION_POWER_FORWARD], 86);

    extend("Hassan", "Whiteside", [Player.POSITION_CENTER], 85);

    extend("Marc", "Gasol", [Player.POSITION_CENTER], 86);

    extend("Blake", "Griffin", [Player.POSITION_POWER_FORWARD], 86);
    extend("Deandre", "Jordan", [Player.POSITION_CENTER], 84);

    extend("Giannis", "Antetokounmpo", [Player.POSITION_SMALL_FORWARD, Player.POSITION_POWER_FORWARD], 89);

    extend("Joel", "Embiid", [Player.POSITION_CENTER], 86);
}

PlayerCollection.prototype.populateLeBronEra = function() {
    const add = (firstName, lastName, positions, overall) => {
        this.addPlayer(firstName, lastName, positions, overall, "Free Agency");
    }
    const extend = (firstName, lastName, positions, overall) => {
        if (this.useAllPlayerVersions)
            add(firstName, lastName, positions, overall, "Free Agency");
    }

    extend("Stephen", "Curry", [Player.POSITION_POINT_GUARD], 84);
    extend("Monta", "Ellis", [Player.POSITION_SHOOTING_GUARD, Player.POSITION_POINT_GUARD], 84);

    extend("Kevin", "Durant", [Player.POSITION_SMALL_FORWARD, Player.POSITION_POWER_FORWARD], 94);
    extend("Russell", "Westbrook", [Player.POSITION_POINT_GUARD], 93);

    extend("Tim", "Duncan", [Player.POSITION_POWER_FORWARD, Player.POSITION_CENTER], 90);

    extend("Danny", "Granger", [Player.POSITION_SMALL_FORWARD, Player.POSITION_POWER_FORWARD], 83);

    extend("Dirk", "Nowitzki", [Player.POSITION_POWER_FORWARD, Player.POSITION_CENTER], 94);

    extend("Pau", "Gasol", [Player.POSITION_CENTER], 89);

    extend("Amar'e", "Stoudemire", [Player.POSITION_POWER_FORWARD, Player.POSITION_CENTER], 90);

    extend("LeBron", "James", [Player.POSITION_SMALL_FORWARD, Player.POSITION_POWER_FORWARD], 97);
    extend("Dwyane", "Wade", [Player.POSITION_SHOOTING_GUARD], 93);

    extend("Paul", "Pierce", [Player.POSITION_SMALL_FORWARD, Player.POSITION_POWER_FORWARD], 89);
    extend("Rajon", "Rondo", [Player.POSITION_POINT_GUARD], 88);

    add("Brandon", "Jennings", [Player.POSITION_POINT_GUARD], 84);
    add("Andrew", "Bogut", [Player.POSITION_CENTER], 83);
}

PlayerCollection.prototype.populateKobeEra = function() {
    const add = (firstName, lastName, positions, overall) => {
        this.addPlayer(firstName, lastName, positions, overall, "Free Agency");
    }
    const extend = (firstName, lastName, positions, overall) => {
        if (this.useAllPlayerVersions)
            add(firstName, lastName, positions, overall, "Free Agency");
    }

    extend("Rashard", "Lewis", [Player.POSITION_POWER_FORWARD, Player.POSITION_SMALL_FORWARD], 83);

    extend("Tim", "Duncan", [Player.POSITION_POWER_FORWARD, Player.POSITION_CENTER], 97);
    extend("Tony", "Parker", [Player.POSITION_POINT_GUARD], 83);

    extend("Yao", "Ming", [Player.POSITION_CENTER], 86);
    extend("Steve", "Francis", [Player.POSITION_POINT_GUARD], 85);

    extend("Vince", "Carter", [Player.POSITION_SMALL_FORWARD, Player.POSITION_SHOOTING_GUARD], 89);

    extend("Chauncey", "Billups", [Player.POSITION_POINT_GUARD, Player.POSITION_SHOOTING_GUARD], 85);
    extend("Richard", "Hamilton", [Player.POSITION_SHOOTING_GUARD, Player.POSITION_SMALL_FORWARD], 84);

    extend("Jermaine", "O'Neal", [Player.POSITION_CENTER, Player.POSITION_POWER_FORWARD], 87);
    extend("Ron", "Artest", [Player.POSITION_SMALL_FORWARD], 84);

    extend("Michael", "Finley", [Player.POSITION_SMALL_FORWARD, Player.POSITION_SHOOTING_GUARD], 88);

    extend("Kobe", "Bryant", [Player.POSITION_SHOOTING_GUARD, Player.POSITION_SMALL_FORWARD], 97);
    extend("Shaquille", "O'Neal", [Player.POSITION_CENTER], 97);

    extend("Allan", "Houston", [Player.POSITION_SHOOTING_GUARD, Player.POSITION_SMALL_FORWARD], 84);

    extend("Andrei", "Kirilenko", [Player.POSITION_POWER_FORWARD, Player.POSITION_SMALL_FORWARD], 82);

    extend("Baron", "Davis", [Player.POSITION_POINT_GUARD], 84);

    extend("Pau", "Gasol", [Player.POSITION_CENTER], 83);

    extend("Elton", "Brand", [Player.POSITION_POWER_FORWARD], 85);

    extend("Paul", "Pierce", [Player.POSITION_SMALL_FORWARD, Player.POSITION_POWER_FORWARD], 87);

    extend("Zydrunas", "Ilgauskas", [Player.POSITION_CENTER], 85);

    extend("Ray", "Allen", [Player.POSITION_SHOOTING_GUARD, Player.POSITION_SMALL_FORWARD], 86);
    extend("Sam", "Cassell", [Player.POSITION_POINT_GUARD], 85);

    extend("Allen", "Iverson", [Player.POSITION_POINT_GUARD, Player.POSITION_SHOOTING_GUARD], 94);
}

PlayerCollection.prototype.populateJordanEra = function() {
    const add = (firstName, lastName, positions, overall) => {
        this.addPlayer(firstName, lastName, positions, overall, "Free Agency");
    }
    const extend = (firstName, lastName, positions, overall) => {
        if (this.useAllPlayerVersions)
            add(firstName, lastName, positions, overall, "Free Agency");
    }

    extend("Shawn", "Kemp", [Player.POSITION_POWER_FORWARD, Player.POSITION_CENTER], 84);

    extend("David", "Robinson", [Player.POSITION_CENTER], 94);

    extend("Hakeem", "Olajuwon", [Player.POSITION_CENTER], 90);

    extend("Isiah", "Thomas", [Player.POSITION_POINT_GUARD], 87);
    extend("Joe", "Dumars", [Player.POSITION_SHOOTING_GUARD, Player.POSITION_POINT_GUARD], 87);

    extend("Drazen", "Petrovic", [Player.POSITION_SHOOTING_GUARD, Player.POSITION_SMALL_FORWARD], 84);

    extend("James", "Worthy", [Player.POSITION_SMALL_FORWARD, Player.POSITION_POWER_FORWARD], 89);
    extend("Magic", "Johnson", [Player.POSITION_POINT_GUARD, Player.POSITION_SHOOTING_GUARD], 89);

    extend("Patrick", "Ewing", [Player.POSITION_CENTER], 93);

    extend("Mitch", "Richmond", [Player.POSITION_SHOOTING_GUARD, Player.POSITION_SMALL_FORWARD], 84);

    extend("Karl", "Malone", [Player.POSITION_POWER_FORWARD], 94);
    extend("John", "Stockton", [Player.POSITION_POINT_GUARD], 92);

    extend("Glen", "Rice", [Player.POSITION_SMALL_FORWARD], 84);

    extend("Dominique", "Wilkins", [Player.POSITION_SMALL_FORWARD, Player.POSITION_SHOOTING_GUARD], 89);

    extend("Danny", "Manning", [Player.POSITION_POWER_FORWARD], 85);

    extend("Charles", "Barkley", [Player.POSITION_POWER_FORWARD], 93);
}

PlayerCollection.prototype.populateMagicEra = function() {
    const add = (firstName, lastName, positions, overall) => {
        this.addPlayer(firstName, lastName, positions, overall, "Free Agency");
    }
    const extend = (firstName, lastName, positions, overall) => {
        if (this.useAllPlayerVersions)
            add(firstName, lastName, positions, overall, "Free Agency");
    }

    extend("George", "Gervin", [Player.POSITION_SHOOTING_GUARD, Player.POSITION_SMALL_FORWARD], 91);

    extend("Ralph", "Sampson", [Player.POSITION_CENTER], 86);

    extend("Magic", "Johnson", [Player.POSITION_POINT_GUARD, Player.POSITION_SHOOTING_GUARD], 95);
    extend("Kareem", "Abdul-Jabbar", [Player.POSITION_CENTER], 95);

    extend("Dominique", "Wilkins", [Player.POSITION_SMALL_FORWARD, Player.POSITION_SHOOTING_GUARD], 85);

    extend("Larry", "Bird", [Player.POSITION_SMALL_FORWARD, Player.POSITION_POWER_FORWARD], 97);
    extend("Robert", "Parish", [Player.POSITION_CENTER], 90);
    extend("Kevin", "McHale", [Player.POSITION_POWER_FORWARD], 89);

    extend("Moses", "Malone", [Player.POSITION_CENTER], 95);
    extend("Julius", "Erving", [Player.POSITION_SMALL_FORWARD, Player.POSITION_SHOOTING_GUARD], 90);
}

PlayerCollection.prototype.populateExtended = function() {
    const add = (firstName, lastName, positions, overall) => {
        this.addPlayer(firstName, lastName, positions, overall, "Free Agency");
    }
    const extend = (firstName, lastName, positions, overall) => {
        if (this.useAllPlayerVersions)
            add(firstName, lastName, positions, overall, "Free Agency");
    }

    
    extend("Devin", "Booker", [Player.POSITION_SHOOTING_GUARD], 95);
    extend("Ja", "Morant", [Player.POSITION_POINT_GUARD], 94);
    add("Klay", "Thompson", [Player.POSITION_SHOOTING_GUARD, Player.POSITION_SMALL_FORWARD], 92);
    
    add("Zion", "Williamson", [Player.POSITION_POWER_FORWARD], 90);
    add("Trae", "Young", [Player.POSITION_POINT_GUARD], 90);
    extend("Jalen", "Williams", [Player.POSITION_SMALL_FORWARD], 89);
    add("Tayshaun", "Prince", [Player.POSITION_SMALL_FORWARD, Player.POSITION_POWER_FORWARD], 85);

    // Legends All Prime
    add("Bill", "Russell", [Player.POSITION_CENTER, Player.POSITION_POWER_FORWARD], 99);
    extend("Tracy", "McGrady", [Player.POSITION_SHOOTING_GUARD], 97);
    extend("Clyde", "Drexler", [Player.POSITION_SHOOTING_GUARD, Player.POSITION_SMALL_FORWARD], 97);
    add("Charles", "Barkley", [Player.POSITION_POWER_FORWARD], 97);
    extend("Derrick", "Rose", [Player.POSITION_POINT_GUARD], 96);
    extend("Carmelo", "Anthony", [Player.POSITION_SMALL_FORWARD, Player.POSITION_POWER_FORWARD], 96);
    extend("Tony", "Parker", [Player.POSITION_POINT_GUARD], 96);
    extend("George", "Gervin", [Player.POSITION_SHOOTING_GUARD, Player.POSITION_SMALL_FORWARD], 96);
    extend("Pau", "Gasol", [Player.POSITION_CENTER], 96);
    add("Reggie", "Miller", [Player.POSITION_SHOOTING_GUARD, Player.POSITION_SMALL_FORWARD], 95);
    extend("Dennis", "Rodman", [Player.POSITION_POWER_FORWARD], 95);
    extend("Chris", "Webber", [Player.POSITION_POWER_FORWARD], 94);
    extend("Yao", "Ming", [Player.POSITION_CENTER], 94);
    extend("Manu", "Ginobili", [Player.POSITION_SHOOTING_GUARD, Player.POSITION_SMALL_FORWARD], 94);
    extend("Brandon", "Roy", [Player.POSITION_SHOOTING_GUARD, Player.POSITION_SMALL_FORWARD], 93);
    add("Blake", "Griffin", [Player.POSITION_POWER_FORWARD], 93);
    extend("Shawn", "Kemp", [Player.POSITION_POWER_FORWARD, Player.POSITION_CENTER], 92);
    add("Chris", "Bosh", [Player.POSITION_CENTER, Player.POSITION_POWER_FORWARD], 91);
    extend("Joe", "Johnson", [Player.POSITION_SMALL_FORWARD, Player.POSITION_SHOOTING_GUARD], 90);
    extend("Andrei", "Kirilenko", [Player.POSITION_POWER_FORWARD, Player.POSITION_SMALL_FORWARD], 90);
    add("Gordon", "Hayward", [Player.POSITION_SMALL_FORWARD], 90);
    add("Deron", "Williams", [Player.POSITION_POINT_GUARD], 90);
    extend("Bernard", "King", [Player.POSITION_SMALL_FORWARD], 90);
    add("Bradley", "Beal", [Player.POSITION_SHOOTING_GUARD], 90);
    add("Andrew", "Bynum", [Player.POSITION_CENTER], 90);
    add("Rasheed", "Wallace", [Player.POSITION_POWER_FORWARD, Player.POSITION_CENTER], 88);
    add("Andre", "Iguodala", [Player.POSITION_SMALL_FORWARD, Player.POSITION_POWER_FORWARD], 88);
    add("Serge", "Ibaka", [Player.POSITION_POWER_FORWARD, Player.POSITION_CENTER], 87);

    /*
    add("Al", "Horford", [Player.POSITION_CENTER, Player.POSITION_POWER_FORWARD], 87);
    extend("Andre", "Iguodala", [Player.POSITION_SMALL_FORWARD, Player.POSITION_POWER_FORWARD], 94);
    extend("Andrei", "Kirilenko", [Player.POSITION_POWER_FORWARD, Player.POSITION_SMALL_FORWARD], 93);
    extend("Andrew", "Wiggins", [Player.POSITION_SMALL_FORWARD], 94);
    extend("Anthony", "Davis", [Player.POSITION_POWER_FORWARD, Player.POSITION_CENTER], 83);
    extend("Ben", "Simmons", [Player.POSITION_POINT_GUARD, Player.POSITION_POWER_FORWARD], 88);
    extend("Ben", "Simmons", [Player.POSITION_POINT_GUARD, Player.POSITION_POWER_FORWARD], 94);
    add("Bernard", "King", [Player.POSITION_SMALL_FORWARD], 93);
    extend("Bol", "Bol", [Player.POSITION_CENTER], 90);
    extend("Bradley", "Beal", [Player.POSITION_SHOOTING_GUARD], 83);
    extend("Bradley", "Beal", [Player.POSITION_SHOOTING_GUARD], 92);
    extend("Brandon", "Jennings", [Player.POSITION_POINT_GUARD], 91);
    extend("Carmelo", "Anthony", [Player.POSITION_SMALL_FORWARD, Player.POSITION_POWER_FORWARD], 82);
    extend("Charles", "Barkley", [Player.POSITION_POWER_FORWARD, Player.POSITION_SMALL_FORWARD], 95);
    extend("Bronny", "James", [Player.POSITION_POINT_GUARD, Player.POSITION_SHOOTING_GUARD], 92);
    extend("Chris", "Bosh", [Player.POSITION_CENTER, Player.POSITION_POWER_FORWARD], 94);
    extend("Dale", "Ellis", [Player.POSITION_SHOOTING_GUARD, Player.POSITION_SMALL_FORWARD], 92);
    extend("Deandre", "Jordan", [Player.POSITION_CENTER], 93);
    extend("Deron", "Williams", [Player.POSITION_POINT_GUARD], 93);
    extend("Derrick", "Rose", [Player.POSITION_POINT_GUARD], 82);
    extend("Derrick", "Rose", [Player.POSITION_POINT_GUARD], 92);
    extend("Domantas", "Sabonis", [Player.POSITION_POWER_FORWARD, Player.POSITION_CENTER], 92);
    extend("Draymond", "Green", [Player.POSITION_POWER_FORWARD, Player.POSITION_SMALL_FORWARD], 94);
    extend("Dwyane", "Wade", [Player.POSITION_SHOOTING_GUARD], 82);
    extend("George", "Gervin", [Player.POSITION_SHOOTING_GUARD, Player.POSITION_SMALL_FORWARD], 89);
    extend("Gerald", "Green", [Player.POSITION_SHOOTING_GUARD, Player.POSITION_SMALL_FORWARD], 91);
    add("Gilbert", "Arenas", [Player.POSITION_POINT_GUARD], 83);
    extend("Greg", "Oden", [Player.POSITION_CENTER], 95);
    extend("Hakeem", "Olajuwon", [Player.POSITION_CENTER], 84);
    extend("Hakeem", "Olajuwon", [Player.POSITION_CENTER], 95);
    extend("Hasheem", "Thabeet", [Player.POSITION_CENTER], 90);
    extend("Isaiah", "Thomas", [Player.POSITION_POINT_GUARD], 84);
    add("J.R.", "Smith", [Player.POSITION_SHOOTING_GUARD, Player.POSITION_SMALL_FORWARD], 85);
    extend("J.R.", "Smith", [Player.POSITION_SHOOTING_GUARD, Player.POSITION_SMALL_FORWARD], 92);
    extend("Jalen", "Green", [Player.POSITION_SHOOTING_GUARD], 94);
    add("Jamal", "Crawford", [Player.POSITION_SHOOTING_GUARD, Player.POSITION_SMALL_FORWARD], 87);
    extend("JaVale", "McGee", [Player.POSITION_CENTER], 92);
    extend("Jeff", "Green", [Player.POSITION_SMALL_FORWARD, Player.POSITION_POWER_FORWARD], 93);
    add("Jeff", "Teague", [Player.POSITION_POINT_GUARD], 87);
    extend("Jerami", "Grant", [Player.POSITION_POWER_FORWARD, Player.POSITION_SMALL_FORWARD], 93);
    extend("Joakim", "Noah", [Player.POSITION_CENTER], 80);
    extend("Joe", "Johnson", [Player.POSITION_SMALL_FORWARD, Player.POSITION_SHOOTING_GUARD], 85);
    extend("Joe", "Johnson", [Player.POSITION_SMALL_FORWARD, Player.POSITION_SHOOTING_GUARD], 94);
    extend("John", "Wall", [Player.POSITION_POINT_GUARD], 87);
    extend("Jordan", "Poole", [Player.POSITION_SHOOTING_GUARD], 91);
    extend("Josh", "Smith", [Player.POSITION_POWER_FORWARD, Player.POSITION_SMALL_FORWARD], 83);
    extend("Josh", "Smith", [Player.POSITION_POWER_FORWARD, Player.POSITION_SMALL_FORWARD], 90);
    extend("Kareem", "Abdul-Jabbar", [Player.POSITION_CENTER], 85);
    extend("Kawhi", "Leonard", [Player.POSITION_SMALL_FORWARD, Player.POSITION_POWER_FORWARD], 88);
    extend("Kevin", "Durant", [Player.POSITION_SMALL_FORWARD, Player.POSITION_POWER_FORWARD], 83);
    extend("Kevin", "Garnett", [Player.POSITION_POWER_FORWARD, Player.POSITION_CENTER], 82);
    extend("Klay", "Thompson", [Player.POSITION_SHOOTING_GUARD, Player.POSITION_SMALL_FORWARD], 95);
    extend("Kristaps", "Porzingis", [Player.POSITION_POWER_FORWARD, Player.POSITION_CENTER], 90);
    extend("Kyle", "Korver", [Player.POSITION_SHOOTING_GUARD, Player.POSITION_SMALL_FORWARD], 83);
    extend("Kyle", "Korver", [Player.POSITION_SHOOTING_GUARD, Player.POSITION_SMALL_FORWARD], 90);
    extend("LaMelo", "Ball", [Player.POSITION_POINT_GUARD, Player.POSITION_SHOOTING_GUARD], 92);
    extend("Lance", "Stephenson", [Player.POSITION_SHOOTING_GUARD, Player.POSITION_SMALL_FORWARD], 93);
    extend("Larry", "Bird", [Player.POSITION_SMALL_FORWARD, Player.POSITION_POWER_FORWARD], 83);
    extend("LeBron", "James", [Player.POSITION_SMALL_FORWARD], 84);
    extend("Lonzo", "Ball", [Player.POSITION_POINT_GUARD, Player.POSITION_SHOOTING_GUARD], 92);
    add("Louis", "Williams", [Player.POSITION_POINT_GUARD, Player.POSITION_SHOOTING_GUARD], 82);
    extend("Michael", "Jordan", [Player.POSITION_SHOOTING_GUARD, Player.POSITION_SMALL_FORWARD], 85);
    extend("Michael", "Porter Jr.", [Player.POSITION_SMALL_FORWARD], 92);
    add("Monta", "Ellis", [Player.POSITION_SHOOTING_GUARD, Player.POSITION_POINT_GUARD], 90);
    extend("Monta", "Ellis", [Player.POSITION_SHOOTING_GUARD, Player.POSITION_POINT_GUARD], 93);
    add("Montrezl", "Harrell", [Player.POSITION_POWER_FORWARD], 82);
    extend("OG", "Anunoby", [Player.POSITION_SMALL_FORWARD, Player.POSITION_POWER_FORWARD], 90);
    extend("Oscar", "Robertson", [Player.POSITION_POINT_GUARD], 84);
    extend("Paul", "George", [Player.POSITION_SMALL_FORWARD], 95);
    extend("Paul", "Millsap", [Player.POSITION_POWER_FORWARD, Player.POSITION_SMALL_FORWARD], 85);
    add("Reggie", "Jackson", [Player.POSITION_POINT_GUARD], 80);
    extend("Reggie", "Miller", [Player.POSITION_SHOOTING_GUARD, Player.POSITION_SMALL_FORWARD], 89);
    add("Ron", "Artest", [Player.POSITION_SMALL_FORWARD], 90);
    extend("Rudy", "Gay", [Player.POSITION_SMALL_FORWARD], 92);
    extend("Rudy", "Gobert", [Player.POSITION_CENTER], 93);
    extend("Scottie", "Barnes", [Player.POSITION_POWER_FORWARD, Player.POSITION_SMALL_FORWARD], 91);
    extend("Serge", "Ibaka", [Player.POSITION_POWER_FORWARD, Player.POSITION_CENTER], 93);
    extend("Shaquille", "O'Neal", [Player.POSITION_CENTER], 84);
    extend("Shawn", "Kemp", [Player.POSITION_POWER_FORWARD, Player.POSITION_CENTER], 85);
    extend("Stephen", "Curry", [Player.POSITION_POINT_GUARD], 83);
    extend("Steve", "Novak", [Player.POSITION_POWER_FORWARD, Player.POSITION_SMALL_FORWARD], 90);
    extend("Tyler", "Herro", [Player.POSITION_SHOOTING_GUARD], 91);
    extend("Tyson", "Chandler", [Player.POSITION_CENTER], 87);
    extend("Tyson", "Chandler", [Player.POSITION_CENTER], 93);
    extend("Victor", "Oladipo", [Player.POSITION_SHOOTING_GUARD], 92);
    extend("Zion", "Williamson", [Player.POSITION_POWER_FORWARD], 95);
    */
}

PlayerCollection.prototype.reset = function() {
    this.clear();
    this.populate();
}

PlayerCollection.prototype.getRandomPlayer = function(positions, overalls, excludedPlayers) {
    const possiblePlayers = [];
    const possiblePlayersByUsageCount = new Map();

    for (let position of positions) {
        let positionPlayers = [];
        switch (position) {
            case Player.POSITION_POINT_GUARD:
                positionPlayers = this.pointGuards;
                break;
            case Player.POSITION_SHOOTING_GUARD:
                positionPlayers = this.shootingGuards;
                break;
            case Player.POSITION_SMALL_FORWARD:
                positionPlayers = this.smallForwards;
                break;
            case Player.POSITION_POWER_FORWARD:
                positionPlayers = this.powerForwards;
                break;
            case Player.POSITION_CENTER:
                positionPlayers = this.centers;
                break;
        }

        for (let player of positionPlayers) {
            if (overalls.has(player.overall) && !player.isIn(excludedPlayers) && !player.isIn(possiblePlayers, true)) {
                const currentPlayersInUsageCount = possiblePlayersByUsageCount.has(player.usageCount)
                    ? possiblePlayersByUsageCount.get(player.usageCount)
                    : [];
                currentPlayersInUsageCount.push(player);
                possiblePlayersByUsageCount.set(player.usageCount, currentPlayersInUsageCount);
                possiblePlayers.push(player);
            }
        }
    }

    const usageCountGroups = Array.from(possiblePlayersByUsageCount.keys());
    usageCountGroups.sort(function(a, b) {
        return a - b;
    })
    const selectedUsageGroup = usageCountGroups[Math.floor(usageCountGroups.length * Math.pow(Math.random(), this.randomWeightValue))];
    return choice(possiblePlayersByUsageCount.get(selectedUsageGroup));
}

PlayerCollection.prototype.getRandomByTiers = function(overallGroups, positionGroups) {
    const selectedPlayers = [];
    const exclusionSet = new Set();
    for (let overallGroup of overallGroups) {
        const playersInOverall = [];
        for (let positionGroup of positionGroups) {
            const randomPlayer = this.getRandomPlayer(positionGroup, overallGroup, exclusionSet);
            const newPlayer = {
                id: randomPlayer.id,
                firstName: randomPlayer.firstName, 
                lastName: randomPlayer.lastName,
                positions: randomPlayer.positions, 
                team: randomPlayer.team,
                overall: randomPlayer.overall,
                usageCount: randomPlayer.usageCount,
                selected: false,
                disabled: false
            };
            playersInOverall.push(newPlayer);
            exclusionSet.add(newPlayer);
        }
        selectedPlayers.push(playersInOverall);
    }
    return selectedPlayers;
}

export default PlayerCollection;
