export const formatCurrency = value => {
  if(!value) return;
  return value.toLocaleString('vi-VN', {
    style: 'currency',
    currency: 'VND',
  });
};
