const { Command } = require('klasa');
const { MessageEmbed } = require('discord.js');

module.exports = class extends Command {

    constructor(...args) {
        super(...args, { 
            description: 'Replies with information about specific units\' learning focuses',
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
                titles[0] = '__**Becoming a Master**__'
                titles[1] = '__**A Reasonable Advantage**__'
                titles[2] = '__**Aiming for Perfection**__'
                goals[0] = 'Focus on the **sword** skill to excel as a Swordmaster.'
                goals[1] = 'Focus on **sword and reason** skills to excel as a Mortal Savant.'
                goals[2] = 'Focus on the **bow** skill to excel as a Sniper.'
                descriptions[0] = 'I\'ve known how to swing a sword since I was a boy, but I still have a lot to learn before I can be called a master. I would ask you to help me temper my sword skills.'
                descriptions[1] = 'I have never been interested in magic, but I do recognize that a swordsman who understands it has an advantage over one who doesn\'t. Help me hone my skills in reason, in addition to the sword.'
                descriptions[2] = 'As with the sword, I was trained in the bow from a young age. I have a good grasp of it, but there\'s always room for improvement. Might be a good time to work on my aim.'
                break;
            case 'ashe':
            case 'Ashe':
                name = 'Ashe'
                thumbnail = 'https://i.imgur.com/L4iJ8Ug.png'
                hexColor = '#b5bdc6'
                titles[0] = '__**Threatening from a Distance**__'
                titles[1] = '__**Strength from Above**__'
                titles[2] = '__**Required to Ride**__'
                goals[0] = 'Focus on the **bow** skill to excel as a Sniper.'
                goals[1] = 'Focus on **axe and flying** skills to excel as a Wyvern Rider.'
                goals[2] = 'Focus on **lance and riding** skills to excel as a cavalry class.'
                descriptions[0] = 'I\'m not exactly the most imposing figure on the battlefield, so I think it\'s best for me to focus on my bow skills and do my work from a distance.'
                descriptions[1] = 'I\'ve always had some skill with an axe, but not the strength for the front lines. I can manage more easily on the back of a wyvern, though, so I\'ll improve my axe and flying skills.'
                descriptions[2] = 'I\'ve never been very good at anything to do with horses, but...it\'s kind of a requirement for me to be a knight. Do you think you can help me with my lance and riding?'
                break;
            case 'Sylvain':
            case 'sylvain':
                name = 'Sylvain'
                thumbnail = 'https://i.imgur.com/77T2SRt.png'
                hexColor = '#e06c53'
                titles[0] = '__**Man of the People**__'
                titles[1] = '__**Protector of the People**__'
                titles[2] = '__**A Change of Pace**__'
                goals[0] = 'Focus on **lance and riding** skills to excel as a cavalry class.'
                goals[1] = 'Focus on **axe and heavy armor** skills to excel as a Great Knight.'
                goals[2] = 'Focus on **reason and faith** skills to excel as a magic class.'
                descriptions[0] = 'You know, jousting is a popular sport in Faerghus. The ladies love a guy who can joust. Speaking of... Let\'s polish up my riding and lance skills.'
                descriptions[1] = 'The best way to impress people is to save them by diving into harm\'s way. That\'s what a Great Knight does, yeah? So let\'s focus on my axe and heavy armor skills.'
                descriptions[2] = 'I want to study reason and faith. What, surprised? Hey, I may be rough around the edges, but that doesn\'t mean I can\'t appreciate a little magic!'
                break;
            case 'mercedes':
            case 'Mercedes':
                name = 'Mercedes'
                thumbnail = 'https://i.imgur.com/y1BWI7T.png'
                hexColor = '#f4dcc4'
                titles[0] = '__**Protection for Everyone**__'
                titles[1] = '__**Strength Without the Sweat**__'
                goals[0] = 'Focus on the **faith** skill to excel as a Bishop.'
                goals[1] = 'Focus on the **reason** skill to excel as a Warlock.'
                descriptions[0] = 'For me, there is nothing worse than seeing those I care about come to harm. That\'s why I want to study faith and help others as a Bishop.'
                descriptions[1] = 'Physical exertion is...not my forte. Oh, but I\'d still like to help as much as much as I possibly can! Maybe I can do that by studying reason and getting better at magic.'
                break;
            case 'Annette':
            case 'annette':
                name = 'Annette'
                thumbnail = 'https://i.imgur.com/lnE7TRE.png'
                hexColor = '#f6a67d'
                titles[0] = '__**A Reasonable Passion**__'
                titles[1] = '__**Full of Surprises**__'
                goals[0] = 'Focus on the **reason** skill to excel as a Warlock.'
                goals[1] = 'Focus on the **axe** skill to excel as a Warrior.'
                descriptions[0] = 'My passion has always been for sorcery! With that passion and some more time studying reason, I can be a powerful magic user!'
                descriptions[1] = 'It\'s about time I learned how to wield House Dominic\'s Relic properly. It might surprise you to hear this, but I do actually know a thing or two about axes. Let me take this opportunity to improve my skills!'
                break;
            case 'ingrid':
            case 'Ingrid':
                name = 'Ingrid'
                thumbnail = 'https://i.imgur.com/t8fCo54.png'
                hexColor = '#f8e5a0'
                titles[0] = '__**Vying for Versatility**__'
                titles[1] = '__**Back to Basics**__'
                titles[2] = '__**A Refined Knight**__'
                goals[0] = 'Focus on **lance and flying** skills to excel as a Pegasus Knight.'
                goals[1] = 'Focus on **lance and riding** skills to excel as a cavalry class.'
                goals[2] = 'Focus on the **sword** skill to excel as a sword fighting class.'
                descriptions[0] = 'I have always admired Pegasus Knights for the versatility they bring to battle. By studying flight, as well as the lance,I am sure to be useful no matter the terrain.'
                descriptions[1] = 'I\'d like to get back to fundamentals, and since theword "knight" originally referred to one who fights on horseback, I need to practice riding and using a lance.'
                descriptions[2] = 'I\'ve studied the sword since I was young, but seeing how far some of the others have come has made me keenly aware that my own skills could use refining.'
                break;
            case 'claude':
            case 'Claude':
                name = 'Claude'
                thumbnail = 'https://i.imgur.com/A4i8b9Z.png'
                hexColor = '#4a4240'
                titles[0] = '__**Lead Like a Lord**__'
                titles[1] = '__**Rite of Passage**__'
                goals[0] = 'Focus on **sword and authority** skills to excel as a Lord.'
                goals[1] = 'Focus on **axe and flying** skills to excel as a Wyvern Rider.'
                descriptions[0] = 'A Lord has to lead troops into battle, so it\'s important that I master authority. And if I\'m going to hold my own in the vanguard, I\'ll need to achieve sword mastery as well. Might be a challenge, but nothing I can\'t handle.'
                descriptions[1] = 'Between you and me, being able to ride a wyvern is kind of a rite of passage where I\'m from. I\'ll need to brush up on my flying and axe skills to really excel, though. I can count on you to help me, right?'
                break;
            case 'hilda':
            case 'Hilda':
                name = 'Hilda'
                thumbnail = 'https://i.imgur.com/zoScHRC.png'
                hexColor = '#fcafb7'
                titles[0] = '__**Stick to What You Know**__'
                titles[1] = '__**A Strong Steed**__'
                goals[0] = 'Focus on the **axe** skill to excel as a Warrior.'
                goals[1] = 'Focus on **axe and flying** skills to excel as a flying class.'
                descriptions[0] = 'I\'m pretty good with an axe, since it\'s a House Goneril tradition to learn it from a young age. Stick to what you know, right? Easier that way.'
                descriptions[1] = 'Lugging a big, ol\' axe into battle is so much work. Why bother when an animal friend with cute wings can just carry me and my axe wherever we wanna go? So let\'s just train up my axe and flying skills, OK?'
                break;
            case 'lorenz':
            case 'Lorenz':
                name = 'Lorenz'
                thumbnail = 'https://i.imgur.com/uYopDET.png'
                hexColor = '#7373ac'
                titles[0] = '__**A Noble\'s Duty**__'
                titles[1] = '__**The Ideal Role**__'
                goals[0] = 'Focus on **lance and riding** skills to excel as a riding class.'
                goals[1] = 'Focus on **reason and riding skills** to excel as a Dark Knight.'
                descriptions[0] = 'When I envision nobles in battle, I see them gallantly racing across the field on horseback, trusty lance in hand. It is my duty to meet this ideal, hence my interest in lance and riding skills.'
                descriptions[1] = 'As masters of both weaponry and magic, Dark Knights are true paragons of excellence on the battlefield. With reason as a prerequisite, it seems I am well suited for the role, wouldn\'t you say?'
                break;
            case 'raphael':
            case 'Raphael':
                name = 'Raphael'
                thumbnail = 'https://i.imgur.com/MB3wRvI.png'
                hexColor = '#f0d9a1'
                titles[0] = '__**Master of Muscles**__'
                titles[1] = '__**The Biggest on the Battlefield**__'
                titles[2] = '__**Hulking Hero**__'
                goals[0] = 'Focus on **axe and brawling** skills to excel as a War Master.'
                goals[1] = 'Focus on **axe and heavy armor** skills to excel as a heavy armor class.'
                goals[2] = 'Focus on **sword and axe** skills to excel as a Hero.'
                descriptions[0] = 'People say my muscles\'ll make me a great War Master, and I\'ve got nothing against working on my axe and brawling skills. Whaddaya think, Professor?'
                descriptions[1] = 'Professor, do you know how to make a big guy look even bigger? Put him in a giant suit of armor! So, how about training up my heavy armor and axe skills?'
                descriptions[2] = 'Raphael the Hero...now that\'s got a ring to it! Makes you think of a guy who storms castles and rescues princesses, doesn\'t it? That settles it! I\'m gonna train in the axe and sword so I can be the most heroic Hero ever!'
                break;
            case 'Ignatz':
            case 'ignatz':
                name = 'Ignatz'
                thumbnail = 'https://i.imgur.com/TUREZkF.png'
                hexColor = '#c6c69d'
                titles[0] = '__**Line of Sight**__'
                titles[1] = '__**Moving Unseen**__'
                titles[2] = '__**Might and Magic**__'
                goals[0] = 'Focus on the **bow** skill to excel as a Sniper.'
                goals[1] = 'Focus on **sword and bow** skills to excel as a Thief or Assassin.'
                goals[2] = 'Focus on **sword and reason** skills to excel as a Mortal Savant.'
                descriptions[0] = 'A physique like mine isn\'t suited to combat in close quarters, so I think I can be most helpful by using a bow. Let\'s hope I don\'t ever lose my glasses.'
                descriptions[1] = 'I know I don\'t stand out much, but I\'ve been thinking about how to turn that weakness into a strength. It\'s good to move about the battlefield unnoticed. I\'ll need to brush up on my sword and bow skills, though.'
                descriptions[2] = 'There are some enemies you can\'t hope to defeat in a straight fight, but who are vulnerable to magic. That\'s why I want to use my own style, combining the study of reason with the sword.'
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
            // case 'yuri':
            // case 'Yuri':
            // case 'hapi':
            // case 'Hapi':
            // case 'Balthus':
            // case 'balthus':
            // case 'constance':
            // case 'Constance':
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