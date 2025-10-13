function underline(text) {
  return text + '-'.repeat(text.length - 1);
}

function displayOrderedItems(orderedItems) {
  const message = '\nitems you ordered :\n';
  console.log(underline(message));

  for (let iterator = 0; iterator < orderedItems.length; iterator += 2) {
    console.log(`${orderedItems[iterator]} : ${orderedItems[iterator + 1]}`);
  }
  console.log("\n after sometime collect your order\n");
  teaCounter();
}

function maxOrderLimitReached(itemCount, itemAmount, item, orderedItems) {
  itemCount = itemCount - itemAmount;
  itemAmount = 4 - itemCount;
  orderedItems.push(item, itemAmount);
  console.log('\nyou are allowed to access only 4 items at a time\n');
  displayOrderedItems(orderedItems);
}

function quantity(item, items, orderedItems, itemCount) {
  let itemAmount = parseInt(prompt(`\nenter how many '${item}' you want :\t`));
  itemCount = itemCount + itemAmount;
  const orderLimit = 4;
  console.log(itemCount)
  if (itemCount > orderLimit) {
    maxOrderLimitReached(itemCount, itemAmount, item, orderedItems);
    return;
  }

  orderedItems.push(item, itemAmount);
  if (confirm('\ndo you want to order any other items ')) {
    return orderItems(items, orderedItems, itemCount);
  }
  return displayOrderedItems(orderedItems);
}

function orderItems(items, orderedItems, itemCount) {
  const item = parseInt(prompt('\nenter which item you want :\t'));
  switch (item) {
    case 1:
    case 2:
    case 3:
    case 4:
    case 5:
    case 6:
    case 7:
     quantity(items[item - 1], items, orderedItems, itemCount); 
     return;
    default:
      console.log('\nsorry !no such item is available \norder the items which are available');
      orderItems(items, orderedItems, orderedItems, itemCount);
  }
}

function displayAvailableItems() {
  const items = ["tea", 'coffee', 'milk',
    'badham milk', 'black', 'black coffee',
    'lime tea\n'];

  for (let index = 0; index < items.length; index++) {
    const item = items[index];
    console.log(index + 1, '.', item);
  }

  orderItems(items, [], 0);
  // return;
}

function validateId(id) {
  if (id < 50000 && id > 10000) {
    return true;
  }
  return false;
}

function EmployeeId() {
  const EmpId = prompt("\nenter your id : \n\n\t");
  const yourEmpId = parseInt(EmpId);
  
  if (EmpId === 'EOD') {
    return;
  }

  if (!validateId(yourEmpId)) {
    console.log('this type of id does not exist ! retry...');
    EmployeeId();
  }
  displayAvailableItems();
}

function teaCounter() {
  EmployeeId();
}

teaCounter();
