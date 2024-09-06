const questionsEasy = [
  {
    type: "multiple",
    difficulty: "easy",
    category: "Science: Computers",
    question: "What is the most preferred image format used for logos in the Wikimedia database?",
    correct_answer: ".svg",
    incorrect_answers: [".png", ".jpeg", ".gif"],
  },
  {
    type: "multiple",
    difficulty: "easy",
    category: "Science: Computers",
    question: "The series of the Intel HD graphics generation succeeding that of the 5000 and 6000 series (Broadwell) is called:",
    correct_answer: "HD Graphics 500",
    incorrect_answers: ["HD Graphics 700", "HD Graphics 600", "HD Graphics 7000"],
  },
  {
    type: "boolean",
    difficulty: "easy",
    category: "Science: Computers",
    question: '"HTML" stands for Hypertext Markup Language.',
    correct_answer: "True",
    incorrect_answers: ["False"],
  },
  {
    type: "multiple",
    difficulty: "easy",
    category: "Science: Computers",
    question: "What does LTS stand for in the software market?",
    correct_answer: "Long Term Support",
    incorrect_answers: ["Long Taco Service", "Ludicrous Transfer Speed", "Ludicrous Turbo Speed"],
  },
  {
    type: "boolean",
    difficulty: "easy",
    category: "Science: Computers",
    question: "The Windows 7 operating system has six main editions.",
    correct_answer: "True",
    incorrect_answers: ["False"],
  },
  {
    type: "multiple",
    difficulty: "easy",
    category: "Science: Computers",
    question: "What does CPU stand for?",
    correct_answer: "Central Processing Unit",
    incorrect_answers: ["Central Process Unit", "Computer Personal Unit", "Central Processor Unit"],
  },
  {
    type: "multiple",
    difficulty: "easy",
    category: "Science: Computers",
    question: "Which programming language shares its name with an island in Indonesia?",
    correct_answer: "Java",
    incorrect_answers: ["Python", "C", "Jakarta"],
  },
  {
    type: "multiple",
    difficulty: "easy",
    category: "Science: Computers",
    question: "How long is an IPv6 address?",
    correct_answer: "128 bits",
    incorrect_answers: ["32 bits", "64 bits", "128 bytes"],
  },
  {
    type: "boolean",
    difficulty: "easy",
    category: "Science: Computers",
    question: "The Windows ME operating system was released in the year 2000.",
    correct_answer: "True",
    incorrect_answers: ["False"],
  },
  {
    type: "multiple",
    difficulty: "easy",
    category: "Science: Computers",
    question: "What language does Node.js use?",
    correct_answer: "JavaScript",
    incorrect_answers: ["Java", "Java Source", "Joomla Source Code"],
  },
  {
    type: "multiple",
    difficulty: "easy",
    category: "Science: Computers",
    question: "In computing, what does LAN stand for?",
    correct_answer: "Local Area Network",
    incorrect_answers: ["Long Antenna Node", "Light Access Node", "Land Address Navigation"],
  },
  {
    type: "multiple",
    difficulty: "easy",
    category: "Science: Computers",
    question: "What does GHz stand for?",
    correct_answer: "Gigahertz",
    incorrect_answers: ["Gigahotz", "Gigahetz", "Gigahatz"],
  },
  {
    type: "multiple",
    difficulty: "easy",
    category: "Science: Computers",
    question: "Which computer hardware device provides an interface for all other connected devices to communicate?",
    correct_answer: "Motherboard",
    incorrect_answers: ["CPU", "Hard Disk Drive", "RAM"],
  },
  {
    type: "multiple",
    difficulty: "easy",
    category: "Science: Computers",
    question: "The programming language 'Swift' was created to replace what other programming language?",
    correct_answer: "Objective-C",
    incorrect_answers: ["C#", "Ruby", "C++"],
  },
  {
    type: "multiple",
    difficulty: "easy",
    category: "Science: Computers",
    question: "This mobile OS held the largest market share in 2012.",
    correct_answer: "iOS",
    incorrect_answers: ["Android", "BlackBerry", "Symbian"],
  },
  {
    type: "boolean",
    difficulty: "easy",
    category: "Science: Computers",
    question: "Linus Torvalds created Linux and Git.",
    correct_answer: "True",
    incorrect_answers: ["False"],
  },
  {
    type: "multiple",
    difficulty: "easy",
    category: "Science: Computers",
    question: 'In "Hexadecimal", what color would be displayed from the color code "#00FF00"?',
    correct_answer: "Green",
    incorrect_answers: ["Red", "Blue", "Yellow"],
  },
  {
    type: "multiple",
    difficulty: "easy",
    category: "Science: Computers",
    question: "What does the 'MP' stand for in MP3?",
    correct_answer: "Moving Picture",
    incorrect_answers: ["Music Player", "Multi Pass", "Micro Point"],
  },
  {
    type: "multiple",
    difficulty: "easy",
    category: "Science: Computers",
    question: "According to the International System of Units, how many bytes are in a kilobyte of RAM?",
    correct_answer: "1000",
    incorrect_answers: ["512", "1024", "500"],
  },
  {
    type: "multiple",
    difficulty: "easy",
    category: "Science: Computers",
    question: "Which computer language would you associate Django framework with?",
    correct_answer: "Python",
    incorrect_answers: ["C#", "C++", "Java"],
  },
  {
    type: "multiple",
    difficulty: "easy",
    category: "Science: Computers",
    question: "If you were to code software in this language you'd only be able to type 0's and 1's.",
    correct_answer: "Binary",
    incorrect_answers: ["JavaScript", "C++", "Python"],
  },
  {
    type: "multiple",
    difficulty: "easy",
    category: "Science: Computers",
    question: "In any programming language, what is the most common way to iterate through an array?",
    correct_answer: "'For' loops",
    incorrect_answers: ["'If' Statements", "'Do-while' loops", "'While' loops"],
  },
  {
    type: "boolean",
    difficulty: "easy",
    category: "Science: Computers",
    question: "Pointers were not used in the original C programming language; they were added later on in C++.",
    correct_answer: "False",
    incorrect_answers: ["True"],
  },
  {
    type: "multiple",
    difficulty: "easy",
    category: "Science: Computers",
    question: "How many values can a single byte represent?",
    correct_answer: "256",
    incorrect_answers: ["8", "1", "1024"],
  },
  {
    type: "boolean",
    difficulty: "easy",
    category: "Science: Computers",
    question: "Time on Computers is measured via the EPOX System.",
    correct_answer: "False",
    incorrect_answers: ["True"],
  },
  {
    type: "multiple",
    difficulty: "easy",
    category: "Science: Computers",
    question: "What is the domain name for the country Tuvalu?",
    correct_answer: ".tv",
    incorrect_answers: [".tu", ".tt", ".tl"],
  },
  {
    type: "multiple",
    difficulty: "easy",
    category: "Science: Computers",
    question: "The C programming language was created by this American computer scientist.",
    correct_answer: "Dennis Ritchie",
    incorrect_answers: ["Tim Berners Lee", "al-Khwārizmī", "Willis Ware"],
  },
  {
    type: "boolean",
    difficulty: "easy",
    category: "Science: Computers",
    question: "The NVidia GTX 1080 gets its name because it can only render at a 1920x1080 screen resolution.",
    correct_answer: "False",
    incorrect_answers: ["True"],
  },
  {
    type: "multiple",
    difficulty: "easy",
    category: "Science: Computers",
    question: "On Twitter, what was the original character limit for a Tweet?",
    correct_answer: "140",
    incorrect_answers: ["120", "160", "100"],
  },
  {
    type: "multiple",
    difficulty: "easy",
    category: "Science: Computers",
    question: "How many kilobytes in one gigabyte (in decimal)?",
    correct_answer: "1000000",
    incorrect_answers: ["1024", "1000", "1048576"],
  },
];

