export const niceZone = (zone) => (
  zone.replace('/', ' - ').replace(/_/g, ' ')
)
