import faker from 'faker'
import { randomize } from '../utils/helpers'

// base user = prospective student
class User {
  constructor() {
    this._id = faker.random.uuid()
    this.email = faker.internet.email()
    this._firstName = faker.name.firstName()
    this._lastName = faker.name.lastName()
    this.interests = [randomize([{_id: 1}, {_id: 2}, {_id: 3}, {_id: 4}])]
    this.about = faker.lorem.paragraph()
    this.hometown = {
      city: faker.address.city(),
      state: faker.address.state(),
      zip: faker.address.zipCode(),
      country: 1,
    }
  }
}

// student user
class Student {
  constructor() {
    this._id = faker.random.uuid()
    this.user = new User()
    this.schoolEmail = faker.internet.email()
    this.verified = randomize([true, false])
    this.institution = randomize([{_id: 1}, {_id: 2}])
    this.ambassador = randomize([true, false])
    this.admin = false
    this.major = [randomize([{_id: 1}, {_id: 2}, {_id: 3}, {_id: 4}])]
    this.class = randomize([2017, 2018, 2019, 2020])
    this.graduated = this.class === 2017 ? true : false
  }
}

const DB_DATA = {
  students: [
    new Student(),
    new Student(),
    new Student(),
    new Student(),
    new Student(),
    new Student(),
  ]
}

function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms))
}

export function fetchStudents(institutionId) {
  return delay(500).then(() => {
    if (!institutionId) return DB_DATA.students
    return DB_DATA.students.filter(i => i.institution._id === institutionId)
  })
}
