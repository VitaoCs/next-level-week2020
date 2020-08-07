document.querySelector('#add-time').addEventListener('click', cloneField)

function cloneField() {
    const scheduleFieldContainer = document.querySelector('.schedule-item').cloneNode(true)
    const fields = scheduleFieldContainer.querySelectorAll('input')
    fields.forEach((field) => field.value = '')
    document.querySelector('#schedule-items').appendChild(scheduleFieldContainer)
}