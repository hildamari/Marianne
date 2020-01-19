const { Command } = require('klasa');
const { MessageEmbed } = require('discord.js');

module.exports = class extends Command {

    constructor(...args) {
        super(...args, { 
            aliases: ['combat', 'arts'],
            description: 'Replies with information about specific combat arts from Fire Emblem Three Houses',
            extendedHelp: 'This command contains spoilers for Fire Emblem Three Houses!',
            usage: '<art:string>'
        });

        this.customizeResponse('art',
            'You must enter a valid combat art!');
    }

    verifyUnit(art) {
        const artEmbed = new MessageEmbed()

        let name = '', might, image = '', hit, crit, range, durCost = 0, desc = '', characters = []

        switch(art) {
            // Sword Combat Arts
            case 'Sunder':
            case 'sunder':
                name = "Sunder"
                might = 4
                hit = 'N/A'
                crit = 15
                range = 1
                durCost = 3
                desc = "-"
                image = 'https://i.imgur.com/DDO8L9u.png'
                characters = ['Ferdinand (C+)', 'Dimitri (C+)', 'Felix (C+)']
                break;
            case 'Wrath Strike':
            case 'wrath strike':
                name = "Wrath Strike"
                might = 5
                hit = 10
                crit = 'N/A'
                range = 1
                durCost = 3
                desc = "-"
                image = 'https://i.imgur.com/DDO8L9u.png'
                characters = ['Anyone with D rank in Swords']
                break;
            case 'Grounder':
            case 'grounder':
                name = "Grounder"
                might = 3
                hit = 20
                crit = 5
                range = 1
                durCost = 4
                desc = "Effective against Flying foes."
                image = 'https://i.imgur.com/DDO8L9u.png'
                characters = ['Anyone with C rank in Swords']
                break;
            case 'Hexblade':
            case 'hexblade':
                name = "Hexblade"
                might = 7
                hit = 10
                crit = "N/A"
                range = 1
                durCost = 3
                desc = "Deals magic-based damage."
                image = 'https://i.imgur.com/DDO8L9u.png'
                characters = ['Edelgard (A), Dorothea (C+), Ingrid (A), Manuela (C+), Anna (A)']
                break;
            case 'Windsweep':
            case 'windsweep':
                name = "Windsweep"
                might = 3
                hit = 20
                crit = 10
                range = 1
                durCost = 5
                desc = "Prevent enemy counter-attack."
                image = 'https://i.imgur.com/DDO8L9u.png'
                characters = ['Byleth (A), Dimitri (A), Jeritza (A)']
                break;
            case "Haze Slice":
            case "haze slice":
                name = "Haze Slice"
                might = 2
                hit = "N/A"
                crit = "N/A"
                range = 1
                durCost = 5
                desc = "Avoid +30."
                image = 'https://i.imgur.com/DDO8L9u.png'
                characters = ['Ignatz (C+), Seteth (C+), Jeritza (C+)']
                break;
            case "Subdue":
            case "subdue":
                name = "Subdue"
                might = 0
                hit = 20
                crit = "N/A"
                range = 1
                durCost = 3
                desc = "Leaves foe with at least 1 HP."
                image = 'https://i.imgur.com/DDO8L9u.png'
                characters = ['Anyone with Lord Class Mastery']
                break;
            case "Bane of Monsters":
            case "bane of monsters":
                name = "Bane of Monsters"
                might = 6
                hit = "N/A"
                crit = 10
                range = 1
                durCost = 4
                desc = "Effective against Monster foes."
                image = 'https://i.imgur.com/DDO8L9u.png'
                characters = ['Byleth (C+), Petra (C+), Claude (C+), Catherine (C+)']
                break;
            case "Finesse Blade":
            case "finesse blade":
                name = "Finesse Blade"
                might = 2
                hit = "N/A"
                crit = "N/A"
                range = 1
                durCost = 4
                desc = "Avoid +10; Might increases based on user’s Dexterity."
                image = 'https://i.imgur.com/DDO8L9u.png'
                characters = ['Petra (A), Felix (A), Claude (A), Catherine (A)']
                break;
            case 'Soulblade':
            case 'soulblade':
                name = "Soulblade"
                might = 2
                hit = 10
                crit = "N/A"
                range = 1
                durCost = 4
                desc = "Deals magic-based damage. Might increases based on user’s Resistance."
                image = 'https://i.imgur.com/DDO8L9u.png'
                characters = ['Marianne (C+), Anna (C+)']
                break;
            case "Foudroyant Strike":
            case "foudroyant strike":
                name = "Foudroyant Strike"
                might = 6
                hit = 30
                crit = 30
                range = 1
                durCost = 3
                desc = "Thunderbrand only; effective against Armoured and Dragon foes."
                image = 'https://i.imgur.com/DDO8L9u.png'
                characters = ['Lysithea and Catherine only']
                break;
            case "Beast Fang":
            case "beast fang":
                name = "Beast Fang"
                might = 10
                hit = "N/A"
                crit = 30
                range = 1
                durCost = 3
                desc = "Blutgang only; effective against Cavalry and Dragon foes."
                image = 'https://i.imgur.com/DDO8L9u.png'
                characters = ['Marianne only']
                break;
            case "Ruptured Heaven":
            case "ruptured heaven":
                name = "Ruptured Heaven"
                might = 7
                hit = 10
                crit = 10
                range = "1-2"
                durCost = 3
                desc = "Sword of the Creator only; Might increases based on user’s Magic, effective against Dragon foes."
                image = 'https://i.imgur.com/DDO8L9u.png'
                characters = ['Byleth and Edelgard only']
                break;
            case "Heaven's Fall":
            case "heaven's fall":
                name = "Heaven's Fall"
                might = 10
                hit = 10
                crit = 10
                range = "1-2"
                durCost = 3
                desc = "Dark Creator Sword only; Might increases based on user’s Magic"
                image = 'https://i.imgur.com/DDO8L9u.png'
                characters = ['Nemesis only']
                break;
            case "Assassinate":
            case "assassinate":
                name = "Assassinate"
                might = 0
                hit = 15
                crit = 20
                range = 1
                durCost = 5
                desc = "Assassin only; Avoid +15, can kill enemies instantly."
                image = 'https://i.imgur.com/DDO8L9u.png'
                characters = ['Anyone with Assassin Class Mastery']
                break;
            case "Astra":
            case "astra":
                name = "Astra"
                might = 0
                hit = -10
                crit = 20
                range = "1-2"
                durCost = 3
                desc = "Swordmaster only; triggers 5 consecutive hits at 30% Might."
                image = 'https://i.imgur.com/DDO8L9u.png'
                characters = ['Anyone with Swordmaster Class Mastery']
                break;
            case "Sublime Heaven":
            case "sublime heaven":
                name = "Sublime Heaven"
                might = 10
                hit = 10
                crit = 20
                range = "1-2"
                durCost = 3
                desc = "Sublime Creator Sword only; Might increases based on user’s Magic, effective against Dragon foes."
                image = 'https://i.imgur.com/DDO8L9u.png'
                characters = ['Byleth only']
                break;
            case "Sword Dance":
            case "sword dance":
                name = "Sword Dance"
                might = 1
                hit = "N/A"
                crit = "N/A"
                range = 1
                durCost = 2
                desc = "Avoid +20, Might increases based on user’s Charm."
                image = 'https://i.imgur.com/DDO8L9u.png'
                characters = ['Anyone who won the White Heron Cup']
                break;

            // Lance Combat Arts
            case 'Tempest Lance':
            case 'tempest lance':
                name = "Tempest Lance"
                might = 8
                hit = 10
                crit = "N/A"
                range = 1
                durCost = 5
                desc = "-"
                image = 'https://i.imgur.com/T2sijAO.png'
                characters = ['Anyone with D Rank in Lances']
                break;
            case 'Shatter Slash':
            case 'shatter slash':
                name = "Shatter Slash"
                might = 4
                hit = 10
                crit = "N/A"
                range = 1
                durCost = 3
                desc = "After combat, inflicts Def -5 on foe for 1 turn."
                image = 'https://i.imgur.com/T2sijAO.png'
                characters = ['Ferdinand (C+), Hilda (C+), Gilbert (C+), Jeritza (C+)']
                break;
            case 'Knightkneeler':
            case 'knightkneeler':
                name = "Knightkneeler"
                might = 5
                hit = 15
                crit = "N/A"
                range = 1
                durCost = 4
                desc = "Effective against Cavalry foes."
                image = 'https://i.imgur.com/T2sijAO.png'
                characters = ['Anyone with C Rank in Lances']
                break;
            case 'Hit and Run':
            case 'hit and run':
                name = "Knightkneeler"
                might = 4
                hit = 10
                crit = "N/A"
                range = 1
                durCost = 4
                desc = "Avoid +20; after combat, user moves 1 space backwards."
                image = 'https://i.imgur.com/T2sijAO.png'
                characters = ['Ingrid (C), Flayn (C+), Shamir (C+)']
                break;
            case 'Monster Piercer':
            case 'monster piercer':
                name = "Monster Piercer"
                might = 7
                hit = "N/A"
                crit = "N/A"
                range = 1
                durCost = 4
                desc = "Avoid +10; effective against Monster foes."
                image = 'https://i.imgur.com/T2sijAO.png'
                characters = ['Dimitri (C+), Sylvain (C+), Leonie (C+), Seteth (C+)']
                break;
            case 'Lance Jab':
            case 'lance jab':
                name = "Lance Jab"
                might = 3
                hit = "N/A"
                crit = 10
                range = 1
                durCost = 5
                desc = "Might increases based on user’s Speed."
                image = 'https://i.imgur.com/T2sijAO.png'
                characters = ['Leonie (A), Cyril (A), Shamir (A)']
                break;
            case 'Vengeance':
            case 'vengeance':
                name = "Vengeance"
                might = 3
                hit = "N/A"
                crit = 10
                range = 1
                durCost = 5
                desc = "Might increases based on user’s Speed."
                image = 'https://i.imgur.com/T2sijAO.png'
                characters = ['Bernadetta (C+), Dedue (C+), Cyril (C+)']
                break;
            case 'Glowing Ember':
            case 'glowing ember':
                name = "Vengeance"
                might = 2
                hit = "N/A"
                crit = "N/A"
                range = 1
                durCost = 4
                desc = "Avoid +10; Might increases based on user’s Defence."
                image = 'https://i.imgur.com/T2sijAO.png'
                characters = ['Dimitri (A), Gilbert (A), Jeritza (A)']
                break;
            case 'Swift Strikes':
            case 'swift strikes':
                name = "Swift Strikes"
                might = 2
                hit = "N/A"
                crit = "N/A"
                range = 1
                durCost = 4
                desc = "Triggers 2 consecutive hits."
                image = 'https://i.imgur.com/T2sijAO.png'
                characters = ['Ferdinand (A), Sylvain (A), Seteth (A)']
                break;
            case 'Frozen Lance':
            case 'frozen lance':
                name = "Frozen Lance"
                might = 3
                hit = 5
                crit = "N/A"
                range = 1
                durCost = 4
                desc = "Deals magic-based damage. Might increases based on user’s Dexterity."
                image = 'https://i.imgur.com/T2sijAO.png'
                characters = ['Ingrid (A), Lorenz (C+), Flayn (A)']
                break;
            case 'Ruined Sky':
            case 'ruined sky':
                name = "Ruined Sky"
                might = 13
                hit = 10
                crit = 10
                range = 1
                durCost = 3
                desc = "Lance of Ruin only; Avoid +10, effective against Flying and Dragon foes."
                image = 'https://i.imgur.com/T2sijAO.png'
                characters = ['Sylvain only']
                break;
            case 'Atrocity':
            case 'atrocity':
                name = "Atrocity"
                might = 15
                hit = 20
                crit = "N/A"
                range = 1
                durCost = 3
                desc = "Areadbhar only; effective against all foes."
                image = 'https://i.imgur.com/T2sijAO.png'
                characters = ['Dimitri only']
                break;
            case 'Burning Quake':
            case 'burning quake':
                name = "Burning Quake"
                might = 8
                hit = "N/A"
                crit = 20
                range = 1
                durCost = 3
                desc = "Lúin only; Avoid +10; Might increases based on user’s Speed, effective against Dragon foes."
                image = 'https://i.imgur.com/T2sijAO.png'
                characters = ['Ingrid only']
                break;
            case 'Paraselene':
            case 'paraselene':
                name = "Paraselene"
                might = 10
                hit = "N/A"
                crit = "N/A"
                range = 1
                durCost = 3
                desc = "Great Lord only; Avoid +10, after combat, user moves 1 space backwards."
                image = 'https://i.imgur.com/T2sijAO.png'
                characters = ['Dimitri only']
                break;
                
            // Axe Combat Arts
            // Smash
            // Spike
            // Helm Splitter
            // Monster Breaker
            // Diamond Axe
            // Exhaustive Strike
            // Armored Strike
            // Wild Abandon
            // Focused Strike
            // Lightning Axe
            // Apocalypic Flame
            // Dust
            // Raging Storm
            // Flickering Flower
            // War Master's Strike

            // Bow Combat Arts
            case "Curved Shot":
            case 'curved shot':
                name = "Curved Shot"
                might = 1
                hit = 30
                crit = "N/A"
                range = "2 - 3"
                durCost = 3
                desc = "-"
                image = 'https://i.imgur.com/l7vOdhW.png'
                characters = ['Anyone with a D rank in Bows']
                break;
            case "Deadeye":
            case 'deadeye':
                name = "Deadeye"
                might = 6
                hit = "N/A"
                crit = "N/A"
                range = "3 - 5"
                durCost = 5
                desc = "-"
                image = 'https://i.imgur.com/l7vOdhW.png'
                characters = ['Bernadetta and Ashe at C+ in Bows.']
                break;
            case "Heavy Draw":
            case 'heavy draw':
                name = "Heavy Draw"
                might = 8
                hit = 10
                crit = "N/A"
                range = 2
                durCost = 5
                desc = "-"
                image = 'https://i.imgur.com/l7vOdhW.png'
                characters = ['Felix, Shamir, and Hubert in C+ in Bows.']
                break;
            case "Encloser":
            case 'encloser':
                name = "Encloser"
                might = 4
                hit = 15
                crit = "N/A"
                range = 2
                durCost = 3
                desc = "Prevents foe from moving for 1 turn."
                image = 'https://i.imgur.com/l7vOdhW.png'
                characters = ['Bernadetta and Claude in A rank in Bows.']
                break;
            case "Ward Arrow":
            case 'ward arrow':
                name = "Ward Arrow"
                might = 4
                hit = 15
                crit = "N/A"
                range = 2
                durCost = 3
                desc = "Prevents foe from using magic for 1 turn."
                image = 'https://i.imgur.com/l7vOdhW.png'
                characters = ['Hanneman and Ignatz in A rank in Bows.']
                break;
            case "Point-Blank Volley":
            case 'point-blank volley':
                name = "Point-Blank Volley"
                might = 3
                hit = 10
                crit = "N/A"
                range = 1
                durCost = 4
                desc = "Avoid +10; triggers 2 consecutive hits."
                image = 'https://i.imgur.com/l7vOdhW.png'
                characters = ['Cyril and Leonie with a C+ and A rank in Bows respectively.']
                break;
            case "Monster Blast":
            case 'monster blast':
                name = "Monster Blast"
                might = 5
                hit = "N/A"
                crit = 10
                range = 2
                durCost = 4
                desc = "Effective against Monster foes."
                image = 'https://i.imgur.com/l7vOdhW.png'
                characters = ['Claude and Shamir with a C+ and A rank in Bows respectively.']
                break;
            case "Waning Shot":
            case 'waning shot':
                name = "Waning Shot"
                might = 4
                hit = 40
                crit = "N/A"
                range = "2 - 3"
                durCost = 3
                desc = "After combat, inflicts Str -5 on foe for 1 turn."
                image = 'https://i.imgur.com/l7vOdhW.png'
                characters = ['Petra and Ashe with a C+ and A rank in Bows respectively. It is also the budding talent of Mercedes.']
                break;
            case "Break Shot":
            case 'break shot':
                name = "Break Shot"
                might = 4
                hit = 5
                crit = "N/A"
                range = "2 - 3"
                durCost = 3
                desc = "After combat, inflicts Def -5 on foe for 1 turn."
                image = 'https://i.imgur.com/l7vOdhW.png'
                characters = ['Ignatz and Leonie with a C+ rank in Bows.']
                break;
            case "Schism Shot":
            case 'schism shot':
                name = "Schism Shot"
                might = 4
                hit = 15
                crit = "N/A"
                range = "2 - 3"
                durCost = 3
                desc = "After combat, inflicts Res -5 on foe for 1 turn."
                image = 'https://i.imgur.com/l7vOdhW.png'
                characters = ['Hanneman and Hubert with a C+ and A rank in Bows respectively.']
                break;
            case "Fallen Star":
            case 'fallen star':
                name = "Fallen Star"
                might = 10
                hit = 30
                crit = 10
                range = "2 - 3"
                durCost = 3
                desc = "Failnaught only; avoids all attacks during the next round of combat; effective against Dragon foes."
                image = 'https://i.imgur.com/l7vOdhW.png'
                characters = ['Failnaught only']
                break;
            case "Hunter's Volley":
            case "hunter's volley":
                name = "Hunter's Volley"
                might = 1
                hit = 15
                crit = 10
                range = "2 - 3"
                durCost = 5
                desc = "Sniper only; triggers 2 consecutive hits."
                image = 'https://i.imgur.com/l7vOdhW.png'
                characters = ['Any character with Sniper Class Mastery']
                break;
            case "Wind God":
            case "wind god":
                name = "Wind God"
                might = 5
                hit = 20
                crit = "N/A"
                range = "2 - 5"
                durCost = 3
                desc = "Barbarossa only."
                image = 'https://i.imgur.com/l7vOdhW.png'
                characters = ['Claude only']
                break;

            // Gauntlet Combat Arts
            case "Draining Blow":
            case "draining blow":
                name = "Draining Blow"
                might = 5
                hit = 20
                crit = "N/A"
                range = 1
                durCost = 3
                desc = "Restores HP equal to 50% of the damage inflicted to the enemy."
                image = 'https://i.imgur.com/EW4nf1y.png'
                characters = ['Byleth and Raphael at C+ and A Brawling respectively.']
                break;
            case "Mighty Blow":
            case "mighty blow":
                name = "Mighty Blow"
                might = 10
                hit = -5
                crit = 20
                range = 1
                durCost = 3
                desc = "Restores HP equal to 50% of the damage inflicted to the enemy."
                image = 'https://i.imgur.com/EW4nf1y.png'
                characters = ['Alois, Dedue, and Caspar with an A rank in Brawling.']
                break;
            case "Bombard":
            case "bombard":
                name = "Bombard"
                might = 3
                hit = "N/A"
                crit = 10
                range = 1
                durCost = 3
                desc = "Triggers 2 consecutive hits."
                image = 'https://i.imgur.com/EW4nf1y.png'
                characters = ['Caspar and Catherine at C+ and A brawling respectively.']
                break;
            case "Rushing Blow":
            case "rushing blow":
                name = "Rushing Blow"
                might = 7
                hit = 20
                crit = "N/A"
                range = 1
                durCost = 3
                desc = "Avoid +10; after combat, user moves 1 space in front of the enemy."
                image = 'https://i.imgur.com/EW4nf1y.png'
                characters = ['Anyone with a C rank in Brawling.']
                break;
            case "Fading Blow":
            case "fading blow":
                name = "Fading Blow"
                might = 6
                hit = 10
                crit = "N/A"
                range = 1
                durCost = 3
                desc = "Avoid +30; after combat, user moves 1 space backwards."
                image = 'https://i.imgur.com/EW4nf1y.png'
                characters = ['Anyone with a D rank in Brawling.']
                break;
            case "Mystic Blow":
            case "mystic blow":
                name = "Mystic Blow"
                might = 10
                hit = 10
                crit = "N/A"
                range = 1
                durCost = 3
                desc = "Deals magic-based damage."
                image = 'https://i.imgur.com/EW4nf1y.png'
                characters = ['Byleth and Felix with an A rank in Brawling.']
                break;
            case "Nimble Combo":
            case "nimble combo":
                name = "Nimble Combo"
                might = 10
                hit = "N/A"
                crit = "N/A"
                range = 1
                durCost = 3
                desc = "Avoid +20; triggers 2 consecutive hits."
                image = 'https://i.imgur.com/EW4nf1y.png'
                characters = ['Catherine and Felix with a C+ rank in Brawling.']
                break;
            case "One-Two Punch":
            case "one-two punch":
                name = "One-Two Punch"
                might = 8
                hit = 20
                crit = "N/A"
                range = 1
                durCost = 4
                desc = "Triggers a follow-up attack."
                image = 'https://i.imgur.com/EW4nf1y.png'
                characters = ['Alois and Dedue with a C+ rank in Brawling.']
                break;
            case "Monster Crusher":
            case "monster crusher":
                name = "Monster Crusher"
                might = 13
                hit = 10
                crit = 10
                range = 1
                durCost = 4
                desc = "Effective against Monster foes."
                image = 'https://i.imgur.com/EW4nf1y.png'
                characters = ['Raphael with a C+ rank in Brawling.']
                break;
            case "Fierce Iron Fist":
            case "fierce iron fist":
                name = "Fierce Iron Fist"
                might = 1
                hit = "N/A"
                crit = 10
                range = 1
                durCost = 5
                desc = "Grappler only; triggers 3 consecutive hits."
                image = 'https://i.imgur.com/EW4nf1y.png'
                characters = ['Any male with Grappler Class Mastery']
                break;

            // Other Combat Arts
            case "Healing Focus":
            case "healing focus":
                name = "Healing Focus"
                might = "-"
                hit = "-"
                crit = "-"
                range = 1
                durCost = "-"
                desc = "Restores 50% of the user’s HP."
                image = 'https://i.imgur.com/YaSwwty.png'
                characters = ['All']
                break;
            case "Swap":
            case "swap":
                name = "Swap"
                might = "-"
                hit = "-"
                crit = "-"
                range = 1
                durCost = "-"
                desc = "User swaps places with an adjacent ally."
                image = 'https://i.imgur.com/YaSwwty.png'
                characters = ['All']
                break;
            case "Shove":
            case "shove":
                name = "Shove"
                might = "-"
                hit = "-"
                crit = "-"
                range = 1
                durCost = "-"
                desc = "User pushes ally forward 1 space."
                image = 'https://i.imgur.com/YaSwwty.png'
                characters = ['All']
                break;
            case "Reposition":
            case "reposition":
                name = "Reposition"
                might = "-"
                hit = "-"
                crit = "-"
                range = 1
                durCost = "-"
                desc = "User moves ally to the space behind the user."
                image = 'https://i.imgur.com/YaSwwty.png'
                characters = ['All']
                break;
            case "Draw Back":
            case "draw back":
                name = "Draw Back"
                might = "-"
                hit = "-"
                crit = "-"
                range = 1
                durCost = "-"
                desc = "User moves 1 space backwards and ally is moved to where the user was previously."
                image = 'https://i.imgur.com/YaSwwty.png'
                characters = ['All']
                break;
            case "Smite":
            case "smite":
                name = "Smite"
                might = "-"
                hit = "-"
                crit = "-"
                range = 1
                durCost = "-"
                desc = "User pushes ally forward 2 spaces."
                image = 'https://i.imgur.com/YaSwwty.png'
                characters = ['All']
                break;
            case "Triangle Attack":
            case "triangle attack":
                name = "Triangle Attack"
                might = 8
                hit = 30
                crit = 40
                range = 1
                durCost = 3
                desc = "Can only be triggered when 3 allied Flying units (including the user) are adjacent to the same enemy."
                image = 'https://i.imgur.com/YaSwwty.png'
                characters = ['All female characters']
                break;
            default:
                name = "N/A"
        }
        
        if(name == "N/A") {
            return "Not a playable unit"
        } else {
            artEmbed
               .setAuthor(name)
               .setThumbnail(image)
               .addField("Might", might, true)
               .addField("Hit", hit, true)
               .addField("Crit", crit, true)
               .addField("Range", range, true)
               .addField("Durability Cost", durCost, true)
               .addField("Description", desc)
               .addField("Available to", characters.join(", "))

            return artEmbed
        }
    }
        
    async run(msg, [art]) {
        let result = this.verifyUnit(art);
        msg.send(result);
    }
};