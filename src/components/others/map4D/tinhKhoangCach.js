function haversineDistance(lat1, lon1, lat2, lon2) {
  const R = 6371; // Bán kính trái đất (km)

  // Chuyển đổi độ thành radian
  const lat1Rad = toRadians(lat1);
  const lon1Rad = toRadians(lon1);
  const lat2Rad = toRadians(lat2);
  const lon2Rad = toRadians(lon2);

  // Tính toạ độ haversine
  const dlat = lat2Rad - lat1Rad;
  const dlon = lon2Rad - lon1Rad;
  const a =
    Math.sin(dlat / 2) ** 2 +
    Math.cos(lat1Rad) * Math.cos(lat2Rad) * Math.sin(dlon / 2) ** 2;

  // Tính khoảng cách
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  const distance = R * c;
  return distance;
}

function toRadians(degrees) {
  return degrees * (Math.PI / 180);
}

export function findNearestCoordinate(origin, coordinates) {
  let distances = [];

  for (const coord of coordinates) {
    const distance = haversineDistance(
      origin.latitude,
      origin.longitude,
      coord.x,
      coord.y,
    );
    distances.push({coordinate: coord, distance});
  }

  distances.sort((a, b) => a.distance - b.distance);

  return distances;
}

export function sortStore(origin, data) {
//   data.forEach(item => {
//     //   item.distance = haversineDistance(origin.latitude, origin.longitude, parseFloat(item.location.x), parseFloat(item.location.y));
//     item = {
//       ...item,
//       distance: haversineDistance(
//         origin.latitude,
//         origin.longitude,
//         parseFloat(item.location.x),
//         parseFloat(item.location.y),
//       ),
//     };
//   });
    data = data.map(item => {
        return {
            ...item,
            distance: haversineDistance(
                origin.latitude,
                origin.longitude,
                parseFloat(item.location.x),
                parseFloat(item.location.y),
            ),
        };
    }
    );

  data.sort((a, b) => a.distance - b.distance);
  return data;
}

// Ví dụ sử dụng
// const originCoordinate = { lat: 52.5200, lon: 13.4050 };
// const coordinatesArray = [
//     { lat: 48.8566, lon: 2.3522 },
//     { lat: 51.5074, lon: -0.1278 },
//     { lat: 40.7128, lon: -74.0060 },
// ];

// const sortedDistances = findNearestCoordinate(originCoordinate, coordinatesArray);
// console.log("Toạ độ gần nhất:", sortedDistances[0].coordinate);
// console.log("Khoảng cách từ bé đến lớn:", sortedDistances.map(item => item.distance));
