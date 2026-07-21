const dates = [
  "2023-05-12",
  "2021-01-05",
  "2024-11-30",
  "2021-01-01",
  "2023-05-10",
  "2022-07-15",
  "2024-02-28",
  "2020-12-01"
];

const formattedDates = dates.map(formatDate);

function formatDate(element){
    const changeDash = element.split('-');
    return `${changeDash[2]}/${changeDash[1]}/${changeDash[0]}`;
}

console.log(formattedDates);


array.forEach(element => {
    
});