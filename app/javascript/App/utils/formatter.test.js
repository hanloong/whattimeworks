import { niceZone } from './formatter'

test('formats time zone nicely', () => {
  const zone = niceZone('Region/Some_Place')
  expect(zone).toEqual('Region - Some Place')
})
