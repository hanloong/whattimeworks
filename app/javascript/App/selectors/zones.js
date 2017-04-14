const getZonesState = ({ sourceZone, zones }) => {
  return [sourceZone, ...zones]
}

module.exports = getZonesState
