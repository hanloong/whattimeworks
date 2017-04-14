import getZonesState from './zones'

test('gets all the zones', () => {
  let zones = getZonesState({
    sourceZone: 'Sydney',
    zones: ['Other place']
  })

  expect(zones).toEqual(['Sydney', 'Other place'])
})