const questionsMedium = [
  {
    type: "multiple",
    difficulty: "medium",
    category: "Science: Computers",
    question: "Laserjet and inkjet printers are both examples of what type of printer?",
    correct_answer: "Non-impact printer",
    incorrect_answers: ["Impact printer", "Daisywheel printer", "Dot matrix printer"],
  },
  {
    type: "multiple",
    difficulty: "medium",
    category: "Science: Computers",
    question: "While Apple was formed in California, in which western state was Microsoft founded?",
    correct_answer: "New Mexico",
    incorrect_answers: ["Washington", "Colorado", "Arizona"],
  },
  {
    type: "multiple",
    difficulty: "medium",
    category: "Science: Computers",
    question: "On which computer hardware device is the BIOS chip located?",
    correct_answer: "Motherboard",
    incorrect_answers: ["Hard Disk Drive", "CPU", "GPU"],
  },
  {
    type: "multiple",
    difficulty: "medium",
    category: "Science: Computers",
    question: "What does the 'S' in the RSA encryption algorithm stand for?",
    correct_answer: "Shamir",
    incorrect_answers: ["Secure", "Schottky", "Stable"],
  },
  {
    type: "boolean",
    difficulty: "medium",
    category: "Science: Computers",
    question: "Linus Sebastian is the creator of the Linux kernel, which went on to be used in Linux, Android, and Chrome OS.",
    correct_answer: "False",
    incorrect_answers: ["True"],
  },
  {
    type: "multiple",
    difficulty: "medium",
    category: "Science: Computers",
    question: "What does the term GPU stand for?",
    correct_answer: "Graphics Processing Unit",
    incorrect_answers: ["Gaming Processor Unit", "Graphite Producing Unit", "Graphical Proprietary Unit"],
  },
  {
    type: "multiple",
    difficulty: "medium",
    category: "Science: Computers",
    question: "What is the name of the default theme that is installed with Windows XP?",
    correct_answer: "Luna",
    incorrect_answers: ["Neptune", "Whistler", "Bliss"],
  },
  {
    type: "multiple",
    difficulty: "medium",
    category: "Science: Computers",
    question: "Moore's law originally stated that the number of transistors on a microprocessor chip would double every...",
    correct_answer: "Year",
    incorrect_answers: ["Four Years", "Two Years", "Eight Years"],
  },
  {
    type: "multiple",
    difficulty: "medium",
    category: "Science: Computers",
    question: "Nvidia's headquarters are based in which Silicon Valley city?",
    correct_answer: "Santa Clara",
    incorrect_answers: ["Palo Alto", "Cupertino", "Mountain View"],
  },
  {
    type: "boolean",
    difficulty: "medium",
    category: "Science: Computers",
    question: "The first dual-core CPU was the Intel Pentium D.",
    correct_answer: "False",
    incorrect_answers: ["True"],
  },
  {
    type: "boolean",
    difficulty: "medium",
    category: "Science: Computers",
    question: "It's not possible to format a write-protected DVD-R Hard Disk.",
    correct_answer: "True",
    incorrect_answers: ["False"],
  },
  {
    type: "multiple",
    difficulty: "medium",
    category: "Science: Computers",
    question: "The name of technology company HP stands for what?",
    correct_answer: "Hewlett-Packard",
    incorrect_answers: ["Howard Packmann", "Husker-Pollosk", "Hellman-Pohl"],
  },
  {
    type: "boolean",
    difficulty: "medium",
    category: "Science: Computers",
    question: "'Windows NT' is a monolithic kernel.",
    correct_answer: "False",
    incorrect_answers: ["True"],
  },
  {
    type: "multiple",
    difficulty: "medium",
    category: "Science: Computers",
    question: "In programming, the ternary operator is mostly defined with what symbol(s)?",
    correct_answer: "?:",
    incorrect_answers: ["??", "if then", "?"],
  },
  {
    type: "multiple",
    difficulty: "medium",
    category: "Science: Computers",
    question: "What is the correct term for the metal object in between the CPU and the CPU fan within a computer system?",
    correct_answer: "Heat Sink",
    incorrect_answers: ["CPU Vent", "Temperature Decipator", "Heat Vent"],
  },
  {
    type: "multiple",
    difficulty: "medium",
    category: "Science: Computers",
    question: "All of the following programs are classified as raster graphics editors EXCEPT:",
    correct_answer: "Inkscape",
    incorrect_answers: ["Paint.NET", "GIMP", "Adobe Photoshop"],
  },
  {
    type: "boolean",
    difficulty: "medium",
    category: "Science: Computers",
    question: "Android versions are named in alphabetical order.",
    correct_answer: "True",
    incorrect_answers: ["False"],
  },
  {
    type: "boolean",
    difficulty: "medium",
    category: "Science: Computers",
    question: "To bypass US Munitions Export Laws, the creator of the PGP published all the source code in book form.",
    correct_answer: "True",
    incorrect_answers: ["False"],
  },
  {
    type: "multiple",
    difficulty: "medium",
    category: "Science: Computers",
    question: "In computing terms, typically what does CLI stand for?",
    correct_answer: "Command Line Interface",
    incorrect_answers: ["Common Language Input", "Control Line Interface", "Common Language Interface"],
  },
  {
    type: "multiple",
    difficulty: "medium",
    category: "Science: Computers",
    question: "Unix Time is defined as the number of seconds that have elapsed since when?",
    correct_answer: "Midnight, January 1, 1970",
    incorrect_answers: ["Midnight, July 4, 1976", "Midnight, January 10, 1976", "Midnight, July 4, 1980"],
  },
  {
    type: "multiple",
    difficulty: "medium",
    category: "Science: Computers",
    question: "Whistler was the codename of this Microsoft Operating System.",
    correct_answer: "Windows XP",
    incorrect_answers: ["Windows 2000", "Windows 7", "Windows 95"],
  },
  {
    type: "boolean",
    difficulty: "medium",
    category: "Science: Computers",
    question: "Early RAM was directly seated onto the motherboard and could not be easily removed.",
    correct_answer: "True",
    incorrect_answers: ["False"],
  },
  {
    type: "multiple",
    difficulty: "medium",
    category: "Science: Computers",
    question: "How many cores does the Intel i7-6950X have?",
    correct_answer: "10",
    incorrect_answers: ["12", "8", "4"],
  },
  {
    type: "multiple",
    difficulty: "medium",
    category: "Science: Computers",
    question: "What is the main CPU in the Sega Mega Drive / Sega Genesis?",
    correct_answer: "Motorola 68000",
    incorrect_answers: ["Zilog Z80", "Yamaha YM2612", "Intel 8088"],
  },
  {
    type: "multiple",
    difficulty: "medium",
    category: "Science: Computers",
    question: "Which of the following is a personal computer made by the Japanese company Fujitsu?",
    correct_answer: "FM-7",
    incorrect_answers: ["PC-9801", "Xmillennium", "MSX"],
  },
  {
    type: "multiple",
    difficulty: "medium",
    category: "Science: Computers",
    question: "What was the first Android version specifically optimized for tablets?",
    correct_answer: "Honeycomb",
    incorrect_answers: ["Eclair", "Froyo", "Marshmellow"],
  },
  {
    type: "multiple",
    difficulty: "medium",
    category: "Science: Computers",
    question: "Which one of these is not an official development name for a Ubuntu release?",
    correct_answer: "Mystic Mansion",
    incorrect_answers: ["Trusty Tahr", "Utopic Unicorn", "Wily Werewolf"],
  },
  {
    type: "multiple",
    difficulty: "medium",
    category: "Science: Computers",
    question: "When did the online streaming service 'Mixer' launch?",
    correct_answer: "2016",
    incorrect_answers: ["2013", "2009", "2011"],
  },
  {
    type: "boolean",
    difficulty: "medium",
    category: "Science: Computers",
    question: "The HTML5 standard was published in 2014.",
    correct_answer: "True",
    incorrect_answers: ["False"],
  },
  {
    type: "boolean",
    difficulty: "medium",
    category: "Science: Computers",
    question: "The very first recorded computer 'bug' was a moth found inside a Harvard Mark II computer.",
    correct_answer: "True",
    incorrect_answers: ["False"],
  },
];

