const Database = require('../db/config')

/* let data = {
  name: 'Gabriel',
  avatar: 'https://github.com/GabrielPDB.png',
  'monthly-budget': 3000,
  'days-per-week': 5,
  'hours-per-day': 5,
  'vacation-per-year': 4,
  'value-hour': 75
} */

module.exports = {
  async get() {
    const db = await Database()

    const data = await db.get(`SELECT * FROM profile`)

    await db.close()

    return {
      name: data.name,
      avatar: data.avatar,
      'monthly-budget': data.monthly_budget,
      'hours-per-day': data.hours_per_day,
      'days-per-week': data.days_per_week,
      'vacation-per-year': data.vacation_per_year,
      'value-hour': data.value_hour
    }
  },
  async update(newData) {
    const db = await Database()

    db.run(`
    UPDATE profile SET 
      name = '${newData.name}',
      avatar = '${newData.avatar}',
      monthly_budget = ${newData['monthly-budget']},
      days_per_week = ${newData['days-per-week']},
      hours_per_day = ${newData['hours-per-day']},
      vacation_per_year = ${newData['vacation-per-year']},
      value_hour = ${newData['value-hour']}
    `)

    await db.close()
  }
}
