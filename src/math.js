let modes = {
    نوب: [-3, 3,-3, 3, '+-', 15000, 10],
    سهل: [-10, 10, -10, 10, '*/+-', 20000, 40],
    متوسط: [-40, 40, -20, 20, '*/+-', 40000, 150],
    صعب: [-100, 100, -70, 70, '*/+-', 60000, 350],
    اسطوري: [-999999, 999999, -999999, 999999, '*/', 99999, 9999],
    خارق: [-99999999999, 99999999999, -99999999999, 999999999999, '*/', 30000, 35000],
    مستحيل: [-999999999999999, 999999999999999, -999, 999, '/', 30000, 50000]
  } 
  
  let operators = {
    '+': '+',
    '-': '-',
    '*': '×',
    '/': '÷'
  }

  function randomInt(from, to) {
    if (from > to) [from, to] = [to, from]
    from = Math.floor(from)
    to = Math.floor(to)
    return Math.floor((to - from) * Math.random() + from)
  }
  
  function pickRandom(list) {
    return list[Math.floor(Math.random() * list.length)]
  }

  function genMath(mode) {
      return new Promise((resolve, reject) => {
        let [a1, a2, b1, b2, ops, time, bonus] = modes[mode]
        let a = randomInt(a1, a2)
        let b = randomInt(b1, b2)
        let op = pickRandom([...ops])
        let result = (new Function(`return ${a} ${op.replace('/', '*')} ${b < 0 ? `(${b})` : b}`))()
        if (op == '/') [a, result] = [result, a]
        hasil = { 
            soal: `${a} ${operators[op]} ${b}`,
            mode: mode,
            waktu: time,
            hadiah: bonus,
            jawaban: result
         }
         resolve(hasil)
      })
  }
  
module.exports = { modes, operators, randomInt, pickRandom, genMath }
