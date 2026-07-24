const fs = require('fw');
let c = fs.readFileSync('src/data/portfolioData.ts', 'utf8');

c = c.replace(/am:\s*'ҩك\s*category:\s+'paintings',/, "am: 'ٙوقؙ فيجات ط٨يب - &وقؙ صرإ'
    },
    category: 'paintings',");

fs.writeFileSync('src/data/portfolioData.ts', c, 'utf8');
console.log('Done');