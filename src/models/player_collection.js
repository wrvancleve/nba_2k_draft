import Player from './player'
import {choice} from '../utils/random'

function PlayerCollection() {
    console.log("Creating player collection");
    this.reset();
}

PlayerCollection.prototype.clear = function() {
    this.pointGuards = [];
    this.shootingGuards = [];
    this.smallForwards = [];
    this.powerForwards = [];
    this.centers = [];
}

PlayerCollection.prototype.add = function(firstName, lastName, positions, overall, team) {
    const newPlayer = new Player(firstName, lastName, positions, overall, team);
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

PlayerCollection.prototype.remove = function(playerToRemove) {
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
        let actualNumberOfPlayers = 0;
        switch (position) {
            case Player.POSITION_POINT_GUARD:
                actualNumberOfPlayers = this.pointGuards.length;
                break;
            case Player.POSITION_SHOOTING_GUARD:
                actualNumberOfPlayers = this.shootingGuards.length;
                break;
            case Player.POSITION_SMALL_FORWARD:
                actualNumberOfPlayers = this.smallForwards.length;
                break;
            case Player.POSITION_POWER_FORWARD:
                actualNumberOfPlayers = this.powerForwards.length;
                break;
            case Player.POSITION_CENTER:
                actualNumberOfPlayers = this.centers.length;
                break;
        }
        console.log(`Position: ${position} Expected Number of Players: ${positionPlayers.length} Actual Number of Players: ${actualNumberOfPlayers}`)
    }
}

