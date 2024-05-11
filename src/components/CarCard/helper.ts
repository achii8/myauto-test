export const getFuelType = (typeId: number) => {
  switch (typeId) {
    case 1:
      return 'ბენზინი';
    case 3:
      return 'დიზელი';
    case 7:
      return 'ელექტრო';
    case 6:
      return 'ჰიბრიდი';
    case 10:
      return 'დატენვადი ჰიბრიდი';
    case 9:
      return 'თხევადი გაზი';
    case 8:
      return 'ბუნებრივი გაზი';
    case 12:
      return 'წყალბადი';
    default:
      return 'ბუნებრივი გაზი';
  }
};

export const getGearType = (typeId: number) => {
  switch (typeId) {
    case 1:
      return 'მექანიკა';
    case 2:
      return 'ავტომატიკა';
    case 3:
      return 'ტიპტრონიკი';
    case 4:
      return 'ვარიატორი';
    default:
      return 'მექანიკა';
  }
};
