import seeder from '@cleverbeagle/seeder'
import { Meteor } from 'meteor/meteor'
import { Events } from '../../api/Events/events'

const eventsSeed = userId => ({
  collection: Events,
  environments: ['development', 'staging'],
  noLimit: true,
  modelCount: 5,
  model(dataIndex) {
    return {
      owner: userId,
      title: `Evento #${dataIndex + 1}`,
      body: `This is the body of event #${dataIndex + 1}`
    }
  }
});

seeder(Meteor.users, {
  environments: ['development', 'staging'],
  noLimit: true,
  data: [{
    email: 'admin@admin.com',
    password: 'senha',
    profile: {
      firstName: 'Johny',
      lastName: 'Be Good',
      phone: '1-739-346-4124'
    },
    roles: ['admin'],
    data(userId) {
      return eventsSeed(userId)
    }
  }],
  modelCount: 5,
  model(index, faker) {
    const userCount = index + 1
    return {
      email: `usuario+${userCount}@test.com`,
      password: 'senha',
      profile: {
        firstName: faker.name.firstName(),
        lastName: faker.name.lastName(),
        phone: faker.phone.phoneNumber()
      },
      roles: ['user'],
      data(userId) {
        return eventsSeed(userId)
      }
    }
  }
})