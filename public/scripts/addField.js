document.querySelector('#add-time').addEventListener('click', cloneField)
document.querySelector('#schedule-close-button').addEventListener('click', closeField)

function cloneField() {
    const scheduleFieldContainer = document.querySelector('.schedule-item').cloneNode(true)
    const fields = scheduleFieldContainer.querySelectorAll('input')
    fields.forEach((field) => field.value = '')
    document.querySelector('#schedule-items').appendChild(scheduleFieldContainer)
}

function closeField() {
    console.log('teste')
}