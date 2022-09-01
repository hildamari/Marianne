import { ApplyOptions } from '@sapphire/decorators';
import { Command } from '@sapphire/framework';
import { MessageEmbed } from 'discord.js';
import { PaginatedMessage } from '@sapphire/discord.js-utilities';

@ApplyOptions<Command.Options>({
    name: 'Unit',
	description: 'Display info for Three Houses units',
    detailedDescription: 'Contains spoilers for Three Houses'
})
export class UnitCommand extends Command {
	// Register slash and context menu command
	public override registerApplicationCommands(registry: Command.Registry) {
        registry.registerChatInputCommand((builder) =>
          builder //
            .setName(this.name)
            .setDescription(this.description)
            .addStringOption((option) =>
              option //
                .setName('unit')
                .setDescription('Unit name to get info for')
                .setRequired(true)
            ),
            {
                idHints: ['1014618876677460061'],
            }
        );
    }

	public async chatInputRun(interaction: Command.ChatInputInteraction) {
        this.container.client.application?.commands
        const unitName = interaction.options.getString('unit', true);
        const lowerCase = unitName.toLowerCase()

        if(lowerCase == 'byleth') {
            return interaction.reply({ content: 'Please use `BylethM/Bylad` for M!Byleth or `BylethF/Bylass` for F!Byleth'})
        } else {
            let name = ''
            let hexColor = '',
            quote = '',
            basehp = 0, basestr = 0, basedef = 0, basemag = 0, basedex = 0, baseres = 0, basespd = 0, baselck = 0, basecha = 0
            let aliases:string[] = [], gender = '', race = '', birthday = '', fodlanBirthday = '', crest = '', relatives = ['']
            let nationality = '', hometown = '', residence = '', faction = '', occupation = '', startingClass = ''
            let vA = '', crestImage = '', heightInCM = 0, heightInCMPart2 = 0, lostItems = [''], personalSkillNames = [''], personalSkillDesc = ['']
            let hpgrowth = 0, strgrowth = 0, maggrowth = 0, dexgrowth = 0, defgrowth = 0, resgrowth = 0, spdgrowth = 0, lckgrowth = 0, chagrowth = 0
            let proficientIn: any[] = [], notProficientIn: any[] = [], buddingTalent: any, unlock = '', unlockDesc = '', fromChapter = '', recruitment = '', 
            reasonSpells = [''], faithSpells = [''], thumbnail = '', titles = [''], goals = [''], descriptions = [''], likedGifts = [''], dislikedGifts = ['']
            const sword = this.container.client.emojis.cache.find(emoji => emoji.name === "sword");
            const axe = this.container.client.emojis.cache.find(emoji => emoji.name === "axe");
            const brawling = this.container.client.emojis.cache.find(emoji => emoji.name === "brawling");
            const lance = this.container.client.emojis.cache.find(emoji => emoji.name === "lance");
            const bow = this.container.client.emojis.cache.find(emoji => emoji.name === "bow");
            const reason = this.container.client.emojis.cache.find(emoji => emoji.name === "reason");
            const faith = this.container.client.emojis.cache.find(emoji => emoji.name === "faith");
            const buddingTalentEmote = this.container.client.emojis.cache.find(emoji => emoji.name === "buddingtalent");
            const authority = this.container.client.emojis.cache.find(emoji => emoji.name === "authority");
            const heavyArmor = this.container.client.emojis.cache.find(emoji => emoji.name === "heavyarmor");
            const riding = this.container.client.emojis.cache.find(emoji => emoji.name === "riding");
            const flying = this.container.client.emojis.cache.find(emoji => emoji.name === "flying");
            const profUp = this.container.client.emojis.cache.find(emoji => emoji.name === "professorup");
            const profDown = this.container.client.emojis.cache.find(emoji => emoji.name === "professordown");

            const lysitheaCrests = ['https://i.imgur.com/2oGFZnj.png', 'https://i.imgur.com/xPdFnyE.png']
            let max = 1
            let min = 0
            let lysitheaCrest = lysitheaCrests[Math.floor(Math.random() * (max - min + 1) + min)]

            switch(lowerCase) {
                case 'bylethm':
                case 'bylad':
                    name = 'Byleth Eisner',
                    hexColor = '4a7588' as `#${string}`,
                    quote = 'When I was a mercenary, I rarely got too close to anyone. That all changed when I became a professor.'
                    basehp = 27, basestr = 13, basedef = 6, basemag = 6, basedex = 9, baseres = 6, basespd = 8, baselck = 8, basecha = 7,
                    aliases = ["The Ashen Demon", "Professor", "Teach"],
                    gender = "Male",
                    race = "Human",
                    birthday = "September 20th",
                    fodlanBirthday = "20th of the Horsebow Moon, Year 1159",
                    crest = "Crest of Flames",
                    relatives = ['Jeralt (father)', '||Sitri (mother)||'],
                    nationality = "Fódlan",
                    hometown = "N/A",
                    residence = "Garreg Mach",
                    faction = "Church of Seiros",
                    occupation = "Teacher at the Officers Academy; Mercenary (Formerly)",
                    startingClass = "Commoner",
                    vA = "Yūsuke Kobayashi (Japanese)\nChris Niosi (Former, English), Zach Aguilar (Current, English)",
                    crestImage = "https://i.imgur.com/nBEWjAw.png",
                    heightInCM = 175,
                    hpgrowth = 45, strgrowth = 45, maggrowth = 35, dexgrowth = 45, defgrowth = 35, resgrowth = 30, spdgrowth = 45, lckgrowth = 45, chagrowth = 45,
                    lostItems = ["N/A"],
                    personalSkillNames = ["Professor's Guidance", "Professor's Guidance+"],
                    personalSkillDesc = ["+20% Experience Gained to user and adjacent ally", "+20% Experience Gained to user and adjacent ally, +2 Damage Dealt"],
                    proficientIn = [sword, brawling, authority],
                    notProficientIn = ["Nothing"],
                    buddingTalent = faith,
                    unlock = "White Magic Avoid +20",
                    unlockDesc = "Grants Avo +20 when using white magic.",
                    fromChapter = "1",
                    recruitment = "Unlocked at the start",
                    reasonSpells = ["Fire (D)",	"Thunder (D+)",	"Bolganone (C)", "Ragnarok (A)"],
                    faithSpells = ["Heal (D)", "Nosferatu (D+)", "Recover (C)", "Aura (A)"],
                    thumbnail = "https://i.imgur.com/6WmePDH.png"
                    break;
                case 'bylethf':
                case 'bylass':
                    name = 'Byleth Eisner',
                    hexColor = `4a7588` as `#${string}`,
                    quote = 'When I was a mercenary, I rarely got too close to anyone. That all changed when I became a professor.'
                    basehp = 27, basestr = 13, basedef = 6, basemag = 6, basedex = 9, baseres = 6, basespd = 8, baselck = 8, basecha = 7,
                    aliases = ["The Ashen Demon", "Professor", "Teach"],
                    gender = "Female",
                    race = "Human",
                    birthday = "September 20th",
                    fodlanBirthday = "20th of the Horsebow Moon, Year 1159",
                    crest = "Crest of Flames",
                    relatives = ['Jeralt (father)', '||Sitri (mother)||'],
                    nationality = "Fódlan",
                    hometown = "N/A",
                    residence = "Garreg Mach",
                    faction = "Church of Seiros",
                    occupation = "Teacher at the Officers Academy; Mercenary (Formerly)",
                    startingClass = "Commoner",
                    vA = "Shizuka Ito (Japanese)\nJeannie Tirado (English)",
                    crestImage = "https://i.imgur.com/nBEWjAw.png",
                    heightInCM = 164,
                    hpgrowth = 45, strgrowth = 45, maggrowth = 35, dexgrowth = 45, defgrowth = 35, resgrowth = 30, spdgrowth = 45, lckgrowth = 45, chagrowth = 45,
                    lostItems = ["N/A"],
                    personalSkillNames = ["Professor\'s Guidance", "Professor\'s Guidance+"],
                    personalSkillDesc = ["+20% Experience Gained to user and adjacent ally", "+20% Experience Gained to user and adjacent ally, +2 Damage Dealt"],
                    proficientIn = [sword, brawling, authority],
                    notProficientIn = ["Nothing"],
                    buddingTalent = faith,
                    unlock = "White Magic Avoid +20",
                    unlockDesc = "Grants Avo +20 when using white magic.",
                    fromChapter = "1",
                    recruitment = "Unlocked at the start",
                    reasonSpells = ["Fire (D)",	"Thunder (D+)",	"Bolganone (C)", "Ragnarok (A)"],
                    faithSpells = ["Heal (D)", "Nosferatu (D+)", "Recover (C)", "Aura (A)"],
                    thumbnail = "https://i.imgur.com/nBEWjAw.png"
                    break;
                case 'edelgard':
                    name = 'Edelgard von Hresvelg',
                    aliases = ['||Flame Emperor||'],
                    quote = 'People believe Crests are blessings from the Goddess, that they are necessary to maintain order in Fódlan. But the people are wrong. Crests are to blame for this brutal, irrational world we live in.'
                    thumbnail = 'https://i.imgur.com/HQ3yEk4.png',
                    hexColor = 'fefff4' as `#${string}`,
                    gender = 'Female',
                    race = 'Human',
                    birthday = 'June 22nd',
                    fodlanBirthday = '22nd of the Garland Moon; Imperial Year 1162',
                    crest = 'Minor Crest of Seiros, ||Major Crest of Flames||',
                    relatives = ['Patricia (mother)', 'Ionius IX (father)', 'Lord Arundel (uncle)', 'Lambert (stepfather)', 'Dimitri (stepbrother)', 'five older brothers (all deceased)', 'three older sisters (all deceased)', 'two younger siblings (both deceased)'],
                    nationality = 'Adrestian',
                    startingClass = 'Noble',
                    hometown = 'Enbarr',
                    faction = 'Black Eagles',
                    occupation ='Heir apparent of the Adrestian Empire, Student at the Officers Academy, House leader of the Black Eagles, ||Emperor of the Adrestian Empire (Chapter 12 onwards||)',
                    vA = 'Ai Kakuma (Japanese)\nCristina Vee (E3 2018 Trailer, English), Tara Platt (English)',
                    residence = 'Garreg Mach Monastery, Fhirdiad (Formerly)',
                    heightInCM = 158,
                    titles = ["__**Lead Like a Lord**__", "__**Strong in Heavy Armor**__"],
                    goals = ["Focus on **sword and authority** skills to excel as a Lord.", "Focus on **axe and heavy armor** skills to excel as a heavy armor class."],
                    descriptions = ["A Lord must know how to command others. Authority is therefore a must. It is also traditional to study sword technique. Will you help me with these endeavors?", "Perhaps it is due to the power of Crests, but heavy armor has never slowed me down. Still, it wouldn't hurt to improve further in that regard. As it were, nothing complements heavy armor better than an axe."],
                    likedGifts = ["Carnation", "Armored Bear Stuffy", "Monarch Studies Book", "Board Game"],
                    dislikedGifts = ["Goddess Statuette", "Ceremonial Sword"],
                    basehp = 27, basestr = 13, basemag = 6, basedex = 9, basespd = 8, baselck = 8, basedef = 6, baseres = 6, basecha = 7,
                    hpgrowth = 40, strgrowth = 55, maggrowth = 45, dexgrowth = 45, defgrowth = 35, resgrowth = 35, spdgrowth = 40, lckgrowth = 30, chagrowth = 60,
                    lostItems = ["White Glove", "Time-worn Quill Pen", "Eastern Porcelain"],
                    personalSkillNames = ['Imperial Lineage', 'Imperial Lineage+'],
                    personalSkillDesc = ['+20% Experience Gained', '+20% Experience Gained, If unit takes no action except Wait, grants Res +4 for 1 turn'],
                    proficientIn = [sword, axe, authority, heavyArmor],
                    notProficientIn = [bow, faith],
                    buddingTalent = reason,
                    unlock = 'Black Magic Crit +10',
                    unlockDesc = 'Grants Crit +10 when using black magic.',
                    fromChapter = "-",
                    recruitment = "Cannot be recruited \n(Leaves your party if you choose to ||ally with the church|| during Chapter 11)",
                    reasonSpells = ["Fire (D)",	"Bolganone (C)", "Luna Λ (B)", "Hades Ω (A)"],
                    faithSpells = ["Heal (D)", "Nosferatu (D+)", "Recover (C)", "Seraphim (B)"]
                    break;
                case 'hubert':
                    name = 'Hubert von Vestra'
                    thumbnail = 'https://i.imgur.com/KCc36C6.png'
                    hexColor = '#343d3e' as `#${string}`
                    quote = 'My only wish is to see Lady Edelgard fulfill her ambitions. All other matters pale in comparison.'
                    aliases = ['N/A']
                    gender = 'Male'
                    race = 'Human'
                    birthday = 'April 17th'
                    fodlanBirthday = '17th of the Great Tree Moon, Imperial Year 1160'
                    crest = 'N/A'
                    relatives = ['Marquis Vestra (father)']
                    nationality = 'Adrestian Empire'
                    hometown = 'Enbarr'
                    residence = 'Garreg Mach Monestary'
                    faction = 'Black Eagles'
                    occupation = 'Student at the Officers Academy, Minister of the Imperial Household'
                    startingClass = 'Noble'
                    vA = 'Katsuyuki Konishi (Japanese)\nRobbie Daymond (English)'
                    crestImage = 'N/A'
                    heightInCM = 188
                    likedGifts = ["Coffee Beans", "Board Game", "The History of Fódlan"]
                    dislikedGifts = ["Legends of Chivalry", "Gemstone Beads", "Landscape Painting"]
                    hpgrowth = 35, strgrowth = 30, maggrowth = 55, dexgrowth = 45, spdgrowth = 45, lckgrowth = 35, defgrowth = 25, resgrowth = 40, chagrowth = 35
                    personalSkillNames = ['Officer Duty']
                    personalSkillDesc = ['Boosts Gambit Might by 5']
                    proficientIn = [bow, reason, authority]
                    notProficientIn = [axe, faith]
                    buddingTalent = lance
                    unlock = 'Frozen Lance'
                    unlockDesc = 'A magic attack. Mt increases based on unit’s Dex.'
                    reasonSpells = ["Miasma Δ (D)",	"Mire Β (D+)", "Banshee Θ (C)",	"Death Γ (B)", "Dark Spikes Τ (A)"]
                    faithSpells = ["Heal (D)", "Nosferatu (D+)", "Recover (C)"]
                    fromChapter = "-"
                    recruitment = "Cannot be recruited \n(Leaves your party if you choose to ||ally with the church|| during Chapter 11)"
                    lostItems = ["Hresvelg Treatise", "Noxious Handkerchief", "Folding Razor"]
                    titles = ["__**The Hands-Off Approach**__", "__**Immediate Aid**__", titles[2] = "__**Lethal Efficiency**__"]
                    goals = ['Focus on the **reason** skill to excel as a magic class.', 'Focus on **lance and riding** skills to excel as a cavalry class.', 'Focus on the **bow** skill to excel as a Sniper.']
                    descriptions = ['I prefer to slay my enemies without having to lay a finger on them. With that kind of power, why would I bother with normal weapons? By focusing on reason, I can be a great magic user.', 'I have realized, unfortunately, that my current training is insufficient to respond quickly to the dangers facing Lady Edelgard. I must practice my riding and lance skills, so that I can rush to her aid at a moment\'s notice.', 'When it comes to eliminating enemies at a distance, it seems to me that the bow is more effective than magic. By perfecting my skills with the bow, I can be a fearsome Sniper raining death upon my foes.']
                    basehp = 22, basestr = 6, basemag = 12, basedex = 6, basespd = 7, baselck = 6, basedef = 4, baseres = 7, basecha = 6
                    break;
                case 'ferdinand':
                case 'ferdinand von aegir':
                case 'ferdie':
                    name = 'Ferdinand von Aegir'
                    thumbnail = 'https://i.imgur.com/iKtyabp.png'
                    hexColor = '#feb472' as `#${string}`
                    quote = 'I am Ferdinand von Aegir!'
                    basehp = 28, basestr = 8, basemag = 5, basedex = 6, basespd = 8, baselck = 6, basedef = 6, baseres = 2, basecha = 7
                    titles = ['__**A Noble Cause**__', '__**Great Aspirations**__', '__**Not to be Outdone**__']
                    goals = ['Focus on **lance and riding** skills to excel as a cavalry class.', 'Focus on **riding and heavy armor** skills to excel as a Great Knight.', 'Focus on **axe and heavy armor** skills to excel as a heavy armor class.']
                    descriptions = ['A noble must know how to ride a horse, to be certain, and should know how to wield a lance, as that is the most obvious weapon of choice for a rider. As a noble among nobles, it seems natural that I focus on these two skills.', 'A Great Knight is a rare treasure on the battlefield: heavy armor to shield allies, and a horse to ride through foes! That is the kind of knight I have always aspired to be.', 'I heard that Edelgard can wear heavy armor and swing an axe with ease. Well, so can I! I will need some further training in these skills to cultivate my natural talents, of course. Well, perhaps it is best if I leave it up to you.']
                    lostItems = ["Maintenance Oil", "Agricultural Survey", "Bag of Tea Leaves"]
                    startingClass = "Noble"
                    fromChapter = "2"
                    recruitment = "Need 10 Dexterity and C in Heavy Armor"
                    reasonSpells = ["Thunder (D)", "Fire (D+)",	"Thoron (C)", "Bolganone (B)"]
                    faithSpells = ["Heal (D)", "Nosferatu (D+)", "Ward (C)", "Restore (B)"]
                    proficientIn = [sword, lance, axe, riding]
                    notProficientIn = ["Nothing"]
                    buddingTalent = heavyArmor
                    unlock = 'Seal Speed'
                    unlockDesc = 'If unit damages foe during combat, foe suffers Spd -6 for 1 turn after combat.'
                    personalSkillNames = ['Confidence']
                    personalSkillDesc = ['When HP is full, unit gains +15 Hit and Avoid']
                    hpgrowth = 50, strgrowth = 45, maggrowth = 20, dexgrowth = 40, spdgrowth = 50, lckgrowth = 40, defgrowth = 35, resgrowth = 20, chagrowth = 40
                    likedGifts = ["Riding Boots", "Whetstone", "Tea Leaves"]
                    dislikedGifts = ["Blue Cheese", "Coffee Beans"]
                    aliases = ['N/A']
                    gender = 'Male'
                    race = 'Human'
                    birthday = 'April 30th'
                    fodlanBirthday = '30th of the Great Tree Moon, Imperial Year 1162'
                    crest = 'Minor Crest of Cichol'
                    relatives = ['Derick (ancestor)', 'Duke Aegir (father)']
                    nationality = 'Adrestian Empire'
                    hometown = 'Dukedom of Aegir'
                    residence = 'Garreg Mach Monastery'
                    faction = 'Black Eagles'
                    occupation = 'Student at the Officers Academy, Heir of House Aegir'
                    vA = 'Taito Ban (Japanese)\nBilly Kametz (English)'
                    crestImage = 'https://i.imgur.com/IFS5RGj.png'
                    heightInCM = 175
                    heightInCMPart2 = 180
                    break;
                case 'linhardt':
                    name = 'Linhardt von Hevring'
                    thumbnail = 'https://i.imgur.com/X41XIXq.png'
                    hexColor = '#476352' as `#${string}`
                    quote = 'It\'s not that I want to miss lectures...exactly. Drowsiness is my archnemesis. For some reason I just can\'t seem to win against it. Just talking about it makes me sleepy...'
                    gender = 'Male'
                    aliases = ['N/A']
                    crest = 'Minor Crest of Cethleann'
                    race = 'Human'
                    birthday = 'November 7th'
                    fodlanBirthday = '7th of the Red Wolf Moon, Imperial Year 1163'
                    relatives = ['Count Hevring (father)']
                    nationality = 'Adrestian Empire'
                    hometown = 'County of Hevring'
                    residence = 'Garreg Mach Monastery'
                    faction = 'Black Eagles'
                    occupation = 'Student at the Officers Academy, Heir of House Hevring'
                    startingClass = 'Noble'
                    vA = 'Shun Horie (Japanese)\nChris Patton (English)'
                    crestImage = 'https://i.imgur.com/0NAUtkv.png'
                    heightInCM = 177
                    likedGifts = ["Tasty Baked Treat", "Book of Crest Designs", "Fishing Float"]
                    dislikedGifts = ["Training Weight", "Hunting Dagger"]
                    hpgrowth = 30, strgrowth = 30, maggrowth = 45, dexgrowth = 40, spdgrowth = 40, lckgrowth = 45, defgrowth = 30, resgrowth = 45, chagrowth = 20
                    personalSkillNames = ['Catnap']
                    personalSkillDesc = ['If unit waits without performing an action, restores 10% HP']
                    proficientIn = [reason, faith]
                    notProficientIn = [axe, brawling]
                    buddingTalent = 'N/A'
                    unlock = 'N/A'
                    unlockDesc = 'N/A'
                    reasonSpells = ["Wind (D)",	"Fire (D+)", "Cutting Gale (C)", "Bolganone (B)", "Excalibur (A)"]
                    faithSpells = ["Heal (D)", "Nosferatu (D+)", "Physic (C)", "Restore (B)", "Warp (A)"]
                    fromChapter = "2"
                    recruitment = "Need 10 Magic and C in Reason"
                    lostItems = ["The Saints Revealed", "Feather Pillow", "Animated Bait"]
                    titles = ['__**A Bishop Here to Help**__', '__**A Reasonable Distance**__']
                    goals = ['Focus on the **faith** skill to excel as a Bishop.', 'Focus on the **reason** skill to excel as a magic class.']
                    descriptions = ['If I must go to battle, it\'s best for me to study faith and be a Bishop. Playing a supporting role should keep me far away from the carnage.', 'Seeing as I have to strike others in battle occasionally, I am set on studying reason. Magic is still the best way to avoid the awful bore of ordinary weapons.']
                    basehp = 24, basestr = 5, basemag = 10, basedex = 6, basespd = 5, baselck = 7, basedef = 5, baseres = 9, basecha = 3
                    break;
                case 'caspar':
                    name = 'Caspar von Bergliez'
                    thumbnail = 'https://i.imgur.com/mo0C51Q.png'
                    hexColor = '#a6e4e2' as `#${string}`
                    quote = 'My instincts tell me that he\'s up to no good, and my instincts are never wrong.'
                    basehp = 26, basestr = 9, basemag = 3, basedex = 5, basespd = 6, baselck = 8, basedef = 6, baseres = 2, basecha = 4
                    titles = ['__**Blasting Through the Battlefield**__', '__**Bare Knuckle Brawler**__', '__**Split Decision**__']
                    goals = ['Focus on the **axe** skill to excel as a Warrior.', 'Focus on the **brawling** skill to excel as a Grappler.', 'Focus on **axe and brawling** skills to excel as a War Master.']
                    descriptions = ['I wanna blast through battle, cutting my enemies down left and right, and the best way to do that is with an axe! Help me train my axe skills so I can be a great Warrior!', 'Wham! Pow! As I always say, if all else fails, hit \'em with your fists. Train me up in hand-to-hand brawling, and I\'ll make a great Grappler!', 
                    'Maybe it\'s good to focus on one thing, but I can\'t do it! Since I love the axe and hand-to-hand brawling equally, I just have to hone both and be a War Master!']
                    lostItems = ["Thunderbrand Replica", "Tattered Overcoat", "Grounding Charm"]
                    fromChapter = "2"
                    recruitment = "Need 10 Strength and C in Brawling"
                    reasonSpells = ["Fire (D)",	"Bolganone (C)"]
                    faithSpells = ["Heal (D)",	"Nosferatu (D+)", "Recover (C)"]
                    proficientIn = [axe, brawling]
                    notProficientIn = [bow, reason, authority]
                    buddingTalent = 'N/A'
                    unlock = 'N/A'
                    unlockDesc = 'N/A'
                    personalSkillNames = ['Born Fighter']
                    personalSkillDesc = ['Adjacent foes receive Avoid -10 during combat']
                    hpgrowth = 55, strgrowth = 45, maggrowth = 25, dexgrowth = 45, spdgrowth = 45, lckgrowth = 40, defgrowth = 30, resgrowth = 20, chagrowth = 25
                    likedGifts = ["Training Weight", "Whetstone", "Hunting Dagger", "Smoked Meat"]
                    dislikedGifts = ["Fishing Float", "Floral Adornment", "Stylish Hair Clip"]
                    gender = 'Male'
                    aliases = ['N/A']
                    crest = 'N/A'
                    crestImage = 'N/A'
                    race = 'Human'
                    birthday = 'July 1st'
                    fodlanBirthday = '1st of the Blue Sea Moon, Imperial Year 1163'
                    relatives = ['Unnamed grandfather', 'Count Bergliez','unnamed older brother', 'Randolph (step-uncle)', 'Fleche (step-aunt)']
                    nationality = 'Adrestian Empire'
                    hometown = 'County of Bergliez'
                    residence = 'Garreg Mach Monastery'
                    faction = 'Black Eagles'
                    occupation = 'Student at the Officers Academy'
                    startingClass = 'Noble'
                    vA = 'Satoru Murakami (Japanese)\nBen Diskin (English)'
                    heightInCM = 159
                    heightInCMPart2 = 173
                    break;
                case 'bernie':
                case 'bernadetta':
                    quote = 'I do like my time alone. Actually, it\'s more of a need. But you\'re right. I also need to venture out every once in a while. Maybe if I work as hard as you do, I can try it a little more.'
                    name = 'Bernadetta von Varley'
                    thumbnail = 'https://i.imgur.com/xowUlBr.png'
                    hexColor = '#a080a8'
                    aliases = ['Bernie', 'Bern']
                    gender = 'Female'
                    race = 'Human'
                    crest = 'Minor Crest of Indech'
                    crestImage = 'https://i.imgur.com/ZzLhoeL.png'
                    birthday = 'December 12th'
                    fodlanBirthday = '12th of the Ethereal Moon, Imperial Year 1162'
                    relatives = ['Count Varley (father)', 'unnamed mother', 'unnamed grandfather', 'unnamed uncle']
                    nationality = 'Adrestian Empire'
                    hometown = 'County of Varley'
                    residence = 'Garreg Mach Monastery'
                    faction = 'Black Eagles'
                    occupation = 'Student at the Officers Academy, Heir of House Varley'
                    startingClass = 'Noble'
                    vA = 'Ayumi Tsuji (Japanese)\nErica Mendez (English)'
                    heightInCM = 150
                    heightInCMPart2 = 165
                    likedGifts = ["Pitcher Plant", "Armored Bear Stuffy", "Book of Sheet Music", "Watering Can", "Landscape Painting", "Dapper Handkerchief"]
                    dislikedGifts = ["Training Weight", "Hunting Dagger", "Ceremonial Sword"]
                    hpgrowth = 35, strgrowth = 35, maggrowth = 20, dexgrowth = 55, spdgrowth = 50, lckgrowth = 25, defgrowth = 20, resgrowth = 30, chagrowth = 35
                    personalSkillNames = ['Persecution Complex']
                    personalSkillDesc = ['When HP is not full, unit gains +5 Damage']
                    proficientIn = [lance, bow]
                    notProficientIn = [sword, axe, brawling, heavyArmor]
                    buddingTalent = riding
                    unlock = 'Pass'
                    unlockDesc = 'Allows unit to pass through spaces occupied by foes.'
                    reasonSpells = ["Blizzard (D)", "Thunder (D+)", "Thoron (C)", "Fimbulvetr (A)"]
                    faithSpells = ["Heal (D)", "Nosferatu (D+)", "Physic (C)", "Rescue (A)"]
                    fromChapter = "2"
                    recruitment = "Need 20 Strength and C in Bow"
                    lostItems = ["Needle and Thread", "Still-Life Picture",  "Hedgehog Case"]
                    titles = ['_**Sniping Out of Sight**__', '__**A Reasonable Distance**__']
                    goals = ['Focus on the **bow** skill to excel as a Sniper.', 'Focus on **lance and riding** skills to excel as a cavalry class.']
                    descriptions = ['If I have to hit someone, I want to do it from so far away that there\'s no way I can get hit back. I think I want to master the bow, and then people everywhere will know me as Bernie the Sniper!', 'I\'m so sick of it! They won\'t hold still so I can attack them. They just keep running at me! I need to get better at riding so I can put some space between me and them. Ugh, that means I\'ll have to get better with lances too!']
                    basehp = 25, basestr = 8, basemag = 5, basedex = 7, basespd = 7, baselck = 8, basedef = 6, baseres = 2, basecha = 6
                    break;
                case 'dorothea':
                    quote = 'Oh my, you look like a wonderful person. Is this your first time at the monastery? Shall I show you around? Ah, my name is Dorothea. Before enrolling in school, I was in an opera company at the capital.'
                    name = 'Dorothea Arnault'
                    thumbnail = 'https://i.imgur.com/S3FNa04.png'
                    hexColor = '#7b585b'
                    basehp = 24, basestr = 5, basemag = 11, basedex = 6, basespd = 7, baselck = 6, basedef = 4, baseres = 7, basecha = 8
                    titles = ['__**Locking Down the Magic**__', '__**Faith in You**__', '__**A Graceful Blade**__']
                    goals = ['Focus on the **reason** skill to excel as a Warlock.', 'Focus on the **faith** skill to excel as a Priest or Bishop.', 'Focus on the **sword** skill to excel as a sword fighting class.']
                    descriptions = ['Most nobles seem to think magic is their birthright and that commoners lack the talent for it. Help me master reason and train as a Warlock to prove them wrong.', 'I don\'t believe in the goddess, but...I do believe in you. You\'ve taught us all so much, Professor. You\'ve even taught me to have faith.', 'A woman has to look out for herself, yes? Allow me to refine my sword technique, so I can handle those who get too close. There is a place for a sword in the performing arts too, you know.']
                    lostItems = ["Silver Brooch", "Songstress Poster", "Lovely Comb"]
                    fromChapter = "2"
                    recruitment = "Need 25 Charm and B in Authority"
                    reasonSpells = ["Thunder (D)", "Thoron (C)", "Sagittae (B)", "Meteor (A)", "Agnea’s Arrow (A+)"]
                    faithSpells = ["Heal (D)", "Nosferatu (D+)", "Physic (C)"]
                    proficientIn = [sword, reason]
                    notProficientIn = [faith, riding, flying]
                    buddingTalent = faith
                    unlock = 'White Magic Avoid +20'
                    unlockDesc = 'Grants Avo +20 when using white magic.'
                    personalSkillNames = ['Songstress']
                    personalSkillDesc = ['At the start of each turn, restores adjacent allies’ HP by 10%']
                    hpgrowth = 40, strgrowth = 20, maggrowth = 40, dexgrowth = 45, spdgrowth = 50, lckgrowth = 35, defgrowth = 15, resgrowth = 35, chagrowth = 40
                    likedGifts = ["Book of Sheet Music", "Gemstone Beads", "Stylish Hair Clip"]
                    dislikedGifts = ["Goddess Statuette", "Floral Adornment"]
                    aliases = ['Mystical Songstress']
                    gender = 'Female'
                    race = 'Human'
                    crest = 'N/A'
                    crestImage = 'N/A'
                    birthday = 'September 29th'
                    fodlanBirthday = '29th of the Horsebow Moon, Imperial Year 1161'
                    relatives = ['Unnamed mother', 'unnamed father']
                    nationality = 'Adrestian Empire'
                    hometown = 'Embarr'
                    residence = 'Garreg Mach Monastery'
                    faction = 'Black Eagles, Mittelfrank Opera Company'
                    occupation = 'Songstress, Student at the Officers Academy'
                    startingClass = 'Commoner'
                    vA = 'Juri Nagatsuma (Japanese)\nAllegra Clark (English)'
                    heightInCM = 170
                    break;
                case 'petra': 
                    quote = 'You will be slapped down!'
                    name = 'Petra Macneary'
                    thumbnail = 'https://i.imgur.com/ZfvRIX6.png'
                    hexColor = '#824364'
                    gender = 'Female'
                    race = 'Human'
                    aliases = ['N/A']
                    crest = 'N/A'
                    crestImage = 'N/A'
                    birthday = 'September 7th'
                    fodlanBirthday = '7th of the Horsebow Moon, Imperial Year 1164'
                    relatives = ['King of Brigid (grandfather)', 'unnamed father']
                    nationality = 'Brigid'
                    hometown = 'Brigid'
                    residence = 'Garreg Mach Monastery, Adrestian Empire (Formerly)'
                    faction = 'Black Eagles'
                    occupation = 'Crown Princess of Brigid, Student at the Officers Academy'
                    startingClass = 'Commoner'
                    vA = 'Shizuka Ishigami (Japanese)\nFaye Mata (English)'
                    heightInCM = 161
                    likedGifts = ["Sunflower", "Hunting Dagger", "Exotic Spices", "Smoked Meat"]
                    dislikedGifts = ["Arithmetic Textbook", "Book of Crest Designs"]
                    hpgrowth = 45, strgrowth = 40, maggrowth = 25, dexgrowth = 50, spdgrowth = 60, lckgrowth = 45, defgrowth = 30, resgrowth = 15, chagrowth = 35
                    personalSkillNames = ['Hunter\'s Boon']
                    personalSkillDesc = ['When foe has less than 50% HP, Critical rate +20']
                    proficientIn = [sword, axe, bow, flying]
                    notProficientIn = [reason, faith]
                    buddingTalent = 'N/A'
                    unlock = 'N/A'
                    unlockDesc = 'N/A'
                    reasonSpells = ["Wind (D)", "Sagittae (C)"]
                    faithSpells = ["Heal (D)", "Nosferatu (D+)", "Restore (C)"]
                    fromChapter = "2"
                    recruitment = "Need 10 Dexterity and C in Riding"
                    lostItems = ["Exotic Feather", "Small Tanned Hide", "Annotated Dictionary"]
                    titles = ['__**Thief with a Heart of Gold**__', '__**Taming Unfamiliar Beasts**__']
                    goals = ['Focus on **sword and bow** skills to excel as a Thief or Assassin.', 'Focus on **axe and flying** skills to excel as a Wyvern Rider.']
                    descriptions = ['People are calling me a Thief, but I would never be doing bad things. It is because I am moving very quickly without my enemies noticing. This is why I must be learning the bow and sword.', 'There are no wyverns in Brigid, but I am wanting practice soaring in the sky. I would like to be training my axe skills as well. I have excitement for being a Wyvern Rider!']
                    basehp = 25, basestr = 9, basemag = 3, basedex = 7, basespd = 10, baselck = 7, basedef = 5, baseres = 2, basecha = 6
                    break;
                case 'dimitri':
                    name = 'Dimitri Alexandre Bladdyid'
                    quote = 'Someone must put a stop to this cycle of the strong trampling the weak.'
                    thumbnail = 'https://i.imgur.com/Ddl1C8a.png'
                    hexColor = '#fcfba8'
                    basehp = 28, basestr = 12, basemag = 4, basedex = 7, basespd = 7, baselck = 5, basedef = 7, baseres = 4, basecha = 9
                    titles = ['__**Lead Like a Lord**__', '__**His Father\'s Footsteps**__']
                    goals = ['Focus on **sword and authority** skills to excel as a Lord.', 'Focus on **lance and riding** skills to excel as a cavalry class.']
                    descriptions = ['Lords must be leaders, so strong authority should be considered a requirement. They also fight from the front lines, and thus need to know how to handle a sword. Such are my goals... Are we aligned?', 'My father was renowned for his horsemanship in battle, even from a young age. I, too, have a fondness for that pursuit, but to reach his heights, my lance and riding skills will need some polish.']
                    lostItems = ["Dulled Longsword", "Black Leather Gloves", "Training Logbook"]
                    fromChapter = "-"
                    recruitment = "Cannot be recruited"
                    reasonSpells = ["Thunder (D)", "Thoron (C)"]
                    faithSpells = ["Heal (D)", "Nosferatu (D+)", "Recover (C)", "Aura (A)"]
                    proficientIn = [sword, lance, authority]
                    notProficientIn = [axe, reason]
                    buddingTalent = riding
                    unlock = 'Seal Movement'
                    unlockDesc = 'If unit damages foe during combat, foe suffers Mv -1 for 1 turn after combat.'
                    personalSkillNames = ['Royal Lineage', 'Royal Lineage+']
                    personalSkillDesc = ['+20% Experience Gained', '+20% Experience Gained, Grants Avo +20 while unit is at full HP']
                    hpgrowth = 55, strgrowth = 60, maggrowth = 20, dexgrowth = 50, spdgrowth = 50, lckgrowth = 25, defgrowth = 40, resgrowth = 20, chagrowth = 55
                    likedGifts = ["Training Weight", "Whetstone", "Riding Boots", "Ceremonial Sword"]
                    dislikedGifts = ["Gemstone Beads", "Armored Bear Stuffy", "Book of Sheet Music"]
                    aliases = ['The Boar Prince', 'Prince/King of Delusion', 'The Tempest King', 'The Savior King']
                    vA = 'Kaito Ishikawa (Japanese), Mai Nishikawa (Japanese, young)\nChris Hackney (English)'
                    gender = 'Male'
                    race = 'Human'
                    birthday = 'December 20th'
                    fodlanBirthday = '20th of the Ethereal Moon, Imperial Year 1162'
                    relatives = ['Blaiddyd (ancestor)', 'Loog (ancestor)', 'Klaus I (ancestor)', 'Lambert (father)', 'Unnamed mother', 'Patricia (stepmother)', 'Rufus (paternal uncle)', 'Volkhard (step-uncle)', 'Edelgard (stepsister)', 'Duke Riegan (distant relative)', 'Godfrey (distant relative)', 'Claude (distant relative)']
                    nationality = 'Holy Kingdom of Faerghus'
                    hometown = 'Fhirdiad'
                    residence = 'Garreg Mach Monastery'
                    faction = 'Blue Lions'
                    occupation = 'Crown Prince of the Holy Kingdom of Faerghus, Squire of the Holy Kingdom Army (formerly), Student at the Officers Academy, House leader of the Blue Lions, King of the Holy Kingdom of Faerghus'
                    startingClass = 'Noble'
                    crest = 'Minor Crest of Blaiddyd'
                    crestImage = 'https://i.imgur.com/sS6zBAe.png'
                    heightInCM = 180
                    heightInCMPart2 = 188
                    break;
                case 'dedue':
                    quote = 'I have heard that you rescued His Highness. Words cannot express my gratitude. Should you ever require my strength, please know that I will hasten to repay this debt.'
                    name = 'Dedue Molinaro'
                    thumbnail = 'https://i.imgur.com/quIqslt.png'
                    hexColor = '#e8e9e2'
                    aliases = ['N/A']
                    gender = 'Male'
                    race = 'Human'
                    crest = 'N/A'
                    crestImage = 'N/A'
                    birthday = 'August 31st'
                    fodlanBirthday = '31st of the Verdant Rain Moon, Imperial Year 1161'
                    nationality = 'Duscur'
                    hometown = 'Holy Kingdom of Faerghus'
                    residence = 'Garreg Mach Monastery, Holy Kingdom of Faerghus'
                    faction = 'Blue Lions'
                    occupation = 'Student at the Officers Academy, Vassal of Dimitri'
                    relatives = ['Unnamed father (deceased)']
                    startingClass = 'Commoner'
                    vA = 'Takahashi Hidenori (Japanese)\nBen Lepley (English)'
                    heightInCM = 204
                    likedGifts = ["Exotic Spices", "Floral Adornment", "Watering Can"]
                    dislikedGifts = ["Book of Sheet Music", "The History of Fódlan"]
                    hpgrowth = 60, strgrowth = 50, maggrowth = 15, dexgrowth = 30, spdgrowth = 20, lckgrowth = 25, defgrowth = 50, resgrowth = 10, chagrowth = 30
                    personalSkillNames = ['Staunch Shield']
                    personalSkillDesc = ['If user waits without acting, Defense +4 for one turn']
                    proficientIn = [lance, axe, brawling, heavyArmor]
                    notProficientIn = [faith, riding, flying]
                    buddingTalent = 'N/A'
                    unlock = 'N/A'
                    unlockDesc = 'N/A'
                    reasonSpells = ["Fire (D)", "Bolganone (C)", "Ragnarok (A)"]
                    faithSpells = ["Heal (D)", "Nosferatu (D+)", "Recover (C)"]
                    fromChapter = "-"
                    recruitment = "Cannot be recruited"
                    lostItems = ["Gold Earring", "Gardening Sheers", "Iron Cooking Pot"]
                    titles = ['__**His Highness\'s Shield**__', '__**His Highness\'s Strength**__']
                    goals = ['Focus on **axe and heavy armor** skills to excel as a heavy armor class.', 'Focus on the **brawling** skill to excel as a Grappler.']
                    descriptions = ['My purpose is to be a shield for His Highness. Please help me improve my axe and heavy armor skills.', 'I must be able to guard His Highness at all times, even when I am unarmed. Please train me in hand-to-hand brawling.']
                    basehp = 30, basestr = 12, basemag = 2, basedex = 5, basespd = 7, baselck = 5, basedef = 8, baseres = 1, basecha = 4
                    break;
                case 'felix':
                    quote = 'There\'s nothing to be gained from fighting someone not worth dueling, after all.'
                    name = 'Felix Hugo Fraldarius'
                    thumbnail = 'https://i.imgur.com/YJcGEiK.png'
                    hexColor = '#403f64'
                    basehp = 26, basestr = 10, basemag = 5, basedex = 6, basespd = 9, baselck = 5, basedef = 5, baseres = 3, basecha = 5
                    titles = ['__**Becoming a Master**__', '__**A Reasonable Advantage**__', '__**Aiming for Perfection**__']
                    goals = ['Focus on the **sword** skill to excel as a Swordmaster.', 'Focus on **sword and reason** skills to excel as a Mortal Savant.', 'Focus on the **bow** skill to excel as a Sniper.']
                    descriptions = ['I\'ve known how to swing a sword since I was a boy, but I still have a lot to learn before I can be called a master. I would ask you to help me temper my sword skills.', 'I have never been interested in magic, but I do recognize that a swordsman who understands it has an advantage over one who doesn\'t. Help me hone my skills in reason, in addition to the sword.', 'As with the sword, I was trained in the bow from a young age. I have a good grasp of it, but there\'s always room for improvement. Might be a good time to work on my aim.']
                    lostItems = ["Moon Knight’s Tale", "Evil-Repelling Amulet", "Bundle of Herbs"]
                    fromChapter = "2"
                    recruitment = "Need 15 Speed and B+ in Swords"
                    reasonSpells = ["Thunder (D)", "Thoron (C)"]
                    faithSpells = ["Heal (D)", "Noferatu (D+)", "Recover (C)", "Restore (B)"]
                    proficientIn = [sword, bow, brawling]
                    notProficientIn = [reason, authority]
                    buddingTalent = reason
                    unlock = 'Black Magic Crit +10'
                    unlockDesc = 'Grants Crit +10 when using black magic.'
                    personalSkillNames = ['Lone Wolf']
                    personalSkillDesc = ['When a Battalion is not deployed or when battalion health is zero, damage dealt +5']
                    hpgrowth = 45, strgrowth = 55, maggrowth = 30, dexgrowth = 45, spdgrowth = 55, lckgrowth = 40, defgrowth = 30, resgrowth = 20, chagrowth = 30
                    likedGifts = ["Smoked Meat", "Hunting Dagger", "Training Weight", "Ceremonial Sword"]
                    dislikedGifts = ["Legends of Chivalry", "Armored Bear Stuffy", "Tasty Bake Treat"]
                    gender = 'Male'
                    aliases = ['N/A']
                    crest = 'Major Crest of Fraldarius'
                    crestImage = 'https://i.imgur.com/2yiRHM4.png'
                    gender = 'Male'
                    race = 'Human'
                    birthday = 'February 20th'
                    fodlanBirthday = '20th of the Pegasus Moon, Imperial Year 1163'
                    relatives = ['Fraldarius (ancestor)', 'Kyphon (presumed ancestor)', 'Rodrigue (father)', 'unnamed uncle', 'Glenn (older brother, deceased)']
                    nationality = 'Holy Kingdom of Faerghus'
                    hometown = 'Dukedom of Fraldarius'
                    residence = 'Garreg Mach Monastery'
                    faction = 'Blue Lions'
                    occupation = 'Student at the Officers Academy, Heir of House Fraldarius, Squire of the Holy Kingdom Army (Formerly)'
                    startingClass = 'Noble'
                    vA = 'Yuichi Jose (Japanese)\nLucien Dodge (English)'
                    heightInCM = 174
                    break;
                case 'ashe':
                    quote = 'I\'ll prove myself!'
                    name = 'Ashe Ubert'
                    thumbnail = 'https://i.imgur.com/L4iJ8Ug.png'
                    hexColor = '#b5bdc6'
                    aliases = ['N/A']
                    crest = 'N/A'
                    crestImage = 'N/A'
                    gender = 'Male'
                    race = 'Human'
                    birthday = 'October 17th'
                    fodlanBirthday = '17th of the Wyvern Moon, Imperial Year 1163'
                    relatives = ['Unnamed father', 'unnamed mother', 'Lonato (adoptive father)', 'unnamed brother', 'unnamed sister', 'Christophe (adoptive brother)']
                    nationality = 'Holy Kingdom of Faerghus'
                    hometown = 'Gaspard'
                    residence = 'Garreg Mach Monastery'
                    faction = 'Blue Lions'
                    occupation = 'Student at the Officers Academy, Heir of House Gaspard'
                    startingClass = 'Commoner'
                    vA = 'Yūki Inoue (Japanese)\nShannon Mckain (English)'
                    heightInCM = 164
                    heightInCMPart2 = 174
                    likedGifts = ["Violet", "Legends of Chivalry", "Exotic Spices", "Tasty Baked Treat", "Ancient Coin"]
                    dislikedGifts = ["Arithmetic Textbook", "Monarch Studies Book", "Board Game"]
                    hpgrowth = 35, strgrowth = 35, maggrowth = 25, dexgrowth = 55, spdgrowth = 50, lckgrowth = 40, defgrowth = 20, resgrowth = 35, chagrowth = 25
                    personalSkillNames = ['Lockpick']
                    personalSkillDesc = ['Unit can open locks and chests without keys']
                    proficientIn = [axe, bow]
                    notProficientIn = [reason]
                    buddingTalent = lance
                    unlock = 'Shatter Smash'
                    unlockDesc = 'Enemies hit by this attack suffer -5 Def for 1 turn.'
                    reasonSpells = ["Wind (D)", "Cutting Gale (C)"]
                    faithSpells = ["Heal (D)", "Nosferatu (D+)", "Physic (C)"]
                    fromChapter = "2"
                    recruitment = "Need 15 Charm and C in Lance \n(Unless Edelgard or Dimitri are present, leaves your party once Part 2 begins. Can be recruited again by defeating him in Chapter 15.)"
                    lostItems = ["Moon Knight’s Tale", "Evil-Repelling Amulet", "Bundle of Herbs"]
                    titles = ['__**Threatening from a Distance**__', '__**Strength from Above**__', '__**Required to Ride**__']
                    goals = ['Focus on the **bow** skill to excel as a Sniper.', 'Focus on **axe and flying** skills to excel as a Wyvern Rider.', 'Focus on **lance and riding** skills to excel as a cavalry class.']
                    descriptions = ['I\'m not exactly the most imposing figure on the battlefield, so I think it\'s best for me to focus on my bow skills and do my work from a distance.', 'I\'ve always had some skill with an axe, but not the strength for the front lines. I can manage more easily on the back of a wyvern, though, so I\'ll improve my axe and flying skills.', 'I\'ve never been very good at anything to do with horses, but...it\'s kind of a requirement for me to be a knight. Do you think you can help me with my lance and riding?']
                    basehp = 23, basestr = 8, basemag =	5, basedex = 8, basespd = 9, baselck = 6, basedef = 5, baseres = 6, basecha = 5
                    break;
                case 'sylvain':
                    quote = 'Well, there\'s Dorothea, Hilda, and Mercedes. Lady Rhea\'s quite the beauty too. And I must admit, I\'ve even checked out Professor Manuela once or twice. You know, Professor, I think I\'m going to like it at the Officers Academy. There are beautiful girls as far as the eye can see...'
                    name = 'Sylvain Jose Gautier'
                    thumbnail = 'https://i.imgur.com/77T2SRt.png'
                    hexColor = '#e06c53'
                    basehp = 27, basestr = 9, basemag = 5, basedex = 5, basespd = 8, baselck = 6, basedef = 6, baseres = 2, basecha = 7
                    titles = ['__**Man of the People**__', '__**Protector of the People**__', '__**A Change of Pace**__']
                    goals = ['Focus on **lance and riding** skills to excel as a cavalry class.', 'Focus on **axe and heavy armor** skills to excel as a Great Knight.', 'Focus on **reason and faith** skills to excel as a magic class.']
                    descriptions = ['You know, jousting is a popular sport in Faerghus. The ladies love a guy who can joust. Speaking of... Let\'s polish up my riding and lance skills.', 'The best way to impress people is to save them by diving into harm\'s way. That\'s what a Great Knight does, yeah? So let\'s focus on my axe and heavy armor skills.', 'I want to study reason and faith. What, surprised? Hey, I may be rough around the edges, but that doesn\'t mean I can\'t appreciate a little magic!']
                    lostItems = ["Unused Lipstick", "Crumpled Love Letter", "The History of Sreng"]
                    fromChapter = "2"
                    recruitment = "Need 25 Charm and C in Reason \n(If protagonist is female, automatically joins)"
                    reasonSpells = ["Fire (D)", "Bolganone (C)", "Sagittae (B)", "Ragnarok (A)"]
                    faithSpells = ["Heal (D)", "Nosferatu (D+)", "Physic (C)", "Seraphim (B)"]
                    proficientIn = [lance, axe, riding]
                    notProficientIn = [bow]
                    buddingTalent = reason
                    unlock = 'Black Magic Avo +20'
                    unlockDesc = 'Grants Avo +20 when using black magic.'
                    personalSkillNames = ['Philanderer']
                    personalSkillDesc = ['When adjacent to a female ally, damage dealt to foe +2, damage received from foe -2']
                    hpgrowth = 55, strgrowth = 45, maggrowth = 30, dexgrowth = 35, spdgrowth = 50, lckgrowth = 35, defgrowth = 40, resgrowth = 25, chagrowth = 40
                    likedGifts = ["Landscape Painting", "Dapper Handkerchief", "Board Game"]
                    dislikedGifts = ["Book of Crest Designs", "Watering Can", "Floral Adornment"]
                    gender = 'Male'
                    aliases = ['N/A']
                    crest = 'Minor Crest of Gautier'
                    crestImage = 'https://i.imgur.com/3bhkFyP.png'
                    race = 'Human'
                    birthday = 'June 5th'
                    fodlanBirthday = '5th of the Garland Moon, Imperial Year 1160'
                    relatives = ['Gautier (ancestor)', 'Margrave Gautier (father)', 'Miklan (older brother)']
                    nationality = 'Holy Kingdom of Faerghus'
                    hometown = 'Margravate of Gautier'
                    residence = 'Garreg Mach Monastery'
                    faction = 'Blue Lions'
                    occupation = 'Student at the Officers Academy, Heir of House Gautier'
                    startingClass = 'Noble'
                    vA = 'Makoto Furukawa (Japanese)\nJoe Brogie (English)'
                    heightInCM = 186
                    break;
                case 'mercedes':
                    quote = 'Here goes!'
                    name = 'Mercedes von Martritz'
                    thumbnail = 'https://i.imgur.com/y1BWI7T.png'
                    hexColor = '#f4dcc4'
                    aliases = ['Mercie', 'Mercedes von Bartels']
                    gender = 'Female'
                    race = 'Human'
                    crest = 'Minor Crest of Lamine'
                    crestImage = 'https://i.imgur.com/I7c4voa.png'
                    birthday = 'May 27th'
                    fodlanBirthday = '27th of the Harpstring Moon, Imperial Year 1157'
                    relatives = ['Lamine (ancestor)', 'Baron Matritz (father)', 'unnamed mother', 'Baron Bartels (step-father)', 'unnamed adoptive father', 'Emile (younger half-brother)', 'unnamed half-siblings']
                    nationality = 'Holy Kingdom of Faerghus, Adrestian Empire (formerly)'
                    hometown = 'Barony of Martritz, Fhirdiad'
                    residence = 'Garreg Mach Monastery, Barony of Bartels (Formerly)'
                    faction = 'Blue Lions'
                    occupation = 'Student at the Officers Academy, Student at Fhirdiad School of Sorcery (Formerly)'
                    startingClass = 'Commoner'
                    vA = 'Yumiri Hanamori (Japanese)\nDorothy Elias-Fahn (English)'
                    heightInCM = 169
                    likedGifts = ["Lavender", "Tasty Bake Treat", "Goddess Statuette", "Armored Bear Stuffy", "Gemstone Beads"]
                    dislikedGifts = ["Whetstone", "Ancient Coin", "Riding Boots"]
                    hpgrowth = 30, strgrowth = 25, maggrowth = 50, dexgrowth = 45, spdgrowth = 40, lckgrowth = 30, defgrowth = 25, resgrowth = 45, chagrowth = 40
                    personalSkillNames = ['Live to Serve']
                    personalSkillDesc = ['When healing allies with White Magic, unit is healed by the same amount']
                    proficientIn = [reason, faith]
                    notProficientIn = [sword, lance, axe, heavyArmor]
                    buddingTalent = bow
                    unlock = 'Waning Shot'
                    unlockDesc = 'Enemies hit by this attack suffer -5 Str for 1 turn.'
                    reasonSpells = ["Fire (D)", "Thunder (D+)", "Bolganone (C)", "Ragnarok (A)"]
                    faithSpells = ["Heal (D)", "Nosferatu (D+)", "Physic (C)", "Restore (B)", "Fortify (A)"]
                    fromChapter = "2"
                    recruitment = "Need 15 Magic and C in Bow"
                    lostItems = ["Book of Ghost Stories", "Fruit Preserves", "How to Bake Sweets"]
                    titles = ['__**Protection for Everyone**__', '__**Strength Without the Sweat**__']
                    goals = ['Focus on the **faith** skill to excel as a Bishop.', 'Focus on the **reason** skill to excel as a Warlock.']
                    descriptions = ['For me, there is nothing worse than seeing those I care about come to harm. That\'s why I want to study faith and help others as a Bishop.', 'Physical exertion is...not my forte. Oh, but I\'d still like to help as much as much as I possibly can! Maybe I can do that by studying reason and getting better at magic.']
                    basehp = 25, basestr = 6, basemag = 10, basedex = 6, basespd = 8, baselck = 5, basedef = 5, baseres = 9, basecha = 8
                    break;
                case 'annette':
                    quote = 'I\'ve got to find out everyone\'s likes and dislikes, so I know what to cook! Who knows when it\'ll be my turn at kitchen duty?'
                    name = 'Annette Fantine Dominic'
                    thumbnail = 'https://i.imgur.com/lnE7TRE.png'
                    hexColor = '#f6a67d'
                    basehp = 23, basestr = 6, basemag = 11, basedex = 7, basespd = 7, baselck = 6, basedef = 5, baseres = 4, basecha = 6
                    titles = ['__**A Reasonable Passion**__', '__**Full of Surprises**__']
                    goals = ['Focus on the **reason** skill to excel as a Warlock.', 'Focus on the **axe** skill to excel as a Warrior.']
                    descriptions = ['My passion has always been for sorcery! With that passion and some more time studying reason, I can be a powerful magic user!', 'It\'s about time I learned how to wield House Dominic\'s Relic properly. It might surprise you to hear this, but I do actually know a thing or two about axes. Let me take this opportunity to improve my skills!']
                    lostItems = ["Unfinished Score", "School of Sorcery Book", "Wax Diptych"]
                    fromChapter = "2"
                    recruitment = "Need 10 Magic and B in Faith"
                    reasonSpells = ["Wind (D)", "Cutting Gale (C)", "Sagittae (B)", "Excalibur (A)"]
                    faithSpells = ["Heal (D)", "Nosferatu (D+)", "Recover (C)", "Abraxas (A)"]
                    proficientIn = [axe, reason, authority]
                    notProficientIn = [bow, heavyArmor]
                    buddingTalent = "N/A"
                    unlock = 'N/A'
                    unlockDesc = 'N/A'
                    personalSkillNames = ['Perseverance']
                    personalSkillDesc = ['When Rally command is used on ally, grants Strength +4']
                    hpgrowth = 25, strgrowth = 30, maggrowth = 50, dexgrowth = 50, spdgrowth = 35, lckgrowth = 35, defgrowth = 20, resgrowth = 30, chagrowth = 35
                    likedGifts = ["Book of Sheet Music", "Stylish Hair Clip", "Arithmetic Textbook"]
                    dislikedGifts = ["Ceremonial Sword", "Hunting Dagger", "Coffee Beans"]
                    gender = 'Female'
                    aliases = ['Annie']
                    race = 'Human'
                    crest = 'Minor Crest of Dominic'
                    crestImage = 'https://i.imgur.com/TZwUtSr.png'
                    birthday = 'May 9th'
                    fodlanBirthday = '9th of the Harpstring Moon, Imperial Year 1163'
                    relatives = ['Dominic (ancestor)', 'Gilbert (father)', 'unnamed mother', 'Baron Dominic (uncle)']
                    nationality = 'Holy Kingdom of Faerghus'
                    hometown = 'Fhirdiad'
                    residence = 'Garreg Mach Monastery, Barony of Dominic'
                    faction = 'Blue Lions'
                    occupation = 'Student at the Officers Academy, Student at Fhirdiad School of Sorcery (Formerly)'
                    startingClass = 'Noble'
                    vA = 'Takako Tanaka (Japanese)\nAbby Trott (English)'
                    heightInCM = 151
                    heightInCMPart2 = 153
                    break;
                case 'ingrid':
                    quote = 'Living as a knight is certainly not an easy task. I know it will mean much pain, strife, and heartache. But I still want to pursue that dream. Talking to you has reminded me... I\'m not the type who gives up easily.'
                    name = 'Ingrid Brandl Galatea'
                    thumbnail = 'https://i.imgur.com/t8fCo54.png'
                    hexColor = '#f8e5a0'
                    gender = 'Female'
                    race = 'Human'
                    aliases = ['N/A']
                    crest = 'Minor Crest of Daphnel'
                    crestImage = 'https://i.imgur.com/WVtYgs8.png'
                    birthday = 'January 4th'
                    fodlanBirthday = '4th of the Guardian Moon, Imperial Year 1163'
                    relatives = ['Daphnel (ancestor)', 'unnamed grandmother', 'Count Galatea (father)', 'unnamed siblings', 'Judith (distant relative)', 'Glenn (fiance, deceased)']
                    nationality = 'Holy Kingdom of Faerghus'
                    hometown = 'County of Galatea'
                    residence = 'Garreg Mach Monastery'
                    faction = 'Blue Lions'
                    occupation = 'Student at the Officers Academy'
                    startingClass = 'Noble'
                    vA = 'Manaka Iwami (Japanese)\nBrittany Cox (English)'
                    heightInCM = 165
                    likedGifts = ["Riding Boots", "Smoked Meat", "Legends of Chivalry"]
                    dislikedGifts = ["Gemstone Beads", "Stylish Hair Clip"]
                    hpgrowth = 40, strgrowth = 35, maggrowth = 35, dexgrowth = 40, spdgrowth = 60, lckgrowth = 45, defgrowth = 30, resgrowth = 40, chagrowth = 45
                    personalSkillNames = ['Lady Knight']
                    personalSkillDesc = ['When using a Gambit, Might +3 and Hit Rate +5']
                    proficientIn = [sword, lance, riding, flying]
                    notProficientIn = ["Nothing"]
                    buddingTalent = "N/A"
                    unlock = 'N/A'
                    unlockDesc = 'N/A'
                    reasonSpells = ["Blizzard (D)", "Thoron (C)", "Fimbulvetr (A)"]
                    faithSpells = ["Heal (D)", "Nosferatu (D+)", "Physic (C)", "Seraphim (B)"]
                    fromChapter = "2"
                    recruitment = "Need 15 Dexterity and D in Flying"
                    lostItems = ["Pegasus Horseshoes", "Jousting Almanac", "Curry Comb"]
                    titles = ['__**Vying for Versatility**__', '__**Back to Basics**__', '__**A Refined Knight**__']
                    goals = ['Focus on **lance and flying** skills to excel as a Pegasus Knight.', 'Focus on **lance and riding** skills to excel as a cavalry class.', 'Focus on the **sword** skill to excel as a sword fighting class.']
                    descriptions = ['I have always admired Pegasus Knights for the versatility they bring to battle. By studying flight, as well as the lance,I am sure to be useful no matter the terrain.', 'I\'d like to get back to fundamentals, and since theword "knight" originally referred to one who fights on horseback, I need to practice riding and using a lance.', 'I\'ve studied the sword since I was young, but seeing how far some of the others have come has made me keenly aware that my own skills could use refining.']
                    basehp = 27, basestr = 8, basemag = 6, basedex = 6, basespd = 8, baselck = 6, basedef = 5, baseres = 8, basecha = 8
                    break;
                case 'claude':
                    name = 'Claude von Riegan'
                    quote = 'My moment has arrived!'
                    thumbnail = 'https://i.imgur.com/A4i8b9Z.png'
                    hexColor = '#4a4240'
                    basehp = 26, basestr = 11, basemag = 5, basedex = 8, basespd = 8, baselck = 7, basedef = 6, baseres = 4, basecha = 8
                    titles = ['__**Lead Like a Lord**__', '__**Rite of Passage**__']
                    goals = ['Focus on **sword and authority** skills to excel as a Lord.', 'Focus on **axe and flying** skills to excel as a Wyvern Rider.']
                    descriptions = ['A Lord has to lead troops into battle, so it\'s important that I master authority. And if I\'m going to hold my own in the vanguard, I\'ll need to achieve sword mastery as well. Might be a challenge, but nothing I can\'t handle.', 'Between you and me, being able to ride a wyvern is kind of a rite of passage where I\'m from. I\'ll need to brush up on my flying and axe skills to really excel, though. I can count on you to help me, right?']
                    lostItems = ["Leather Bow Sheath", "Mild Stomach Poison", "Board Game Piece"]
                    fromChapter = "-"
                    recruitment = "Cannot be recruited"
                    reasonSpells = ["Wind (D)", "Sagittae (C)", "Cutting Gale (B)", "Excalibur (A)"]
                    faithSpells = ["Heal (D)", "Nosferatu (D+)", "Recover (C)", "Silence (A)"]
                    proficientIn = [sword, bow, authority, flying]
                    notProficientIn = [lance, faith]
                    buddingTalent = axe
                    unlock = 'Diamond Axe'
                    unlockDesc = 'A powerful attack that greatly increases Mt.'
                    personalSkillNames = ['Leicester Lineage', 'Leicester Lineage+']
                    personalSkillDesc = ['+20% Experience Gained', '+20% Experience Gained, grants unit effects of Pass']
                    hpgrowth = 35, strgrowth = 40, maggrowth = 25, dexgrowth = 60, spdgrowth = 55, lckgrowth = 45, defgrowth = 30, resgrowth = 25, chagrowth = 55
                    likedGifts = ["Riding Boots", "Book of Crest Designs", "Exotic Spices", "Board Game"]
                    dislikedGifts = ["Book of Sheet Music", "Blue Cheese"]
                    aliases = ['The Master Tactician', 'King of Unification']
                    gender = 'Male'
                    race = 'Human'
                    crest = 'Minor Crest of Riegan'
                    crestImage = 'https://i.imgur.com/Hitf9Kg.png'
                    birthday = 'July 24th'
                    fodlanBirthday = '24th of the Blue Sea Moon, Imperial Year 1162'
                    relatives = ['Riegan (ancestor)', 'Blaiddyd (ancestor)', 'Loog (ancestor)', 'Klaus I (ancestor)', 'Duke Riegan (maternal grandfather)', 'King of Almyra (father)', 'unnamed mother', 'Godfrey (maternal uncle)', 'unnamed cousin', 'Lambert (distant relative)', 'Rufus (distant relative)', 'Dimitri (distant relative)']
                    nationality = 'Almyra, Leicester Alliance'
                    hometown = 'Almyra, Derdriu'
                    residence = 'Garreg Mach Monastery'
                    faction = 'Golden Deer'
                    occupation = 'Heir of House Riegan, Leader of the Leicester Alliance (post-timeskip), Prince of Almyra, Student at the Officers Academy, House leader of the Golden Deer'
                    startingClass = 'Noble'
                    vA = 'Toshiyuki Toyonaga (Japanese)\nJoe Zieja (English)'
                    heightInCM = 175
                    break;
                case 'hilda':
                    name = 'Hilda Valentine Goneril'
                    quote = 'Hilda! Hilda!'
                    aliases = ['N/A']
                    gender = 'Female'
                    race = 'Human'
                    birthday = 'February 3rd'
                    fodlanBirthday = '3rd of the Pegasus Moon, Year 1162'
                    relatives = ['Duke Goneril (father)', 'Holst (brother)', 'Goneril (ancestor)']
                    crest = 'Minor Crest of Goneril'
                    nationality = 'Leicester'
                    hometown = 'Duchy of Goneril'
                    residence = 'Garreg Mach Monastery'
                    faction = 'Golden Deer'
                    occupation = 'Student at the Officers Academy'
                    startingClass = 'Noble'
                    thumbnail = 'https://i.imgur.com/zoScHRC.png'
                    crestImage = 'https://i.imgur.com/mKK2nws.png'
                    vA = 'Yūki Kuwahara (Japanese)\nSalli Saffioti (English)'
                    hexColor = '#fcafb7'
                    heightInCM = 154
                    likedGifts = ["Anemone", "Gemstone Beads", "Dapper Handkerchief", "Book of Sheet Music", "Stylish Hair Clip", "Armored Bear Stuffy"]
                    dislikedGifts = ["Training Weight", "Ancient Coin", "Legends of Chivalry"]
                    hpgrowth = 50, strgrowth = 45, maggrowth = 25, dexgrowth = 30, spdgrowth = 50, lckgrowth = 35, defgrowth = 35, resgrowth = 20, chagrowth = 50
                    personalSkillNames = ['Advocate']
                    personalSkillDesc = ['When an adjacent male ally enters battle, ally’s damage dealt +3']
                    proficientIn = [lance, axe]
                    notProficientIn = [faith, authority]
                    buddingTalent = heavyArmor
                    unlock = 'Seal Speed'
                    unlockDesc = 'If unit damages foe during combat, foe suffers Spd -6 for 1 turn after combat.'
                    reasonSpells = ["Thunder (D)", "Thoron (C)", "Bolting (A)"]
                    faithSpells = ["Heal (D)", "Nosferatu (D+)", "Recover (C)"]
                    fromChapter = "2"
                    recruitment = "Need 30 Charm and C in Axe \n(If leading the Black Eagles, cannot be recruited until Chapter 12, after ||allying with the church||)"
                    lostItems = ["Handmade Hair Clip", "Spotless Bandage", "Used Bottle of Perfume"]
                    titles = ['__**Stick to What You Know**__', '__**A Strong Steed**__']
                    goals = ['Focus on the **axe** skill to excel as a Warrior.', 'Focus on **axe and flying** skills to excel as a flying class.']
                    descriptions = ['I\'m pretty good with an axe, since it\'s a House Goneril tradition to learn it from a young age. Stick to what you know, right? Easier that way.', 'Lugging a big, ol\' axe into battle is so much work. Why bother when an animal friend with cute wings can just carry me and my axe wherever we wanna go? So let\'s just train up my axe and flying skills, OK?']
                    basehp = 29, basestr = 10, basemag = 5, basedex = 5, basespd = 8, baselck = 6, basedef = 6, baseres = 3, basecha = 7
                    break;
                case 'lorenz':
                    name = 'Lorenz Hellman Gloucester'
                    quote = 'Ah. You must be that renowned mercenary. Perhaps you\'d like to join me for a cup of tea sometime. My name is Lorenz Hellman Gloucester. You will want to remember it.'
                    thumbnail = 'https://i.imgur.com/uYopDET.png'
                    hexColor = '#7373ac'
                    basehp = 28, basestr = 8, basemag = 7, basedex = 6, basespd = 7, baselck = 5, basedef = 6, baseres = 6, basecha = 3
                    titles = ['__**A Noble\'s Duty**__', '__**The Ideal Role**__']
                    goals = ['Focus on **lance and riding** skills to excel as a riding class.', 'Focus on **reason and riding skills** to excel as a Dark Knight.']
                    descriptions = ['When I envision nobles in battle, I see them gallantly racing across the field on horseback, trusty lance in hand. It is my duty to meet this ideal, hence my interest in lance and riding skills.', 'As masters of both weaponry and magic, Dark Knights are true paragons of excellence on the battlefield. With reason as a prerequisite, it seems I am well suited for the role, wouldn\'t you say?']
                    lostItems = ["Artificial Flower", "A Treatise on Etiquette", "Silk Handkerchief"]
                    fromChapter = "2"
                    recruitment = "Need 20 Charm and C in Reason \n(Unless Edelgard or Claude are present, leaves your party once Part 2 begins. Can be recruited again by defeating him in Chapter 16.)"
                    reasonSpells = ["Fire (D)", "Sagittae (C)", "Ragnarok (B)", "Agnea’s Arrow (A)"]
                    faithSpells = ["Heal (D)", "Nosferatu (D+)", "Recover (C)", "Ward (B)"]
                    proficientIn = [lance, reason, riding]
                    notProficientIn = [brawling]
                    buddingTalent = 'N/A'
                    unlock = 'N/A'
                    unlockDesc = 'N/A'
                    personalSkillNames = ['Distinguished House']
                    personalSkillDesc = ['When a battalion is deployed, damage dealt +2']
                    hpgrowth = 55, strgrowth = 40, maggrowth = 40, dexgrowth = 45, spdgrowth = 40, lckgrowth = 25, defgrowth = 30, resgrowth = 40, chagrowth = 35
                    likedGifts = ["Rose", "Floral Adornment", "Tea Leaves", "Book of Sheet Music"]
                    dislikedGifts = ["Armored Bear Stuffy", "Hunting Dagger", "Watering Can"]
                    name = 'Lorenz Hellman Gloucester'
                    thumbnail = 'https://i.imgur.com/uYopDET.png'
                    hexColor = '#7373ac'
                    aliases = ['N/A']
                    startingClass = 'Noble'
                    gender = 'Male'
                    race = 'Human'
                    birthday = 'June 13th'
                    fodlanBirthday = '13th of the Garland Moon, Imperial Year 1161'
                    relatives = ['Gloucester (ancestor)', 'Count Gloucester (father)']
                    nationality = 'Leicester Alliance'
                    hometown = 'County of Gloucester'
                    residence = 'Garreg Mach Monastery'
                    faction = 'Golden Deer'
                    occupation = 'Student at the Officers Academy, Heir of House Gloucester, Student at Fhirdiad School of Sorcery (Formerly)'
                    vA = 'Hiroshi Watanabe (Japanese)\nBen Diskin (English)'
                    crest = 'Minor Crest of Gloucester'
                    crestImage = 'https://i.imgur.com/xPdFnyE.png'
                    heightInCM = 188
                    break;
                case 'raphael':
                    quote = 'I\'ve had to provide for my little sis ever since our parents died. If I wanna do that, I gotta get strong so I can become a knight!'
                    titles = ['__**Master of Muscles**__', '__**The Biggest on the Battlefield**__', '__**Hulking Hero**__']
                    goals = ['Focus on **axe and brawling** skills to excel as a War Master.', 'Focus on **axe and heavy armor** skills to excel as a heavy armor class.', 'Focus on **sword and axe** skills to excel as a Hero.']
                    descriptions = ['People say my muscles\'ll make me a great War Master, and I\'ve got nothing against working on my axe and brawling skills. Whaddaya think, Professor?', 'Professor, do you know how to make a big guy look even bigger? Put him in a giant suit of armor! So, how about training up my heavy armor and axe skills?', 'Raphael the Hero...now that\'s got a ring to it! Makes you think of a guy who storms castles and rescues princesses, doesn\'t it? That settles it! I\'m gonna train in the axe and sword so I can be the most heroic Hero ever!']
                    basehp = 30, basestr = 11, basemag = 3, basedex = 5, basespd = 6, baselck = 6, basedef = 7, baseres = 1, basecha = 4
                    lostItems = ["Wooden Button", "Burlap Sack of Rocks", "Big Spoon"]
                    fromChapter = "2"
                    recruitment = "Need 20 Strength and C in Heavy Armor"
                    reasonSpells = ["Fire (D)", "Bolganone (C)"]
                    faithSpells = ["Heal (D)", "Nosferatu (D+)", "Recover (C)"]
                    proficientIn = [axe, brawling]
                    notProficientIn = [bow, reason, riding]
                    buddingTalent = 'N/A'
                    unlock = 'N/A'
                    unlockDesc = 'N/A'
                    personalSkillNames = ['Goody Basket']
                    personalSkillDesc = ['At the start of a turn, unit has Luck% chance of regaining 10% of HP']
                    hpgrowth = 65, strgrowth = 50, maggrowth = 15, dexgrowth = 35, spdgrowth = 15, lckgrowth = 35, defgrowth = 45, resgrowth = 10, chagrowth = 25
                    likedGifts = ["Smoked Meat", "Training Weight", "Tasty Baked Treat", "Blue Cheese"]
                    dislikedGifts = ["Arithmetic Textbook", "Book of Crest Designs"]
                    name = 'Raphael Kirsten'
                    thumbnail = 'https://i.imgur.com/MB3wRvI.png'
                    hexColor = '#f0d9a1'
                    aliases = ['Beast of Leicester']
                    gender = 'Male'
                    race = 'Human'
                    birthday = 'May 18th'
                    fodlanBirthday = '18th of the Harpstring Moon, Imperial Year 1162'
                    relatives = ['Unnamed grandfather', 'unnamed parents (deceased)', 'Maya (younger sister)']
                    nationality = 'Leicester Alliance'
                    hometown = 'Leicester Alliance'
                    occupation = 'Student at the Officers Academy'
                    residence = 'Garreg Mach Monastery'
                    faction = 'Golden Deer'
                    vA = 'Takaki Otomari (Japanese)\nZachary Rice (English)'
                    startingClass = 'Commoner'
                    crestImage = 'N/A'
                    crest = 'N/A'
                    heightInCM = 190
                    break;
                case 'ignatz':
                    quote = 'Let me paint you a picture!'
                    titles = ['__**Line of Sight**__', '__**Moving Unseen**__','__**Might and Magic**__']
                    goals = ['Focus on the **bow** skill to excel as a Sniper.', 'Focus on **sword and bow** skills to excel as a Thief or Assassin.', 'Focus on **sword and reason** skills to excel as a Mortal Savant.']
                    descriptions = ['A physique like mine isn\'t suited to combat in close quarters, so I think I can be most helpful by using a bow. Let\'s hope I don\'t ever lose my glasses.', 'I know I don\'t stand out much, but I\'ve been thinking about how to turn that weakness into a strength. It\'s good to move about the battlefield unnoticed. I\'ll need to brush up on my sword and bow skills, though.', 'There are some enemies you can\'t hope to defeat in a straight fight, but who are vulnerable to magic. That\'s why I want to use my own style, combining the study of reason with the sword.']
                    basehp = 25, basestr = 8, basemag = 5, basedex = 7, basespd = 8, baselck = 8, basedef = 4, baseres = 6, basecha = 4
                    lostItems = ["Blue Stone", "Art Book", "Letter to the Goddess"]
                    fromChapter = "2"
                    recruitment = "Need 10 Dexterity and B in Authority"
                    reasonSpells = ["Blizzard (D)", "Cutting Gale (C)", "Fimbulvetr (A)"]
                    faithSpells = ["Heal (D)", "Nosferatu (D+)", "Physic (C)", "Ward (B)"]
                    proficientIn = [sword, bow, authority]
                    notProficientIn = [flying]
                    buddingTalent = reason
                    unlock = 'Seal Strength'
                    unlockDesc = 'If unit damages foe during combat, foe suffers Str -6 for 1 turn after combat.'
                    personalSkillNames = ['Watchful Eye']
                    personalSkillDesc = ['Hit rate +20']
                    hpgrowth = 35, strgrowth = 35, maggrowth = 30, dexgrowth = 50, spdgrowth = 50, lckgrowth = 55, defgrowth = 25, resgrowth = 35, chagrowth = 25
                    likedGifts = ["Forget-me-nots", "Ancient Coin", "Landscape Painting", "Goddess Statuette", "Ceremonial Sword"]
                    dislikedGifts = ["Monarch Studies Book", "Training Weight"]
                    name = 'Ignatz Victor'
                    thumbnail = 'https://i.imgur.com/TUREZkF.png'
                    hexColor = '#c6c69d'
                    aliases = ['N/A']
                    gender = 'Male'
                    race = 'Human'
                    birthday = 'March 14th'
                    fodlanBirthday = '14th of the Lone Moon, Imperial Year 1163'
                    relatives = ['Unnamed parents', 'unnamed older brother']
                    nationality = 'Leicester Alliance'
                    hometown = 'Leicester Alliance'
                    residence = 'Garreg Mach Monastery'
                    faction = 'Golden Deer'
                    occupation = 'Student at the Officers Academy'
                    crest = 'N/A'
                    crestImage = 'N/A'
                    startingClass = 'Commoner'
                    vA = 'Shougo Yano (Japanese)\nChristian Le Monte (English)'
                    heightInCM = 164
                    break;
                case 'lysithea':
                    quote = 'Aristocrats are fools—allowing their lives to be dictated by their Crests. Though...I suppose I am much the same in that regard...'
                    crestImage = lysitheaCrest
                    titles = ['__**Suited for Sorcery**__', '__**Putting Faith in Reason**__']
                    goals = ['Focus on the **reason** skill to excel as a Warlock', 'Focus on **reason and faith** skills to excel as a Gremory.']
                    descriptions = ['Sorcery is my natural talent, so it was inevitable that I\'d choose to be a Warlock. It\'s not easy, but no need to fear. I will never tire of studying reason.', 'I would hypothesize that reason, while necessary, cannot result in true understanding without a little faith. You\'ll let me test this theory, won\'t you?']
                    basehp = 22, basestr = 4, basemag = 11, basedex = 7, basespd = 7, baselck = 4, basedef = 3, baseres = 4, basecha = 5
                    lostItems = ["Encyclopedia of Sweets", "Princess Doll", "New Bottle of Perfume"]
                    fromChapter = "2"
                    recruitment = "Need 15 Magic and B in Faith \n(If Edelgard is present, can also be recruited by defeating her in Chapter 14.)"
                    reasonSpells = ["Miasma Δ (D)", "Swarm Ζ (D+)", "Luna Λ (C)", "Dark Spikes Τ (B)", "Hades Ω (A)"]
                    faithSpells = ["Heal (D)", "Nosferatu (D+)", "Seraphim (C)", "Warp (B)", "Abraxas (A)"]
                    proficientIn = [reason, faith, authority]
                    notProficientIn = [sword, lance, axe, heavyArmor]
                    buddingTalent = sword
                    unlock = 'Soulblade'
                    unlockDesc = 'A magic attack. Mt increases based on unit’s Res.'
                    personalSkillNames = ['Mastermind']
                    personalSkillDesc = ['Unit gains 2x skill EXP from combat']
                    hpgrowth = 20, strgrowth = 15, maggrowth = 60, dexgrowth = 60, spdgrowth = 50, lckgrowth = 15, defgrowth = 10, resgrowth = 25, chagrowth = 25
                    likedGifts = ["Lily", "Armored Bear Stuffy", "Arithmetic Textbook", "Tasty Baked Treat", "Book of Crest Designs"]
                    dislikedGifts = ["Training Weight", "Legends of Chivalry", "Coffee Beans"]
                    name = 'Lysithea von Ordelia'
                    thumbnail = 'https://i.imgur.com/EIm3Zof.png'
                    hexColor = '#fefcfd'
                    aliases = ['N/A']
                    gender = 'Female'
                    race = 'Human'
                    birthday = 'February 28th'
                    fodlanBirthday = '28th of the Pegasus Moon, Imperial Year 1165'
                    relatives = ['Count Ordelia (father)']
                    nationality = 'Leicester Alliance'
                    hometown = 'County of Ordelia'
                    residence = 'Garreg Mach Monastery'
                    faction = 'Golden Deer'
                    occupation = 'Student at the Officers Academy, Heir of House Ordelia'
                    crest = 'Minor Crest of Charon, Major Crest of Gloucester'
                    startingClass = 'Noble, Mage'
                    crestImage = lysitheaCrest
                    vA = 'Aoi Yuki (Japanese)\nJanice Roman Roku (English)'
                    heightInCM = 148
                    heightInCMPart2 = 160
                    break;
                case 'marianne':
                    quote = 'I\'m sorry. I don\'t really know what to say. I\'m not very good at talking to people. The truth is, I didn\'t interact with people too often before I came here.'
                    titles = ['__**Praying for Guidance**__', '__**Heroic on a Horse**__', '__**Prancing and Praying**__', '__**Friend of the Animals**__']
                    goals = ['Focus on the **faith** skill to excel as a Bishop.', 'Focus on **lance and riding** skills to excel as a cavalry class.', 'Focus on **faith and riding** skills to excel as a Holy Knight.', 'Focus on **lance and flying** skills to excel as a flying class.']
                    descriptions = ['I don\'t have any talents of my own, so all I can really do is pray to the goddess. Maybe if I truly master my faith, she\'ll show me the role I am meant to fulfill.', 'I get along well with horses, so I\'m OK at riding them. If I were more confident with a lance, then maybe...I might start to feel stronger.','Since I spend most of my time looking after horses and praying to the goddess, I think it makes sense for me to be a Holy Knight. With that in mind...would you help me refine my faith and riding skills?', 'I get along well with animals. Even in the darkest times, a pegasus or a wyvern can be a reassuring presence. I think I would like to train my lance and flying skills.']
                    basehp = 23, basestr = 5, basemag = 11, basedex = 6, basespd = 7, baselck = 6, basedef = 4, baseres = 8, basecha = 7
                    lostItems = ["Bag of Seeds", "How to be Tidy", "Confessional Letter"]
                    fromChapter = "2"
                    recruitment = "Need 10 Magic and C in Riding"
                    reasonSpells = ["Blizzard (D)", "Thoron (C)", "Cutting Gale (B)", "Fimbulvetr (A)"]
                    faithSpells = ["Heal (D)", "Nosferatu (D+)", "Physic (C)", "Silence (B)", "Aura (A)"]
                    proficientIn = [sword, faith, riding, flying]
                    notProficientIn = [brawling, heavyArmor]
                    buddingTalent = lance
                    unlock = 'Frozen Lance'
                    unlockDesc = 'A magic attack. Mt increases based on unit’s Dex.'
                    personalSkillNames = ['Animal Friend']
                    personalSkillDesc = ['When adjacent to a horseback or flying ally, restores 20% HP at the start of the turn']
                    hpgrowth = 35, strgrowth = 20, maggrowth = 50, dexgrowth = 40, spdgrowth = 40, lckgrowth = 35, defgrowth = 15, resgrowth = 45, chagrowth = 45
                    likedGifts = ["Lily of the Valley", "Dapper Handkerchief", "Floral Adornment", "Armored Bear Stuffy"]
                    dislikedGifts = ["Hunting Dagger", "Smoked Meat"]
                    name = 'Marianne von Edmund'
                    thumbnail = 'https://i.imgur.com/OyUl9he.png'
                    hexColor = '#aad0fa'
                    aliases = ['N/A']
                    gender = 'Female'
                    race = 'Human'
                    birthday = 'November 23rd'
                    fodlanBirthday = '23rd of the Red Wolf Moon, Imperial Year 1162'
                    relatives = ['Maurice (ancestor)', 'Margrave Edmund (distant relative/adoptive father)']
                    nationality = 'Leicester Alliance'
                    hometown = 'Margravate of Edmund'
                    faction = 'Golden Deer'
                    residence = 'Garreg Mach Monastery'
                    occupation = 'Student at the Officers Academy, Heir of House Edmund'
                    crest = 'Crest of the Beast'
                    startingClass = 'Noble'
                    crestImage = 'https://i.imgur.com/qPQz1gu.png'
                    vA = 'Sawako Hata (Japanese)\nXanthe Huynh (English)'
                    heightInCM = 163
                    break;
                case 'leonie':
                    quote = 'I\'m Captain Jeralt\'s first and best apprentice. I can beat anyone, Professor. Even you, if I have to. It may only have been for a short time, but I learned from the absolute best.'
                    titles = ['__**Just Like Jeralt**__', '__**Bow on the Go**__']
                    goals = ['Focus on **lance and riding** skills to excel as a cavalry class.', 'Focus on **bow and riding** skills to excel as a Bow Knight.']
                    descriptions = ['I love bows, of course, but archery alone will never make me an elite mercenary. If I want to follow Captain Jeralt\'s example, I need to hone my riding and lance skills.', 'It\'d be really useful if I could fire a bow more accurately from horseback. Think we could work on my riding, along with my bow skills?']
                    basehp = 26, basestr = 9, basemag = 5, basedex = 8, basespd = 9, baselck = 6, basedef = 7, baseres = 2, basecha = 7
                    lostItems = ["Hand Drawn Map", "Crude Arrowheads", "Fur Scarf"]
                    fromChapter = "2"
                    recruitment = "Need 15 Strength and C in Lance"
                    reasonSpells = ["Fire (D)", "Bolganone (C)", "Ragnarok (A)"]
                    faithSpells = ["Heal (D)", "Nosferatu (D+)", "Physic (C)", "Restore (B)"]
                    proficientIn = [lance, bow, riding]
                    notProficientIn = ["Nothing"]
                    buddingTalent = "N/A"
                    unlock = 'N/A'
                    unlockDesc = 'N/A'
                    personalSkillNames = ['Rivalry']
                    personalSkillDesc = ['When adjacent to a male ally, damage dealt to foe +2, damage received from foe -2']
                    hpgrowth = 40, strgrowth = 40, maggrowth = 20, dexgrowth = 55, spdgrowth = 60, lckgrowth = 40, defgrowth = 40, resgrowth = 15, chagrowth = 40
                    likedGifts = ["Hunting Dagger", "Training Weight", "Fishing Float"]
                    dislikedGifts = ["Stylish Hair Clip", "Book of Crest Designs"]
                    name = 'Leonie Pinelli'
                    thumbnail = 'https://i.imgur.com/yZxvJG4.png'
                    hexColor = '#f17d5b'
                    aliases = ['Blade Breaker II']
                    gender = 'Female'
                    race = 'Human'
                    birthday = 'August 21st'
                    fodlanBirthday = '21st of the Verdant Rain Moon, Imperial Year 1160'
                    relatives = ['unnamed father']
                    nationality = 'Leicester Alliance'
                    hometown = 'Sauin Village, County of Gloucester'
                    faction = 'Golden Deer'
                    residence = 'Garreg Mach Monastery'
                    occupation = 'Student at the Officers Academy, Hunter'
                    crest = 'N/A'
                    crestImage = 'N/A'
                    startingClass = 'Commoner'
                    vA = 'Sakura Nogawa (Japanese)\nRatana (English)'
                    heightInCM = 168
                    break;
                case 'flayn':
                case 'cethleann':
                    quote = 'Oh my! A new addition to the Officers Academy! I am so very pleased to meet you, Professor. I am Seteth’s little sister, Flayn. I am so happy to make your acquaintance.'
                    titles = ['__**A Passion to Heal**__', '__**A Passion to Protect**__']
                    goals = ['Focus on the **faith** skill to excel as a Bishop.', 'Focus on **reason and faith** skills to excel as a Gremory.']
                    descriptions = ['I believe I am better suited to healing than fighting. Rather than train with traditional weapons, then, I think it best for me to focus upon my faith.', 'While I find healing to be important and necessary, there are times when I feel it is insufficient. To be truly useful, I would like to improve at offensive magic as well, so my training can involve a balance of reason and faith.']
                    basehp = 24, basestr = 6, basemag = 9, basedex = 6, basespd = 5, baselck = 4, basedef = 5, baseres = 10, basecha = 9
                    lostItems = ["Antique Clasp", "Old Map of Enbarr", "Dusty Book of Fables"]
                    fromChapter = "7"
                    recruitment = "Joins automatically \n(Leaves your party if you choose to ||oppose the church|| during Chapter 11)"
                    reasonSpells = ["Wind (D)", "Fire (D+)", "Cutting Gale (C)", "Excalibur (A)"]
                    faithSpells = ["Heal (D)", "Nosferatu (D+)", "Restore (C)", "Rescue (B)", "Fortify (A)"]
                    proficientIn = [lance, faith]
                    notProficientIn = [heavyArmor, riding]
                    buddingTalent = reason
                    unlock = 'Seal Magic'
                    unlockDesc = 'If unit damages foe during combat, foe suffers Mag -6 for 1 turn after combat.'
                    personalSkillNames = ['Lily\'s Poise']
                    personalSkillDesc = ['Adjacent allies take 3 less damage during combat']
                    hpgrowth = 25, strgrowth = 25, maggrowth = 55, dexgrowth = 45, spdgrowth = 35, lckgrowth = 15, defgrowth = 25, resgrowth = 50, chagrowth = 45
                    likedGifts = ["Forget-me-nots", "Tasty Baked Treat", "Armored Bear Stuffy", "Stylish Hair Clip", "Dapper Handkerchief"]
                    dislikedGifts = ["Whetstone", "Blue Cheese"]
                    name = 'Flayn'
                    thumbnail = 'https://i.imgur.com/1PcDmnL.png'
                    hexColor = '#9ae5b9'
                    aliases = ['||Cethleann||']
                    gender = 'Female'
                    race = '||Light Dragon||'
                    birthday = 'July 12th'
                    fodlanBirthday = '12th of the Blue Sea Moon, Year ????'
                    relatives = ['||Sothis (ancestor)||', '||Cichol (Seteth, father)||', '||Indech (uncle)||', '||Macuil (uncle)||', '||Rhea (aunt)||']
                    crest = 'Major Crest of Cethleann'
                    crestImage = 'https://i.imgur.com/0NAUtkv.png'
                    nationality = '||Nabatean||'
                    hometown = 'Enbarr'
                    residence = 'Garreg Mach Monastery'
                    faction = 'Church of Seiros, ||Four Saints||'
                    occupation = 'Unofficial student at the Officers Academy'
                    startingClass = 'Priest'
                    vA = 'Yuko Ono (Japanese)\nDeva Marie Gregory (English)'
                    heightInCM = 151
                    break;
                case 'seteth':
                case 'cichol': 
                    quote = 'Now... You shall be in charge of one the Officer Academy\'s three classes. I\'m opposed to leaving this up to a youngster whose past we know nothing about, but this is the Archbishop\'s wish.'
                    titles = ['N/A']
                    goals = ['N/A']
                    descriptions = ['N/A']
                    basehp = 27, basestr = 9, basemag = 8, basedex = 8, basespd = 5, baselck = 6, basedef = 6, baseres = 4, basecha = 9
                    lostItems = ["Unfinished Fable", "Old Fishing Rod", "Snapped Writing Quill"]
                    fromChapter = "12"
                    recruitment = "Joins automatically \n(Leaves your party if you choose to ||oppose the church|| during Chapter 11)"
                    reasonSpells = ["Wind (D)", "Cutting Gale (C)", "Bolganone (B)", "Excalibur (A)"]
                    faithSpells = ["Heal (D)", "Nosferatu (D+)", "Recover (C)"]
                    proficientIn = [sword, lance, axe, authority, flying]
                    notProficientIn = [riding]
                    buddingTalent = 'N/A'
                    unlock = 'N/A'
                    unlockDesc = 'N/A'
                    personalSkillNames = ['Guardian']
                    personalSkillDesc = ['Adjacent female allies deal 3 extra damage during combat']
                    hpgrowth = 50, strgrowth = 45, maggrowth = 35, dexgrowth = 50, spdgrowth = 50, lckgrowth = 25, defgrowth = 30, resgrowth = 25, chagrowth = 45
                    likedGifts = ["The History of Fódlan", "Fishing Float", "Dapper Handkerchief"]
                    dislikedGifts = ["Book of Crest Designs", "Legends of Chivalry"]
                    name = 'Seteth'
                    aliases = ['||Cichol||']
                    gender = 'Male'
                    race = '||Earth Dragon||'
                    birthday = 'December 27'
                    fodlanBirthday = '27th of the Ethereal Moon, Year ????'
                    relatives = ['Flayn ||(Cethleann, daughter)||', '||Macuil (brother)||', '||Indech (brother)||', '||Rhea (Seiros, sister)||', '||Sothis (Mother)||']
                    crest = 'Major Crest of Cichol'
                    nationality = '||Nabatean||'
                    hometown = '||Zanado||'
                    residence = 'Garreg Mach Monastery'
                    faction = 'Church of Seiros, ||Four Saints||'
                    occupation = 'Aid to Archbishop Rhea, Instructor'
                    startingClass = 'Wyvern Rider'
                    hexColor = '#71bea4'
                    thumbnail = 'https://i.imgur.com/s35oLUZ.png'
                    crestImage = 'https://i.imgur.com/mJsn0KU.png'
                    vA = 'Takehito Koyasu (Japanese)\nMark Whitten (English)'
                heightInCM = 182
                    break;
                case 'cyril':
                    quote = 'I work for Lady Rhea! And I\'m Shamir\'s apprentice! Oh, the name\'s Cyril.'
                    titles = ['__**Flying Toward Foes**__', '__**Harrier on High**__']
                    goals = ['Focus on **axe and flying** skills to excel as a Wyvern Rider.', 'Focus on **bow and riding** skills to excel as a Bow Knight.']
                    descriptions = ['I used to look after wyverns back in Almyra, so I know how to handle \'em. I can ride one into battle. But it\'d be nice if ya helped me work on my axe and flying skills.', 'Shamir taught me lots about bows, and I\'ve always gotten along real well with horses. Think we could work on both riding and bow skills?']
                    basehp = 24, basestr = 7, basemag = 4, basedex = 6, basespd = 6, baselck = 6, basedef = 5, baseres = 2, basecha = 4
                    lostItems = ["Well-Used Hatchet", "Portrait of Rhea", "Old Cleaning Cloth"]
                    fromChapter = "5"
                    recruitment = "Need to be Level 10 \n(If leading the Black Eagles, cannot be recruited until Chapter 12, after ||allying with the church–after that, he joins automatically||)"
                    reasonSpells = ["Wind (D)", "Cutting Gale (C)"]
                    faithSpells = ["Heal (D)", "Nosferatu (D+)", "Recover (C)"]
                    proficientIn = [lance, axe, bow, riding, flying]
                    notProficientIn = [reason, faith]
                    buddingTalent = 'N/A'
                    unlock = 'N/A'
                    unlockDesc = 'N/A'
                    personalSkillNames = ['Aptitude']
                    personalSkillDesc = ['Makes each stat 20% more likely to increase on level up']
                    hpgrowth = 35, strgrowth = 20, maggrowth = 15, dexgrowth = 40, spdgrowth = 40, lckgrowth = 30, defgrowth = 10, resgrowth = 10, chagrowth = 15
                    likedGifts = ["Baby’s Breath", "Smoked Meat", "Hunting Dagger", "Watering Can"]
                    dislikedGifts = ["The History of Fódlan", "Legends of Chivalry", "Monarch Studies Book"]
                    name = 'Cyril'
                    thumbnail = 'https://i.imgur.com/Oss58fD.png'
                    hexColor = '#453d3b'
                    aliases = ['N/A']
                    gender = 'Male'
                    race = 'Human'
                    birthday = 'October 25th'
                    fodlanBirthday = '25th of the Wyvern Moon, Imperial Year ????'
                    residence = 'Garreg Mach Monastery'
                    relatives = ['Unnamed parents']
                    crest = 'N/A'
                    crestImage = 'N/A'
                    nationality = 'Almyra'
                    hometown = 'N/A'
                    faction = 'Church of Seiros'
                    occupation = 'Aid to Archbishop Rhea'
                    startingClass = 'Commoner'
                    vA = 'Kengo Kawanishi (Japanese)\nGriffin Burns (English)'
                    heightInCM = 148
                    heightInCMPart2 = 168
                    break;
                case 'anna': 
                    quote = 'Business is booming!'
                    titles = ['__**On the Value of Swords**__', '__**Journey to the Great Knight**__', '__**In Remembrance of Origins**__']
                    goals = ['Focus on **sword** skills to excel as a sword fighting class.', 'Focus on **axe and riding** skills to excel as a Great Knight.', 'Focus on **sword and faith** skills to become a sword fighting class.']
                    descriptions = ['I don\'t understand their inherent value. I\'d like to better understand swords, so I can better sell them! Focusing on my skill with the blade seems the best way.', 'I want to be a Great Knight. I know I\'ve got the chops,what with my business sense, rapport with horses, and my undeniable brute strength. There\'s a big payoff if you let me—I just know it! What do you say?', 'I can see study of sword and faith really going hand in hand. Physical defense plus divine protection, you know? So? How about it?']
                    basehp = 26, basestr = 7, basemag = 7, basedex = 7, basespd = 7, baselck = 7, basedef = 5, baseres = 7, basecha = 7
                    lostItems = ["Secret Ledger", "Balance Scale", "Rare Item Index"]
                    fromChapter = "3"
                    recruitment = "Talk to her at the monastery"
                    reasonSpells = ["Fire (D)", "Thunder (D+)", "Meteor (A)"]
                    faithSpells = ["Heal (D)", "Nosferatu (D+)", "Ward (C)", "Rescue (B)"]
                    proficientIn = [sword, axe, bow, faith]
                    notProficientIn = [reason, authority]
                    buddingTalent = riding
                    unlock = 'Pass'
                    unlockDesc = 'Allows unit to pass through spaces occupied by foes.'
                    personalSkillNames = ['Business Prosperity']
                    personalSkillDesc = ['Grants Lck +5']
                    hpgrowth = 35, strgrowth = 35, maggrowth = 35, dexgrowth = 45, spdgrowth = 55, lckgrowth = 45, defgrowth = 30, resgrowth = 40, chagrowth = 50
                    likedGifts = ["Forget-me-nots", "Exotic Spices", "Coffee Beans", "Blue Cheese", "Landscape Painting", "Goddess Statuette"]
                    dislikedGifts = ["Fishing Float", "Smoked Meat"]
                    name = 'Anna'
                    thumbnail = 'https://i.imgur.com/d2dCJxN.png'
                    hexColor = '#d85e77'
                    aliases = ['N/A']
                    gender = 'Female'
                    race = 'Human'
                    birthday = 'June 9th'
                    fodlanBirthday = '9th of the Garland Moon, Imperial Year 1155'
                    relatives = ['Ernest (ancestor)', 'Anna (various sisters, cousins, and extended family)']
                    nationality = 'Fódlan'
                    residence = 'Garreg Mach Monastery'
                    occupation = 'Merchant'
                    hometown = 'N/A'
                    crest = 'Major Crest of Ernest'
                    crestImage = 'https://i.imgur.com/BWk2BuO.png'
                    faction = 'N/A'
                    startingClass = 'Myrmidon (Academy Phase)/Thief (War Phase)'
                    vA = 'Saori Seto (Japanese)\nKaren Strassman (English)'
                    heightInCM = 168
                    break;
                case 'jeritza':
                case 'emile':
                    quote = 'Sorry, I don\'t like buddying up with others. If you don\'t have any particular business, leave.'
                    titles = ['N/A']
                    goals = ['N/A']
                    descriptions = ['N/A']
                    basehp = 30, basestr = 8, basemag = 6, basedex = 6, basespd = 8, baselck = 4, basedef = 7, baseres = 5, basecha = 3
                    lostItems = ["Jar of Sweets", "Black Hair Tie", "Armor Clasp"]
                    fromChapter = "13"
                    recruitment = "Crimson Flower only. Joins automatically"
                    reasonSpells = ["Thunder (D)", "Thoron (C)", "Death Γ (B)"]
                    faithSpells = ["Heal (D)", "Nosferatu (D+)", "Restore (C)"]
                    proficientIn = [sword, lance, brawling, riding]
                    notProficientIn = [faith, authority]
                    buddingTalent = flying
                    unlock = 'Darting Blow'
                    unlockDesc = 'If unit initiates combat, grants AS +6 during combat'
                    personalSkillNames = ['Murderous Intent']
                    personalSkillDesc = ['If unit initiates combat, grants Hit +20 during combat']
                    hpgrowth = 50, strgrowth = 50, maggrowth = 35, dexgrowth = 35, spdgrowth = 60, lckgrowth = 30, defgrowth = 40, resgrowth = 25, chagrowth = 25
                    likedGifts = ["Rose", "Tasty Baked Treat", "Whetstone", "Hunting Dagger"]
                    dislikedGifts = ["Monarch Studies Book", "Blue Cheese", "Book of Crest Designs"]
                    name = 'Jeritza von Hyrm'
                    thumbnail = 'https://i.imgur.com/SSXUCCn.png'
                    hexColor = '#f4dcc4'
                    aliases = ['||Death Knight||', '||Emile von Bartels||']
                    startingClass = '||Death Knight||'
                    gender = 'Male'
                    race = 'Human'
                    birthday = 'March 4th'
                    fodlanBirthday = '4th of the Lone Moon, Imperial Year 1158'
                    relatives = ['Lamine (ancestor)', '||Baron Bartels (Father)||', 'unnamed mother', '||Mercedes (older falf-sister)||', 'unnamed half-siblings']
                    nationality = 'Adrestian Empire'
                    hometown = 'Viscounty of Hrym'
                    residence = '||Barony of Bartels (Formerly)||, Garreg Mach Monastery'
                    faction = '||Flame Emperor Army||'
                    occupation = 'Teacher at the Officers Academy, ||General of the Adrestian Empire||, Viscount of Hrym, ||Heir of House Bartels (Formerly)||'
                    crest = 'Minor Crest of Lamine'
                    crestImage = 'https://i.imgur.com/I7c4voa.png'
                    vA = 'Atsushi Imaruoka (Japanese)\nPatrick Seitz (English)'
                heightInCM = 193
                    break;
                case 'hanneman':
                    quote = 'Research’s most fruitful!'
                    titles = ['N/A']
                    goals = ['N/A']
                    descriptions = ['N/A']
                    basehp = 25, basestr = 6, basemag = 10, basedex = 6, basespd = 6, baselck = 4, basedef = 5, baseres = 7, basecha = 5
                    lostItems = ["Lens Cloth", "Hammer and Chisel", "Sketch of a Sigil"]
                    fromChapter = "8"
                    recruitment = "Need to be Level 15"
                    reasonSpells = ["Wind (D)", "Sagittae (C)", "Thoron (B)", "Ragnarok (A)", "Meteor (A+)"]
                    faithSpells = ["Heal (D)", "Nosferatu (D+)", "Recover (C)", "Ward (B)"]
                    proficientIn = [bow, reason, riding]
                    notProficientIn = [heavyArmor, flying]
                    buddingTalent = 'N/A'
                    unlock = 'N/A'
                    unlockDesc = 'N/A'
                    personalSkillNames = ['Crest Scholar']
                    personalSkillDesc = ['Use Rally to grant Mag +4 to an ally']
                    hpgrowth = 40, strgrowth = 30, maggrowth = 55, dexgrowth = 45, spdgrowth = 20, lckgrowth = 35, defgrowth = 25, resgrowth = 40, chagrowth = 35
                    likedGifts = ["Arithmetic Textbook", "Tea Leaves", "Book of Crest Designs", "Dapper Handkerchief"]
                    dislikedGifts = ["Blue Cheese", "Exotic Spices"]
                    name = 'Hanneman von Essar'
                    thumbnail = 'https://i.imgur.com/fCG6C12.png'
                    hexColor = '#969794'
                    aliases = ['Father of Crestology']
                    startingClass = 'Mage'
                    gender = 'Male'
                    race = 'Human'
                    crest = 'Minor Crest of Indech'
                    birthday = 'February 8th'
                    fodlanBirthday = '8th of the Pegasus Moon, Imperial Year 1129'
                    crestImage = 'https://i.imgur.com/ZzLhoeL.png'
                    relatives = ['Unnamed grandfather', 'unnamed father', 'unnamed younger sister, undefined Niece/Nephew(s), Unnamed Wife (deceased)', 'Viscount Essar (brother)']
                    nationality = 'Adrestian Empire'
                    hometown = 'Essar'
                    residence = 'Garreg Mach Monastery'
                    faction = 'Church of Seiros'
                    occupation = 'Teacher at the Officers Academy'
                    vA = 'Kenji Hamada (Japanese)\nW. T. Falke (English)'
                heightInCM = 190
                    break;
                case 'manuela':
                    quote = 'I\'m Manuela. I\'m a professor, a physician, a songstress, and available. It\'s nice to meet you.'
                    titles = ['N/A']
                    goals = ['N/A']
                    descriptions = ['N/A']
                    basehp = 26, basestr = 10, basemag = 8, basedex = 6, basespd = 8, baselck = 6, basedef = 5, baseres = 4, basecha = 7
                    lostItems = ["Wellness Herbs", "Clean Dusting Cloth", "Light Purple Veil"]
                    fromChapter = "8"
                    recruitment = "Need to be Level 15"
                    reasonSpells = ["Thunder (D)", "Bolganone (C)", "Bolting (A)"]
                    faithSpells = ["Heal (D)", "Nosferatu (D+)", "Ward (C)", "Silence (B)", "Warp (A)"]
                    proficientIn = [sword, faith, flying]
                    notProficientIn = [reason, heavyArmor]
                    buddingTalent = 'N/A'
                    unlock = 'N/A'
                    unlockDesc = 'N/A'
                    personalSkillNames = ['Infirmary Master']
                    personalSkillDesc = ['Adjacent allies gain Crit Avoid +10 during combat']
                    hpgrowth = 50, strgrowth = 35, maggrowth = 35, dexgrowth = 40, spdgrowth = 60, lckgrowth = 35, defgrowth = 30, resgrowth = 25, chagrowth = 50
                    likedGifts = ["Book of Sheet Music", "Gemstone Beads", "Blue Cheese", "Goddess Statuette"]
                    dislikedGifts = ["Board Game", "Riding Boots", "Smoked Meat"]
                    name = 'Manuela Casagranda'
                    thumbnail = 'https://i.imgur.com/af5exR9.png'
                    hexColor = '#b09b80'
                    aliases = ['Divine Songstress']
                    birthday = 'August 3rd'
                    fodlanBirthday = '3rd of the Verdant Rain Moon, Imperial Year ????'
                    nationality = 'Adrestian Empire'
                    hometown = 'Enbarr'
                    relatives = ['N/A']
                    residence = 'Garreg Mach Monastery'
                    faction = 'Mittelfrank Opera Company (Formerly), Church of Seiros'
                    occupation = 'Teacher and Doctor at the Officers Academy, Songstress'
                    gender = 'Female'
                    race = 'Human'
                    startingClass = 'Priest'
                    vA = 'Sachiko Kojima (English)\nVeronica Taylor (English)'
                    crest = 'N/A'
                    crestImage = 'N/A'
                    heightInCM = 172
                    break;
                case 'gilbert':
                case 'gustave': 
                    quote = 'Nice to meet you, teacher. I am Gilbert, who will be accompanying you on this task. I do not know how useful I will be, but I shall try my best to cooperate with you.'
                    titles = ['N/A']
                    goals = ['N/A']
                    descriptions = ['N/A']
                    basehp = 30, basestr = 9, basemag = 4, basedex = 6, basespd = 5, baselck = 4, basedef = 5, baseres = 2, basecha = 6
                    lostItems = ["Noseless Puppet", "Carving Hammer", "Silver Necklace"]
                    fromChapter = "13"
                    recruitment = "Automatically from Turn 3 (Blue Lions only)"
                    reasonSpells = ["Thunder (D)", "Thoron (C)"]
                    faithSpells = ["Heal (D)", "Nosferatu (D+)", "Ward (C)"]
                    proficientIn = [lance, axe, heavyArmor, riding]
                    notProficientIn = ["Nothing"]
                    buddingTalent = 'N/A'
                    unlock = 'N/A'
                    unlockDesc = 'N/A'
                    personalSkillNames = ['Veteran Knight']
                    personalSkillDesc = ['Unit takes 2 less damage while in formation with a battalion']
                    hpgrowth = 55, strgrowth = 45, maggrowth = 20, dexgrowth = 45, spdgrowth = 30, lckgrowth = 15, defgrowth = 45, resgrowth = 10, chagrowth = 35
                    likedGifts = ["Goddess Statuette", "Fishing Float", "Ceremonial Sword"]
                    dislikedGifts = ["Tasty Baked Treat", "Dapper Handkerchief"]
                    name = 'Gilbert Pronislav'
                    thumbnail = 'https://i.imgur.com/wyHkiIQ.png'
                    hexColor = '#f7a77e'
                    aliases = ['Gustave Eddie Dominic']
                    birthday = 'January 26th'
                    gender = 'Male'
                    race = 'Human'
                    fodlanBirthday = '26th of the Guardian Moon, Imperial Year 1124'
                    relatives = ['Annette (daughter)', 'unnamed wife', 'Dominic (ancestor)', 'Baron Dominic (younger brother)']
                    residence = 'Garreg Mach Monastery'
                    faction = 'Knights of Seiros'
                    nationality = 'Holy Kingdom of Faerghus'
                    hometown = 'Barony of Dominic, Fhirdiad'
                    startingClass = 'Fortress Knight'
                    occupation = 'Teacher at the Officers Academy, One of the Knights of Seiros, Royal Knight (Formerly), Baron Dominic (Formerly)'
                    crest = 'N/A'
                    crestImage = 'N/A'
                    vA = 'Hiriomichi Kogami (Japanese)\nDoug Stone (English)'
                    heightInCM = 186
                    break;
                case 'alois':
                    quote = 'Captain Jeralt?! Goodness, it\'s been ages. Do you recognize me? It\'s Alois! Your old right-hand man! Well that\'s how I always thought of myself anyway.'
                    titles = ['N/A']
                    goals = ['N/A']
                    descriptions = ['N/A']
                    basehp = 28, basestr = 9, basemag = 4, basedex = 5, basespd = 6, baselck = 5, basedef = 5, baseres = 2, basecha = 7
                    lostItems = ["Introduction to Magic", "Foreign Gold Coin", "Mysterious Notebook"]
                    fromChapter = "11"
                    recruitment = "Need to be Level 15"
                    reasonSpells = ["Fire (D)", "Bolganone (C)"]
                    faithSpells = ["Heal (D)", "Nosferatu (D+)", "Recover (C)"]
                    proficientIn = [axe, brawling, heavyArmor]
                    notProficientIn = [reason, flying]
                    buddingTalent = 'N/A'
                    unlock = 'N/A'
                    unlockDesc = 'N/A'
                    personalSkillNames = ['Compassion']
                    personalSkillDesc = ['Use Rally to grant Lck +8 to an ally']
                    hpgrowth = 45, strgrowth = 45, maggrowth = 20, dexgrowth = 35, spdgrowth = 40, lckgrowth = 30, defgrowth = 40, resgrowth = 20, chagrowth = 40
                    likedGifts = ["Sunflower", "Ancient Coin", "Fishing Float", "Floral Adornment"]
                    dislikedGifts = ["Exotic Spices", "Monarch Studies Book"]
                    name = 'Alois Rangeld'
                    thumbnail = 'https://i.imgur.com/Mz2eAuu.png'
                    hexColor = '#857a67'
                    gender = 'Male'
                    race = 'Human'
                    aliases = ['N/A']
                    birthday = 'December 1st'
                    fodlanBirthday = '1st of the Ethereal Moon, Imperial Year 1135'
                    relatives = ['Unnamed parents', 'unnamed wife', 'unnamed daughter']
                    nationality = 'N/A'
                    hometown = 'N/A'
                    residence = 'Garreg Mach Monastery'
                    faction = 'Knights of Seiros'
                    occupation = 'Teacher at the Officers Academy, One of the Knights of Seiros'
                    startingClass = 'Warrior'
                    vA = 'Manabu Sakamaki (Japanese)\nRaymond K. Essel (English)'
                    crest = 'N/A'
                    crestImage = 'N/A'
                    heightInCM = 174
                    break;
                case 'catherine':
                case 'cassandra':
                    quote = 'Prepare to taste the blade of one who serves the goddess. Now you face a Knight of Seiros!'
                    titles = ['N/A']
                    goals = ['N/A']
                    descriptions = ['N/A']
                    basehp = 27, basestr = 8, basemag = 5, basedex = 6, basespd = 7, baselck = 6, basedef = 5, baseres = 2, basecha = 4
                    lostItems = ["Weathered Cloak", "Letter to Rhea", "Badge of Graduation"]
                    fromChapter = "14"
                    recruitment = "Need to be Level 15 \n(If leading the Black Eagles, cannot be recruited until Chapter 12, after ||allying with the church–after that, she joins automatically||)"
                    reasonSpells = ["Fire (D)", "Bolganone (C)", "Ragnarok (A)"]
                    faithSpells = ["Heal (D)", "Nosferatu (D+)", "Recover (C)"]
                    proficientIn = [sword, brawling]
                    notProficientIn = [reason]
                    buddingTalent = 'N/A'
                    unlock = 'N/A'
                    unlockDesc = 'N/A'
                    personalSkillNames = ['Fighting Spirit']
                    personalSkillDesc = ['Unit takes 5 less damage when no battalion is assigned or when battalion endurance is 0']
                    hpgrowth = 50, strgrowth = 50, maggrowth = 25, dexgrowth = 40, spdgrowth = 55, lckgrowth = 30, defgrowth = 30, resgrowth = 20, chagrowth = 25
                    likedGifts = ["Training Weight", "Whetstone", "Legends of Chivalry", "Blue Cheese"]
                    dislikedGifts = ["Gemstone Beads", "Armored Bear Stuffy", "Arithmetic Textbook"]
                    name = 'Cassandra Rubens Charon'
                    thumbnail = 'https://i.imgur.com/7mK0y1K.png'
                    hexColor = '#f8ebc9'
                    aliases = ['Thunder Catherine', 'Thunderstrike Cassandra']
                    faction = 'Knights of Seiros'
                    gender = 'Female'
                    race = 'Human'
                    crest = 'Major Crest of Charon'
                    birthday = 'September 15th'
                    fodlanBirthday = '15th of the Horsebow Moon, Imperial Year 1152'
                    relatives = ['Charon (ancestor)', 'Count Charon (father)', 'unnamed brothers and sisters']
                    startingClass = 'Swordmaster'
                    nationality = 'Holy Kingdom of Faerghus'
                    hometown = 'County of Charon'
                    residence = 'Garreg Mach Monastery'
                    faction = 'Knights of Seiros'
                    occupation = 'Teacher at the Officers Academy, One of the Holy Knights of Seiros'
                    vA = 'Chie Matsuura (Japanese)\nLaura Post (English)'
                    crestImage = 'https://i.imgur.com/2oGFZnj.png'
                heightInCM = 175
                    break;
                case 'shamir':
                    quote = 'Nothing personal.'
                    titles = ['N/A']
                    goals = ['N/A']
                    descriptions = ['N/A']
                    basehp = 26, basestr = 8, basemag = 4, basedex = 7, basespd = 6, baselck = 8, basedef = 5, baseres = 2, basecha = 6
                    lostItems = ["Bundle of Dry Hemp", "Centipede Picture", "Animal Bone Dice"]
                    fromChapter = "14"
                    recruitment = "Need to be Level 15 \n(If leading the Black Eagles, automatically joins during Chapter 12 if you ||ally with the church|| during Chapter 11)"
                    reasonSpells = ["Blizzard (D)", "Wind (D+)", "Sagittae (C)", "Fimbulvetr (A)"]
                    faithSpells = ["Heal (D)", "Nosferatu (D+)", "Physic (C)"]
                    proficientIn = [lance, bow]
                    notProficientIn = [faith]
                    buddingTalent = 'N/A'
                    unlock = 'N/A'
                    unlockDesc = 'N/A'
                    personalSkillNames = ['Survival Instinct']
                    personalSkillDesc = ['If unit initiates combat and defeats foe, grants Str/Mag/Dex/Spd +4 for one turn']
                    hpgrowth = 35, strgrowth = 40, maggrowth = 20, dexgrowth = 55, spdgrowth = 40, lckgrowth = 55, defgrowth = 20, resgrowth = 15, chagrowth = 30
                    likedGifts = ["Sunflower", "Exotic Spices", "Coffee Beans", "Hunting Dagger", "Book of Sheet Music"]
                    dislikedGifts = ["Monarch Studies Book", "Blue Cheese", "Book of Crest Designs"]
                    name = 'Shamir Nevrand'
                    thumbnail = 'https://i.imgur.com/gK1Iz5F.png'
                    hexColor = '#57587e'
                    gender = 'Female'
                    race = 'Human'
                    birthday = 'March 27th'
                    fodlanBirthday = '27th of the Lone Moon, Imperial Year 1155'
                    relatives = ['Unnamed lover']
                    nationality = 'Dagda'
                    hometown = 'Dagda'
                    residence = 'Garreg Mach Monastery'
                    faction = 'Knights of Seiros'
                    aliases = ['Distant Archer']
                    occupation = 'Teacher at the Officers Academy, One of the Knights of Seiros, Mercenary (Formerly)'
                    vA = 'Yurina Watanabe (Japanese)\nAllegra Clark (English)'
                    crest = 'N/A'
                    startingClass = 'Sniper'
                    crestImage = 'N/A'
                    heightInCM = 169
                    break;
                case 'rhea':
                case 'seiros':
                    quote = 'All I ask is that you guide these open minds with virtue, care, and sincerity.'
                    titles = ['N/A']
                    goals = ['N/A']
                    descriptions = ['N/A']
                    basehp = 0, basestr = 0, basemag = 0, basedex = 0, basespd = 0, baselck = 0, basedef = 0, baseres = 0, basecha = 0
                    lostItems = ['Elegant Hair Clip', 'Seiros Sculptures', 'Faded Star Chart']
                    fromChapter = "-"
                    recruitment = "Cannot be recruited"
                    reasonSpells = ["N/A"]
                    faithSpells = ["N/A"]
                    proficientIn = ["N/A"]
                    notProficientIn = ["N/A"]
                    buddingTalent = "N/A"
                    unlock = 'N/A'
                    unlockDesc = 'N/A'
                    personalSkillNames = ['N/A']
                    personalSkillDesc = ['N/A']
                    hpgrowth = 0, strgrowth = 0, maggrowth = 0, dexgrowth = 0, spdgrowth = 0, lckgrowth = 0, defgrowth = 0, resgrowth = 0, chagrowth = 0
                    likedGifts = ["Landscape Painting", "Goddess Statuette", "Ancient Coin"]
                    dislikedGifts = ["Exotic Spices"]
                    name = 'Rhea'
                    thumbnail = 'https://i.imgur.com/HdH739v.png'
                    hexColor = '#bbf7d0'
                    aliases = ['||Seiros||', '||Immaculate One||']
                    gender = 'Female'
                    race = '||Sky Dragon||'
                    relatives = ['||Sothis (mother)||', '||Cichol (Seteth, brother)||', '||Indech (brother)||', '||Macuil (brother)||', '||Cethleann (Flayn, niece)||', 'Sitri (creation)||']
                    birthday = 'January 11th'
                    fodlanBirthday = '11th of the Guardian Moon, Imperial Year ????'
                    nationality = '||Nabatean||'
                    hometown = '||Zanado||'
                    residence = 'Garreg Mach Monastery'
                    faction = 'Church of Seiros'
                    startingClass = 'Archbishop'
                    vA = 'Kikuko Inoue (Japanese)\nCherami Leigh (English)'
                    occupation = 'Archbishop and supreme leader of the Church of Seiros'
                    crest = 'Major Crest of Seiros'
                    crestImage = 'https://i.imgur.com/PeVchzu.png'
                    heightInCM = 172
                    break;
                case 'yuri':
                    quote = 'Smile for me!'
                    titles = ['__**Swordsman Savior**__', '__**The Way of the Sword**__', '__**Clear Sight**__']
                    goals = ['Focus on **sword** and **faith** skills to excel as a Trickster.', 'Focus on the **sword** skill to excel as a Thief.', 'Focus on the **sword** and **bow** skills to excel as an Assassin.']
                    descriptions = ['Some degree of injury is inevitable in battle, but I\'m not one to stand idly by while my people get hurt. That\'s why, in addition to honing my sword skills, it\'s best for me to study faith so I can tend to my allies\' wounds as needed.', 'To be frank, I\'ve never been at ease with lances or axes. I\'d suggest that, rather than thrusting one of those clumsy weapons into my hands, you help me achieve mastery with the sword.', 'By shooting down our foes before they get near us, I can greatly reduce the risk of harm to my friends. That in mind, my aim is to master bow skills. Any objections?']
                    basehp = 24, basestr = 10, basemag = 6, basedex = 7, basespd = 9, baselck = 7, basedef = 5, baseres = 7, basecha = 8
                    lostItems = ['Makeup Brush', 'Suspicious Dice']
                    fromChapter = "2"
                    recruitment = "Clear Chapter 6 of Cindered Shadows"
                    reasonSpells = ["Wind (D)", "Cutting Gale (C)", "Sagittae (B)", "Excalibur (A)"]
                    faithSpells = ["Heal (D)", "Nosferatu (D+)", "Recover (C)", "Silence (B)", "Aura (A)"]
                    proficientIn = [sword, reason, faith, authority]
                    notProficientIn = [lance, axe, riding, flying]
                    buddingTalent = bow
                    unlock = 'Deadeye'
                    unlockDesc = 'A bow attack with a long range.'
                    personalSkillNames = ["Honorable Spirit"]
                    personalSkillDesc = ["If unit is not near an ally, grants Atk +3 when in combat with a foe one space away."]
                    hpgrowth = 30, strgrowth = 40, maggrowth = 35, dexgrowth = 40, spdgrowth = 65, lckgrowth = 45, defgrowth = 30, resgrowth = 35, chagrowth = 50
                    likedGifts = ['Board Game', 'Tasty Baked Treat', 'Goddess Statuette', 'Arithmetic Textbook']
                    dislikedGifts = ['Book of Sheet Music', 'Riding Boots']
                    name = 'Yuri Leclerc'
                    thumbnail = 'https://i.imgur.com/Paxgdl2.png'
                    hexColor = '#afacdb'
                    aliases = ['Yuri-bird', 'Yurikins', 'Underground Lord']
                    relatives = ['Aubin (ancestor)', 'Count Rowe (adoptive father)', 'unnamed mother']
                    gender = 'Male'
                    race = 'Human'
                    crest = 'Major Crest of Aubin'
                    crestImage = 'https://i.imgur.com/5jOb1um.png'
                    startingClass = 'Commoner'
                    fodlanBirthday = '12th of the Verdant Rain Moon, Imperial Year 1160'
                    birthday = 'August 12th'
                    heightInCM = 171
                    nationality = 'Holy Kingdom of Faerghus'
                    hometown = 'Rowe'
                    residence = 'Garreg Mach Monastery, Abyss'
                    occupation = 'Student at the Officers Academy, House Leader of the Ashen Wolves'
                    faction = 'Ashen Wolves'
                    vA = 'Junya Enoki (Japanese)\nAlejandro Saab (English)'
                    break;
                case 'balthus':
                    titles = ['__**Faith in Fists**__', '__**Killer Combo**__', '__**Armor Ardor**__']
                    goals = ['Focus on **brawling** and **faith** skills to excel as a War Monk.', 'Focus on **axe** and **brawling** skills to excel as a War Master.', 'Focus on **heavy armor** skills to excel as a Fortress Knight.']
                    descriptions = ['I\'m a believer, believe it or not. Big on the goddess. Crazy about her. What do you think about me studying faith and brawling at the same time, so I can show my devotion...with my fists?!', 'I won\'t name names, but a friend of mine told me off for getting wounded too often. If I strap myself into a big honking suit of armor, they shouldn\'t have anything to complain about, yeah?', 'Here\'s the perfect combo for a scrappy guy like me: axe skills and brawling. Yeah? Swinging my axe left and right and then punching guys out if I lose my weapon... I was born to be a War Master!']
                    quote = 'We\'re the secret fourth house in Abyss. The surface world turned its back on us, and we did the same in return.'
                    basehp = 28, basestr = 11, basemag = 5, basedex = 4, basespd = 7, baselck = 3, basedef = 7, baseres = 4, basecha = 4
                    lostItems = ['Well-Worn Hammock', 'Stiff Hand Wrap']
                    fromChapter = "2"
                    recruitment = "Clear Chapter 4 of Cindered Shadows"
                    reasonSpells = ["Fire (D)", "Bolganone (C)", "Ragnarok (A)"]
                    faithSpells = ["Heal (D)", "Nosferatu (D+)", "Seraphim (B)", "Restore (A)"]
                    proficientIn = [sword, axe, brawling, faith, heavyArmor]
                    notProficientIn = [lance, bow, flying]
                    buddingTalent = reason
                    unlock = 'Black Magic Crit +10'
                    unlockDesc = 'Grants Crit +10 when using black magic.'
                    personalSkillNames = ["King of Grappling"]
                    personalSkillDesc = ["Grants Str / Def +6 when HP is less than or equal to 50%."]
                    hpgrowth = 50, strgrowth = 50, maggrowth = 30, dexgrowth = 25, spdgrowth = 30, lckgrowth = 20, defgrowth = 45, resgrowth = 30, chagrowth = 30
                    likedGifts = ['Ancient Coin', 'Ceremonial Sword', 'Whetstone', 'Blue Cheese']
                    dislikedGifts = ['Fishing Float', 'Watering Can', 'Armored Bear Stuffy']
                    name = 'Balthus von Albrecht'
                    thumbnail = 'https://i.imgur.com/AUfVNC2.png'
                    hexColor = '#5f5c6f'
                    aliases = ['Almighty King of Grappling, Baltie, B']
                    gender = 'Male'
                    race = 'Human'
                    crest = 'Major Crest of Chevalier'
                    crestImage = 'https://i.imgur.com/p12opKa.png'
                    startingClass = 'Noble'
                    relatives = ['Chevalier (ancestor)']
                    birthday = 'July 9th'
                    fodlanBirthday = '9th of the Blue Sea Moon, Imperial Year 1153'
                    hometown = 'N/A'
                    nationality = 'Leicester Alliance'
                    faction = 'Ashen Wolves'
                    residence = 'Garreg Mach Monastery, Abyss'
                    occupation = 'Student at the Officers Academy'
                    vA = 'Subaru Kimura (Japanese)\nAaron Hendrick (English)'
                    break;
                case 'hapi':
                    quote = 'Why do I have to go? No matter what we do, we\'re all just gonna die in the end anyway.'
                    titles = ['__**Armed to the Teeth**__', '__**Equine Allies**__', '__**Soaring and Swinging**__']
                    goals = ['Focus on **lance** and **riding** skills to excel as a Dark Knight.', 'Focus on **reason** and **riding** skills to excel as a Valkyrie.', 'Focus on **axe** and **flying** skills to excel as a Wyvern Rider.']
                    descriptions = ['Chatterbox, you know what a Valkyrie is? They\'re magic wielders who ride horses. As soon as I heard that was a thing, I knew it was right up my alley. So I gotta get really good in reason and riding, OK?', 'I definitely like the horse-and-magic combo, but I think it\'s good for me to use a weapon, too. If I master lance skills and riding I can be a Dark Knight that nobody dares to mess with.','Swinging an axe is so...cathartic. It\'s a great non-monster-summoning way for me to blow off steam. So if it\'s all the same to you, I want to fly around on a wyvern swinging an axe left and right.']
                    basehp = 26, basestr = 6, basemag = 11, basedex = 8, basespd = 6, baselck = 4, 	basedef = 4, baseres = 7, basecha = 4
                    lostItems = ['Shiny Striated Pebble', 'Basket of Beries']
                    fromChapter = "2"
                    recruitment = "Clear Chapter 5 of Cindered Shadows"
                    reasonSpells = ["Miasma Δ (D)", "Swarm Ζ (D+)", "Banshee Θ (C)", "Death Γ (B)", "Hades Ω (A)"]
                    faithSpells = ["Heal (D)", "Nosferatu (D+)", "Physic (C)", "Seraphim (B)", "Warp (A)"]
                    proficientIn = [reason, riding, flying]
                    notProficientIn = [brawling, authority, heavyArmor]
                    buddingTalent = axe
                    unlock = 'Exhaustive Strike'
                    unlockDesc = 'An attack that consumes all remaining durability and adds 30% of it to Mt.'
                    personalSkillNames = ["Monstrous Appeal"]
                    personalSkillDesc = ["Makes all attacks effective against monsters and makes it easier for monsters to target unit."]
                    hpgrowth = 35, strgrowth = 35, maggrowth = 35, dexgrowth = 45, spdgrowth = 55, lckgrowth = 45, defgrowth = 30, resgrowth = 40, chagrowth = 50
                    likedGifts = ['Pitcher Plant', 'Tasty Baked Treat', 'Smoked Meat', 'Exotic Spices', 'Coffee Beans', 'Hunting Dagger']
                    dislikedGifts = ['Training Weight', 'Monarch Studies Book', 'Legend of Chivalry']
                    name = 'Hapi'
                    thumbnail = 'https://i.imgur.com/r5qfcC9.png'
                    hexColor = '#dc5f65'
                    gender = 'Female'
                    race = 'Human'
                    aliases = ['Half-Decade Hapi']
                    relatives = ['Timotheos (ancestor)']
                    crest = 'Major Crest of Timotheos'
                    crestImage = 'https://i.imgur.com/jFZjWXK.png'
                    startingClass = 'Commoner'
                    birthday = 'January 15th'
                    fodlanBirthday = '15th of the Guardian Moon, Imperial Year 1160'
                    nationality = 'Holy Kingdom of Faerghus'
                    hometown = 'Timotheos'
                    faction = 'Ashen Wolves'
                    residence = 'Garreg Mach Monastery, Abyss'
                    occupation = 'Student at the Officers Academy'
                    vA = 'Sachika Misawa (Japanese)\nChristine Marie Cabanos (English)'
                    heightInCM = 169
                    break;
                case 'constance':
                    quote = 'I shall rebuild House Nuvelle! Nobility will be mine again, and the glory of my esteemed family will once more reign supreme!'
                    titles = ['__**Mage Taking Flight**__', '__**To Restore My House**__', '__**The Elegant Blade**__']
                    goals = ['Focus on **reason** and **flying** skills to excel as a Dark Flier.', 'Focus on **brawling** and **faith** skills to excel as a War Cleric.', 'Focus on **sword** skills to excel as a Swordmaster']
                    descriptions = ['What better way to complement my magical abilities than flying over the battlefield? Picture yours truly, raining spells onto our foes from above! By studying reason and flying at the same time, I can make this vision manifest.', 'You are no doubt aware of my magical prowess. However, I may find myself unable to use magic in certain situations. Help me master sword skills, so I can protect myself no matter what may transpire in the heat of battle.', 'I have come to a realization! Only by achieving mastery in faith and brawling can I restore my house in the eyes of the goddess—and the eyes of mortals as well! Ahaha!']
                    basehp = 23, basestr = 5, basemag = 11, basedex = 6, basespd = 6, baselck = 4, basedef = 3, baseres = 4, basecha = 6
                    lostItems = ['Nimbus Charm', 'Repellent Powder']
                    fromChapter = "2"
                    recruitment = "Clear Chapter 2 of Cindered Shadows"
                    reasonSpells = ["Fire (D)", "Sagittae (C)", "Fimbulvetr (B)", "Bolting (A)", "Agnea’s Arrow (A+)"]
                    faithSpells = ["Heal (D)", "Nosferatu (D+)", "Ward (C)", "Rescue (B)", "Abraxas (A)"]
                    proficientIn = [sword, reason, authority, flying]
                    notProficientIn = [axe, heavyArmor]
                    buddingTalent = brawling
                    unlock = 'Mystic Blow'
                    unlockDesc = 'A magic attack; Deals magic-based damage.'
                    personalSkillNames = ["Circadian Beat"]
                    personalSkillDesc = ["Grants Str/Mag +3 when indoors and Def/ Res +3 when outdoors."]
                    hpgrowth = 20, strgrowth = 20, maggrowth = 60, dexgrowth = 30, spdgrowth = 35, lckgrowth = 15, defgrowth = 15, resgrowth = 30, chagrowth = 25
                    likedGifts = ['Lily of the Valley', 'Tea Leaves', 'Arithmetic Textbook', 'Book of Crest Designs']
                    dislikedGifts = ['Blue Cheese', 'Exotic Spices']
                    name = 'Constance von Nuvelle'
                    thumbnail = 'https://i.imgur.com/n7XHQLu.png'
                    hexColor = '#fffebb'
                    aliases = ['Coco']
                    crest = 'Major Crest of Noa'
                    crestImage = 'https://i.imgur.com/3V6hwKT.png'
                    startingClass = 'Noble'
                    birthday = 'March 20th'
                    fodlanBirthday = '20th of the Lone Moon, Imperial Year 1162'
                    heightInCM = 164
                    gender = 'Female'
                    race = 'Human'
                    relatives = ['Noa (ancestor)']
                    nationality = 'Adrestian Empire'
                    hometown = 'Nuvelle'
                    residence = 'Garreg Mach Monastery, Abyss'
                    occupation = 'Student at the Officers Academy'
                    faction = 'Ashen Wolves'
                    vA = 'Sarah Emi Bridcutt (Japanese)\nKirsten Day (English)'
                    break;
                default:
                    return 'N/A'
            }

            const paginatedMessage = new PaginatedMessage({
                template: new MessageEmbed()
            });

            paginatedMessage.addPageEmbed((buildBioEmbed) => {
                buildBioEmbed
                .setTitle(name)
                .setColor(hexColor as `#${string}`)
                .setThumbnail(thumbnail)
                .setDescription(quote)
                .addFields({ name: 'Aliases', value: `${aliases.join(", ")}`, inline: false })
                .addFields({ name: 'Birthday', value: `${birthday}`, inline: true })
                .addFields({ name: 'Gender', value: `${gender}`, inline: true })
                .addFields({ name: 'Race', value: `${race}`, inline: true })
                .addFields({ name: 'Fódlan Birthday', value: `${fodlanBirthday}`, inline: true })
                .addFields({ name: 'Relatives', value: `${relatives.join(", ")}`, inline: true }) 
                .addFields({ name: 'Crest', value: `${crest}`, inline: true })
                .addFields({ name: 'Nationality', value: `${nationality}`, inline: true})
                .addFields({ name: 'Hometown', value: `${hometown}`, inline: true})
                .addFields({ name: 'Residence', value: `${residence}`, inline: true})
                .addFields({ name: 'Faction', value: `${faction}`, inline: true});
                if(heightInCMPart2) {
                    buildBioEmbed.addFields({ name: 'Height', value: `${heightInCM}cm (${toFeet(heightInCM)})\n${heightInCMPart2}cm (${toFeet(heightInCMPart2)}) (Part 2)`, inline: true })
                } else {
                    buildBioEmbed.addFields({ name: 'Height', value: `${heightInCM}cm (${toFeet(heightInCM)})`, inline: true})
                }
                buildBioEmbed
                .addFields({ name: 'Occupation', value: `${occupation}`, inline: false })
                .addFields({ name: 'Starting Class', value: `${startingClass}`, inline: true})
                .addFields({ name: 'VAs', value: `${vA}`, inline: true })
                if(fromChapter == "-") {
                    buildBioEmbed.addFields({ name: 'Available From', value: `start of game`, inline: true })
                } else {
                    buildBioEmbed.addFields({ name: 'Available From', value: `Chapter ${fromChapter}`, inline: true })
                }
                
                buildBioEmbed.addFields({ name: 'Recruitment', value: `${recruitment}`, inline: true })
    
                if(crestImage == 'N/A') {
                    buildBioEmbed.setAuthor({ name: name })
                } else {
                    buildBioEmbed.setAuthor({ name: name, iconURL: crestImage })
                }

                return buildBioEmbed;
            });

            paginatedMessage.addPageEmbed((buildBaseStatsEmbed) => {
                buildBaseStatsEmbed
                .setTitle('Base Stats')
                .setColor(hexColor as `#${string}`)
                .setThumbnail(thumbnail)
                .addFields({ name: 'HP', value: `${basehp}`, inline: true})
                .addFields({ name: 'Strength (Str)', value: `${basestr}`, inline: true})
                .addFields({ name: 'Magic (Mag)', value: `${basemag}`, inline: true})
                .addFields({ name: 'Dexterity (Dex)', value: `${basedex}`, inline: true}) 
                .addFields({ name: 'Speed (Spd)', value: `${basespd}`, inline: true})
                .addFields({ name: 'Luck (Lck)', value: `${baselck}`, inline: true})
                .addFields({ name: 'Defense (Def)', value: `${basedef}`, inline: true})
                .addFields({ name: 'Resistence (Res)', value: `${baseres}`, inline: true})
                .addFields({ name: 'Charm (Cha)', value: `${basecha}`, inline: true})

                return buildBaseStatsEmbed;
            });

            paginatedMessage.addPageEmbed((buildFocusEmbed) => {
                if(lowerCase == 'bylad' || lowerCase == 'bylethm' || lowerCase == 'bylass' || lowerCase == 'bylethf') {
                    buildFocusEmbed
                    .setTitle(`${name} Focuses`)
                    .setColor(hexColor as `#${string}`)
                    .setThumbnail(thumbnail)
                    .setDescription('Byleth does not have any focuses.')
                    return buildFocusEmbed;
                } else {
                    buildFocusEmbed
                    .setTitle(`Focuses`)
                    .setColor(hexColor as `#${string}`)
                    .setThumbnail(thumbnail)
                    .setDescription("Areas of Focus")
                    .addFields({ name: `${titles[0]}`, value: `${goals[0]}`, inline: false })
                    .addFields({ name: "Description", value: `${descriptions[0]}`, inline: false })
                    .addFields({ name: `${titles[1]}`, value: `${goals[1]}`, inline: false})
                    .addFields({ name: "Description", value: `${descriptions[1]}`, inline: false })
                    if(titles[2]) {
                        buildFocusEmbed.addFields({ name: `${titles[2]}`, value: `${goals[2]}`, inline: false })
                        buildFocusEmbed.addFields({ name: "Description", value: `${descriptions[2]}`, inline: false })
                    }
                    if(titles[3]) {
                        buildFocusEmbed.addFields({ name: `${titles[3]}`, value: `${goals[3]}`, inline: false })
                        buildFocusEmbed.addFields({ name: "Description", value: `${descriptions[3]}`, inline: false })
                    }

                    return buildFocusEmbed;
                }
            });

            paginatedMessage.addPageEmbed((buildGiftsEmbed) => {
                if(lowerCase == 'bylad' || lowerCase == 'bylethm' || lowerCase == 'bylass' || lowerCase == 'bylethf') {
                    buildGiftsEmbed
                    .setTitle(`Gifts`)
                    .setColor(hexColor as `#${string}`)
                    .setThumbnail(thumbnail)
                    .setDescription('You cannot give Byleth any gifts nor any lost items.')
                    return buildGiftsEmbed;
                } else {
                    buildGiftsEmbed
                    .setTitle(`Gifts & Lost Items`)
                    .setColor(hexColor as `#${string}`)
                    .setThumbnail(thumbnail)
                    .addFields({ name: 'Liked Gifts', value: `${likedGifts.join(", ")}`, inline: false })
                    .addFields({ name: 'Liked Gifts', value: `${dislikedGifts.join(", ")}`, inline: false })
                    .addFields({ name: 'Lost Items', value: `${lostItems.join(", ")}`, inline: true})

                    return buildGiftsEmbed
                }
            });

            paginatedMessage.addPageEmbed((buildGrowthsEmbed) => {
                buildGrowthsEmbed
                .setTitle('Stat Growths')
                .setColor(hexColor as `#${string}`)
                .setThumbnail(thumbnail)
                .addFields({ name: 'HP', value: `${hpgrowth}`, inline: true})
                .addFields({ name: 'Strength (Str)', value: `${strgrowth}`, inline: true})
                .addFields({ name: 'Magic (Mag)', value: `${maggrowth}`, inline: true})
                .addFields({ name: 'Dexterity (Dex)', value: `${dexgrowth}`, inline: true}) 
                .addFields({ name: 'Speed (Spd)', value: `${spdgrowth}`, inline: true})
                .addFields({ name: 'Luck (Lck)', value: `${lckgrowth}`, inline: true})
                .addFields({ name: 'Defense (Def)', value: `${defgrowth}`, inline: true})
                .addFields({ name: 'Resistence (Res)', value: `${resgrowth}`, inline: true})
                .addFields({ name: 'Charm (Cha)', value: `${chagrowth}`, inline: true})

                return buildGrowthsEmbed;
            });

            paginatedMessage.addPageEmbed((buildPersonalSkillsEmbed) => {
                buildPersonalSkillsEmbed
                .setTitle('Personal Skills')
                .setColor(hexColor as `#${string}`)
                .setThumbnail(thumbnail)
                .addFields({ name: 'Personal Skill', value: `${personalSkillNames[0]}`, inline: false })
                .addFields({ name: 'Personal Skill Description', value: `${personalSkillDesc[0]}`, inline: false })
                if(lowerCase == 'bylad' || lowerCase == 'bylethm' || lowerCase == 'bylass' || lowerCase == 'bylethf') {
                    buildPersonalSkillsEmbed
                    .addFields({ name: 'Personal Skill (Chapter 10)', value: `${personalSkillNames[1]}`, inline: false})
                    buildPersonalSkillsEmbed.addFields({ name: 'Personal Skill Description', value: `${personalSkillDesc[1]}`})
                }
                    
                if(lowerCase == "edelgard" || lowerCase == "dimitri" || lowerCase == "claude") {
                  buildPersonalSkillsEmbed.addFields({ name: 'Personal Skill (post-timeskip)', value: `${personalSkillNames[2]}`, inline: true })
                  buildPersonalSkillsEmbed.addFields({ name: "Skill Description", value: `${personalSkillDesc[2]}`, inline: true})
                }

                return buildPersonalSkillsEmbed;
            });

            paginatedMessage.addPageEmbed((buildProficienciesEmbed) => {
                buildProficienciesEmbed
                    .setTitle(`Proficiencies`)
                    .setColor(hexColor as `#${string}`)
                    .setThumbnail(thumbnail)
                    .addFields({ name: `${profUp} Proficient In`, value: `${proficientIn.join(" ")}`, inline: false })
                    .addFields({ name: `${profDown} Weak In`, value: `${notProficientIn.join(" ")}`, inline: false })
                    .addFields({ name: `${buddingTalentEmote} Budding Talent`, value: `${buddingTalent}`, inline: false })
                    .addFields({ name: 'Unlock', value: `${unlock}`, inline: false })
                    .addFields({ name: 'Unlock Description', value: `${unlockDesc}`, inline: false })

                return buildProficienciesEmbed
            });

            paginatedMessage.addPageEmbed((buildSpellsEmbed) => {
                buildSpellsEmbed
                .setTitle(`Spells`)
                .setColor(hexColor as `#${string}`)
                .setThumbnail(thumbnail)
                .addFields({ name: 'Faith Spells', value: `${faithSpells.join(", ")}`, inline: false })
                .addFields({ name: 'Reason Spells', value: `${reasonSpells.join(", ")}`, inline: false })

                return buildSpellsEmbed
            });

            return paginatedMessage.run(interaction);
        }
	}
}

function toFeet(n: number) {
    var realFeet = ((n*0.393700) / 12);
    var feet = Math.floor(realFeet);
    var inches = Math.round((realFeet - feet) * 12);
    return feet + "'" + inches + '"';
}
