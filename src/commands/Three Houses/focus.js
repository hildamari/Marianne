const { Command } = require('klasa');
const { MessageEmbed } = require('discord.js');

module.exports = class extends Command {

    constructor(...args) {
        super(...args, { 
            description: 'Replies with information about specific units\' learning focuses from Fire Emblem Three Houses',
            extendedHelp: 'This command contains spoilers for Fire Emblem Three Houses!',
            usage: '<unit:string>'
        });

        this.customizeResponse('unit',
            'You must enter a valid unit!');
    }

    verifyUnit(unit) {
        const unitFocusEmbed = new MessageEmbed()

        let name = '', titles = [], descriptions = [], goals = [], hexColor = "", thumbnail = "";

        switch(unit) {
            case 'Edelgard':
            case 'edelgard':
                name = "Edelgard"
                hexColor = "#fefff4"
                thumbnail = "https://i.imgur.com/HQ3yEk4.png"
                titles[0] = "__**Lead Like a Lord**__"
                titles[1] = "__**Strong in Heavy Armor**__"
                goals[0] = "Focus on **sword and authority** skills to excel as a Lord."
                goals[1] = "Focus on **axe and heavy armor** skills to excel as a heavy armor class."
                descriptions[0] = "A Lord must know how to command others. Authority is therefore a must. It is also traditional to study sword technique. Will you help me with these endeavors?"
                descriptions[1] = "Perhaps it is due to the power of Crests, but heavy armor has never slowed me down. Still, it wouldn't hurt to improve further in that regard. As it were, nothing complements heavy armor better than an axe."
                break;
            case 'Hubert':
            case 'hubert':
                name = 'Hubert'
                thumbnail = 'https://i.imgur.com/KCc36C6.png'
                hexColor = '#343d3e'
                titles[0] = "__**The Hands-Off Approach**__"
                titles[1] = "__**Immediate Aid**__"
                titles[2] = "__**Lethal Efficiency**__"
                goals[0] = "Focus on the **reason** skill to excel as a magic class."
                goals[1] = "Focus on **lance and riding** skills to excel as a cavalry class."
                goals[2] = "Focus on the **bow** skill to excel as a Sniper."
                descriptions[0] = "I prefer to slay my enemies without having to lay a finger on them. With that kind of power, why would I bother with normal weapons? By focusing on reason, I can be a great magic user."
                descriptions[1] = "I have realized, unfortunately, that my current training is insufficient to respond quickly to the dangers facing Lady Edelgard. I must practice my riding and lance skills, so that I can rush to her aid at a moment's notice."
                descriptions[2] = "When it comes to eliminating enemies at a distance, it seems to me that the bow is more effective than magic. By perfecting my skills with the bow, I can be a fearsome Sniper raining death upon my foes."
                break;
            case 'Ferdinand':
            case 'ferdinand':
                name = 'Ferdinand von Aegir'
                thumbnail = 'https://i.imgur.com/iKtyabp.png'
                hexColor = '#feb472'
                titles[0] = "__**A Noble Cause**__"
                titles[1] = "__**Great Aspirations**__"
                titles[2] = "__**Not to be Outdone**__"
                goals[0] = "Focus on **lance and riding** skills to excel as a cavalry class."
                goals[1] = "Focus on **riding and heavy armor** skills to excel as a Great Knight."
                goals[2] = "Focus on **axe and heavy armor** skills to excel as a heavy armor class."
                descriptions[0] = "A noble must know how to ride a horse, to be certain, and should know how to wield a lance, as that is the most obvious weapon of choice for a rider. As a noble among nobles, it seems natural that I focus on these two skills."
                descriptions[1] = "A Great Knight is a rare treasure on the battlefield: heavy armor to shield allies, and a horse to ride through foes! That is the kind of knight I have always aspired to be."
                descriptions[2] = "I heard that Edelgard can wear heavy armor and swing an axe with ease. Well, so can I! I will need some further training in these skills to cultivate my natural talents, of course. Well, perhaps it is best if I leave it up to you."
                break;
            case 'Linhardt':
            case 'linhardt':
                name = 'Linhardt'
                thumbnail = 'https://i.imgur.com/X41XIXq.png'
                hexColor = '#476352'
                titles[0] = "__**A Bishop Here to Help**__"
                titles[1] = "__**A Reasonable Distance**__"
                goals[0] = "Focus on the **faith** skill to excel as a Bishop."
                goals[1] = "Focus on the **reason** skill to excel as a magic class."
                descriptions[0] = "If I must go to battle, it's best for me to study faith and be a Bishop. Playing a supporting role should keep me far away from the carnage."
                descriptions[1] = "Seeing as I have to strike others in battle occasionally, I am set on studying reason. Magic is still the best way to avoid the awful bore of ordinary weapons."
                break;
            case 'Caspar':
            case 'caspar':
                name = 'Caspar'
                thumbnail = 'https://i.imgur.com/mo0C51Q.png'
                hexColor = '#a6e4e2'
                titles[0] = "__**Blasting Through the Battlefield**__"
                titles[1] = "__**Bare Knuckle Brawler**__"
                titles[2] = "__**Split Decision**__"
                goals[0] = "Focus on the **axe** skill to excel as a Warrior."
                goals[1] = "Focus on the **brawling** skill to excel as a Grappler."
                goals[2] = "Focus on **axe and brawling** skills to excel as a War Master."
                descriptions[0] = "I wanna blast through battle, cutting my enemies down left and right, and the best way to do that is with an axe! Help me train my axe skills so I can be a great Warrior!"
                descriptions[1] = "Wham! Pow! As I always say, if all else fails, hit 'em with your fists. Train me up in hand-to-hand brawling, and I'll make a great Grappler!"
                descriptions[2] = "Maybe it's good to focus on one thing, but I can't do it! Since I love the axe and hand-to-hand brawling equally, I just have to hone both and be a War Master!"
                break;
            case 'Bernadetta':
            case 'bernadetta':
                name = 'Bernadetta'
                thumbnail = 'https://i.imgur.com/xowUlBr.png'
                hexColor = '#a080a8'
                titles[0] = "__**Sniping Out of Sight**__"
                titles[1] = "__**A Reasonable Distance**__"
                goals[0] = "Focus on the **bow** skill to excel as a Sniper."
                goals[1] = "Focus on **lance and riding** skills to excel as a cavalry class."
                descriptions[0] = "If I have to hit someone, I want to do it from so far away that there's no way I can get hit back. I think I want to master the bow, and then people everywhere will know me as Bernie the Sniper!"
                descriptions[1] = "I'm so sick of it! They won't hold still so I can attack them. They just keep running at me! I need to get better at riding so I can put some space between me and them. Ugh, that means I'll have to get better with lances too!"
                break;
            case 'Dorothea':
            case 'dorothea':
                name = 'Dorothea'
                thumbnail = 'https://i.imgur.com/S3FNa04.png'
                hexColor = '#7b585b'
                titles[0] = "__**Locking Down the Magic**__"
                titles[1] = "__**Faith in You**__"
                titles[2] = "__**A Graceful Blade**__"
                goals[0] = "Focus on the **reason** skill to excel as a Warlock."
                goals[1] = "Focus on the **faith** skill to excel as a Priest or Bishop."
                goals[2] = "Focus on the **sword** skill to excel as a sword fighting class."
                descriptions[0] = "Most nobles seem to think magic is their birthright and that commoners lack the talent for it. Help me master reason and train as a Warlock to prove them wrong."
                descriptions[1] = "I don't believe in the goddess, but...I do believe in you. You've taught us all so much, Professor. You've even taught me to have faith."
                descriptions[2] = "A woman has to look out for herself, yes? Allow me to refine my sword technique, so I can handle those who get too close. There is a place for a sword in the performing arts too, you know."
                break;
            case 'Petra':
            case 'petra':
                name = 'Petra'
                thumbnail = 'https://i.imgur.com/ZfvRIX6.png'
                hexColor = '#824364'
                titles[0] = "__**Thief with a Heart of Gold**__"
                titles[1] = "__**Taming Unfamiliar Beasts**__"
                goals[0] = "Focus on **sword and bow** skills to excel as a Thief or Assassin."
                goals[1] = "Focus on **axe and flying** skills to excel as a Wyvern Rider."
                descriptions[0] = "People are calling me a Thief, but I would never be doing bad things. It is because I am moving very quickly without my enemies noticing. This is why I must be learning the bow and sword."
                descriptions[1] = "There are no wyverns in Brigid, but I am wanting practice soaring in the sky. I would like to be training my axe skills as well. I have excitement for being a Wyvern Rider!"
                thumbnail = "https://i.imgur.com/Ddl1C8a.png"
                break;
            case 'Dimitri':
            case 'dimitri':
                name = "Dimitri"
                hexColor = "#fcfba8"
                titles[0] = "__**Lead Like a Lord**__"
                titles[1] = "__**His Father's Footsteps**__"
                goals[0] = "Focus on **sword and authority** skills to excel as a Lord."
                goals[1] = "Focus on **lance and riding** skills to excel as a cavalry class."
                descriptions[0] = "Lords must be leaders, so strong authority should be considered a requirement. They also fight from the front lines, and thus need to know how to handle a sword. Such are my goals... Are we aligned?"
                descriptions[1] = "My father was renowned for his horsemanship in battle, even from a young age. I, too, have a fondness for that pursuit, but to reach his heights, my lance and riding skills will need some polish."
                thumbnail = "https://i.imgur.com/Ddl1C8a.png"
                break;
            // dedue
            // felix
            // ashe
            // sylvain
            // mercedes
            // annette
            // ingrid
            // claude
            // hilda
            // lorenz
            // raphael
            // ignatz
            // lysithea
            // marianne
            // leonie
            // flayn
            // cyril
            // anna
            default:
                name = "N/A"
        }
    
              if(name == "N/A") {
                  return "Not a playable unit"
              } else {
                    unitFocusEmbed
                        .setColor(hexColor)
                        .setAuthor(name)
                        .setDescription("Areas of Focus")
                        .setThumbnail(thumbnail)
                        .addField(titles[0], goals[0])
                        .addField("Description", descriptions[0])
                        .addField(titles[1], goals[1])
                        .addField("Description", descriptions[1])
                        if(titles[2]) {
                            unitFocusEmbed.addField(titles[2], goals[2])
                            unitFocusEmbed.addField("Description", descriptions[2])
                        }
                        if(titles[3]) {
                            unitFocusEmbed.addField(titles[3], goals[3])
                            unitFocusEmbed.addField("Description", descriptions[3])
                        }
                    return unitFocusEmbed
                }
    }

    async run(msg, [unit]) {
        let result = this.verifyUnit(unit);
        msg.send(result);
    }
};