PlayerCollection.prototype.populate = function() {
    this.add("A.C.", "Green", [Player.POSITION_POWER_FORWARD], 82, "Los Angeles Lakers '86-'87");
    this.add("Aaron", "McKie", [Player.POSITION_POINT_GUARD, Player.POSITION_SHOOTING_GUARD], 80, "Philadelphia 76ers '00-'01");
    this.add("Adrian", "Dantley", [Player.POSITION_SMALL_FORWARD], 90, "Free Agency");
    this.add("Adrian", "Dantley", [Player.POSITION_SMALL_FORWARD], 92, "Utah Jazz All-Time");
    this.add("Al", "Horford", [Player.POSITION_CENTER, Player.POSITION_POWER_FORWARD], 85, "Atlanta Hawks All-Time");
    this.add("Alex", "English", [Player.POSITION_SMALL_FORWARD, Player.POSITION_POWER_FORWARD], 89, "Free Agency");
    this.add("Alex", "English", [Player.POSITION_SMALL_FORWARD, Player.POSITION_POWER_FORWARD], 93, "Denver Nuggets All-Time");
    this.add("Allan", "Houston", [Player.POSITION_SHOOTING_GUARD, Player.POSITION_SMALL_FORWARD], 83, "New York Knicks '98-'99");
    this.add("Allan", "Houston", [Player.POSITION_SHOOTING_GUARD, Player.POSITION_SMALL_FORWARD], 89, "New York Knicks All-Time");
    this.add("Allen", "Iverson", [Player.POSITION_SHOOTING_GUARD, Player.POSITION_POINT_GUARD], 90, "Denver Nuggets All-Time");
    this.add("Allen", "Iverson", [Player.POSITION_SHOOTING_GUARD, Player.POSITION_POINT_GUARD], 94, "Philadelphia 76ers '00-'01");
    this.add("Allen", "Iverson", [Player.POSITION_SHOOTING_GUARD, Player.POSITION_POINT_GUARD], 97, "Philadelphia 76ers All-Time");
    this.add("Alonzo", "Mourning", [Player.POSITION_CENTER, Player.POSITION_POWER_FORWARD], 85, "Charlotte Hornets '92-'93");
    this.add("Alonzo", "Mourning", [Player.POSITION_CENTER, Player.POSITION_POWER_FORWARD], 89, "Charlotte Hornets All-Time");
    this.add("Alonzo", "Mourning", [Player.POSITION_CENTER, Player.POSITION_POWER_FORWARD], 94, "Miami Heat All-Time");
    this.add("Alvan", "Adams", [Player.POSITION_POWER_FORWARD], 85, "Phoenix Suns All-Time");
    this.add("Amar'e", "Stoudemire", [Player.POSITION_POWER_FORWARD, Player.POSITION_CENTER], 81, "Phoenix Suns '02-'03");
    this.add("Amar'e", "Stoudemire", [Player.POSITION_POWER_FORWARD, Player.POSITION_CENTER], 89, "New York Knicks All-Time");
    this.add("Amar'e", "Stoudemire", [Player.POSITION_POWER_FORWARD, Player.POSITION_CENTER], 92, "Phoenix Suns All-Time");
    this.add("Anderson", "Varejao", [Player.POSITION_CENTER], 80, "Free Agency");
    this.add("Anderson", "Varejao", [Player.POSITION_CENTER], 84, "Cleveland Cavaliers All-Time");
    this.add("Andre", "Drummond", [Player.POSITION_CENTER], 86, "Detroit Pistons All-Time");
    this.add("Andre", "Iguodala", [Player.POSITION_SMALL_FORWARD, Player.POSITION_POWER_FORWARD], 84, "Golden State Warriors All-Time");
    this.add("Andre", "Iguodala", [Player.POSITION_SMALL_FORWARD, Player.POSITION_POWER_FORWARD], 88, "Philadelphia 76ers All-Time");
    this.add("Andrea", "Bargnani", [Player.POSITION_CENTER, Player.POSITION_POWER_FORWARD], 84, "Toronto Raptors All-Time");
    this.add("Andrei", "Kirilenko", [Player.POSITION_POWER_FORWARD, Player.POSITION_SMALL_FORWARD], 89, "Utah Jazz All-Time");
    this.add("Andrew", "Bogut", [Player.POSITION_CENTER], 81, "Free Agency");
    this.add("Andrew", "Bynum", [Player.POSITION_CENTER], 82, "Free Agency");
    this.add("Andrew", "Toney", [Player.POSITION_SHOOTING_GUARD], 85, "Free Agency");
    this.add("Andrew", "Wiggins", [Player.POSITION_SMALL_FORWARD, Player.POSITION_SHOOTING_GUARD], 84, "Minnesota Timberwolves All-Time");
    this.add("Antawn", "Jamison", [Player.POSITION_POWER_FORWARD, Player.POSITION_SMALL_FORWARD], 87, "Washington Wizards All-Time");
    this.add("Antawn", "Jamison", [Player.POSITION_POWER_FORWARD], 84, "Free Agency");
    this.add("Anthony", "Davis", [Player.POSITION_POWER_FORWARD, Player.POSITION_CENTER], 83, "Free Agency");
    this.add("Anthony", "Davis", [Player.POSITION_POWER_FORWARD, Player.POSITION_CENTER], 94, "New Orleans Pelicans All-Time");
    this.add("Anthony", "Edwards", [Player.POSITION_SHOOTING_GUARD], 83, "Minnesota Timberwolves");
    this.add("Anthony", "Mason", [Player.POSITION_POWER_FORWARD, Player.POSITION_SMALL_FORWARD], 84, "Free Agency");
    this.add("Antonio", "Davis", [Player.POSITION_POWER_FORWARD], 85, "Toronto Raptors All-Time");
    this.add("Antonio", "Mcdyess", [Player.POSITION_POWER_FORWARD], 88, "Denver Nuggets All-Time");
    this.add("Artis", "Gilmore", [Player.POSITION_CENTER], 85, "San Antonio Spurs All-Time");
    this.add("Artis", "Gilmore", [Player.POSITION_CENTER], 93, "Chicago Bulls All-Time");
    this.add("Arvydas", "Sabonis", [Player.POSITION_CENTER], 86, "Portland Trail Blazers '99-'00");
    this.add("Arvydas", "Sabonis", [Player.POSITION_CENTER], 88, "Portland Trail Blazers All-Time");
    this.add("Austin", "Carr", [Player.POSITION_SHOOTING_GUARD], 86, "Cleveland Cavaliers All-Time");
    this.add("Avery", "Johnson", [Player.POSITION_POINT_GUARD], 83, "San Antonio Spurs All-Time");
    this.add("B.J.", "Armstrong", [Player.POSITION_POINT_GUARD], 87, "Chicago Bulls All-Time");
    this.add("Bailey", "Howell", [Player.POSITION_SMALL_FORWARD, Player.POSITION_POWER_FORWARD], 89, "Detroit Pistons All-Time");
    this.add("Bam", "Adebayo", [Player.POSITION_CENTER, Player.POSITION_POWER_FORWARD], 86, "Miami Heat All-Time");
    this.add("Baron", "Davis", [Player.POSITION_POINT_GUARD], 85, "Charlotte Hornets All-Time");
    this.add("Baron", "Davis", [Player.POSITION_POINT_GUARD], 92, "New Orleans Pelicans All-Time");
    this.add("Ben", "Simmons", [Player.POSITION_POINT_GUARD, Player.POSITION_POWER_FORWARD], 88, "Philadelphia 76ers All-Time");
    this.add("Ben", "Wallace", [Player.POSITION_POWER_FORWARD], 89, "Detroit Pistons All-Time");
    this.add("Bernard", "King", [Player.POSITION_SMALL_FORWARD], 87, "Washington Wizards All-Time");
    this.add("Bernard", "King", [Player.POSITION_SMALL_FORWARD], 89, "New York Knicks All-Time");
    this.add("Bernard", "King", [Player.POSITION_SMALL_FORWARD], 93, "Free Agency");
    this.add("Bill", "Bradley", [Player.POSITION_SMALL_FORWARD, Player.POSITION_SHOOTING_GUARD], 80, "New York Knicks '71-'72");
    this.add("Bill", "Bridges", [Player.POSITION_POWER_FORWARD], 80, "Free Agency");
    this.add("Bill", "Cartwright", [Player.POSITION_CENTER], 82, "Free Agency");
    this.add("Bill", "Laimbeer", [Player.POSITION_CENTER], 80, "Detroit Pistons '88-'89");
    this.add("Bill", "Laimbeer", [Player.POSITION_CENTER], 87, "Detroit Pistons All-Time");
    this.add("Bill", "Russell", [Player.POSITION_CENTER, Player.POSITION_POWER_FORWARD], 98, "Boston Celtics All-Time");
    this.add("Bill", "Sharman", [Player.POSITION_SHOOTING_GUARD, Player.POSITION_POINT_GUARD], 92, "Boston Celtics All-Time");
    this.add("Bill", "Walton", [Player.POSITION_CENTER], 82, "Boston Celtics '85-'86");
    this.add("Bill", "Walton", [Player.POSITION_CENTER], 95, "Portland Trail Blazers All-Time");
    this.add("Billy", "Cunningham", [Player.POSITION_SMALL_FORWARD, Player.POSITION_POWER_FORWARD], 93, "Philadelphia 76ers All-Time");
    this.add("Bingo", "Smith", [Player.POSITION_SHOOTING_GUARD, Player.POSITION_SMALL_FORWARD], 85, "Cleveland Cavaliers All-Time");
    this.add("Blake", "Griffin", [Player.POSITION_POWER_FORWARD], 90, "Los Angeles Clippers All-Time");
    this.add("Bob", "Cousy", [Player.POSITION_POINT_GUARD], 96, "Boston Celtics All-Time");
    this.add("Bob", "Dandridge", [Player.POSITION_SMALL_FORWARD, Player.POSITION_SHOOTING_GUARD], 84, "Milwaukee Bucks '70-'71");
    this.add("Bob", "Dandridge", [Player.POSITION_SMALL_FORWARD, Player.POSITION_SHOOTING_GUARD], 88, "Milwaukee Bucks All-Time");
    this.add("Bob", "Lanier", [Player.POSITION_CENTER], 93, "Detroit Pistons All-Time");
    this.add("Bob", "Love", [Player.POSITION_POWER_FORWARD, Player.POSITION_SMALL_FORWARD], 89, "Chicago Bulls All-Time");
    this.add("Bob", "McAdoo", [Player.POSITION_POWER_FORWARD], 94, "Los Angeles Clippers All-Time");
    this.add("Bob", "Netolicky", [Player.POSITION_POWER_FORWARD], 89, "Indiana Pacers All-Time");
    this.add("Bob", "Pettit", [Player.POSITION_POWER_FORWARD], 95, "Atlanta Hawks All-Time");
    this.add("Bobby", "Jones", [Player.POSITION_SMALL_FORWARD, Player.POSITION_POWER_FORWARD], 90, "Philadelphia 76ers All-Time");
    this.add("Brad", "Daugherty", [Player.POSITION_CENTER], 85, "Cleveland Cavaliers '89-'90");
    this.add("Brad", "Daugherty", [Player.POSITION_CENTER], 90, "Cleveland Cavaliers All-Time");
    this.add("Brad", "Davis", [Player.POSITION_POINT_GUARD], 85, "Dallas Mavericks All-Time");
    this.add("Bradley", "Beal", [Player.POSITION_SHOOTING_GUARD, Player.POSITION_SMALL_FORWARD], 89, "Washington Wizards All-Time");
    this.add("Brandon", "Ingram", [Player.POSITION_SMALL_FORWARD, Player.POSITION_POWER_FORWARD], 85, "New Orleans Pelicans All-Time");
    this.add("Brandon", "Roy", [Player.POSITION_SHOOTING_GUARD], 89, "Portland Trail Blazers '09-'10");
    this.add("Brian", "Grant", [Player.POSITION_POWER_FORWARD], 80, "Free Agency");
    this.add("Brian", "Winters", [Player.POSITION_SHOOTING_GUARD], 86, "Milwaukee Bucks All-Time");
    this.add("Brook", "Lopez", [Player.POSITION_CENTER], 87, "Brooklyn Nets All-Time");
    this.add("Bruce", "Bowen", [Player.POSITION_SMALL_FORWARD, Player.POSITION_SHOOTING_GUARD], 86, "San Antonio Spurs All-Time");
    this.add("Bryant", "Reeves", [Player.POSITION_CENTER], 84, "Memphis Grizzlies All-Time");
    this.add("Buck", "Williams", [Player.POSITION_POWER_FORWARD], 88, "Brooklyn Nets All-Time");
    this.add("Byron", "Beck", [Player.POSITION_POWER_FORWARD, Player.POSITION_SMALL_FORWARD], 92, "Denver Nuggets All-Time");
    this.add("Byron", "Scott", [Player.POSITION_SHOOTING_GUARD, Player.POSITION_POINT_GUARD], 84, "Los Angeles Lakers '86-'87");
    this.add("Byron", "Scott", [Player.POSITION_SHOOTING_GUARD, Player.POSITION_POINT_GUARD], 86, "Los Angeles Lakers All-Time");
    this.add("C.J.", "McCollum", [Player.POSITION_SHOOTING_GUARD], 86, "Portland Trail Blazers All-Time");
    this.add("Cade", "Cunningham", [Player.POSITION_POINT_GUARD, Player.POSITION_SHOOTING_GUARD], 82, "Detroit Pistons");
    this.add("Calvin", "Murphy", [Player.POSITION_POINT_GUARD], 92, "Houston Rockets All-Time");
    this.add("Campy", "Russell", [Player.POSITION_SMALL_FORWARD], 86, "Cleveland Cavaliers All-Time");
    this.add("Carlos", "Boozer", [Player.POSITION_POWER_FORWARD], 85, "Chicago Bulls '10-'11");
    this.add("Carlos", "Boozer", [Player.POSITION_POWER_FORWARD], 88, "Utah Jazz All-Time");
    this.add("Carmelo", "Anthony", [Player.POSITION_SMALL_FORWARD, Player.POSITION_POWER_FORWARD], 90, "New York Knicks '11-'12");
    this.add("Carmelo", "Anthony", [Player.POSITION_SMALL_FORWARD, Player.POSITION_POWER_FORWARD], 92, "New York Knicks All-Time");
    this.add("Carmelo", "Anthony", [Player.POSITION_SMALL_FORWARD, Player.POSITION_POWER_FORWARD], 95, "Denver Nuggets All-Time");
    this.add("Caron", "Butler", [Player.POSITION_SMALL_FORWARD], 80, "Dallas Mavericks '10-'11");
    this.add("Caron", "Butler", [Player.POSITION_SMALL_FORWARD], 86, "Washington Wizards '06-'07");
    this.add("Caron", "Butler", [Player.POSITION_SMALL_FORWARD], 88, "Washington Wizards All-Time");
    this.add("Charles", "Barkley", [Player.POSITION_POWER_FORWARD, Player.POSITION_SMALL_FORWARD], 85, "Free Agency");
    this.add("Charles", "Barkley", [Player.POSITION_POWER_FORWARD, Player.POSITION_SMALL_FORWARD], 91, "Free Agency");
    this.add("Charles", "Barkley", [Player.POSITION_POWER_FORWARD, Player.POSITION_SMALL_FORWARD], 96, "Free Agency");
    this.add("Charles", "Oakley", [Player.POSITION_POWER_FORWARD], 82, "Chicago Bulls '85-'86");
    this.add("Charles", "Oakley", [Player.POSITION_POWER_FORWARD], 86, "New York Knicks All-Time");
    this.add("Charlie", "Scott", [Player.POSITION_SHOOTING_GUARD, Player.POSITION_POINT_GUARD], 90, "Phoenix Suns All-Time");
    this.add("Chauncey", "Billups", [Player.POSITION_POINT_GUARD, Player.POSITION_SHOOTING_GUARD], 88, "Denver Nuggets All-Time");
    this.add("Chauncey", "Billups", [Player.POSITION_POINT_GUARD, Player.POSITION_SHOOTING_GUARD], 93, "Detroit Pistons All-Time");
    this.add("Chris", "Bosh", [Player.POSITION_CENTER, Player.POSITION_POWER_FORWARD], 86, "Miami Heat '12-'13");
    this.add("Chris", "Bosh", [Player.POSITION_CENTER, Player.POSITION_POWER_FORWARD], 88, "Miami Heat All-Time");
    this.add("Chris", "Bosh", [Player.POSITION_CENTER, Player.POSITION_POWER_FORWARD], 90, "Toronto Raptors All-Time");
    this.add("Chris", "Kaman", [Player.POSITION_CENTER], 87, "Los Angeles Clippers All-Time");
    this.add("Chris", "Mullin", [Player.POSITION_SMALL_FORWARD, Player.POSITION_SHOOTING_GUARD], 89, "Golden State Warriors '90-'91");
    this.add("Chris", "Mullin", [Player.POSITION_SMALL_FORWARD, Player.POSITION_SHOOTING_GUARD], 94, "Golden State Warriors All-Time");
    this.add("Chris", "Paul", [Player.POSITION_POINT_GUARD], 90, "Houston Rockets All-Time");
    this.add("Chris", "Paul", [Player.POSITION_POINT_GUARD], 93, "Los Angeles Clippers All-Time");
    this.add("Chris", "Paul", [Player.POSITION_POINT_GUARD], 97, "New Orleans Pelicans All-Time");
    this.add("Chris", "Webber", [Player.POSITION_POWER_FORWARD], 87, "Washington Wizards All-Time");
    this.add("Chris", "Webber", [Player.POSITION_POWER_FORWARD], 90, "Sacramento Kings '01-'02");
    this.add("Chris", "Webber", [Player.POSITION_POWER_FORWARD], 93, "Sacramento Kings All-Time");
    this.add("Christian", "Laettner", [Player.POSITION_POWER_FORWARD, Player.POSITION_CENTER], 85, "Minnesota Timberwolves All-Time");
    this.add("Chuck", "Person", [Player.POSITION_SMALL_FORWARD, Player.POSITION_POWER_FORWARD], 87, "Indiana Pacers All-Time");
    this.add("Cliff", "Hagan", [Player.POSITION_SMALL_FORWARD, Player.POSITION_SHOOTING_GUARD], 91, "Atlanta Hawks All-Time");
    this.add("Clint", "Capela", [Player.POSITION_CENTER], 85, "Atlanta Hawks");
    this.add("Clyde", "Drexler", [Player.POSITION_SHOOTING_GUARD, Player.POSITION_SMALL_FORWARD], 89, "Free Agency");
    this.add("Clyde", "Drexler", [Player.POSITION_SHOOTING_GUARD, Player.POSITION_SMALL_FORWARD], 93, "Houston Rockets All-Time");
    this.add("Clyde", "Drexler", [Player.POSITION_SHOOTING_GUARD, Player.POSITION_SMALL_FORWARD], 96, "Portland Trail Blazers All-Time");
    this.add("Corey", "Maggette", [Player.POSITION_SMALL_FORWARD, Player.POSITION_SHOOTING_GUARD], 83, "Free Agency");
    this.add("Corey", "Maggette", [Player.POSITION_SMALL_FORWARD, Player.POSITION_SHOOTING_GUARD], 86, "Los Angeles Clippers All-Time");
    this.add("Dale", "Ellis", [Player.POSITION_SHOOTING_GUARD, Player.POSITION_SMALL_FORWARD], 88, "Oklahoma City Thunder All-Time");
    this.add("Damian", "Lillard", [Player.POSITION_POINT_GUARD], 94, "Portland Trail Blazers All-Time");
    this.add("Damon", "Stoudamire", [Player.POSITION_POINT_GUARD], 81, "Portland Trail Blazers '99-'00");
    this.add("Damon", "Stoudamire", [Player.POSITION_POINT_GUARD], 87, "Toronto Raptors All-Time");
    this.add("Dan", "Issel", [Player.POSITION_POWER_FORWARD], 86, "Free Agency");
    this.add("Dan", "Issel", [Player.POSITION_POWER_FORWARD], 92, "Denver Nuggets All-Time");
    this.add("Dan", "Majerle", [Player.POSITION_SHOOTING_GUARD, Player.POSITION_SMALL_FORWARD], 88, "Phoenix Suns All-Time");
    this.add("Danilo", "Gallinari", [Player.POSITION_POWER_FORWARD], 81, "Atlanta Hawks");
    this.add("Danny", "Granger", [Player.POSITION_SMALL_FORWARD, Player.POSITION_POWER_FORWARD], 88, "Indiana Pacers All-Time");
    this.add("Danny", "Green", [Player.POSITION_SHOOTING_GUARD, Player.POSITION_SMALL_FORWARD], 82, "San Antonio Spurs '13-'14");
    this.add("Danny", "Manning", [Player.POSITION_POWER_FORWARD], 87, "Los Angeles Clippers All-Time");
    this.add("Darius", "Garland", [Player.POSITION_POINT_GUARD], 87, "Cleveland Cavaliers");
    this.add("Darrell", "Armstrong", [Player.POSITION_POINT_GUARD], 83, "Orlando Magic All-Time");
    this.add("Darrell", "Griffith", [Player.POSITION_SHOOTING_GUARD], 85, "Free Agency");
    this.add("Darrell", "Griffith", [Player.POSITION_SHOOTING_GUARD], 87, "Utah Jazz All-Time");
    this.add("Dave", "Bing", [Player.POSITION_POINT_GUARD, Player.POSITION_SHOOTING_GUARD], 91, "Detroit Pistons All-Time");
    this.add("Dave", "Cowens", [Player.POSITION_POWER_FORWARD], 95, "Boston Celtics All-Time");
    this.add("Dave", "Debusschere", [Player.POSITION_POWER_FORWARD, Player.POSITION_SMALL_FORWARD], 83, "New York Knicks '71-'72");
    this.add("Dave", "Debusschere", [Player.POSITION_POWER_FORWARD, Player.POSITION_SMALL_FORWARD], 89, "Detroit Pistons All-Time");
    this.add("Dave", "Debusschere", [Player.POSITION_POWER_FORWARD, Player.POSITION_SMALL_FORWARD], 92, "New York Knicks All-Time");
    this.add("David", "Robinson", [Player.POSITION_CENTER], 83, "Free Agency");
    this.add("David", "Robinson", [Player.POSITION_CENTER], 91, "San Antonio Spurs '97-'98");
    this.add("David", "Robinson", [Player.POSITION_CENTER], 96, "San Antonio Spurs All-Time");
    this.add("David", "Thompson", [Player.POSITION_SHOOTING_GUARD, Player.POSITION_SMALL_FORWARD], 91, "Free Agency");
    this.add("David", "Thompson", [Player.POSITION_SHOOTING_GUARD, Player.POSITION_SMALL_FORWARD], 95, "Denver Nuggets All-Time");
    this.add("David", "Wesley", [Player.POSITION_SHOOTING_GUARD], 84, "New Orleans Pelicans All-Time");
    this.add("David", "West", [Player.POSITION_POWER_FORWARD], 81, "Indiana Pacers '13-'14");
    this.add("David", "West", [Player.POSITION_POWER_FORWARD], 86, "Free Agency");
    this.add("David", "West", [Player.POSITION_POWER_FORWARD], 88, "New Orleans Pelicans All-Time");
    this.add("De'Aaron", "Fox", [Player.POSITION_POINT_GUARD], 84, "Sacramento Kings All-Time");
    this.add("DeMar", "DeRozan", [Player.POSITION_SHOOTING_GUARD, Player.POSITION_SMALL_FORWARD], 87, "Free Agency");
    this.add("DeMar", "DeRozan", [Player.POSITION_SHOOTING_GUARD, Player.POSITION_SMALL_FORWARD], 89, "Toronto Raptors All-Time");
    this.add("DeMar", "DeRozan", [Player.POSITION_SHOOTING_GUARD, Player.POSITION_SMALL_FORWARD], 91, "Chicago Bulls");
    this.add("DeMarcus", "Cousins", [Player.POSITION_CENTER], 85, "New Orleans Pelicans All-Time");
    this.add("DeMarcus", "Cousins", [Player.POSITION_CENTER], 90, "Sacramento Kings All-Time");
    this.add("Deandre", "Ayton", [Player.POSITION_CENTER], 86, "Phoenix Suns");
    this.add("Deandre", "Jordan", [Player.POSITION_CENTER], 87, "Los Angeles Clippers All-Time");
    this.add("Dejounte", "Murray", [Player.POSITION_POINT_GUARD], 87, "San Antonio Spurs");
    this.add("Dell", "Curry", [Player.POSITION_SHOOTING_GUARD, Player.POSITION_SMALL_FORWARD], 85, "Charlotte Hornets All-Time");
    this.add("Dell", "Curry", [Player.POSITION_SHOOTING_GUARD], 80, "Charlotte Hornets '92-'93");
    this.add("Dennis", "Johnson", [Player.POSITION_POINT_GUARD, Player.POSITION_SHOOTING_GUARD], 84, "Boston Celtics '85-'86");
    this.add("Dennis", "Johnson", [Player.POSITION_POINT_GUARD, Player.POSITION_SHOOTING_GUARD], 91, "Oklahoma City Thunder All-Time");
    this.add("Dennis", "Johnson", [Player.POSITION_POINT_GUARD, Player.POSITION_SHOOTING_GUARD], 94, "Phoenix Suns All-Time");
    this.add("Dennis", "Rodman", [Player.POSITION_POWER_FORWARD], 82, "Detroit Pistons '88-'89");
    this.add("Dennis", "Rodman", [Player.POSITION_POWER_FORWARD], 85, "Chicago Bulls '97-'98");
    this.add("Dennis", "Rodman", [Player.POSITION_POWER_FORWARD], 89, "Detroit Pistons All-Time");
    this.add("Dennis", "Rodman", [Player.POSITION_POWER_FORWARD], 93, "Chicago Bulls All-Time");
    this.add("Dennis", "Scott", [Player.POSITION_SMALL_FORWARD, Player.POSITION_SHOOTING_GUARD], 84, "Orlando Magic All-Time");
    this.add("Derek", "Harper", [Player.POSITION_POINT_GUARD, Player.POSITION_SHOOTING_GUARD], 84, "Free Agency");
    this.add("Derek", "Harper", [Player.POSITION_POINT_GUARD, Player.POSITION_SHOOTING_GUARD], 89, "Dallas Mavericks All-Time");
    this.add("Deron", "Williams", [Player.POSITION_POINT_GUARD], 87, "Utah Jazz All-Time");
    this.add("Deron", "Williams", [Player.POSITION_POINT_GUARD], 91, "Free Agency");
    this.add("Derrick", "Coleman", [Player.POSITION_POWER_FORWARD, Player.POSITION_CENTER], 86, "Charlotte Hornets All-Time");
    this.add("Derrick", "Coleman", [Player.POSITION_POWER_FORWARD, Player.POSITION_CENTER], 88, "Brooklyn Nets All-Time");
    this.add("Derrick", "Rose", [Player.POSITION_POINT_GUARD], 95, "Chicago Bulls '10-'11");
    this.add("Derrick", "Rose", [Player.POSITION_POINT_GUARD], 96, "Chicago Bulls All-Time");
    this.add("Detlef", "Schrempf", [Player.POSITION_SMALL_FORWARD, Player.POSITION_POWER_FORWARD], 83, "Seattle SuperSonics '95-'96");
    this.add("Detlef", "Schrempf", [Player.POSITION_SMALL_FORWARD, Player.POSITION_POWER_FORWARD], 87, "Oklahoma City Thunder All-Time");
    this.add("Devin", "Booker", [Player.POSITION_SHOOTING_GUARD], 89, "Phoenix Suns All-Time");
    this.add("Devin", "Booker", [Player.POSITION_SHOOTING_GUARD], 91, "Phoenix Suns");
    this.add("Dick", "Barnett", [Player.POSITION_SHOOTING_GUARD, Player.POSITION_SMALL_FORWARD], 87, "New York Knicks All-Time");
    this.add("Dick", "Van Arsdale", [Player.POSITION_SHOOTING_GUARD, Player.POSITION_SMALL_FORWARD], 88, "Phoenix Suns All-Time");
    this.add("Dikembe", "Mutombo", [Player.POSITION_CENTER], 84, "Denver Nuggets '93-'94");
    this.add("Dikembe", "Mutombo", [Player.POSITION_CENTER], 86, "Free Agency");
    this.add("Dikembe", "Mutombo", [Player.POSITION_CENTER], 90, "Denver Nuggets All-Time");
    this.add("Dikembe", "Mutombo", [Player.POSITION_CENTER], 92, "Atlanta Hawks All-Time");
    this.add("Dirk", "Nowitzki", [Player.POSITION_POWER_FORWARD, Player.POSITION_CENTER], 91, "Dallas Mavericks '02-'03");
    this.add("Dirk", "Nowitzki", [Player.POSITION_POWER_FORWARD, Player.POSITION_CENTER], 95, "Dallas Mavericks '10-'11");
    this.add("Dirk", "Nowitzki", [Player.POSITION_POWER_FORWARD, Player.POSITION_CENTER], 98, "Dallas Mavericks All-Time");
    this.add("Doc", "Rivers", [Player.POSITION_POINT_GUARD], 83, "Atlanta Hawks '85-'86");
    this.add("Doc", "Rivers", [Player.POSITION_POINT_GUARD], 86, "Atlanta Hawks All-Time");
    this.add("Dolph", "Schayes", [Player.POSITION_POWER_FORWARD], 94, "Philadelphia 76ers All-Time");
    this.add("Domantas", "Sabonis", [Player.POSITION_POWER_FORWARD, Player.POSITION_CENTER], 86, "Indiana Pacers All-Time");
    this.add("Dominique", "Wilkins", [Player.POSITION_SMALL_FORWARD, Player.POSITION_SHOOTING_GUARD], 91, "Atlanta Hawks '85-'86");
    this.add("Dominique", "Wilkins", [Player.POSITION_SMALL_FORWARD, Player.POSITION_SHOOTING_GUARD], 95, "Atlanta Hawks All-Time");
    this.add("Don", "Buse", [Player.POSITION_POINT_GUARD, Player.POSITION_SHOOTING_GUARD], 87, "Indiana Pacers All-Time");
    this.add("Don", "Ohl", [Player.POSITION_SHOOTING_GUARD, Player.POSITION_POINT_GUARD], 87, "Washington Wizards All-Time");
    this.add("Donovan", "Mitchell", [Player.POSITION_SHOOTING_GUARD, Player.POSITION_POINT_GUARD], 88, "Utah Jazz All-Time");
    this.add("Doug", "Christie", [Player.POSITION_SHOOTING_GUARD, Player.POSITION_SMALL_FORWARD], 84, "Toronto Raptors All-Time");
    this.add("Doug", "Collins", [Player.POSITION_SHOOTING_GUARD, Player.POSITION_SMALL_FORWARD], 85, "Philadelphia 76ers '76-'77");
    this.add("Doug", "Collins", [Player.POSITION_SHOOTING_GUARD, Player.POSITION_SMALL_FORWARD], 87, "Philadelphia 76ers All-Time");
    this.add("Doug", "West", [Player.POSITION_SHOOTING_GUARD, Player.POSITION_SMALL_FORWARD], 85, "Minnesota Timberwolves All-Time");
    this.add("Draymond", "Green", [Player.POSITION_POWER_FORWARD, Player.POSITION_SMALL_FORWARD], 89, "Golden State Warriors All-Time");
    this.add("Drazen", "Petrovic", [Player.POSITION_SHOOTING_GUARD, Player.POSITION_SMALL_FORWARD], 90, "Brooklyn Nets All-Time");
    this.add("Dwight", "Howard", [Player.POSITION_CENTER], 93, "Orlando Magic All-Time");
    this.add("Dwyane", "Wade", [Player.POSITION_SHOOTING_GUARD], 91, "Miami Heat '12-'13");
    this.add("Dwyane", "Wade", [Player.POSITION_SHOOTING_GUARD], 95, "Miami Heat '05-'06");
    this.add("Dwyane", "Wade", [Player.POSITION_SHOOTING_GUARD], 97, "Miami Heat All-Time");
    this.add("Earl", "Monroe", [Player.POSITION_POINT_GUARD], 80, "New York Knicks '71-'72");
    this.add("Earl", "Monroe", [Player.POSITION_POINT_GUARD], 89, "New York Knicks All-Time");
    this.add("Eddie", "Johnson", [Player.POSITION_SHOOTING_GUARD, Player.POSITION_SMALL_FORWARD], 86, "Sacramento Kings All-Time");
    this.add("Eddie", "Jones", [Player.POSITION_SHOOTING_GUARD, Player.POSITION_SMALL_FORWARD], 83, "Los Angeles Lakers '97-'98");
    this.add("Eddie", "Jones", [Player.POSITION_SHOOTING_GUARD, Player.POSITION_SMALL_FORWARD], 85, "Miami Heat All-Time");
    this.add("Eddie", "Jones", [Player.POSITION_SHOOTING_GUARD, Player.POSITION_SMALL_FORWARD], 89, "Charlotte Hornets All-Time");
    this.add("Elgin", "Baylor", [Player.POSITION_SMALL_FORWARD, Player.POSITION_POWER_FORWARD], 92, "Los Angeles Lakers '64-'65");
    this.add("Elgin", "Baylor", [Player.POSITION_SMALL_FORWARD, Player.POSITION_POWER_FORWARD], 96, "Los Angeles Lakers All-Time");
    this.add("Elton", "Brand", [Player.POSITION_POWER_FORWARD, Player.POSITION_SMALL_FORWARD], 90, "Los Angeles Clippers All-Time");
    this.add("Elvin", "Hayes", [Player.POSITION_POWER_FORWARD], 89, "Houston Rockets All-Time");
    this.add("Elvin", "Hayes", [Player.POSITION_POWER_FORWARD], 94, "Washington Wizards All-Time");
    this.add("Eric", "Gordon", [Player.POSITION_SHOOTING_GUARD, Player.POSITION_SMALL_FORWARD], 81, "New Orleans Pelicans All-Time");
    this.add("Eric", "Snow", [Player.POSITION_POINT_GUARD], 80, "Philadelphia 76ers '00-'01");
    this.add("Evan", "Mobley", [Player.POSITION_POWER_FORWARD, Player.POSITION_CENTER], 83, "Cleveland Cavaliers");
    this.add("Fat", "Lever", [Player.POSITION_POINT_GUARD, Player.POSITION_SHOOTING_GUARD], 92, "Denver Nuggets All-Time");
    this.add("Fred", "Brown", [Player.POSITION_SHOOTING_GUARD, Player.POSITION_POINT_GUARD], 81, "Free Agency");
    this.add("Fred", "Brown", [Player.POSITION_SHOOTING_GUARD, Player.POSITION_POINT_GUARD], 88, "Oklahoma City Thunder All-Time");
    this.add("Fred", "VanVleet", [Player.POSITION_POINT_GUARD], 83, "Toronto Raptors All-Time");
    this.add("Freddie", "Lewis", [Player.POSITION_POINT_GUARD, Player.POSITION_SHOOTING_GUARD], 89, "Indiana Pacers All-Time");
    this.add("Gail", "Goodrich", [Player.POSITION_SHOOTING_GUARD, Player.POSITION_POINT_GUARD], 83, "Los Angeles Lakers '70-'71");
    this.add("Gail", "Goodrich", [Player.POSITION_SHOOTING_GUARD, Player.POSITION_POINT_GUARD], 89, "Los Angeles Lakers All-Time");
    this.add("Gary", "Payton", [Player.POSITION_POINT_GUARD], 83, "Los Angeles Lakers '03-'04");
    this.add("Gary", "Payton", [Player.POSITION_POINT_GUARD], 95, "Oklahoma City Thunder All-Time");
    this.add("Geoff", "Petrie", [Player.POSITION_SHOOTING_GUARD, Player.POSITION_POINT_GUARD], 87, "Portland Trail Blazers All-Time");
    this.add("George", "Gervin", [Player.POSITION_SHOOTING_GUARD, Player.POSITION_SMALL_FORWARD], 82, "Chicago Bulls '85-'86");
    this.add("George", "Gervin", [Player.POSITION_SHOOTING_GUARD, Player.POSITION_SMALL_FORWARD], 92, "Free Agency");
    this.add("George", "Gervin", [Player.POSITION_SHOOTING_GUARD, Player.POSITION_SMALL_FORWARD], 95, "San Antonio Spurs All-Time");
    this.add("George", "McGinnis", [Player.POSITION_POWER_FORWARD], 86, "Philadelphia 76ers '76-'77");
    this.add("George", "McGinnis", [Player.POSITION_POWER_FORWARD], 87, "Philadelphia 76ers All-Time");
    this.add("George", "McGinnis", [Player.POSITION_POWER_FORWARD], 89, "Indiana Pacers All-Time");
    this.add("George", "Mikan", [Player.POSITION_CENTER], 94, "Los Angeles Lakers All-Time");
    this.add("Gerald", "Wallace", [Player.POSITION_SMALL_FORWARD, Player.POSITION_POWER_FORWARD], 84, "Charlotte Hornets All-Time");
    this.add("Giannis", "Antetokounmpo", [Player.POSITION_SMALL_FORWARD, Player.POSITION_POWER_FORWARD], 96, "Milwaukee Bucks All-Time");
    this.add("Gilbert", "Arenas", [Player.POSITION_POINT_GUARD], 93, "Washington Wizards All-Time");
    this.add("Glen", "Rice", [Player.POSITION_SMALL_FORWARD], 86, "Free Agency");
    this.add("Glen", "Rice", [Player.POSITION_SMALL_FORWARD], 88, "Miami Heat All-Time");
    this.add("Glen", "Rice", [Player.POSITION_SMALL_FORWARD], 90, "Charlotte Hornets All-Time");
    this.add("Glenn", "Robinson", [Player.POSITION_SMALL_FORWARD, Player.POSITION_POWER_FORWARD], 87, "Milwaukee Bucks All-Time");
    this.add("Goran", "Dragic", [Player.POSITION_POINT_GUARD], 85, "Miami Heat All-Time");
    this.add("Gordon", "Hayward", [Player.POSITION_SMALL_FORWARD], 88, "Utah Jazz All-Time");
    this.add("Grant", "Hill", [Player.POSITION_SMALL_FORWARD, Player.POSITION_SHOOTING_GUARD], 86, "Orlando Magic All-Time");
    this.add("Grant", "Hill", [Player.POSITION_SMALL_FORWARD, Player.POSITION_SHOOTING_GUARD], 93, "Detroit Pistons All-Time");
    this.add("Greg", "Anthony", [Player.POSITION_POINT_GUARD], 81, "Memphis Grizzlies All-Time");
    this.add("Greg", "Oden", [Player.POSITION_CENTER], 83, "Portland Trail Blazers '09-'10");
    this.add("Gus", "Williams", [Player.POSITION_POINT_GUARD], 89, "Oklahoma City Thunder All-Time");
    this.add("Hakeem", "Olajuwon", [Player.POSITION_CENTER], 94, "Free Agency");
    this.add("Hakeem", "Olajuwon", [Player.POSITION_CENTER], 98, "Houston Rockets All-Time");
    this.add("Hal", "Greer", [Player.POSITION_SHOOTING_GUARD, Player.POSITION_POINT_GUARD], 89, "Philadelphia 76ers All-Time");
    this.add("Happy", "Hairston", [Player.POSITION_POWER_FORWARD, Player.POSITION_SMALL_FORWARD], 82, "Los Angeles Lakers '70-'71");
    this.add("Hassan", "Whiteside", [Player.POSITION_CENTER], 86, "Miami Heat All-Time");
    this.add("Hedo", "Turkoglu", [Player.POSITION_SMALL_FORWARD, Player.POSITION_POWER_FORWARD], 86, "Orlando Magic All-Time");
    this.add("Henry", "Bibby", [Player.POSITION_POINT_GUARD], 81, "Philadelphia 76ers '76-'77");
    this.add("Herb", "Williams", [Player.POSITION_CENTER, Player.POSITION_POWER_FORWARD], 85, "Indiana Pacers All-Time");
    this.add("Hersey", "Hawkins", [Player.POSITION_SHOOTING_GUARD, Player.POSITION_POINT_GUARD], 87, "Philadelphia 76ers All-Time");
    this.add("Horace", "Grant", [Player.POSITION_POWER_FORWARD], 84, "Orlando Magic All-Time");
    this.add("Horace", "Grant", [Player.POSITION_POWER_FORWARD], 85, "Chicago Bulls All-Time");
    this.add("Hot Rod", "Williams", [Player.POSITION_POWER_FORWARD, Player.POSITION_CENTER], 85, "Cleveland Cavaliers All-Time");
    this.add("Isaiah", "Rider", [Player.POSITION_SHOOTING_GUARD], 85, "Minnesota Timberwolves All-Time");
    this.add("Isiah", "Thomas", [Player.POSITION_POINT_GUARD], 92, "Detroit Pistons '88-'89");
    this.add("Isiah", "Thomas", [Player.POSITION_POINT_GUARD], 96, "Detroit Pistons All-Time");
    this.add("J.R.", "Smith", [Player.POSITION_SHOOTING_GUARD, Player.POSITION_SMALL_FORWARD], 80, "Free Agency");
    this.add("J.R.", "Smith", [Player.POSITION_SHOOTING_GUARD, Player.POSITION_SMALL_FORWARD], 86, "Free Agency");
    this.add("JJ", "Redick", [Player.POSITION_SHOOTING_GUARD], 83, "Los Angeles Clippers All-Time");
    this.add("Ja", "Morant", [Player.POSITION_POINT_GUARD], 85, "Memphis Grizzlies All-Time");
    this.add("Ja", "Morant", [Player.POSITION_POINT_GUARD], 92, "Memphis Grizzlies");
    this.add("Jack", "Marin", [Player.POSITION_SMALL_FORWARD, Player.POSITION_SHOOTING_GUARD], 87, "Washington Wizards All-Time");
    this.add("Jack", "Sikma", [Player.POSITION_CENTER], 84, "Free Agency");
    this.add("Jack", "Sikma", [Player.POSITION_CENTER], 89, "Oklahoma City Thunder All-Time");
    this.add("Jae", "Crowder", [Player.POSITION_SMALL_FORWARD, Player.POSITION_POWER_FORWARD], 81, "Phoenix Suns");
    this.add("Jalen", "Rose", [Player.POSITION_SMALL_FORWARD, Player.POSITION_SHOOTING_GUARD], 86, "Free Agency");
    this.add("Jamaal", "Wilkes", [Player.POSITION_SMALL_FORWARD, Player.POSITION_SHOOTING_GUARD], 81, "Free Agency");
    this.add("Jamaal", "Wilkes", [Player.POSITION_SMALL_FORWARD, Player.POSITION_SHOOTING_GUARD], 87, "Los Angeles Lakers All-Time");
    this.add("Jamal", "Crawford", [Player.POSITION_SHOOTING_GUARD, Player.POSITION_SMALL_FORWARD], 81, "Los Angeles Clippers '13-'14");
    this.add("Jamal", "Mashburn", [Player.POSITION_SMALL_FORWARD, Player.POSITION_POWER_FORWARD], 88, "Dallas Mavericks All-Time");
    this.add("Jamal", "Mashburn", [Player.POSITION_SMALL_FORWARD, Player.POSITION_POWER_FORWARD], 89, "New Orleans Pelicans All-Time");
    this.add("Jamal", "Murray", [Player.POSITION_POINT_GUARD, Player.POSITION_SHOOTING_GUARD], 85, "Denver Nuggets All-Time");
    this.add("Jameer", "Nelson", [Player.POSITION_POINT_GUARD], 83, "Orlando Magic All-Time");
    this.add("James", "Donaldson", [Player.POSITION_CENTER], 81, "Free Agency");
    this.add("James", "Donaldson", [Player.POSITION_CENTER], 85, "Dallas Mavericks All-Time");
    this.add("James", "Harden", [Player.POSITION_SHOOTING_GUARD, Player.POSITION_POINT_GUARD], 87, "Oklahoma City Thunder '11-'12");
    this.add("James", "Harden", [Player.POSITION_SHOOTING_GUARD, Player.POSITION_POINT_GUARD], 94, "Brooklyn Nets All-Time");
    this.add("James", "Harden", [Player.POSITION_SHOOTING_GUARD, Player.POSITION_POINT_GUARD], 96, "Houston Rockets All-Time");
    this.add("James", "Silas", [Player.POSITION_SHOOTING_GUARD], 86, "San Antonio Spurs All-Time");
    this.add("James", "Worthy", [Player.POSITION_SMALL_FORWARD, Player.POSITION_POWER_FORWARD], 86, "Los Angeles Lakers '86-'87");
    this.add("James", "Worthy", [Player.POSITION_SMALL_FORWARD, Player.POSITION_POWER_FORWARD], 87, "Los Angeles Lakers '90-'91");
    this.add("James", "Worthy", [Player.POSITION_SMALL_FORWARD, Player.POSITION_POWER_FORWARD], 95, "Los Angeles Lakers All-Time");
    this.add("Jaren", "Jackson Jr.", [Player.POSITION_POWER_FORWARD, Player.POSITION_CENTER], 82, "Memphis Grizzlies All-Time");
    this.add("Jarrett", "Allen", [Player.POSITION_CENTER], 86, "Cleveland Cavaliers");
    this.add("Jason", "Kidd", [Player.POSITION_POINT_GUARD], 87, "Dallas Mavericks All-Time");
    this.add("Jason", "Kidd", [Player.POSITION_POINT_GUARD], 90, "Phoenix Suns All-Time");
    this.add("Jason", "Kidd", [Player.POSITION_POINT_GUARD], 93, "New Jersey Nets '01-'02");
    this.add("Jason", "Kidd", [Player.POSITION_POINT_GUARD], 96, "Brooklyn Nets All-Time");
    this.add("Jason", "Richardson", [Player.POSITION_SHOOTING_GUARD, Player.POSITION_SMALL_FORWARD], 87, "Golden State Warriors All-Time");
    this.add("Jason", "Terry", [Player.POSITION_POINT_GUARD], 83, "Dallas Mavericks '10-'11");
    this.add("Jason", "Terry", [Player.POSITION_POINT_GUARD], 86, "Dallas Mavericks All-Time");
    this.add("Jason", "Williams", [Player.POSITION_POINT_GUARD], 84, "Memphis Grizzlies All-Time");
    this.add("Jaylen", "Brown", [Player.POSITION_SHOOTING_GUARD, Player.POSITION_SMALL_FORWARD], 86, "Boston Celtics");
    this.add("Jayson", "Tatum", [Player.POSITION_SMALL_FORWARD, Player.POSITION_POWER_FORWARD], 90, "Boston Celtics");
    this.add("Jeff", "Hornacek", [Player.POSITION_SHOOTING_GUARD, Player.POSITION_POINT_GUARD], 84, "Utah Jazz All-Time");
    this.add("Jeff", "Malone", [Player.POSITION_SHOOTING_GUARD, Player.POSITION_SMALL_FORWARD], 86, "Washington Wizards All-Time");
    this.add("Jerami", "Grant", [Player.POSITION_POWER_FORWARD, Player.POSITION_SMALL_FORWARD], 83, "Detroit Pistons");
    this.add("Jeremy", "Lin", [Player.POSITION_POINT_GUARD], 83, "New York Knicks '11-'12");
    this.add("Jermaine", "O'Neal", [Player.POSITION_CENTER, Player.POSITION_POWER_FORWARD], 91, "Indiana Pacers All-Time");
    this.add("Jerome", "Kersey", [Player.POSITION_SMALL_FORWARD, Player.POSITION_POWER_FORWARD], 81, "Portland Trail Blazers '90-'91");
    this.add("Jerome", "Kersey", [Player.POSITION_SMALL_FORWARD, Player.POSITION_POWER_FORWARD], 87, "Portland Trail Blazers All-Time");
    this.add("Jerry", "Lucas", [Player.POSITION_POWER_FORWARD], 86, "New York Knicks '71-'72");
    this.add("Jerry", "Lucas", [Player.POSITION_POWER_FORWARD], 95, "Sacramento Kings All-Time");
    this.add("Jerry", "Sloan", [Player.POSITION_SHOOTING_GUARD, Player.POSITION_SMALL_FORWARD], 89, "Chicago Bulls All-Time");
    this.add("Jerry", "Stackhouse", [Player.POSITION_SHOOTING_GUARD, Player.POSITION_SMALL_FORWARD], 87, "Free Agency");
    this.add("Jerry", "Stackhouse", [Player.POSITION_SHOOTING_GUARD, Player.POSITION_SMALL_FORWARD], 89, "Detroit Pistons All-Time");
    this.add("Jerry", "West", [Player.POSITION_POINT_GUARD], 93, "Los Angeles Lakers '64-'65");
    this.add("Jerry", "West", [Player.POSITION_POINT_GUARD], 95, "Los Angeles Lakers '70-'71");
    this.add("Jerry", "West", [Player.POSITION_POINT_GUARD], 97, "Los Angeles Lakers All-Time");
    this.add("Jim", "Chones", [Player.POSITION_CENTER], 85, "Cleveland Cavaliers All-Time");
    this.add("Jim", "Jackson", [Player.POSITION_SHOOTING_GUARD], 88, "Dallas Mavericks All-Time");
    this.add("Jim", "Paxson", [Player.POSITION_SHOOTING_GUARD, Player.POSITION_POINT_GUARD], 86, "Portland Trail Blazers All-Time");
    this.add("Jimmy", "Butler", [Player.POSITION_SHOOTING_GUARD, Player.POSITION_SMALL_FORWARD], 87, "Minnesota Timberwolves All-Time");
    this.add("Jimmy", "Butler", [Player.POSITION_SHOOTING_GUARD, Player.POSITION_SMALL_FORWARD], 91, "Chicago Bulls All-Time");
    this.add("Jo Jo", "White", [Player.POSITION_POINT_GUARD], 94, "Boston Celtics All-Time");
    this.add("Joakim", "Noah", [Player.POSITION_CENTER], 87, "Chicago Bulls All-Time");
    this.add("Joe", "Caldwell", [Player.POSITION_SHOOTING_GUARD, Player.POSITION_SMALL_FORWARD], 88, "Atlanta Hawks All-Time");
    this.add("Joe", "Dumars", [Player.POSITION_SHOOTING_GUARD, Player.POSITION_POINT_GUARD], 90, "Detroit Pistons '88-'89");
    this.add("Joe", "Dumars", [Player.POSITION_SHOOTING_GUARD, Player.POSITION_POINT_GUARD], 93, "Detroit Pistons All-Time");
    this.add("Joe", "Johnson", [Player.POSITION_SMALL_FORWARD, Player.POSITION_SHOOTING_GUARD], 83, "Phoenix Suns '04-'05");
    this.add("Joe", "Johnson", [Player.POSITION_SMALL_FORWARD, Player.POSITION_SHOOTING_GUARD], 89, "Free Agency");
    this.add("Joel", "Embiid", [Player.POSITION_CENTER], 95, "Philadelphia 76ers All-Time");
    this.add("John", "Collins", [Player.POSITION_POWER_FORWARD], 83, "Atlanta Hawks");
    this.add("John", "Drew", [Player.POSITION_SMALL_FORWARD], 81, "Free Agency");
    this.add("John", "Havlicek", [Player.POSITION_SMALL_FORWARD, Player.POSITION_SHOOTING_GUARD], 84, "Boston Celtics '64-'65");
    this.add("John", "Havlicek", [Player.POSITION_SMALL_FORWARD, Player.POSITION_SHOOTING_GUARD], 96, "Boston Celtics All-Time");
    this.add("John", "Starks", [Player.POSITION_SHOOTING_GUARD, Player.POSITION_POINT_GUARD], 82, "New York Knicks '94-'95");
    this.add("John", "Starks", [Player.POSITION_SHOOTING_GUARD, Player.POSITION_POINT_GUARD], 88, "New York Knicks All-Time");
    this.add("John", "Stockton", [Player.POSITION_POINT_GUARD], 93, "Utah Jazz '97-'98");
    this.add("John", "Stockton", [Player.POSITION_POINT_GUARD], 97, "Utah Jazz All-Time");
    this.add("John", "Wall", [Player.POSITION_POINT_GUARD], 90, "Washington Wizards All-Time");
    this.add("John", "Williams", [Player.POSITION_POWER_FORWARD, Player.POSITION_CENTER], 82, "Cleveland Cavaliers '89-'90");
    this.add("Johnny", "Moore", [Player.POSITION_POINT_GUARD], 84, "San Antonio Spurs All-Time");
    this.add("Jonas", "Valanciunas", [Player.POSITION_CENTER], 82, "Memphis Grizzlies All-Time");
    this.add("Josh", "Giddey", [Player.POSITION_POINT_GUARD, Player.POSITION_SHOOTING_GUARD], 82, "Oklahoma City Thunder");
    this.add("Josh", "Smith", [Player.POSITION_POWER_FORWARD, Player.POSITION_SMALL_FORWARD], 86, "Atlanta Hawks All-Time");
    this.add("Jrue", "Holiday", [Player.POSITION_SHOOTING_GUARD, Player.POSITION_SMALL_FORWARD], 86, "New Orleans Pelicans All-Time");
    this.add("Julius", "Erving", [Player.POSITION_SMALL_FORWARD, Player.POSITION_SHOOTING_GUARD], 95, "Philadelphia 76ers '76-'77");
    this.add("Julius", "Erving", [Player.POSITION_SMALL_FORWARD, Player.POSITION_SHOOTING_GUARD], 97, "Brooklyn Nets All-Time");
    this.add("Julius", "Randle", [Player.POSITION_POWER_FORWARD], 83, "New Orleans Pelicans All-Time");
    this.add("Julius", "Randle", [Player.POSITION_POWER_FORWARD], 87, "New York Knicks All-Time");
    this.add("Junior", "Bridgeman", [Player.POSITION_SMALL_FORWARD, Player.POSITION_SHOOTING_GUARD], 87, "Milwaukee Bucks All-Time");
    this.add("K.C.", "Jones", [Player.POSITION_POINT_GUARD], 85, "Boston Celtics '64-'65");
    this.add("Kareem", "Abdul-Jabbar", [Player.POSITION_CENTER], 84, "Free Agency");
    this.add("Kareem", "Abdul-Jabbar", [Player.POSITION_CENTER], 94, "Los Angeles Lakers '86-'87");
    this.add("Kareem", "Abdul-Jabbar", [Player.POSITION_CENTER], 96, "Los Angeles Lakers All-Time");
    this.add("Kareem", "Abdul-Jabbar", [Player.POSITION_CENTER], 99, "Milwaukee Bucks All-Time");
    this.add("Karl", "Malone", [Player.POSITION_POWER_FORWARD], 97, "Utah Jazz All-Time");
    this.add("Karl-Anthony", "Towns", [Player.POSITION_CENTER], 89, "Minnesota Timberwolves All-Time");
    this.add("Kawhi", "Leonard", [Player.POSITION_SMALL_FORWARD, Player.POSITION_POWER_FORWARD], 92, "San Antonio Spurs '13-'14");
    this.add("Kawhi", "Leonard", [Player.POSITION_SMALL_FORWARD, Player.POSITION_POWER_FORWARD], 94, "San Antonio Spurs All-Time");
    this.add("Kawhi", "Leonard", [Player.POSITION_SMALL_FORWARD, Player.POSITION_POWER_FORWARD], 95, "Los Angeles Clippers All-Time");
    this.add("Kawhi", "Leonard", [Player.POSITION_SMALL_FORWARD, Player.POSITION_POWER_FORWARD], 96, "Toronto Raptors All-Time");
    this.add("Keith", "Van Horn", [Player.POSITION_SMALL_FORWARD, Player.POSITION_POWER_FORWARD], 82, "New Jersey Nets '01-'02");
    this.add("Keith", "Van Horn", [Player.POSITION_SMALL_FORWARD, Player.POSITION_POWER_FORWARD], 86, "Brooklyn Nets All-Time");
    this.add("Kelly", "Tripucka", [Player.POSITION_SHOOTING_GUARD, Player.POSITION_SMALL_FORWARD], 86, "Detroit Pistons All-Time");
    this.add("Kemba", "Walker", [Player.POSITION_POINT_GUARD], 89, "Charlotte Hornets All-Time");
    this.add("Kendall", "Gill", [Player.POSITION_SHOOTING_GUARD, Player.POSITION_SMALL_FORWARD], 85, "Charlotte Hornets All-Time");
    this.add("Kenny", "Anderson", [Player.POSITION_POINT_GUARD], 84, "Free Agency");
    this.add("Kenny", "Anderson", [Player.POSITION_POINT_GUARD], 88, "Brooklyn Nets All-Time");
    this.add("Kenny", "Smith", [Player.POSITION_POINT_GUARD], 87, "Houston Rockets All-Time");
    this.add("Kenyon", "Martin", [Player.POSITION_POWER_FORWARD], 83, "New Jersey Nets '01-'02");
    this.add("Kenyon", "Martin", [Player.POSITION_POWER_FORWARD], 87, "Brooklyn Nets All-Time");
    this.add("Kerry", "Kittles", [Player.POSITION_SHOOTING_GUARD, Player.POSITION_SMALL_FORWARD], 82, "New Jersey Nets '01-'02");
    this.add("Kevin", "Duckworth", [Player.POSITION_CENTER], 85, "Portland Trail Blazers All-Time");
    this.add("Kevin", "Durant", [Player.POSITION_POWER_FORWARD, Player.POSITION_SMALL_FORWARD], 96, "Brooklyn Nets All-Time");
    this.add("Kevin", "Durant", [Player.POSITION_SMALL_FORWARD, Player.POSITION_POWER_FORWARD], 97, "Golden State Warriors All-Time");
    this.add("Kevin", "Durant", [Player.POSITION_SMALL_FORWARD, Player.POSITION_POWER_FORWARD], 97, "Oklahoma City Thunder All-Time");
    this.add("Kevin", "Durant", [Player.POSITION_SMALL_FORWARD, Player.POSITION_POWER_FORWARD], 99, "Free Agency");
    this.add("Kevin", "Garnett", [Player.POSITION_POWER_FORWARD, Player.POSITION_CENTER], 83, "Free Agency");
    this.add("Kevin", "Garnett", [Player.POSITION_POWER_FORWARD, Player.POSITION_CENTER], 92, "Boston Celtics All-Time");
    this.add("Kevin", "Garnett", [Player.POSITION_POWER_FORWARD, Player.POSITION_CENTER], 98, "Minnesota Timberwolves All-Time");
    this.add("Kevin", "Johnson", [Player.POSITION_POINT_GUARD], 90, "Phoenix Suns All-Time");
    this.add("Kevin", "Love", [Player.POSITION_POWER_FORWARD], 87, "Cleveland Cavaliers All-Time");
    this.add("Kevin", "Love", [Player.POSITION_POWER_FORWARD], 91, "Minnesota Timberwolves All-Time");
    this.add("Kevin", "Martin", [Player.POSITION_SHOOTING_GUARD, Player.POSITION_SMALL_FORWARD], 86, "Sacramento Kings All-Time");
    this.add("Kevin", "McHale", [Player.POSITION_POWER_FORWARD], 91, "Boston Celtics '85-'86");
    this.add("Kevin", "McHale", [Player.POSITION_POWER_FORWARD], 95, "Boston Celtics All-Time");
    this.add("Kevin", "Willis", [Player.POSITION_CENTER], 87, "Atlanta Hawks All-Time");
    this.add("Khris", "Middleton", [Player.POSITION_SMALL_FORWARD, Player.POSITION_SHOOTING_GUARD], 88, "Milwaukee Bucks All-Time");
    this.add("Kiki", "Vandeweghe", [Player.POSITION_SMALL_FORWARD, Player.POSITION_POWER_FORWARD], 86, "Portland Trail Blazers All-Time");
    this.add("Kiki", "Vandeweghe", [Player.POSITION_SMALL_FORWARD, Player.POSITION_POWER_FORWARD], 89, "Denver Nuggets All-Time");
    this.add("Kirk", "Hinrich", [Player.POSITION_POINT_GUARD], 82, "Chicago Bulls All-Time");
    this.add("Klay", "Thompson", [Player.POSITION_SHOOTING_GUARD, Player.POSITION_SMALL_FORWARD], 87, "Free Agency");
    this.add("Klay", "Thompson", [Player.POSITION_SHOOTING_GUARD, Player.POSITION_SMALL_FORWARD], 92, "Golden State Warriors All-Time");
    this.add("Kobe", "Bryant", [Player.POSITION_SHOOTING_GUARD, Player.POSITION_SMALL_FORWARD], 83, "Los Angeles Lakers '97-'98");
    this.add("Kobe", "Bryant", [Player.POSITION_SHOOTING_GUARD, Player.POSITION_SMALL_FORWARD], 95, "Los Angeles Lakers '03-'04");
    this.add("Kobe", "Bryant", [Player.POSITION_SHOOTING_GUARD, Player.POSITION_SMALL_FORWARD], 98, "Los Angeles Lakers All-Time");
    this.add("Kristaps", "Porzingis", [Player.POSITION_POWER_FORWARD, Player.POSITION_CENTER], 88, "Free Agency");
    this.add("Kyle", "Korver", [Player.POSITION_SHOOTING_GUARD], 80, "Free Agency");
    this.add("Kyle", "Lowry", [Player.POSITION_POINT_GUARD], 86, "Free Agency");
    this.add("Kyle", "Lowry", [Player.POSITION_POINT_GUARD], 89, "Toronto Raptors All-Time");
    this.add("Kyrie", "Irving", [Player.POSITION_POINT_GUARD], 89, "Brooklyn Nets All-Time");
    this.add("Kyrie", "Irving", [Player.POSITION_POINT_GUARD], 94, "Cleveland Cavaliers All-Time");
    this.add("LaMarcus", "Aldridge", [Player.POSITION_POWER_FORWARD, Player.POSITION_CENTER], 86, "San Antonio Spurs All-Time");
    this.add("LaMarcus", "Aldridge", [Player.POSITION_POWER_FORWARD, Player.POSITION_CENTER], 89, "Portland Trail Blazers All-Time");
    this.add("LaMelo", "Ball", [Player.POSITION_POINT_GUARD, Player.POSITION_SHOOTING_GUARD], 86, "Charlotte Hornets");
    this.add("Lamar", "Odom", [Player.POSITION_SMALL_FORWARD, Player.POSITION_POWER_FORWARD], 82, "Los Angeles Clippers All-Time");
    this.add("Lance", "Stephenson", [Player.POSITION_SHOOTING_GUARD, Player.POSITION_SMALL_FORWARD], 81, "Indiana Pacers '13-'14");
    this.add("Laphonso", "Ellis", [Player.POSITION_POWER_FORWARD], 81, "Denver Nuggets '93-'94");
    this.add("Larry", "Bird", [Player.POSITION_SMALL_FORWARD, Player.POSITION_POWER_FORWARD], 83, "Free Agency");
    this.add("Larry", "Bird", [Player.POSITION_SMALL_FORWARD, Player.POSITION_POWER_FORWARD], 92, "Free Agency");
    this.add("Larry", "Bird", [Player.POSITION_SMALL_FORWARD, Player.POSITION_POWER_FORWARD], 98, "Boston Celtics All-Time");
    this.add("Larry", "Hughes", [Player.POSITION_POINT_GUARD], 81, "Cleveland Cavaliers '06-'07");
    this.add("Larry", "Johnson", [Player.POSITION_POWER_FORWARD, Player.POSITION_SMALL_FORWARD], 84, "Charlotte Hornets '92-'93");
    this.add("Larry", "Johnson", [Player.POSITION_POWER_FORWARD, Player.POSITION_SMALL_FORWARD], 88, "Charlotte Hornets All-Time");
    this.add("Larry", "Kenon", [Player.POSITION_SMALL_FORWARD], 88, "San Antonio Spurs All-Time");
    this.add("Larry", "Nance", [Player.POSITION_POWER_FORWARD, Player.POSITION_SMALL_FORWARD], 85, "Cleveland Cavaliers '89-'90");
    this.add("Larry", "Nance", [Player.POSITION_POWER_FORWARD, Player.POSITION_SMALL_FORWARD], 88, "Cleveland Cavaliers All-Time");
    this.add("Latrell", "Sprewell", [Player.POSITION_SMALL_FORWARD], 84, "New York Knicks '98-'99");
    this.add("LeBron", "James", [Player.POSITION_SMALL_FORWARD, Player.POSITION_POWER_FORWARD], 96, "Los Angeles Lakers All-Time");
    this.add("LeBron", "James", [Player.POSITION_SMALL_FORWARD, Player.POSITION_POWER_FORWARD], 99, "Cleveland Cavaliers All-Time");
    this.add("LeBron", "James", [Player.POSITION_SMALL_FORWARD, Player.POSITION_POWER_FORWARD], 99, "Miami Heat All-Time");
    this.add("LeBron", "James", [Player.POSITION_SMALL_FORWARD], 84, "Free Agency");
    this.add("LeBron", "James", [Player.POSITION_SMALL_FORWARD, Player.POSITION_POWER_FORWARD], 99, "Free Agency");
    this.add("Lionel", "Hollins", [Player.POSITION_POINT_GUARD, Player.POSITION_SHOOTING_GUARD], 84, "Free Agency");
    this.add("Lonzo", "Ball", [Player.POSITION_POINT_GUARD, Player.POSITION_SHOOTING_GUARD], 82, "New Orleans Pelicans All-Time");
    this.add("Lou", "Hudson", [Player.POSITION_SMALL_FORWARD, Player.POSITION_SHOOTING_GUARD], 86, "Free Agency");
    this.add("Lou", "Hudson", [Player.POSITION_SMALL_FORWARD, Player.POSITION_SHOOTING_GUARD], 91, "Atlanta Hawks All-Time");
    this.add("Louie", "Dampier", [Player.POSITION_POINT_GUARD], 89, "San Antonio Spurs All-Time");
    this.add("Luka", "Doncic", [Player.POSITION_POINT_GUARD, Player.POSITION_SHOOTING_GUARD], 94, "Dallas Mavericks All-Time");
    this.add("Luol", "Deng", [Player.POSITION_SMALL_FORWARD], 84, "Chicago Bulls '10-'11");
    this.add("Magic", "Johnson", [Player.POSITION_POINT_GUARD, Player.POSITION_SHOOTING_GUARD], 92, "Los Angeles Lakers '90-'91");
    this.add("Magic", "Johnson", [Player.POSITION_POINT_GUARD, Player.POSITION_SHOOTING_GUARD], 99, "Los Angeles Lakers All-Time");
    this.add("Mahmoud", "Abdul-Rauf", [Player.POSITION_POINT_GUARD], 84, "Denver Nuggets '93-'94");
    this.add("Mahmoud", "Abdul-Rauf", [Player.POSITION_POINT_GUARD], 89, "Denver Nuggets All-Time");
    this.add("Manu", "Ginobili", [Player.POSITION_SHOOTING_GUARD, Player.POSITION_SMALL_FORWARD], 83, "San Antonio Spurs '13-'14");
    this.add("Manu", "Ginobili", [Player.POSITION_SHOOTING_GUARD, Player.POSITION_SMALL_FORWARD], 87, "San Antonio Spurs '04-'05");
    this.add("Manu", "Ginobili", [Player.POSITION_SHOOTING_GUARD, Player.POSITION_SMALL_FORWARD], 90, "San Antonio Spurs All-Time");
    this.add("Marc", "Gasol", [Player.POSITION_CENTER], 89, "Memphis Grizzlies '12-'13");
    this.add("Marc", "Gasol", [Player.POSITION_CENTER], 93, "Memphis Grizzlies All-Time");
    this.add("Marcus", "Camby", [Player.POSITION_CENTER], 85, "Denver Nuggets All-Time");
    this.add("Mark", "Aguirre", [Player.POSITION_SMALL_FORWARD, Player.POSITION_POWER_FORWARD], 88, "Dallas Mavericks All-Time");
    this.add("Mark", "Aguirre", [Player.POSITION_SMALL_FORWARD, Player.POSITION_SHOOTING_GUARD], 82, "Detroit Pistons '88-'89");
    this.add("Mark", "Eaton", [Player.POSITION_CENTER], 82, "Free Agency");
    this.add("Mark", "Eaton", [Player.POSITION_CENTER], 89, "Utah Jazz All-Time");
    this.add("Mark", "Jackson", [Player.POSITION_POINT_GUARD], 82, "Free Agency");
    this.add("Mark", "Jackson", [Player.POSITION_POINT_GUARD], 85, "Indiana Pacers All-Time");
    this.add("Mark", "Price", [Player.POSITION_POINT_GUARD], 89, "Cleveland Cavaliers '89-'90");
    this.add("Mark", "Price", [Player.POSITION_POINT_GUARD], 93, "Cleveland Cavaliers All-Time");
    this.add("Marques", "Johnson", [Player.POSITION_SMALL_FORWARD, Player.POSITION_SHOOTING_GUARD], 92, "Milwaukee Bucks All-Time");
    this.add("Maurice", "Cheeks", [Player.POSITION_POINT_GUARD], 83, "Free Agency");
    this.add("Maurice", "Cheeks", [Player.POSITION_POINT_GUARD], 86, "Philadelphia 76ers All-Time");
    this.add("Maurice", "Lucas", [Player.POSITION_POWER_FORWARD, Player.POSITION_SMALL_FORWARD], 88, "Free Agency");
    this.add("Maurice", "Lucas", [Player.POSITION_POWER_FORWARD, Player.POSITION_SMALL_FORWARD], 90, "Portland Trail Blazers All-Time");
    this.add("Mel", "Daniels", [Player.POSITION_POWER_FORWARD], 94, "Indiana Pacers All-Time");
    this.add("Michael", "Cooper", [Player.POSITION_SHOOTING_GUARD], 86, "Los Angeles Lakers All-Time");
    this.add("Michael", "Finley", [Player.POSITION_SMALL_FORWARD, Player.POSITION_SHOOTING_GUARD], 82, "Dallas Mavericks '02-'03");
    this.add("Michael", "Finley", [Player.POSITION_SMALL_FORWARD, Player.POSITION_SHOOTING_GUARD], 88, "Dallas Mavericks All-Time");
    this.add("Michael", "Jordan", [Player.POSITION_SHOOTING_GUARD, Player.POSITION_SMALL_FORWARD], 84, "Free Agency");;
    this.add("Michael", "Jordan", [Player.POSITION_SHOOTING_GUARD, Player.POSITION_SMALL_FORWARD], 91, "Chicago Bulls '85-'86");
    this.add("Michael", "Jordan", [Player.POSITION_SHOOTING_GUARD, Player.POSITION_SMALL_FORWARD], 99, "Chicago Bulls All-Time");
    this.add("Michael", "Redd", [Player.POSITION_SHOOTING_GUARD, Player.POSITION_SMALL_FORWARD], 88, "Milwaukee Bucks All-Time");
    this.add("Micheal Ray", "Richardson", [Player.POSITION_POINT_GUARD, Player.POSITION_SHOOTING_GUARD], 89, "New York Knicks All-Time");
    this.add("Mike", "Bibby", [Player.POSITION_POINT_GUARD], 80, "Free Agency");
    this.add("Mike", "Bibby", [Player.POSITION_POINT_GUARD], 83, "Sacramento Kings '01-'02");
    this.add("Mike", "Bibby", [Player.POSITION_POINT_GUARD], 86, "Memphis Grizzlies All-Time");
    this.add("Mike", "Bibby", [Player.POSITION_POINT_GUARD], 88, "Sacramento Kings All-Time");
    this.add("Mike", "Conley", [Player.POSITION_POINT_GUARD], 86, "Memphis Grizzlies '12-'13");
    this.add("Mike", "Conley", [Player.POSITION_POINT_GUARD], 88, "Memphis Grizzlies All-Time");
    this.add("Mike", "Miller", [Player.POSITION_SHOOTING_GUARD, Player.POSITION_SMALL_FORWARD], 82, "Memphis Grizzlies All-Time");
    this.add("Mike", "Mitchell", [Player.POSITION_SMALL_FORWARD], 84, "Free Agency");
    this.add("Mitch", "Richmond", [Player.POSITION_SHOOTING_GUARD, Player.POSITION_SMALL_FORWARD], 85, "Golden State Warriors '90-'91");
    this.add("Mitch", "Richmond", [Player.POSITION_SHOOTING_GUARD, Player.POSITION_SMALL_FORWARD], 89, "Free Agency");
    this.add("Mitch", "Richmond", [Player.POSITION_SHOOTING_GUARD, Player.POSITION_SMALL_FORWARD], 94, "Sacramento Kings All-Time");
    this.add("Mo", "Williams", [Player.POSITION_POINT_GUARD], 83, "Free Agency");
    this.add("Monta", "Ellis", [Player.POSITION_SHOOTING_GUARD, Player.POSITION_POINT_GUARD], 82, "Golden State Warriors '06-'07");
    this.add("Monta", "Ellis", [Player.POSITION_SHOOTING_GUARD, Player.POSITION_POINT_GUARD], 88, "Free Agency");
    this.add("Morris", "Peterson", [Player.POSITION_SHOOTING_GUARD, Player.POSITION_SMALL_FORWARD], 85, "Toronto Raptors All-Time");
    this.add("Moses", "Malone", [Player.POSITION_CENTER], 89, "Washington Wizards All-Time");
    this.add("Moses", "Malone", [Player.POSITION_CENTER], 94, "Free Agency");
    this.add("Moses", "Malone", [Player.POSITION_CENTER], 97, "Houston Rockets All-Time");
    this.add("Muggsy", "Bogues", [Player.POSITION_POINT_GUARD], 81, "Charlotte Hornets '92-'93");
    this.add("Muggsy", "Bogues", [Player.POSITION_POINT_GUARD], 86, "Charlotte Hornets All-Time");
    this.add("Nate", "Archibald", [Player.POSITION_POINT_GUARD], 95, "Sacramento Kings All-Time");
    this.add("Nate", "Thurmond", [Player.POSITION_CENTER], 92, "Golden State Warriors All-Time");
    this.add("Nick", "Anderson", [Player.POSITION_SHOOTING_GUARD, Player.POSITION_SMALL_FORWARD], 83, "Orlando Magic '94-'95");
    this.add("Nick", "Anderson", [Player.POSITION_SHOOTING_GUARD, Player.POSITION_SMALL_FORWARD], 85, "Orlando Magic All-Time");
    this.add("Nick", "Van Exel", [Player.POSITION_POINT_GUARD], 83, "Los Angeles Lakers '97-'98");
    this.add("Nicolas", "Batum", [Player.POSITION_SMALL_FORWARD, Player.POSITION_SHOOTING_GUARD], 83, "Portland Trail Blazers '09-'10");
    this.add("Nikola", "Jokic", [Player.POSITION_CENTER], 95, "Denver Nuggets All-Time");
    this.add("Nikola", "Vucevic", [Player.POSITION_CENTER], 86, "Orlando Magic All-Time");
    this.add("Norm", "Nixon", [Player.POSITION_POINT_GUARD], 86, "Los Angeles Clippers All-Time");
    this.add("Orlando", "Woolridge", [Player.POSITION_SMALL_FORWARD], 83, "Chicago Bulls '85-'86");
    this.add("Oscar", "Robertson", [Player.POSITION_POINT_GUARD], 83, "Free Agency");
    this.add("Oscar", "Robertson", [Player.POSITION_POINT_GUARD], 93, "Milwaukee Bucks '70-'71");
    this.add("Oscar", "Robertson", [Player.POSITION_POINT_GUARD], 96, "Milwaukee Bucks All-Time");
    this.add("Oscar", "Robertson", [Player.POSITION_POINT_GUARD], 98, "Sacramento Kings All-Time");
    this.add("Otis", "Birdsong", [Player.POSITION_SHOOTING_GUARD], 86, "Brooklyn Nets All-Time");
    this.add("Otis", "Birdsong", [Player.POSITION_SHOOTING_GUARD], 88, "Sacramento Kings All-Time");
    this.add("Otis", "Thorpe", [Player.POSITION_POWER_FORWARD, Player.POSITION_CENTER], 80, "Houston Rockets '93-'94");
    this.add("Otis", "Thorpe", [Player.POSITION_POWER_FORWARD], 86, "Houston Rockets All-Time");
    this.add("P.J.", "Brown", [Player.POSITION_CENTER], 84, "Miami Heat '96-'97");
    this.add("Pascal", "Siakam", [Player.POSITION_POWER_FORWARD], 88, "Toronto Raptors All-Time");
    this.add("Patrick", "Ewing", [Player.POSITION_CENTER], 84, "New York Knicks '98-'99");
    this.add("Patrick", "Ewing", [Player.POSITION_CENTER], 90, "New York Knicks '94-'95");
    this.add("Patrick", "Ewing", [Player.POSITION_CENTER], 95, "New York Knicks All-Time");
    this.add("Pau", "Gasol", [Player.POSITION_POWER_FORWARD, Player.POSITION_CENTER], 90, "Memphis Grizzlies '05-'06");
    this.add("Paul", "Arizin", [Player.POSITION_SMALL_FORWARD, Player.POSITION_SHOOTING_GUARD], 91, "Golden State Warriors All-Time");
    this.add("Paul", "George", [Player.POSITION_SMALL_FORWARD, Player.POSITION_SHOOTING_GUARD], 93, "Indiana Pacers All-Time");
    this.add("Paul", "George", [Player.POSITION_SMALL_FORWARD], 88, "Free Agency");
    this.add("Paul", "George", [Player.POSITION_SMALL_FORWARD], 94, "Oklahoma City Thunder All-Time");
    this.add("Paul", "Millsap", [Player.POSITION_POWER_FORWARD, Player.POSITION_SMALL_FORWARD], 87, "Atlanta Hawks All-Time");
    this.add("Paul", "Pierce", [Player.POSITION_SMALL_FORWARD, Player.POSITION_POWER_FORWARD], 94, "Boston Celtics All-Time");
    this.add("Paul", "Pressey", [Player.POSITION_SHOOTING_GUARD, Player.POSITION_SMALL_FORWARD], 84, "Milwaukee Bucks All-Time");
    this.add("Paul", "Pressey", [Player.POSITION_SHOOTING_GUARD, Player.POSITION_SMALL_FORWARD], 86, "Milwaukee Bucks '84-'85");
    this.add("Paul", "Westphal", [Player.POSITION_SHOOTING_GUARD, Player.POSITION_POINT_GUARD], 89, "Phoenix Suns All-Time");
    this.add("Peja", "Stojakovic", [Player.POSITION_SHOOTING_GUARD], 82, "New Orleans Pelicans All-Time");
    this.add("Peja", "Stojakovic", [Player.POSITION_SMALL_FORWARD], 88, "Sacramento Kings All-Time");
    this.add("Penny", "Hardaway", [Player.POSITION_POINT_GUARD, Player.POSITION_SHOOTING_GUARD], 85, "Orlando Magic '94-'95");
    this.add("Penny", "Hardaway", [Player.POSITION_POINT_GUARD, Player.POSITION_SHOOTING_GUARD], 95, "Orlando Magic All-Time");
    this.add("Pete", "Maravich", [Player.POSITION_SHOOTING_GUARD], 87, "Atlanta Hawks All-Time");
    this.add("Pete", "Maravich", [Player.POSITION_SHOOTING_GUARD], 95, "Utah Jazz All-Time");
    this.add("Phil", "Chenier", [Player.POSITION_SHOOTING_GUARD, Player.POSITION_POINT_GUARD], 80, "Free Agency");
    this.add("Phil", "Chenier", [Player.POSITION_SHOOTING_GUARD, Player.POSITION_POINT_GUARD], 88, "Washington Wizards All-Time");
    this.add("Purvis", "Short", [Player.POSITION_SMALL_FORWARD, Player.POSITION_SHOOTING_GUARD], 86, "Golden State Warriors All-Time");
    this.add("R.J.", "Barrett", [Player.POSITION_SMALL_FORWARD, Player.POSITION_SHOOTING_GUARD], 85, "New York Knicks");
    this.add("Rajon", "Rondo", [Player.POSITION_POINT_GUARD], 85, "Boston Celtics '07-'08");
    this.add("Rajon", "Rondo", [Player.POSITION_POINT_GUARD], 90, "Boston Celtics All-Time");
    this.add("Ralph", "Sampson", [Player.POSITION_CENTER], 89, "Houston Rockets All-Time");
    this.add("Rashard", "Lewis", [Player.POSITION_POWER_FORWARD, Player.POSITION_SMALL_FORWARD], 86, "Orlando Magic All-Time");
    this.add("Rashard", "Lewis", [Player.POSITION_POWER_FORWARD, Player.POSITION_SMALL_FORWARD], 89, "Oklahoma City Thunder All-Time");
    this.add("Rasheed", "Wallace", [Player.POSITION_POWER_FORWARD, Player.POSITION_CENTER], 86, "Detroit Pistons '03-'04");
    this.add("Ray", "Allen", [Player.POSITION_SHOOTING_GUARD, Player.POSITION_SMALL_FORWARD], 88, "Boston Celtics All-Time");
    this.add("Ray", "Allen", [Player.POSITION_SHOOTING_GUARD, Player.POSITION_SMALL_FORWARD], 91, "Milwaukee Bucks All-Time");
    this.add("Ray", "Allen", [Player.POSITION_SHOOTING_GUARD, Player.POSITION_SMALL_FORWARD], 95, "Oklahoma City Thunder All-Time");
    this.add("Reggie", "Lewis", [Player.POSITION_SHOOTING_GUARD, Player.POSITION_SMALL_FORWARD], 87, "Free Agency");
    this.add("Reggie", "Miller", [Player.POSITION_SHOOTING_GUARD, Player.POSITION_SMALL_FORWARD], 93, "Free Agency");
    this.add("Reggie", "Miller", [Player.POSITION_SHOOTING_GUARD], 88, "Free Agency");
    this.add("Reggie", "Theus", [Player.POSITION_SHOOTING_GUARD, Player.POSITION_POINT_GUARD], 86, "Chicago Bulls All-Time");
    this.add("Richard", "Hamilton", [Player.POSITION_SHOOTING_GUARD, Player.POSITION_SMALL_FORWARD], 89, "Detroit Pistons All-Time");
    this.add("Richard", "Jefferson", [Player.POSITION_SMALL_FORWARD, Player.POSITION_SHOOTING_GUARD], 87, "Brooklyn Nets All-Time");
    this.add("Richie", "Guerin", [Player.POSITION_SHOOTING_GUARD, Player.POSITION_POINT_GUARD], 92, "New York Knicks All-Time");
    this.add("Rick", "Barry", [Player.POSITION_SMALL_FORWARD, Player.POSITION_POWER_FORWARD], 95, "Golden State Warriors All-Time");
    this.add("Rick", "Fox", [Player.POSITION_SMALL_FORWARD], 80, "Los Angeles Lakers '97-'98");
    this.add("Rickey", "Green", [Player.POSITION_POINT_GUARD], 80, "Free Agency");
    this.add("Ricky", "Rubio", [Player.POSITION_POINT_GUARD], 85, "Minnesota Timberwolves All-Time");
    this.add("Rik", "Smits", [Player.POSITION_CENTER], 83, "Free Agency");
    this.add("Rik", "Smits", [Player.POSITION_CENTER], 87, "Indiana Pacers All-Time");
    this.add("Robert", "Parish", [Player.POSITION_CENTER], 86, "Boston Celtics '85-'86");
    this.add("Robert", "Parish", [Player.POSITION_CENTER], 93, "Boston Celtics All-Time");
    this.add("Rolando", "Blackman", [Player.POSITION_SHOOTING_GUARD], 85, "Free Agency");
    this.add("Rolando", "Blackman", [Player.POSITION_SHOOTING_GUARD], 88, "Dallas Mavericks All-Time");
    this.add("Ron", "Artest", [Player.POSITION_SMALL_FORWARD], 81, "Free Agency");
    this.add("Ron", "Harper", [Player.POSITION_SHOOTING_GUARD, Player.POSITION_POINT_GUARD], 80, "Free Agency");
    this.add("Ron", "Harper", [Player.POSITION_SHOOTING_GUARD, Player.POSITION_POINT_GUARD], 89, "Los Angeles Clippers All-Time");
    this.add("Rony", "Seikaly", [Player.POSITION_CENTER], 82, "Free Agency");
    this.add("Rony", "Seikaly", [Player.POSITION_CENTER], 86, "Miami Heat All-Time");
    this.add("Roy", "Hibbert", [Player.POSITION_CENTER], 86, "Indiana Pacers All-Time");
    this.add("Rudy", "Gay", [Player.POSITION_SMALL_FORWARD], 83, "Memphis Grizzlies All-Time");
    this.add("Rudy", "Gobert", [Player.POSITION_CENTER], 88, "Utah Jazz All-Time");
    this.add("Rudy", "Larusso", [Player.POSITION_POWER_FORWARD], 82, "Los Angeles Lakers '64-'65");
    this.add("Rudy", "Tomjanovich", [Player.POSITION_SMALL_FORWARD, Player.POSITION_POWER_FORWARD], 88, "Houston Rockets All-Time");
    this.add("Russell", "Westbrook", [Player.POSITION_POINT_GUARD], 89, "Oklahoma City Thunder '11-'12");
    this.add("Russell", "Westbrook", [Player.POSITION_POINT_GUARD], 95, "Oklahoma City Thunder All-Time");
    this.add("Sam", "Cassell", [Player.POSITION_POINT_GUARD], 82, "Free Agency");
    this.add("Sam", "Cassell", [Player.POSITION_POINT_GUARD], 88, "Minnesota Timberwolves All-Time");
    this.add("Sam", "Jones", [Player.POSITION_SHOOTING_GUARD, Player.POSITION_SMALL_FORWARD], 88, "Boston Celtics '64-'65");
    this.add("Sam", "Jones", [Player.POSITION_SHOOTING_GUARD, Player.POSITION_SMALL_FORWARD], 92, "Boston Celtics All-Time");
    this.add("Scott", "Skiles", [Player.POSITION_POINT_GUARD], 85, "Orlando Magic All-Time");
    this.add("Scottie", "Barnes", [Player.POSITION_POWER_FORWARD, Player.POSITION_SMALL_FORWARD], 83, "Toronto Raptors");
    this.add("Scottie", "Pippen", [Player.POSITION_SMALL_FORWARD, Player.POSITION_SHOOTING_GUARD], 82, "Chicago Bulls '88-'89");
    this.add("Scottie", "Pippen", [Player.POSITION_SMALL_FORWARD, Player.POSITION_SHOOTING_GUARD], 85, "Portland Trail Blazers '99-'00");
    this.add("Scottie", "Pippen", [Player.POSITION_SMALL_FORWARD, Player.POSITION_SHOOTING_GUARD], 89, "Chicago Bulls '90-'91");
    this.add("Scottie", "Pippen", [Player.POSITION_SMALL_FORWARD, Player.POSITION_SHOOTING_GUARD], 95, "Chicago Bulls '95-'96");
    this.add("Scottie", "Pippen", [Player.POSITION_SMALL_FORWARD, Player.POSITION_SHOOTING_GUARD], 97, "Chicago Bulls All-Time");
    this.add("Sean", "Elliott", [Player.POSITION_SMALL_FORWARD, Player.POSITION_SHOOTING_GUARD], 87, "San Antonio Spurs All-Time");
    this.add("Serge", "Ibaka", [Player.POSITION_POWER_FORWARD, Player.POSITION_CENTER], 81, "Toronto Raptors All-Time");
    this.add("Serge", "Ibaka", [Player.POSITION_POWER_FORWARD, Player.POSITION_CENTER], 87, "Oklahoma City Thunder '11-'12");
    this.add("Shai", "Gilgeous-Alexander", [Player.POSITION_POINT_GUARD, Player.POSITION_SHOOTING_GUARD], 88, "Oklahoma City Thunder");
    this.add("Shane", "Battier", [Player.POSITION_SMALL_FORWARD, Player.POSITION_SHOOTING_GUARD], 85, "Memphis Grizzlies All-Time");
    this.add("Shaquille", "O'Neal", [Player.POSITION_CENTER], 83, "Free Agency");
    this.add("Shaquille", "O'Neal", [Player.POSITION_CENTER], 89, "Miami Heat All-Time");
    this.add("Shaquille", "O'Neal", [Player.POSITION_CENTER], 93, "Orlando Magic All-Time");
    this.add("Shaquille", "O'Neal", [Player.POSITION_CENTER], 98, "Los Angeles Lakers All-Time");
    this.add("Shareef", "Abdur-Rahim", [Player.POSITION_POWER_FORWARD, Player.POSITION_SMALL_FORWARD], 84, "Free Agency");
    this.add("Shareef", "Abdur-Rahim", [Player.POSITION_POWER_FORWARD, Player.POSITION_SMALL_FORWARD], 86, "Memphis Grizzlies All-Time");
    this.add("Shawn", "Bradley", [Player.POSITION_CENTER], 82, "Dallas Mavericks All-Time");
    this.add("Shawn", "Kemp", [Player.POSITION_POWER_FORWARD, Player.POSITION_CENTER], 90, "Oklahoma City Thunder All-Time");
    this.add("Shawn", "Marion", [Player.POSITION_SMALL_FORWARD, Player.POSITION_POWER_FORWARD], 83, "Dallas Mavericks '10-'11");
    this.add("Shawn", "Marion", [Player.POSITION_SMALL_FORWARD, Player.POSITION_POWER_FORWARD], 87, "Phoenix Suns '04-'05");
    this.add("Shawn", "Marion", [Player.POSITION_SMALL_FORWARD, Player.POSITION_POWER_FORWARD], 91, "Phoenix Suns All-Time");
    this.add("Sidney", "Moncrief", [Player.POSITION_SHOOTING_GUARD, Player.POSITION_POINT_GUARD], 90, "Milwaukee Bucks '84-'85");
    this.add("Sidney", "Moncrief", [Player.POSITION_SHOOTING_GUARD, Player.POSITION_POINT_GUARD], 93, "Milwaukee Bucks All-Time");
    this.add("Sidney", "Wicks", [Player.POSITION_POWER_FORWARD, Player.POSITION_SMALL_FORWARD], 88, "Portland Trail Blazers All-Time");
    this.add("Sleepy", "Floyd", [Player.POSITION_POINT_GUARD], 88, "Golden State Warriors All-Time");
    this.add("Spencer", "Haywood", [Player.POSITION_POWER_FORWARD], 89, "Oklahoma City Thunder All-Time");
    this.add("Stephen", "Curry", [Player.POSITION_POINT_GUARD], 97, "Golden State Warriors All-Time");
    this.add("Stephen", "Jackson", [Player.POSITION_SMALL_FORWARD], 83, "Charlotte Hornets All-Time");
    this.add("Stephon", "Marbury", [Player.POSITION_POINT_GUARD], 81, "Free Agency");
    this.add("Stephon", "Marbury", [Player.POSITION_POINT_GUARD], 86, "Phoenix Suns '02-'03");
    this.add("Stephon", "Marbury", [Player.POSITION_POINT_GUARD], 88, "Minnesota Timberwolves All-Time");
    this.add("Steve", "Francis", [Player.POSITION_POINT_GUARD, Player.POSITION_SHOOTING_GUARD], 85, "Orlando Magic All-Time");
    this.add("Steve", "Francis", [Player.POSITION_POINT_GUARD, Player.POSITION_SHOOTING_GUARD], 88, "Houston Rockets All-Time");
    this.add("Steve", "Nash", [Player.POSITION_POINT_GUARD], 87, "Dallas Mavericks All-Time");
    this.add("Steve", "Nash", [Player.POSITION_POINT_GUARD], 95, "Phoenix Suns '04-'05");
    this.add("Steve", "Nash", [Player.POSITION_POINT_GUARD], 97, "Phoenix Suns All-Time");
    this.add("Steve", "Smith", [Player.POSITION_SHOOTING_GUARD, Player.POSITION_SMALL_FORWARD], 82, "Free Agency");
    this.add("Steve", "Smith", [Player.POSITION_SHOOTING_GUARD, Player.POSITION_SMALL_FORWARD], 85, "Miami Heat All-Time");
    this.add("Steve", "Smith", [Player.POSITION_SHOOTING_GUARD, Player.POSITION_SMALL_FORWARD], 87, "Atlanta Hawks All-Time");
    this.add("Steven", "Adams", [Player.POSITION_CENTER], 83, "Memphis Grizzlies");
    this.add("Swen", "Nater", [Player.POSITION_CENTER], 88, "Los Angeles Clippers All-Time");
    this.add("Taj", "Gibson", [Player.POSITION_POWER_FORWARD], 80, "Free Agency");
    this.add("Tayshaun", "Prince", [Player.POSITION_SMALL_FORWARD, Player.POSITION_POWER_FORWARD], 81, "Free Agency");
    this.add("Terrell", "Brandon", [Player.POSITION_POINT_GUARD], 86, "Minnesota Timberwolves All-Time");
    this.add("Terrell", "Brandon", [Player.POSITION_POINT_GUARD], 87, "Cleveland Cavaliers All-Time");
    this.add("Terry", "Cummings", [Player.POSITION_POWER_FORWARD, Player.POSITION_SMALL_FORWARD], 88, "Milwaukee Bucks '84-'85");
    this.add("Terry", "Porter", [Player.POSITION_POINT_GUARD], 85, "Portland Trail Blazers '90-'91");
    this.add("Terry", "Porter", [Player.POSITION_POINT_GUARD], 88, "Portland Trail Blazers All-Time");
    this.add("Thurl", "Bailey", [Player.POSITION_POWER_FORWARD, Player.POSITION_SMALL_FORWARD], 86, "Utah Jazz All-Time");
    this.add("Tim", "Duncan", [Player.POSITION_POWER_FORWARD, Player.POSITION_CENTER], 88, "San Antonio Spurs '97-'98");
    this.add("Tim", "Duncan", [Player.POSITION_POWER_FORWARD, Player.POSITION_CENTER], 98, "San Antonio Spurs All-Time");
    this.add("Tim", "Hardaway", [Player.POSITION_POINT_GUARD], 87, "Golden State Warriors '90-'91");
    this.add("Tim", "Hardaway", [Player.POSITION_POINT_GUARD], 89, "Miami Heat All-Time");
    this.add("Tim", "Hardaway", [Player.POSITION_POINT_GUARD], 91, "Golden State Warriors All-Time");
    this.add("Tom", "Chambers", [Player.POSITION_POWER_FORWARD, Player.POSITION_SMALL_FORWARD], 89, "Phoenix Suns All-Time");
    this.add("Tom", "Gugliotta", [Player.POSITION_POWER_FORWARD, Player.POSITION_SMALL_FORWARD], 84, "Free Agency");
    this.add("Tom", "Gugliotta", [Player.POSITION_POWER_FORWARD, Player.POSITION_SMALL_FORWARD], 88, "Minnesota Timberwolves All-Time");
    this.add("Tom", "Heinsohn", [Player.POSITION_POWER_FORWARD, Player.POSITION_SMALL_FORWARD], 81, "Boston Celtics '64-'65");
    this.add("Tom", "Heinsohn", [Player.POSITION_POWER_FORWARD, Player.POSITION_SMALL_FORWARD], 89, "Boston Celtics All-Time");
    this.add("Tom", "Sanders", [Player.POSITION_POWER_FORWARD, Player.POSITION_SMALL_FORWARD], 85, "Boston Celtics '64-'65");
    this.add("Toni", "Kukoc", [Player.POSITION_SMALL_FORWARD, Player.POSITION_POWER_FORWARD], 83, "Chicago Bulls '95-'96");
    this.add("Toni", "Kukoc", [Player.POSITION_SMALL_FORWARD, Player.POSITION_POWER_FORWARD], 85, "Chicago Bulls All-Time");
    this.add("Tony", "Allen", [Player.POSITION_SHOOTING_GUARD, Player.POSITION_SMALL_FORWARD], 85, "Memphis Grizzlies All-Time");
    this.add("Tony", "Parker", [Player.POSITION_POINT_GUARD], 86, "San Antonio Spurs '13-'14");
    this.add("Tony", "Parker", [Player.POSITION_POINT_GUARD], 90, "San Antonio Spurs '04-'05");
    this.add("Tony", "Parker", [Player.POSITION_POINT_GUARD], 94, "San Antonio Spurs All-Time");
    this.add("Tracy", "McGrady", [Player.POSITION_SHOOTING_GUARD], 83, "Toronto Raptors '99-'00");
    this.add("Tracy", "McGrady", [Player.POSITION_SHOOTING_GUARD], 85, "Toronto Raptors All-Time");
    this.add("Tracy", "McGrady", [Player.POSITION_SHOOTING_GUARD], 92, "Houston Rockets All-Time");
    this.add("Tracy", "McGrady", [Player.POSITION_SHOOTING_GUARD], 95, "Orlando Magic All-Time");
    this.add("Trae", "Young", [Player.POSITION_POINT_GUARD], 88, "Atlanta Hawks All-Time");
    this.add("Trae", "Young", [Player.POSITION_POINT_GUARD], 91, "Atlanta Hawks");
    this.add("Tree", "Rollins", [Player.POSITION_CENTER], 84, "Atlanta Hawks All-Time");
    this.add("Trevor", "Ariza", [Player.POSITION_SMALL_FORWARD, Player.POSITION_POWER_FORWARD], 80, "New Orleans Pelicans All-Time");
    this.add("Truck", "Robinson", [Player.POSITION_POWER_FORWARD], 86, "Utah Jazz All-Time");
    this.add("Tyler", "Herro", [Player.POSITION_SHOOTING_GUARD], 85, "Miami Heat");
    this.add("Tyson", "Chandler", [Player.POSITION_CENTER], 82, "Free Agency");
    this.add("Tyson", "Chandler", [Player.POSITION_CENTER], 84, "Dallas Mavericks '10-'11");
    this.add("Tyson", "Chandler", [Player.POSITION_CENTER], 87, "New York Knicks '11-'12");
    this.add("Udonis", "Haslem", [Player.POSITION_POWER_FORWARD], 84, "Miami Heat All-Time");
    this.add("Vernon", "Maxwell", [Player.POSITION_SHOOTING_GUARD, Player.POSITION_SMALL_FORWARD], 83, "Houston Rockets All-Time");
    this.add("Victor", "Oladipo", [Player.POSITION_SHOOTING_GUARD], 88, "Indiana Pacers All-Time");
    this.add("Vin", "Baker", [Player.POSITION_POWER_FORWARD], 87, "Milwaukee Bucks All-Time");
    this.add("Vince", "Carter", [Player.POSITION_SMALL_FORWARD, Player.POSITION_SHOOTING_GUARD], 89, "Brooklyn Nets All-Time");
    this.add("Vince", "Carter", [Player.POSITION_SMALL_FORWARD, Player.POSITION_SHOOTING_GUARD], 94, "Toronto Raptors '99-'00");
    this.add("Vince", "Carter", [Player.POSITION_SMALL_FORWARD, Player.POSITION_SHOOTING_GUARD], 96, "Toronto Raptors All-Time");
    this.add("Vinnie", "Johnson", [Player.POSITION_POINT_GUARD], 82, "Detroit Pistons '88-'89");
    this.add("Vlade", "Divac", [Player.POSITION_CENTER], 82, "Free Agency");
    this.add("Vlade", "Divac", [Player.POSITION_CENTER], 85, "Charlotte Hornets All-Time");
    this.add("Vlade", "Divac", [Player.POSITION_CENTER], 88, "Sacramento Kings All-Time");
    this.add("Wally", "Szczerbiak", [Player.POSITION_SMALL_FORWARD, Player.POSITION_SHOOTING_GUARD], 85, "Minnesota Timberwolves All-Time");
    this.add("Walt", "Bellamy", [Player.POSITION_CENTER], 80, "Free Agency");
    this.add("Walt", "Frazier", [Player.POSITION_POINT_GUARD], 93, "New York Knicks '71-'72");
    this.add("Walt", "Frazier", [Player.POSITION_POINT_GUARD], 97, "New York Knicks All-Time");
    this.add("Walter", "Davis", [Player.POSITION_SHOOTING_GUARD, Player.POSITION_SMALL_FORWARD], 90, "Phoenix Suns All-Time");
    this.add("Wayne", "Embry", [Player.POSITION_POWER_FORWARD], 91, "Sacramento Kings All-Time");
    this.add("Wes", "Unseld", [Player.POSITION_POWER_FORWARD], 82, "Free Agency");
    this.add("Wes", "Unseld", [Player.POSITION_POWER_FORWARD], 96, "Washington Wizards All-Time");
    this.add("Willis", "Reed", [Player.POSITION_POWER_FORWARD], 83, "New York Knicks '71-'72");
    this.add("Willis", "Reed", [Player.POSITION_POWER_FORWARD], 94, "New York Knicks All-Time");
    this.add("Wilt", "Chamberlain", [Player.POSITION_CENTER], 91, "Los Angeles Lakers All-Time");
    this.add("Wilt", "Chamberlain", [Player.POSITION_CENTER], 93, "Philadelphia 76ers All-Time");
    this.add("Wilt", "Chamberlain", [Player.POSITION_CENTER], 98, "Golden State Warriors All-Time");
    this.add("World B.", "Free", [Player.POSITION_SHOOTING_GUARD, Player.POSITION_POINT_GUARD], 80, "Philadelphia 76ers '76-'77");
    this.add("World B.", "Free", [Player.POSITION_SHOOTING_GUARD, Player.POSITION_POINT_GUARD], 87, "Cleveland Cavaliers All-Time");
    this.add("World B.", "Free", [Player.POSITION_SHOOTING_GUARD, Player.POSITION_POINT_GUARD], 91, "Los Angeles Clippers All-Time");
    this.add("Xavier", "McDaniel", [Player.POSITION_SMALL_FORWARD, Player.POSITION_POWER_FORWARD], 87, "Oklahoma City Thunder All-Time");
    this.add("Yao", "Ming", [Player.POSITION_CENTER], 88, "Houston Rockets '07-'08");
    this.add("Yao", "Ming", [Player.POSITION_CENTER], 91, "Houston Rockets All-Time");
    this.add("Zach", "Lavine", [Player.POSITION_SHOOTING_GUARD], 86, "Chicago Bulls All-Time");
    this.add("Zach", "Lavine", [Player.POSITION_SHOOTING_GUARD], 89, "Chicago Bulls");
    this.add("Zach", "Randolph", [Player.POSITION_POWER_FORWARD], 86, "Portland Trail Blazers All-Time");
    this.add("Zach", "Randolph", [Player.POSITION_POWER_FORWARD], 89, "Memphis Grizzlies All-Time");
    this.add("Zion", "Williamson", [Player.POSITION_POWER_FORWARD], 88, "New Orleans Pelicans All-Time");
    this.add("Zydrunas", "Ilgauskas", [Player.POSITION_CENTER], 82, "Cleveland Cavaliers '06-'07");
    this.add("Zydrunas", "Ilgauskas", [Player.POSITION_CENTER], 88, "Cleveland Cavaliers All-Time");
}

PlayerCollection.prototype.reset = function() {
    this.clear();
    this.populate();
}

PlayerCollection.prototype.getRandomPlayer = function(positions, overalls, excludedPlayers) {
    let possiblePlayers = [];
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
                possiblePlayers.push(player);
            }
        }
    }

    return choice(possiblePlayers);
}

PlayerCollection.prototype.getRandomByTiers = function(overallGroups, positionGroups) {
    const selectedPlayers = [];
    const exclusionSet = new Set();
    for (let overallGroup of overallGroups) {
        const playersInOverall = [];
        for (let positionGroup of positionGroups) {
            const randomPlayer = this.getRandomPlayer(positionGroup, overallGroup, exclusionSet);
            const newPlayer = {
                firstName: randomPlayer.firstName, 
                lastName: randomPlayer.lastName,
                positions: randomPlayer.positions, 
                team: randomPlayer.team,
                overall: randomPlayer.overall,
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