const questionsHard = [
  {
    type: "multiple",
    difficulty: "hard",
    category: "Science: Computers",
    question: "America Online (AOL) started out as which of these online service providers?",
    correct_answer: "Quantum Link",
    incorrect_answers: ["CompuServe", "Prodigy", "GEnie"],
  },
  {
    type: "boolean",
    difficulty: "hard",
    category: "Science: Computers",
    question: "The IBM PC used an Intel 8008 microprocessor clocked at 4.77 MHz and 8 kilobytes of memory.",
    correct_answer: "False",
    incorrect_answers: ["True"],
  },
  {
    type: "multiple",
    difficulty: "hard",
    category: "Science: Computers",
    question: "Lenovo acquired IBM's personal computer division, including the ThinkPad line of laptops and tablets, in what year?",
    correct_answer: "2005",
    incorrect_answers: ["1999", "2002", "2008"],
  },
  {
    type: "multiple",
    difficulty: "hard",
    category: "Science: Computers",
    question: "Which of the following computer components can be built using only NAND gates?",
    correct_answer: "ALU",
    incorrect_answers: ["CPU", "RAM", "Register"],
  },
  {
    type: "multiple",
    difficulty: "hard",
    category: "Science: Computers",
    question: "The internet domain .fm is the country-code top-level domain for which Pacific Ocean island nation?",
    correct_answer: "Micronesia",
    incorrect_answers: ["Fiji", "Tuvalu", "Marshall Islands"],
  },
  {
    type: "multiple",
    difficulty: "hard",
    category: "Science: Computers",
    question: "Dutch computer scientist Mark Overmars is known for creating which game development engine?",
    correct_answer: "Game Maker",
    incorrect_answers: ["Stencyl", "Construct", "Torque 2D"],
  },
  {
    type: "multiple",
    difficulty: "hard",
    category: "Science: Computers",
    question: "What is the name given to layer 4 of the Open Systems Interconnection (ISO) model?",
    correct_answer: "Transport",
    incorrect_answers: ["Session", "Data link", "Network"],
  },
  {
    type: "multiple",
    difficulty: "hard",
    category: "Science: Computers",
    question: "What internet protocol was documented in RFC 1459?",
    correct_answer: "IRC",
    incorrect_answers: ["HTTP", "HTTPS", "FTP"],
  },
  {
    type: "multiple",
    difficulty: "hard",
    category: "Science: Computers",
    question: "Which data structure does FILO apply to?",
    correct_answer: "Stack",
    incorrect_answers: ["Queue", "Heap", "Tree"],
  },
  {
    type: "multiple",
    difficulty: "hard",
    category: "Science: Computers",
    question: "Which of these Cherry MX mechanical keyboard switches is both tactile and clicky?",
    correct_answer: "Cherry MX Blue",
    incorrect_answers: ["Cherry MX Black", "Cherry MX Red", "Cherry MX Brown"],
  },
  {
    type: "multiple",
    difficulty: "hard",
    category: "Science: Computers",
    question: "What major programming language does Unreal Engine 4 use?",
    correct_answer: "C++",
    incorrect_answers: ["Assembly", "C#", "ECMAScript"],
  },
  {
    type: "multiple",
    difficulty: "hard",
    category: "Science: Computers",
    question: "Who invented the 'Spanning Tree Protocol'?",
    correct_answer: "Radia Perlman",
    incorrect_answers: ["Paul Vixie", "Vint Cerf", "Michael Roberts"],
  },
  {
    type: "multiple",
    difficulty: "hard",
    category: "Science: Computers",
    question: "What does the International System of Quantities refer 1024 bytes as?",
    correct_answer: "Kibibyte",
    incorrect_answers: ["Kylobyte", "Kilobyte", "Kelobyte"],
  },
  {
    type: "boolean",
    difficulty: "hard",
    category: "Science: Computers",
    question: "DHCP stands for Dynamic Host Configuration Port.",
    correct_answer: "False",
    incorrect_answers: ["True"],
  },
  {
    type: "boolean",
    difficulty: "hard",
    category: "Science: Computers",
    question: "The T-Mobile Sidekick smartphone is a re-branded version of the Danger Hiptop.",
    correct_answer: "True",
    incorrect_answers: ["False"],
  },
  {
    type: "multiple",
    difficulty: "hard",
    category: "Science: Computers",
    question: "According to DeMorgan's Theorem, the Boolean expression (AB)' is equivalent to:",
    correct_answer: "A' + B'",
    incorrect_answers: ["A'B + B'A", "A'B'", "AB' + AB"],
  },
  {
    type: "multiple",
    difficulty: "hard",
    category: "Science: Computers",
    question: "Which kind of algorithm is Ron Rivest not famous for creating?",
    correct_answer: "Secret sharing scheme",
    incorrect_answers: ["Hashing algorithm", "Asymmetric encryption", "Stream cipher"],
  },
  {
    type: "multiple",
    difficulty: "hard",
    category: "Science: Computers",
    question: "Released in 2001, the first edition of Apple's Mac OS X operating system (version 10.0) was given what animal code name?",
    correct_answer: "Cheetah",
    incorrect_answers: ["Puma", "Tiger", "Leopard"],
  },
  {
    type: "multiple",
    difficulty: "hard",
    category: "Science: Computers",
    question: "What was the first company to use the term 'Golden Master'?",
    correct_answer: "Apple",
    incorrect_answers: ["IBM", "Microsoft", "Google"],
  },
  {
    type: "multiple",
    difficulty: "hard",
    category: "Science: Computers",
    question: "The acronym 'RIP' stands for which of these?",
    correct_answer: "Routing Information Protocol",
    incorrect_answers: ["Runtime Instance Processes", "Regular Interval Processes", "Routine Inspection Protocol"],
  },
  {
    type: "multiple",
    difficulty: "hard",
    category: "Science: Computers",
    question: "What vulnerability ranked #1 on the OWASP Top 10 in 2013?",
    correct_answer: "Injection",
    incorrect_answers: ["Broken Auth", "Cross-Site Scripting", "Insecure Direct Object Refs"],
  },
  {
    type: "multiple",
    difficulty: "hard",
    category: "Science: Computers",
    question: "Which of these names was an actual codename for a cancelled Microsoft project?",
    correct_answer: "Neptune",
    incorrect_answers: ["Enceladus", "Pollux", "Saturn"],
  },
  {
    type: "multiple",
    difficulty: "hard",
    category: "Science: Computers",
    question: "Who is the founder of Palantir?",
    correct_answer: "Peter Thiel",
    incorrect_answers: ["Mark Zuckerberg", "Marc Benioff", "Jack Dorsey"],
  },
  {
    type: "multiple",
    difficulty: "hard",
    category: "Science: Computers",
    question: "What type of sound chip does the Super Nintendo Entertainment System (SNES) have?",
    correct_answer: "ADPCM Sampler",
    incorrect_answers: ["FM Synthesizer", "PSG", "PCM Sampler"],
  },
  {
    type: "multiple",
    difficulty: "hard",
    category: "Science: Computers",
    question: "How many Hz does the video standard PAL support?",
    correct_answer: "50",
    incorrect_answers: ["59", "60", "25"],
  },
  {
    type: "multiple",
    difficulty: "hard",
    category: "Science: Computers",
    question: "What is the codename of the eighth generation Intel Core micro-architecture launched in October 2017?",
    correct_answer: "Coffee Lake",
    incorrect_answers: ["Sandy Bridge", "Skylake", "Broadwell"],
  },
  {
    type: "multiple",
    difficulty: "hard",
    category: "Science: Computers",
    question: "Which of these is not a layer in the OSI model for data communications?",
    correct_answer: "Connection Layer",
    incorrect_answers: ["Application Layer", "Transport Layer", "Physical Layer"],
  },
  {
    type: "multiple",
    difficulty: "hard",
    category: "Science: Computers",
    question: "Who is the original author of the realtime physics engine called PhysX?",
    correct_answer: "NovodeX",
    incorrect_answers: ["Ageia", "Nvidia", "AMD"],
  },
  {
    type: "multiple",
    difficulty: "hard",
    category: "Science: Computers",
    question: "What was the name of the first Bulgarian personal computer?",
    correct_answer: "IMKO-1",
    incorrect_answers: ["Pravetz 82", "Pravetz 8D", "IZOT 1030"],
  },
  {
    type: "multiple",
    difficulty: "hard",
    category: "Science: Computers",
    question: "The Harvard architecture for micro-controllers added which additional bus?",
    correct_answer: "Instruction",
    incorrect_answers: ["Address", "Data", "Control"],
  },
];

window.questionsEasy = questionsEasy;
window.questionsMedium = questionsMedium;
window.questionsHard = questionsHard;