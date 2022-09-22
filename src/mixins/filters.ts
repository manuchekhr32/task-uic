import moment from 'moment';

export const useFiltersMixin = () => {
  const dateFormat = (value: string) => {
    return moment(value).format('DD.MM.YYYY')
  };
  
  const uzs = (value: number) => {
    return new Intl.NumberFormat('uz-SM').format(value).replace(/,/g, ' ');
  }
  
  const statusColor = (value: string) => {
    value = value.toLowerCase();
    if (value === 'yangi') return '!text-dodgerblue';
    if (value === 'moderatsiyada') return '!text-gold';
    if (value === 'tasdiqlangan') return '!text-my-green';
    if (value === 'bekor qilingan') return '!text-dark-silver';
    return '';
  }

  return { dateFormat, uzs, statusColor };
}