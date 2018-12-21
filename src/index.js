#! /usr/bin/env node

const boxen = require('boxen')
const { bold, yellow, cyan } = require('chalk').default

const info = [
  bold('Siarhei Melnik'),
  'Senior Software Engineer at EPAM Systems',
  '',
  // `${bold('Work:     ')}${cyan('Senior Software Engineer at EPAM Systems')}`,
  `${bold('GitHub:   ')}${cyan('https://github.com/SiarheiMelnik')}`,
  `${bold('Twitter:  ')}${cyan('https://twitter.com/m_siarhei')}`,
  `${bold('LinkedIn: ')}${cyan(
    'https://www.linkedin.com/in/siarhei-melnik-a8b77976/'
  )}`
]

const style = {
  margin: 1,
  padding: 1
}

process.stdout.write(`${yellow(boxen(info.join('\n'), style))}\n\n`)
