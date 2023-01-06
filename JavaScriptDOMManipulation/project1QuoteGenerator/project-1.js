// Variables

let btn = document.querySelector("#new-quote");
let quote = document.querySelector(".quote");
let person = document.querySelector(".person");

const quotes = [
  {
    quote: "Be yourself; everyone else is already taken.",
    person: "Oscar Wilde",
    profession: "Irish poet",
    topics: ["Inspirational", "Advice", "Humor"],
  },
  {
    quote:
      "To live is the rarest thing in the world. Most people exist, that is all.",
    person: "Oscar Wilde",
    profession: "Irish poet",
    topics: ["Philosophy", "Humor"],
  },
  {
    quote: "True friends stab you in the front.",
    person: "Oscar Wilde",
    profession: "Irish poet",
    topics: ["Philosophy", "People"],
  },
  {
    quote: "Women are made to be Loved, not understood.",
    person: "Oscar Wilde",
    profession: "Irish poet",
    topics: ["Philosophy", "Humor"],
  },
  {
    quote: "Be the change that you wish to see in the world.",
    person: "Mahatma Gandhi",
    profession: "Indian leader",
    topics: ["Inspirational", "Philosophy", "Advice"],
  },
  {
    quote:
      "Live as if you were to die tomorrow. Learn as if you were to live forever.",
    person: "Mahatma Gandhi",
    profession: "Indian leader",
    topics: ["Inspirational", "Life", "Advice"],
  },
  {
    quote: "No one can make you feel inferior without your consent.",
    person: "Eleanor Roosevelt",
    profession: "Former First Lady of the United States",
    topics: ["Wisdom"],
  },
  {
    quote:
      "Great minds discuss ideas; average minds discuss events; small minds discuss people.",
    person: "Eleanor Roosevelt",
    profession: "Former First Lady of the United States",
    topics: ["Wisdom", "People"],
  },
  {
    quote:
      "Do what you feel in your heart to be right - for you'll be criticized anyway.",
    person: "Eleanor Roosevelt",
    profession: "Former First Lady of the United States",
    topics: ["Wisdom", "Advice"],
  },
  {
    quote: "Do one thing every day that scares you.",
    person: "Eleanor Roosevelt",
    profession: "Former First Lady of the United States",
    topics: ["Wisdom", "Life"],
  },
  {
    quote:
      "Darkness cannot drive out darkness: only light can do that. Hate cannot drive out hate; only love can do that.",
    person: "Martin Luther King",
    profession: "American minister",
    topics: ["Inspirational", "Wisdom", "Love"],
  },
  {
    quote:
      "Our lives begin to end the day we become silent about things that matter.",
    person: "Martin Luther King",
    profession: "American minister",
    topics: ["Inspirational", "Life"],
  },
  {
    quote:
      "In the end, we will remember not the words of our enemies, but the silence of our friends.",
    person: "Martin Luther King",
    profession: "American minister",
    topics: ["People", "Life"],
  },
  {
    quote: "Injustice anywhere is a threat to justice everywhere.",
    person: "Martin Luther King",
    profession: "American minister",
    topics: ["Wisdom"],
  },
  {
    quote: "The time is always right to do what is right.",
    person: "Martin Luther King",
    profession: "American minister",
    topics: ["Inspirational", "Wisdom"],
  },
  {
    quote:
      "Life's most persistent and urgent question is, 'What are you doing for others?",
    person: "Martin Luther King",
    profession: "American minister",
    topics: ["Inspirational", "Life", "People"],
  },
  {
    quote:
      "Weak people revenge. Strong people forgive. Intelligent People Ignore.",
    person: "Albert Einstein",
    profession: "Theoretical physicist",
    topics: ["Inspirational", "Life"],
  },
  {
    quote: "I have not failed. I've just found 10,000 ways that won't work.",
    person: "Thomas A. Edison",
    profession: "American inventor",
    topics: ["Inspirational"],
  },
  {
    quote:
      "Genius is one percent inspiration and ninety-nine percent perspiration.",
    person: "Thomas A. Edison",
    profession: "American inventor",
    topics: ["Inspirational", "Wisdom"],
  },
  {
    quote:
      "Our greatest weakness lies in giving up. The most certain way to succeed is always to try just one more time.",
    person: "Thomas A. Edison",
    profession: "American inventor",
    topics: ["Inspirational", "Advice"],
  },
  {
    quote:
      "If we did all the things we are capable of, we would literally astound ourselves.",
    person: "Thomas A. Edison",
    profession: "American inventor",
    topics: ["Inspirational"],
  },
  {
    quote:
      "Imagination is more important than knowledge. Knowledge is limited. Imagination encircles the world.",
    person: "Albert Einstein",
    profession: "Theoretical physicist",
    topics: ["Inspirational", "Wisdom"],
  },
  {
    quote:
      "Life isn't about finding yourself. Life is about creating yourself.",
    person: "George Bernard Shaw",
    profession: "Irish playwright",
    topics: ["Inspirational", "Life", "Advice"],
  },
  {
    quote:
      "Success is not final, failure is not fatal: it is the courage to continue that counts.",
    person: "Winston Churchill",
    profession: "Former British Prime Minister",
    topics: ["Inspirational", "Life", "Advice"],
  },
  {
    quote: "If you're going through hell, keep going.",
    person: "Winston Churchill",
    profession: "Former British Prime Minister",
    topics: ["Inspirational", "Advice"],
  },
  {
    quote:
      "We make a living by what we get, but we make a life by what we give.",
    person: "Winston Churchill",
    profession: "Former British Prime Minister",
    topics: ["People", "Life"],
  },
  {
    quote: "Peace begins with a smile.",
    person: "Mother Teresa",
    profession: "Roman Catholic Saint",
    topics: ["Inspirational", "Wisdom"],
  },
  {
    quote:
      "Spread love everywhere you go. Let no one ever come to you without leaving happier.",
    person: "Mother Teresa",
    profession: "Roman Catholic Saint",
    topics: ["Inspirational", "Love", "Advice"],
  },
  {
    quote: "If you can't feed a hundred people, then feed just one.",
    person: "Mother Teresa",
    profession: "Roman Catholic Saint",
    topics: ["Inspirational", "Advice", "People"],
  },
  {
    quote:
      "Kind words can be short and easy to speak, but their echoes are truly endless.",
    person: "Mother Teresa",
    profession: "Roman Catholic Saint",
    topics: ["Inspirational", "People"],
  },
  {
    quote:
      "Isn't it nice to think that tomorrow is a new day with no mistakes in it yet?",
    person: "L.M. Montgomery",
    profession: "Canadian person",
    topics: ["Inspirational"],
  },
  {
    quote: "Tomorrow is always fresh, with no mistakes in it.",
    person: "L.M. Montgomery",
    profession: "Canadian person",
    topics: ["Inspirational"],
  },
  {
    quote:
      "We should regret our mistakes and learn from them, but never carry them forward into the future with us.",
    person: "L.M. Montgomery",
    profession: "Canadian person",
    topics: ["Inspirational", "Advice", "Life"],
  },
  {
    quote: "It's so easy to be wicked without knowing it, isn't it?",
    person: "L.M. Montgomery",
    profession: "Canadian person",
    topics: ["Inspirational", "Philosophy", "Life"],
  },
  {
    quote:
      "All the darkness in the world cannot extinguish the light of a single candle.",
    person: "Francis of Assisi",
    profession: "Italian Catholic Saint",
    topics: ["Inspirational", "Wisdom"],
  },
  {
    quote:
      "Start by doing what's necessary; then do what's possible; and suddenly you are doing the impossible.",
    person: "Francis of Assisi",
    profession: "Italian Catholic Saint",
    topics: ["Inspirational", "Wisdom"],
  },
  {
    quote: "Preach the Gospel at all times and when necessary use words.",
    person: "Francis of Assisi",
    profession: "Italian Catholic Saint",
    topics: ["Religion", "Wisdom"],
  },
  {
    quote: "A single sunbeam is enough to drive away many shadows.",
    person: "Francis of Assisi",
    profession: "Italian Catholic Saint",
    topics: ["Inspirational", "Wisdom"],
  },
  {
    quote: "You never fail until you stop trying.",
    person: "Albert Einstein",
    profession: "Theoretical physicist",
    topics: ["Inspirational", "Advice"],
  },
  {
    quote:
      "You see things; you say, 'Why?' But I dream things that never were; and I say 'Why not?",
    person: "George Bernard Shaw",
    profession: "Irish playwright",
    topics: ["Inspirational"],
  },
  {
    quote:
      "We don't stop playing because we grow old; we grow old because we stop playing.",
    person: "George Bernard Shaw",
    profession: "Irish playwright",
    topics: ["Inspirational"],
  },
  {
    quote:
      "Progress is impossible without change, and those who cannot change their minds cannot change anything.",
    person: "George Bernard Shaw",
    profession: "Irish playwright",
    topics: ["Inspirational"],
  },
  {
    quote:
      "A life spent making mistakes is not only more honorable, but more useful than a life spent doing nothing.",
    person: "George Bernard Shaw",
    profession: "Irish playwright",
    topics: ["Inspirational"],
  },
  {
    quote:
      "Kindness is a language which the deaf can hear and the blind can see.",
    person: "Mark Twain",
    profession: "American writer",
    topics: ["Inspirational"],
  },
  {
    quote: "The secret of getting ahead is getting started.",
    person: "Mark Twain",
    profession: "American writer",
    topics: ["Inspirational", "Advice"],
  },
  {
    quote:
      "Whenever you find yourself on the side of the majority, it is time to pause and reflect.",
    person: "Mark Twain",
    profession: "American writer",
    topics: ["Inspirational", "Advice"],
  },
  {
    quote:
      "The two most important days in your life are the day you are born and the day you find out why.",
    person: "Mark Twain",
    profession: "American writer",
    topics: ["Inspirational", "Life"],
  },
  {
    quote:
      "Truth is stranger than fiction, but it is because Fiction is obliged to stick to possibilities; Truth isn't.",
    person: "Mark Twain",
    profession: "American writer",
    topics: ["Inspirational", "Life"],
  },
  {
    quote: "If you tell the truth, you don't have to remember anything.",
    person: "Mark Twain",
    profession: "American writer",
    topics: ["Inspirational", "Wisdom"],
  },
  {
    quote:
      "I have never met a man so ignorant that I couldn't learn something from him",
    person: "Galileo Galilei",
    profession: "Italian Polymath",
    topics: ["Inspirational"],
  },
  {
    quote:
      "Earth provides enough to satisfy every man's needs, but not every man's greed.",
    person: "Mahatma Gandhi",
    profession: "Indian leader",
    topics: ["Inspirational", "Wisdom"],
  },
  {
    quote: "Where there is love there is life.",
    person: "Mahatma Gandhi",
    profession: "Indian leader",
    topics: ["Life", "Love"],
  },
  {
    quote:
      "Happiness is when what you think, what you say, and what you do are in harmony.",
    person: "Mahatma Gandhi",
    profession: "Indian leader",
    topics: ["Inspirational", "Wisdom", "Philosophy"],
  },
  {
    quote:
      "The weak can never forgive. Forgiveness is the attribute of the strong.",
    person: "Mahatma Gandhi",
    profession: "Indian leader",
    topics: ["Inspirational", "Wisdom", "Philosophy"],
  },
  {
    quote:
      "Strength does not come from physical capacity. It comes from an indomitable will.",
    person: "Mahatma Gandhi",
    profession: "Indian leader",
    topics: ["Inspirational", "Wisdom", "Philosophy"],
  },
  {
    quote:
      "You must not lose faith in humanity. Humanity is an ocean; if a few drops of the ocean are dirty, the ocean does not become dirty.",
    person: "Mahatma Gandhi",
    profession: "Indian leader",
    topics: ["Inspirational", "Wisdom", "Philosophy"],
  },
  {
    quote: "In a gentle way, you can shake the world.",
    person: "Mahatma Gandhi",
    profession: "Indian leader",
    topics: ["Inspirational", "Wisdom", "Philosophy"],
  },
  {
    quote: "He that can have patience can have what he will.",
    person: "Benjamin Franklin",
    profession: "Founding Father of the United States",
    topics: ["Inspirational", "Wisdom"],
  },
  {
    quote:
      "Either write something worth reading or do something worth writing.",
    person: "Benjamin Franklin",
    profession: "Founding Father of the United States",
    topics: ["Inspirational", "Advice"],
  },
  {
    quote:
      "Tell me and I forget, teach me and I may remember, involve me and I learn.",
    person: "Benjamin Franklin",
    profession: "Founding Father of the United States",
    topics: ["Inspirational", "Wisdom", "Philosophy"],
  },
  {
    quote: "Never ruin an apology with an excuse.",
    person: "Benjamin Franklin",
    profession: "Founding Father of the United States",
    topics: ["Life", "Advice"],
  },
  {
    quote:
      "Early to bed and early to rise makes a man healthy, wealthy and wise.",
    person: "Benjamin Franklin",
    profession: "Founding Father of the United States",
    topics: ["Life", "Advice"],
  },
  {
    quote: "By failing to prepare, you are preparing to fail.",
    person: "Benjamin Franklin",
    profession: "Founding Father of the United States",
    topics: ["Inspirational", "Advice"],
  },
  {
    quote: "Those who look for the bad in people will surely find it.",
    person: "Abraham Lincoln",
    profession: "16th U.S. President",
    topics: ["Inspirational", "People"],
  },
  {
    quote:
      "People don't realize how a man's whole life can be changed by one book.",
    person: "Malcolm X",
    profession: "American minister",
    topics: ["Inspirational", "Life"],
  },
  {
    quote: "If you have no critics you'll likely have no success.",
    person: "Malcolm X",
    profession: "American minister",
    topics: ["Inspirational", "Wisdom"],
  },
  {
    quote:
      "I'm for truth, no matter who tells it. I'm for justice, no matter who it's for or against.",
    person: "Malcolm X",
    profession: "American minister",
    topics: ["Inspirational", "Wisdom"],
  },
  {
    quote:
      "It is not a lack of Love, but a lack of People that makes unhappy marriages.",
    person: "Friedrich Nietzsche",
    profession: "German philosopher",
    topics: ["Love", "Marriage"],
  },
  {
    quote: "He who has a why to live can bear almost any how.",
    person: "Friedrich Nietzsche",
    profession: "German philosopher",
    topics: ["Life", "Inspirational"],
  },
  {
    quote: "That which does not kill us makes us stronger",
    person: "Friedrich Nietzsche",
    profession: "German philosopher",
    topics: ["Inspirational", "Philosophy"],
  },
  {
    quote:
      "To live is to suffer, to survive is to find some meaning in the suffering.",
    person: "Friedrich Nietzsche",
    profession: "German philosopher",
    topics: ["Life", "Philosophy", "Inspirational"],
  },
  {
    quote:
      "There is always some madness in love. But there is also always some reason in madness.",
    person: "Friedrich Nietzsche",
    profession: "German philosopher",
    topics: ["Philosophy", "Love"],
  },
  {
    quote: "No price is too high to pay for the privilege of owning yourself.",
    person: "Friedrich Nietzsche",
    profession: "German philosopher",
    topics: ["Philosophy", "Advice"],
  },
  {
    quote: "You know, when it works, Love is amazing. It's not overrated.",
    person: "Sarah Dessen",
    profession: "American novelist",
    topics: ["Love", "Life"],
  },
  {
    quote: "Life is an awful, ugly place to not have a best friend.",
    person: "Sarah Dessen",
    profession: "American novelist",
    topics: ["Friends", "Life"],
  },
  {
    quote:
      "There is never a time or place for true love. It happens accidentally, in a heartbeat, in a single flashing, throbbing moment.",
    person: "Sarah Dessen",
    profession: "American novelist",
    topics: ["Love", "Life"],
  },
  {
    quote:
      "Anyone can hide. Facing up to things, working through them, that's what makes you strong.",
    person: "Sarah Dessen",
    profession: "American novelist",
    topics: ["Love", "Life"],
  },
  {
    quote:
      "If you want to live a happy life, tie it to a goal, not to people or things",
    person: "Albert Einstein",
    profession: "Theoretical physicist",
    topics: ["Inspirational", "Life"],
  },
  {
    quote:
      "Your time is limited, so don’t waste it living someone else’s life.",
    person: "Steve Jobs",
    profession: "American entrepreneur",
    topics: ["Inspirational", "Life", "Advice"],
  },
  {
    quote:
      "Everything around you that you call life was made up by people, and you can change it.",
    person: "Steve Jobs",
    profession: "American entrepreneur",
    topics: ["Inspirational", "Life", "People"],
  },
  {
    quote:
      "Design is not just what it looks like and feels like. Design is how it works.",
    person: "Steve Jobs",
    profession: "American entrepreneur",
    topics: ["Inspirational", "Design"],
  },
  {
    quote: "Innovation distinguishes between a leader and a follower.",
    person: "Steve Jobs",
    profession: "American entrepreneur",
    topics: ["Inspirational", "Philosophy"],
  },
  {
    quote:
      "Sometimes life is going to hit you in the head with a brick. Don't lose faith.",
    person: "Steve Jobs",
    profession: "American entrepreneur",
    topics: ["Faith", "Advice", "Life"],
  },
  {
    quote:
      "Sometimes when you innovate, you make mistakes. It is best to admit them quickly, and get on with improving your other innovations.",
    person: "Steve Jobs",
    profession: "American entrepreneur",
    topics: ["Innovation", "Advice"],
  },
  {
    quote:
      "A lot of times, people don't know what they want until you show it to them.",
    person: "Steve Jobs",
    profession: "American entrepreneur",
    topics: ["People", "Philosophy"],
  },
  {
    quote:
      "Let’s go invent tomorrow rather than worrying about what happened yesterday.",
    person: "Steve Jobs",
    profession: "American entrepreneur",
    topics: ["Innovation", "Inspirational"],
  },
  {
    quote: "The most precious thing that we all have with us is time.",
    person: "Steve Jobs",
    profession: "American entrepreneur",
    topics: ["Inspirational", "Wisdom"],
  },
  {
    quote:
      "You have to trust in something, your gut, destiny, life, karma, whatever.",
    person: "Steve Jobs",
    profession: "American entrepreneur",
    topics: ["Inspirational", "Life", "Faith"],
  },
  {
    quote:
      "Every child is an artist, the problem is staying an artist when you grow up.",
    person: "Pablo Picasso",
    profession: "Spanish painter",
    topics: ["Art", "Life"],
  },
  {
    quote:
      "The purpose of art is washing the dust of daily life off our souls.",
    person: "Pablo Picasso",
    profession: "Spanish painter",
    topics: ["Art", "Life"],
  },
  {
    quote: "Good artists copy, great artists steal.",
    person: "Pablo Picasso",
    profession: "Spanish painter",
    topics: ["Art"],
  },
  {
    quote: "Art is a lie that makes us realize truth.",
    person: "Pablo Picasso",
    profession: "Spanish painter",
    topics: ["Art"],
  },
  {
    quote: "Inspiration does exist, but it must find you working.",
    person: "Pablo Picasso",
    profession: "Spanish painter",
    topics: ["Art", "Advice", "Inspirational"],
  },
  {
    quote: "Strive not to be a success, but rather to be of value.",
    person: "Albert Einstein",
    profession: "Theoretical physicist",
    topics: ["Inspirational", "Life"],
  },
  {
    quote:
      "The pessimist sees difficulty in every opportunity. The optimist sees opportunity in every difficulty.",
    person: "Winston Churchill",
    profession: "Former British Prime Minister",
    topics: ["Inspirational", "Life"],
  },
  {
    quote: "We learn wisdom from failure much more than from succes.",
    person: "Samuel Smiles",
    profession: "Scottish person",
    topics: ["Inspirational", "Wisdom", "Failure", "Succes"],
  },
  {
    quote:
      "Hope is like the sun, which, as we journey toward it, casts the shadow of our burden behind us.",
    person: "Samuel Smiles",
    profession: "Scottish person",
    topics: ["Inspirational", "Wisdom"],
  },
  {
    quote:
      "We often discover what will do, by finding out what will not do; and probably he who never made a mistake never made a discovery.",
    person: "Samuel Smiles",
    profession: "Scottish person",
    topics: ["Inspirational", "Wisdom", "Failure"],
  },
  {
    quote:
      "Lost wealth may be replaced by industry, lost knowledge by study, lost health by temperance or medicine, but lost time is gone forever.",
    person: "Samuel Smiles",
    profession: "Scottish person",
    topics: ["Inspirational", "Wisdom", "Time"],
  },
  {
    quote: "Life will always be to a large extent what we ourselves make it.",
    person: "Samuel Smiles",
    profession: "Scottish person",
    topics: ["Inspirational", "Life"],
  },
  {
    quote: "Enthusiasm... the sustaining power of all great action.",
    person: "Samuel Smiles",
    profession: "Scottish person",
    topics: ["Inspirational", "Life"],
  },
  {
    quote:
      "People who are crazy enough to think they can change the world, are the ones who do.",
    person: "Winston Churchill",
    profession: "Former British Prime Minister",
    topics: ["Inspirational", "Life", "People"],
  },
  {
    quote:
      "The fool doth think he is wise, but the wise man knows himself to be a fool.",
    person: "William Shakespeare",
    profession: "English poet",
    topics: ["Wisdom"],
  },
  {
    quote: "There is nothing either good or bad, but thinking makes it so.",
    person: "William Shakespeare",
    profession: "English poet",
    topics: ["Philosophy"],
  },
  {
    quote:
      "You're not to be so blind with patriotism that you can't face reality. Wrong is wrong, no matter who does it or says it.",
    person: "Malcolm X",
    profession: "American minister",
    topics: ["Philosophy"],
  },
  {
    quote: "Hell is empty and all the devils are here.",
    person: "William Shakespeare",
    profession: "English poet",
    topics: ["Philosophy"],
  },
  {
    quote: "The course of true Love never did run smooth.",
    person: "William Shakespeare",
    profession: "English poet",
    topics: ["Love", "Wisdom"],
  },
  {
    quote: "Expectation is the root of all heartache.",
    person: "William Shakespeare",
    profession: "English poet",
    topics: ["Philosophy", "Wisdom"],
  },
  {
    quote: "Listen to many, speak to a few.",
    person: "William Shakespeare",
    profession: "English poet",
    topics: ["Wisdom", "Inspirational"],
  },
  {
    quote: "One may smile, and smile, and be a villain.",
    person: "William Shakespeare",
    profession: "English poet",
    topics: ["Philosophy", "Wisdom"],
  },
  {
    quote: "Any fool can know. The point is to understand.",
    person: "Albert Einstein",
    profession: "Theoretical physicist",
    topics: ["Philosophy", "Wisdom", "Inspirational"],
  },
  {
    quote:
      "It is not that I'm so smart. But I stay with the questions much longer.",
    person: "Albert Einstein",
    profession: "Theoretical physicist",
    topics: ["Philosophy", "Wisdom", "Inspirational"],
  },
  {
    quote:
      "Build your own dreams, or someone else will hire you to build theirs.",
    person: "Farrah Gray",
    profession: "American businessman",
    topics: ["Wisdom", "Inspirational", "Dream"],
  },
  {
    quote: "Comfort is the enemy of achievement",
    person: "Farrah Gray",
    profession: "American businessman",
    topics: ["Achievement", "Inspirational"],
  },
  {
    quote:
      "You know, you don't have to have money to be a successful businessperson.",
    person: "Farrah Gray",
    profession: "American businessman",
    topics: ["Business", "Inspirational"],
  },
  {
    quote:
      "I can dream alone and strive alone, but true success always requires the help and support of others.",
    person: "Farrah Gray",
    profession: "American businessman",
    topics: ["People", "Success", "Dream"],
  },
  {
    quote: "Success isn’t something that happens overnight: it’s a process.",
    person: "Farrah Gray",
    profession: "American businessman",
    topics: ["Business", "Inspirational", "Succes"],
  },
  {
    quote:
      "The more we give, the more we receive. It's important to give back, because the seeds you plant today, you will harvest tomorrow.",
    person: "Farrah Gray",
    profession: "American businessman",
    topics: ["Giving"],
  },
  {
    quote: "Either you run the day, or the day runs you.",
    person: "Jim Rohn",
    profession: "American entrepreneur",
    topics: ["Philosophy", "Inspirational"],
  },
  {
    quote: "Start from wherever you are and with whatever you’ve got.",
    person: "Jim Rohn",
    profession: "American entrepreneur",
    topics: ["Advice", "Motivational"],
  },
  {
    quote:
      "Without constant activity, the threats of life will soon overwhelm the values",
    person: "Jim Rohn",
    profession: "American entrepreneur",
    topics: ["Life", "Wisdom"],
  },
  {
    quote: "If you don’t like how things are, change it! You’re not a tree.",
    person: "Jim Rohn",
    profession: "American entrepreneur",
    topics: ["Motivational", "Wisdom"],
  },
  {
    quote:
      "Success is neither magical nor mysterious. Success is the natural consequence of consistently applying basic fundamentals.",
    person: "Jim Rohn",
    profession: "American entrepreneur",
    topics: ["Motivational", "Success"],
  },
  {
    quote: "How long should you try? Until.",
    person: "Jim Rohn",
    profession: "American entrepreneur",
    topics: ["Motivational", "Inspirational"],
  },
  {
    quote:
      "Focus on making yourself better, not on thinking that you are better.",
    person: "Bohdi Sanders",
    profession: "person",
    topics: ["Inspirational", "Advice"],
  },
  {
    quote: "A true friend is someone you can count on no matter what.",
    person: "Bohdi Sanders",
    profession: "person",
    topics: ["Friends", "Wisdom"],
  },
  {
    quote: "Face your fears and you will be able to conquer them.",
    person: "Bohdi Sanders",
    profession: "person",
    topics: ["Fear", "Advice"],
  },
  {
    quote:
      "If you want to know what people believe, don’t read what they write, don’t ask what they believe, just observe what they do.",
    person: "Bohdi Sanders",
    profession: "person",
    topics: ["People", "Inspirational"],
  },
  {
    quote: "I used to think I was indecisive, but now I am not quite sure.",
    person: "Tommy Cooper",
    profession: "British Comedian",
    topics: ["Humor"],
  },
  {
    quote:
      "Police arrested two kids yesterday, one was drinking battery acid, the other was eating fireworks. They charged one and let the other one off.",
    person: "Tommy Cooper",
    profession: "British Comedian",
    topics: ["Humor"],
  },
  {
    quote:
      "You know, somebody actually complimented me on my driving today. They left a little note on the windscreen, it said 'Parking Fine.'",
    person: "Tommy Cooper",
    profession: "British Comedian",
    topics: ["Humor"],
  },
  {
    quote:
      "A lie gets halfway around the world before the truth has a chance to get its pants on.",
    person: "Winston Churchill",
    profession: "Former British Prime Minister",
    topics: ["Humor", "Life"],
  },
  {
    quote:
      "Knowledge is like underwear. It is useful to have it, but not necessary to show it off.",
    person: "Bill Murray",
    profession: "American actor",
    topics: ["Humor"],
  },
  {
    quote:
      "We are all here on earth to help others; what on earth the others are here for I don't know.",
    person: "Bill Murray",
    profession: "American actor",
    topics: ["Humor"],
  },
  {
    quote:
      "Happiness is having a large, loving, caring, close-knit family in another city.",
    person: "George Burns",
    profession: "American comedian",
    topics: ["Humor"],
  },
  {
    quote: "A professor is someone who talks in someone else's sleep.",
    person: "W. H. Auden",
    profession: "English-American Poet",
    topics: ["Humor"],
  },
  {
    quote:
      "Everything is changing. People are taking the comedians seriously and the politicians as a joke.",
    person: "Will Rogers",
    profession: "American actor",
    topics: ["Humor"],
  },
  {
    quote:
      "That’s why they call it the American Dream, because you have to be asleep to believe it.",
    person: "George Carlin",
    profession: "American comedian",
    topics: ["Humor"],
  },
  {
    quote: "If you’re too open-minded; your brains may fall out.",
    person: "Lawrence Ferlinghetti",
    profession: "American poet",
    topics: ["Humor"],
  },
  {
    quote:
      "If you think nobody cares about you, try missing a couple of payments.",
    person: "Steven Wright",
    profession: "American stand-up comedian",
    topics: ["Humor"],
  },
  {
    quote:
      "There's a fine line between fishing and just standing on the shore like an idiot.",
    person: "Steven Wright",
    profession: "American stand-up comedian",
    topics: ["Humor"],
  },
  {
    quote:
      "If at first you don't succeed then skydiving definitely isn't for you.",
    person: "Steven Wright",
    profession: "American stand-up comedian",
    topics: ["Humor"],
  },
  {
    quote:
      "A lot of people are afraid of heights. Not me, I'm afraid of widths.",
    person: "Steven Wright",
    profession: "American stand-up comedian",
    topics: ["Humor"],
  },
  {
    quote: "What's another word for Thesaurus?",
    person: "Steven Wright",
    profession: "American stand-up comedian",
    topics: ["Humor"],
  },
  {
    quote: "You can't have everything. Where would you put it?",
    person: "Steven Wright",
    profession: "American stand-up comedian",
    topics: ["Humor"],
  },
  {
    quote: "Don’t be so humble – you are not that great.",
    person: "Golda Meir",
    profession: "Former Prime Minister of Israel",
    topics: ["Humor"],
  },
  {
    quote:
      "Whether women are better than men I cannot say - but I can say they are certainly no worse.",
    person: "Golda Meir",
    profession: "Former Prime Minister of Israel",
    topics: ["Humor"],
  },
  {
    quote:
      "The best way to teach your kids about taxes is by eating 30 percent of their ice cream.",
    person: "Bill Murray",
    profession: "American actor",
    topics: ["Humor"],
  },
  {
    quote:
      "You can't soar with the eagles as long as you hang out with the turkeys.",
    person: "Joel Osteen",
    profession: "American televangelist",
    topics: ["Philosophy", "Inspirational"],
  },
  {
    quote:
      "You can change your world by changing your words... Remember, death and life are in the power of the tongue.",
    person: "Joel Osteen",
    profession: "American televangelist",
    topics: ["Philosophy", "Life"],
  },
  {
    quote: "Nothing is impossible, the word itself says 'I'm possible'!",
    person: "Audrey Hepburn",
    profession: "British actress",
    topics: ["Humor", "Inspirational"],
  },
  {
    quote:
      "As you grow older, you will discover that you have two hands, one for helping yourself, the other for helping others.",
    person: "Audrey Hepburn",
    profession: "British actress",
    topics: ["People", "Inspirational"],
  },
  {
    quote:
      "I never think of myself as an icon. What is in other people's minds is not in my mind. I just do my thing.",
    person: "Audrey Hepburn",
    profession: "British actress",
    topics: ["People", "Inspirational"],
  },
  {
    quote: "The best thing to hold onto in life is each other.",
    person: "Audrey Hepburn",
    profession: "British actress",
    topics: ["People", "Life"],
  },
  {
    quote: "Be nice to nerds. Chances are you'll end up working for one.",
    person: "Bill Gates",
    profession: "American business magnate",
    topics: ["Humor", "Advice"],
  },
  {
    quote: "Your most unhappy customers are your greatest source of learning.",
    person: "Bill Gates",
    profession: "American business magnate",
    topics: ["Inspirational", "People"],
  },
  {
    quote:
      "Success is a lousy teacher. It seduces smart people into thinking they can't lose.",
    person: "Bill Gates",
    profession: "American business magnate",
    topics: ["Inspirational", "People"],
  },
  {
    quote: "Life is not fair; get used to it.",
    person: "Bill Gates",
    profession: "American business magnate",
    topics: ["Inspirational", "Wisdom"],
  },
  {
    quote: "If you can't make it good, at least make it look good.",
    person: "Bill Gates",
    profession: "American business magnate",
    topics: ["Inspirational", "Wisdom", "Advice"],
  },
  {
    quote:
      "Life is like riding a bicycle. To keep your balance, you must keep moving.",
    person: "Albert Einstein",
    profession: "Theoretical physicist",
    topics: ["Life", "Inspirational"],
  },
  {
    quote:
      "Nearly all men can stand adversity, but if you want to test a man’s character, give him power.",
    person: "Abraham Lincoln",
    profession: "16th U.S. President",
    topics: ["Philosophy", "Wisdom"],
  },
  {
    quote: "The best way to predict your future is to create it.",
    person: "Abraham Lincoln",
    profession: "16th U.S. President",
    topics: ["Life", "Philosophy", "Wisdom"],
  },
  {
    quote: "I would rather be a little nobody, then to be a evil somebody.",
    person: "Abraham Lincoln",
    profession: "16th U.S. President",
    topics: ["Philosophy", "Wisdom"],
  },
  {
    quote: "I will prepare and some day my chance will come.",
    person: "Abraham Lincoln",
    profession: "16th U.S. President",
    topics: ["Inspirational", "Life"],
  },
  {
    quote: "Important principles may, and must, be inflexible.",
    person: "Abraham Lincoln",
    profession: "16th U.S. President",
    topics: ["Philosophy", "Wisdom", "Inspirational"],
  },
  {
    quote: "Tact is the ability to describe others as they see themselves.",
    person: "Abraham Lincoln",
    profession: "16th U.S. President",
    topics: ["Philosophy", "Wisdom"],
  },
  {
    quote:
      "You cannot escape the responsibility of tomorrow by evading it today.",
    person: "Abraham Lincoln",
    profession: "16th U.S. President",
    topics: ["Inspirational", "Philosophy", "Wisdom"],
  },
  {
    quote: "Knowing thyself, that is the greatest wisdom.",
    person: "Galileo Galilei",
    profession: "Italian Polymath",
    topics: ["Inspirational", "Wisdom"],
  },
  {
    quote:
      "To be humane, we must ever be ready to pronounce that wise, ingenious and modest statement 'I do not know'.",
    person: "Galileo Galilei",
    profession: "Italian Polymath",
    topics: ["Inspirational", "Wisdom"],
  },
  {
    quote: "Two truths cannot contradict one another.",
    person: "Galileo Galilei",
    profession: "Italian Polymath",
    topics: ["Inspirational", "Wisdom"],
  },
  {
    quote: "Where the senses fail us, reason must step in.",
    person: "Galileo Galilei",
    profession: "Italian Polymath",
    topics: ["Inspirational", "Wisdom"],
  },
  {
    quote:
      "All truths are easy to understand once they are discovered; the point is to discover them.",
    person: "Galileo Galilei",
    profession: "Italian Polymath",
    topics: ["Inspirational", "Wisdom"],
  },
];

// Event Listeners

btn.addEventListener("click", function () {
  let random = Math.floor(Math.random() * quotes.length);

  quote.innerText = quotes[random].quote;
  person.innerText = quotes[random].person;
});
