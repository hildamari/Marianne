const { Command } = require('klasa');
const { MessageEmbed } = require('discord.js');

module.exports = class extends Command {

    constructor(...args) {
        super(...args, { 
            aliases: ['lost'],
            description: 'Replies with information about specific units\' lost items from Fire Emblem Three Houses',
            extendedHelp: 'This command contains spoilers for Fire Emblem Three Houses!',
            usage: '<unit:string>'
        });

        this.customizeResponse('unit',
            'You must enter a valid unit!');
    }

    verifyUnit(unit) {
        const unitLostItemsEmbed = new MessageEmbed()

        let name = '', lostItems = [], hexColor = "", thumbnail = "";

        switch(unit) {
            case 'Edelgard':
            case 'edelgard':
                name = 'Edelgard'
                thumbnail = 'https://i.imgur.com/HQ3yEk4.png'
                hexColor = '#fefff4'
                lostItems = ["White Glove", "Time-worn Quill Pen", "Eastern Porcelain"]
                break;
            case 'Hubert':
            case 'hubert':
                name = 'Hubert'
                thumbnail = 'https://i.imgur.com/KCc36C6.png'
                hexColor = '#343d3e'
                lostItems = ["Hresvelg Treatise", "Noxious Handkerchief", "Folding Razor"]
                break;
            case 'Ferdinand':
            case 'ferdinand':
                name = 'Ferdinand von Aegir'
                thumbnail = 'https://i.imgur.com/iKtyabp.png'
                hexColor = '#feb472'
                lostItems = ["Maintenance Oil", "Agricultural Survey", "Bag of Tea Leaves"]
                break;
            case 'Linhardt':
            case 'linhardt':
                name = 'Linhardt'
                thumbnail = 'https://i.imgur.com/X41XIXq.png'
                hexColor = '#476352'
                lostItems = ["The Saints Revealed", "Feather Pillow", "Animated Bait"]
                break;
            case 'Caspar':
            case 'caspar':
                name = 'Caspar'
                thumbnail = 'https://i.imgur.com/mo0C51Q.png'
                hexColor = '#a6e4e2'
                lostItems = ["Thunderbrand Replica", "Tattered Overcoat", "Grounding Charm"]
                break;
            case 'Bernadetta':
            case 'bernadetta':
                name = 'Bernadetta'
                thumbnail = 'https://i.imgur.com/xowUlBr.png'
                hexColor = '#a080a8'
                lostItems = ["Needle and Thread", "Still-Life Picture",  "Hedgehog Case"]
                break;
            case 'Dorothea':
            case 'dorothea':
                name = 'Dorothea'
                thumbnail = 'https://i.imgur.com/S3FNa04.png'
                hexColor = '#7b585b'
                lostItems = ["Silver Brooch", "Songstress Poster", "Lovely Comb"]
                break;
            case 'Petra':
            case 'petra':
                name = 'Petra'
                thumbnail = 'https://i.imgur.com/ZfvRIX6.png'
                hexColor = '#824364'
                lostItems = ["Exotic Feather", "Small Tanned Hide", "Annotated Dictionary"]
                break;
            case 'Dimitri':
            case 'dimitri':
                name = 'Dimitri'
                thumbnail = 'https://i.imgur.com/Ddl1C8a.png'
                hexColor = '#fcfba8'
                lostItems = ["Dulled Longsword", "Black Leather Gloves", "Training Logbook"]
                break;
            case 'Dedue':
            case 'dedue':
                name = 'Dedue'
                thumbnail = 'https://i.imgur.com/quIqslt.png'
                hexColor = '#e8e9e2'
                lostItems = ["Gold Earring", "Gardening Sheers", "Iron Cooking Pot"]
                break;
            case 'Felix':
            case 'felix':
                name = 'Felix'
                thumbnail = 'https://i.imgur.com/YJcGEiK.png'
                hexColor = '#403f64'
                lostItems = ["Black Iron Spur", "Sword Belt Fragment", "Toothed Dagger"]
                break;
            case 'Ashe':
            case 'ashe':
                name = 'Ashe'
                thumbnail = 'https://i.imgur.com/L4iJ8Ug.png'
                hexColor = '#b5bdc6'
                lostItems = ["Moon Knight’s Tale", "Evil-Repelling Amulet", "Bundle of Herbs"]
                break;
            case 'Sylvain':
            case 'sylvain':
                name = 'Sylvain'
                thumbnail = 'https://i.imgur.com/77T2SRt.png'
                hexColor = '#e06c53'
                lostItems = ["Unused Lipstick", "Crumpled Love Letter", "The History of Sreng"]
                break;
            case 'Mercedes':
            case 'mercedes':
                name = 'Mercedes'
                thumbnail = 'https://i.imgur.com/y1BWI7T.png'
                hexColor = '#f4dcc4'
                lostItems = ["Book of Ghost Stories", "Fruit Preserves", "How to Bake Sweets"]
                break;
            case 'Annette':
            case 'annette':
                name = 'Annette'
                thumbnail = 'https://i.imgur.com/lnE7TRE.png'
                hexColor = '#f6a67d'
                lostItems = ["Unfinished Score", "School of Sorcery Book", "Wax Diptych"]
                break;
            case 'Ingrid':
            case 'ingrid':
                name = 'Ingrid'
                thumbnail = 'https://i.imgur.com/t8fCo54.png'
                hexColor = '#f8e5a0'
                lostItems = ["Pegasus Horseshoes", "Jousting Almanac", "Curry Comb"]
                break;
            case 'Claude':
            case 'claude':
                name = 'Claude'
                thumbnail = 'https://i.imgur.com/A4i8b9Z.png'
                hexColor = '#4a4240'
                lostItems = ["Leather Bow Sheath", "Mild Stomach Poison", "Board Game Piece"]
                break;
            case 'Hilda':
            case 'hilda':
                name = 'Hilda'
                thumbnail = 'https://i.imgur.com/zoScHRC.png'
                hexColor = '#fcafb7'
                lostItems = ["Handmade Hair Clip", "Spotless Bandage", "Used Bottle of Perfume"]
                break;
            case 'Lorenz':
            case 'lorenz':
                name = 'Lorenz'
                thumbnail = 'https://i.imgur.com/uYopDET.png'
                hexColor = '#7373ac'
                lostItems = ["Artificial Flower", "A Treatise on Etiquette", "Silk Handkerchief"]
                break;
            case 'Raphael':
            case 'raphael':
                name = 'Raphael'
                thumbnail = 'https://i.imgur.com/MB3wRvI.png'
                hexColor = '#f0d9a1'
                lostItems = ["Wooden Button", "Burlap Sack of Rocks", "Big Spoon"]
                break;
            case 'Ignatz':
            case 'ignatz':
                name = 'Ignatz'
                thumbnail = 'https://i.imgur.com/TUREZkF.png'
                hexColor = '#c6c69d'
                lostItems = ["Blue Stone", "Art Book", "Letter to the Goddess"]
                break;
            case 'Lysithea':
            case 'lysithea':
                name = 'Lysithea'
                thumbnail = 'https://i.imgur.com/EIm3Zof.png'
                hexColor = '#fefcfd'
                lostItems = ["Encyclopedia of Sweets", "Princess Doll", "New Bottle of Perfume"]
                break;
            case 'Marianne':
            case 'marianne':
                name = 'Marianne'
                thumbnail = 'https://i.imgur.com/OyUl9he.png'
                hexColor = '#aad0fa'
                lostItems = ["Bag of Seeds", "How to be Tidy", "Confessional Letter"]
                break;
            case 'Leonie':
            case 'leonie':
                name = 'Leonie'
                thumbnail = 'https://i.imgur.com/yZxvJG4.png'
                hexColor = '#f17d5b'
                lostItems = ["Hand Drawn Map", "Crude Arrowheads", "Fur Scarf"]
                break;
            case 'Flayn':
            case 'flayn':
            case 'cethleann':
            case 'Cethleann':
                name = 'Flayn'
                thumbnail = 'https://i.imgur.com/1PcDmnL.png'
                hexColor = '#9ae5b9'
                lostItems = ["Antique Clasp", "Old Map of Enbarr", "Dusty Book of Fables"]
                break;
            case 'Seteth':
            case 'seteth':
            case 'Cichol':
            case 'cichol':
                name = 'Seteth'
                thumbnail = 'https://i.imgur.com/s35oLUZ.png'
                hexColor = '#71bea4'
                lostItems = ["Unfinished Fable", "Old Fishing Rod", "Snapped Writing Quill"]
                break;
            case 'Cyril':
            case 'cyril':
                name = 'Cyril'
                thumbnail = 'https://i.imgur.com/Oss58fD.png'
                hexColor = '#71bea4'
                lostItems = ["Well-Used Hatchet", "Portrait of Rhea", "Old Cleaning Cloth"]
                break;
            case 'Anna':
            case 'anna':
                name = 'Anna'
                thumbnail = 'https://i.imgur.com/d2dCJxN.png'
                hexColor = '#d85e77'
                lostItems = ["Secret Ledger", "Balance Scale", "Rare Item Index"]
                break;
            case 'Jeritza':
            case 'jeritza':
            case 'Emile':
            case 'emile':
                name = 'Jeritza'
                thumbnail = 'https://i.imgur.com/SSXUCCn.png'
                hexColor = '#f4dcc4'
                lostItems = ["Jar of Sweets", "Black Hair Tie", "Armor Clasp"]
                break;
            case 'Hanneman':
            case 'hanneman':
                name = 'Hanneman'
                thumbnail = 'https://i.imgur.com/fCG6C12.png'
                hexColor = '#969794'
                lostItems = ["Lens Cloth", "Hammer and Chisel", "Sketch of a Sigil"]
                break;
            case 'Manuela':
            case 'manuela':
                name = 'Manuela'
                thumbnail = 'https://i.imgur.com/af5exR9.png'
                hexColor = '#b09b80'
                lostItems = ["Wellness Herbs", "Clean Dusting Cloth", "Light Purple Veil"]
                break;
            case 'Gilbert':
            case 'gilbert':
            case 'Gustave':
            case 'gustave':
                name = 'Gilbert'
                thumbnail = 'https://i.imgur.com/wyHkiIQ.png'
                hexColor = '#f7a77e'
                lostItems = ["Noseless Puppet", "Carving Hammer", "Silver Necklace"]
                break;
            case 'Alois':
            case 'alois':
                name = 'Alois'
                thumbnail = 'https://i.imgur.com/Mz2eAuu.png'
                hexColor = '#857a67'
                lostItems = ["Introduction to Magic", "Foreign Gold Coin", "Mysterious Notebook"]
                break;
            case 'Catherine':
            case 'catherine':
            case 'Cassandra':
            case 'cassandra':
                name = 'Catherine'
                thumbnail = 'https://i.imgur.com/7mK0y1K.png'
                hexColor = '#f8ebc9'
                lostItems = ["Weathered Cloak", "Letter to Rhea", "Badge of Graduation"]
                break;
            case 'Shamir':
            case 'shamir':
                name = 'Shamir'
                thumbnail = 'https://i.imgur.com/gK1Iz5F.png'
                hexColor = '#57587e'
                lostItems = ["Bundle of Dry Hemp", "Centipede Picture", "Animal Bone Dice"]
                break;
            case 'jeralt':
            case 'Jeralt':
                name = 'Jeralt'
                thumbnail = 'https://i.imgur.com/d4f9iBI.png'
                hexColor = '#d2bc93'
                lostItems = ["Wooden Flask"]
                break;
            default:
                name = "N/A"
        }
    
              if(name == "N/A") {
                  return "Not a playable unit"
              } else {
                    unitLostItemsEmbed
                        .setColor(hexColor)
                        .setAuthor(name)
                        .setThumbnail(thumbnail)
                        .addField("Lost Items", lostItems.join("\n"))
                    return unitLostItemsEmbed
                }
    }

    async run(msg, [unit]) {
        let result = this.verifyUnit(unit);
        msg.send(result);
    }

};