const express = require('express')
const nunjucks = require('nunjucks')
const server = express()
const proffys = [{
    name: 'Victor Cintra Santos',
    avatar: 'https://avatars0.githubusercontent.com/u/44508432?s=460&u=4e7761dd677bcc94694634df18089125ef82bbb9&v=4',
    whatsapp: '134',
    bio: 'Entusiasta das melhores tecnologias de química avançada.<br><br>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam hendrerit, nisi at dignissim gravida, risus sapien mollis mi, ac ornare nibh mi nec sapien. Sed nec aliquam ligula.',
    subject: 'Química',
    cost: 20,
    weekday: [0],
    time_from: [720],
    time_to: [1220]
}, {
    name: 'Laura Marchione',
    avatar: 'https://avatars2.githubusercontent.com/u/54602809?s=460&u=174daed61cd095503da2648eb6e74cb662df38fa&v=4',
    whatsapp: '256',
    bio: 'Entusiasta das melhores tecnologias de física avançada.<br><br>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam hendrerit, nisi at dignissim gravida, risus sapien mollis mi, ac ornare nibh mi nec sapien. Sed nec aliquam ligula.',
    subject: 'Física',
    cost: 40,
    weekday: [0],
    time_from: [720],
    time_to: [1220]
}]

const subjects = [
    "Artes",
    "Biologia",
    "Ciências",
    "Educação física",
    "Física",
    "Geografia",
    "História",
    "Matemática",
    "Português",
    "Química"
]

const weekdays = [
    "Domingo",
    "Segunda-feira",
    "Terça-feira",
    "Quarta-feira",
    "Quinta-feira",
    "Sexta-feira",
    "Sábado"
]

// configuring template engine
nunjucks.configure('src/views', {
    express: server,
    noCache: true,
})

function getSubject(subjectNumber) {
    // check if ti is a number and subtract one since starts at 0
    const arrayPosition = +subjectNumber-1
    return subjects[arrayPosition]
}

function getLandingPage(req,res) {
    return res.render('index.html')
}

function getStudyPage(req,res) {
    const filters = req.query
    return res.render('study.html', { proffys, filters, subjects, weekdays })
}

function getGiveClassesPage(req,res) {
    const data = req.query
    const isDataEmpty = Object.keys(data).length == 0
    // adding data on proffys object and redirecting to study page
    if (!isDataEmpty) {
        data.subject = getSubject(data.subject)
        proffys.push(data)
        return res.redirect("/study")
    }
    return res.render('give-classes.html', { subjects, weekdays })
}

// running aplication server
server.use(express.static('public'))
    .get('/', getLandingPage)
    .get('/study', getStudyPage)
    .get('/give-classes', getGiveClassesPage)
    .listen(5500)