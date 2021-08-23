let data = [
  {
    id: 1,
    name: 'Pizzaria',
    'daily-hours': 2,
    'total-hours': 1,
    created_at: Date.now(),
    budget: 4500
  },
  {
    id: 2,
    name: 'OneTwo Project',
    'daily-hours': 3,
    'total-hours': 47,
    created_at: Date.now(),
    budget: 4500
  }
]

module.exports = {
  get() {
    return data
  },
  update(newJobs) {
    data = newJobs
  },
  delete(id) {
    data = data.filter(job => Number(job.id) !== Number(id))
  },
  create(newJob) {
    data.push(newJob)
  }
}
