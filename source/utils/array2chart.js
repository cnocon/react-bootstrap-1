export function array2chart(array) {
  let obj = array.shift(),
    formattedData = {labels: [obj.name], datasets:[]},
    map = new Map(); //this is an ES6 feature

  delete obj.name;

  for(var item in obj) {
    let ds = {label: item, data: [obj[item]]};
    formattedData.datasets.push(ds);
    map[item] = ds;
  };

  array.forEach((obj, i, a) => {
    formattedData.labels.push(obj.name);
    delete obj.name;
    for(let item in obj) {
      map[item].data.push(obj[item]);
    }
  });

  return formattedData;
}