const { Command } = require('klasa');
const { MessageEmbed } = require('discord.js');

module.exports = class extends Command {

    constructor(...args) {
        super(...args, { 
            description: 'Replies with information about specific units\' liked and disliked gifts',
            extendedHelp: 'This command contains spoilers for Fire Emblem Three Houses!',
            usage: '<unit:string>'
        });

        this.customizeResponse('unit',
            'You must enter a valid unit!');
    }

    verifyUnit(unit) {
        const unitGiftsEmbed = new MessageEmbed()

        let name = '', likedGifts = [], dislikedGifts = [], hexColor = "", thumbnail = "";

        switch(unit) {
            case 'Edelgard':
            case 'edelgard':
                name = 'Edelgard'
                thumbnail = 'https://i.imgur.com/HQ3yEk4.png'
                hexColor = '#fefff4'
                likedGifts = ["Carnation", "Armored Bear Stuffy", "Monarch Studies Book", "Board Game"]
                dislikedGifts = ["Goddess Statuette", "Ceremonial Sword"]
                break;
            case 'Hubert':
            case 'hubert':
                name = 'Hubert'
                thumbnail = 'https://i.imgur.com/KCc36C6.png'
                hexColor = '#343d3e'
                likedGifts = ["Coffee Beans", "Board Game", "The History of Fódlan"]
                dislikedGifts = ["Legends of Chivalry", "Gemstone Beads", "Landscape Painting"]
                break;
            case 'Ferdinand':
            case 'ferdinand':
                name = 'Ferdinand von Aegir'
                thumbnail = 'https://i.imgur.com/iKtyabp.png'
                hexColor = '#feb472'
                likedGifts = ["Riding Boots", "Whetstone", "Tea Leaves"]
                dislikedGifts = ["Blue Cheese", "Coffee Beans"]
                break;
            case 'Linhardt':
            case 'linhardt':
                name = 'Linhardt'
                thumbnail = 'https://i.imgur.com/X41XIXq.png'
                hexColor = '#476352'
                likedGifts = ["Tasty Baked Treat", "Book of Crest Designs", "Fishing Float"]
                dislikedGifts = ["Training Weight", "Hunting Dagger"]
                break;
            case 'Caspar':
            case 'caspar':
                name = 'Caspar'
                thumbnail = 'https://i.imgur.com/mo0C51Q.png'
                hexColor = '#a6e4e2'
                likedGifts = ["Training Weight", "Whetstone", "Hunting Dagger", "Smoked Meat"]
                dislikedGifts = ["Fishing Float", "Floral Adornment", "Stylish Hair Clip"]
                break;
            case 'Bernadetta':
            case 'bernadetta':
                name = 'Bernadetta'
                thumbnail = 'https://i.imgur.com/xowUlBr.png'
                hexColor = '#a080a8'
                likedGifts = ["Pitcher Plant", "Armored Bear Stuffy", "Book of Sheet Music", "Watering Can", "Landscape Painting", "Dapper Handkerchief"]
                dislikedGifts = ["Training Weight", "Hunting Dagger", "Ceremonial Sword"]
                break;
            case 'Dorothea':
            case 'dorothea':
                name = 'Dorothea'
                thumbnail = 'https://i.imgur.com/S3FNa04.png'
                hexColor = '#7b585b'
                likedGifts = ["Book of Sheet Music", "Gemstone Beads", "Stylish Hair Clip"]
                dislikedGifts = ["Goddess Statuette", "Floral Adornment"]
                break;
            case 'Petra':
            case 'petra':
                name = 'Petra'
                thumbnail = 'https://i.imgur.com/ZfvRIX6.png'
                hexColor = '#824364'
                likedGifts = ["Sunflower", "Hunting Dagger", "Exotic Spices", "Smoked Meat"]
                dislikedGifts = ["Arithmetic Textbook", "Book of Crest Designs"]
                break;
            case 'Dimitri':
            case 'dimitri':
                name = 'Dimitri'
                thumbnail = 'https://i.imgur.com/Ddl1C8a.png'
                hexColor = '#fcfba8'
                likedGifts = ["Training Weight", "Whetstone", "Riding Boots", "Ceremonial Sword"]
                dislikedGifts = ["Gemstone Beads", "Armored Bear Stuffy", "Book of Sheet Music"]
                break;
            case 'Dedue':
            case 'dedue':
                name = 'Dedue'
                thumbnail = 'https://i.imgur.com/quIqslt.png'
                hexColor = '#e8e9e2'
                likedGifts = ["Exotic Spices", "Floral Adornment", "Watering Can"]
                dislikedGifts = ["Book of Sheet Music", "The History of Fódlan"]
                break;
            case 'Felix':
            case 'felix':
                name = 'Felix'
                thumbnail = 'https://i.imgur.com/YJcGEiK.png'
                hexColor = '#403f64'
                likedGifts = ["Smoked Meat", "Hunting Dagger", "Training Weight", "Ceremonial Sword"]
                dislikedGifts = ["Legends of Chivalry", "Armored Bear Stuffy", "Tasty Bake Treat"]
                break;
            case 'Ashe':
            case 'ashe':
                name = 'Ashe'
                thumbnail = 'https://i.imgur.com/L4iJ8Ug.png'
                hexColor = '#b5bdc6'
                likedGifts = ["Violet", "Legends of Chivalry", "Exotic Spices", "Tasty Baked Treat", "Ancient Coin"]
                dislikedGifts = ["Arithmetic Textbook", "Monarch Studies Book", "Board Game"]
                break;
            case 'Sylvain':
            case 'sylvain':
                name = 'Sylvain'
                thumbnail = 'https://i.imgur.com/77T2SRt.png'
                hexColor = '#e06c53'
                likedGifts = ["Landscape Painting", "Dapper Handkerchief", "Board Game"]
                dislikedGifts = ["Book of Crest Designs", "Watering Can", "Floral Adornment"]
                break;
            case 'Mercedes':
            case 'mercedes':
                name = 'Mercedes'
                thumbnail = 'https://i.imgur.com/y1BWI7T.png'
                hexColor = '#f4dcc4'
                likedGifts = ["Lavender", "Tasty Bake Treat", "Goddess Statuette", "Armored Bear Stuffy", "Gemstone Beads"]
                dislikedGifts = ["Whetstone", "Ancient Coin", "Riding Boots"]
                break;
            case 'Annette':
            case 'annette':
                name = 'Annette'
                thumbnail = 'https://i.imgur.com/lnE7TRE.png'
                hexColor = '#f6a67d'
                likedGifts = ["Book of Sheet Music", "Stylish Hair Clip", "Arithmetic Textbook"]
                dislikedGifts = ["Ceremonial Sword", "Hunting Dagger", "Coffee Beans"]
                break;
            case 'Ingrid':
            case 'ingrid':
                name = 'Ingrid'
                thumbnail = 'https://i.imgur.com/t8fCo54.png'
                hexColor = '#f8e5a0'
                likedGifts = ["Riding Boots", "Smoked Meat", "Legends of Chivalry"]
                dislikedGifts = ["Gemstone Beads", "Stylish Hair Clip"]
                break;
            case 'Claude':
            case 'claude':
                name = 'Claude'
                thumbnail = 'https://i.imgur.com/A4i8b9Z.png'
                hexColor = '#4a4240'
                likedGifts = ["Riding Boots", "Book of Crest Designs", "Exotic Spices", "Board Game"]
                dislikedGifts = ["Book of Sheet Music", "Blue Cheese"]
                break;
            case 'Hilda':
            case 'hilda':
                name = 'Hilda'
                thumbnail = 'https://i.imgur.com/zoScHRC.png'
                hexColor = '#fcafb7'
                likedGifts = ["Anemone", "Gemstone Beads", "Dapper Handkerchief", "Book of Sheet Music", "Stylish Hair Clip", "Armored Bear Stuffy"]
                dislikedGifts = ["Training Weight", "Ancient Coin", "Legends of Chivalry"]
                break;
            case 'Lorenz':
            case 'lorenz':
                name = 'Lorenz'
                thumbnail = 'https://i.imgur.com/uYopDET.png'
                hexColor = '#7373ac'
                likedGifts = ["Rose", "Floral Adornment", "Tea Leaves", "Book of Sheet Music"]
                dislikedGifts = ["Armored Bear Stuffy", "Hunting Dagger", "Watering Can"]
                break;
            case 'Raphael':
            case 'raphael':
                name = 'Raphael'
                thumbnail = 'https://i.imgur.com/MB3wRvI.png'
                hexColor = '#f0d9a1'
                likedGifts = ["Smoked Meat", "Training Weight", "Tasty Baked Treat", "Blue Cheese"]
                dislikedGifts = ["Arithmetic Textbook", "Book of Crest Designs"]
                break;
            case 'Ignatz':
            case 'ignatz':
                name = 'Ignatz'
                thumbnail = 'https://i.imgur.com/TUREZkF.png'
                hexColor = '#c6c69d'
                likedGifts = ["Forget-me-nots", "Ancient Coin", "Landscape Painting", "Goddess Statuette", "Ceremonial Sword"]
                dislikedGifts = ["Monarch Studies Book", "Training Weight"]
                break;
            case 'Lysithea':
            case 'lysithea':
                name = 'Lysithea'
                thumbnail = 'https://i.imgur.com/EIm3Zof.png'
                hexColor = '#fefcfd'
                likedGifts = ["Lily", "Armored Bear Stuffy", "Arithmetic Textbook", "Tasty Baked Treat", "Book of Crest Designs"]
                dislikedGifts = ["Training Weight", "Legends of Chivalry", "Coffee Beans"]
                break;
            case 'Marianne':
            case 'marianne':
                name = 'Marianne'
                thumbnail = 'https://i.imgur.com/OyUl9he.png'
                hexColor = '#aad0fa'
                likedGifts = ["Lily of the Valley", "Dapper Handkerchief", "Floral Adornment", "Armored Bear Stuffy"]
                dislikedGifts = ["Hunting Dagger", "Smoked Meat"]
                break;
            case 'Leonie':
            case 'leonie':
                name = 'Leonie'
                thumbnail = 'https://i.imgur.com/yZxvJG4.png'
                hexColor = '#f17d5b'
                likedGifts = ["Hunting Dagger", "Training Weight", "Fishing Float"]
                dislikedGifts = ["Stylish Hair Clip", "Book of Crest Designs"]
                break;
            case 'Flayn':
            case 'flayn':
            case 'cethleann':
            case 'Cethleann':
                name = 'Flayn'
                thumbnail = 'https://i.imgur.com/1PcDmnL.png'
                hexColor = '#9ae5b9'
                likedGifts = ["Forget-me-nots", "Tasty Baked Treat", "Armored Bear Stuffy", "Stylish Hair Clip", "Dapper Handkerchief"]
                dislikedGifts = ["Whetstone", "Blue Cheese"]
                break;
            case 'Seteth':
            case 'seteth':
            case 'Cichol':
            case 'cichol':
                name = 'Seteth'
                thumbnail = 'https://i.imgur.com/s35oLUZ.png'
                hexColor = '#71bea4'
                likedGifts = ["The History of Fódlan", "Fishing Float", "Dapper Handkerchief"]
                dislikedGifts = ["Book of Crest Designs", "Legends of Chivalry"]
                break;
            case 'Cyril':
            case 'cyril':
                name = 'Cyril'
                thumbnail = 'https://i.imgur.com/Oss58fD.png'
                hexColor = '#71bea4'
                likedGifts = ["Baby’s Breath", "Smoked Meat", "Hunting Dagger", "Watering Can"]
                dislikedGifts = ["The History of Fódlan", "Legends of Chivalry", "Monarch Studies Book"]
                break;
            case 'Anna':
            case 'anna':
                name = 'Anna'
                thumbnail = 'https://i.imgur.com/d2dCJxN.png'
                hexColor = '#d85e77'
                likedGifts = ["Forget-me-nots", "Exotic Spices", "Coffee Beans", "Blue Cheese", "Landscape Painting", "Goddess Statuette"]
                dislikedGifts = ["Fishing Float", "Smoked Meat"]
                break;
            case 'Jeritza':
            case 'jeritza':
            case 'Emile':
            case 'emile':
                name = 'Jeritza'
                thumbnail = 'https://i.imgur.com/SSXUCCn.png'
                hexColor = '#f4dcc4'
                likedGifts = ["Rose", "Tasty Baked Treat", "Whetstone", "Hunting Dagger"]
                dislikedGifts = ["Monarch Studies Book", "Blue Cheese", "Book of Crest Designs"]
                break;
            case 'Hanneman':
            case 'hanneman':
                name = 'Hanneman'
                thumbnail = 'https://i.imgur.com/fCG6C12.png'
                hexColor = '#969794'
                likedGifts = ["Arithmetic Textbook", "Tea Leaves", "Book of Crest Designs", "Dapper Handkerchief"]
                dislikedGifts = ["Blue Cheese", "Exotic Spices"]
                break;
            case 'Manuela':
            case 'manuela':
                name = 'Manuela'
                thumbnail = 'https://i.imgur.com/af5exR9.png'
                hexColor = '#b09b80'
                likedGifts = ["Book of Sheet Music", "Gemstone Beads", "Blue Cheese", "Goddess Statuette"]
                dislikedGifts = ["Board Game", "Riding Boots", "Smoked Meat"]
                break;
            case 'Gilbert':
            case 'gilbert':
            case 'Gustave':
            case 'gustave':
                name = 'Gilbert'
                thumbnail = 'https://i.imgur.com/wyHkiIQ.png'
                hexColor = '#f7a77e'
                likedGifts = ["Goddess Statuette", "Fishing Float", "Ceremonial Sword"]
                dislikedGifts = ["Tasty Baked Treat", "Dapper Handkerchief"]
                break;
            case 'Alois':
            case 'alois':
                name = 'Alois'
                thumbnail = 'https://i.imgur.com/Mz2eAuu.png'
                hexColor = '#857a67'
                likedGifts = ["Sunflower", "Ancient Coin", "Fishing Float", "Floral Adornment"]
                dislikedGifts = ["Exotic Spices", "Monarch Studies Book"]
                break;
            case 'Catherine':
            case 'catherine':
            case 'Cassandra':
            case 'cassandra':
                name = 'Catherine'
                thumbnail = 'https://i.imgur.com/7mK0y1K.png'
                hexColor = '#f8ebc9'
                likedGifts = ["Training Weight", "Whetstone", "Legends of Chivalry", "Blue Cheese"]
                dislikedGifts = ["Gemstone Beads", "Armored Bear Stuffy", "Arithmetic Textbook"]
                break;
            case 'Shamir':
            case 'shamir':
                name = 'Shamir'
                thumbnail = 'https://i.imgur.com/gK1Iz5F.png'
                hexColor = '#57587e'
                likedGifts = ["Sunflower", "Exotic Spices", "Coffee Beans", "Hunting Dagger", "Book of Sheet Music"]
                dislikedGifts = ["Monarch Studies Book", "Blue Cheese", "Book of Crest Designs"]
                break;
            case 'rhea':
            case 'Rhea':
            case 'seiros':
            case 'Seiros':
                name = 'Rhea'
                thumbnail = 'https://i.imgur.com/HdH739v.png'
                hexColor = '#bbf7d0'
                likedGifts = ["Landscape Painting", "Goddess Statuette", "Ancient Coin"]
                dislikedGifts = ["Exotic Spices"]
                break;
            case 'yuri':
            case 'Yuri':
                name = 'Yuri'
                thumbnail = 'https://i.imgur.com/Paxgdl2.png'
                hexColor = '#afacdb'
                likedGifts = ['Board Game', 'Tasty Baked Treat', 'Goddess Statuette', 'Arithmetic Textbook']
                dislikedGifts = ['Book of Sheet Music', 'Riding Boots']
                break;
            case 'hapi':
            case 'Hapi':
                name = 'Hapi'
                thumbnail = 'https://i.imgur.com/r5qfcC9.png'
                hexColor = '#dc5f65'
                likedGifts = ['Pitcher Plant', 'Tasty Baked Treat', 'Smoked Meat', 'Exotic Spices', 'Coffee Beans', 'Hunting Dagger']
                dislikedGifts = ['Training Weight', 'Monarch Studies Book', 'Legend of Chivalry']
                break;
            case 'Balthus':
            case 'balthus':
                name = 'Balthus'
                thumbnail = 'https://i.imgur.com/AUfVNC2.png'
                hexColor = '#5f5c6f'
                likedGifts = ['Ancient Coin', 'Ceremonial Sword', 'Whetstone', 'Blue Cheese']
                dislikedGifts = ['Fishing Float', 'Watering Can', 'Armored Bear Stuffy']
                break;
            case 'constance':
            case 'Constance':
                name = 'Constance'
                thumbnail = 'https://i.imgur.com/n7XHQLu.png'
                hexColor = '#fffebb'
                likedGifts = ['Lily of the Valley', 'Tea Leaves', 'Arithmetic Textbook', 'Book of Crest Designs']
                dislikedGifts = ['Blue Cheese', 'Exotic Spices']
                break;
            default:
                name = "N/A"
        }
    
              if(name == "N/A") {
                  return "Not a playable unit"
              } else {
                    unitGiftsEmbed
                        .setColor(hexColor)
                        .setAuthor(name)
                        .setThumbnail(thumbnail)
                        .addField("Liked Gifts", likedGifts.join("\n"), true)
                        .addField("Disliked Gifts", dislikedGifts.join("\n"), true)
                    return unitGiftsEmbed
                }
    }

    async run(msg, [unit]) {
        let result = this.verifyUnit(unit);
        msg.send(result);
    }

};