function createEmployeeRecord(array) {
  let employeeRecord = {
    firstName: array[0],
    familyName: array[1],
    title: array[2],
    payPerHour: array[3],
    timeInEvents: [],
    timeOutEvents: [],
  };
  return employeeRecord;
}

function createEmployeeRecords(records) {
  return records.map((employee) => createEmployeeRecord(employee));
}

function createTimeInEvent(employeeRecord, datestamp) {
  let [date, hour] = datestamp.split(" ");

  let timeEvent = {
    type: "TimeIn",
    date: date,
    hour: Number(hour),
  };

  employeeRecord.timeInEvents.push(timeEvent);

  return employeeRecord;
}

function createTimeOutEvent(employeeRecord, datestamp) {
  let [date, hour] = datestamp.split(" ");

  let timeEvent = {
    type: "TimeOut",
    date: date,
    hour: Number(hour),
  };

  employeeRecord.timeOutEvents.push(timeEvent);

  return employeeRecord;
}

function hoursWorkedOnDate(employeeRecord, targetDate) {
  let startHour = employeeRecord.timeInEvents.find(
    (timeEvent) => timeEvent.date === targetDate
  ).hour;

  let endHour = employeeRecord.timeOutEvents.find(
    (timeEvent) => timeEvent.date === targetDate
  ).hour;

  return (endHour - startHour) / 100;
}

function wagesEarnedOnDate(employeeRecord, targetDate) {
  return (
    employeeRecord.payPerHour * hoursWorkedOnDate(employeeRecord, targetDate)
  );
}

function wagesEarnedOnDate(employeeRecord, targetDate) {
  return (
    employeeRecord.payPerHour * hoursWorkedOnDate(employeeRecord, targetDate)
  );
}

function allWagesFor(employeeRecord) {
  let dates = employeeRecord.timeOutEvents.map((timeEvent) => timeEvent.date);
  let sum = 0;
  dates.forEach((date) => (sum += wagesEarnedOnDate(employeeRecord, date)));
  return sum;
}

function calculatePayroll(allEmployees) {
  let Amount = 0;

  allEmployees.forEach((employee) => {
    Amount += allWagesFor(employee);
  });

  return Amount;
}
