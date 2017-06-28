var salesTaxRates = {
  AB: 0.05,
  BC: 0.12,
  SK: 0.10
};

var companySalesData = [
  {
    name: "Telus",
    province: "BC",
    sales: [ 100, 200, 400 ]
  },
  {
    name: "Bombardier",
    province: "AB",
    sales: [ 80, 20, 10, 100, 90, 500 ]
  },
  {
    name: "Telus",
    province: "SK",
    sales: [ 500, 100 ]
  }
];

/* Expected Results:
{
  Telus: {
    totalSales: 1300
    totalTaxes: 144
  },
  Bombardier: {
    totalSales: 800,
    totalTaxes: 40
  }
}
*/

var compSales = {};
function calculateSalesTax(salesData, taxRates){
  // console.log('\n', salesData[0].sales[0]);
  for (compNum in salesData){
    totalSales = 0;
    var province = salesData[compNum].province;
    var key = salesData[compNum].name;

    //CALCULATES TOTAL SALE PER OBJECT ITEM
    for (i in salesData[compNum].sales){
      totalSales += salesData[compNum].sales[i];
      totalTaxes = totalSales * taxRates[province];

    }
      if (compSales[key]){
        compSales[key].totalSales += totalSales;
        compSales[key].totalTaxes += totalTaxes;
    } else{
      compSales[key] = {};
      compSales[key].totalSales = totalSales;
      compSales[key].totalTaxes = totalTaxes;
    }
  }
  return compSales;
}


var results = calculateSalesTax(companySalesData, salesTaxRates);
console.log(results);



