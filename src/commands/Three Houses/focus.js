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
            case 'dedue':
            case 'Dedue':
                name = 'Dedue'
                thumbnail = 'https://i.imgur.com/quIqslt.png'
                hexColor = '#e8e9e2'
                titles[0] = '__**His Highness\'s Shield**__'
                titles[1] = '__**His Highness\'s Strength**__'
                goals[0] = 'Focus on **axe and heavy armor** skills to excel as a heavy armor class.'
                goals[1] = 'Focus on the **brawling** skill to excel as a Grappler.'
                descriptions[0] = 'My purpose is to be a shield for His Highness. Please help me improve my axe and heavy armor skills.'
                descriptions[1] = 'I must be able to guard His Highness at all times, even when I am unarmed. Please train me in hand-to-hand brawling.'
                break;
            case 'felix':
            case 'Felix':
                name = 'Felix'
                thumbnail = 'https://i.imgur.com/YJcGEiK.png'
                hexColor = '#403f64'
                titles[0] = ''
                titles[1] = ''
                titles[2] = ''
                goals[0] = ''
                goals[1] = ''
                goals[2] = ''
                descriptions[0] = ''
                descriptions[1] = ''
                descriptions[2] = ''
                break;
            case 'ashe':
            case 'Ashe':
                name = 'Ashe'
                thumbnail = 'https://i.imgur.com/L4iJ8Ug.png'
                hexColor = '#b5bdc6'
                titles[0] = ''
                titles[1] = ''
                titles[2] = ''
                goals[0] = ''
                goals[1] = ''
                goals[2] = ''
                descriptions[0] = ''
                descriptions[1] = ''
                descriptions[2] = ''
                break;
            case 'Sylvain':
            case 'sylvain':
                name = 'Sylvain'
                thumbnail = 'https://i.imgur.com/77T2SRt.png'
                hexColor = '#e06c53'
                titles[0] = ''
                titles[1] = ''
                titles[2] = ''
                goals[0] = ''
                goals[1] = ''
                goals[2] = ''
                descriptions[0] = ''
                descriptions[1] = ''
                descriptions[2] = ''
                break;
            case 'mercedes':
            case 'Mercedes':
                name = 'Mercedes'
                thumbnail = 'https://i.imgur.com/y1BWI7T.png'
                hexColor = '#f4dcc4'
                titles[0] = ''
                titles[1] = ''
                goals[0] = ''
                goals[1] = ''
                descriptions[0] = ''
                descriptions[1] = ''
                break;
            case 'Annette':
            case 'annette':
                name = 'Annette'
                thumbnail = 'https://i.imgur.com/lnE7TRE.png'
                hexColor = '#f6a67d'
                titles[0] = ''
                titles[1] = ''
                goals[0] = ''
                goals[1] = ''
                descriptions[0] = ''
                descriptions[1] = ''
                break;
            case 'ingrid':
            case 'Ingrid':
                name = 'Ingrid'
                thumbnail = 'https://i.imgur.com/t8fCo54.png'
                hexColor = '#f8e5a0'
                titles[0] = ''
                titles[1] = ''
                goals[0] = ''
                goals[1] = ''
                descriptions[0] = ''
                descriptions[1] = ''
                break;
            case 'claude':
            case 'Claude':
                name = 'Claude'
                thumbnail = 'https://i.imgur.com/A4i8b9Z.png'
                hexColor = '#4a4240'
                titles[0] = ''
                titles[1] = ''
                goals[0] = ''
                goals[1] = ''
                descriptions[0] = ''
                descriptions[1] = ''
                break;
            case 'hilda':
            case 'Hilda':
                name = 'Hilda'
                thumbnail = 'https://i.imgur.com/zoScHRC.png'
                hexColor = '#fcafb7'
                titles[0] = ''
                titles[1] = ''
                goals[0] = ''
                goals[1] = ''
                descriptions[0] = ''
                descriptions[1] = ''
                break;
            case 'lorenz':
            case 'Lorenz':
                name = 'Lorenz'
                thumbnail = 'https://i.imgur.com/uYopDET.png'
                hexColor = '#7373ac'
                titles[0] = ''
                titles[1] = ''
                goals[0] = ''
                goals[1] = ''
                descriptions[0] = ''
                descriptions[1] = ''
                break;
            case 'raphael':
            case 'Raphael':
                name = 'Raphael'
                thumbnail = 'https://i.imgur.com/MB3wRvI.png'
                hexColor = '#f0d9a1'
                titles[0] = ''
                titles[1] = ''
                titles[2] = ''
                goals[0] = ''
                goals[1] = ''
                goals[2] = ''
                descriptions[0] = ''
                descriptions[1] = ''
                descriptions[2] = ''
                break;
            case 'Ignatz':
            case 'ignatz':
                name = 'Ignatz'
                thumbnail = 'https://i.imgur.com/TUREZkF.png'
                hexColor = '#c6c69d'
                titles[0] = ''
                titles[1] = ''
                titles[2] = ''
                goals[0] = ''
                goals[1] = ''
                goals[2] = ''
                descriptions[0] = ''
                descriptions[1] = ''
                descriptions[2] = ''
                break;
            case 'lysithea':
            case 'Lysithea':
                name = 'Lysithea'
                thumbnail = 'https://i.imgur.com/EIm3Zof.png'
                hexColor = '#fefcfd'
                titles[0] = '__**Suited for Sorcery**__'
                titles[1] = '__**Putting Faith in Reason**__'
                goals[0] = 'Focus on the **reason** skill to excel as a Warlock'
                goals[1] = 'Focus on **reason and faith** skills to excel as a Gremory.'
                descriptions[0] = 'Sorcery is my natural talent, so it was inevitable that I\'d choose to be a Warlock. It\'s not easy, but no need to fear. I will never tire of studying reason.'
                descriptions[1] = 'I would hypothesize that reason, while necessary, cannot result in true understanding without a little faith. You\'ll let me test this theory, won\'t you?'
                break;
            case 'marianne':
            case 'Marianne':
                name = 'Marianne'
                thumbnail = 'https://i.imgur.com/OyUl9he.png'
                hexColor = '#aad0fa'
                titles[0] = '__**Praying for Guidance**__'
                titles[1] = '__**Heroic on a Horse**__'
                titles[2] = '__**Prancing and Praying**__'
                titles[3] = '__**Friend of the Animals**__'
                goals[0] = 'Focus on the **faith** skill to excel as a Bishop.'
                goals[1] = 'Focus on **lance and riding** skills to excel as a cavalry class.'
                goals[2] = 'Focus on **faith and riding** skills to excel as a Holy Knight.'
                goals[3] = 'Focus on **lance and flying** skills to excel as a flying class.'
                descriptions[0] = 'I don\'t have any talents of my own, so all I can really do is pray to the goddess. Maybe if I truly master my faith, she\'ll show me the role I am meant to fulfill.'
                descriptions[1] = 'I get along well with horses, so I\'m OK at riding them. If I were more confident with a lance, then maybe...I might start to feel stronger.'
                descriptions[2] = 'Since I spend most of my time looking after horses and praying to the goddess, I think it makes sense for me to be a Holy Knight. With that in mind...would you help me refine my faith and riding skills?'
                descriptions[3] = 'I get along well with animals. Even in the darkest times, a pegasus or a wyvern can be a reassuring presence. I think I would like to train my lance and flying skills.'
                break;
            case 'leonie':
            case 'Leonie':
                name = 'Leonie'
                thumbnail = 'https://i.imgur.com/yZxvJG4.png'
                hexColor = '#f17d5b'
                titles[0] = '__**Just Like Jeralt**__'
                titles[1] = '__**Bow on the Go**__'
                goals[0] = 'Focus on **lance and riding** skills to excel as a cavalry class.'
                goals[1] = 'Focus on **bow and riding** skills to excel as a Bow Knight.'
                descriptions[0] = 'I love bows, of course, but archery alone will never make me an elite mercenary. If I want to follow Captain Jeralt\'s example, I need to hone my riding and lance skills.'
                descriptions[1] = 'It\'d be really useful if I could fire a bow more accurately from horseback. Think we could work on my riding, along with my bow skills?'
                break;
            case 'flayn':
            case 'Flayn':
            case 'Cethleann':
            case 'cethleann':
                name = 'Flayn'
                thumbnail = 'https://i.imgur.com/1PcDmnL.png'
                hexColor = '#9ae5b9'
                titles[0] = '__**A Passion to Heal**__'
                titles[1] = '__**A Passion to Protect**__'
                goals[0] = 'Focus on the **faith** skill to excel as a Bishop.'
                goals[1] = 'Focus on **reason and faith** skills to excel as a Gremory.'
                descriptions[0] = 'I believe I am better suited to healing than fighting. Rather than train with traditional weapons, then, I think it best for me to focus upon my faith.'
                descriptions[1] = 'While I find healing to be important and necessary, there are times when I feel it is insufficient. To be truly useful, I would like to improve at offensive magic as well, so my training can involve a balance of reason and faith.'
                break;
            case 'cyril':
            case 'Cyril':
                name = 'Cyril'
                thumbnail = 'https://i.imgur.com/Oss58fD.png'
                hexColor = '#453d3b'
                titles[0] = '__**Flying Toward Foes**__'
                titles[1] = '__**Harrier on High**__'
                goals[0] = 'Focus on **axe and flying** skills to excel as a Wyvern Rider.'
                goals[1] = 'Focus on **bow and riding** skills to excel as a Bow Knight.'
                descriptions[0] = 'I used to look after wyverns back in Almyra, so I know how to handle \'em. I can ride one into battle. But it\'d be nice if ya helped me work on my axe and flying skills.'
                descriptions[1] = 'Shamir taught me lots about bows, and I\'ve always gotten along real well with horses. Think we could work on both riding and bow skills?'
                break;
            case 'anna':
            case 'Anna':
                name = 'Anna'
                thumbnail = 'https://i.imgur.com/d2dCJxN.png'
                hexColor = '#d85e77'
                titles[0] = '__**On the Value of Swords**__'
                titles[1] = '__**Journey to the Great Knight**__'
                titles[2] = '__**In Remembrance of Origins**__'
                goals[0] = 'Focus on **sword** skills to excel as a sword fighting class.'
                goals[1] = 'Focus on **axe and riding** skills to excel as a Great Knight.'
                goals[2] = 'Focus on **sword and faith** skills to become a sword fighting class.'
                descriptions[0] = 'I don\'t understand their inherent value. I\'d like to better understand swords, so I can better sell them! Focusing on my skill with the blade seems the best way.'
                descriptions[1] = 'I want to be a Great Knight. I know I\'ve got the chops,what with my business sense, rapport with horses, and my undeniable brute strength. There\'s a big payoff if you let me—I just know it! What do you say?'
                descriptions[2] = 'I can see study of sword and faith really going hand in hand. Physical defense plus divine protection, you know? So? How about it?'
                break;
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